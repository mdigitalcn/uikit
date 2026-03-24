import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Anchor from './index'

const items = [
  { id: 'intro', label: 'Introduction' },
  { id: 'install', label: 'Installation' },
  { id: 'usage', label: 'Usage', children: [
    { id: 'basic', label: 'Basic Usage' },
  ]},
]

describe('Anchor', () => {
  it('renders data-slot="root"', () => {
    const { container } = render(<Anchor items={items} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders all links', () => {
    render(<Anchor items={items} />)
    expect(screen.getByText('Introduction')).toBeInTheDocument()
    expect(screen.getByText('Installation')).toBeInTheDocument()
    expect(screen.getByText('Usage')).toBeInTheDocument()
    expect(screen.getByText('Basic Usage')).toBeInTheDocument()
  })

  it('renders links with correct hrefs', () => {
    render(<Anchor items={items} />)
    expect(screen.getByText('Introduction').closest('a')).toHaveAttribute('href', '#intro')
    expect(screen.getByText('Installation').closest('a')).toHaveAttribute('href', '#install')
  })

  it('has navigation role', () => {
    render(<Anchor items={items} />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders indicator element', () => {
    const { container } = render(<Anchor items={items} />)
    expect(container.querySelector('[data-slot="indicator"]')).toBeInTheDocument()
  })

  it('renders in all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Anchor items={items} size={size} />)
      unmount()
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Anchor items={items} className="custom-class" />)
    expect(container.querySelector('[data-slot="root"]')).toHaveClass('custom-class')
  })

  it('applies classNames.root', () => {
    const { container } = render(<Anchor items={items} classNames={{ root: 'root-cls' }} />)
    expect(container.querySelector('[data-slot="root"]')).toHaveClass('root-cls')
  })

  it('renders nested children indented', () => {
    render(<Anchor items={items} />)
    const basic = screen.getByText('Basic Usage')
    expect(basic).toBeInTheDocument()
  })

  it('renders with affix mode', () => {
    const { container } = render(<Anchor items={items} affix affixTop={100} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('has aria-label on nav', () => {
    render(<Anchor items={items} />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveAttribute('aria-label')
  })

  it('renders links as anchor elements', () => {
    render(<Anchor items={items} />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })

  it('renders data-slot="link" on each link', () => {
    const { container } = render(<Anchor items={items} />)
    const links = container.querySelectorAll('[data-slot="link"]')
    expect(links.length).toBe(4)
  })

  it('renders data-slot="indicator" with correct classes', () => {
    const { container } = render(<Anchor items={items} />)
    const indicator = container.querySelector('[data-slot="indicator"]')
    expect(indicator).toHaveClass('anchor_indicator')
  })
})
