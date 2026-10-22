# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # postinstall runs `nuxt prepare` (regenerates .nuxt types)
npm run dev        # dev server on http://localhost:3000
npm run build      # SSR production build (.output/)
npm run generate   # static prerender
npm run preview    # serve the production build locally
```

There is no test runner, linter, or formatter configured. TypeScript is non-strict (`typescript: { strict: false }` in `nuxt.config.ts`), so type errors are not enforced at build time.

## What this is

Single-page marketing site (Nuxt 3 + Nuxt UI v2 + Tailwind) for **R2J Contabilidade**, a Brazilian accounting firm. All user-facing copy is Portuguese (`pt-br`); component and content-key names are Portuguese too (`QueroFalar`, `SobreNos`, `Segmentos`, `Clientes`). Keep new copy and naming in Portuguese to match.

## Architecture

**Content-driven, one page.** `pages/index.vue` is the only route. It loads `content/index.yml` via `queryContent('/').findOne()` and spreads each top-level YAML key into a section component with `v-bind`:

```
content/index.yml  →  page.segmentos  →  <Segmentos v-bind="page.segmentos" />
```

So editing site text, client logos, or the segment cards means editing `content/index.yml` — not the components. YAML keys must match each component's props (`title`, `description`, `items`, `link`, …). `content/index.yml` also carries presentation data for some sections (`bg` colors and a `$class` string per segment card).

`app.vue` holds the global chrome outside the router: `TopBar` → `Header` → `Main` (wrapping `<NuxtPage />`) → `Footer`, plus the fixed WhatsApp button.

**Two component tiers.** `components/base/` and `components/landing/` are generic, slot-heavy primitives lifted from the Nuxt UI Pro landing template (`BaseHeader`, `BaseFooter`, `LandingSection`, `LandingHero`, `LandingGrid`). Top-level `components/*.vue` are the R2J-specific sections that fill those primitives with content. Nuxt auto-import prefixes directory names, so `components/base/Header.vue` is `<BaseHeader>` and `components/landing/Section.vue` is `<LandingSection>`.

**The `useUI` styling convention.** Every component here follows the same shape:

```ts
const config = { wrapper: '…', title: '…' }   // default Tailwind classes, nested object
defineOptions({ inheritAttrs: false })
const props = withDefaults(defineProps<{ ui?: Partial<typeof config>, class?: any }>(), …)
const { ui, attrs } = useUI('landing.section', toRef(props, 'ui'), config, toRef(props, 'class'), true)
```

Then the template uses `:class="ui.someKey"` and `v-bind="attrs"`. `useUI` (auto-imported from `@nuxt/ui`) merges, in order: the `config` default → the matching key path in `app.config.ts`'s `ui` object → the `ui` prop passed by the parent. So a global restyle goes in `app.config.ts`; a one-off override goes in the parent's `:ui` prop. Match this pattern when adding components — don't hardcode classes in the template.

`plugins/presets.ts` exposes `app.config.ts`'s `ui.presets` as `$ui`, used as `v-bind="$ui.button.secondary"` for reusable button variants. `plugins/variables.ts` injects `ui.variables` (background/foreground/`--header-height`) as CSS custom properties into `<head>` for both light and dark modes; Tailwind's `background`/`foreground` colors read those vars.

**Images.** Photos and client logos come from Cloudinary (`cloudName: dabaxwgki`) via `<CldImage>`, with public IDs like `r2j/clientes/…` stored in the YAML and Cloudinary transform strings in the `transform` field (passed as `:rawTransformations`). SVG icons and a few PNGs live in `public/img/` and are referenced by plain path. Both approaches are in use — follow whichever the surrounding section uses.

**Navigation.** `components/Header.vue` defines the nav links inline as `#hash` anchors (`#sobre-nos`, `#segmentos`, …) matched by `id` attributes on `<LandingSection>` in `pages/index.vue`. Adding a section means adding both. `useScrollspy` + `useUIState` (a `createSharedComposable`) drive active-link highlighting and the mobile dialog panel.

## Analytics

Three tracking integrations are configured with hardcoded IDs in `nuxt.config.ts`: Google Tag Manager (`GTM-MJF68P69`, via `@zadigetvoltaire/nuxt-gtm`, currently `debug: true`), Meta Pixel (`2302865363217512`, via `nuxt3-meta-pixel`), and `nuxt-gtag` is installed but not configured. There is no `.env` — these live in source.
