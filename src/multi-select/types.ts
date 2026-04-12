import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

export type MultiSelectSize = ComponentSize

export interface MultiSelectOption {
  value: string
  label: string
  disabled?: boolean
  group?: string
}

export interface MultiSelectClassNames {
  root?: string
  trigger?: string
  tag?: string
  tagRemove?: string
  dropdown?: string
  option?: string
  optionSelected?: string
  selectAll?: string
  empty?: string
  label?: string
  helper?: string
}

export type MultiSelectVariant = 'outline' | 'filled'

export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'>,
    ValidationMessages {
  /** @default 'outline' */
  variant?: MultiSelectVariant
  size?: MultiSelectSize
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  /** @default 'primary' */
  color?: ComponentColor
  label?: string
  options?: MultiSelectOption[]
  placeholder?: string
  loading?: boolean
  fullWidth?: boolean
  maxChipsVisible?: number
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  disabled?: boolean
  required?: boolean
  clearable?: boolean
  /** Maximum number of items that can be selected. Undefined = no limit. */
  maxSelectedValues?: number
  virtualizeThreshold?: number
  maxDropdownHeight?: number
  ref?: React.Ref<HTMLDivElement>
  /**
   * Custom classes for different parts of the multi-select
   */
  classNames?: MultiSelectClassNames
}
