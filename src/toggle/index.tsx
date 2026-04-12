'use client'

import { cva } from 'class-variance-authority'
import React from 'react'

import { useControllable } from '../hooks/useControllable'
import { useRipple, RippleContainer } from '../hooks/useRipple'
import { cn } from '../utils'
import { colorVars } from '../variants'
import type { SingleToggleProps } from './types'

const getToggleClasses = (
  color: string,
  variant: string,
  isActive: boolean,
) => {
  const baseColor = colorVars[color as keyof typeof colorVars] || colorVars.default

  if (!isActive) {
    return cn(baseColor, 'border-border text-text-secondary hover:text-slot hover:bg-slot-10 hover:border-slot-30')
  }

  if (variant === 'solid') {
    return cn(baseColor, 'bg-slot border-slot text-slot-fg')
  }
  if (variant === 'soft') {
    return cn(baseColor, 'bg-slot-10 border-slot-30 text-slot')
  }
  // default variant
  return cn(baseColor, 'bg-slot-10 border-slot text-slot')
}

const singleToggleVariants = cva(
  'inline-flex items-center gap-2 font-medium transition-colors cursor-pointer border [--_radius:var(--radius-button)] rounded-slot focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slot focus-visible:ring-offset-background',
  {
    variants: {
      size: {
        xs: 'text-xs h-(--toggle-height-xs) px-(--toggle-padding-x-xs)',
        sm: 'text-sm h-(--toggle-height-sm) px-(--toggle-padding-x-sm)',
        md: 'text-base h-(--toggle-height-md) px-(--toggle-padding-x-md)',
        lg: 'text-lg h-(--toggle-height-lg) px-(--toggle-padding-x-lg)',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const Toggle = React.memo<SingleToggleProps>(
  ({
    pressed: controlledPressed,
    defaultPressed = false,
    color = 'primary',
    size = 'md',
    variant = 'default',
    onChange,
    disabled = false,
    icon,
    children,
    'aria-label': ariaLabel,
    className,
    classNames,
    ref,
  }) => {
    const [pressed, setPressed] = useControllable({ value: controlledPressed, defaultValue: defaultPressed ?? false, onChange })
    const { ripples, onPointerDown: ripplePointerDown, onKeyDown: rippleKeyDown, onAnimationEnd: rippleAnimationEnd } = useRipple(!disabled)

    const handleClick = () => {
      if (disabled) return
      setPressed(!pressed)
    }

    return (
      <button
        data-slot="root"
        ref={ref}
        type="button"
        className={cn(
          'toggle_root',
          singleToggleVariants({ size }),
          getToggleClasses(color, variant, pressed),
          'border relative overflow-hidden',
          disabled && 'opacity-50 cursor-not-allowed',
          classNames?.root,
          className,
        )}
        onClick={handleClick}
        onPointerDown={ripplePointerDown}
        onKeyDown={rippleKeyDown}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        aria-pressed={pressed}
        aria-label={ariaLabel}
      >
        {icon}
        {children}
        <RippleContainer ripples={ripples} onAnimationEnd={rippleAnimationEnd} />
      </button>
    )
  },
)

Toggle.displayName = 'Toggle'

export type * from './types'
export default Toggle
