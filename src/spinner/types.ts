import type { ComponentColor, ComponentSize } from '../types'

export type SpinnerSize = ComponentSize

export type SpinnerColor = ComponentColor

export type SpinnerVariant = 'ring' | 'dots' | 'pulse'

export interface SpinnerProps {
  size?: SpinnerSize
  color?: SpinnerColor
  /**
   * Visual variant
   * @default 'ring'
   */
  variant?: SpinnerVariant
  label?: string
  className?: string
}
