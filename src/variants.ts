import type { ComponentColor, ButtonColor } from "./types";

// Color Slot System
//
// How it works:
//   1. Component receives `color="primary"` prop
//   2. Component applies `colorVars.primary` → sets 4 CSS custom properties
//   3. Slot utilities (bg-slot, text-slot, border-slot) read those properties
//
// Customization — override design tokens in your CSS:
//
//   :root {
//     --color-primary: oklch(65% 0.2 280);
//     --color-primary-foreground: oklch(100% 0 0);
//   }

export const colorVars: Record<ComponentColor, string> = {
  default:
    "[--_c:var(--color-text-primary)] [--_c-bg:var(--color-surface)] [--_c-fg:var(--color-text-primary)] [--_c-border:var(--color-border)]",
  primary:
    "[--_c:var(--color-primary)] [--_c-bg:var(--color-primary)] [--_c-fg:var(--color-primary-foreground)] [--_c-border:var(--color-primary)]",
  secondary:
    "[--_c:var(--color-secondary)] [--_c-bg:var(--color-secondary)] [--_c-fg:var(--color-secondary-foreground)] [--_c-border:var(--color-secondary)]",
  accent:
    "[--_c:var(--color-accent)] [--_c-bg:var(--color-accent)] [--_c-fg:var(--color-accent-foreground)] [--_c-border:var(--color-accent)]",
  success:
    "[--_c:var(--color-success)] [--_c-bg:var(--color-success)] [--_c-fg:var(--color-success-foreground)] [--_c-border:var(--color-success)]",
  error:
    "[--_c:var(--color-error)] [--_c-bg:var(--color-error)] [--_c-fg:var(--color-error-foreground)] [--_c-border:var(--color-error)]",
  warning:
    "[--_c:var(--color-warning)] [--_c-bg:var(--color-warning)] [--_c-fg:var(--color-warning-foreground)] [--_c-border:var(--color-warning)]",
  info: "[--_c:var(--color-info)] [--_c-bg:var(--color-info)] [--_c-fg:var(--color-info-foreground)] [--_c-border:var(--color-info)]",
} as const;

export const buttonColorVars: Record<ButtonColor, string> = {
  primary: colorVars.primary,
  secondary: colorVars.secondary,
  accent: colorVars.accent,
  success: colorVars.success,
  error: colorVars.error,
  warning: colorVars.warning,
  info: colorVars.info,
} as const;

// Radius Slot System
//
// Sets --_radius on a component root so all children can use rounded-slot.
// The radius type (button, input, card, …) is determined by the component,
// not by a user prop — inline the matching entry in the CVA base string.
//
// Usage:
//   cva('[--_radius:var(--radius-button)] rounded-slot ...', { ... })
export const radiusVars = {
  none:     '[--_radius:0px]',
  full:     '[--_radius:var(--radius-full)]',
  button:   '[--_radius:var(--radius-button)]',
  input:    '[--_radius:var(--radius-input)]',
  tag:      '[--_radius:var(--radius-tag)]',
  badge:    '[--_radius:var(--radius-badge)]',
  card:     '[--_radius:var(--radius-card)]',
  alert:    '[--_radius:var(--radius-alert)]',
  tooltip:  '[--_radius:var(--radius-tooltip)]',
  dropdown: '[--_radius:var(--radius-dropdown)]',
  popover:  '[--_radius:var(--radius-popover)]',
  modal:    '[--_radius:var(--radius-modal)]',
  drawer:   '[--_radius:var(--radius-drawer)]',
} as const;

// Shadow Slot System
//
// Sets --_shadow on an element. Use shadow-size-slot to consume.
// Apply shadowVars[size] on the element that should cast the shadow.
//
// Usage:
//   className={cn(shadowVars.md, 'shadow-size-slot ...')}
export const shadowVars = {
  none: '[--_shadow:none]',
  xs:   '[--_shadow:var(--shadow-xs)]',
  sm:   '[--_shadow:var(--shadow-sm)]',
  md:   '[--_shadow:var(--shadow-md)]',
  lg:   '[--_shadow:var(--shadow-lg)]',
  xl:   '[--_shadow:var(--shadow-xl)]',
  '2xl':'[--_shadow:var(--shadow-2xl)]',
} as const;
