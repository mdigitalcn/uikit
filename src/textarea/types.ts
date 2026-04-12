import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

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
  >,
    ValidationMessages {
  variant?: TextareaVariant
  size?: TextareaSize
  /** @default 'primary' */
  color?: ComponentColor
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  resize?: TextareaResize
  showCount?: boolean
  maxLength?: number
  autoResize?: boolean
  fullWidth?: boolean
  className?: string
  classNames?: TextareaClassNames
  ref?: React.Ref<HTMLTextAreaElement>
}
