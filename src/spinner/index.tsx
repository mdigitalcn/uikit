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
        xs: 'w-3 h-3 border',
        sm: 'w-4 h-4 border',
        md: 'w-6 h-6 border-2',
        lg: 'w-8 h-8 border-2',
      },
      color: colorVars,
    },
    defaultVariants: {
      size: 'sm',
      color: 'primary',
    },
  },
)

const dotSizes = { xs: 'w-1.5 h-1.5', sm: 'w-2 h-2', md: 'w-2.5 h-2.5', lg: 'w-3 h-3' } as const
const pulseSizes = { xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8' } as const

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
