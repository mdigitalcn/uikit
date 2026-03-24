import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title, Text, Paragraph } from './index'

describe('Title', () => {
  it('renders h1 by default', () => {
    render(<Title>Hello</Title>)
    expect(screen.getByText('Hello').tagName).toBe('H1')
  })

  it('renders correct heading level', () => {
    render(<Title level="h3">Heading 3</Title>)
    expect(screen.getByText('Heading 3').tagName).toBe('H3')
  })

  it('has data-slot="title"', () => {
    const { container } = render(<Title>Test</Title>)
    expect(container.querySelector('[data-slot="title"]')).toBeInTheDocument()
  })

  it('renders copy button when copyable', () => {
    render(<Title copyable>Copy me</Title>)
    expect(screen.getByLabelText('Copy to clipboard')).toBeInTheDocument()
  })
})

describe('Text', () => {
  it('renders span by default', () => {
    render(<Text>Hello</Text>)
    expect(screen.getByText('Hello').tagName).toBe('SPAN')
  })

  it('renders as different element', () => {
    render(<Text as="p">Paragraph</Text>)
    expect(screen.getByText('Paragraph').tagName).toBe('P')
  })

  it('renders code style', () => {
    render(<Text code>const x = 1</Text>)
    expect(screen.getByText('const x = 1').closest('code')).toBeInTheDocument()
  })

  it('renders mark style', () => {
    render(<Text mark>Highlighted</Text>)
    expect(screen.getByText('Highlighted').closest('mark')).toBeInTheDocument()
  })

  it('renders strong', () => {
    render(<Text strong>Bold text</Text>)
    expect(screen.getByText('Bold text').closest('strong')).toBeInTheDocument()
  })

  it('has data-slot="text"', () => {
    const { container } = render(<Text>Test</Text>)
    expect(container.querySelector('[data-slot="text"]')).toBeInTheDocument()
  })
})

describe('Paragraph', () => {
  it('renders p element', () => {
    render(<Paragraph>Content</Paragraph>)
    expect(screen.getByText('Content').tagName).toBe('P')
  })

  it('has data-slot="paragraph"', () => {
    const { container } = render(<Paragraph>Test</Paragraph>)
    expect(container.querySelector('[data-slot="paragraph"]')).toBeInTheDocument()
  })

  it('renders all heading levels', () => {
    const levels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
    levels.forEach((level) => {
      const { unmount } = render(<Title level={level}>Heading</Title>)
      unmount()
    })
  })

  it('renders Text with all sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const
    sizes.forEach((size) => {
      const { unmount } = render(<Text size={size}>Text</Text>)
      unmount()
    })
  })

  it('renders Paragraph component', () => {
    render(<Paragraph>Paragraph text</Paragraph>)
    expect(screen.getByText('Paragraph text')).toBeInTheDocument()
  })


})
