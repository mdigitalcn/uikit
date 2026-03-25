import type { ComponentColor, ComponentSize } from '../types'

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

export interface MultiSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size' | 'onChange'> {
  size?: MultiSelectSize
  /** Color for focus ring, selected options, and active border
   * @default 'primary'
   */
  color?: ComponentColor
  label?: string
  helperText?: string
  error?: string | boolean
  warning?: string | boolean
  info?: string | boolean
  success?: string | boolean
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
