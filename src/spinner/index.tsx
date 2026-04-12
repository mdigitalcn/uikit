'use client'

import { cva } from 'class-variance-authority'
import React from 'react'

import { cn } from '../utils'
import { colorVars } from '../variants'
import type { SpinnerProps } from './types'

const spinnerVariants = cva(
  'inline-block border border-current border-t-transparent rounded-full animate-spin',
  {
    variants: {
      size: {
        xs: 'w-(--spinner-size-xs) h-(--spinner-size-xs) border',
        sm: 'w-(--spinner-size-sm) h-(--spinner-size-sm) border',
        md: 'w-(--spinner-size-md) h-(--spinner-size-md) border-2',
        lg: 'w-(--spinner-size-lg) h-(--spinner-size-lg) border-2',
      },
      color: colorVars,
    },
    defaultVariants: {
      size: 'sm',
      color: 'primary',
    },
  },
)

const dotSizes = { xs: 'w-(--spinner-dot-size-xs) h-(--spinner-dot-size-xs)', sm: 'w-(--spinner-dot-size-sm) h-(--spinner-dot-size-sm)', md: 'w-(--spinner-dot-size-md) h-(--spinner-dot-size-md)', lg: 'w-(--spinner-dot-size-lg) h-(--spinner-dot-size-lg)' } as const
const pulseSizes = { xs: 'w-(--spinner-size-xs) h-(--spinner-size-xs)', sm: 'w-(--spinner-size-sm) h-(--spinner-size-sm)', md: 'w-(--spinner-size-md) h-(--spinner-size-md)', lg: 'w-(--spinner-size-lg) h-(--spinner-size-lg)' } as const

const Spinner = React.memo<SpinnerProps>(({ size = 'sm', color = 'primary', variant = 'ring', label, className }) => {
  if (variant === 'dots') {
    return (
      <div data-slot="root" className={cn('spinner_root', 'inline-flex flex-col items-center gap-2', className)}>
        <div className={cn('inline-flex gap-1 items-center', colorVars[color])} role="status" aria-label={label || 'Loading'}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={cn(dotSizes[size], 'rounded-full bg-slot animate-pulse')}
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
        {label && <span className="text-sm text-text-secondary">{label}</span>}
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div data-slot="root" className={cn('spinner_root', 'inline-flex flex-col items-center gap-2', className)}>
        <div className={cn(pulseSizes[size], 'rounded-full bg-slot animate-pulse', colorVars[color])} role="status" aria-label={label || 'Loading'} />
        {label && <span className="text-sm text-text-secondary">{label}</span>}
      </div>
    )
  }

  return (
    <div data-slot="root" className={cn('spinner_root', 'inline-flex flex-col items-center gap-2', className)}>
      <div
        className={cn(spinnerVariants({ size, color }), 'text-slot')}
        role="status"
        aria-label={label || 'Loading'}
      />
      {label && <span className="text-sm text-text-secondary">{label}</span>}
    </div>
  )
})

Spinner.displayName = 'Spinner'

export type * from './types'
export { Spinner }
export default Spinner
