# QWF Advisor Brain

The public home for the operational HOW-layer that complements the Quietly Operating Standard (QOS).

A reference implementation maintained by [Quietly Working Foundation](https://www.quietlyworking.org) (501(c)(3)). Public at [brain.quietlyos.org](https://brain.quietlyos.org).

---

## What this repo is

The `brain.quietlyos.org` landing page. A SvelteKit site deployed to Cloudflare Pages. Where [quietlyos.org](https://quietlyos.org) shows WHO QWF is (the schemas), brain.quietlyos.org shows HOW QWF decides... a collection of choices and the WHY behind each one, so decision-making behavior gets codified.

Phase 0 is the foundation surface: hero, how the three-verdict reinforcement loop works, the OS plus Brain split, the build map (6 lit / 21 planned), what comes next, and the open standard. No live ledger entries yet. The Brain runtime is Phase 2 work and ships in a future session.

## Stack

- SvelteKit (Svelte 5 runes) plus TypeScript
- `@sveltejs/adapter-cloudflare` to Cloudflare Pages
- Tailwind CSS with CSS-custom-property theme tokens (dark default)
- mdsvex for Markdown integration

## Local development

```bash
nvm use              # reads .nvmrc to Node 22.16.0
npm install
npm run dev          # http://localhost:5174
npm run build
npm run check        # svelte-check
npm run em-dash-scrub   # must pass before commit
```

---

## Anonymity discipline

Three sweeps run at build (SSR) time before the client receives any prose:

1. Supporter-anonymity sweep (organization names plus associated individuals)
2. Youth protection (no student names on any public surface, ever)
3. Em-dash scrub (substituted to ellipsis; sweep also runs as a build script over source files)

The TIG-personal toggle is hand-applied: section prose uses generic supporter-facing phrasing ("decision making member or team", "the human in the reinforcement loop"). Chaplain TIG appears only where the build attribution is structurally accurate, with a chaplaintig.com link.

See `memory/feedback_public_surfaces_no_supporter_names.md` and `005 Operations/Directives/qwf_youth_protection_standard.md` in the QWU backoffice for canonical rules.

---

## Build map source of truth

`BRAIN.development-map.json` in this repo is a copy of the canonical instance at `005 Operations/Standards/roadmap/BRAIN.development-map.json` in the QWU backoffice. Sync rule: when the canonical file changes, copy it into this repo and commit with a `brain:` prefix.

The schema both files validate against is `qos_development_map.v1.schema.json` (reused from QOS; differentiation via `identity.shortName: "BRAIN"`).

---

## Sister surface

[quietlyos.org](https://quietlyos.org) ... the OS public home. Footer links cross both ways.

---

## License

`[pending governance]` ... see the QOS governance license decision (currently in flight).
