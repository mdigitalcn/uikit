import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { FloatButton, FloatButtonGroup, BackTop } from './index'

describe('FloatButton', () => {
  it('renders with icon', () => {
    render(<FloatButton icon={<span>+</span>} />)
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  it('renders with label when no icon', () => {
    render(<FloatButton label="Help" />)
    expect(screen.getByText('Help')).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onClick = vi.fn()
    render(<FloatButton icon={<span>+</span>} onClick={onClick} />)
    fireEvent.click(screen.getByText('+').closest('button')!)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders as link with href', () => {
    render(<FloatButton icon={<span>→</span>} href="/help" />)
    expect(screen.getByText('→').closest('a')).toHaveAttribute('href', '/help')
  })

  it('renders badge', () => {
    render(<FloatButton icon={<span>🔔</span>} badge={5} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders data-slot="button"', () => {
    const { container } = render(<FloatButton icon={<span>+</span>} />)
    expect(container.querySelector('[data-slot="button"]')).toBeInTheDocument()
  })
})

describe('FloatButtonGroup', () => {
  it('renders data-slot="group"', () => {
    const { container } = render(
      <FloatButtonGroup>
        <FloatButton icon={<span>A</span>} />
      </FloatButtonGroup>,
    )
    expect(container.querySelector('[data-slot="group"]')).toBeInTheDocument()
  })

  it('shows children on click', () => {
    render(
      <FloatButtonGroup trigger="click">
        <FloatButton icon={<span>Child</span>} />
      </FloatButtonGroup>,
    )
    expect(screen.queryByText('Child')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Child')).toBeInTheDocument()
  })
})

describe('BackTop', () => {
  it('renders nothing when scroll is 0', () => {
    const { container } = render(<BackTop />)
    expect(container.querySelector('[data-slot="button"]')).not.toBeInTheDocument()
  })

  it('renders all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<FloatButton icon={<span>+</span>} size={size} />)
      unmount()
    })
  })

  it('renders all variants', () => {
    const variants = ['solid', 'outline', 'soft', 'ghost'] as const
    variants.forEach((variant) => {
      const { unmount } = render(<FloatButton icon={<span>+</span>} variant={variant} />)
      unmount()
    })
  })

  it('has aria-label', () => {
    const { container } = render(<FloatButton icon={<span>+</span>} tooltip="Add item" />)
    expect(container.querySelector('[aria-label="Add item"]')).toBeInTheDocument()
  })

  it('renders with badge', () => {
    const { container } = render(<FloatButton icon={<span>+</span>} badge={5} />)
    expect(container.querySelector('[data-slot="badge"]')).toBeInTheDocument()
  })

  it('renders as link when href provided', () => {
    const { container } = render(<FloatButton icon={<span>+</span>} href="/test" />)
    expect(container.querySelector('a')).toBeInTheDocument()
  })

  it('renders with label text', () => {
    render(<FloatButton label="Add" />)
    expect(screen.getByText('Add')).toBeInTheDocument()
  })


})
