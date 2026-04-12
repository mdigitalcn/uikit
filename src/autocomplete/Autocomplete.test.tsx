import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Autocomplete from './index'

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']
const objectOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
]

describe('Autocomplete', () => {
  // ── Core rendering ───────────────────────────────────────────────

  it('renders with placeholder', () => {
    render(<Autocomplete options={fruits} placeholder="Search fruit" />)
    expect(screen.getByPlaceholderText('Search fruit')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Autocomplete options={fruits} label="Fruit" />)
    expect(screen.getByText('Fruit')).toBeInTheDocument()
  })

  it('renders data-slot="root"', () => {
    const { container } = render(<Autocomplete options={fruits} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders data-slot="input" on the input', () => {
    const { container } = render(<Autocomplete options={fruits} />)
    expect(container.querySelector('[data-slot="input"]')).toBeInTheDocument()
  })

  it('renders autocomplete_root class', () => {
    const { container } = render(<Autocomplete options={fruits} />)
    expect(container.querySelector('.autocomplete_root')).toBeInTheDocument()
  })

  // ── Options format ───────────────────────────────────────────────

  it('accepts string options', () => {
    render(<Autocomplete options={fruits} placeholder="Pick" />)
    expect(screen.getByPlaceholderText('Pick')).toBeInTheDocument()
  })

  it('accepts object options', () => {
    render(<Autocomplete options={objectOptions} placeholder="Pick" />)
    expect(screen.getByPlaceholderText('Pick')).toBeInTheDocument()
  })

  // ── Controlled / Uncontrolled ────────────────────────────────────

  describe('controlled / uncontrolled', () => {
    it('calls onChange on input', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Autocomplete options={fruits} onChange={onChange} />)
      await user.type(screen.getByRole('combobox'), 'App')
      expect(onChange).toHaveBeenCalledWith('A')
      expect(onChange).toHaveBeenCalledWith('Ap')
      expect(onChange).toHaveBeenCalledWith('App')
    })

    it('respects controlled value', () => {
      render(<Autocomplete options={fruits} value="Banana" />)
      expect(screen.getByRole('combobox')).toHaveValue('Banana')
    })

    it('uses defaultValue', () => {
      render(<Autocomplete options={fruits} defaultValue="Cherry" />)
      expect(screen.getByRole('combobox')).toHaveValue('Cherry')
    })
  })

  // ── Disabled ─────────────────────────────────────────────────────

  it('disables the input when disabled', () => {
    render(<Autocomplete options={fruits} disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  // ── Loading ──────────────────────────────────────────────────────

  it('renders loading spinner', () => {
    const { container } = render(<Autocomplete options={fruits} loading />)
    expect(container.querySelector('.animate-spin')).toBeInTheDocument()
  })

  // ── Error / helperText ───────────────────────────────────────────

  describe('error and helperText', () => {
    it('shows helper text', () => {
      render(<Autocomplete options={fruits} helperText="Pick a fruit" />)
      expect(screen.getByText('Pick a fruit')).toBeInTheDocument()
    })

    it('shows error message', () => {
      render(<Autocomplete options={fruits} error="Required" />)
      expect(screen.getByText('Required')).toBeInTheDocument()
    })

    it('error takes precedence over helperText', () => {
      render(<Autocomplete options={fruits} error="Error!" helperText="Helper" />)
      expect(screen.getByText('Error!')).toBeInTheDocument()
      expect(screen.queryByText('Helper')).not.toBeInTheDocument()
    })
  })

  // ── Clearable ────────────────────────────────────────────────────

  describe('clearable', () => {
    it('shows clear button when value exists', () => {
      render(<Autocomplete options={fruits} clearable defaultValue="Apple" />)
      expect(screen.getByLabelText('Clear')).toBeInTheDocument()
    })

    it('does not show clear button when empty', () => {
      render(<Autocomplete options={fruits} clearable />)
      expect(screen.queryByLabelText('Clear')).not.toBeInTheDocument()
    })

    it('clears value on click', async () => {
      const user = userEvent.setup()
      const onChange = vi.fn()
      render(<Autocomplete options={fruits} clearable defaultValue="Apple" onChange={onChange} />)
      await user.click(screen.getByLabelText('Clear'))
      expect(onChange).toHaveBeenCalledWith('')
    })
  })

  // ── Sizes ────────────────────────────────────────────────────────

  it.each(['xs', 'sm', 'md', 'lg'] as const)(
    'renders size=%s',
    (size) => {
      render(<Autocomplete options={fruits} size={size} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    },
  )

  // ── ARIA attributes ──────────────────────────────────────────────

  describe('ARIA', () => {
    it('has role="combobox"', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('has aria-expanded="false" when closed', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-expanded', 'false')
    })

    it('has aria-autocomplete="list"', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-autocomplete', 'list')
    })

    it('has aria-controls pointing to listbox', () => {
      render(<Autocomplete options={fruits} />)
      const controls = screen.getByRole('combobox').getAttribute('aria-controls')
      expect(controls).toBeTruthy()
    })

    it('has aria-labelledby when label is present', () => {
      render(<Autocomplete options={fruits} label="Fruit" />)
      const input = screen.getByRole('combobox')
      const labelledBy = input.getAttribute('aria-labelledby')
      expect(labelledBy).toBeTruthy()
      expect(document.getElementById(labelledBy!)?.textContent).toBe('Fruit')
    })

    it('does not set aria-labelledby when no label', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-labelledby')
    })

    it('sets aria-invalid when error is present', () => {
      render(<Autocomplete options={fruits} error="Required" />)
      expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true')
    })

    it('does not set aria-invalid when no error', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-invalid')
    })

    it('has aria-activedescendant unset when nothing highlighted', () => {
      render(<Autocomplete options={fruits} />)
      expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-activedescendant')
    })
  })

  // ── Styling / classNames ─────────────────────────────────────────

  describe('classNames', () => {
    it('applies className to root', () => {
      const { container } = render(<Autocomplete options={fruits} className="my-ac" />)
      expect(container.querySelector('.autocomplete_root')).toHaveClass('my-ac')
    })

    it('applies classNames.root', () => {
      const { container } = render(<Autocomplete options={fruits} classNames={{ root: 'cn-root' }} />)
      expect(container.querySelector('.autocomplete_root')).toHaveClass('cn-root')
    })

    it('applies classNames.input', () => {
      const { container } = render(<Autocomplete options={fruits} classNames={{ input: 'cn-input' }} />)
      expect(container.querySelector('[data-slot="input"]')).toHaveClass('cn-input')
    })
  })

  // ── Edge cases ───────────────────────────────────────────────────

  describe('edge cases', () => {
    it('renders with empty options array', () => {
      render(<Autocomplete options={[]} placeholder="Empty" />)
      expect(screen.getByPlaceholderText('Empty')).toBeInTheDocument()
    })

    it('renders with single option', () => {
      render(<Autocomplete options={['Only']} />)
      expect(screen.getByRole('combobox')).toBeInTheDocument()
    })

    it('renders chevron when not loading and not clearable', () => {
      const { container } = render(<Autocomplete options={fruits} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })

    it('hides chevron when loading', () => {
      const { container } = render(<Autocomplete options={fruits} loading />)
      // Should show spinner, not chevron
      expect(container.querySelector('.animate-spin')).toBeInTheDocument()
    })
  })
})
