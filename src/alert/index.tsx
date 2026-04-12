'use client'

import { cva } from 'class-variance-authority'
import React from 'react'

import { X } from 'lucide-react'
import { cn, iconSizes } from '../utils'
import { colorVars } from '../variants'
import type { AlertProps } from './types'

const alertVariants = cva(
  'relative flex gap-3 [--_radius:var(--radius-alert)] rounded-slot',
  {
    variants: {
      variant: {
        default: 'bg-slot border border-slot text-slot-fg',
        solid: 'bg-slot text-slot-fg',
        outline: 'bg-background border border-slot text-slot',
        soft: 'bg-slot-10 text-slot',
      },
      color: colorVars,
      size: {
        xs: 'p-2 gap-2 text-xs',
        sm: 'p-3 gap-2.5 text-sm',
        md: 'p-4 gap-3 text-sm',
        lg: 'p-5 gap-3.5 text-base',
      },
    },
    defaultVariants: {
      variant: 'soft',
      color: 'default',
      size: 'md',
    },
  },
)

const Alert = React.memo<AlertProps>(
  ({
    title,
    description,
    icon,
    variant = 'soft',
    color = 'default',
    size = 'md',
    closable = false,
    visible: controlledVisible,
    onClose,
    closeButtonLabel = 'Close alert',
    action,
    className,
    classNames,
    children,
    ...props
  }) => {
    const [internalVisible, setInternalVisible] = React.useState(true)
    const isVisible = controlledVisible !== undefined ? controlledVisible : internalVisible
    const titleId = React.useId()
    const descriptionId = React.useId()

    if (!isVisible) return null

    const handleClose = () => {
      setInternalVisible(false)
      onClose?.()
    }

    const hasTitle = title != null
    const hasDescription = description != null

    return (
      <div
        role="alert"
        data-slot="root"
        aria-labelledby={hasTitle ? titleId : undefined}
        aria-describedby={hasDescription ? descriptionId : undefined}
        className={cn(
          'alert_root',
          alertVariants({ variant, color, size }),
          '[--_duration:var(--duration-enter)] animate-in fade-in-0 slide-in-from-top-2 duration-slot',
          classNames?.root,
          className,
        )}
        {...props}
      >
        {icon && (
          <div
            data-slot="icon"
            className={cn('alert_icon', 'shrink-0 mt-0.5', iconSizes[size], classNames?.icon)}
          >
            {icon}
          </div>
        )}

        <div
          data-slot="content"
          className={cn('alert_content', 'flex-1 min-w-0', classNames?.content)}
        >
          {hasTitle && (
            <div
              id={titleId}
              data-slot="title"
              className={cn('alert_title', 'font-semibold', classNames?.title)}
            >
              {title}
            </div>
          )}
          {hasDescription && (
            <div
              id={descriptionId}
              data-slot="description"
              className={cn(
                'alert_description',
                'opacity-90',
                hasTitle && 'mt-1',
                classNames?.description,
              )}
            >
              {description}
            </div>
          )}
          {children}
        </div>

        {action && (
          <div
            data-slot="action"
            className={cn('alert_action', 'shrink-0 flex items-center', classNames?.action)}
          >
            {action}
          </div>
        )}

        {closable && (
          <button
            type="button"
            onClick={handleClose}
            data-slot="closeButton"
            className={cn(
              'alert_closeButton',
              'shrink-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer',
              classNames?.closeButton,
            )}
            aria-label={closeButtonLabel}
          >
            <X className={iconSizes[size]} />
          </button>
        )}
      </div>
    )
  },
)

Alert.displayName = 'Alert'

export type * from './types'
export default Alert
