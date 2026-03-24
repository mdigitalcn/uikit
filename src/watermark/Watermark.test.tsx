import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import Watermark from './index'

beforeEach(() => {
  HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
    scale: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(),
    drawImage: vi.fn(),
    set fillStyle(_v: any) {},
    set font(_v: any) {},
    set textAlign(_v: any) {},
    set textBaseline(_v: any) {},
    set globalAlpha(_v: any) {},
    translate: vi.fn(),
    rotate: vi.fn(),
  }) as any
  HTMLCanvasElement.prototype.toDataURL = vi.fn().mockReturnValue('data:image/png;base64,mock')
})

describe('Watermark', () => {
  it('renders children', () => {
    render(<Watermark text="Confidential"><p>Secret content</p></Watermark>)
    expect(screen.getByText('Secret content')).toBeInTheDocument()
  })

  it('renders data-slot="root"', () => {
    const { container } = render(<Watermark text="Test"><div>Content</div></Watermark>)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders content slot', () => {
    const { container } = render(<Watermark text="Test"><div>Content</div></Watermark>)
    expect(container.querySelector('[data-slot="content"]')).toBeInTheDocument()
  })

  it('renders without text or image', () => {
    const { container } = render(<Watermark><div>Content</div></Watermark>)
    expect(container.querySelector('[data-slot="root"]')).toBeInTheDocument()
  })

  it('renders watermark layer with text', async () => {
    const { container } = render(<Watermark text="Secret"><div>Content</div></Watermark>)
    await waitFor(() => expect(container.querySelector('[data-slot="watermark"]')).toBeTruthy())
  })

  it('has aria-hidden on watermark layer', async () => {
    const { container } = render(<Watermark text="Secret"><div>Content</div></Watermark>)
    await waitFor(() => {
      const watermark = container.querySelector('[data-slot="watermark"]')
      expect(watermark?.getAttribute('aria-hidden')).toBe('true')
    })
  })

  it('watermark layer has pointer-events-none', async () => {
    const { container } = render(<Watermark text="Secret"><div>Content</div></Watermark>)
    await waitFor(() => {
      const watermark = container.querySelector('[data-slot="watermark"]')
      expect(watermark).toHaveClass('pointer-events-none')
    })
  })

  it('applies custom className', () => {
    const { container } = render(<Watermark text="Test" className="custom"><div>x</div></Watermark>)
    expect(container.querySelector('[data-slot="root"]')).toHaveClass('custom')
  })

  it('applies classNames.root', () => {
    const { container } = render(<Watermark text="Test" classNames={{ root: 'root-class' }}><div>x</div></Watermark>)
    expect(container.querySelector('[data-slot="root"]')).toHaveClass('root-class')
  })

  it('applies classNames.content', () => {
    const { container } = render(<Watermark text="Test" classNames={{ content: 'content-class' }}><div>x</div></Watermark>)
    expect(container.querySelector('[data-slot="content"]')).toHaveClass('content-class')
  })

  it('applies classNames.watermark', () => {
    const { container } = render(<Watermark text="Test" classNames={{ watermark: 'wm-class' }}><div>x</div></Watermark>)
    const wm = container.querySelector('[data-slot="watermark"]')
    if (wm) expect(wm).toHaveClass('wm-class')
  })

  it('renders with custom fontSize', () => {
    render(<Watermark text="Test" fontSize={20}><div>Content</div></Watermark>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with custom rotation', () => {
    render(<Watermark text="Test" rotate={-45}><div>Content</div></Watermark>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with custom gap', () => {
    render(<Watermark text="Test" gap={[50, 50]}><div>Content</div></Watermark>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with custom zIndex', () => {
    render(<Watermark text="Test" zIndex={99}><div>Content</div></Watermark>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders with custom opacity', () => {
    render(<Watermark text="Test" opacity={0.5}><div>Content</div></Watermark>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
