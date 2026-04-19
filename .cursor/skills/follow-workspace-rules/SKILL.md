---
name: follow-workspace-rules
description: Aligns code with this repository's Cursor rules in `.cursor/rules/` (layered architecture, naming, styling, performance, anti-patterns). Use when implementing or refactoring features, reviewing diffs, fixing lint or convention issues, or when the user asks to follow project standards, workspace rules, or AGENTS.md.
---

# Follow workspace rules

## Source of truth

Project conventions live in **`.cursor/rules/*.mdc`** (always applied in Cursor). Do not rely on memory alone—**open and follow the relevant `.mdc` file** when the task touches that area.

Also heed **`AGENTS.md`** (Next.js: consult `node_modules/next/dist/docs/` before using framework APIs you are unsure about).

## Rule map (what to read when)

| File                                                 | Use when                                                                                                                 |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`architecture.mdc`](../../rules/architecture.mdc)   | Deciding where new code belongs; import direction (`App → Features → Lib/Components`); feature public API via `index.ts` |
| [`layers.mdc`](../../rules/layers.mdc)               | Placing or reviewing code under `src/app/`, `src/features/`, `src/components/`, or `src/lib/`                            |
| [`naming.mdc`](../../rules/naming.mdc)               | New files, folders, hooks, services, tests                                                                               |
| [`styling.mdc`](../../rules/styling.mdc)             | Tailwind/`cn()`, `NavLink`, design tokens, `globals.css` utilities                                                       |
| [`anti-patterns.mdc`](../../rules/anti-patterns.mdc) | Quick pass for common violations (duplicate link styling, wrong layer imports, hook misuse, etc.)                        |
| [`performance.mdc`](../../rules/performance.mdc)     | State placement, lists, memoization, context providers                                                                   |

Repo path (for search/open): `.cursor/rules/<file>`.

## Workflow

1. **Classify the change**: Which layers and files are involved (`app`, `features`, `components`, `lib`)?
2. **Pull in rules**: At minimum, skim `architecture.mdc` + `layers.mdc` for anything that adds imports or new modules. Add `styling.mdc` for UI; `naming.mdc` for new files; `performance.mdc` when changing state, context, or large lists.
3. **Implement** so that:
   - Dependency flow matches the architecture table (no upward imports; no feature-to-feature imports; `lib` stays free of feature/component imports).
   - UI matches styling rules (`NavLink` for links, `cn()` for conditional classes, tokens from `tailwind.config.js` / globals—not ad-hoc patterns that break safelisting).
4. **Before finishing**: Re-read `anti-patterns.mdc` for a fast sanity check on the touched surface.

## Conflict resolution

If a suggestion conflicts with **`.cursor/rules`**, the rules win. If two rules seem to conflict, prefer **architecture / layers** for structure, then styling and anti-patterns for UI and React habits.

## Relation to other project skills

- **[`ui-design-review`](../ui-design-review/SKILL.md)** focuses on visual quality and hierarchy; this skill covers **repository-wide** conventions (layers, naming, Tailwind/NavLink rules, performance guardrails). Use both when polishing UI that must also match project standards.
