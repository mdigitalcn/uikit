import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import TreeSelect from './index'
import type { TreeNode } from '../tree/types'

const sampleData: TreeNode[] = [
  {
    key: 'fruits',
    label: 'Fruits',
    children: [
      { key: 'apple', label: 'Apple' },
      { key: 'banana', label: 'Banana' },
    ],
  },
  { key: 'grain', label: 'Grain' },
]

describe('TreeSelect', () => {
  it('renders with placeholder', () => {
    render(<TreeSelect data={sampleData} placeholder="Select item" />)
    expect(screen.getByText('Select item')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<TreeSelect data={sampleData} label="Category" />)
    expect(screen.getByText('Category')).toBeInTheDocument()
  })

  it('shows helper text', () => {
    render(<TreeSelect data={sampleData} helperText="Pick one" />)
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('shows error message', () => {
    render(<TreeSelect data={sampleData} error="Required" />)
    expect(screen.getByText('Required')).toBeInTheDocument()
  })

  it('renders root data-slot', () => {
    const { container } = render(<TreeSelect data={sampleData} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders without crashing when no data', () => {
    const { container } = render(<TreeSelect data={[]} />)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('shows selected value in trigger', () => {
    render(<TreeSelect data={sampleData} value="grain" placeholder="Select item" />)
    const matches = screen.getAllByText('Grain')
    expect(matches.length).toBeGreaterThanOrEqual(1)
    // The visible display span should show the value
    const visibleSpan = matches.find(el => !el.closest('[aria-hidden="true"]'))
    expect(visibleSpan).toBeInTheDocument()
  })

  it('renders with disabled state', () => {
    const { container } = render(<TreeSelect data={sampleData} disabled />)
    expect(container.querySelector('.treeSelect_trigger')).toBeInTheDocument()
  })

  it('renders with loading state', () => {
    const { container } = render(<TreeSelect data={sampleData} loading />)
    expect(container.querySelector('.treeSelect_trigger')).toBeInTheDocument()
  })

  it('renders all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<TreeSelect data={sampleData} size={size} />)
      unmount()
    })
  })

  it('applies custom className', () => {
    const { container } = render(<TreeSelect data={sampleData} className="custom" />)
    expect(container.querySelector('.custom')).toBeInTheDocument()
  })

  it('renders with label', () => {
    render(<TreeSelect data={sampleData} label="Select tree" />)
    expect(screen.getByText('Select tree')).toBeInTheDocument()
  })

  it('renders with placeholder', () => {
    render(<TreeSelect data={sampleData} placeholder="Choose..." />)
    expect(screen.getByText('Choose...')).toBeInTheDocument()
  })

  it('renders with helperText', () => {
    render(<TreeSelect data={sampleData} helperText="Pick one" />)
    expect(screen.getByText('Pick one')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<TreeSelect data={sampleData} error="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })


})
