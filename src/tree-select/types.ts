import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'
import type { TreeNode } from '../tree/types'

export type TreeSelectSize = ComponentSize

export interface TreeSelectClassNames {
  root?: string
  trigger?: string
  dropdown?: string
  tree?: string
  node?: string
  checkbox?: string
  label?: string
}

export type TreeSelectVariant = 'outline' | 'filled'

export interface TreeSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ValidationMessages {
  /** @default 'outline' */
  variant?: TreeSelectVariant
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  /** @default 'primary' */
  color?: ComponentColor
  size?: TreeSelectSize
  label?: string
  data?: TreeNode[]
  placeholder?: string
  loading?: boolean
  fullWidth?: boolean
  /**
   * Current value (controlled) - single key or array for multiple
   */
  value?: string | string[]
  /**
   * Default initial value (uncontrolled)
   */
  defaultValue?: string | string[]
  onChange?: (value: string | string[], selectedNodes: TreeNode[]) => void
  disabled?: boolean
  required?: boolean
  multiple?: boolean
  checkable?: boolean
  searchable?: boolean
  clearable?: boolean
  /**
   * Maximum number of chips visible in multiple mode
   */
  maxChipsVisible?: number
  /**
   * Maximum height of dropdown
   */
  maxDropdownHeight?: number
  defaultExpandAll?: boolean
  defaultExpandedKeys?: string[]
  showLine?: boolean
  showIcon?: boolean
  className?: string
  classNames?: TreeSelectClassNames
  ref?: React.Ref<HTMLDivElement>
}
