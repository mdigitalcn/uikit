export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg'

export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

export type ComponentColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'

export type ComponentVariant = 'solid' | 'outline' | 'ghost'

export type ComponentVariantExtended =
  | 'solid'
  | 'outline'
  | 'dashed'
  | 'link'
  | 'ghost'

export interface BaseOption {
  label: string
  value: string | number
  disabled?: boolean
}

export interface ValidationMessages {
  error?: string | boolean
  warning?: string | boolean
  info?: string | boolean
  success?: string | boolean
  helperText?: string
}

export type CreateClassNames<T extends string> = Partial<Record<T, string>>
