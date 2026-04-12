import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Button from '../button'

describe('Button', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders with data-slot="root"', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'root')
  })

  it('renders with button_root class', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toHaveClass('button_root')
  })

  it('spreads native HTML attributes', () => {
    render(<Button data-testid="my-btn" id="btn-1" title="My button">OK</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('data-testid', 'my-btn')
    expect(btn).toHaveAttribute('id', 'btn-1')
    expect(btn).toHaveAttribute('title', 'My button')
  })

  // ── Click handling ───────────────────────────────────────────────

  it('handles click events', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not fire onClick when disabled', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>No</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('does not fire onClick when loading', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()
    render(<Button loading onClick={handleClick}>Wait</Button>)
    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  // ── Variants ─────────────────────────────────────────────────────

  it.each(['solid', 'outline', 'soft', 'dashed', 'link', 'ghost'] as const)(
    'renders variant=%s',
    (variant) => {
      render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Button color={color}>{color}</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    },
  )

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Button size={size}>{size}</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    },
  )

  // ── Shapes ───────────────────────────────────────────────────────

  it.each(['rounded', 'pill', 'square'] as const)(
    'renders shape=%s',
    (shape) => {
      render(<Button shape={shape}>{shape}</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    },
  )

  // ── HTML type ────────────────────────────────────────────────────

  it('defaults to type="button" to prevent accidental form submits', () => {
    render(<Button>Button</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('allows type="submit"', () => {
    render(<Button type="submit">Submit</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('allows type="reset"', () => {
    render(<Button type="reset">Reset</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
  })

  // ── Disabled ─────────────────────────────────────────────────────

  it('sets disabled attribute when disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('sets aria-disabled when disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
  })

  it('does not set aria-disabled when enabled', () => {
    render(<Button>Enabled</Button>)
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-disabled', 'true')
  })

  // ── Loading ──────────────────────────────────────────────────────

  describe('loading state', () => {
    it('sets aria-busy="true"', () => {
      render(<Button loading>Loading</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    })

    it('renders sr-only "Loading" text for screen readers', () => {
      render(<Button loading>Save</Button>)
      expect(screen.getByText('Loading', { selector: '.sr-only' })).toBeInTheDocument()
    })

    it('renders spinner (data-slot="spinner")', () => {
      render(<Button loading>Save</Button>)
      expect(screen.getByRole('button').querySelector('[data-slot="spinner"]')).toBeInTheDocument()
    })

    it('disables the button', () => {
      render(<Button loading>Save</Button>)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    it('sets aria-disabled when loading', () => {
      render(<Button loading>Save</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true')
    })

    it('keeps children visible when no loadingText', () => {
      render(<Button loading>Save Changes</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('Save Changes')
    })

    it('replaces children with loadingText when provided', () => {
      render(<Button loading loadingText="Saving...">Save</Button>)
      expect(screen.getByText('Saving...')).toBeInTheDocument()
      expect(screen.queryByText('Save')).not.toBeInTheDocument()
    })

    it('replaces startSection with spinner', () => {
      render(
        <Button loading startSection={<span data-testid="mail-icon">📧</span>}>
          Send
        </Button>,
      )
      expect(screen.queryByTestId('mail-icon')).not.toBeInTheDocument()
      expect(screen.getByRole('button').querySelector('[data-slot="spinner"]')).toBeInTheDocument()
    })

    it('hides endSection while loading', () => {
      render(
        <Button loading endSection={<span data-testid="arrow">→</span>}>
          Next
        </Button>,
      )
      expect(screen.queryByTestId('arrow')).not.toBeInTheDocument()
    })

    it('hides both sections while loading', () => {
      render(
        <Button
          loading
          startSection={<span data-testid="start">S</span>}
          endSection={<span data-testid="end">E</span>}
        >
          Go
        </Button>,
      )
      expect(screen.queryByTestId('start')).not.toBeInTheDocument()
      expect(screen.queryByTestId('end')).not.toBeInTheDocument()
      expect(screen.getByRole('button').querySelector('[data-slot="spinner"]')).toBeInTheDocument()
    })

    it('does not set aria-busy when not loading', () => {
      render(<Button>Save</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-busy')
    })
  })

  // ── Sections ─────────────────────────────────────────────────────

  describe('startSection / endSection', () => {
    it('renders startSection with data-slot="start-section"', () => {
      render(<Button startSection={<span data-testid="icon">★</span>}>Star</Button>)
      const section = screen.getByRole('button').querySelector('[data-slot="start-section"]')
      expect(section).toBeInTheDocument()
      expect(within(section!).getByTestId('icon')).toBeInTheDocument()
    })

    it('renders endSection with data-slot="end-section"', () => {
      render(<Button endSection={<span data-testid="arrow">→</span>}>Next</Button>)
      const section = screen.getByRole('button').querySelector('[data-slot="end-section"]')
      expect(section).toBeInTheDocument()
      expect(within(section!).getByTestId('arrow')).toBeInTheDocument()
    })

    it('renders both sections simultaneously', () => {
      render(
        <Button
          startSection={<span data-testid="left">←</span>}
          endSection={<span data-testid="right">→</span>}
        >
          Nav
        </Button>,
      )
      expect(screen.getByTestId('left')).toBeInTheDocument()
      expect(screen.getByTestId('right')).toBeInTheDocument()
    })

    it('renders sections in correct DOM order (start → content → end)', () => {
      const { container } = render(
        <Button
          startSection={<span data-testid="start">S</span>}
          endSection={<span data-testid="end">E</span>}
        >
          Middle
        </Button>,
      )
      const btn = container.querySelector('button')!
      const texts = Array.from(btn.childNodes)
        .map((n) => n.textContent)
        .filter(Boolean)
      expect(texts.indexOf('S')).toBeLessThan(texts.indexOf('Middle'))
      expect(texts.indexOf('Middle')).toBeLessThan(texts.indexOf('E'))
    })

    it('does not render start-section slot when no startSection given', () => {
      render(<Button>Plain</Button>)
      expect(screen.getByRole('button').querySelector('[data-slot="start-section"]')).toBeNull()
    })

    it('does not render end-section slot when no endSection given', () => {
      render(<Button>Plain</Button>)
      expect(screen.getByRole('button').querySelector('[data-slot="end-section"]')).toBeNull()
    })

    it('sections accept any ReactNode (not just icons)', () => {
      render(
        <Button
          startSection={<span className="badge">3</span>}
          endSection={<img src="/arrow.svg" alt="" />}
        >
          Inbox
        </Button>,
      )
      expect(screen.getByRole('button').querySelector('.badge')).toBeInTheDocument()
      expect(screen.getByRole('button').querySelector('img')).toBeInTheDocument()
    })
  })

  // ── isIconOnly ───────────────────────────────────────────────────

  describe('isIconOnly', () => {
    it('renders children as content (no sections needed)', () => {
      render(
        <Button isIconOnly aria-label="Add">
          <span data-testid="plus">+</span>
        </Button>,
      )
      expect(screen.getByTestId('plus')).toBeInTheDocument()
    })

    it('renders only spinner when loading', () => {
      render(
        <Button isIconOnly loading aria-label="Processing">
          <span data-testid="plus">+</span>
        </Button>,
      )
      const btn = screen.getByRole('button')
      expect(btn.querySelector('[data-slot="spinner"]')).toBeInTheDocument()
      expect(screen.getByText('Loading', { selector: '.sr-only' })).toBeInTheDocument()
      // children should NOT be visible
      expect(screen.queryByTestId('plus')).not.toBeInTheDocument()
    })

    it('passes aria-label through', () => {
      render(<Button isIconOnly aria-label="Delete">🗑</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Delete')
    })
  })

  // ── Toggle / pressed ─────────────────────────────────────────────

  describe('pressed (toggle)', () => {
    it('sets aria-pressed="false"', () => {
      render(<Button pressed={false}>Mute</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false')
    })

    it('sets aria-pressed="true"', () => {
      render(<Button pressed={true}>Mute</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    })

    it('sets data-pressed attribute', () => {
      render(<Button pressed={true}>Mute</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('data-pressed', 'true')
    })

    it('does not set aria-pressed when pressed is undefined', () => {
      render(<Button>Normal</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('aria-pressed')
    })

    it('does not set data-pressed when pressed is undefined', () => {
      render(<Button>Normal</Button>)
      expect(screen.getByRole('button')).not.toHaveAttribute('data-pressed')
    })

    it('toggles on click', async () => {
      const user = userEvent.setup()
      const onToggle = vi.fn()
      const { rerender } = render(<Button pressed={false} onClick={onToggle}>Toggle</Button>)
      await user.click(screen.getByRole('button'))
      expect(onToggle).toHaveBeenCalledTimes(1)

      rerender(<Button pressed={true} onClick={onToggle}>Toggle</Button>)
      expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true')
    })
  })

  // ── fullWidth ────────────────────────────────────────────────────

  it('renders fullWidth button', () => {
    render(<Button fullWidth>Full Width</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  // ── classNames ───────────────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to root', () => {
      render(<Button className="custom-class">Btn</Button>)
      expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('applies classNames.root', () => {
      render(<Button classNames={{ root: 'root-extra' }}>Btn</Button>)
      expect(screen.getByRole('button')).toHaveClass('root-extra')
    })

    it('applies classNames.startSection', () => {
      render(
        <Button startSection={<span>★</span>} classNames={{ startSection: 'start-extra' }}>
          Star
        </Button>,
      )
      expect(screen.getByRole('button').querySelector('[data-slot="start-section"]')).toHaveClass('start-extra')
    })

    it('applies classNames.endSection', () => {
      render(
        <Button endSection={<span>→</span>} classNames={{ endSection: 'end-extra' }}>
          Next
        </Button>,
      )
      expect(screen.getByRole('button').querySelector('[data-slot="end-section"]')).toHaveClass('end-extra')
    })

    it('applies classNames.spinner when loading', () => {
      render(
        <Button loading classNames={{ spinner: 'spinner-extra' }}>
          Save
        </Button>,
      )
      expect(screen.getByRole('button').querySelector('[data-slot="spinner"]')).toHaveClass('spinner-extra')
    })

    it('className and classNames.root both apply', () => {
      render(
        <Button className="my-custom-btn" classNames={{ root: 'my-root-extra' }}>
          Btn
        </Button>,
      )
      const btn = screen.getByRole('button')
      expect(btn).toHaveClass('my-custom-btn')
      expect(btn).toHaveClass('my-root-extra')
    })
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref to the button element', () => {
    const ref = vi.fn()
    render(<Button ref={ref}>Btn</Button>)
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLButtonElement))
  })

  it('ref points to the actual DOM button', () => {
    let node: HTMLButtonElement | null = null
    render(<Button ref={(el) => { node = el }}>Btn</Button>)
    expect(node).toBeInstanceOf(HTMLButtonElement)
    expect(node!.textContent).toContain('Btn')
  })

  // ── asChild (polymorphic) ────────────────────────────────────────

  describe('asChild', () => {
    it('renders as an anchor when wrapping <a>', () => {
      render(
        <Button asChild>
          <a href="/dashboard">Dashboard</a>
        </Button>,
      )
      const link = screen.getByRole('link')
      expect(link).toHaveAttribute('href', '/dashboard')
      expect(link).toHaveClass('button_root')
    })

    it('does not set disabled attribute on child element', () => {
      render(
        <Button asChild disabled>
          <a href="/test">Link</a>
        </Button>,
      )
      const link = screen.getByRole('link')
      // asChild shouldn't set native disabled on non-button elements
      expect(link).not.toHaveAttribute('disabled')
      // but aria-disabled is still set
      expect(link).toHaveAttribute('aria-disabled', 'true')
    })
  })

  // ── Ripple ───────────────────────────────────────────────────────

  it('renders ripple container when ripple=true', () => {
    const { container } = render(<Button ripple>Ripple</Button>)
    // Button should have overflow-hidden for ripple containment
    expect(screen.getByRole('button')).toHaveClass('overflow-hidden')
    // RippleContainer should exist in the DOM
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('does not add overflow-hidden when ripple=false', () => {
    render(<Button>No Ripple</Button>)
    expect(screen.getByRole('button')).not.toHaveClass('overflow-hidden')
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with no children (empty button)', () => {
      render(<Button aria-label="Empty" />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('renders with JSX children (not just strings)', () => {
      render(
        <Button>
          <strong>Bold</strong> text
        </Button>,
      )
      expect(screen.getByRole('button')).toHaveTextContent('Bold text')
    })

    it('renders number children', () => {
      render(<Button>{42}</Button>)
      expect(screen.getByRole('button')).toHaveTextContent('42')
    })

    it('combines loading + disabled (both true)', () => {
      render(<Button loading disabled>Both</Button>)
      const btn = screen.getByRole('button')
      expect(btn).toBeDisabled()
      expect(btn).toHaveAttribute('aria-busy', 'true')
      expect(btn).toHaveAttribute('aria-disabled', 'true')
    })

    it('isIconOnly + startSection still renders startSection when not loading', () => {
      render(
        <Button isIconOnly startSection={<span data-testid="badge">3</span>} aria-label="Notifications">
          🔔
        </Button>,
      )
      expect(screen.getByTestId('badge')).toBeInTheDocument()
    })
  })
})
