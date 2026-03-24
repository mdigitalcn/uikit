import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './index'

describe('Resizable', () => {
  it('renders panel group', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>Left</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Right</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders panels', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>B</ResizablePanel>
      </ResizablePanelGroup>,
    )
    const panels = container.querySelectorAll('[data-slot="resizable-panel"]')
    expect(panels.length).toBe(2)
  })

  it('renders handle', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>A</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>B</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(container.querySelector('[data-slot="resizable-handle"]')).toBeInTheDocument()
  })

  it('renders vertical layout', () => {
    const { container } = render(
      <ResizablePanelGroup direction="vertical">
        <ResizablePanel defaultSize={50}>Top</ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>Bottom</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders handle with grip', () => {
    const { container } = render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>A</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>B</ResizablePanel>
      </ResizablePanelGroup>,
    )
    expect(container.querySelector('[data-slot="resizable-handle"]')).toBeInTheDocument()
  })

  it('renders panel group', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders handle between panels', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-handle"]')).toBeInTheDocument()
  })

  it('renders with vertical direction', () => {
    const { container } = render(<ResizablePanelGroup direction="vertical"><ResizablePanel>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders panel content', () => {
    render(<ResizablePanelGroup direction="horizontal"><ResizablePanel>Panel Content</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(screen.getByText('Panel Content')).toBeInTheDocument()
  })

  it('renders handle with icon', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel>A</ResizablePanel><ResizableHandle withHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-handle"]')).toBeInTheDocument()
  })

  it('applies custom className to panel group', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal" className="custom"><ResizablePanel>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toHaveClass('custom')
  })

  it('renders multiple panels', () => {
    render(<ResizablePanelGroup direction="horizontal"><ResizablePanel>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel><ResizableHandle /><ResizablePanel>C</ResizablePanel></ResizablePanelGroup>)
    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('renders with defaultSize on panel', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel defaultSize={30}>A</ResizablePanel><ResizableHandle /><ResizablePanel defaultSize={70}>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders with minSize on panel', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel minSize={20}>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })

  it('renders with collapsible panel', () => {
    const { container } = render(<ResizablePanelGroup direction="horizontal"><ResizablePanel collapsible>A</ResizablePanel><ResizableHandle /><ResizablePanel>B</ResizablePanel></ResizablePanelGroup>)
    expect(container.querySelector('[data-slot="resizable-group"]')).toBeInTheDocument()
  })


})
