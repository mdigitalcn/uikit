import React from 'react'
import type { CascaderOption, CascaderProps } from './types'
import { getValidationStatus } from '../utils'

interface UseCascaderConfig {
  options: CascaderOption[]
  value?: CascaderProps['value']
  defaultValue?: CascaderProps['defaultValue']
  onChange?: CascaderProps['onChange']
  onSelect?: CascaderProps['onSelect']
  onOpenChange?: (open: boolean) => void
  multiple?: boolean
  disabled?: boolean
  loading?: boolean
  expandTrigger?: 'click' | 'hover'
  changeOnSelect?: boolean
  loadData?: CascaderProps['loadData']
  error?: string | boolean
  warning?: string | boolean
  info?: string | boolean
  success?: string | boolean
  helperText?: string
}

export function useCascader(config: UseCascaderConfig) {
  const {
    options,
    value,
    defaultValue,
    onChange,
    onOpenChange: onOpenChangeProp,
    multiple = false,
    disabled = false,
    loading = false,
    error,
    warning,
    info,
    success,
    helperText,
  } = config

  const [isOpen, setIsOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState<string[] | string[][]>(defaultValue || [])
  const currentValue = value !== undefined ? value : internalValue
  const [activeMenus, setActiveMenus] = React.useState<CascaderOption[][]>([options])
  const [hoveredPath, setHoveredPath] = React.useState<number[]>([])
  const [selectedPath, setSelectedPath] = React.useState<string[]>([])
  const [focusedIndex, setFocusedIndex] = React.useState<{ level: number; index: number } | null>(null)

  const containerRef = React.useRef<HTMLDivElement>(null)
  const menuRefs = React.useRef<(HTMLDivElement | null)[]>([])

  const normalizedValue: string[][] = React.useMemo(() => {
    if (multiple) {
      return Array.isArray(currentValue[0]) ? (currentValue as string[][]) : []
    }
    return Array.isArray(currentValue) && currentValue.length > 0 && !Array.isArray(currentValue[0])
      ? [currentValue as string[]]
      : []
  }, [currentValue, multiple])

  const selectedPathSet = React.useMemo(() => {
    const set = new Set<string>()
    for (const path of normalizedValue) set.add(path.join('\0'))
    return set
  }, [normalizedValue])

  const { status, message: helperMessage } = getValidationStatus({
    error, warning, info, success, helperText,
  })

  const expandToPath = React.useCallback((path: string[]) => {
    const menus: CascaderOption[][] = [options]
    let currentOptions = options
    for (const val of path) {
      const option = currentOptions.find((opt) => opt.value === val)
      if (option?.children && option.children.length > 0) {
        menus.push(option.children)
        currentOptions = option.children
      }
    }
    setActiveMenus(menus)
  }, [options])

  const handleOpenChange = React.useCallback((open: boolean) => {
    if (disabled || loading) return
    setIsOpen(open)
    onOpenChangeProp?.(open)
    if (open) {
      setActiveMenus([options])
      setHoveredPath([])
      setFocusedIndex(null)
      if (normalizedValue.length > 0 && !multiple) {
        setSelectedPath(normalizedValue[0] || [])
        expandToPath(normalizedValue[0] || [])
      } else {
        setSelectedPath([])
      }
    }
  }, [disabled, loading, options, normalizedValue, multiple, onOpenChangeProp, expandToPath])

  const getSelectedOptions = React.useCallback((path: string[]): CascaderOption[] => {
    const selected: CascaderOption[] = []
    let currentOptions = options
    for (const val of path) {
      const option = currentOptions.find((opt) => opt.value === val)
      if (option) {
        selected.push(option)
        currentOptions = option.children || []
      }
    }
    return selected
  }, [options])

  const isPathSelected = React.useCallback((path: string[]): boolean => {
    return normalizedValue.some(
      (sp) => sp.length === path.length && sp.every((val, idx) => val === path[idx])
    )
  }, [normalizedValue])

  const getAllLeafPaths = React.useCallback((option: CascaderOption, currentPath: string[]): string[][] => {
    const paths: string[][] = []
    const fullPath = [...currentPath, option.value]
    if (!option.children || option.children.length === 0) {
      paths.push(fullPath)
    } else {
      option.children.forEach((child) => {
        paths.push(...getAllLeafPaths(child, fullPath))
      })
    }
    return paths
  }, [])

  const handleClear = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    const emptyValue = multiple ? [] : []
    if (value === undefined) setInternalValue(emptyValue)
    onChange?.(emptyValue, [])
  }, [value, onChange, multiple])

  const removeSelection = React.useCallback((pathToRemove: string[], e: React.MouseEvent) => {
    e.stopPropagation()
    if (!multiple) return
    const newValue = normalizedValue.filter(
      (path) => !(path.length === pathToRemove.length && path.every((val, idx) => val === pathToRemove[idx]))
    )
    const newSelectedOptions = newValue.map((path) => getSelectedOptions(path))
    setInternalValue(newValue)
    onChange?.(newValue, newSelectedOptions)
  }, [multiple, normalizedValue, value, onChange, getSelectedOptions])

  return {
    // State
    isOpen,
    activeMenus,
    setActiveMenus,
    hoveredPath,
    setHoveredPath,
    selectedPath,
    setSelectedPath,
    focusedIndex,
    setFocusedIndex,
    currentValue,
    normalizedValue,
    selectedPathSet,

    // Refs
    containerRef,
    menuRefs,

    // Computed
    status,
    helperMessage,

    // Handlers
    handleOpenChange,
    getSelectedOptions,
    isPathSelected,
    getAllLeafPaths,
    handleClear,
    removeSelection,
    expandToPath,

    // Config forwarded
    setInternalValue,
  }
}
