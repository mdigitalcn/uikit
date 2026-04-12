'use client'

import React, { useEffect, useRef } from 'react'

import { Spinner } from '../spinner'
import { cn } from '../utils'
import type { FetchingOverlayProps } from './types'

const FetchingOverlay = React.memo<FetchingOverlayProps>(({
  isFetching,
  size = 'lg',
  fullscreen = true,
  backdropOpacity = 30,
  className,
  ...rest
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  // Focus trap: prevent tabbing to content behind overlay
  useEffect(() => {
    if (!isFetching) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        e.preventDefault()
        overlayRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isFetching])

  return (
    <div
      ref={overlayRef}
      tabIndex={isFetching ? -1 : undefined}
      data-slot="root"
      className={cn(
        'fetchingOverlay_root',
        '[--_duration:var(--duration-slow)] absolute inset-0 flex items-center justify-center transition-opacity duration-slot',
        fullscreen && 'fixed w-full h-screen z-[var(--z-overlay)]',
        isFetching ? 'opacity-100' : 'opacity-0 pointer-events-none',
        className,
      )}
      style={isFetching ? { backgroundColor: `oklch(0% 0 0 / ${backdropOpacity}%)` } : undefined}
      role="status"
      aria-busy={isFetching}
      aria-label={isFetching ? "Loading content" : undefined}
    >
      {isFetching && (
        <Spinner
          size={size}
          {...rest}
        />
      )}
    </div>
  )
})

FetchingOverlay.displayName = 'FetchingOverlay'

export type * from './types'
export default FetchingOverlay
