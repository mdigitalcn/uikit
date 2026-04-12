import { describe, expect, it, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Accordion from './index'
import type { AccordionItem } from './types'

const mockItems: AccordionItem[] = [
  { key: '1', title: 'Section 1', content: 'Content 1' },
  { key: '2', title: 'Section 2', content: 'Content 2' },
  { key: '3', title: 'Section 3', content: 'Content 3' },
]

describe('Accordion', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders all item titles', () => {
    render(<Accordion items={mockItems} />)
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Section 3')).toBeInTheDocument()
  })

  it('renders with data-slot="root"', () => {
    const { container } = render(<Accordion items={mockItems} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders accordion_root class', () => {
    const { container } = render(<Accordion items={mockItems} />)
    expect(container.querySelector('.accordion_root')).toBeInTheDocument()
  })

  it('renders all panels collapsed by default', () => {
    render(<Accordion items={mockItems} />)
    screen.getAllByRole('button').forEach((button) => {
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })
  })

  it('renders correct number of items', () => {
    const { container } = render(<Accordion items={mockItems} />)
    expect(container.querySelectorAll('[data-slot="item"]')).toHaveLength(3)
  })

  // ── Single mode ──────────────────────────────────────────────────

  describe('single mode', () => {
    it('expands panel when clicked', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const button = screen.getByText('Section 1').closest('button')!
      await user.click(button)
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('collapses other panels when new one is opened', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const btn1 = screen.getByText('Section 1').closest('button')!
      const btn2 = screen.getByText('Section 2').closest('button')!

      await user.click(btn1)
      expect(btn1).toHaveAttribute('aria-expanded', 'true')

      await user.click(btn2)
      expect(btn1).toHaveAttribute('aria-expanded', 'false')
      expect(btn2).toHaveAttribute('aria-expanded', 'true')
    })

    it('collapses active panel when clicked again (collapsible=true)', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} defaultActiveKey="1" />)
      const btn = screen.getByText('Section 1').closest('button')!
      await user.click(btn)
      expect(btn).toHaveAttribute('aria-expanded', 'false')
    })

    it('prevents collapsing when collapsible=false', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} defaultActiveKey="1" collapsible={false} />)
      const btn = screen.getByText('Section 1').closest('button')!
      await user.click(btn)
      expect(btn).toHaveAttribute('aria-expanded', 'true')
    })
  })

  // ── Multiple mode ────────────────────────────────────────────────

  describe('multiple mode', () => {
    it('allows multiple panels open simultaneously', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} multiple />)
      const btn1 = screen.getByText('Section 1').closest('button')!
      const btn2 = screen.getByText('Section 2').closest('button')!

      await user.click(btn1)
      await user.click(btn2)
      expect(btn1).toHaveAttribute('aria-expanded', 'true')
      expect(btn2).toHaveAttribute('aria-expanded', 'true')
    })

    it('toggles individual panels independently', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} multiple defaultActiveKey={['1', '2']} />)
      const btn1 = screen.getByText('Section 1').closest('button')!
      await user.click(btn1)
      expect(btn1).toHaveAttribute('aria-expanded', 'false')
      expect(screen.getByText('Section 2').closest('button')!).toHaveAttribute('aria-expanded', 'true')
    })
  })

  // ── Controlled / Uncontrolled ────────────────────────────────────

  describe('controlled / uncontrolled', () => {
    it('uses defaultActiveKey (uncontrolled)', () => {
      render(<Accordion items={mockItems} defaultActiveKey="2" />)
      expect(screen.getByText('Section 2').closest('button')!).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByText('Section 1').closest('button')!).toHaveAttribute('aria-expanded', 'false')
    })

    it('uses defaultActiveKey as array in multiple mode', () => {
      render(<Accordion items={mockItems} multiple defaultActiveKey={['1', '3']} />)
      expect(screen.getByText('Section 1').closest('button')!).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByText('Section 2').closest('button')!).toHaveAttribute('aria-expanded', 'false')
      expect(screen.getByText('Section 3').closest('button')!).toHaveAttribute('aria-expanded', 'true')
    })

    it('calls onChange on toggle', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      render(<Accordion items={mockItems} onChange={onChange} />)
      await user.click(screen.getByText('Section 1'))
      expect(onChange).toHaveBeenCalledWith('1')
    })

    it('calls onChange with array in multiple mode', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      render(<Accordion items={mockItems} multiple onChange={onChange} />)
      await user.click(screen.getByText('Section 1'))
      expect(onChange).toHaveBeenCalledWith(['1'])
    })

    it('respects controlled activeKey', async () => {
      const onChange = vi.fn()
      const user = userEvent.setup()
      const { rerender } = render(
        <Accordion items={mockItems} activeKey="1" onChange={onChange} />
      )
      expect(screen.getByText('Section 1').closest('button')!).toHaveAttribute('aria-expanded', 'true')

      await user.click(screen.getByText('Section 2'))
      expect(onChange).toHaveBeenCalledWith('2')

      rerender(<Accordion items={mockItems} activeKey="2" onChange={onChange} />)
      expect(screen.getByText('Section 2').closest('button')!).toHaveAttribute('aria-expanded', 'true')
      expect(screen.getByText('Section 1').closest('button')!).toHaveAttribute('aria-expanded', 'false')
    })
  })

  // ── Variants ─────────────────────────────────────────────────────

  it.each(['default', 'solid', 'soft', 'bordered', 'splitted'] as const)(
    'renders variant=%s',
    (variant) => {
      render(<Accordion items={mockItems} variant={variant} />)
      expect(screen.getByText('Section 1')).toBeInTheDocument()
    },
  )

  // ── Colors ───────────────────────────────────────────────────────

  it.each(['default', 'primary', 'secondary', 'accent', 'success', 'error', 'warning', 'info'] as const)(
    'renders color=%s',
    (color) => {
      render(<Accordion items={mockItems} color={color} />)
      expect(screen.getByText('Section 1')).toBeInTheDocument()
    },
  )

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Accordion items={mockItems} size={size} />)
      expect(screen.getByText('Section 1')).toBeInTheDocument()
    },
  )

  // ── Disabled ─────────────────────────────────────────────────────

  describe('disabled items', () => {
    const itemsWithDisabled: AccordionItem[] = [
      ...mockItems,
      { key: '4', title: 'Disabled', content: 'Disabled content', disabled: true },
    ]

    it('sets disabled attribute on button', () => {
      render(<Accordion items={itemsWithDisabled} />)
      expect(screen.getByText('Disabled').closest('button')).toBeDisabled()
    })

    it('sets aria-disabled', () => {
      render(<Accordion items={itemsWithDisabled} />)
      expect(screen.getByText('Disabled').closest('button')).toHaveAttribute('aria-disabled', 'true')
    })

    it('does not expand on click', async () => {
      const user = userEvent.setup()
      render(<Accordion items={itemsWithDisabled} />)
      const btn = screen.getByText('Disabled').closest('button')!
      await user.click(btn)
      expect(btn).toHaveAttribute('aria-expanded', 'false')
    })

    it('applies opacity to disabled item', () => {
      const { container } = render(<Accordion items={itemsWithDisabled} />)
      const items = container.querySelectorAll('[data-slot="item"]')
      expect(items[3]).toHaveClass('opacity-50')
    })
  })

  // ── Item features (icon, subtitle, extra) ────────────────────────

  describe('item features', () => {
    it('renders item icon', () => {
      const items: AccordionItem[] = [
        { key: '1', title: 'With Icon', content: 'C', icon: <span data-testid="icon">★</span> },
      ]
      render(<Accordion items={items} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByTestId('icon').closest('[data-slot="icon"]')).toBeInTheDocument()
    })

    it('renders item subtitle', () => {
      const items: AccordionItem[] = [
        { key: '1', title: 'Title', content: 'C', subtitle: 'Sub text' },
      ]
      render(<Accordion items={items} />)
      expect(screen.getByText('Sub text')).toBeInTheDocument()
    })

    it('renders item extra content', () => {
      const items: AccordionItem[] = [
        { key: '1', title: 'Title', content: 'C', extra: <span data-testid="extra">Badge</span> },
      ]
      render(<Accordion items={items} />)
      expect(screen.getByTestId('extra')).toBeInTheDocument()
    })

    it('renders all features together', () => {
      const items: AccordionItem[] = [{
        key: '1',
        title: 'Full Item',
        content: 'Content',
        icon: <span data-testid="icon">🎯</span>,
        subtitle: 'Description here',
        extra: <span data-testid="badge">New</span>,
      }]
      render(<Accordion items={items} />)
      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.getByText('Description here')).toBeInTheDocument()
      expect(screen.getByTestId('badge')).toBeInTheDocument()
    })
  })

  // ── Expand icon ──────────────────────────────────────────────────

  describe('expandIcon', () => {
    it('renders default chevron', () => {
      const { container } = render(<Accordion items={mockItems} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('hides icon when expandIcon={false}', () => {
      const { container } = render(<Accordion items={mockItems} expandIcon={false} />)
      expect(container.querySelector('svg')).not.toBeInTheDocument()
    })

    it('renders custom ReactNode icon', () => {
      render(<Accordion items={mockItems} expandIcon={<span data-testid="custom">▼</span>} />)
      expect(screen.getAllByTestId('custom')).toHaveLength(3)
    })

    it('renders icon from render function', () => {
      render(
        <Accordion
          items={mockItems}
          expandIcon={(expanded) => <span data-testid="fn-icon">{expanded ? '−' : '+'}</span>}
        />
      )
      expect(screen.getAllByTestId('fn-icon')).toHaveLength(3)
    })

    it('positions icon on left when expandIconPosition="left"', () => {
      const { container } = render(<Accordion items={mockItems} expandIconPosition="left" />)
      // Chevron should be first child of trigger button
      const trigger = container.querySelector('[data-slot="trigger"]')!
      expect(trigger.firstElementChild?.tagName.toLowerCase()).not.toBe('div') // not the text wrapper
    })
  })

  // ── destroyOnClose ───────────────────────────────────────────────

  describe('destroyOnClose', () => {
    it('removes content from DOM when collapsed', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} defaultActiveKey="1" destroyOnClose />)
      expect(screen.getByText('Content 1')).toBeInTheDocument()

      await user.click(screen.getByText('Section 1').closest('button')!)
      expect(screen.queryByText('Content 1')).not.toBeInTheDocument()
    })

    it('keeps content in DOM when open', () => {
      render(<Accordion items={mockItems} defaultActiveKey="1" destroyOnClose />)
      expect(screen.getByText('Content 1')).toBeInTheDocument()
    })

    it('keeps content in DOM when destroyOnClose=false (default)', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} defaultActiveKey="1" />)
      await user.click(screen.getByText('Section 1').closest('button')!)
      // Content should still exist in DOM (just hidden)
      expect(screen.getByText('Content 1')).toBeInTheDocument()
    })
  })

  // ── showDivider ──────────────────────────────────────────────────

  it('renders without dividers when showDivider=false', () => {
    const { container } = render(<Accordion items={mockItems} showDivider={false} />)
    expect(container.querySelector('.accordion_root')?.className).toContain('divide-y-0')
  })

  // ── Styling ──────────────────────────────────────────────────────

  describe('styling', () => {
    it('applies className to root', () => {
      const { container } = render(<Accordion items={mockItems} className="my-accordion" />)
      expect(container.querySelector('.accordion_root')).toHaveClass('my-accordion')
    })

    it('applies itemClassName to all items', () => {
      const { container } = render(<Accordion items={mockItems} itemClassName="my-item" />)
      container.querySelectorAll('.accordion_item').forEach((item) => {
        expect(item).toHaveClass('my-item')
      })
    })

    it('applies classNames.root', () => {
      const { container } = render(<Accordion items={mockItems} classNames={{ root: 'cn-root' }} />)
      expect(container.querySelector('.accordion_root')).toHaveClass('cn-root')
    })

    it('applies classNames.item', () => {
      const { container } = render(<Accordion items={mockItems} classNames={{ item: 'cn-item' }} />)
      container.querySelectorAll('.accordion_item').forEach((item) => {
        expect(item).toHaveClass('cn-item')
      })
    })

    it('applies classNames.trigger', () => {
      const { container } = render(<Accordion items={mockItems} classNames={{ trigger: 'cn-trigger' }} />)
      container.querySelectorAll('.accordion_trigger').forEach((t) => {
        expect(t).toHaveClass('cn-trigger')
      })
    })

    it('applies classNames.content', () => {
      render(<Accordion items={mockItems} defaultActiveKey="1" classNames={{ content: 'cn-content' }} />)
      const content = document.querySelector('.accordion_content')
      expect(content).toHaveClass('cn-content')
    })

    it('applies classNames.icon', () => {
      const items: AccordionItem[] = [
        { key: '1', title: 'T', content: 'C', icon: <span>★</span> },
      ]
      const { container } = render(<Accordion items={items} classNames={{ icon: 'cn-icon' }} />)
      expect(container.querySelector('[data-slot="icon"]')).toHaveClass('cn-icon')
    })

    it('applies classNames.heading', () => {
      const { container } = render(<Accordion items={mockItems} classNames={{ heading: 'cn-heading' }} />)
      container.querySelectorAll('[data-slot="heading"]').forEach((h) => {
        expect(h).toHaveClass('cn-heading')
      })
    })
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref to root element', () => {
    const ref = { current: null }
    render(<Accordion items={mockItems} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  // ── Keyboard navigation ──────────────────────────────────────────

  describe('keyboard navigation', () => {
    it('ArrowDown moves focus to next trigger', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[0].focus()
      await user.keyboard('{ArrowDown}')
      expect(buttons[1]).toHaveFocus()
    })

    it('ArrowUp moves focus to previous trigger', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[1].focus()
      await user.keyboard('{ArrowUp}')
      expect(buttons[0]).toHaveFocus()
    })

    it('ArrowDown wraps from last to first', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[2].focus()
      await user.keyboard('{ArrowDown}')
      expect(buttons[0]).toHaveFocus()
    })

    it('ArrowUp wraps from first to last', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[0].focus()
      await user.keyboard('{ArrowUp}')
      expect(buttons[2]).toHaveFocus()
    })

    it('Home moves focus to first trigger', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[2].focus()
      await user.keyboard('{Home}')
      expect(buttons[0]).toHaveFocus()
    })

    it('End moves focus to last trigger', async () => {
      const user = userEvent.setup()
      render(<Accordion items={mockItems} />)
      const buttons = screen.getAllByRole('button')
      buttons[0].focus()
      await user.keyboard('{End}')
      expect(buttons[2]).toHaveFocus()
    })

    it('skips disabled items', async () => {
      const user = userEvent.setup()
      const items: AccordionItem[] = [
        { key: '1', title: 'First', content: 'C1' },
        { key: '2', title: 'Disabled', content: 'C2', disabled: true },
        { key: '3', title: 'Third', content: 'C3' },
      ]
      render(<Accordion items={items} />)
      const buttons = screen.getAllByRole('button')
      buttons[0].focus()
      await user.keyboard('{ArrowDown}')
      expect(buttons[2]).toHaveFocus()
    })
  })

  // ── ARIA / Accessibility ─────────────────────────────────────────

  describe('accessibility', () => {
    it('each trigger has aria-expanded', () => {
      render(<Accordion items={mockItems} />)
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toHaveAttribute('aria-expanded')
      })
    })

    it('each trigger has aria-controls pointing to its panel', () => {
      render(<Accordion items={mockItems} />)
      screen.getAllByRole('button').forEach((btn) => {
        const panelId = btn.getAttribute('aria-controls')
        expect(panelId).toBeTruthy()
        expect(document.getElementById(panelId!)).toBeInTheDocument()
      })
    })

    it('each trigger has a unique id', () => {
      render(<Accordion items={mockItems} />)
      const ids = screen.getAllByRole('button').map((b) => b.id)
      expect(new Set(ids).size).toBe(ids.length)
    })

    it('panels link back to triggers via aria-labelledby', () => {
      render(<Accordion items={mockItems} defaultActiveKey="1" />)
      const regions = screen.getAllByRole('region', { hidden: true })
      regions.forEach((region) => {
        const labelledBy = region.getAttribute('aria-labelledby')
        expect(labelledBy).toBeTruthy()
        expect(document.getElementById(labelledBy!)).toBeInTheDocument()
      })
    })

    it('panels have aria-hidden matching expanded state', () => {
      render(<Accordion items={mockItems} defaultActiveKey="1" />)
      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        const panelId = btn.getAttribute('aria-controls')!
        const panel = document.getElementById(panelId)!
        const expanded = btn.getAttribute('aria-expanded') === 'true'
        expect(panel.getAttribute('aria-hidden')).toBe(String(!expanded))
      })
    })
  })

  // ── Heading level (W3C) ────────────────────────────────────────

  describe('headingLevel', () => {
    it('wraps triggers in h3 by default', () => {
      const { container } = render(<Accordion items={mockItems} />)
      const headings = container.querySelectorAll('h3')
      expect(headings).toHaveLength(3)
      headings.forEach((h) => {
        expect(h.querySelector('button[data-slot="trigger"]')).toBeInTheDocument()
      })
    })

    it.each([2, 3, 4, 5, 6] as const)(
      'uses headingLevel=%i',
      (level) => {
        const { container } = render(<Accordion items={mockItems} headingLevel={level} />)
        expect(container.querySelectorAll(`h${level}`)).toHaveLength(3)
      },
    )

    it('heading has data-slot="heading"', () => {
      const { container } = render(<Accordion items={mockItems} />)
      expect(container.querySelectorAll('[data-slot="heading"]')).toHaveLength(3)
    })

    it('heading has no default margin/padding (reset)', () => {
      const { container } = render(<Accordion items={mockItems} />)
      container.querySelectorAll('[data-slot="heading"]').forEach((h) => {
        expect(h).toHaveClass('m-0', 'p-0')
      })
    })
  })

  // ── Region role (W3C landmark proliferation) ───────────────────

  describe('region role', () => {
    it('uses role="region" in single mode', () => {
      render(<Accordion items={mockItems} defaultActiveKey="1" />)
      expect(screen.getAllByRole('region', { hidden: true }).length).toBeGreaterThan(0)
    })

    it('uses role="region" in multiple mode with ≤6 items', () => {
      render(<Accordion items={mockItems} multiple defaultActiveKey={['1']} />)
      expect(screen.getAllByRole('region', { hidden: true }).length).toBeGreaterThan(0)
    })

    it('omits role="region" in multiple mode with >6 items', () => {
      const manyItems: AccordionItem[] = Array.from({ length: 7 }, (_, i) => ({
        key: String(i), title: `Item ${i}`, content: `Content ${i}`,
      }))
      const { container } = render(<Accordion items={manyItems} multiple />)
      expect(container.querySelectorAll('[role="region"]')).toHaveLength(0)
    })

    it('keeps role="region" in single mode even with >6 items', () => {
      const manyItems: AccordionItem[] = Array.from({ length: 7 }, (_, i) => ({
        key: String(i), title: `Item ${i}`, content: `Content ${i}`,
      }))
      render(<Accordion items={manyItems} defaultActiveKey="0" />)
      expect(screen.getAllByRole('region', { hidden: true }).length).toBeGreaterThan(0)
    })

    it('omits aria-labelledby when role="region" is omitted', () => {
      const manyItems: AccordionItem[] = Array.from({ length: 7 }, (_, i) => ({
        key: String(i), title: `Item ${i}`, content: `Content ${i}`,
      }))
      const { container } = render(<Accordion items={manyItems} multiple />)
      container.querySelectorAll('[aria-hidden]').forEach((panel) => {
        expect(panel).not.toHaveAttribute('role')
        expect(panel).not.toHaveAttribute('aria-labelledby')
      })
    })
  })

  // ── Compound variants ──────────────────────────────────────────

  it('bordered + default color renders divide-border', () => {
    const { container } = render(
      <Accordion items={mockItems} variant="bordered" color="default" />
    )
    expect(container.querySelector('.accordion_root')?.className).toContain('divide-border')
  })

  it('splitted variant does not render dividers', () => {
    const { container } = render(<Accordion items={mockItems} variant="splitted" />)
    const root = container.querySelector('.accordion_root')!
    expect(root.className).not.toContain('divide-y')
  })

  // ── Edge cases ─────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with empty items array', () => {
      const { container } = render(<Accordion items={[]} />)
      expect(container.querySelector('.accordion_root')).toBeInTheDocument()
      expect(container.querySelectorAll('[data-slot="item"]')).toHaveLength(0)
    })

    it('renders with single item', () => {
      render(<Accordion items={[{ key: '1', title: 'Solo', content: 'Only one' }]} />)
      expect(screen.getByText('Solo')).toBeInTheDocument()
    })

    it('renders JSX content', () => {
      const items: AccordionItem[] = [{
        key: '1',
        title: <span data-testid="jsx-title">JSX Title</span>,
        content: <div data-testid="jsx-content"><strong>Rich</strong> content</div>,
      }]
      render(<Accordion items={items} defaultActiveKey="1" />)
      expect(screen.getByTestId('jsx-title')).toBeInTheDocument()
      expect(screen.getByTestId('jsx-content')).toBeInTheDocument()
    })

    it('defaultActiveKey as string works in multiple mode (auto-wrapped)', () => {
      render(<Accordion items={mockItems} multiple defaultActiveKey="1" />)
      expect(screen.getByText('Section 1').closest('button')!).toHaveAttribute('aria-expanded', 'true')
    })
  })
})
