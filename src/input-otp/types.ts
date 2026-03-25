import type { ComponentColor, ComponentSize } from '../types'

export type InputOTPSize = ComponentSize

export interface InputOTPClassNames {
  root?: string
  wrapper?: string
  label?: string
  slot?: string
  slotActive?: string
  separator?: string
  helper?: string
}

export interface InputOTPProps {
  length?: number
  size?: InputOTPSize
  /** Color accent @default "primary" */
  color?: ComponentColor
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  error?: string | boolean
  warning?: string | boolean
  info?: string | boolean
  success?: string | boolean
  helperText?: string
  disabled?: boolean
  autoFocus?: boolean
  type?: 'text' | 'number'
  /**
   * Mask input characters (shows dots instead of values)
   * @default false
   */
  mask?: boolean
  pattern?: string
  label?: string
  messagePosition?: 'top' | 'bottom'
  className?: string
  classNames?: InputOTPClassNames
  ref?: React.Ref<HTMLDivElement>
}
