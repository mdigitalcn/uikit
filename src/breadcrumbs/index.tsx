'use client'

import { cva } from 'class-variance-authority'
import React from 'react'

import { ChevronRight, MoreHorizontal, MoreVertical } from 'lucide-react'

import Dropdown from '../dropdown'
import { cn, iconSizes } from '../utils'
import { colorVars } from '../variants'
import type {
  BreadcrumbEllipsisProps,
  BreadcrumbItemData,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbListProps,
  BreadcrumbPageProps,
  BreadcrumbProps,
  BreadcrumbsColor,
  BreadcrumbSeparatorProps,
  BreadcrumbsSize,
} from './types'

export type { BreadcrumbItemData } from './types'

interface BreadcrumbContextValue {
  color?: BreadcrumbsColor
  size?: BreadcrumbsSize
  classNames?: {
    list?: string
    item?: string
    link?: string
    separator?: string
    current?: string
    ellipsis?: string
  }
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({})

const breadcrumbVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

/**
 * Collapse middle items when maxItems is set.
 * Always keeps first `itemsBefore` and last `itemsAfter` items,
 * replaces middle with an ellipsis carrying collapsed items in dropdown.
 */
function collapseItems(
  items: BreadcrumbItemData[],
  maxItems: number,
): BreadcrumbItemData[] {
  if (items.length <= maxItems) return items

  const itemsBefore = 1
  const itemsAfter = maxItems - itemsBefore - 1 // -1 for the ellipsis itself

  const before = items.slice(0, itemsBefore)
  const after = items.slice(items.length - Math.max(itemsAfter, 1))
  const collapsed = items.slice(itemsBefore, items.length - Math.max(itemsAfter, 1))

  const ellipsisItem: BreadcrumbItemData = {
    label: '...',
    ellipsis: true,
    ellipsisItems: collapsed.map((item) => ({
      label: item.label,
      href: item.href,
      onClick: item.onClick,
    })),
  }

  return [...before, ellipsisItem, ...after]
}

const Breadcrumb = React.memo<BreadcrumbProps>(
  ({
    children,
    items: rawItems,
    color = 'default',
    size = 'md',
    separator,
    maxItems,
    className,
    classNames,
  }) => {
    const items = rawItems?.length
      ? maxItems ? collapseItems(rawItems, maxItems) : rawItems
      : undefined

    const content = items?.length ? (
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.ellipsis ? (
                  <BreadcrumbEllipsis
                    orientation={item.ellipsisOrientation || 'horizontal'}
                    items={item.ellipsisItems || []}
                    size={size}
                  />
                ) : isLast ? (
                  <BreadcrumbPage
                    startSection={item.startSection}
                    endSection={item.endSection}
                  >
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={item.href || ''}
                    onClick={item.onClick}
                    startSection={item.startSection}
                    endSection={item.endSection}
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator size={size}>
                  {separator}
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    ) : (
      children
    )

    return (
      <BreadcrumbContext.Provider value={{ color, size, classNames }}>
        <nav
          data-slot="root"
          aria-label="breadcrumb"
          className={cn(
            'breadcrumbs_root',
            breadcrumbVariants({ size }),
            colorVars[color],
            'text-slot',
            classNames?.root,
            className,
          )}
        >
          {content}
        </nav>
      </BreadcrumbContext.Provider>
    )
  },
)

Breadcrumb.displayName = 'Breadcrumb'

export const BreadcrumbList = React.memo<BreadcrumbListProps>(
  ({ children, className }) => {
    const { classNames } = React.useContext(BreadcrumbContext)

    return (
      <ol
        data-slot="list"
        className={cn(
          'breadcrumbs_list',
          'flex items-center gap-1.5',
          classNames?.list,
          className,
        )}
      >
        {children}
      </ol>
    )
  },
)

BreadcrumbList.displayName = 'BreadcrumbList'

export const BreadcrumbItem = React.memo<BreadcrumbItemProps>(
  ({ children, className }) => {
    const { classNames } = React.useContext(BreadcrumbContext)

    return (
      <li
        data-slot="item"
        className={cn(
          'breadcrumbs_item',
          'inline-flex items-center gap-1.5',
          classNames?.item,
          className,
        )}
      >
        {children}
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'BreadcrumbItem'

export const BreadcrumbLink = React.memo<BreadcrumbLinkProps>(
  ({ children, href, onClick, startSection, endSection, className }) => {
    const { classNames } = React.useContext(BreadcrumbContext)

    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        e.preventDefault()
        onClick()
      }
    }

    const content = (
      <>
        {startSection && (
          <span className="inline-flex items-center">{startSection}</span>
        )}
        {children}
        {endSection && (
          <span className="inline-flex items-center">{endSection}</span>
        )}
      </>
    )

    const linkClasses = cn(
      'breadcrumbs_link',
      'inline-flex items-center gap-1.5 transition-colors hover:underline cursor-pointer rounded-button',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      classNames?.link,
      className,
    )

    if (href) {
      return (
        <a
          href={href}
          onClick={handleClick}
          data-slot="link"
          className={linkClasses}
        >
          {content}
        </a>
      )
    }

    if (onClick) {
      return (
        <button
          type="button"
          onClick={handleClick}
          data-slot="link"
          className={linkClasses}
        >
          {content}
        </button>
      )
    }

    return (
      <span
        data-slot="link"
        className={cn(
          'breadcrumbs_link',
          'inline-flex items-center gap-1.5',
          classNames?.link,
          className,
        )}
      >
        {content}
      </span>
    )
  },
)

BreadcrumbLink.displayName = 'BreadcrumbLink'

export const BreadcrumbPage = React.memo<BreadcrumbPageProps>(
  ({ children, startSection, endSection, className }) => {
    const { classNames } = React.useContext(BreadcrumbContext)

    return (
      <span
        aria-current="page"
        data-slot="current"
        className={cn(
          'breadcrumbs_current',
          'inline-flex items-center gap-1.5 font-medium',
          classNames?.current,
          className,
        )}
      >
        {startSection && (
          <span className="inline-flex items-center">{startSection}</span>
        )}
        {children}
        {endSection && (
          <span className="inline-flex items-center">{endSection}</span>
        )}
      </span>
    )
  },
)

BreadcrumbPage.displayName = 'BreadcrumbPage'

export const BreadcrumbSeparator = React.memo<BreadcrumbSeparatorProps>(
  ({ children, className, size = 'md' }) => {
    const { classNames } = React.useContext(BreadcrumbContext)

    return (
      <span
        aria-hidden="true"
        data-slot="separator"
        className={cn(
          'breadcrumbs_separator',
          'text-text-secondary',
          classNames?.separator,
          className,
        )}
      >
        {children ?? <ChevronRight className={iconSizes[size]} />}
      </span>
    )
  },
)

BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

/**
 * Validates URL to prevent open redirect vulnerabilities
 * Only allows relative URLs or same-origin URLs
 */
const isValidNavigationUrl = (href: string): boolean => {
  if (href.startsWith('/') || href.startsWith('#') || href.startsWith('?')) {
    return true
  }

  const dangerousProtocols = ['javascript:', 'data:', 'vbscript:']
  const lowerHref = href.toLowerCase()
  if (dangerousProtocols.some(protocol => lowerHref.startsWith(protocol))) {
    return false
  }

  if (typeof window !== 'undefined') {
    try {
      const url = new URL(href, window.location.origin)
      return url.origin === window.location.origin
    } catch {
      return true
    }
  }

  return true
}

export const BreadcrumbEllipsis = React.memo<BreadcrumbEllipsisProps>(
  ({ orientation = 'horizontal', items, children, className, size = 'md' }) => {
    const { classNames } = React.useContext(BreadcrumbContext)
    const Icon = orientation === 'horizontal' ? MoreHorizontal : MoreVertical
    const isInteractive = !!(items?.length || children)

    const ellipsisButton = (
      <span
        {...(isInteractive && {
          role: 'button',
          'aria-label': 'Show more breadcrumbs',
          tabIndex: 0,
        })}
        {...(!isInteractive && {
          'aria-hidden': true,
        })}
        data-slot="ellipsis"
        className={cn(
          'breadcrumbs_ellipsis',
          'flex items-center justify-center',
          isInteractive && 'cursor-pointer',
          classNames?.ellipsis,
          className,
        )}
      >
        <Icon className={iconSizes[size]} />
        <span className="sr-only">More</span>
      </span>
    )

    if (items || children) {
      const dropdownItems = (items || []).map((item) => ({
        label: item.label || '',
        value: item.label || '',
        onClick:
          item.onClick ||
          (() => {
            if (item.href && isValidNavigationUrl(item.href)) {
              window.location.href = item.href
            }
          }),
      }))

      return <Dropdown items={dropdownItems}>{ellipsisButton}</Dropdown>
    }

    return ellipsisButton
  },
)

BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

export type * from './types'
export default Breadcrumb
