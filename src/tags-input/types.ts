import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

export interface TagsInputClassNames {
  root?: string
  input?: string
  tag?: string
  tagLabel?: string
  tagClose?: string
  wrapper?: string
}

export type TagsInputVariant = 'outline' | 'filled'

export interface TagsInputProps extends ValidationMessages {
  /** @default 'outline' */
  variant?: TagsInputVariant
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  suggestions?: string[]
  placeholder?: string
  maxTags?: number
  allowDuplicates?: boolean
  separator?: string | string[]
  addOnBlur?: boolean
  addOnPaste?: boolean
  validate?: (value: string) => boolean
  onTagAdd?: (tag: string) => void
  onTagRemove?: (tag: string) => void
  size?: ComponentSize
  color?: ComponentColor
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  loading?: boolean
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  clearable?: boolean
  fullWidth?: boolean
  className?: string
  classNames?: TagsInputClassNames
}
