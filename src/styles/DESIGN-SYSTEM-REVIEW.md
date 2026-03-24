# Design System Review — @fmlj/uikit

## Executive Summary

The design system has a solid foundation: OKLCH colors, CSS custom properties, slot-based color system, and per-component tokens. But it's missing tokens that modern systems need for full control, and several areas have gaps that force developers to hardcode values.

---

## 1. What's Working Well

- **OKLCH color space** — perceptually uniform, modern, future-proof
- **Slot color system** — elegant solution for variant × color matrix without explosion of classes
- **Per-component CSS tokens** — button, input, select, etc. all have own tokens
- **Dark mode via class + data-attr** — flexible, supports SSR
- **Theme presets independent of mode** — corporate/vibrant/minimal work in both light and dark
- **Semantic color tokens** — primary, success, error, etc. with hover/active/foreground states
- **Z-index scale** — tokenized, no magic numbers

---

## 2. What's Missing — Token Gaps

### 2.1 Shadows (Light Mode)
**Problem:** Light mode has NO shadow tokens. Dark mode defines `--shadow-sm` through `--shadow-2xl`, but light mode relies on Tailwind defaults.

**Impact:** Components that need shadows in light mode use Tailwind's built-in shadows which don't match the OKLCH system and can't be themed.

**Fix:** Add shadow tokens to `:root` (light mode) that match the dark mode pattern but with appropriate opacity for light backgrounds.

### 2.2 Typography Scale
**Problem:** No systematic typography tokens. Only scattered `--label-font-size-*`, `--card-title-size`, `--badge-font-size-*`, `--tooltip-font-size`.

**Missing:**
- `--font-size-xs` through `--font-size-4xl`
- `--line-height-tight/normal/relaxed`
- `--letter-spacing-tight/normal/wide`
- `--font-weight-*` tokens (only `--font-weight-semibold` referenced)
- `--font-family-sans/mono/serif`

**Impact:** Typography component uses hardcoded Tailwind classes. No way to theme font sizes globally.

### 2.3 Spacing Scale
**Problem:** No spacing tokens. Each component defines its own padding values.

**Missing:**
- `--space-1` through `--space-16` (or at least key stops)
- `--content-padding` for page-level padding
- `--stack-gap-*` for vertical rhythm
- `--inline-gap-*` for horizontal rhythm

**Impact:** Inconsistent spacing across components. Button uses `0.875rem`, input uses `0.875rem`, but these aren't linked — changing one doesn't change the other.

### 2.4 Border Radius Scale
**Problem:** Only `--radius-xs`, `--radius-2xl`, `--radius-3xl` defined. Missing the middle range.

**Missing:**
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`
- `--radius-full` (for pills)
- Per-component radius tokens (card, modal, dropdown, tooltip)

**Impact:** Components hardcode `rounded-md`, `rounded-lg` etc. No way to make the whole system more or less rounded from a single token.

### 2.5 Motion / Animation Tokens
**Problem:** Has `--transition-fast/base/slow` (good!) but missing:
- `--ease-in`, `--ease-out`, `--ease-in-out` (custom curves)
- `--duration-instant` (0ms for reduced motion)
- `--animation-fade-in/out` durations
- `--animation-slide-distance`

### 2.6 Ring / Outline Tokens
**Problem:** No focus ring tokens beyond `--color-focus-ring`.

**Missing:**
- `--ring-width` (default focus ring width)
- `--ring-offset` (ring offset from element)
- `--ring-opacity`

### 2.7 Opacity Scale
**Problem:** No opacity tokens. Components use hardcoded `opacity-50`, `opacity-0`, etc.

**Missing:**
- `--opacity-disabled` (used across all disabled states)
- `--opacity-overlay`
- `--opacity-hover` (for hover overlays)

### 2.8 Elevation / Layer System
**Problem:** Z-index tokens exist but no elevation concept that combines shadow + z-index + background.

**Idea:** Not critical, but modern systems like Material 3 use elevation as a single concept.

---

## 3. Slot System — Assessment

### Strengths
- Eliminates N×M color×variant class explosion
- Simple mental model: set vars → use slot utilities
- Works with CVA seamlessly
- `color-mix()` for tints is elegant

### Gaps
- **No hover/active slot utilities** — components manually handle `:hover` states with `bg-slot-90`, but there's no `hover:bg-slot-hover` utility
- **No focus ring slot** — `ring-slot` exists but no `ring-slot/50` for opacity
- **No gradient slot** — can't do gradient fills with slot colors
- **Missing `bg-slot-5`** — very subtle tints needed for hover states on transparent backgrounds
- **No `text-slot-muted`** — muted text in the current slot color

### Recommendations
1. Add `bg-slot-5` for ultra-subtle hover tints
2. Add `bg-slot-hover` that resolves to the appropriate hover shade
3. Add `ring-slot-30` / `ring-slot-50` for focus ring opacity variants
4. Add `text-slot-muted` for 60% opacity slot text

---

## 4. Theme Architecture — Assessment

### Strengths
- Clean separation: mode (light/dark) vs preset (corporate/vibrant/minimal)
- All presets define both light and dark variants
- OKLCH ensures perceptual consistency across modes
- Consumers can override any token with plain CSS

### Gaps
- **No color palette generation** — each preset manually defines every color. Should have a formula: given a hue, auto-generate the full scale (hover, active, foreground)
- **No contrast checking** — foreground colors are manually set. Should verify WCAG AA/AAA contrast
- **Presets override too many tokens** — a preset should only need to set ~10 core values, not 30+
- **No runtime theme switching API** — consumers must manually toggle classes
- **No `prefers-color-scheme` auto-detection** documented
- **Gray scale is duplicated** in both light.css and dark.css — it's identical, should be defined once

### Recommendations
1. Define grays once in `:root` (they don't change between themes)
2. Create a theme generation guide: "set these 8 values, everything else derives"
3. Add WCAG contrast verification in a test
4. Document `prefers-color-scheme` auto-detection pattern
5. Consider CSS `light-dark()` function for simpler mode switching

---

## 5. Component Token Coverage

### Well-Tokenized
- Button (height, padding per size)
- Input (height, padding per size)
- Select (height, padding per size)
- Switch (width, height, thumb, translate per size)
- Modal (max-width, padding, gap per size)
- Badge (font-size, padding per size)
- Card (padding, title size, description size)
- Table (padding, border-width, header-bg)
- Tabs (gap, padding per size)
- Drawer (width per size)

### Under-Tokenized
- **Accordion** — has padding tokens but no header height, icon size
- **Stepper** — has icon-size and line-thickness but no padding per size
- **Dropdown** — has some tokens but missing border-radius, shadow
- **Tooltip** — has basic tokens but missing delay, animation duration
- **Progress** — no track height, bar height tokens
- **Breadcrumbs** — minimal tokens
- **Timeline** — no dot size, connector width tokens

### Not Tokenized at All
- Carousel, Resizable, Watermark, QR Code, Color Picker, Calendar
- These use hardcoded values that can't be themed

---

## 6. Consistency Audit

### `'use client'` — 25 components missing
checkbox, clipboard, color-picker, context-menu, dropdown, float-input, input, link, menubar, modal, multi-select, navigation-menu, number-input, progress, qr-code, radio, select (double-quoted), skeleton, stepper, switch, tabs, textarea, timeline, toast (double-quoted)

### CVA Missing — 11 components
anchor, carousel, context-menu, fetching-overlay, image, input-otp, input-password, menubar, qr-code, resizable, result, scroll-area, toast, tour, typography, watermark

### `classNames` Missing — 8 components
badge, carousel, command, fetching-overlay, grid, popover, resizable, toast, typography

### `color` Prop Missing — 35 components
Most form controls and complex components don't accept `color`.

### `size` Prop Missing — 13 components
carousel, context-menu, fetching-overlay, grid, image, menubar, navigation-menu, popover, radio-group, resizable, watermark, checkbox-group, input-password

---

## 7. Modernization Priorities

### P0 — Critical
1. Add shadow tokens to light mode
2. Fix 25 missing `'use client'` directives
3. Add missing ARIA patterns (see per-component improvements.md)

### P1 — High
1. Add global typography scale tokens
2. Add `--radius-*` complete scale with per-component radius tokens
3. Add `--opacity-disabled` token (used by every component)
4. Add missing slot utilities (bg-slot-5, ring-slot-30)
5. Standardize CVA across all components (11 missing)
6. Add `classNames` to 8 components missing it

### P2 — Medium
1. Add spacing scale tokens
2. Add motion/animation tokens
3. Add ring/focus tokens
4. Add virtualization to select/multi-select/cascader/tree-select/transfer
5. Increase test coverage on 15+ under-tested components
6. Add `color` prop to remaining 35 components

### P3 — Nice to Have
1. Elevation system
2. Color palette generation tooling
3. WCAG contrast automation
4. CSS `light-dark()` migration
5. Component composition improvements (reduce LOC in large components)
