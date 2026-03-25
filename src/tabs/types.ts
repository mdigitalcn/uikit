import type { ComponentColor, ComponentSize } from '../types'

export type TabsColor = ComponentColor

export type TabsVariant = 'default' | 'solid' | 'soft' | 'pill'

export type TabsSize = ComponentSize

export type TabsRadius = 'xs' | 'sm' | 'md' | 'lg' | 'full'

export interface TabItem {
  key: string
  label: string
  /**
   * Content to display when tab is active
   */
  content?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

export interface TabsClassNames {
  root?: string
  list?: string
  tab?: string
  tabActive?: string
  indicator?: string
  panel?: string
}

export interface TabsProps {
  items: TabItem[]
  /**
   * Default active tab key (uncontrolled)
   */
  defaultActiveKey?: string
  /**
   * Active tab key (controlled)
   */
  activeKey?: string
  color?: TabsColor
  size?: TabsSize
  variant?: TabsVariant
  /**
   * Border radius for wrapper and tabs (visible on pill variant)
   */
  radius?: TabsRadius
  onChange?: (key: string) => void
  /**
   * Unmount inactive tab panels for performance
   * @default true
   */
  destroyInactivePanel?: boolean
  className?: string
  classNames?: TabsClassNames
}
