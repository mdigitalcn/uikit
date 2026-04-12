import type { ReactNode } from 'react'
import type { ComponentColor, ComponentSize } from '../types'

export type BreadcrumbsColor = ComponentColor

export type BreadcrumbsSize = ComponentSize

export interface BreadcrumbsClassNames {
  root?: string
  list?: string
  item?: string
  link?: string
  separator?: string
  current?: string
  ellipsis?: string
}

export interface BreadcrumbItemData {
  label: string
  href?: string
  /**
   * Click handler (used instead of href for custom navigation)
   */
  onClick?: () => void
  /**
   * Content rendered before the label (icon, etc.)
   */
  startSection?: ReactNode
  /**
   * Content rendered after the label (icon, etc.)
   */
  endSection?: ReactNode
  /**
   * Render this item as an ellipsis indicator.
   * @default false
   */
  ellipsis?: boolean
  ellipsisOrientation?: 'horizontal' | 'vertical'
  /**
   * Items to show in the ellipsis dropdown
   */
  ellipsisItems?: Array<{
    label: string
    href?: string
    onClick?: () => void
  }>
}

export interface BreadcrumbProps {
  items?: BreadcrumbItemData[]
  /**
   * Manual children (alternative to items prop)
   */
  children?: ReactNode
  color?: BreadcrumbsColor
  size?: BreadcrumbsSize
  separator?: ReactNode
  /**
   * Maximum number of visible items. When exceeded, middle items
   * collapse into an ellipsis. First and last items are always shown.
   *
   * @example
   * // 5 items with maxItems=3 → "Home / ... / Current"
   */
  maxItems?: number
  className?: string
  classNames?: BreadcrumbsClassNames
}

export interface BreadcrumbListProps {
  children: ReactNode
  className?: string
}

export interface BreadcrumbItemProps {
  children: ReactNode
  className?: string
}

export interface BreadcrumbLinkProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  startSection?: ReactNode
  endSection?: ReactNode
  className?: string
}

export interface BreadcrumbPageProps {
  children: ReactNode
  startSection?: ReactNode
  endSection?: ReactNode
  className?: string
}

export interface BreadcrumbSeparatorProps {
  children?: ReactNode
  className?: string
  size?: BreadcrumbsSize
}

export interface BreadcrumbEllipsisProps {
  orientation?: 'horizontal' | 'vertical'
  items?: Array<{
    label: string
    href?: string
    onClick?: () => void
  }>
  children?: ReactNode
  className?: string
  size?: BreadcrumbsSize
}
