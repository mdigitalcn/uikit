import type { ComponentColor, ComponentSize, ValidationMessages, CreateClassNames } from '../types'

export type NumberInputSize = ComponentSize

export interface NumberInputClassNames extends CreateClassNames<
  'root' | 'wrapper' | 'input' | 'label' | 'helper' | 'error' | 'increment' | 'decrement' | 'controls'
> {}

export type NumberInputVariant = 'outline' | 'filled'

export interface NumberInputProps extends ValidationMessages {
  value?: number
  defaultValue?: number
  onChange?: (value: number | undefined) => void
  min?: number
  max?: number
  step?: number
  precision?: number
  /** @default 'outline' */
  variant?: NumberInputVariant
  size?: NumberInputSize
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  /** Color for focus ring and active border
   * @default 'primary'
   */
  color?: ComponentColor
  label?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  loading?: boolean
  loadingText?: string
  fullWidth?: boolean
  controls?: boolean
  controlsPosition?: 'right' | 'sides'
  clampOnBlur?: boolean
  className?: string
  classNames?: NumberInputClassNames
  ref?: React.Ref<HTMLInputElement>
  id?: string
  name?: string
}
