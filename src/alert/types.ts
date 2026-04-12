import type { ComponentColor, ComponentSize } from '../types'

export type AlertVariant = 'default' | 'solid' | 'outline' | 'soft'

export interface AlertClassNames {
  root?: string
  icon?: string
  content?: string
  title?: string
  description?: string
  action?: string
  closeButton?: string
}

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Alert title. Accepts any ReactNode (string, JSX, etc.).
   */
  title?: React.ReactNode
  /**
   * Alert description / message body. Accepts any ReactNode.
   */
  description?: React.ReactNode
  /**
   * Icon displayed before the content. Pass `null` to hide.
   */
  icon?: React.ReactNode | null
  /**
   * Visual style variant.
   * @default 'soft'
   */
  variant?: AlertVariant
  /**
   * Semantic color.
   * @default 'default'
   */
  color?: ComponentColor
  /**
   * Alert size.
   * @default 'md'
   */
  size?: ComponentSize
  /**
   * Whether to show a close button.
   * @default false
   */
  closable?: boolean
  /**
   * Controlled visibility. When undefined, uses internal state.
   */
  visible?: boolean
  /**
   * Called when the close button is clicked.
   */
  onClose?: () => void
  /**
   * Accessible label for the close button.
   * Override for i18n (e.g. "Cerrar alerta", "Закрыть").
   * @default 'Close alert'
   */
  closeButtonLabel?: string
  /**
   * Action element rendered on the right side of the alert (button, link, etc.).
   *
   * @example
   * ```tsx
   * <Alert
   *   title="Changes saved"
   *   action={<Button size="xs" variant="outline">Undo</Button>}
   * />
   * ```
   */
  action?: React.ReactNode
  className?: string
  classNames?: AlertClassNames
  children?: React.ReactNode
}
