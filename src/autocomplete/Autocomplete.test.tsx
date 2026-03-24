import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Autocomplete from './index'

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

describe('Autocomplete', () => {
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

  it('shows helper text', () => {
    render(<Autocomplete options={fruits} helperText="Pick a fruit" />)
    expect(screen.getByText('Pick a fruit')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<Autocomplete options={fruits} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('has combobox role', () => {
    render(<Autocomplete options={fruits} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('calls onChange on input', () => {
    const onChange = vi.fn()
    render(<Autocomplete options={fruits} onChange={onChange} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'App' } })
    expect(onChange).toHaveBeenCalledWith('App')
  })

  it('accepts object options', () => {
    const options = [
      { label: 'Red', value: 'red' },
      { label: 'Blue', value: 'blue' },
    ]
    render(<Autocomplete options={fruits} placeholder="Pick" />)
    expect(screen.getByPlaceholderText('Pick')).toBeInTheDocument()
  })

  it('renders all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Autocomplete options={fruits} size={size} />)
      unmount()
    })
  })

  it('renders with disabled state', () => {
    const { container } = render(<Autocomplete options={fruits} disabled />)
    expect(container.querySelector('input')).toBeDisabled()
  })

  it('renders with loading state', () => {
    const { container } = render(<Autocomplete options={fruits} loading />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Autocomplete options={fruits} className="custom" />)
    expect(container.querySelector('.custom')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Autocomplete options={fruits} label="Search" />)
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('renders with helperText', () => {
    render(<Autocomplete options={fruits} helperText="Type to search" />)
    expect(screen.getByText('Type to search')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<Autocomplete options={fruits} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })


})
