import type { ComponentColor, ComponentSize } from '../types'
export interface CheckboxGroupClassNames {
  root?: string
  label?: string
  group?: string
  item?: string
  helper?: string
  error?: string
}

export interface CheckboxGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  label?: string
  helperText?: string
  error?: string
  orientation?: 'vertical' | 'horizontal'
  /** @default "md" */
  size?: ComponentSize
  /** Color passed to child checkboxes @default "primary" */
  color?: ComponentColor
  className?: string
  classNames?: CheckboxGroupClassNames
  ref?: React.Ref<HTMLDivElement>
}
