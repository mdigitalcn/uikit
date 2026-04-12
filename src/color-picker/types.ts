import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

export type ColorFormat = 'hex' | 'rgb' | 'hsl'

export interface ColorPickerClassNames {
  root?: string
  saturation?: string
  hueSlider?: string
  alphaSlider?: string
  input?: string
  swatches?: string
  swatch?: string
  preview?: string
}

export interface ColorPickerProps extends ValidationMessages {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void
  format?: ColorFormat
  showAlpha?: boolean
  swatches?: string[]
  size?: ComponentSize
  /** @default 'primary' */
  color?: ComponentColor
  disabled?: boolean
  loading?: boolean
  required?: boolean
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  className?: string
  classNames?: ColorPickerClassNames
}

export interface ColorInputProps extends ValidationMessages {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void
  format?: ColorFormat
  showAlpha?: boolean
  swatches?: string[]
  size?: ComponentSize
  /** @default 'primary' */
  color?: ComponentColor
  disabled?: boolean
  loading?: boolean
  required?: boolean
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  placeholder?: string
  clearable?: boolean
  fullWidth?: boolean
  className?: string
  classNames?: ColorPickerClassNames
}
