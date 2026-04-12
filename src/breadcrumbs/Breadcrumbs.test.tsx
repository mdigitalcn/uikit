import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Breadcrumb, { BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from './index'
import type { BreadcrumbItemData } from './types'

const basicItems: BreadcrumbItemData[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Details' },
]

describe('Breadcrumb', () => {
  // ── Core rendering (data-driven) ─────────────────────────────────

  it('renders items', () => {
    render(<Breadcrumb items={basicItems} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Details')).toBeInTheDocument()
  })

  it('renders compound children', () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Current')).toBeInTheDocument()
  })

  // ── ARIA / Accessibility ─────────────────────────────────────────

  describe('accessibility', () => {
    it('renders <nav> with aria-label="breadcrumb"', () => {
      render(<Breadcrumb items={basicItems} />)
      const nav = screen.getByRole('navigation')
      expect(nav).toHaveAttribute('aria-label', 'breadcrumb')
    })

    it('renders <ol> inside <nav>', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelector('nav ol')).toBeInTheDocument()
    })

    it('renders <li> for each item', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelectorAll('li').length).toBeGreaterThanOrEqual(3)
    })

    it('last item has aria-current="page"', () => {
      render(<Breadcrumb items={basicItems} />)
      expect(screen.getByText('Details')).toHaveAttribute('aria-current', 'page')
    })

    it('separators are aria-hidden', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      container.querySelectorAll('[data-slot="separator"]').forEach((sep) => {
        expect(sep).toHaveAttribute('aria-hidden', 'true')
      })
    })

    it('non-last items are links', () => {
      render(<Breadcrumb items={basicItems} />)
      expect(screen.getByText('Home').tagName).toBe('A')
      expect(screen.getByText('Home')).toHaveAttribute('href', '/')
    })
  })

  // ── data-slot ────────────────────────────────────────────────────

  describe('data-slot', () => {
    it('root has data-slot="root"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
    })

    it('list has data-slot="list"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelector('[data-slot="list"]')).toBeInTheDocument()
    })

    it('items have data-slot="item"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelectorAll('[data-slot="item"]').length).toBeGreaterThanOrEqual(3)
    })

    it('links have data-slot="link"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelectorAll('[data-slot="link"]').length).toBeGreaterThanOrEqual(2)
    })

    it('current page has data-slot="current"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelector('[data-slot="current"]')).toBeInTheDocument()
    })

    it('separators have data-slot="separator"', () => {
      const { container } = render(<Breadcrumb items={basicItems} />)
      expect(container.querySelectorAll('[data-slot="separator"]').length).toBe(2)
    })
  })

  // ── Separator ────────────────────────────────────────────────────

  it('renders default chevron separator', () => {
    const { container } = render(<Breadcrumb items={basicItems} />)
    expect(container.querySelectorAll('.breadcrumbs_separator').length).toBe(2)
  })

  it('renders custom separator', () => {
    render(<Breadcrumb items={basicItems} separator="/" />)
    expect(screen.getAllByText('/')).toHaveLength(2)
  })

  it('renders custom JSX separator', () => {
    render(<Breadcrumb items={basicItems} separator={<span data-testid="sep">→</span>} />)
    expect(screen.getAllByTestId('sep')).toHaveLength(2)
  })

  // ── onClick ──────────────────────────────────────────────────────

  it('handles onClick on items', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Breadcrumb items={[{ label: 'Home', onClick }, { label: 'Current' }]} />)
    await user.click(screen.getByText('Home'))
    expect(onClick).toHaveBeenCalled()
  })

  // ── Sections (startSection / endSection) ─────────────────────────

  it('renders startSection on items', () => {
    render(
      <Breadcrumb items={[
        { label: 'Home', href: '/', startSection: <span data-testid="ic">🏠</span> },
        { label: 'Current' },
      ]} />,
    )
    expect(screen.getByTestId('ic')).toBeInTheDocument()
  })

  it('renders endSection on items', () => {
    render(
      <Breadcrumb items={[
        { label: 'Home', href: '/', endSection: <span data-testid="arrow">→</span> },
        { label: 'Current' },
      ]} />,
    )
    expect(screen.getByTestId('arrow')).toBeInTheDocument()
  })

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Breadcrumb items={basicItems} size={size} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Breadcrumb items={basicItems} color={color} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
    },
  )

  // ── Ellipsis ─────────────────────────────────────────────────────

  it('renders manual ellipsis item', () => {
    render(
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: '...', ellipsis: true, ellipsisItems: [] },
        { label: 'Current' },
      ]} />,
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Current')).toBeInTheDocument()
  })

  it('ellipsis has data-slot="ellipsis"', () => {
    const { container } = render(
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: '...', ellipsis: true, ellipsisItems: [] },
        { label: 'Current' },
      ]} />,
    )
    expect(container.querySelector('[data-slot="ellipsis"]')).toBeInTheDocument()
  })

  // ── maxItems ─────────────────────────────────────────────────────

  describe('maxItems', () => {
    const longItems: BreadcrumbItemData[] = [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/cat' },
      { label: 'Subcategory', href: '/sub' },
      { label: 'Product', href: '/prod' },
      { label: 'Details' },
    ]

    it('collapses middle items when maxItems < total', () => {
      render(<Breadcrumb items={longItems} maxItems={3} />)
      // Should show: Home, ..., Details
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Details')).toBeInTheDocument()
      // Middle items hidden
      expect(screen.queryByText('Category')).not.toBeInTheDocument()
      expect(screen.queryByText('Subcategory')).not.toBeInTheDocument()
    })

    it('shows all items when maxItems >= total', () => {
      render(<Breadcrumb items={longItems} maxItems={10} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
      expect(screen.getByText('Product')).toBeInTheDocument()
      expect(screen.getByText('Details')).toBeInTheDocument()
    })

    it('shows all items when maxItems is not set', () => {
      render(<Breadcrumb items={longItems} />)
      expect(screen.getByText('Category')).toBeInTheDocument()
      expect(screen.getByText('Subcategory')).toBeInTheDocument()
    })

    it('renders ellipsis element when collapsed', () => {
      const { container } = render(<Breadcrumb items={longItems} maxItems={3} />)
      expect(container.querySelector('[data-slot="ellipsis"]')).toBeInTheDocument()
    })
  })

  // ── classNames ───────────────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to root', () => {
      const { container } = render(<Breadcrumb items={basicItems} className="my-bc" />)
      expect(container.querySelector('.breadcrumbs_root')).toHaveClass('my-bc')
    })

    it('applies classNames.root', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ root: 'cn-root' }} />)
      expect(container.querySelector('.breadcrumbs_root')).toHaveClass('cn-root')
    })

    it('applies classNames.list', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ list: 'cn-list' }} />)
      expect(container.querySelector('[data-slot="list"]')).toHaveClass('cn-list')
    })

    it('applies classNames.item', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ item: 'cn-item' }} />)
      container.querySelectorAll('[data-slot="item"]').forEach((el) => {
        expect(el).toHaveClass('cn-item')
      })
    })

    it('applies classNames.separator', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ separator: 'cn-sep' }} />)
      container.querySelectorAll('[data-slot="separator"]').forEach((el) => {
        expect(el).toHaveClass('cn-sep')
      })
    })

    it('applies classNames.link', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ link: 'cn-link' }} />)
      container.querySelectorAll('[data-slot="link"]').forEach((el) => {
        expect(el).toHaveClass('cn-link')
      })
    })

    it('applies classNames.current', () => {
      const { container } = render(<Breadcrumb items={basicItems} classNames={{ current: 'cn-cur' }} />)
      expect(container.querySelector('[data-slot="current"]')).toHaveClass('cn-cur')
    })
  })

  // ── Compound sub-components ──────────────────────────────────────

  describe('BreadcrumbLink', () => {
    it('renders as <a> when href', () => {
      render(<BreadcrumbLink href="/test">Link</BreadcrumbLink>)
      expect(screen.getByText('Link').tagName).toBe('A')
    })

    it('renders as <button> when onClick only', () => {
      render(<BreadcrumbLink onClick={vi.fn()}>Btn</BreadcrumbLink>)
      expect(screen.getByText('Btn').tagName).toBe('BUTTON')
    })

    it('renders as <span> when neither', () => {
      render(<BreadcrumbLink>Static</BreadcrumbLink>)
      expect(screen.getByText('Static').tagName).toBe('SPAN')
    })

    it('has hover:underline class', () => {
      render(<BreadcrumbLink href="#">Hover</BreadcrumbLink>)
      expect(screen.getByText('Hover')).toHaveClass('hover:underline')
    })

    it('renders startSection and endSection', () => {
      render(
        <BreadcrumbLink href="#" startSection={<span data-testid="s">←</span>} endSection={<span data-testid="e">→</span>}>
          Nav
        </BreadcrumbLink>,
      )
      expect(screen.getByTestId('s')).toBeInTheDocument()
      expect(screen.getByTestId('e')).toBeInTheDocument()
    })
  })

  describe('BreadcrumbPage', () => {
    it('has aria-current="page"', () => {
      render(<BreadcrumbPage>Current</BreadcrumbPage>)
      expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
    })

    it('has font-medium class', () => {
      render(<BreadcrumbPage>Current</BreadcrumbPage>)
      expect(screen.getByText('Current')).toHaveClass('font-medium')
    })

    it('renders sections', () => {
      render(
        <BreadcrumbPage startSection={<span data-testid="s">←</span>} endSection={<span data-testid="e">→</span>}>
          Page
        </BreadcrumbPage>,
      )
      expect(screen.getByTestId('s')).toBeInTheDocument()
      expect(screen.getByTestId('e')).toBeInTheDocument()
    })
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with single item', () => {
      render(<Breadcrumb items={[{ label: 'Home' }]} />)
      expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page')
    })

    it('renders with empty items array', () => {
      const { container } = render(<Breadcrumb items={[]} />)
      expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
    })

    it('renders with no props', () => {
      const { container } = render(<Breadcrumb />)
      expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
    })
  })
})
