<div align="center">

# @mdigitalcn/uikit

**Production-grade React component library built on Tailwind CSS v4.**

76+ components · Slot-based color system · Tree-shakeable · 1,500+ tests · Full TypeScript

[![npm](https://img.shields.io/npm/v/@mdigitalcn/uikit?color=blue&label=npm)](https://www.npmjs.com/package/@mdigitalcn/uikit)
[![downloads](https://img.shields.io/npm/dm/@mdigitalcn/uikit?color=green)](https://www.npmjs.com/package/@mdigitalcn/uikit)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@mdigitalcn/uikit?label=minzipped)](https://bundlephobia.com/package/@mdigitalcn/uikit)
[![license](https://img.shields.io/github/license/mdigitalcn/uikit)](LICENSE)

[Changelog](https://github.com/mdigitalcn/uikit/releases) · [Report a Bug](https://github.com/mdigitalcn/uikit/issues/new?template=bug_report.md) · [Request a Feature](https://github.com/mdigitalcn/uikit/issues/new?template=feature_request.md)

</div>

---

## Table of Contents

- [Why This Library](#why-this-library)
- [Quick Start](#quick-start)
- [The Slot Color System](#the-slot-color-system)
- [Theming](#theming)
- [Dark Mode](#dark-mode)
- [Theme Presets](#theme-presets)
- [Custom Tokens](#custom-tokens)
- [Common API](#common-api)
- [All Components](#all-components)
- [Overlay Nesting](#overlay-nesting)
- [CSS Variables Reference](#css-variables-reference)
- [TypeScript](#typescript)
- [Browser Support](#browser-support)

---

## Why This Library

| | @mdigitalcn/uikit | shadcn/ui | Ant Design | Chakra UI |
|---|---|---|---|---|
| **Theming** | Slot-based — 1 prop themes everything | Copy-paste, manual | Token config object | colorScheme prop |
| **Tailwind** | v4 native (`@theme`, `@source`) | v3 with config | No Tailwind | No Tailwind |
| **Bundle** | Tree-shakeable per component | Copy into project | 300 KB+ bundle | 200 KB+ bundle |
| **Dark mode** | Zero-config CSS variables | Manual `dark:` classes | ConfigProvider | ColorModeProvider |
| **Components** | 76+ production-ready | ~50 primitives | 60+ | 60+ |
| **Tests** | 1,500+ | Community | Extensive | Moderate |

### What makes it different

**Single color prop.** `color="primary"` sets one CSS variable (`--_c`). Every internal surface — background, border, text, hover, focus ring — derives from it automatically. Changing a theme color propagates to every component at once. No per-component variant tables to maintain.

**Tailwind CSS v4 native.** Not "compatible with Tailwind" — built on v4's architecture. `@theme` defines all tokens as CSS custom properties. `@source` auto-scans compiled output. `@custom-variant dark` drives dark mode via a single class. `@utility` exposes the slot system as real Tailwind utilities.

**Five variables control everything.** The entire visual system cascades from five overrides:

```css
:root {
  --brand:   oklch(55% 0.22 260); /* Primary brand hue */
  --accent:  oklch(55% 0.20 330); /* Accent hue */
  --radius:  0.375rem;            /* Base radius — all component radii derive from this */
  --scaling: 1;                   /* Size multiplier: 0.9 = compact, 1.1 = comfortable */
  --gray:    260;                 /* Neutral hue — hue-tinted grays */
}
```

**Per-component entry points.** Import exactly what you use. Bundlers tree-shake the rest:

```tsx
import Button from '@mdigitalcn/uikit/button'
import Table  from '@mdigitalcn/uikit/table'
```

---

## Quick Start

**Install:**

```bash
npm install @mdigitalcn/uikit
```

Peer dependencies: `react >= 18`, `react-dom >= 18`, `lucide-react >= 0.400`, `tailwindcss >= 4.0`

**Add the stylesheet:**

```css
/* app.css or layout.css */
@import "tailwindcss";
@import "@mdigitalcn/uikit/styles/global.css";
```

One import. Tokens, dark mode, utilities, component styles — everything included.

**Use components:**

```tsx
import Button   from '@mdigitalcn/uikit/button'
import Input    from '@mdigitalcn/uikit/input'
import Select   from '@mdigitalcn/uikit/select'

export default function App() {
  return (
    <div className="flex gap-3">
      <Input placeholder="Search..." />
      <Select options={[{ label: 'React', value: 'react' }]} />
      <Button color="primary">Go</Button>
    </div>
  )
}
```

### Framework setup

<details>
<summary><b>Next.js (App Router)</b></summary>

```tsx
// app/layout.tsx
import '@mdigitalcn/uikit/styles/global.css'
import { ThemeProvider } from '@mdigitalcn/uikit/theme'
import { getThemeScript } from '@mdigitalcn/uikit/theme'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents dark-mode flash on SSR */}
        <script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
      </head>
      <body>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

All components are `'use client'` — they can be imported directly in Server Components or wrapped in a client boundary.

</details>

<details>
<summary><b>Vite / React SPA</b></summary>

```tsx
// main.tsx
import '@mdigitalcn/uikit/styles/global.css'
import { ThemeProvider } from '@mdigitalcn/uikit/theme'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </StrictMode>
)
```

</details>

---

## The Slot Color System

The library's core idea: one `color` prop, zero per-component color variant tables.

When you write `<Button color="primary">`, it sets `--_c` to the primary color token. Every internal utility reads from `--_c`:

| Utility | Meaning |
|---|---|
| `bg-slot` | Background at full opacity |
| `bg-slot-10` | Background at 10% opacity (soft fills) |
| `bg-slot-20` | Background at 20% opacity |
| `text-slot` | Foreground text in the slot color |
| `text-slot-fg` | Text on top of `bg-slot` (meets contrast) |
| `border-slot` | Border at full opacity |
| `border-slot-30` | Border at 30% opacity |
| `hover:bg-slot-90` | Hover state (10% darker) |

All eight semantic colors (`primary`, `secondary`, `accent`, `success`, `error`, `warning`, `info`, `default`) plus any custom color you define work automatically through this system:

```tsx
<Button color="primary">Primary</Button>
<Button color="error">Delete</Button>
<Alert color="warning">Something needs attention</Alert>
<Badge color="success">Active</Badge>
<Input color="info" />
```

**Status overrides color.** When a form field carries a validation status the status color takes priority:

```tsx
// error/warning/success/info replace the color prop on form components
<Input error="This field is required" />
<Select warning="Unusual value — double check" />
<Checkbox success />
```

---

## Theming

### Dark Mode

```tsx
import { ThemeProvider, useTheme } from '@mdigitalcn/uikit/theme'

// Wrap your app once
<ThemeProvider defaultTheme="system">
  <App />
</ThemeProvider>

// Toggle anywhere
const { theme, setTheme } = useTheme()
setTheme('dark')    // 'light' | 'dark' | 'system'
```

All components use CSS custom properties. Dark mode swaps values at the `:root` level. Zero `dark:` prefixes appear in component code.

### SSR Flash Prevention

```tsx
import { getThemeScript } from '@mdigitalcn/uikit/theme'

// In your <head>, before any stylesheets
<script dangerouslySetInnerHTML={{ __html: getThemeScript() }} />
```

Reads `localStorage` and applies the correct class to `<html>` synchronously before React hydrates.

---

## Theme Presets

Six curated presets ship out of the box. Import after `global.css`, then set `data-theme` on `<html>`:

```css
@import "tailwindcss";
@import "@mdigitalcn/uikit/styles/global.css";

/* Pick one — or ship all and switch at runtime */
@import "@mdigitalcn/uikit/styles/themes/presets/corporate.css";
@import "@mdigitalcn/uikit/styles/themes/presets/vibrant.css";
@import "@mdigitalcn/uikit/styles/themes/presets/minimal.css";
@import "@mdigitalcn/uikit/styles/themes/presets/warm.css";
@import "@mdigitalcn/uikit/styles/themes/presets/ocean.css";
@import "@mdigitalcn/uikit/styles/themes/presets/rose.css";
```

```html
<html data-theme="corporate" class="dark">
```

| Preset | Character |
|---|---|
| `corporate` | Muted blues, tight radius, professional |
| `vibrant` | Saturated palette, bold accents |
| `minimal` | Near-zero chroma, maximum whitespace |
| `warm` | Amber and terracotta tones |
| `ocean` | Teal and deep blue, calm |
| `rose` | Pink-red brand, soft surfaces |

Presets compose freely with dark/light mode. `data-theme="ocean"` + `class="dark"` gives the dark ocean variant.

---

## Custom Tokens

Override after the library import. Source order wins — no `!important` needed:

```css
@import "tailwindcss";
@import "@mdigitalcn/uikit/styles/global.css";

:root {
  /* Brand */
  --color-primary:            oklch(55% 0.22 270);
  --color-primary-hover:      oklch(50% 0.24 270);
  --color-primary-active:     oklch(45% 0.26 270);
  --color-primary-foreground: oklch(99% 0 0);

  /* Shape */
  --radius: 0.5rem;      /* Cascades to --radius-button, --radius-card, etc. */
  --scaling: 1;          /* 0.9 = compact, 1.1 = comfortable */

  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;

  /* Sizing overrides */
  --button-height-md: 2.5rem;
  --input-height-md:  2.5rem;
}

.dark {
  --color-primary:            oklch(65% 0.22 270);
  --color-background:         oklch(12% 0.01 270);
  --color-surface:            oklch(16% 0.01 270);
}
```

---

## Common API

### `color`

```
'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info'
```

Available on every component that has visual state. Drives the slot color system.

### `size`

```
'xs' | 'sm' | 'md' (default) | 'lg'
```

Controls height, padding, and font size. All values read from CSS token variables — override with `--button-height-md`, `--input-height-sm`, etc.

### `variant`

Per-component options:

| Component | Variants |
|---|---|
| Button | `solid` `outline` `soft` `dashed` `link` `ghost` |
| Input | `outline` `filled` |
| Card | `default` `solid` `outline` `soft` `ghost` `elevated` |
| Badge / Tag | `default` `solid` `outline` `soft` |
| Checkbox / Toggle | `solid` `outline` `soft` |
| Pagination | `default` `solid` `soft` |
| Popover | `default` `solid` `soft` |

### Validation state

All form components share the same validation API:

```tsx
<Input   error="Required"              helperText="Min 8 characters" />
<Select  warning="Unusual value"       />
<Input   success                       helperText="Looks good" />
<Input   info="Auto-filled from SSO"   />
```

The status color replaces the `color` prop automatically.

### Styling escape hatches

Three levels of override — use the lightest one that solves the problem:

```tsx
// 1. Root element className
<Button className="shadow-lg w-full">Submit</Button>

// 2. Internal part classNames
<Input
  classNames={{
    root:   'mb-4',
    label:  'font-bold text-primary',
    input:  'tracking-wide font-mono',
  }}
/>

// 3. CSS selectors — every part has a semantic class and data-slot attribute
.select_option  { padding-inline: 1rem; }
[data-slot="trigger"] { min-width: 200px; }
[data-slot="popover-content"] { max-height: 400px; }
```

---

## All Components

<details>
<summary><b>Data Entry (27 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Input | `@mdigitalcn/uikit/input` | clearable, loading, icons, character count |
| FloatInput | `@mdigitalcn/uikit/float-input` | floating label variant |
| InputPassword | `@mdigitalcn/uikit/input-password` | show/hide toggle, strength indicator |
| InputOTP | `@mdigitalcn/uikit/input-otp` | keyboard nav, paste, mask |
| InputGroup | `@mdigitalcn/uikit/input-group` | addons, prefix, suffix |
| NumberInput | `@mdigitalcn/uikit/number-input` | step, min/max, formatter |
| Textarea | `@mdigitalcn/uikit/textarea` | auto-resize, character count |
| Select | `@mdigitalcn/uikit/select` | virtualized, searchable, groups |
| MultiSelect | `@mdigitalcn/uikit/multi-select` | chips, virtualized, searchable |
| Cascader | `@mdigitalcn/uikit/cascader` | nested option tree, async load |
| TreeSelect | `@mdigitalcn/uikit/tree-select` | hierarchical, checkboxes |
| DatePicker | `@mdigitalcn/uikit/date-picker` | calendar, range, time picker |
| ColorPicker | `@mdigitalcn/uikit/color-picker` | hex/rgb/hsl, presets |
| Autocomplete | `@mdigitalcn/uikit/autocomplete` | async suggestions |
| Mentions | `@mdigitalcn/uikit/mentions` | @-mention with dropdown |
| Checkbox | `@mdigitalcn/uikit/checkbox` | indeterminate, solid/outline/soft |
| CheckboxGroup | `@mdigitalcn/uikit/checkbox-group` | horizontal/vertical |
| Radio | `@mdigitalcn/uikit/radio` | all variants |
| RadioGroup | `@mdigitalcn/uikit/radio-group` | button style option |
| Switch | `@mdigitalcn/uikit/switch` | loading state, label |
| Slider | `@mdigitalcn/uikit/slider` | range, marks, tooltip |
| Rating | `@mdigitalcn/uikit/rating` | half-star, custom icon |
| Toggle | `@mdigitalcn/uikit/toggle` | |
| ToggleGroup | `@mdigitalcn/uikit/toggle-group` | single/multiple |
| Upload | `@mdigitalcn/uikit/upload` | drag-and-drop, list/picture |
| Clipboard | `@mdigitalcn/uikit/clipboard` | copy-to-clipboard with feedback |
| TagsInput | `@mdigitalcn/uikit/tags-input` | free-entry tags with delimiter |

</details>

<details>
<summary><b>Layout (9 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Button | `@mdigitalcn/uikit/button` | 6 variants, ripple, loading, icon |
| ButtonGroup | `@mdigitalcn/uikit/button-group` | connected borders, single selection |
| Card | `@mdigitalcn/uikit/card` | 6 variants, clickable, cover image |
| Grid | `@mdigitalcn/uikit/grid` | responsive column helper |
| Divider | `@mdigitalcn/uikit/divider` | text label, orientation |
| Collapse | `@mdigitalcn/uikit/collapse` | animated height |
| Accordion | `@mdigitalcn/uikit/accordion` | single/multiple, flush |
| ScrollArea | `@mdigitalcn/uikit/scroll-area` | custom styled scrollbar |
| Resizable | `@mdigitalcn/uikit/resizable` | drag handle, panel groups |

</details>

<details>
<summary><b>Navigation (12 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Tabs | `@mdigitalcn/uikit/tabs` | 5 variants, lazy/destroy on hide |
| Breadcrumbs | `@mdigitalcn/uikit/breadcrumbs` | separator, ellipsis collapse |
| Pagination | `@mdigitalcn/uikit/pagination` | quick jumper, size changer, simple mode |
| Stepper | `@mdigitalcn/uikit/stepper` | horizontal/vertical, status icons |
| Dropdown | `@mdigitalcn/uikit/dropdown` | groups, icons, keyboard nav |
| ContextMenu | `@mdigitalcn/uikit/context-menu` | right-click, nested menus |
| Menubar | `@mdigitalcn/uikit/menubar` | app-style menu, keyboard nav |
| NavigationMenu | `@mdigitalcn/uikit/navigation-menu` | horizontal/vertical, flyout panels |
| Command | `@mdigitalcn/uikit/command` | palette, modal variant |
| Anchor | `@mdigitalcn/uikit/anchor` | scroll-spy, nested, custom container |
| Link | `@mdigitalcn/uikit/link` | underline variants |
| FloatButton | `@mdigitalcn/uikit/float-button` | FAB, group, scroll-to-top |

</details>

<details>
<summary><b>Overlays (5 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Modal | `@mdigitalcn/uikit/modal` | composed + primitive API, sizes, color accents |
| Drawer | `@mdigitalcn/uikit/drawer` | 4 directions, snap points, handle |
| Tooltip | `@mdigitalcn/uikit/tooltip` | sides, align, arrow, delay |
| Popover | `@mdigitalcn/uikit/popover` | 3 variants, portal control |
| Tour | `@mdigitalcn/uikit/tour` | step-by-step product tours |

> **Overlay nesting** — Select, Dropdown, DatePicker, Tooltip, and all other Popover-based components work correctly inside Modal and Drawer. See [Overlay Nesting](#overlay-nesting).

</details>

<details>
<summary><b>Feedback (8 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Notification | `@mdigitalcn/uikit/notification` | position, duration, queue |
| Alert | `@mdigitalcn/uikit/alert` | closable, icon, actions |
| Toast | `@mdigitalcn/uikit/toast` | imperative API, positions |
| Progress | `@mdigitalcn/uikit/progress` | line/circle, striped, animated |
| Spinner | `@mdigitalcn/uikit/spinner` | 4 variants, sizes |
| Skeleton | `@mdigitalcn/uikit/skeleton` | shimmer, isLoaded state |
| Result | `@mdigitalcn/uikit/result` | success/error/warning/info |
| FetchingOverlay | `@mdigitalcn/uikit/fetching-overlay` | async loading mask |

</details>

<details>
<summary><b>Data Display (9 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Table | `@mdigitalcn/uikit/table` | virtualized, sortable, sticky, selection |
| Tree | `@mdigitalcn/uikit/tree` | async load, drag, checkboxes |
| Calendar | `@mdigitalcn/uikit/calendar` | min/max, disabled dates, keyboard nav |
| Descriptions | `@mdigitalcn/uikit/descriptions` | responsive columns, bordered |
| Timeline | `@mdigitalcn/uikit/timeline` | alternating, custom icons |
| Transfer | `@mdigitalcn/uikit/transfer` | filterable, virtualized |
| Carousel | `@mdigitalcn/uikit/carousel` | fade/coverflow, autoplay, thumbs |
| Image | `@mdigitalcn/uikit/image` | preview, lazy, fallback |
| QRCode | `@mdigitalcn/uikit/qr-code` | size, color, logo |

</details>

<details>
<summary><b>General (6 components)</b></summary>

| Component | Import path | Notes |
|---|---|---|
| Badge | `@mdigitalcn/uikit/badge` | dot, count, max, position |
| Tag | `@mdigitalcn/uikit/tag` | closable, icon, 4 variants |
| Avatar | `@mdigitalcn/uikit/avatar` | image/initials/icon, group |
| Kbd | `@mdigitalcn/uikit/kbd` | keyboard key display |
| Typography | `@mdigitalcn/uikit/typography` | prose scale, mark, code, blockquote |
| Watermark | `@mdigitalcn/uikit/watermark` | canvas-based, tiled |

</details>

<details>
<summary><b>Theme and Hooks</b></summary>

| Export | Import path |
|---|---|
| `ThemeProvider`, `useTheme`, `getThemeScript` | `@mdigitalcn/uikit/theme` |
| `useControllable` | `@mdigitalcn/uikit/hooks` |
| `useDebounce` | `@mdigitalcn/uikit/hooks` |
| `useThrottle` | `@mdigitalcn/uikit/hooks` |
| `useMediaQuery` | `@mdigitalcn/uikit/hooks` |
| `useRipple` | `@mdigitalcn/uikit/hooks` |
| `useMenuNavigation` | `@mdigitalcn/uikit/hooks` |
| `useOverlayContainer` | `@mdigitalcn/uikit/hooks` |

</details>

---

## Overlay Nesting

A common source of bugs in component libraries: dropdown menus inside modals and drawers stop scrolling, lose focus, or close unexpectedly. This library solves all three.

### How it works

`ModalContent` and `DrawerContent` set a React context (`OverlayContainerContext`) with a ref to their DOM node. Every `PopoverContent` and `TooltipContent` reads this context. When inside an overlay, they portal into the overlay's DOM tree instead of `document.body`.

This keeps dropdowns inside `react-remove-scroll`'s allowed scroll zone (fixing wheel-scroll) and inside vaul's inert boundary (fixing pointer-event blocking). `data-vaul-no-drag` on every popover prevents vaul from treating scrolling inside a dropdown as a swipe-to-close gesture.

```tsx
// This just works — no configuration needed
<ComposedModal open={open} onOpenChange={setOpen} title="Settings">
  <Select label="Country" options={countries} />
  <MultiSelect label="Tags" options={tags} />
  <DatePicker label="Start date" />
  <Dropdown items={actions} trigger={<Button>Actions</Button>} />
</ComposedModal>
```

```tsx
// Same for Drawer
<ComposedDrawer open={open} direction="right" title="Filters">
  <Select label="Status" options={statuses} />
  <DatePicker label="Date range" />
</ComposedDrawer>
```

### Building custom overlays

If you build your own overlay and want the same behavior, wrap content with the context provider:

```tsx
import { OverlayContainerContext } from '@mdigitalcn/uikit/hooks'
import { useState, useRef } from 'react'

function MyCustomOverlay({ children }: { children: React.ReactNode }) {
  const [container, setContainer] = useState<Element | null>(null)

  return (
    <div ref={setContainer} className="my-overlay">
      <OverlayContainerContext.Provider value={container}>
        {children}
      </OverlayContainerContext.Provider>
    </div>
  )
}
```

---

## CSS Variables Reference

<details>
<summary><b>Color tokens</b></summary>

```
/* Brand */
--color-primary            --color-primary-hover
--color-primary-active     --color-primary-foreground
--color-secondary          --color-secondary-hover
--color-secondary-active   --color-secondary-foreground
--color-accent             --color-accent-hover
--color-accent-active      --color-accent-foreground

/* Semantic */
--color-success            --color-success-hover
--color-success-active     --color-success-foreground
--color-error              --color-error-hover
--color-error-active       --color-error-foreground
--color-warning            --color-warning-hover
--color-warning-active     --color-warning-foreground
--color-info               --color-info-hover
--color-info-active        --color-info-foreground

/* Surfaces */
--color-background         --color-background-secondary
--color-surface            --color-card
--color-overlay

/* Text */
--color-text-primary       --color-text-secondary
--color-text-muted         --color-text-disabled

/* Borders */
--color-border             --color-border-primary
--color-border-hover       --color-border-focus
```

</details>

<details>
<summary><b>Radius tokens</b></summary>

All radii cascade from `--radius`. Override `--radius` to shift everything at once, or override individual tokens for precise control:

```
--radius           /* Base — controls the global radius scale */

--radius-button    /* Buttons, chips, small interactive elements */
--radius-input     /* Text inputs, selects, textareas */
--radius-tag       /* Tags, badges, small labels */
--radius-card      /* Cards, panels */
--radius-dropdown  /* Dropdown menus, option lists */
--radius-popover   /* Popover content */
--radius-modal     /* Dialogs, modals */
--radius-drawer    /* Drawer panels */
--radius-tooltip   /* Tooltip bubbles */
```

</details>

<details>
<summary><b>Sizing tokens</b></summary>

```
/* Heights */
--button-height-xs/sm/md/lg
--input-height-xs/sm/md/lg
--select-height-xs/sm/md/lg
--toggle-height-xs/sm/md/lg
--checkbox-size-xs/sm/md/lg
--switch-width-xs/sm/md/lg      --switch-height-xs/sm/md/lg
--otp-size-xs/sm/md/lg

/* Horizontal padding */
--button-padding-x-xs/sm/md/lg
--input-padding-x-xs/sm/md/lg
--select-padding-x-xs/sm/md/lg
--toggle-padding-x-xs/sm/md/lg

/* Component-specific */
--textarea-min-height-xs/sm/md/lg
--accordion-padding-x-xs/sm/md/lg
--modal-max-width-xs/sm/md/lg
--drawer-width-sm/md/lg/xl/full
```

</details>

<details>
<summary><b>Animation tokens</b></summary>

```
--duration-enter   /* Enter animation duration (default 150ms) */
--duration-exit    /* Exit animation duration (default 100ms) */
--ease-default     /* Default easing curve */
```

Control animation globally:

```css
:root {
  --duration-enter: 200ms;
  --duration-exit:  120ms;
}
```

</details>

<details>
<summary><b>Z-index scale</b></summary>

```
--z-dropdown   1000    /* Floating menus */
--z-sticky     1020    /* Sticky headers */
--z-modal      1040    /* Modals and drawers */
--z-popover    1050    /* Popovers, date pickers, selects */
--z-tooltip    1060    /* Tooltips */
--z-overlay    1070    /* Full-screen overlays */
```

</details>

<details>
<summary><b>Shadow tokens</b></summary>

```
--shadow-sm    --shadow-md    --shadow-lg
--shadow-xl    --shadow-2xl
```

</details>

---

## TypeScript

Full type coverage. Every component prop, variant union, and callback is typed:

```tsx
import type {
  ButtonProps,
  InputProps,
  SelectOption,
  TableColumn,
  ModalProps,
  DrawerProps,
  TooltipProps,
  CalendarProps,
} from '@mdigitalcn/uikit'
```

Strict mode compatible. No `any` in public types.

---

## Browser Support

Modern evergreen browsers — Chrome, Firefox, Safari, Edge — last 2 major versions.

Uses `oklch()` for color tokens (supported in all evergreen browsers since 2023). Uses `@layer` and CSS custom properties throughout.

---

## License

[MIT](./LICENSE) — free for personal and commercial use.
