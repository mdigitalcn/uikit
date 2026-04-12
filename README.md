<div align="center">

# @mdigitalcn/uikit

**A modern React component library built for speed.**

76 components · Tailwind CSS v4 · Slot-based theming · Tree-shakeable

[![CI](https://github.com/mdigitalcn/uikit/actions/workflows/ci.yml/badge.svg)](https://github.com/mdigitalcn/uikit/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@mdigitalcn/uikit?color=blue)](https://www.npmjs.com/package/@mdigitalcn/uikit)
[![downloads](https://img.shields.io/npm/dm/@mdigitalcn/uikit?color=green)](https://www.npmjs.com/package/@mdigitalcn/uikit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@mdigitalcn/uikit)](https://bundlephobia.com/package/@mdigitalcn/uikit)
[![license](https://img.shields.io/github/license/mdigitalcn/uikit)](https://github.com/mdigitalcn/uikit/blob/main/LICENSE)

[Changelog](https://github.com/mdigitalcn/uikit/releases) · [Report Bug](https://github.com/mdigitalcn/uikit/issues/new?template=bug_report.md) · [Request Feature](https://github.com/mdigitalcn/uikit/issues/new?template=feature_request.md)

</div>

---

## Why This Library?

| | @mdigitalcn/uikit | shadcn/ui | Ant Design | Chakra UI |
|---|---|---|---|---|
| **Theming** | Slot-based color system — 1 prop themes everything | Copy-paste, manual | Token config object | colorScheme prop |
| **Tailwind** | v4 native (`@theme`, `@source`) | v3 with config | No Tailwind | No Tailwind |
| **Bundle** | Tree-shake per component | Copy into project | 300KB+ full bundle | 200KB+ full bundle |
| **Dark mode** | Zero-config CSS variables | Manual `dark:` classes | ConfigProvider | ColorModeProvider |
| **Components** | 76 production-ready | ~50 primitives | 60+ | 60+ |
| **Tests** | 1,556 tests | Community | Extensive | Moderate |

### The Slot Color System

One `color` prop. Every part of the component responds — backgrounds, borders, text, hover states, focus rings. No manual mapping. No 49 color variants hardcoded per component.

```tsx
<Button color="primary">Submit</Button>
<Button color="error">Delete</Button>
<Alert color="warning">Watch out</Alert>
<Badge color="success">Active</Badge>
```

Under the hood, `color="primary"` sets a single CSS variable `--_c`. Every slot utility (`bg-slot`, `text-slot`, `border-slot-30`, `bg-slot-10`) derives from it automatically. Add a new color to your theme → every component supports it instantly.

### Tailwind CSS v4 Native

Not "works with Tailwind" — **built on v4's architecture**:

- `@theme` block defines all tokens as CSS custom properties
- `@source` auto-scans compiled components — no manual safelist
- `@custom-variant dark` — dark mode via `.dark` class on `<html>`
- `@utility` defines the slot color system as real Tailwind utilities
- When Tailwind ships new features, you get them. No wrapper layer in the way.

### Per-Component Imports

Every component is its own entry point. Import what you use, ship only what you use:

```tsx
import Button from '@mdigitalcn/uikit/button'     // just Button
import Table from '@mdigitalcn/uikit/table'        // just Table
import { useTheme } from '@mdigitalcn/uikit/theme' // just the hook
```

---

## Quick Start

```bash
npm install @mdigitalcn/uikit
```

> **Peer deps:** `react` ≥18, `react-dom` ≥18, `lucide-react` ≥0.400, `tailwindcss` ≥4.0

### CSS Setup

Your project needs Tailwind CSS v4 with `@tailwindcss/vite` or `@tailwindcss/postcss`.

```css
@import "tailwindcss";
@import "@mdigitalcn/uikit/styles/global.css";
```

That's it. One import. Tokens, dark mode, utilities, component styles — all included.

### Use It

```tsx
import Button from '@mdigitalcn/uikit/button'
import Input from '@mdigitalcn/uikit/input'
import Select from '@mdigitalcn/uikit/select'

function App() {
  return (
    <div className="flex gap-3">
      <Input placeholder="Search..." />
      <Select options={[{ label: 'React', value: 'react' }]} />
      <Button color="primary">Go</Button>
    </div>
  )
}
```

---

## Dark Mode

```tsx
import { ThemeProvider, useTheme } from '@mdigitalcn/uikit/theme'

<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// Toggle anywhere:
const { setTheme } = useTheme()
setTheme('dark') // 'light' | 'dark' | 'system'
```

SSR flash prevention — add to `<head>`:

```tsx
import { getThemeScript } from '@mdigitalcn/uikit/theme'

<script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
```

All components use CSS custom properties. Dark mode swaps values at `:root`. Zero `dark:` prefixes in component code.

## Theme Presets

```css
@import "@mdigitalcn/uikit/styles/global.css";
@import "@mdigitalcn/uikit/styles/themes/presets/corporate.css";
```

```html
<html data-theme="corporate" class="dark">
```

Available: `corporate`, `vibrant`, `minimal`. Mix with dark/light freely.

## Custom Tokens

Override after our import — no `!important` needed:

```css
@import "tailwindcss";
@import "@mdigitalcn/uikit/styles/global.css";

/* Your overrides — just plain :root, wins by source order */
:root {
  --color-primary: oklch(0.55 0.22 270);
  --color-primary-hover: oklch(0.50 0.24 270);
  --color-primary-foreground: oklch(1 0 0);
  --color-background: oklch(0.98 0 0);
  --font-sans: 'Inter', system-ui, sans-serif;
  --button-height-md: 2.5rem;
}

/* Optional: different dark mode values */
.dark {
  --color-primary: oklch(0.65 0.22 270);
  --color-background: oklch(0.12 0.01 270);
}
```

Every token is a CSS variable. Change one, it propagates everywhere. Your `:root` overrides win by source order — just import after `global.css`.

---

## Common API

### `color`

```
'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info'
```

### `size`

```
'xs' | 'sm' | 'md' | 'lg'
```

### `variant`

Per-component:
- **Button:** `solid` `outline` `soft` `dashed` `link` `ghost`
- **Card:** `default` `solid` `outline` `soft` `ghost` `elevated`
- **Checkbox / Toggle:** `solid` `outline` `soft`
- **Input:** `outline` `filled`
- **Badge / Tag:** `default` `solid` `outline` `soft`

### Validation

```tsx
<Input error="Required field" />
<Input warning="Weak password" />
<Input success />
```

### Styling Escape Hatches

```tsx
// Root element
<Button className="shadow-lg">Submit</Button>

// Internal parts
<Input classNames={{ root: 'mb-4', label: 'font-bold', input: 'tracking-wide' }} />

// CSS selectors — every part has a semantic class + data-slot
.input_label { font-weight: 700; }
[data-slot="trigger"] { min-width: 200px; }
```

---

## All 76 Components

<details>
<summary><b>Data Entry (27)</b></summary>

| Component | Import |
|-----------|--------|
| Input | `@mdigitalcn/uikit/input` |
| FloatInput | `@mdigitalcn/uikit/float-input` |
| InputPassword | `@mdigitalcn/uikit/input-password` |
| InputOTP | `@mdigitalcn/uikit/input-otp` |
| InputGroup | `@mdigitalcn/uikit/input-group` |
| NumberInput | `@mdigitalcn/uikit/number-input` |
| Textarea | `@mdigitalcn/uikit/textarea` |
| Select | `@mdigitalcn/uikit/select` |
| MultiSelect | `@mdigitalcn/uikit/multi-select` |
| Cascader | `@mdigitalcn/uikit/cascader` |
| TreeSelect | `@mdigitalcn/uikit/tree-select` |
| DatePicker | `@mdigitalcn/uikit/date-picker` |
| ColorPicker | `@mdigitalcn/uikit/color-picker` |
| Autocomplete | `@mdigitalcn/uikit/autocomplete` |
| Mentions | `@mdigitalcn/uikit/mentions` |
| Checkbox | `@mdigitalcn/uikit/checkbox` |
| CheckboxGroup | `@mdigitalcn/uikit/checkbox-group` |
| Radio | `@mdigitalcn/uikit/radio` |
| RadioGroup | `@mdigitalcn/uikit/radio-group` |
| Switch | `@mdigitalcn/uikit/switch` |
| Slider | `@mdigitalcn/uikit/slider` |
| Rating | `@mdigitalcn/uikit/rating` |
| Toggle | `@mdigitalcn/uikit/toggle` |
| ToggleGroup | `@mdigitalcn/uikit/toggle-group` |
| Upload | `@mdigitalcn/uikit/upload` |
| Clipboard | `@mdigitalcn/uikit/clipboard` |
| TagsInput | `@mdigitalcn/uikit/tags-input` |

</details>

<details>
<summary><b>Layout (9)</b></summary>

| Component | Import |
|-----------|--------|
| Button | `@mdigitalcn/uikit/button` |
| ButtonGroup | `@mdigitalcn/uikit/button-group` |
| Card | `@mdigitalcn/uikit/card` |
| Grid | `@mdigitalcn/uikit/grid` |
| Divider | `@mdigitalcn/uikit/divider` |
| Collapse | `@mdigitalcn/uikit/collapse` |
| Accordion | `@mdigitalcn/uikit/accordion` |
| ScrollArea | `@mdigitalcn/uikit/scroll-area` |
| Resizable | `@mdigitalcn/uikit/resizable` |

</details>

<details>
<summary><b>Navigation (12)</b></summary>

| Component | Import |
|-----------|--------|
| Tabs | `@mdigitalcn/uikit/tabs` |
| Breadcrumbs | `@mdigitalcn/uikit/breadcrumbs` |
| Pagination | `@mdigitalcn/uikit/pagination` |
| Stepper | `@mdigitalcn/uikit/stepper` |
| Dropdown | `@mdigitalcn/uikit/dropdown` |
| ContextMenu | `@mdigitalcn/uikit/context-menu` |
| Menubar | `@mdigitalcn/uikit/menubar` |
| NavigationMenu | `@mdigitalcn/uikit/navigation-menu` |
| Command | `@mdigitalcn/uikit/command` |
| Anchor | `@mdigitalcn/uikit/anchor` |
| Link | `@mdigitalcn/uikit/link` |
| FloatButton | `@mdigitalcn/uikit/float-button` |

</details>

<details>
<summary><b>Overlays (5)</b></summary>

| Component | Import |
|-----------|--------|
| Modal | `@mdigitalcn/uikit/modal` |
| Drawer | `@mdigitalcn/uikit/drawer` |
| Tooltip | `@mdigitalcn/uikit/tooltip` |
| Popover | `@mdigitalcn/uikit/popover` |
| Tour | `@mdigitalcn/uikit/tour` |

</details>

<details>
<summary><b>Feedback (8)</b></summary>

| Component | Import |
|-----------|--------|
| Notification | `@mdigitalcn/uikit/notification` |
| Alert | `@mdigitalcn/uikit/alert` |
| Toast | `@mdigitalcn/uikit/toast` |
| Progress | `@mdigitalcn/uikit/progress` |
| Spinner | `@mdigitalcn/uikit/spinner` |
| Skeleton | `@mdigitalcn/uikit/skeleton` |
| Result | `@mdigitalcn/uikit/result` |
| FetchingOverlay | `@mdigitalcn/uikit/fetching-overlay` |

</details>

<details>
<summary><b>Data Display (9)</b></summary>

| Component | Import |
|-----------|--------|
| Table | `@mdigitalcn/uikit/table` |
| Tree | `@mdigitalcn/uikit/tree` |
| Calendar | `@mdigitalcn/uikit/calendar` |
| Descriptions | `@mdigitalcn/uikit/descriptions` |
| Timeline | `@mdigitalcn/uikit/timeline` |
| Transfer | `@mdigitalcn/uikit/transfer` |
| Carousel | `@mdigitalcn/uikit/carousel` |
| Image | `@mdigitalcn/uikit/image` |
| QRCode | `@mdigitalcn/uikit/qr-code` |

</details>

<details>
<summary><b>General (6)</b></summary>

| Component | Import |
|-----------|--------|
| Badge | `@mdigitalcn/uikit/badge` |
| Tag | `@mdigitalcn/uikit/tag` |
| Avatar | `@mdigitalcn/uikit/avatar` |
| Kbd | `@mdigitalcn/uikit/kbd` |
| Typography | `@mdigitalcn/uikit/typography` |
| Watermark | `@mdigitalcn/uikit/watermark` |

</details>

<details>
<summary><b>Theme & Hooks</b></summary>

| Export | Import |
|--------|--------|
| ThemeProvider, useTheme, getThemeScript | `@mdigitalcn/uikit/theme` |
| useControllable | `@mdigitalcn/uikit/hooks/useControllable` |
| useDebounce | `@mdigitalcn/uikit/hooks/useDebounce` |
| useThrottle | `@mdigitalcn/uikit/hooks/useThrottle` |
| useMediaQuery | `@mdigitalcn/uikit/hooks/useMediaQuery` |
| useRipple | `@mdigitalcn/uikit/hooks/useRipple` |

</details>

---

## CSS Variables Reference

<details>
<summary><b>Colors</b></summary>

```
--color-primary / -hover / -active / -foreground
--color-secondary / -hover / -active / -foreground
--color-accent / -hover / -active / -foreground
--color-success / -hover / -active / -foreground
--color-error / -hover / -active / -foreground
--color-warning / -hover / -active / -foreground
--color-info / -hover / -active / -foreground

--color-background / -secondary
--color-surface
--color-card / -foreground
--color-border / -primary / -hover / -focus

--color-text-primary / -secondary / -muted / -disabled

--color-input-bg / -text / -placeholder / -border / -border-focus / -border-error
--color-focus / -ring
--color-disabled / -text
--color-overlay
```

</details>

<details>
<summary><b>Sizing</b></summary>

```
--button-height-xs/sm/md/lg      --button-padding-x-xs/sm/md/lg
--input-height-xs/sm/md/lg       --input-padding-x-xs/sm/md/lg
--select-height-xs/sm/md/lg      --select-padding-x-xs/sm/md/lg
--toggle-height-xs/sm/md/lg      --toggle-padding-x-xs/sm/md/lg
--textarea-min-height-xs/sm/md/lg
--checkbox-size-xs/sm/md/lg
--switch-width-xs/sm/md/lg       --switch-height-xs/sm/md/lg
--otp-size-xs/sm/md/lg
--accordion-padding-x-xs/sm/md/lg
```

</details>

<details>
<summary><b>Effects & Z-Index</b></summary>

```
--shadow-sm / -md / -lg / -xl / -2xl

--z-dropdown  (1000)    --z-sticky   (1020)
--z-modal     (1040)    --z-popover  (1050)
--z-tooltip   (1060)    --z-overlay  (1070)
```

</details>

---

## TypeScript

Full type coverage. Every prop, variant, and callback is typed:

```tsx
import type { ButtonProps, SelectOption, TableColumn } from '@mdigitalcn/uikit'
```

## Browser Support

Chrome, Firefox, Safari, Edge — last 2 versions.

## License

[MIT](./LICENSE)
