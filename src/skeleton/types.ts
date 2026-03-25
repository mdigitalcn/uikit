import type React from 'react'
import type { ComponentColor, ComponentSize } from '../types'

export type SkeletonSize = ComponentSize

export type SkeletonColor = ComponentColor

export type SkeletonShape = 'text' | 'circle' | 'rectangular' | 'rounded'

export interface SkeletonProps {
  size?: SkeletonSize
  color?: SkeletonColor
  /** Shape of the skeleton
   * @default 'text'
   */
  shape?: SkeletonShape
  /** @deprecated Use shape="circle" instead */
  circle?: boolean
  /**
   * When true, shows children instead of skeleton.
   * Enables fade transition from skeleton to content.
   */
  isLoaded?: boolean
  /**
   * Content to show when loaded
   */
  children?: React.ReactNode
  className?: string
}
