import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

export interface MentionOption {
  label: string
  value: string
  icon?: React.ReactNode
  description?: string
}

export interface MentionsClassNames {
  root?: string
  textarea?: string
  dropdown?: string
  option?: string
  highlight?: string
}

export type MentionsVariant = 'outline' | 'filled'

export interface MentionsProps extends ValidationMessages {
  /** @default 'outline' */
  variant?: MentionsVariant
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSelect?: (option: MentionOption, trigger: string) => void
  options?: MentionOption[]
  triggers?: string[]
  loading?: boolean
  /** @default 'primary' */
  color?: ComponentColor
  size?: ComponentSize
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  placeholder?: string
  rows?: number
  autoSize?: boolean
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  clearable?: boolean
  onClear?: () => void
  fullWidth?: boolean
  className?: string
  classNames?: MentionsClassNames
}
