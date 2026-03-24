import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import Tour from './index'

// Create target elements in DOM
beforeEach(() => {
  document.body.innerHTML = ''
  for (let i = 1; i <= 3; i++) {
    const el = document.createElement('div')
    el.id = `step-${i}`
    el.textContent = `Target ${i}`
    el.getBoundingClientRect = vi.fn().mockReturnValue({
      top: i * 100, left: 100, right: 300, bottom: i * 100 + 50,
      width: 200, height: 50, x: 100, y: i * 100, toJSON: () => {},
    })
    document.body.appendChild(el)
  }
  // Mock scrollIntoView
  Element.prototype.scrollIntoView = vi.fn()
})

const steps = [
  { target: '#step-1', title: 'Welcome', description: 'This is step 1' },
  { target: '#step-2', title: 'Feature', description: 'This is step 2' },
  { target: '#step-3', title: 'Done', description: 'This is step 3' },
]

describe('Tour', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<Tour steps={steps} open={false} />)
    expect(container.querySelector('[data-slot="root"]')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<Tour steps={steps} open />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('This is step 1')).toBeInTheDocument()
  })

  it('renders progress indicator', () => {
    render(<Tour steps={steps} open />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('shows Next button', () => {
    render(<Tour steps={steps} open />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('shows Skip button', () => {
    render(<Tour steps={steps} open />)
    expect(screen.getByText('Skip')).toBeInTheDocument()
  })

  it('shows Finish on last step', () => {
    render(<Tour steps={steps} open current={2} />)
    expect(screen.getByText('Done')).toBeInTheDocument()
    expect(screen.getByText('Finish')).toBeInTheDocument()
  })

  it('renders with custom button text', () => {
    render(<Tour steps={steps} open nextText="Continue" skipText="Exit" />)
    expect(screen.getByText('Continue')).toBeInTheDocument()
    expect(screen.getByText('Exit')).toBeInTheDocument()
  })

  it('renders tour popover with role="dialog"', () => {
    const { container } = render(<Tour steps={steps} open current={0} />)
    const popover = container.querySelector('[role="dialog"]')
    expect(popover).toBeInTheDocument()
  })

  it('has aria-label on popover', () => {
    const { container } = render(<Tour steps={steps} open current={0} />)
    const popover = container.querySelector('[role="dialog"]')
    expect(popover).toHaveAttribute('aria-label')
  })

  it('renders all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Tour steps={steps} open current={0} size={size} />)
      unmount()
    })
  })

  it('renders with showProgress prop', () => {
    const { container } = render(<Tour steps={steps} open current={0} showProgress />)
    expect(container.querySelector('[data-slot="popover"]')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Tour steps={steps} open current={0} className="custom" />)
    expect(container.querySelector('.custom')).toBeInTheDocument()
  })

  it('renders next and prev buttons', () => {
    render(<Tour steps={steps} open current={0} />)
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('shows skip button when showSkip is true', () => {
    render(<Tour steps={steps} open current={0} showSkip />)
    expect(screen.getByText('Skip')).toBeInTheDocument()
  })

  it('renders on last step', () => {
    const { container } = render(<Tour steps={steps} open current={1} />)
    expect(container.querySelector('[data-slot="popover"]')).toBeInTheDocument()
  })
})
