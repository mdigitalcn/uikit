'use client'

import { cva } from 'class-variance-authority'
import { CircleCheck, CircleX, Info, SearchX, TriangleAlert } from 'lucide-react'
import React from 'react'

import { cn } from '../utils'
import type { ResultProps, ResultStatus } from './types'

const statusConfig: Record<ResultStatus, { color: string; defaultTitle: string }> = {
  success: { color: 'text-success', defaultTitle: 'Successfully Done' },
  error: { color: 'text-error', defaultTitle: 'Something Went Wrong' },
  info: { color: 'text-info', defaultTitle: 'Information' },
  warning: { color: 'text-warning', defaultTitle: 'Warning' },
  '403': { color: 'text-warning', defaultTitle: '403 — Access Denied' },
  '404': { color: 'text-info', defaultTitle: '404 — Page Not Found' },
  '500': { color: 'text-error', defaultTitle: '500 — Server Error' },
}

const resultVariants = cva('flex flex-col items-center text-center', {
  variants: {
    size: {
      xs: 'py-6 px-4',
      sm: 'py-8 px-4',
      md: 'py-12 px-6',
      lg: 'py-16 px-8',
    },
  },
  defaultVariants: { size: 'md' },
})

const iconSizeMap = { xs: 'w-10 h-10', sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' }
const titleVariants = cva('text-text-primary mb-2', {
  variants: { size: { xs: 'text-base font-semibold', sm: 'text-lg font-semibold', md: 'text-xl font-semibold', lg: 'text-2xl font-bold' } },
  defaultVariants: { size: 'md' },
})
const subtitleVariants = cva('text-text-secondary mb-6', {
  variants: { size: { xs: 'text-xs max-w-xs', sm: 'text-sm max-w-sm', md: 'text-sm max-w-md', lg: 'text-base max-w-lg' } },
  defaultVariants: { size: 'md' },
})
const contentMaxW = { xs: 'max-w-xs', sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg' }

const statusIcons: Record<ResultStatus, React.ElementType> = {
  success: CircleCheck,
  error: CircleX,
  info: Info,
  warning: TriangleAlert,
  '403': TriangleAlert,
  '404': SearchX,
  '500': CircleX,
}

function StatusIcon({ status, sizeClass }: { status: ResultStatus; sizeClass: string }) {
  const Icon = statusIcons[status]
  return <Icon className={cn(sizeClass, statusConfig[status].color)} strokeWidth={1.5} />
}

const Result = React.memo<ResultProps>(
  ({
    status = 'info',
    icon,
    title,
    subtitle,
    extra,
    children,
    size = 'md',
    className,
    classNames,
  }) => {
    const config = statusConfig[status]

    return (
      <div
        data-slot="root"
        role="status"
        aria-label={typeof title === 'string' ? title : config.defaultTitle}
        className={cn(
          'result_root',
          resultVariants({ size }),
          classNames?.root,
          className,
        )}
      >
        <div data-slot="icon" className={cn('result_icon', 'mb-6', classNames?.icon)}>
          {icon ?? <StatusIcon status={status} sizeClass={iconSizeMap[size]} />}
        </div>

        <h3 data-slot="title" className={cn('result_title', titleVariants({ size }), classNames?.title)}>
          {title ?? config.defaultTitle}
        </h3>

        {subtitle && (
          <p data-slot="subtitle" className={cn('result_subtitle', subtitleVariants({ size }), classNames?.subtitle)}>
            {subtitle}
          </p>
        )}

        {extra && (
          <div data-slot="extra" className={cn('result_extra', 'flex items-center gap-3 mb-6', classNames?.extra)}>
            {extra}
          </div>
        )}

        {children && (
          <div data-slot="content" className={cn('result_content', 'w-full', contentMaxW[size], classNames?.content)}>
            {children}
          </div>
        )}
      </div>
    )
  },
)

Result.displayName = 'Result'

export type * from './types'
export default Result
