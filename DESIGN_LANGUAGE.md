# mdigitalcn_uikit — Design Language Specification

> This document is the authoritative source of truth for how every component in the library must look and behave. When in doubt, this document wins.

---

## Table of Contents

1. [Foundations](#1-foundations)
2. [The Slot Color System](#2-the-slot-color-system)
3. [Component Grammar](#3-component-grammar)
4. [Interactive States — The Laws](#4-interactive-states--the-laws)
5. [Component Categories & Rules](#5-component-categories--rules)
6. [Known Violations to Fix](#6-known-violations-to-fix)
7. [Quick Reference Cheat Sheet](#7-quick-reference-cheat-sheet)

---

## 1. Foundations

### 1.1 Design Principles

**One color. Many surfaces.**
Every component draws from a single set of CSS custom properties (`--_c`, `--_c-bg`, `--_c-fg`, `--_c-border`) set by the `color` prop. There are no hardcoded brand colors anywhere in component code.

**Scale, don't guess.**
All heights, paddings, and type sizes follow the `xs/sm/md/lg` scale using CSS custom property tokens. Hardcoded `px-3` or `h-8` is a violation — use `px-(--input-padding-x-md)` or `h-(--button-height-md)`.

**Status overrides color.**
When a form field has a validation status (error, warning, info, success), the status drives the slot color. The `color` prop is secondary. Always: `colorVars[status !== 'default' ? status : color]`.

**Consistency over cleverness.**
Interactive states (focus, hover, disabled) use the same pattern everywhere within a component category. A user who learns Input knows Select. A user who learns Button knows Pagination.

**Accessibility is not optional.**
Every interactive element must have a visible focus state. WCAG 2.4.7 (focus visible) is a hard requirement. Ring at 30%+ opacity minimum.

---

### 1.2 The 5 Control Variables

Consumers control the entire visual system by overriding these five CSS custom properties:

```css
:root {
  --brand:   oklch(55% 0.22 260);   /* Primary brand color */
  --accent:  oklch(55% 0.20 330);   /* Secondary/accent color */
  --radius:  0.375rem;              /* Base radius (all radii cascade from this) */
  --scaling: 1;                     /* Size multiplier: 0.9=compact, 1.1=comfortable */
  --gray:    260;                   /* Neutral hue (hue-tinted grays) */
}
```

Everything derives from these five. A theme is exactly these five overrides.

---

### 1.3 Color Tokens

**Brand colors** (auto-derived from `--brand` and `--accent`):

| Token | Usage |
|---|---|
| `--color-primary` | Primary actions, highlights |
| `--color-secondary` | Secondary actions |
| `--color-accent` | Accent highlights |

**Semantic colors** (WCAG-tested, fixed OKLCH values):

| Token | Usage |
|---|---|
| `--color-success` | Positive states, confirmations |
| `--color-error` | Destructive actions, validation errors |
| `--color-warning` | Caution, non-destructive issues |
| `--color-info` | Informational, neutral status |

**Surface tokens:**

| Token | Usage |
|---|---|
| `--color-background` | Page/root background |
| `--color-surface` | Elevated surfaces (cards, inputs) |
| `--color-border` | Default border color |
| `--color-text-primary` | Body text |
| `--color-text-secondary` | Labels, helpers, placeholders |
| `--color-text-muted` | Disabled text, de-emphasized |

---

### 1.4 Size Scale

All component dimensions use the base size scale, multiplied by `--scaling`:

| Token | Default | Compact (0.9) | Comfortable (1.1) |
|---|---|---|---|
| `--size-xs` | 1.75rem (28px) | 1.575rem | 1.925rem |
| `--size-sm` | 2rem (32px) | 1.8rem | 2.2rem |
| `--size-md` | 2.25rem (36px) | 2.025rem | 2.475rem |
| `--size-lg` | 2.75rem (44px) | 2.475rem | 3.025rem |

**Buttons, inputs, selects, toggles, and pagination** all reference these same base sizes.
Heights must be `h-(--{component}-height-{size})` — never hardcoded.

---

### 1.5 Typography Scale in Components

Font sizes follow the component size. This is a strict rule.

| Component size | Font size class |
|---|---|
| `xs` | `text-xs` (0.75rem) |
| `sm` | `text-sm` (0.875rem) |
| `md` | `text-base` (1rem) |
| `lg` | `text-lg` (1.125rem) |

**Font weight rules:**

| Context | Weight |
|---|---|
| Button label, toggle, tab | `font-medium` |
| Input label, helper label | `font-medium` |
| Card title, modal title, alert title | `font-semibold` |
| Badge, tag | `font-medium` |
| Body text in components | `font-normal` (inherited) |
| Table header | `font-semibold` |

**Helper/status message text:** always `text-xs` via `statusMessageVariants({ status })`.

**Labels:** always `text-sm font-medium text-text-secondary` (or `text-text-primary` when bold context).

---

### 1.6 Border Radius Tokens

All radii cascade from `--radius`. Components must use the token for their category:

| Token | Value | Used by |
|---|---|---|
| `--radius-button` | `var(--radius)` | Button, Pagination items, Toggle, ToggleGroup |
| `--radius-input` | `var(--radius)` | Input, Select, Textarea, NumberInput, OTP slots, Autocomplete, TagsInput, Mentions |
| `--radius-tag` | `var(--radius)` | Tag, TagsInput internal tags |
| `--radius-alert` | `var(--radius)` | Alert, Notification, Toast |
| `--radius-tooltip` | `var(--radius)` | Tooltip |
| `--radius-badge` | `9999px` | Badge (always pill — fixed) |
| `--radius-dropdown` | `calc(var(--radius) * 1.5)` | Select dropdown, Autocomplete dropdown, Command |
| `--radius-card` | `calc(var(--radius) * 2)` | Card, Table wrapper, Accordion |
| `--radius-popover` | `calc(var(--radius) * 2)` | Popover, DatePicker calendar |
| `--radius-modal` | `calc(var(--radius) * 3)` | Modal |
| `--radius-drawer` | `calc(var(--radius) * 3)` | Drawer (rounded corners on open edge) |

**Rule:** A component must use its category's radius token. Using `rounded-lg`, `rounded-md`, `rounded-2xl` directly is a violation unless the component has no token (e.g., Avatar which uses `rounded-full` / `rounded-lg` by design).

---

### 1.7 Shadow System

| Token | Usage |
|---|---|
| `--shadow-xs` | Subtle depth (Avatar bordered, Slider thumb) |
| `--shadow-sm` | Card default, elevated inputs |
| `--shadow-md` | Dropdown panels, popovers |
| `--shadow-lg` | Modal, Drawer, floating elements |

Dark mode shadows are heavier (higher opacity) and auto-applied via the token definitions.

---

### 1.8 Motion System

All transitions use the shared motion tokens:

| Token | Duration | Usage |
|---|---|---|
| `--duration-fast` (100ms) | Hover border color, icon rotation |
| `--duration-normal` (200ms) | Most transitions (focus ring, background) |
| `--duration-slow` (300ms) | Panel open/close, accordion, tabs indicator |
| `--ease-default` | Standard easing for all transitions |
| `--ease-spring` | Button press, interactive feedback |

**Rule:** Use `transition-colors` for color-only changes, `transition-[shadow,transform]` for elevation changes, `duration-200` as the default. Never write arbitrary `duration-[250ms]` values.

---

### 1.9 Z-Index Scale

| Token | Value | Usage |
|---|---|---|
| `--z-tab` | 1 | Tab indicator |
| `--z-dropdown` | 1000 | Select, Autocomplete, Command dropdowns |
| `--z-sticky` | 1020 | Table sticky header/footer |
| `--z-modal` | 1040 | Modal, Drawer |
| `--z-popover` | 1050 | Popover, DatePicker calendar |
| `--z-tooltip` | 1060 | Tooltip |
| `--z-overlay` | 1070 | Overlay backdrop |
| `--z-tour` | 1080 | Tour/onboarding |

**Rule:** Always use `z-[var(--z-{level})]`. Never hardcode `z-50`, `z-100`, etc.

---

## 2. The Slot Color System

This is the core mechanism. Understanding it is mandatory.

### 2.1 How It Works

The `color` prop sets four CSS custom properties on the component's root element:

```
--_c        The main color (border, text, stroke)
--_c-bg     The background fill color
--_c-fg     The foreground (text on colored backgrounds)
--_c-border The border color
```

These are set by `colorVars` (8 values including 'default') or `buttonColorVars` (7 values, no 'default'):

```ts
// Use colorVars for display components and form inputs
colorVars['primary'] // [--_c:var(--color-primary)] [--_c-bg:var(--color-primary)] ...

// Use buttonColorVars for action components (no 'default' allowed)
buttonColorVars['primary'] // same values, excludes 'default'
```

### 2.2 Slot Utility Classes

Child elements use slot utilities instead of direct color classes:

| Class | CSS output | Use for |
|---|---|---|
| `bg-slot` | `background-color: var(--_c-bg)` | Solid fills |
| `bg-slot-5` | 5% opacity of `--_c` | Very subtle tints |
| `bg-slot-10` | 10% opacity of `--_c` | Soft variant background |
| `bg-slot-20` | 20% opacity of `--_c` | Track background (Slider), Skeleton |
| `bg-slot-50` | 50% opacity of `--_c` | Mid-opacity fills |
| `bg-slot-90` | 90% blend to background | Hover on solid buttons |
| `text-slot` | `color: var(--_c)` | Colored text |
| `text-slot-fg` | `color: var(--_c-fg)` | Text on colored backgrounds |
| `text-slot-80` | 80% opacity | Subtle colored text |
| `border-slot` | `border-color: var(--_c-border)` | Colored borders |
| `border-slot-20` | 20% opacity | Ghost borders |
| `border-slot-30` | 30% opacity | Soft borders, unchecked controls |
| `border-slot-50` | 50% opacity | Hover border preview |
| `ring-slot` | `--tw-ring-color: var(--_c)` | Focus rings (full) |
| `ring-slot-30` | 30% opacity | Focus rings on text inputs |
| `ring-slot-50` | 50% opacity | Secondary rings |
| `shadow-slot` | 14px spread slot color at 20% | Colored drop shadow |

### 2.3 The Color Application Rule

```ts
// ALWAYS on the root element of every component:
colorVars[status !== 'default' ? status : color]

// For components with no status prop (pure display):
colorVars[color]

// For action components (ButtonColor, no 'default'):
buttonColorVars[color]
```

**Never skip applying colorVars for the 'primary' color.** The old `color !== 'primary' && colorVars[color]` guard is a bug — it leaves `--_c` undefined causing fallback to black.

---

## 3. Component Grammar

### 3.1 Standard Props

Every component exposes a consistent prop surface:

| Prop | Type | Description |
|---|---|---|
| `color` | `ComponentColor` or `ButtonColor` | Color theme |
| `size` | `ComponentSize` | `xs`, `sm`, `md`, `lg` |
| `variant` | (category-specific) | Visual style |
| `disabled` | `boolean` | Disabled state |
| `className` | `string` | Additional root classes |
| `classNames` | `Partial<Record<SlotKey, string>>` | Per-slot class overrides |
| `ref` | `Ref<HTMLElement>` | Forwarded ref (React 19 pattern) |

Form components additionally expose:
- `error`, `warning`, `info`, `success` — `string | boolean`
- `helperText` — `string`
- `label` — `string`
- `required` — `boolean`
- `messagePosition` — `'top' | 'bottom'`

### 3.2 Standard Variant Sets

Different component categories have different standard variant sets:

**Action components** (Button, Toggle, Pagination):
`solid` | `outline` | `soft` | `ghost` | `dashed` | `link`

**Display/Feedback components** (Badge, Alert, Notification, Tooltip):
`solid` | `outline` | `soft`
(no ghost — ghost on a display component is visually meaningless)

**Container components** (Card, Popover):
`default` | `solid` | `outline` | `soft` | `ghost` | `elevated`

**Navigation components** (Tabs):
`default` | `solid` | `soft` | `pill`

**Accordion**:
`default` | `solid` | `soft` | `bordered` | `splitted`

**Rule:** No component may invent variants outside its category. Components with fewer variants (e.g., Tooltip with only `solid` and `soft`) are correct — they only expose what makes visual sense.

### 3.3 Variant Visual Contracts

Each variant has a strict visual meaning. Deviating from this is a violation:

| Variant | Background | Border | Text |
|---|---|---|---|
| `solid` | `bg-slot` | `border-slot` | `text-slot-fg` |
| `outline` | transparent / `bg-background` | `border-slot` | `text-slot` |
| `soft` | `bg-slot-10` | none or `border-slot-30` | `text-slot` |
| `ghost` | transparent | none | `text-slot` |
| `dashed` | transparent | `border-dashed border-slot` | `text-slot` |
| `link` | transparent | none | `text-slot` + underline |
| `elevated` | `bg-card` | none | `text-card-foreground` + shadow |

Hover states follow the same logic one step deeper:
- `solid` hover: `hover:bg-slot-90`
- `outline` hover: `hover:bg-slot-10`
- `soft` hover: `hover:bg-slot-20`
- `ghost` hover: `hover:bg-slot-10`

### 3.4 Data Slot Attributes

Every component part must have a `data-slot="name"` attribute. This enables consumers to target component internals via CSS selectors and is required for the `classNames` prop system.

Standard slot names:
- `root` — the outermost element
- `label` — the field label
- `input` / `textarea` / `trigger` — the primary interactive element
- `wrapper` — inner container around interactive element
- `helper` — status message / helper text
- `icon` — icon containers (use `leftIcon`, `rightIcon` when directional)
- `content` — content area in containers
- `header`, `footer` — structural sections
- `overlay` — backdrop elements
- `closeButton` — dismiss controls

---

## 4. Interactive States — The Laws

These rules are non-negotiable. Every interactive component must follow exactly the pattern for its category.

### 4.1 Focus — The Single Most Important Rule

**Category A: Text input elements** (Input, Textarea, Select trigger, NumberInput, OTP slot, Mentions, DatePicker trigger)

```
focus:outline-none
focus:border-slot
focus:ring-2
focus:ring-slot-30
```

The ring is 30% opacity — soft glow that signals focus without overwhelming the layout.

**Category B: Composite input wrappers** (TagsInput, Autocomplete, InputGroup)

Same as A but using `focus-within`:
```
focus-within:border-slot
focus-within:ring-2
focus-within:ring-slot-30
```

**Category C: Button-like elements** (Button, Pagination items, ToggleGroup items, clickable Cards)

```
focus-visible:ring-2
focus-visible:ring-offset-2
focus-visible:ring-offset-background
focus-visible:ring-slot
```

Full ring with offset. The gap between element and ring makes buttons distinct from inputs.

**Category D: Selection controls** (Checkbox, Radio, Switch)

Same as Category C. These are small targets that need maximum visual clarity.

**Category E: Navigation items** (Accordion trigger, Tab items)

```
focus-visible:ring-2
focus-visible:ring-slot/50
focus-visible:rounded-sm
```

Slightly softer ring (50% opacity) since nav items are typically in a list context.

**NEVER:**
- Use `outline: none` without providing an alternative focus indicator
- Hardcode `ring-primary` — always use `ring-slot` (driven by colorVars)
- Skip focus states on any interactive element
- Use `focus:` instead of `focus-visible:` on button-like elements (focus-visible is keyboard-only)

### 4.2 Hover States

**Action components:**

| Variant | Hover |
|---|---|
| `solid` | `hover:bg-slot-90` |
| `outline` | `hover:bg-slot-10` |
| `soft` | `hover:bg-slot-20` |
| `ghost` | `hover:bg-slot-10` |
| `link` | `hover:text-slot-80 hover:underline` |
| `dashed` | `hover:bg-slot-10` |

**Input outline variant:**
```
hover:border-slot-50
```

**Input filled variant:**
```
hover:border-slot-30
```

**Close / icon buttons:**
```
hover:opacity-100
```
(paired with `opacity-70` default)

**Dropzone / upload areas:**
```
hover:border-slot-50
```
(not hardcoded `hover:border-primary`)

**Interactive list items (dropdown options, table rows):**
```
hover:bg-surface
```

### 4.3 Active / Pressed States

For buttons with explicit press feedback:
```
active:scale-[0.98]
```
or
```
data-[pressed=true]:ring-2 data-[pressed=true]:ring-current/30
```

Slider thumbs:
```
hover:scale-110 active:scale-100
```

### 4.4 Disabled State

**Rule: Always use CSS pseudo-selectors, never dynamic class injection.**

```
disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
```

For peer-based (Switch):
```
peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
```

For wrapper elements that contain a disabled input:
```
data-[disabled=true]:opacity-50
```

**Never:** set `opacity-50 cursor-not-allowed` as a dynamic string class based on a JS boolean. CSS pseudo-selectors cascade correctly and survive style merges.

### 4.5 Loading State

```
opacity-50 cursor-not-allowed pointer-events-none
```

Pair with a `<Spinner>` component inside the element. The surrounding element dims, the spinner indicates the activity.

### 4.6 Read-Only State

```
read-only:bg-surface read-only:cursor-default
```

Applied to input elements. No border change — read-only is not an error.

---

## 5. Component Categories & Rules

### 5.1 Action Components

**Applies to:** Button, Toggle, ToggleGroup, Pagination, ButtonGroup

#### Height & Padding
All heights must use the `--button-height-{size}` token (which references `--size-{size}`).

```
xs: h-(--button-height-xs) px-(--button-padding-x-xs) text-xs gap-1.5
sm: h-(--button-height-sm) px-(--button-padding-x-sm) text-sm gap-2
md: h-(--button-height-md) px-(--button-padding-x-md) text-base gap-2
lg: h-(--button-height-lg) px-(--button-padding-x-lg) text-lg gap-2.5
```

Icon-only buttons: `w-(--button-height-{size}) px-0` (square).

#### Typography
- Font weight: `font-medium`
- Letter spacing: inherited (no tracking)
- Text alignment: `text-center`

#### Border Radius
- Default (rounded): `rounded-button`
- Pill: `rounded-full`
- Square: `rounded-none`

#### Color System
- Uses `buttonColorVars` (no 'default' allowed on action components)
- Applied to the button element directly (not a wrapper div)

#### Toggle vs Button difference
Toggle has a pressed/active state with permanent visual indicator. Button has hover/focus/active ephemeral states only.

#### ToggleGroup specific
- Container uses `rounded-input` (NOT `rounded-button`) — this is intentional, containers should feel like a single input field
- Internal item separators: `border-r last:border-r-0 border-slot-20`
- Container border: `border border-slot-20`

**Violation to fix:** Toggle currently uses hardcoded `px-2 py-1` etc. — must migrate to `h-(--toggle-height-{size})` and `px-(--toggle-padding-x-{size})` tokens.

---

### 5.2 Text Input Components

**Applies to:** Input, Textarea, Select, NumberInput, DatePicker trigger, Mentions, Autocomplete, TagsInput, InputOTP, FloatInput, InputPassword, InputGroup

#### Height & Padding
```
xs: h-(--input-height-xs) px-(--input-padding-x-xs) text-xs
sm: h-(--input-height-sm) px-(--input-padding-x-sm) text-sm
md: h-(--input-height-md) px-(--input-padding-x-md) text-base
lg: h-(--input-height-lg) px-(--input-padding-x-lg) text-lg
```

Textarea uses `min-h-(--textarea-min-height-{size})` and `p-(--textarea-padding-{size})` (all-sides padding since it's multi-line).

#### Border Radius
All use `rounded-input`.
Internal tags (TagsInput): `rounded-tag`.
Dropdown panels: `rounded-dropdown`.

#### Variant Rules

**Outline (default):**
```
bg-background border border-border
hover:border-slot-50
focus:border-slot focus:ring-2 focus:ring-slot-30
```

**Filled:**
```
bg-surface border border-transparent
hover:border-slot-30
focus:border-slot focus:ring-2 focus:ring-slot-30
```

#### Status Border Rules
Status borders override the variant border only. The focus ring automatically follows via `colorVars[status !== 'default' ? status : color]` on the root:
```
error:   border-error
warning: border-warning
info:    border-info
success: border-success
```

#### Color Application
```ts
// Root wrapper — always:
colorVars[status !== 'default' ? status : color]
```

This single line makes the slot color system work correctly for all states including focus ring color.

#### Label Anatomy
```
label: text-sm font-medium text-text-secondary mb-0.5
helper: text-xs via statusMessageVariants({ status })
required marker: text-error ml-1
```

Labels sit above the input. Helper text sits below. Both are optional.

#### Placeholder
```
placeholder:text-text-secondary/50
```
or
```
placeholder:text-text-secondary placeholder:opacity-50
```

---

### 5.3 Selection Controls

**Applies to:** Checkbox, Radio, Switch, Slider

These are non-text interactive controls that express a boolean or numeric value.

#### Color System
- Checkbox, Radio, Switch use `buttonColorVars` (no 'default')
- Slider uses `colorVars` (supports 'default')

#### Focus Ring (Category D)
```
focus-visible:ring-2
focus-visible:ring-offset-2
focus-visible:ring-offset-background
focus-visible:ring-slot
```

#### Checkbox Size Scale
```
xs: w-(--checkbox-size-xs) h-(--checkbox-size-xs)    // 0.875rem
sm: w-(--checkbox-size-sm) h-(--checkbox-size-sm)    // 1rem
md: w-(--checkbox-size-md) h-(--checkbox-size-md)    // 1.125rem
lg: w-(--checkbox-size-lg) h-(--checkbox-size-lg)    // 1.375rem
```

#### Switch Size Scale
```
xs: w-(--switch-width-xs) h-(--switch-height-xs)
sm: w-(--switch-width-sm) h-(--switch-height-sm)
md: w-(--switch-width-md) h-(--switch-height-md)
lg: w-(--switch-width-lg) h-(--switch-height-lg)
```

#### Label Anatomy (Selection Controls)
```
wrapper:   flex items-center gap-2
label:     text-sm text-text-primary select-none
helper:    mt-1 text-xs (via statusMessageVariants)
error:     text-error (on label when error)
```

#### Slider Rules
- Track background: `bg-slot-10` (default/soft) or `bg-slot-20` (solid)
- Fill: `bg-slot-20 border-slot` (default), `bg-slot` (solid), `bg-slot-50` (soft)
- Thumb border: `border-slot` (default/solid), `border-slot-50` (soft)
- Focus ring: **must use `ring-slot`**, not hardcoded `ring-primary` (current violation)
- Thumb hover: `hover:scale-110`
- Thumb active: `active:scale-100`

---

### 5.4 Display / Feedback Components

**Applies to:** Badge, Alert, Notification, Toast (Notification wrapper), Tooltip

These components display information. They are not interactive (except for close buttons).

#### Variant Set
`solid` | `outline` | `soft`

No `ghost`, `dashed`, `link` — these make no semantic sense for a display component.

#### Alert / Notification Anatomy
```
root:        relative flex gap-3 rounded-alert
icon:        shrink-0 mt-0.5 {iconSizes[size]}
content:     flex-1 min-w-0
title:       font-semibold
description: opacity-90 mt-1 (when title present)
closeButton: shrink-0 rounded-sm opacity-70 hover:opacity-100 transition-opacity
```

#### Badge Rules
- Always `rounded-full` (pill) regardless of `shape` prop
- Badge `shape` can be `pill` (text) or `circle` (icon-only aspect-square)
- The `rounded` shape in Badge is `rounded` (not `rounded-full`) — for label-style badges
- Size scale uses CSS custom properties: `--badge-font-size-*`, `--badge-padding-x-*`, `--badge-padding-y-*`

#### Tooltip Rules
```
rounded-tooltip
```
Size-based padding: `px-2 py-1` (xs) through `px-4 py-2` (lg).
Default: `variant="solid" color="default" size="sm"`.

#### Close Button Pattern (shared)
```
rounded-sm
opacity-70 hover:opacity-100
transition-opacity
cursor-pointer
```
No focus ring on close buttons within Notification/Alert — they are secondary controls. Exception: when close button is the only dismissal mechanism (Toast), add `focus-visible:ring-2 focus-visible:ring-slot`.

---

### 5.5 Container / Overlay Components

**Applies to:** Card, Modal, Drawer, Popover, Accordion

#### Card Rules
```
root: rounded-card transition-[shadow,transform]
```
Variants follow the standard contract. `elevated` uses `shadow-md` instead of border.

Clickable cards (when `clickable` prop):
```
cursor-pointer
focus-visible:ring-2 focus-visible:ring-slot focus-visible:ring-offset-2 focus-visible:ring-offset-background
active:translate-y-0 active:shadow-md
```

Hoverable cards (when `hoverable` prop):
```
hover:shadow-lg hover:-translate-y-0.5 cursor-pointer
```

#### Modal Rules
```
overlay: fixed inset-0 z-[var(--z-modal)] backdrop-blur-sm
content: fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         rounded-modal border bg-background
         z-[var(--z-modal)]
```
Animation uses Radix `data-[state=open/closed]` + `animate-in/out` classes.

#### Drawer Rules
```
content:  fixed bg-background border-border
          flex flex-col outline-none
          z-[var(--z-modal)]
```
Direction-specific rounding: `rounded-t-drawer` (bottom), `rounded-b-drawer` (top).
No rounding on left/right drawers (full-height panels).

Close button on Drawer uses `focus-visible:ring-primary` — **violation**, must use `focus-visible:ring-slot`.

#### Popover Rules
```
z-[var(--z-popover)]
rounded-popover
border outline-none
```
Uses Radix `origin-(--radix-popover-content-transform-origin)` for smart animation origin.

#### Accordion Rules
```
trigger: focus-visible:ring-2 focus-visible:ring-offset-2
         focus-visible:ring-offset-background focus-visible:ring-slot
         disabled:opacity-50 disabled:cursor-not-allowed
hover:   hover:bg-surface/50 (when not disabled)
```
Animation uses Web Animation API (WAAPI) for height — this is an intentional choice for performance. Keep it.
Icon rotation on expand: `rotate-180` with `transition-transform duration-300`.

---

### 5.6 Navigation Components

**Applies to:** Tabs, Breadcrumbs, Stepper, Pagination

#### Tabs Rules
```
list:     flex relative (+ border-b for default/solid/soft, no border for pill)
item:     font-medium whitespace-nowrap cursor-pointer
          focus-visible:ring-2 focus-visible:ring-slot/50 focus-visible:rounded-sm
inactive: text-text-secondary hover:text-text-primary
active:   text-slot (default/solid/soft) or text-slot-fg (pill)
indicator: absolute bg-slot rounded-full transition-[transform,width] duration-300
```

Pill variant container:
```
bg-surface border border-border p-0.5 rounded-{radius} w-fit
```

Indicator for pill: `rounded-{radius} shadow-sm top-0.5 bg-slot`.
Indicator for default/solid/soft: `bottom-0 h-0.5`.

#### Pagination specific violation
Pagination `xs` size currently uses hardcoded `h-6 min-w-6 px-1.5` — must be replaced with CSS custom property tokens.

Pagination items need `focus-visible:ring-2 focus-visible:ring-slot` added to base styles.

#### Stepper Rules
- Step circle: `rounded-full` with `border-2` always
- Connector: `bg-border` (unfinished), `bg-slot` (finished)
- Error state: uses `bg-error` / `text-error` directly (not slot-based — this is intentional since error is a semantic override)
- Label: `font-medium text-{size}`

---

### 5.7 Data Display Components

**Applies to:** Table, Avatar, Progress, Skeleton, Divider

#### Table Rules
```
wrapper:  overflow-auto rounded-card
header:   sticky top-0 z-[var(--z-sticky)] bg-surface
footer:   sticky bottom-0 z-[var(--z-sticky)] bg-surface
pinned:   sticky left-0 (or right-0) z-20 bg-surface
```
Header text: `font-semibold text-text-primary`.
Row hover: `hover:bg-surface` or `hover:bg-background-secondary`.

Upload/dropzone uses `hover:border-primary` (hardcoded) — **violation**, must use `hover:border-slot-50`.

#### Avatar Rules
```
root:   relative inline-flex items-center justify-center
        font-medium select-none shrink-0
        bg-slot-10 text-slot
shape:  circle → rounded-full | square → rounded-lg
```
Sizes are hardcoded (`size-6/8/10/12`) because Avatar doesn't need to scale with `--scaling`. This is an accepted exception.

Status indicators use semantic colors directly (`bg-success`, `bg-error`, `bg-warning`) — not slot-based. This is intentional since status has fixed semantic meaning.

#### Progress Rules
- Track: `rounded-full` always
- Fill: `bg-slot` with `transition-[width] duration-300` (line) or `transition-[stroke-dashoffset] duration-300` (circle)
- Striped: CSS-animated via `progress-shimmer` keyframe

#### Skeleton Rules
- Background: `bg-slot-20`
- Animation: `animate-pulse`
- Text shape: `rounded w-full`
- Circle: `rounded-full aspect-square`
- Rectangular: `rounded-md`

#### Divider Rules
- Uses CSS custom properties for widths: `w-(--divider-left-before-width)` etc.
- Always `border-slot` for the line color
- `text-sm` for label text

---

## 6. Known Violations to Fix

These are the inconsistencies discovered during the audit. Each is a concrete task.

### Critical (affects color/theme system integrity)

| Component | Violation | Fix |
|---|---|---|
| Slider | `focus-visible:ring-primary` hardcoded | → `focus-visible:ring-slot` |
| Drawer close button | `focus-visible:ring-primary` hardcoded | → `focus-visible:ring-slot` |
| Upload dropzone | `hover:border-primary hover:bg-primary/5` hardcoded | → `hover:border-slot-50 hover:bg-slot-5` |
| Upload drag active | `border-primary bg-primary/10` hardcoded | → `border-slot bg-slot-10` |
| Upload dragger icon | `text-primary` hardcoded | → `text-slot` |
| Pagination | No focus-visible ring on items | → Add `focus-visible:ring-2 focus-visible:ring-slot` |

### High (size token violations)

| Component | Violation | Fix |
|---|---|---|
| Toggle | Hardcoded `px-2 py-1`, `px-3 py-1.5`, etc. | → `h-(--toggle-height-{size})` + `px-(--toggle-padding-x-{size})` |
| Pagination xs | Hardcoded `h-6 min-w-6 px-1.5` | → `h-(--button-height-xs)` etc. |

### Medium (border radius violations)

| Component | Violation | Fix |
|---|---|---|
| ToggleGroup container | Uses `rounded-input` (OK by design — document it) | No fix needed, document the intent |
| Avatar square | Uses `rounded-lg` (not a token) | Acceptable exception — avatar shape is a design choice, not a component layout decision |
| Skeleton rectangular | Uses `rounded-md` (not a token) | Acceptable exception |

### Low (minor inconsistencies)

| Component | Violation | Fix |
|---|---|---|
| Alert typography | `text-sm` on `md` and `lg` are same | `lg` should be `text-base` |
| Notification title/description | Separate size objects outside CVA | Consolidate into CVA size variants |
| Upload | Focus uses `focus-visible:ring-primary` | → `focus-visible:ring-slot` |
| Table border mix | Uses both `border-border` and `border-slot` | Define rule: structural borders = `border-border`, semantic/colored borders = `border-slot` |

---

## 7. Quick Reference Cheat Sheet

### Color Application Pattern
```ts
// On root element — always use this:
colorVars[status !== 'default' ? status : color]

// No status prop (display component):
colorVars[color]

// Action component:
buttonColorVars[color]
```

### Focus Pattern by Element Type
```
Text input element:    focus:border-slot focus:ring-2 focus:ring-slot-30
Composite wrapper:     focus-within:border-slot focus-within:ring-2 focus-within:ring-slot-30
Button-like element:   focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-slot
Selection control:     focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-slot
Navigation item:       focus-visible:ring-2 focus-visible:ring-slot/50 focus-visible:rounded-sm
```

### Hover Pattern by Element Type
```
Solid button:          hover:bg-slot-90
Outline/ghost button:  hover:bg-slot-10
Soft button:           hover:bg-slot-20
Input outline:         hover:border-slot-50
Input filled:          hover:border-slot-30
Dropzone:              hover:border-slot-50 hover:bg-slot-5
List item:             hover:bg-surface
Close/icon button:     hover:opacity-100
```

### Disabled Pattern
```
Interactive element:   disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
Peer-based:            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
```

### Size Tokens Quick Reference
```
Component    Height token                  Padding token
Button       --button-height-{size}        --button-padding-x-{size}
Input        --input-height-{size}         --input-padding-x-{size}
Select       --select-height-{size}        --select-padding-x-{size}
Toggle       --toggle-height-{size}        --toggle-padding-x-{size}
OTP          --otp-size-{size}             (square, same for width)
Checkbox     --checkbox-size-{size}        (square, same for width)
Switch       --switch-width/height-{size}  (separate width and height)
```

### Radius by Context
```
Interactive elements:  rounded-button / rounded-input / rounded-tag
Floating panels:       rounded-dropdown
Containers:            rounded-card
Overlays:              rounded-modal / rounded-drawer
Popovers:              rounded-popover
Feedback:              rounded-alert / rounded-tooltip
Always pill:           rounded-full (Badge, Avatar circle)
```

### Variant → Background / Border / Text
```
solid:    bg-slot    / border-slot    / text-slot-fg
outline:  bg-bg      / border-slot    / text-slot
soft:     bg-slot-10 / (none)         / text-slot
ghost:    (none)     / (none)         / text-slot
elevated: bg-card    / (none)         / text-card-foreground + shadow-md
```

### Z-Index Reference
```
Dropdowns:    z-[var(--z-dropdown)]   1000
Sticky:       z-[var(--z-sticky)]     1020
Modal/Drawer: z-[var(--z-modal)]      1040
Popover:      z-[var(--z-popover)]    1050
Tooltip:      z-[var(--z-tooltip)]    1060
```

---

*This document reflects the state as of the system design review conducted in April 2026. Update it whenever a new pattern is established or a violation is resolved.*
