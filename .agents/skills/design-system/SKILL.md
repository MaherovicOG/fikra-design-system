---
name: design-system
description: Create or edit UI components, pages, or styles in the Fikra project using its React, Tailwind v4, shadcn/ui primitives, and supplied tweakcn theme. Apply whenever project UI or Storybook content changes.
---

# Fikra design system

Build accessible, responsive UI that follows the amber tweakcn theme in `src/index.css`. That file is the source of truth for light/dark values. Inspect existing implementations in `src/components/showcase/` before introducing a new composition.

## Stack and architecture

- React 19, Vite 8, strict TypeScript, Tailwind CSS v4 through `@tailwindcss/vite`, and Storybook 10 with the React/Vite framework.
- Import primitives from `@/components/ui/*`; compose feature components around them. The registry style is `base-nova` using **Base UI**, not Radix. Use `render={<Button />}` for trigger composition; do not assume `asChild`, scalar accordion values, or Radix-only props. Inspect local prop types first.
- Import `cn` from `@/lib/utils` for conditional class merging. That module re-exports the registry's `cn` implementation.
- Keep `@/* -> ./src/*` aligned in both app and config TypeScript projects and in Vite. TypeScript 7 removed `baseUrl`; use relative `paths` targets.
- Tailwind v4 is CSS-first. Preserve `@import "tailwindcss"`, animation/registry imports, `@custom-variant dark (&:is(.dark *))`, `:root`, `.dark`, and `@theme inline`. Do not add a Tailwind v3 config or mix theme systems.
- Never hardcode hex/RGB/HSL/OKLCH colors in feature JSX, CSS, chart configs, or stories. Use semantic utilities such as `bg-background`, `text-foreground`, `bg-primary`, `text-primary-foreground`, `border-border`, and `ring-ring`. Color literals belong only to the canonical token definitions or approved brand assets. Variable-based styles are appropriate for dynamic swatches and chart series.
- Every component must work in light and dark. Use semantic surface/foreground pairs. Do not add a second palette of arbitrary gray or amber utilities.

## Semantic color reference

The values below are extracted from the supplied tweakcn theme. They are reference values, not permission to inline colors in components. Each row maps to Tailwind utilities through `--color-<name>` in `@theme inline`.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | `oklch(1.0000 0 0)` | `oklch(0.2046 0 0)` | Page canvas; pair with foreground. |
| `--foreground` | `oklch(0.2686 0 0)` | `oklch(0.9219 0 0)` | Default text and icons. |
| `--card` | `oklch(1.0000 0 0)` | `oklch(0.2686 0 0)` | Contained content surfaces; pair with card-foreground. |
| `--card-foreground` | `oklch(0.2686 0 0)` | `oklch(0.9219 0 0)` | Text on card surfaces. |
| `--popover` | `oklch(1.0000 0 0)` | `oklch(0.2686 0 0)` | Portaled menus, tooltips, dialogs and floating surfaces. |
| `--popover-foreground` | `oklch(0.2686 0 0)` | `oklch(0.9219 0 0)` | Text on floating surfaces. |
| `--primary` | `oklch(0.7757 0.1642 72.2601)` | `oklch(0.7757 0.1642 72.2601)` | Main action, selected state, brand emphasis. |
| `--primary-foreground` | `oklch(0 0 0)` | `oklch(0 0 0)` | Text and icons on primary. |
| `--secondary` | `oklch(0.9670 0.0029 264.5419)` | `oklch(0.2686 0 0)` | Supporting actions and subdued fills. |
| `--secondary-foreground` | `oklch(0.4461 0.0263 256.8018)` | `oklch(0.9219 0 0)` | Text on secondary. |
| `--muted` | `oklch(0.9846 0.0017 247.8389)` | `oklch(0.2393 0 0)` | Quiet panels, skeletons, and low-emphasis fills. |
| `--muted-foreground` | `oklch(0.5510 0.0234 264.3637)` | `oklch(0.7155 0 0)` | Secondary text; verify contrast for small text. |
| `--accent` | `oklch(0.9869 0.0214 95.2774)` | `oklch(0.4763 0.1231 47.5144)` | Hovered or highlighted items. |
| `--accent-foreground` | `oklch(0.4763 0.1231 47.5144)` | `oklch(0.9283 0.1168 97.0954)` | Text on accent fills. |
| `--destructive` | `oklch(0.6397 0.2053 25.9725)` | `oklch(0.6397 0.2053 25.9725)` | Errors and destructive intent; include a text explanation. |
| `--destructive-foreground` | `oklch(1.0000 0 0)` | `oklch(1.0000 0 0)` | Text on solid destructive fills. |
| `--border` | `oklch(0.9276 0.0058 264.5313)` | `oklch(0.3715 0 0)` | Default dividers and outlines. |
| `--input` | `oklch(0.9276 0.0058 264.5313)` | `oklch(0.3715 0 0)` | Input outlines and control surfaces. |
| `--ring` | `oklch(0.7757 0.1642 72.2601)` | `oklch(0.7757 0.1642 72.2601)` | Keyboard focus indication. |
| `--chart-1` | `oklch(0.7757 0.1642 72.2601)` | `oklch(0.8445 0.1657 86.5249)` | Chart series 1; also distinguish series using labels, shapes, or line styles. |
| `--chart-2` | `oklch(0.6725 0.1555 60.5363)` | `oklch(0.6725 0.1555 60.5363)` | Chart series 2; also distinguish series using labels, shapes, or line styles. |
| `--chart-3` | `oklch(0.5600 0.1433 50.6670)` | `oklch(0.4763 0.1231 47.5144)` | Chart series 3; also distinguish series using labels, shapes, or line styles. |
| `--chart-4` | `oklch(0.4763 0.1231 47.5144)` | `oklch(0.5600 0.1433 50.6670)` | Chart series 4; also distinguish series using labels, shapes, or line styles. |
| `--chart-5` | `oklch(0.4170 0.1037 47.5612)` | `oklch(0.4763 0.1231 47.5144)` | Chart series 5; also distinguish series using labels, shapes, or line styles. |
| `--sidebar` | `oklch(0.9846 0.0017 247.8389)` | `oklch(0.1684 0 0)` | Application navigation surface. |
| `--sidebar-foreground` | `oklch(0.2686 0 0)` | `oklch(0.9219 0 0)` | Sidebar text and icons. |
| `--sidebar-primary` | `oklch(0.7757 0.1642 72.2601)` | `oklch(0.7757 0.1642 72.2601)` | Active navigation emphasis. |
| `--sidebar-primary-foreground` | `oklch(1.0000 0 0)` | `oklch(1.0000 0 0)` | Text on sidebar-primary; check contrast for small labels. |
| `--sidebar-accent` | `oklch(0.9869 0.0214 95.2774)` | `oklch(0.4763 0.1231 47.5144)` | Hovered sidebar items. |
| `--sidebar-accent-foreground` | `oklch(0.4763 0.1231 47.5144)` | `oklch(0.9283 0.1168 97.0954)` | Text on sidebar-accent. |
| `--sidebar-border` | `oklch(0.9276 0.0058 264.5313)` | `oklch(0.3715 0 0)` | Navigation dividers. |
| `--sidebar-ring` | `oklch(0.7757 0.1642 72.2601)` | `oklch(0.7757 0.1642 72.2601)` | Navigation focus indication. |

Use `bg-card text-card-foreground` and `bg-popover text-popover-foreground` together. The source theme intentionally uses the same primary amber in both modes. Its sidebar-primary foreground is white; preserve the theme, and prefer `text-primary-foreground` on amber controls where contrast requires it. Verify contrast rather than assuming the supplied palette guarantees WCAG compliance.

## Typography, radius, spacing, and depth

Fonts are bundled locally with Fontsource and aliased to the supplied family names. Do not depend on a remote font service.

| Utility | Theme family | Intended use |
| --- | --- | --- |
| `font-sans` | Geist, ui-sans-serif, sans-serif, system-ui | Product UI, forms, labels, body copy |
| `font-serif` | Source Serif 4, serif | Editorial display headings and brand statements |
| `font-mono` | JetBrains Mono, monospace | Code, token values, technical metadata |

Use Tailwind's `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`, `text-4xl`, and `text-5xl` scale. Prefer `text-sm` for dense UI and `text-base` for prose. Pair size with readable leading; never make information available only through color or tiny text.

The base `--radius` is **0.55rem**. Preserve the supplied first four mappings:

| Utility | Calculation | Use |
| --- | --- | --- |
| `rounded-sm` | `calc(var(--radius) - 4px)` | Small badges and subtle corners |
| `rounded-md` | `calc(var(--radius) - 2px)` | Small controls and inset items |
| `rounded-lg` | `var(--radius)` | Inputs and buttons |
| `rounded-xl` | `calc(var(--radius) + 4px)` | Cards, panels, overlays |
| `rounded-2xl` | `calc(var(--radius) + 8px)` | Larger registry surfaces |
| `rounded-3xl` | `calc(var(--radius) + 12px)` | Larger registry surfaces |
| `rounded-4xl` | `calc(var(--radius) + 16px)` | Larger registry surfaces |

The final three sizes extend the theme for the current shadcn registry. Use `rounded-full` for avatars and pills.

`--spacing: 0.26rem` defines one Tailwind spacing unit. Prefer the standard spacing scale (`gap-2`, `p-4`, `space-y-6`) to arbitrary dimensions. `--tracking-normal: -0.025em` applies to body text. Tracking utilities are derived from that base: tighter −0.075em, tight −0.05em, normal −0.025em, wide 0em, wider 0.025em, widest 0.075em.

Shadow values are the same in light and dark. Use borders for most UI separation and reserve deeper shadows for elevation.

| Utility / CSS token | Value | Use |
| --- | --- | --- |
| `shadow-2xs` / `--shadow-2xs` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.05)` | Subtle controls |
| `shadow-xs` / `--shadow-xs` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.05)` | Subtle controls |
| `shadow-sm` / `--shadow-sm` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.10), 0px 1px 2px -2px hsl(0 0% 10.1961% / 0.10)` | Cards and contained surfaces |
| `shadow` / `--shadow` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.10), 0px 1px 2px -2px hsl(0 0% 10.1961% / 0.10)` | Cards and contained surfaces |
| `shadow-md` / `--shadow-md` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.10), 0px 2px 4px -2px hsl(0 0% 10.1961% / 0.10)` | Floating menus and popovers |
| `shadow-lg` / `--shadow-lg` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.10), 0px 4px 6px -2px hsl(0 0% 10.1961% / 0.10)` | Floating menus and popovers |
| `shadow-xl` / `--shadow-xl` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.10), 0px 8px 10px -2px hsl(0 0% 10.1961% / 0.10)` | Dialogs and highest-elevation surfaces |
| `shadow-2xl` / `--shadow-2xl` | `0px 4px 8px -1px hsl(0 0% 10.1961% / 0.25)` | Dialogs and highest-elevation surfaces |

Shadow construction tokens: `--shadow-x: 0px`, `--shadow-y: 4px`, `--shadow-blur: 8px`, `--shadow-spread: -1px`, `--shadow-opacity: 0.1`, `--shadow-color: #1a1a1a`. Change tokens centrally when a theme revision is authorized.

## Composition and state patterns

- **Forms:** use `Field`, `FieldGroup`, `FieldLabel`, `FieldDescription`, and `FieldError` around Input/Select/Textarea. Generate collision-free IDs using `useId()`. Associate labels with controls and error/help text via `aria-describedby`; set `aria-invalid` on the input. Validate at submission and after meaningful interaction, show busy/disabled state, prevent duplicate submissions, and announce success or failure. `ProjectForm` demonstrates local validation. Its save is mock state; use a real service when the feature requires persistence.
- **Dialogs, sheets, and drawers:** use local Trigger, Content, Title, Description, and Close primitives. Compose Base UI triggers using `render`. Preserve focus trapping, Escape handling, and return focus. Require explicit confirmation for destructive actions. Keep long content scrollable; test narrow viewports.
- **Tables:** compose the Table primitives with real data. Label selection checkboxes, provide accessible sorting through `aria-sort`, and implement search, selection, pagination, empty, loading, and error states as required by the feature. Do not create nonfunctional controls. `ProjectTable` is a local mock-data example.
- **Charts:** wrap Recharts in `ChartContainer`; provide `ChartConfig` labels and `var(--chart-1)` through `var(--chart-5)` colors. Use a stable chart height, meaningful empty state, accessible data, legend, and working tooltip. Never hardcode chart colors.
- **Providers:** mount TooltipProvider for tooltips and Toaster for toast feedback. Sidebar requires SidebarProvider, chart children require ChartContainer, and message-scroller children require MessageScrollerProvider. Keep provider ownership explicit.
- **Theme:** the app's ThemeToggle persists `fikra-theme` and applies `.dark` on `document.documentElement`; default follows the system preference. Storybook owns its separate `theme` global and updates that same root class so portals inherit the theme. Use `.dark` plus semantic variables rather than duplicating CSS.
- **Accessibility:** use native buttons/links through the primitives, visible keyboard focus, meaningful labels for icon controls, and proper `aria-*` attributes. Preserve keyboard behavior of menus, selects, tabs, dialogs, and carousels. Use status/alert announcements for results and errors. Do not nest buttons inside trigger buttons. Test keyboard and touch layouts.

## Storybook and verification

Every installed UI module has a same-named `src/stories/<module>.stories.tsx` entry. Use CSF with `Meta` and `StoryObj` from `@storybook/react-vite`. Group stories under Foundations, Inputs, Data Display, Feedback, Overlays, Navigation, Layout, Messaging, or Patterns. Global preview provides the CSS, theme toolbar, TooltipProvider, padded layout, and autodocs.

Whenever adding a composite component, add stories for its default, meaningful interactive, and relevant empty/loading/error/disabled states. Use deterministic mock data, isolate state per story, and avoid network calls and global state leaks. Include controls for simple variants; render compound components with their required context. The Design Tokens story must stay aligned with `src/index.css`.

After UI changes run:

```sh
npm run lint
npm run build
npm run build-storybook
npm run test:e2e
```

The browser suite requires the production builds first and Chromium (`npx playwright install chromium` on a new machine). It checks installed-component story coverage, every story in both themes, docs rendering, and the working app interactions. Keep the registry inventory in `src/lib/component-catalog.ts` and story coverage current when adding components.
