import type { ComponentColor, ComponentSize, ValidationMessages } from '../types'

export interface AutocompleteOption {
  label: string
  value: string
  disabled?: boolean
}

export interface AutocompleteClassNames {
  root?: string
  input?: string
  dropdown?: string
  option?: string
  empty?: string
}

export type AutocompleteVariant = 'outline' | 'filled'

export interface AutocompleteProps extends ValidationMessages {
  /** @default 'outline' */
  variant?: AutocompleteVariant
  /**
   * Controlled input value.
   */
  value?: string
  /**
   * Default input value (uncontrolled).
   * @default ''
   */
  defaultValue?: string
  /**
   * Called when the input value changes (typing).
   */
  onChange?: (value: string) => void
  /**
   * Called when an option is selected from the dropdown.
   */
  onSelect?: (option: AutocompleteOption) => void
  /**
   * List of options. Accepts strings or `{ label, value, disabled? }` objects.
   */
  options: (string | AutocompleteOption)[]
  placeholder?: string
  label?: string
  /** @default 'bottom' */
  messagePosition?: 'top' | 'bottom'
  required?: boolean
  /**
   * Size of the input and dropdown options.
   * @default 'md'
   */
  size?: ComponentSize
  /**
   * Color accent for focus ring and highlighted option.
   * @default 'primary'
   */
  color?: ComponentColor
  disabled?: boolean
  /**
   * Show a loading spinner inside the input.
   * @default false
   */
  loading?: boolean
  /**
   * Show a clear button when the input has a value.
   * @default false
   */
  clearable?: boolean
  /**
   * Custom filter function. Return `true` to include the option.
   * @default Case-insensitive label includes query
   */
  filter?: (query: string, option: AutocompleteOption) => boolean
  /**
   * Maximum number of visible options.
   * @default 10
   */
  limit?: number
  /**
   * Message shown when no options match.
   * @default 'No results'
   */
  emptyMessage?: string
  /**
   * Custom option renderer. When provided, replaces the default label text.
   *
   * @example
   * ```tsx
   * renderOption={(option, { highlighted, query }) => (
   *   <div className="flex items-center gap-2">
   *     <Avatar size="xs" />
   *     <span>{option.label}</span>
   *   </div>
   * )}
   * ```
   */
  renderOption?: (
    option: AutocompleteOption,
    state: { highlighted: boolean; query: string },
  ) => React.ReactNode
  /**
   * Whether the input takes full width of its container.
   * @default true
   */
  fullWidth?: boolean
  className?: string
  classNames?: AutocompleteClassNames
}
