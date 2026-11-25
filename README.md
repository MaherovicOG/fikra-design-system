# Fikra Design System

A React component library and interactive showcase with the supplied amber tweakcn theme, 63 official shadcn/ui modules, complete Storybook coverage, and a reusable agent skill.

## Run locally

Use Node.js 24 or newer and npm. The project lives directly at the repository root.

```sh
npm ci
npm run dev
```

In a second terminal, start Storybook:

```sh
npm run storybook
```

Vite normally opens at `http://localhost:5173`; Storybook runs at `http://localhost:6006`. Production links point to `/storybook/` on the same domain. Set `VITE_STORYBOOK_URL` before building only if Storybook is hosted elsewhere. Component cards link directly to their Storybook documentation.

The showcase has Overview, Components, Design Tokens, and Patterns views, a persisted theme switch, a searchable component catalog, project creation with local validation, and a table with search, sorting, selection, and pagination. Project data and submissions are demonstration state and are not persisted to a server.

## Stack and structure

- React 19, Vite 8, strict TypeScript 7, Tailwind CSS v4.
- shadcn/ui `base-nova` components built on Base UI, Lucide icons, and Recharts.
- Storybook 10 with autodocs, a light/dark toolbar, and accessibility inspection.
- Local Geist, Source Serif 4, and JetBrains Mono font assets; no external font requests.

```text
src/components/ui/           All 63 official registry modules
src/components/showcase/     Reusable, working composite examples
src/stories/                 Component stories and the token reference
src/index.css                Canonical tweakcn light/dark theme
src/lib/component-catalog.ts Showcase inventory
.storybook/                  React/Vite setup and global theme decorator
.agents/skills/design-system/SKILL.md
.claude/skills/design-system  Symlink to the canonical agent skill
scripts/                     Local Storybook static server for tests
tests/                       Playwright browser coverage
```

The CLI commands use current syntax: `shadcn init --defaults --yes`, `shadcn add --all --yes`, and `storybook init --type react --builder vite`. The installed official registry currently contains 63 UI modules, including field, toast, combobox, and messaging components. The current Base UI form pattern uses Field; it does not require the older React Hook Form wrapper. Use `render={<Button />}` for Base UI trigger composition.

The source theme's light/dark values and original radius mappings are preserved. Three larger radius steps are added for compatibility with the current registry. Font-face aliases match the supplied family names to bundled assets. Color literals belong in token definitions; feature code uses semantic utilities and CSS variables.

## Use the components

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export function ProjectCard({ selected = false }) {
  return (
    <Card className={cn(selected && 'border-primary')}>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">A place for your next idea.</p>
        <Button>Create project</Button>
      </CardContent>
    </Card>
  )
}
```

Mount `TooltipProvider` for tooltips and `Toaster` for toast feedback; see `src/main.tsx`. Import `src/index.css` once in the application entry point. Import components directly from their modules so unused components can be removed by the bundler. This is a source component library and showcase, not an npm-published package.

Add a matching story whenever introducing a new composite component. The token story shows all 32 semantic colors in both themes, typography families and scales, radii, shadows, spacing, and tracking.

## Verify and build

```sh
npm run lint
npm run format:check
npm run build
npm run build-storybook
npx playwright install chromium
npm run test:e2e
```

`build` checks the application, stories, and Storybook configuration under strict TypeScript, then writes the application to `dist/` and Storybook to `dist/storybook/`. Deploy `dist/` to publish both together. `build:app` builds only the React application; `build-storybook` writes a standalone Storybook to `storybook-static/`.

## Deploy to Vercel

The root `vercel.json` configures the Vite framework, `npm run build`, and the `dist` output directory. Both sites are included in every build:

- React showcase: `https://your-domain.vercel.app/`
- Storybook: `https://your-domain.vercel.app/storybook/`

Use the repository root as the Vercel project's Root Directory and Node.js 24. Commit and push these changes to the connected repository, then redeploy. No `VITE_STORYBOOK_URL` variable is needed for this setup; remove a previous localhost or external value if you want the bundled Storybook. Trailing slashes are enabled for directory URLs so Storybook's relative assets resolve correctly; files such as `iframe.html` keep their extensions.

To preview the complete deployment locally:

```sh
npm run build
npm run preview
```

Open `http://localhost:4173/` for the app or `http://localhost:4173/storybook/` for Storybook. The configuration uses [Vercel's build/output settings](https://vercel.com/docs/project-configuration/vercel-json) and [Storybook's static build](https://storybook.js.org/docs/sharing/publish-storybook).

The browser suite automatically starts production preview servers when they are not already running. It checks every story in both light and dark mode for render/console errors, verifies installed-module coverage and autodocs, and exercises desktop/mobile navigation, theme persistence, form validation, dialog focus, and table interactions. A Chromium installation is needed once per machine.

`npm run format` formats source and configuration files. The agent skill is maintained as prose at the canonical path above. Patched `glob` and `minimatch` overrides keep current transitive toolchain dependencies clear of the advisories present in the initial install; recheck them when upgrading Storybook or shadcn.

## Agent guidance

The project skill in [`.agents/skills/design-system/SKILL.md`](.agents/skills/design-system/SKILL.md) documents exact light/dark token values, intended use, typography, spacing, radii, shadows, composition, provider ownership, accessibility, and story conventions. Claude reads the same skill through the committed symlink.

Official references: [shadcn/ui Tailwind v4](https://ui.shadcn.com/docs/tailwind-v4), [Storybook React with Vite](https://storybook.js.org/docs/get-started/frameworks/react-vite), and [Storybook installation](https://storybook.js.org/docs/get-started/install).
