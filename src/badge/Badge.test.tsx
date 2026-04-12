import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Badge from './index'

describe('Badge', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders standalone badge with text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('has badge_root class', () => {
    render(<Badge>Test</Badge>)
    expect(screen.getByText('Test')).toHaveClass('badge_root')
  })

  it('has data-slot="root"', () => {
    render(<Badge>Test</Badge>)
    expect(screen.getByText('Test')).toHaveAttribute('data-slot', 'root')
  })

  it('has role="status"', () => {
    render(<Badge>Test</Badge>)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  // ── Variants ─────────────────────────────────────────────────────

  it.each(['default', 'solid', 'outline', 'soft'] as const)(
    'renders variant=%s',
    (variant) => {
      render(<Badge variant={variant}>{variant}</Badge>)
      expect(screen.getByText(variant)).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Badge color={color}>{color}</Badge>)
      expect(screen.getByText(color)).toBeInTheDocument()
    },
  )

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Badge size={size}>{size}</Badge>)
      expect(screen.getByText(size)).toBeInTheDocument()
    },
  )

  // ── Shapes ───────────────────────────────────────────────────────

  it.each(['rounded', 'pill', 'circle'] as const)(
    'renders shape=%s',
    (shape) => {
      render(<Badge shape={shape}>{shape.charAt(0)}</Badge>)
      expect(screen.getByText(shape.charAt(0))).toBeInTheDocument()
    },
  )

  // ── Count ────────────────────────────────────────────────────────

  describe('count', () => {
    it('renders count as content', () => {
      render(<Badge count={5} />)
      expect(screen.getByText('5')).toBeInTheDocument()
    })

    it('caps at maxCount with + indicator', () => {
      render(<Badge count={150} maxCount={99} />)
      expect(screen.getByText('99+')).toBeInTheDocument()
    })

    it('uses custom maxCount', () => {
      render(<Badge count={15} maxCount={10} />)
      expect(screen.getByText('10+')).toBeInTheDocument()
    })

    it('hides when count=0 and showZero=false (default)', () => {
      const { container } = render(<Badge count={0} />)
      expect(container.textContent).toBe('')
    })

    it('shows 0 when showZero=true', () => {
      render(<Badge count={0} showZero />)
      expect(screen.getByText('0')).toBeInTheDocument()
    })

    it('sets aria-label for numeric count', () => {
      render(<Badge count={7} />)
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', '7 notifications')
    })
  })

  // ── Dot ──────────────────────────────────────────────────────────

  describe('dot', () => {
    it('renders dot indicator', () => {
      const { container } = render(<Badge dot />)
      expect(container.querySelector('.badge_root')).toBeInTheDocument()
    })

    it('dot has aria-label "Status indicator"', () => {
      render(<Badge dot />)
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Status indicator')
    })

    it('dot does not render text content', () => {
      const { container } = render(<Badge dot />)
      expect(container.querySelector('.badge_root')?.textContent).toBe('')
    })

    it('dot with processing shows pulse animation', () => {
      const { container } = render(<Badge dot processing />)
      expect(container.querySelector('.badge_root')).toHaveClass('animate-pulse')
    })
  })

  // ── Floating mode ────────────────────────────────────────────────

  describe('floating mode', () => {
    it('renders badge floating over children when count + children', () => {
      render(
        <Badge count={3}>
          <button>Notifications</button>
        </Badge>,
      )
      expect(screen.getByText('Notifications')).toBeInTheDocument()
      expect(screen.getByText('3')).toBeInTheDocument()
    })

    it('renders dot floating over children', () => {
      const { container } = render(
        <Badge dot>
          <button>Mail</button>
        </Badge>,
      )
      expect(screen.getByText('Mail')).toBeInTheDocument()
      expect(container.querySelector('.badge_root')).toBeInTheDocument()
    })

    it('wrapper has data-slot="wrapper"', () => {
      const { container } = render(
        <Badge count={1}>
          <div>Child</div>
        </Badge>,
      )
      expect(container.querySelector('[data-slot="wrapper"]')).toBeInTheDocument()
    })

    it('hides count but keeps children when count=0 and showZero=false', () => {
      render(
        <Badge count={0}>
          <button>Bell</button>
        </Badge>,
      )
      expect(screen.getByText('Bell')).toBeInTheDocument()
      expect(screen.queryByText('0')).not.toBeInTheDocument()
    })

    it.each(['top-right', 'top-left', 'bottom-right', 'bottom-left'] as const)(
      'renders floating at placement=%s',
      (placement) => {
        render(
          <Badge count={1} placement={placement}>
            <div>Content</div>
          </Badge>,
        )
        expect(screen.getByText('1')).toBeInTheDocument()
      },
    )

    it('applies offset to floating badge', () => {
      render(
        <Badge count={1} offset={[10, -5]}>
          <div>Content</div>
        </Badge>,
      )
      expect(screen.getByText('1')).toBeInTheDocument()
    })
  })

  // ── Icon ─────────────────────────────────────────────────────────

  describe('icon', () => {
    it('renders icon inside badge', () => {
      render(
        <Badge icon={<span data-testid="star-icon">★</span>}>
          Featured
        </Badge>,
      )
      expect(screen.getByTestId('star-icon')).toBeInTheDocument()
      expect(screen.getByText('Featured')).toBeInTheDocument()
    })

    it('icon has data-slot="icon"', () => {
      const { container } = render(
        <Badge icon={<span>★</span>}>Text</Badge>,
      )
      expect(container.querySelector('[data-slot="icon"]')).toBeInTheDocument()
    })

    it('renders icon-only badge (no text)', () => {
      render(<Badge icon={<span data-testid="ic">✓</span>} />)
      expect(screen.getByTestId('ic')).toBeInTheDocument()
    })
  })

  // ── Invisible ────────────────────────────────────────────────────

  it('applies invisible styles', () => {
    const { container } = render(<Badge invisible>Hidden</Badge>)
    expect(container.querySelector('.badge_root')).toHaveClass('opacity-0', 'scale-0')
  })

  // ── Processing ───────────────────────────────────────────────────

  it('applies processing pulse', () => {
    render(<Badge processing>Live</Badge>)
    expect(screen.getByText('Live')).toHaveClass('animate-pulse')
  })

  // ── Standalone ───────────────────────────────────────────────────

  it('forces standalone mode even with children', () => {
    render(<Badge standalone>Standalone Text</Badge>)
    expect(screen.getByText('Standalone Text')).toBeInTheDocument()
  })

  // ── Content prop ─────────────────────────────────────────────────

  it('renders content prop over count', () => {
    render(<Badge count={10} content="NEW" />)
    expect(screen.getByText('NEW')).toBeInTheDocument()
    expect(screen.queryByText('10')).not.toBeInTheDocument()
  })

  it('renders content prop as custom ReactNode', () => {
    render(<Badge content={<span data-testid="custom">★</span>} />)
    expect(screen.getByTestId('custom')).toBeInTheDocument()
  })

  // ── classNames ───────────────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to badge root', () => {
      render(<Badge className="my-badge">Test</Badge>)
      expect(screen.getByText('Test')).toHaveClass('my-badge')
    })

    it('applies classNames.root', () => {
      render(<Badge classNames={{ root: 'cn-root' }}>Test</Badge>)
      expect(screen.getByText('Test')).toHaveClass('cn-root')
    })

    it('applies classNames.wrapper on floating badge', () => {
      const { container } = render(
        <Badge count={1} classNames={{ wrapper: 'cn-wrap' }}>
          <div>C</div>
        </Badge>,
      )
      expect(container.querySelector('[data-slot="wrapper"]')).toHaveClass('cn-wrap')
    })

    it('applies classNames.icon', () => {
      const { container } = render(
        <Badge icon={<span>★</span>} classNames={{ icon: 'cn-icon' }}>
          Text
        </Badge>,
      )
      expect(container.querySelector('[data-slot="icon"]')).toHaveClass('cn-icon')
    })

    it('applies wrapperClassName (deprecated) on floating badge', () => {
      const { container } = render(
        <Badge count={1} wrapperClassName="old-wrap">
          <div>C</div>
        </Badge>,
      )
      expect(container.querySelector('[data-slot="wrapper"]')).toHaveClass('old-wrap')
    })

    it('classNames.wrapper and wrapperClassName both apply', () => {
      const { container } = render(
        <Badge count={1} classNames={{ wrapper: 'new-wrap' }} wrapperClassName="old-wrap">
          <div>C</div>
        </Badge>,
      )
      const wrapper = container.querySelector('[data-slot="wrapper"]')!
      expect(wrapper).toHaveClass('new-wrap')
      expect(wrapper).toHaveClass('old-wrap')
    })
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref to badge element', () => {
    const ref = { current: null }
    render(<Badge ref={ref}>Test</Badge>)
    expect(ref.current).toBeInstanceOf(HTMLSpanElement)
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with no props (empty badge)', () => {
      const { container } = render(<Badge />)
      expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
    })

    it('count=0 with children still shows children', () => {
      render(
        <Badge count={0}>
          <button>Bell</button>
        </Badge>,
      )
      expect(screen.getByText('Bell')).toBeInTheDocument()
    })

    it('floating content prop over children', () => {
      render(
        <Badge content="HOT">
          <button>Item</button>
        </Badge>,
      )
      expect(screen.getByText('Item')).toBeInTheDocument()
      expect(screen.getByText('HOT')).toBeInTheDocument()
    })

    it('very large count with default maxCount', () => {
      render(<Badge count={99999} />)
      expect(screen.getByText('99+')).toBeInTheDocument()
    })
  })
})
