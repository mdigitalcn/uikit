import { describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { Avatar, AvatarGroup } from './index'

describe('Avatar', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders with image src', () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="User" />)
    const img = screen.getByAltText('User')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'https://example.com/photo.jpg')
  })

  it('renders data-slot="root"', () => {
    const { container } = render(<Avatar name="Test" />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders avatar_root class', () => {
    const { container } = render(<Avatar name="Test" />)
    expect(container.querySelector('.avatar_root')).toBeInTheDocument()
  })

  // ── Initials ─────────────────────────────────────────────────────

  describe('initials', () => {
    it('generates from two-word name', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('generates from single-word name', () => {
      render(<Avatar name="John" />)
      expect(screen.getByText('JO')).toBeInTheDocument()
    })

    it('generates from three-word name (first + last)', () => {
      render(<Avatar name="John Michael Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('uses fallback text over name', () => {
      render(<Avatar name="John Doe" fallback="AB" />)
      expect(screen.getByText('AB')).toBeInTheDocument()
      expect(screen.queryByText('JD')).not.toBeInTheDocument()
    })

    it('truncates fallback to 2 chars', () => {
      render(<Avatar fallback="Hello" />)
      expect(screen.getByText('HE')).toBeInTheDocument()
    })

    it('uppercases initials', () => {
      render(<Avatar name="john doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  // ── Fallback chain ───────────────────────────────────────────────

  describe('fallback chain', () => {
    it('shows image when src loads', () => {
      render(<Avatar src="photo.jpg" alt="User" name="John Doe" />)
      expect(screen.getByAltText('User')).toBeInTheDocument()
      expect(screen.queryByText('JD')).not.toBeInTheDocument()
    })

    it('shows initials when no src', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByText('JD')).toBeInTheDocument()
    })

    it('shows custom icon when no src and no name', () => {
      render(<Avatar icon={<span data-testid="custom-icon">🎨</span>} />)
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
    })

    it('shows default User icon when nothing provided', () => {
      const { container } = render(<Avatar />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('shows initials after image error', async () => {
      const onError = vi.fn()
      render(<Avatar src="broken.jpg" name="Test User" onError={onError} />)
      fireEvent.error(screen.getByAltText('Test User'))
      await waitFor(() => {
        expect(screen.getByText('TU')).toBeInTheDocument()
        expect(onError).toHaveBeenCalled()
      })
    })

    it('resets error when src changes', async () => {
      const { rerender } = render(<Avatar src="broken.jpg" name="Test" />)
      fireEvent.error(screen.getByAltText('Test'))
      await waitFor(() => expect(screen.getByText('TE')).toBeInTheDocument())

      rerender(<Avatar src="new.jpg" name="Test" />)
      expect(screen.getByAltText('Test')).toHaveAttribute('src', 'new.jpg')
    })
  })

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Avatar size={size} name="Test" />)
      expect(screen.getByRole('img', { name: 'Test' })).toBeInTheDocument()
    },
  )

  // ── Shapes ───────────────────────────────────────────────────────

  it.each(['circle', 'square'] as const)(
    'renders shape=%s',
    (shape) => {
      render(<Avatar shape={shape} name="Test" />)
      expect(screen.getByRole('img', { name: 'Test' })).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Avatar name="Test" color={color} />)
      expect(screen.getByText('TE')).toBeInTheDocument()
    },
  )

  // ── Status indicator ─────────────────────────────────────────────

  describe('status', () => {
    it.each(['online', 'offline', 'away', 'busy'] as const)(
      'renders status=%s with aria-label',
      (status) => {
        render(<Avatar name="Test" status={status} />)
        expect(screen.getByLabelText(`Status: ${status}`)).toBeInTheDocument()
      },
    )

    it('status has data-slot="status"', () => {
      const { container } = render(<Avatar name="T" status="online" />)
      expect(container.querySelector('[data-slot="status"]')).toBeInTheDocument()
    })

    it('does not render status when not provided', () => {
      const { container } = render(<Avatar name="T" />)
      expect(container.querySelector('[data-slot="status"]')).not.toBeInTheDocument()
    })
  })

  // ── Badge ────────────────────────────────────────────────────────

  describe('badge', () => {
    it('renders numeric badge with role="status"', () => {
      render(<Avatar name="Test" badge={5} />)
      expect(screen.getByRole('status', { name: '5 notifications' })).toBeInTheDocument()
    })

    it('renders text badge', () => {
      render(<Avatar name="Test" badge="NEW" />)
      expect(screen.getByText('NEW')).toBeInTheDocument()
    })

    it('badge has data-slot="badge"', () => {
      const { container } = render(<Avatar name="T" badge={3} />)
      expect(container.querySelector('[data-slot="badge"]')).toBeInTheDocument()
    })

    it('does not render badge when not provided', () => {
      const { container } = render(<Avatar name="T" />)
      expect(container.querySelector('[data-slot="badge"]')).not.toBeInTheDocument()
    })
  })

  // ── Bordered / Disabled ──────────────────────────────────────────

  it('applies bordered ring', () => {
    const { container } = render(<Avatar name="T" bordered />)
    expect(container.querySelector('.avatar_root')).toBeInTheDocument()
  })

  it('shows disabled state with aria-disabled', () => {
    render(<Avatar name="Test" disabled />)
    expect(screen.getByRole('img', { name: 'Test' })).toHaveAttribute('aria-disabled', 'true')
  })

  // ── Accessibility ────────────────────────────────────────────────

  describe('accessibility', () => {
    it('non-image avatar has role="img"', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('non-image avatar has aria-label from name', () => {
      render(<Avatar name="John Doe" />)
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'John Doe')
    })

    it('non-image avatar uses alt over name for aria-label', () => {
      render(<Avatar name="John Doe" alt="JD Avatar" />)
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'JD Avatar')
    })

    it('image avatar does not have role="img" on root (img element handles it)', () => {
      const { container } = render(<Avatar src="photo.jpg" alt="User" />)
      const root = container.querySelector('[data-slot="root"]')!
      expect(root).not.toHaveAttribute('role')
    })

    it('image avatar has alt on img element', () => {
      render(<Avatar src="photo.jpg" alt="User Photo" />)
      expect(screen.getByAltText('User Photo')).toBeInTheDocument()
    })

    it('fallback initials are aria-hidden (label is on root)', () => {
      const { container } = render(<Avatar name="John Doe" />)
      const fallback = container.querySelector('[data-slot="fallback"]')!
      expect(fallback).toHaveAttribute('aria-hidden', 'true')
    })

    it('custom icon fallback is aria-hidden', () => {
      const { container } = render(<Avatar icon={<span>★</span>} />)
      const fallback = container.querySelector('[data-slot="fallback"]')!
      expect(fallback).toHaveAttribute('aria-hidden', 'true')
    })

    it('default icon has no name → aria-label fallback', () => {
      render(<Avatar />)
      expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'User avatar')
    })

    it('image uses lazy loading', () => {
      render(<Avatar src="photo.jpg" alt="User" />)
      expect(screen.getByAltText('User')).toHaveAttribute('loading', 'lazy')
    })
  })

  // ── classNames ───────────────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to root', () => {
      render(<Avatar name="Test" className="my-avatar" />)
      expect(screen.getByRole('img', { name: 'Test' })).toHaveClass('my-avatar')
    })

    it('applies classNames.root', () => {
      const { container } = render(<Avatar name="T" classNames={{ root: 'cn-root' }} />)
      expect(container.querySelector('[data-slot="root"]')).toHaveClass('cn-root')
    })

    it('applies classNames.image', () => {
      const { container } = render(<Avatar src="p.jpg" alt="X" classNames={{ image: 'cn-img' }} />)
      expect(container.querySelector('[data-slot="image"]')).toHaveClass('cn-img')
    })

    it('applies classNames.fallback', () => {
      const { container } = render(<Avatar name="T" classNames={{ fallback: 'cn-fb' }} />)
      expect(container.querySelector('[data-slot="fallback"]')).toHaveClass('cn-fb')
    })

    it('applies classNames.status', () => {
      const { container } = render(<Avatar name="T" status="online" classNames={{ status: 'cn-st' }} />)
      expect(container.querySelector('[data-slot="status"]')).toHaveClass('cn-st')
    })

    it('applies classNames.badge', () => {
      const { container } = render(<Avatar name="T" badge={3} classNames={{ badge: 'cn-badge' }} />)
      expect(container.querySelector('[data-slot="badge"]')).toHaveClass('cn-badge')
    })
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Avatar name="Test" ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with no props', () => {
      const { container } = render(<Avatar />)
      expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
    })

    it('renders with empty name', () => {
      const { container } = render(<Avatar name="" />)
      // Should show default icon, not empty initials
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('renders badge + status simultaneously', () => {
      const { container } = render(<Avatar name="T" badge={5} status="online" />)
      expect(container.querySelector('[data-slot="badge"]')).toBeInTheDocument()
      expect(container.querySelector('[data-slot="status"]')).toBeInTheDocument()
    })

    it('passes native HTML attributes', () => {
      render(<Avatar name="T" data-testid="my-avatar" id="av-1" />)
      expect(screen.getByTestId('my-avatar')).toBeInTheDocument()
      expect(screen.getByRole('img')).toHaveAttribute('id', 'av-1')
    })
  })
})

describe('AvatarGroup', () => {
  // ── Core ─────────────────────────────────────────────────────────

  it('renders multiple avatars', () => {
    render(
      <AvatarGroup>
        <Avatar name="User 1" />
        <Avatar name="User 2" />
        <Avatar name="User 3" />
      </AvatarGroup>,
    )
    expect(screen.getByText('U1')).toBeInTheDocument()
    expect(screen.getByText('U2')).toBeInTheDocument()
    expect(screen.getByText('U3')).toBeInTheDocument()
  })

  it('has role="group"', () => {
    render(<AvatarGroup><Avatar name="U" /></AvatarGroup>)
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('has aria-label with total count', () => {
    render(
      <AvatarGroup>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', 'Avatar group with 2 members')
  })

  // ── Max / overflow ───────────────────────────────────────────────

  it('limits visible avatars with max', () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="User 1" />
        <Avatar name="User 2" />
        <Avatar name="User 3" />
        <Avatar name="User 4" />
      </AvatarGroup>,
    )
    expect(screen.getByText('U1')).toBeInTheDocument()
    expect(screen.getByText('U2')).toBeInTheDocument()
    expect(screen.queryByText('U3')).not.toBeInTheDocument()
    expect(screen.getByText('+2')).toBeInTheDocument()
  })

  it('showTotal displays total instead of remainder', () => {
    render(
      <AvatarGroup max={2} showTotal>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
        <Avatar name="D" />
      </AvatarGroup>,
    )
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('renderSurplus for custom overflow', () => {
    render(
      <AvatarGroup max={1} renderSurplus={(n) => <div data-testid="custom">+{n} more</div>}>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>,
    )
    expect(screen.getByTestId('custom')).toHaveTextContent('+2 more')
  })

  it('overflow has data-slot="overflow"', () => {
    const { container } = render(
      <AvatarGroup max={1}>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(container.querySelector('[data-slot="overflow"]')).toBeInTheDocument()
  })

  // ── Prop inheritance ─────────────────────────────────────────────

  it('passes size to children', () => {
    render(
      <AvatarGroup size="lg">
        <Avatar name="A" />
      </AvatarGroup>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('passes bordered to children', () => {
    render(
      <AvatarGroup bordered>
        <Avatar name="A" />
      </AvatarGroup>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  // ── Styling ──────────────────────────────────────────────────────

  it('applies className', () => {
    render(<AvatarGroup className="my-group"><Avatar name="A" /></AvatarGroup>)
    expect(screen.getByRole('group')).toHaveClass('my-group')
  })

  it('applies classNames.root', () => {
    render(<AvatarGroup classNames={{ root: 'cn-root' }}><Avatar name="A" /></AvatarGroup>)
    expect(screen.getByRole('group')).toHaveClass('cn-root')
  })

  it('applies classNames.overflow', () => {
    const { container } = render(
      <AvatarGroup max={1} classNames={{ overflow: 'cn-over' }}>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(container.querySelector('[data-slot="overflow"]')).toHaveClass('cn-over')
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref', () => {
    const ref = { current: null }
    render(<AvatarGroup ref={ref}><Avatar name="A" /></AvatarGroup>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  // ── Edge cases ───────────────────────────────────────────────────

  it('renders with no max (shows all)', () => {
    render(
      <AvatarGroup>
        <Avatar name="A" />
        <Avatar name="B" />
        <Avatar name="C" />
      </AvatarGroup>,
    )
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('no overflow when max >= total', () => {
    const { container } = render(
      <AvatarGroup max={5}>
        <Avatar name="A" />
        <Avatar name="B" />
      </AvatarGroup>,
    )
    expect(container.querySelector('[data-slot="overflow"]')).not.toBeInTheDocument()
  })
})
