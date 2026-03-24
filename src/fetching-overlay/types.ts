import type { SpinnerProps } from '../spinner/types'

export interface FetchingOverlayProps extends SpinnerProps {
  /** Whether the overlay is currently showing */
  isFetching: boolean
  /** Cover the entire viewport instead of parent container
   * @default true
   */
  fullscreen?: boolean
  /** Backdrop opacity (0-100)
   * @default 30
   */
  backdropOpacity?: number
}
