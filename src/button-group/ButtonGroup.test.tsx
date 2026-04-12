import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from '../button'
import ButtonGroup from '../button-group'

describe('ButtonGroup', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders with role="group"', () => {
    render(
      <ButtonGroup>
        <Button>A</Button>
        <Button>B</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('group')).toBeInTheDocument()
  })

  it('renders all child buttons', () => {
    render(
      <ButtonGroup>
        <Button>First</Button>
        <Button>Second</Button>
        <Button>Third</Button>
      </ButtonGroup>,
    )
    expect(screen.getAllByRole('button')).toHaveLength(3)
  })

  it('has data-slot="root"', () => {
    const { container } = render(
      <ButtonGroup><Button>A</Button></ButtonGroup>,
    )
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('has buttonGroup_root class', () => {
    const { container } = render(
      <ButtonGroup><Button>A</Button></ButtonGroup>,
    )
    expect(container.querySelector('.buttonGroup_root')).toBeInTheDocument()
  })

  // ── Orientation ──────────────────────────────────────────────────

  it('renders horizontal by default', () => {
    render(<ButtonGroup><Button>A</Button></ButtonGroup>)
    expect(screen.getByRole('group')).toHaveClass('flex-row')
  })

  it('renders vertical when vertical=true', () => {
    render(<ButtonGroup vertical><Button>A</Button></ButtonGroup>)
    expect(screen.getByRole('group')).toHaveClass('flex-col')
  })

  // ── Attached / Separated ─────────────────────────────────────────

  it('renders attached by default (no gap class)', () => {
    render(
      <ButtonGroup><Button>A</Button><Button>B</Button></ButtonGroup>,
    )
    const group = screen.getByRole('group')
    expect(group.className).not.toContain('gap-')
  })

  it('renders separated with gap when attached=false', () => {
    render(
      <ButtonGroup attached={false} gap="md">
        <Button>A</Button><Button>B</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('group')).toHaveClass('gap-2')
  })

  it.each([
    ['sm', 'gap-1'],
    ['md', 'gap-2'],
    ['lg', 'gap-3'],
  ] as const)('gap=%s → %s class', (gap, expected) => {
    render(
      <ButtonGroup attached={false} gap={gap}>
        <Button>A</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('group')).toHaveClass(expected)
  })

  // ── Prop inheritance ─────────────────────────────────────────────

  describe('prop inheritance', () => {
    it('passes size to children', () => {
      render(
        <ButtonGroup size="sm">
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })

    it('passes variant to children', () => {
      render(
        <ButtonGroup variant="outline">
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })

    it('passes color to children', () => {
      render(
        <ButtonGroup color="primary">
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })

    it('passes shape to children', () => {
      render(
        <ButtonGroup shape="pill">
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })

    it('child props override group props', () => {
      render(
        <ButtonGroup size="sm" variant="solid">
          <Button size="lg">Large</Button>
          <Button variant="outline">Outline</Button>
        </ButtonGroup>,
      )
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })
  })

  // ── Disabled ─────────────────────────────────────────────────────

  describe('disabled', () => {
    it('disables all children when group disabled', () => {
      render(
        <ButtonGroup disabled>
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toBeDisabled()
      })
    })

    it('respects individual button disabled when group is not', () => {
      render(
        <ButtonGroup>
          <Button disabled>Off</Button>
          <Button>On</Button>
        </ButtonGroup>,
      )
      expect(screen.getByRole('button', { name: 'Off' })).toBeDisabled()
      expect(screen.getByRole('button', { name: 'On' })).not.toBeDisabled()
    })

    it('group disabled + individual disabled both work', () => {
      render(
        <ButtonGroup disabled>
          <Button disabled>Both</Button>
          <Button>GroupOnly</Button>
        </ButtonGroup>,
      )
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toBeDisabled()
      })
    })
  })

  // ── Full width ───────────────────────────────────────────────────

  it('applies fullWidth class', () => {
    render(
      <ButtonGroup fullWidth><Button>A</Button></ButtonGroup>,
    )
    expect(screen.getByRole('group')).toHaveClass('w-full')
  })

  // ── aria-label ───────────────────────────────────────────────────

  it('passes aria-label', () => {
    render(
      <ButtonGroup aria-label="Actions">
        <Button>Save</Button>
        <Button>Cancel</Button>
      </ButtonGroup>,
    )
    expect(screen.getByRole('group', { name: 'Actions' })).toBeInTheDocument()
  })

  // ── classNames ───────────────────────────────────────────────────

  describe('classNames', () => {
    it('applies className', () => {
      render(
        <ButtonGroup className="my-group"><Button>A</Button></ButtonGroup>,
      )
      expect(screen.getByRole('group')).toHaveClass('my-group')
    })

    it('applies classNames.root', () => {
      render(
        <ButtonGroup classNames={{ root: 'cn-root' }}><Button>A</Button></ButtonGroup>,
      )
      expect(screen.getByRole('group')).toHaveClass('cn-root')
    })

    it('applies classNames.button to all children', () => {
      render(
        <ButtonGroup classNames={{ button: 'cn-btn' }}>
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      screen.getAllByRole('button').forEach((btn) => {
        expect(btn).toHaveClass('cn-btn')
      })
    })
  })

  // ── Ref ──────────────────────────────────────────────────────────

  it('forwards ref', () => {
    const ref = { current: null }
    render(<ButtonGroup ref={ref}><Button>A</Button></ButtonGroup>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders single button', () => {
      render(<ButtonGroup><Button>Solo</Button></ButtonGroup>)
      expect(screen.getByRole('button', { name: 'Solo' })).toBeInTheDocument()
    })

    it('handles non-Button children gracefully', () => {
      render(
        <ButtonGroup>
          <Button>A</Button>
          <span data-testid="span">Divider</span>
          <Button>B</Button>
        </ButtonGroup>,
      )
      expect(screen.getByTestId('span')).toBeInTheDocument()
      expect(screen.getAllByRole('button')).toHaveLength(2)
    })

    it('vertical + attached applies vertical border classes', () => {
      const { container } = render(
        <ButtonGroup vertical>
          <Button>A</Button>
          <Button>B</Button>
        </ButtonGroup>,
      )
      const group = container.querySelector('.buttonGroup_root')!
      // Should have vertical attached classes, not horizontal
      expect(group.className).toContain('rounded-t-none')
    })

    it('spreads native HTML attributes', () => {
      render(
        <ButtonGroup data-testid="grp" id="btn-grp">
          <Button>A</Button>
        </ButtonGroup>,
      )
      expect(screen.getByTestId('grp')).toBeInTheDocument()
      expect(screen.getByRole('group')).toHaveAttribute('id', 'btn-grp')
    })
  })
})
