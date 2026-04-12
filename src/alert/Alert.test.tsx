import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Alert from './index'

describe('Alert', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders with title', () => {
    render(<Alert title="Warning" />)
    expect(screen.getByText('Warning')).toBeInTheDocument()
  })

  it('renders with description', () => {
    render(<Alert description="Something happened" />)
    expect(screen.getByText('Something happened')).toBeInTheDocument()
  })

  it('renders title and description together', () => {
    render(<Alert title="Error" description="File not found" />)
    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('File not found')).toBeInTheDocument()
  })

  it('renders children as custom body content', () => {
    render(<Alert><span data-testid="custom">Custom</span></Alert>)
    expect(screen.getByTestId('custom')).toBeInTheDocument()
  })

  it('renders title + description + children together', () => {
    render(
      <Alert title="Title" description="Desc">
        <span data-testid="extra">Extra</span>
      </Alert>,
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Desc')).toBeInTheDocument()
    expect(screen.getByTestId('extra')).toBeInTheDocument()
  })

  it('has role="alert"', () => {
    render(<Alert title="Test" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('has data-slot="root"', () => {
    const { container } = render(<Alert title="Test" />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  // ── ReactNode title/description ──────────────────────────────────

  describe('ReactNode title/description', () => {
    it('renders JSX title', () => {
      render(<Alert title={<span data-testid="jsx-title"><strong>Bold</strong> title</span>} />)
      expect(screen.getByTestId('jsx-title')).toBeInTheDocument()
      expect(screen.getByText('Bold')).toBeInTheDocument()
    })

    it('renders JSX description', () => {
      render(
        <Alert
          title="Title"
          description={<span data-testid="jsx-desc">Check <a href="#">this link</a></span>}
        />,
      )
      expect(screen.getByTestId('jsx-desc')).toBeInTheDocument()
      expect(screen.getByText('this link')).toBeInTheDocument()
    })

    it('does not render title slot when title is undefined', () => {
      const { container } = render(<Alert description="Only desc" />)
      expect(container.querySelector('[data-slot="title"]')).not.toBeInTheDocument()
    })

    it('does not render description slot when description is undefined', () => {
      const { container } = render(<Alert title="Only title" />)
      expect(container.querySelector('[data-slot="description"]')).not.toBeInTheDocument()
    })
  })

  // ── Icon ─────────────────────────────────────────────────────────

  describe('icon', () => {
    it('renders custom icon', () => {
      render(<Alert icon={<span data-testid="icon">!</span>} title="Test" />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByTestId('icon').closest('[data-slot="icon"]')).toBeInTheDocument()
    })

    it('hides icon when icon={null}', () => {
      const { container } = render(<Alert icon={null} title="Test" />)
      expect(container.querySelector('[data-slot="icon"]')).not.toBeInTheDocument()
    })

    it('does not render icon slot when icon is undefined', () => {
      const { container } = render(<Alert title="Test" />)
      expect(container.querySelector('[data-slot="icon"]')).not.toBeInTheDocument()
    })
  })

  // ── Closable ─────────────────────────────────────────────────────

  describe('closable', () => {
    it('shows close button when closable=true', () => {
      render(<Alert title="Test" closable />)
      expect(screen.getByLabelText('Close alert')).toBeInTheDocument()
    })

    it('does not show close button by default', () => {
      render(<Alert title="Test" />)
      expect(screen.queryByLabelText('Close alert')).not.toBeInTheDocument()
    })

    it('hides alert on close click (uncontrolled)', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Alert title="Test" closable onClose={onClose} />)

      await user.click(screen.getByLabelText('Close alert'))
      expect(onClose).toHaveBeenCalledOnce()
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('calls onClose without hiding when controlled', async () => {
      const user = userEvent.setup()
      const onClose = vi.fn()
      render(<Alert title="Test" closable visible={true} onClose={onClose} />)

      await user.click(screen.getByLabelText('Close alert'))
      expect(onClose).toHaveBeenCalledOnce()
      // Still visible because controlled
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('uses custom closeButtonLabel', () => {
      render(<Alert title="Test" closable closeButtonLabel="Cerrar" />)
      expect(screen.getByLabelText('Cerrar')).toBeInTheDocument()
      expect(screen.queryByLabelText('Close alert')).not.toBeInTheDocument()
    })

    it('close button has data-slot="closeButton"', () => {
      const { container } = render(<Alert title="Test" closable />)
      expect(container.querySelector('[data-slot="closeButton"]')).toBeInTheDocument()
    })
  })

  // ── Controlled visibility ────────────────────────────────────────

  describe('controlled visibility', () => {
    it('shows when visible=true', () => {
      render(<Alert title="Visible" visible={true} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('hides when visible=false', () => {
      render(<Alert title="Hidden" visible={false} />)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    it('responds to visible prop changes', () => {
      const { rerender } = render(<Alert title="Toggle" visible={true} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()

      rerender(<Alert title="Toggle" visible={false} />)
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()

      rerender(<Alert title="Toggle" visible={true} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })
  })

  // ── Action slot ──────────────────────────────────────────────────

  describe('action', () => {
    it('renders action element', () => {
      render(
        <Alert
          title="Saved"
          action={<button data-testid="undo-btn">Undo</button>}
        />,
      )
      expect(screen.getByTestId('undo-btn')).toBeInTheDocument()
    })

    it('action has data-slot="action"', () => {
      const { container } = render(
        <Alert title="Test" action={<button>Act</button>} />,
      )
      expect(container.querySelector('[data-slot="action"]')).toBeInTheDocument()
    })

    it('does not render action slot when action is undefined', () => {
      const { container } = render(<Alert title="Test" />)
      expect(container.querySelector('[data-slot="action"]')).not.toBeInTheDocument()
    })

    it('action is clickable', async () => {
      const user = userEvent.setup()
      const onClick = vi.fn()
      render(
        <Alert
          title="Changes saved"
          action={<button onClick={onClick}>Undo</button>}
        />,
      )
      await user.click(screen.getByText('Undo'))
      expect(onClick).toHaveBeenCalledOnce()
    })

    it('renders both action and close button', () => {
      const { container } = render(
        <Alert title="Test" closable action={<button>Retry</button>} />,
      )
      expect(container.querySelector('[data-slot="action"]')).toBeInTheDocument()
      expect(container.querySelector('[data-slot="closeButton"]')).toBeInTheDocument()
    })
  })

  // ── Variants ─────────────────────────────────────────────────────

  it.each(['default', 'solid', 'outline', 'soft'] as const)(
    'renders variant=%s',
    (variant) => {
      render(<Alert variant={variant} title="Test" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Alert color={color} title="Test" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    },
  )

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Alert size={size} title="Test" />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    },
  )

  // ── Accessibility ────────────────────────────────────────────────

  describe('accessibility', () => {
    it('sets aria-labelledby when title is present', () => {
      render(<Alert title="Important" />)
      const alert = screen.getByRole('alert')
      const labelledBy = alert.getAttribute('aria-labelledby')
      expect(labelledBy).toBeTruthy()
      expect(document.getElementById(labelledBy!)).toBeInTheDocument()
      expect(document.getElementById(labelledBy!)?.textContent).toBe('Important')
    })

    it('sets aria-describedby when description is present', () => {
      render(<Alert title="Title" description="Details here" />)
      const alert = screen.getByRole('alert')
      const describedBy = alert.getAttribute('aria-describedby')
      expect(describedBy).toBeTruthy()
      expect(document.getElementById(describedBy!)?.textContent).toBe('Details here')
    })

    it('does not set aria-labelledby when no title', () => {
      render(<Alert description="Only desc" />)
      expect(screen.getByRole('alert')).not.toHaveAttribute('aria-labelledby')
    })

    it('does not set aria-describedby when no description', () => {
      render(<Alert title="Only title" />)
      expect(screen.getByRole('alert')).not.toHaveAttribute('aria-describedby')
    })

    it('title id and aria-labelledby match', () => {
      const { container } = render(<Alert title="Match test" />)
      const alert = screen.getByRole('alert')
      const titleEl = container.querySelector('[data-slot="title"]')
      expect(alert.getAttribute('aria-labelledby')).toBe(titleEl?.id)
    })

    it('description id and aria-describedby match', () => {
      const { container } = render(<Alert title="T" description="D" />)
      const alert = screen.getByRole('alert')
      const descEl = container.querySelector('[data-slot="description"]')
      expect(alert.getAttribute('aria-describedby')).toBe(descEl?.id)
    })
  })

  // ── Styling / classNames ─────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to root', () => {
      render(<Alert title="Test" className="my-alert" />)
      expect(screen.getByRole('alert')).toHaveClass('my-alert')
    })

    it('applies classNames.root', () => {
      render(<Alert title="Test" classNames={{ root: 'cn-root' }} />)
      expect(screen.getByRole('alert')).toHaveClass('cn-root')
    })

    it('applies classNames.icon', () => {
      const { container } = render(
        <Alert title="T" icon={<span>!</span>} classNames={{ icon: 'cn-icon' }} />,
      )
      expect(container.querySelector('[data-slot="icon"]')).toHaveClass('cn-icon')
    })

    it('applies classNames.content', () => {
      const { container } = render(
        <Alert title="T" classNames={{ content: 'cn-content' }} />,
      )
      expect(container.querySelector('[data-slot="content"]')).toHaveClass('cn-content')
    })

    it('applies classNames.title', () => {
      const { container } = render(
        <Alert title="T" classNames={{ title: 'cn-title' }} />,
      )
      expect(container.querySelector('[data-slot="title"]')).toHaveClass('cn-title')
    })

    it('applies classNames.description', () => {
      const { container } = render(
        <Alert title="T" description="D" classNames={{ description: 'cn-desc' }} />,
      )
      expect(container.querySelector('[data-slot="description"]')).toHaveClass('cn-desc')
    })

    it('applies classNames.action', () => {
      const { container } = render(
        <Alert title="T" action={<button>Act</button>} classNames={{ action: 'cn-action' }} />,
      )
      expect(container.querySelector('[data-slot="action"]')).toHaveClass('cn-action')
    })

    it('applies classNames.closeButton', () => {
      const { container } = render(
        <Alert title="T" closable classNames={{ closeButton: 'cn-close' }} />,
      )
      expect(container.querySelector('[data-slot="closeButton"]')).toHaveClass('cn-close')
    })
  })

  // ── HTML attribute passthrough ───────────────────────────────────

  it('spreads native HTML attributes', () => {
    render(<Alert title="T" data-testid="my-alert" id="alert-1" />)
    expect(screen.getByTestId('my-alert')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toHaveAttribute('id', 'alert-1')
  })

  // ── DOM structure ──────────────────────────────────────────────

  describe('DOM structure', () => {
    it('renders slots in correct order (icon → content → action → close)', () => {
      const { container } = render(
        <Alert
          title="T"
          icon={<span>I</span>}
          action={<button>A</button>}
          closable
        />,
      )
      const root = container.querySelector('[data-slot="root"]')!
      const slots = Array.from(root.children).map((el) => (el as HTMLElement).dataset.slot)
      expect(slots).toEqual(['icon', 'content', 'action', 'closeButton'])
    })

    it('description has mt-1 spacing when title is present', () => {
      const { container } = render(<Alert title="T" description="D" />)
      const desc = container.querySelector('[data-slot="description"]')!
      expect(desc.className).toContain('mt-1')
    })

    it('description has no mt-1 when title is absent', () => {
      const { container } = render(<Alert description="D" />)
      const desc = container.querySelector('[data-slot="description"]')!
      expect(desc.className).not.toContain('mt-1')
    })

    it('has alert_root class', () => {
      render(<Alert title="T" />)
      expect(screen.getByRole('alert')).toHaveClass('alert_root')
    })
  })

  // ── Ref forwarding ───────────────────────────────────────────────

  it('does not crash without ref (React.memo component)', () => {
    render(<Alert title="No ref" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with no props (empty alert)', () => {
      render(<Alert />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('renders number as title', () => {
      render(<Alert title={404} />)
      expect(screen.getByText('404')).toBeInTheDocument()
    })

    it('renders icon + action + closable all together', () => {
      const { container } = render(
        <Alert
          title="All features"
          description="Everything at once"
          icon={<span data-testid="ic">🔔</span>}
          action={<button data-testid="act">View</button>}
          closable
        />,
      )
      expect(screen.getByTestId('ic')).toBeInTheDocument()
      expect(screen.getByTestId('act')).toBeInTheDocument()
      expect(container.querySelector('[data-slot="closeButton"]')).toBeInTheDocument()
      expect(screen.getByText('All features')).toBeInTheDocument()
      expect(screen.getByText('Everything at once')).toBeInTheDocument()
    })

    it('renders children only (no title or description)', () => {
      render(
        <Alert color="info">
          <p data-testid="child-para">Custom paragraph as only content</p>
        </Alert>,
      )
      expect(screen.getByTestId('child-para')).toBeInTheDocument()
      expect(screen.getByRole('alert')).not.toHaveAttribute('aria-labelledby')
      expect(screen.getByRole('alert')).not.toHaveAttribute('aria-describedby')
    })

    it('onClose is not called when not closable (no close button rendered)', () => {
      const onClose = vi.fn()
      const { container } = render(<Alert title="T" onClose={onClose} />)
      expect(container.querySelector('[data-slot="closeButton"]')).not.toBeInTheDocument()
    })

    it('action accepts any ReactNode (not just buttons)', () => {
      render(
        <Alert title="T" action={<a href="#" data-testid="link-action">Learn more</a>} />,
      )
      expect(screen.getByTestId('link-action')).toBeInTheDocument()
    })

    it('renders with all props simultaneously', () => {
      const { container } = render(
        <Alert
          title={<strong>Title</strong>}
          description={<em>Description</em>}
          icon={<span data-testid="ic">!</span>}
          action={<button data-testid="act">Go</button>}
          closable
          closeButtonLabel="Dismiss"
          variant="outline"
          color="warning"
          size="lg"
          className="extra-class"
          classNames={{
            root: 'cn-root',
            icon: 'cn-icon',
            content: 'cn-content',
            title: 'cn-title',
            description: 'cn-desc',
            action: 'cn-action',
            closeButton: 'cn-close',
          }}
          data-custom="yes"
        />,
      )
      const alert = screen.getByRole('alert')
      expect(alert).toHaveClass('extra-class', 'cn-root')
      expect(alert).toHaveAttribute('data-custom', 'yes')
      expect(alert).toHaveAttribute('aria-labelledby')
      expect(alert).toHaveAttribute('aria-describedby')
      expect(screen.getByLabelText('Dismiss')).toBeInTheDocument()
      expect(screen.getByTestId('ic')).toBeInTheDocument()
      expect(screen.getByTestId('act')).toBeInTheDocument()
      expect(container.querySelector('[data-slot="icon"]')).toHaveClass('cn-icon')
      expect(container.querySelector('[data-slot="content"]')).toHaveClass('cn-content')
      expect(container.querySelector('[data-slot="title"]')).toHaveClass('cn-title')
      expect(container.querySelector('[data-slot="description"]')).toHaveClass('cn-desc')
      expect(container.querySelector('[data-slot="action"]')).toHaveClass('cn-action')
      expect(container.querySelector('[data-slot="closeButton"]')).toHaveClass('cn-close')
    })
  })
})
