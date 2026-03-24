import type { ComponentColor, ComponentSize } from '../types'

export type TextareaVariant = 'outline' | 'filled'

export type TextareaSize = ComponentSize

export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both'

export interface TextareaClassNames {
  root?: string
  wrapper?: string
  label?: string
  textarea?: string
  counter?: string
  helper?: string
  error?: string
}

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size' | 'ref'
  > {
  variant?: TextareaVariant
  size?: TextareaSize
  /** Color for focus ring and active border
   * @default 'primary'
   */
  color?: ComponentColor
  label?: string
  helperText?: string
  messagePosition?: 'top' | 'bottom'
  error?: string
  warning?: string
  info?: string
  success?: string
  resize?: TextareaResize
  showCount?: boolean
  maxLength?: number
  autoResize?: boolean
  fullWidth?: boolean
  className?: string
  classNames?: TextareaClassNames
  ref?: React.Ref<HTMLTextAreaElement>
}
