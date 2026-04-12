import type { ComponentColor, ComponentSize } from '../types'

export type BadgeVariant = 'default' | 'solid' | 'outline' | 'soft'

export type BadgeColor = ComponentColor

export type BadgeSize = ComponentSize

export type BadgeShape = 'rounded' | 'pill' | 'circle'

export type BadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'

export interface BadgeClassNames {
  /** The badge element itself */
  root?: string
  /** The wrapper element (when floating over children) */
  wrapper?: string
  /** Icon element inside the badge */
  icon?: string
}

export interface BadgeProps {
  /**
   * Content to wrap with the badge (when provided, badge floats over it)
   */
  children?: React.ReactNode

  /**
   * @default 'solid'
   */
  variant?: BadgeVariant

  /**
   * @default 'primary'
   */
  color?: BadgeColor

  /**
   * @default 'sm'
   */
  size?: BadgeSize

  /**
   * @default 'rounded'
   */
  shape?: BadgeShape

  /**
   * Display as a dot indicator instead of content
   * @default false
   */
  dot?: boolean

  count?: number

  /**
   * Maximum count to show before displaying overflow indicator
   * @default 99
   */
  maxCount?: number

  /**
   * @default false
   */
  showZero?: boolean

  icon?: React.ReactNode

  /**
   * @default 'top-right'
   */
  placement?: BadgePlacement

  /**
   * Custom offset for floating badge position [x, y] in pixels
   * Positive values move towards center, negative values move away
   */
  offset?: [number, number]

  /**
   * Show pulsing animation (useful for notification indicators)
   * @default false
   */
  processing?: boolean

  /**
   * @default false
   */
  invisible?: boolean

  /**
   * Force standalone rendering even when children are present
   * @default false
   */
  standalone?: boolean

  /**
   * Badge content (alternative to count, renders custom content)
   */
  content?: React.ReactNode

  className?: string

  /**
   * Additional CSS class for the badge wrapper (when floating).
   * @deprecated Use `classNames.wrapper` instead.
   */
  wrapperClassName?: string

  /**
   * Class names for sub-parts of the badge.
   */
  classNames?: BadgeClassNames

  ref?: React.Ref<HTMLSpanElement>
}
