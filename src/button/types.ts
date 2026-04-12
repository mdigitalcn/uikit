import type {
  ComponentVariantExtended,
  ButtonColor as SharedButtonColor,
  ComponentSize,
} from "../types";

export type ButtonVariant = ComponentVariantExtended | "soft";

export type ButtonColor = SharedButtonColor;

export type ButtonSize = ComponentSize;

export type ButtonShape = "rounded" | "pill" | "square";

export interface ButtonClassNames {
  root?: string;
  startSection?: string;
  endSection?: string;
  spinner?: string;
  ripple?: string;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style variant
   * @default 'solid'
   */
  variant?: ButtonVariant;
  /**
   * Theme color
   * @default 'primary'
   */
  color?: ButtonColor;
  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize;
  /**
   * Button shape
   * @default 'rounded'
   */
  shape?: ButtonShape;
  /**
   * Whether button is in loading state.
   * Shows a spinner in the start section position and disables interactions.
   * @default false
   */
  loading?: boolean;
  /**
   * Text to display while loading (replaces children).
   * When omitted, children remain visible alongside the spinner.
   */
  loadingText?: string;
  /**
   * Content rendered before the label (icon, badge, avatar, etc.).
   * Replaced by a spinner when `loading` is true.
   *
   * @example
   * ```tsx
   * <Button startSection={<Mail size={16} />}>Send</Button>
   * ```
   */
  startSection?: React.ReactNode;
  /**
   * Content rendered after the label (icon, arrow, badge, etc.).
   *
   * @example
   * ```tsx
   * <Button endSection={<ArrowRight size={16} />}>Next</Button>
   * ```
   */
  endSection?: React.ReactNode;
  /**
   * Whether button takes full width of container
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Whether this is an icon-only button (square aspect ratio, no label).
   * When true, ensure you provide `aria-label` or `aria-labelledby`.
   * @default false
   */
  isIconOnly?: boolean;
  /**
   * Render as child element (polymorphic). When true, button styles are
   * merged onto the single child element (e.g. `<a>`, `<Link>`).
   * @default false
   */
  asChild?: boolean;
  /**
   * Toggle/pressed state for toggle buttons. When provided, renders
   * `aria-pressed` and a visual pressed indicator.
   */
  pressed?: boolean;
  /**
   * Enable Material-style ripple effect on click.
   * Uses only transform + opacity for 60fps GPU-composited animation.
   * @default false
   */
  ripple?: boolean;
  classNames?: ButtonClassNames;
  ref?: React.Ref<HTMLButtonElement>;
}
