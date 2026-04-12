import type { BaseOption, ComponentColor, ComponentSize, ValidationMessages } from '../types'

export type SelectSize = ComponentSize

export interface SelectClassNames {
  root?: string
  trigger?: string
  triggerIcon?: string
  dropdown?: string
  search?: string
  option?: string
  optionSelected?: string
  group?: string
  groupLabel?: string
  empty?: string
  label?: string
  helper?: string
}

export interface SelectOption extends BaseOption {
  group?: string
}

export type SelectVariant = 'outline' | 'filled'

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
    ValidationMessages {
  /** @default 'outline' */
  variant?: SelectVariant
  size?: SelectSize
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  /** Color for focus ring, selected option, and active border
   * @default 'primary'
   */
  color?: ComponentColor
  label?: string
  options?: SelectOption[]
  placeholder?: string
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
  clearable?: boolean
  fullWidth?: boolean
  required?: boolean
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  virtualizeThreshold?: number
  maxDropdownHeight?: number
  ref?: React.Ref<HTMLDivElement>
  classNames?: SelectClassNames
}
