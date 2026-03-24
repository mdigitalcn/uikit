import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Mentions from './index'

const users = [
  { label: 'John Doe', value: 'john' },
  { label: 'Jane Smith', value: 'jane' },
  { label: 'Bob Wilson', value: 'bob' },
]

describe('Mentions', () => {
  it('renders with label', () => {
    render(<Mentions label="Comment" options={users} />)
    expect(screen.getByText('Comment')).toBeInTheDocument()
  })

  it('renders data-slot="root"', () => {
    const { container } = render(<Mentions options={users} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders textarea', () => {
    render(<Mentions options={users} placeholder="Type here..." />)
    expect(screen.getByPlaceholderText('Type here...')).toBeInTheDocument()
  })

  it('calls onChange on input', () => {
    const onChange = vi.fn()
    render(<Mentions options={users} onChange={onChange} />)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'hello' } })
    expect(onChange).toHaveBeenCalledWith('hello')
  })

  it('shows error message', () => {
    render(<Mentions options={users} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('shows helper text', () => {
    render(<Mentions options={users} helperText="Use @ to mention" />)
    expect(screen.getByText('Use @ to mention')).toBeInTheDocument()
  })

  it('renders controlled value', () => {
    render(<Mentions options={users} value="Hello @john" />)
    expect(screen.getByDisplayValue('Hello @john')).toBeInTheDocument()
  })

  it('respects disabled state', () => {
    render(<Mentions options={users} disabled />)
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  it('renders all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Mentions options={users} size={size} />)
      unmount()
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Mentions options={users} className="custom" />)
    expect(container.querySelector('.custom')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<Mentions options={users} label="Mention someone" />)
    expect(screen.getByText('Mention someone')).toBeInTheDocument()
  })

  it('has combobox role on textarea', () => {
    const { container } = render(<Mentions options={users} />)
    expect(container.querySelector('[role="combobox"]')).toBeInTheDocument()
  })

  it('renders data-slot root', () => {
    const { container } = render(<Mentions options={users} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders with helperText', () => {
    render(<Mentions options={users} helperText="Type @ to mention" />)
    expect(screen.getByText('Type @ to mention')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<Mentions options={users} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })


})
