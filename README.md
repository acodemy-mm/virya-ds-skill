# Virya Design System — skill pack

Public Cursor skill for KBZ Bank / Virya / mBanking UI. Auto-applies when building Virya screens, components, or the design-system canvas.

The interactive canvas renders in Cursor (Open Canvas). Cloning this repo does not open a website — copy `canvases/virya-design-system.canvas.tsx` into a Cursor project and use **Open Canvas**.

## Contents

- `SKILL.md` — tokens, implementation rules, canvas open instructions
- `pages.md` — Login, Listing, Details, popups
- `components.md` — component usage and behavior
- `canvases/virya-design-system.canvas.tsx` — live reference canvas (Open Canvas in Cursor)

## Install

This pack lives in the repo. The agent copies it to:

`~/.cursor/skills/virya-design-system/`

`SKILL.md` must sit at that skill root. Do **not** install into `~/.cursor/skills-cursor/` (reserved).

After install, the skill is available in every Cursor project on this machine.

## Open the canvas

1. Press `Cmd+P`
2. Type `virya-design-system.canvas.tsx`
3. Press Enter
4. Click **Open Canvas** in the editor toolbar

If the current project has no copy, copy `canvases/virya-design-system.canvas.tsx` into `~/.cursor/projects/<workspace>/canvases/`.

Do **not** open the `.canvas.tsx` path as a browser URL (`https://users/...` fails with `ERR_NAME_NOT_RESOLVED`).

## Updated

Includes Snackbar (top-right, 380px, variant icons), Upload, Login / Listing / Details patterns, and current brand tokens.
