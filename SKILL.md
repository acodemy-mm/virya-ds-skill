---
name: virya-design-system
description: >-
  Applies the Virya Design System (KBZ Bank) — light-mode brand tokens, Poppins
  typography, Login / Listing / Details page patterns, and component rules
  (Button, Table, Snackbar, Popup, Upload, and more). Use when building or
  reviewing UI for Virya, KBZ Bank, mBanking, or mobile banking; when the user
  mentions Virya DS, design tokens, listing pages, details pages, login, or
  extending the Virya design-system canvas.
---

# Virya Design System

KBZ Bank product UI. Light mode only. Prefer `VIRYA.*` tokens — do not hardcode one-off colors.

## When to apply

Any Virya / KBZ / mBanking screen, component, or DS canvas edit. Read [pages.md](pages.md) before Login, Listing, or Details. Read [components.md](components.md) before implementing a control.

## How to open the canvas

The live reference is `canvases/virya-design-system.canvas.tsx`. Resolve it in this order:

1. Current workspace `canvases/virya-design-system.canvas.tsx`
2. This skill’s `canvases/virya-design-system.canvas.tsx`

To open in Cursor (not a browser):

1. Press `Cmd+P`
2. Type `virya-design-system.canvas.tsx`
3. Press Enter
4. Click **Open Canvas** in the editor toolbar

Do **not** paste the file path into Chrome/Safari. Paths like `https://users/.../file.canvas.tsx` fail with `ERR_NAME_NOT_RESOLVED`.

If the current project needs Open Canvas and the file is missing, copy this skill’s canvas into `~/.cursor/projects/<workspace>/canvases/`. When mentioning the canvas in chat, link the resolved absolute path.

## Brand tokens

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#002c76` | CTAs, links, focus, active states |
| Primary hover | `#012460` | Hover on primary controls |
| Primary soft | `#e1ecfe` | Soft fills, active nav, chips |
| Primary minimal | `#f0f5ff` | Nav hover, light fill |
| Secondary | `#b51f26` | Accent, destructive, required `*` |
| Secondary hover | `#911218` | Hover on accent/destructive |
| Success | `#008a00` | Positive status |
| Warning | `#d28107` | Warning status |
| Critical | `#b30909` | Error / critical |
| Info | `#0b7ad5` | Informational |
| Typeface | Poppins | All UI copy (400 / 500 / 600) |
| Canvas | `#fafafa` | Page shell |
| Surface | `#fdfdfd` | Cards, inputs, panels |
| Border | `#e6e6e6` | Dividers, frames |
| Border strong | `#b0b0b0` | Input borders |
| Ink | `#1a1a1a` | Headings |
| Text primary | `#424242` | Default body, snackbar text |
| Text secondary | `#666666` | Secondary body |
| Text tertiary | `#b0b0b0` | Placeholder, disabled text |
| Disabled bg | `#f5f5f5` | Disabled controls |
| Radius sm / md / lg | `4` / `8` / `16` | Controls / cards / large panels |
| Chip radius | `9999` | Chips, avatars |

**Snackbar:** top-right of the product frame, 380px. Surfaces: success `#e8fde8`, error `#fef0f0`, info `#ecf6fe`, warning `#fef7eb`. Icon/border match the semantic color; close icon `#666666`.

**Popup:** overlay `#080808ea`; surface `#fdfdfd`; title ink; alert surface `#fef7eb`.

**Menu (`VIRYA.menu`):** width 248 / collapsed 56 / flyout 220. States: default transparent/`#666666` · hover `#f0f5ff` · selected `#f5f5f5`/`#666666` · active `#e1ecfe`/`#002c76` weight 600. Priority: active → selected → hover → default.

## Components & patterns

**Components:** Button, Breadcrumbs, Checkbox, Radio, Dropdown, Multi-select, Textfield, Tooltip, Snackbar, Popup, Pagination, Stepper, Tab, Textarea, Chip/Tag, Search, Upload, Table

**Page patterns:** Login, Listing, Details — see [pages.md](pages.md)

## Component documentation (canvas)

Every canvas page must follow: page header → usage → behavior → examples → live demo. Use `ComponentGuidelines` + `COMPONENT_SPECS`. When adding an item: `PageId`, `MENU`, `COMPONENT_SPECS`, page component, `PAGES` map.

## Implementation rules

1. **One primary action per view** — primary fill `#002c76` + text on fill `#fdfdfd`; secondary = stroke or text.
2. **Forms** — label above, helper below, error in critical/secondary with message text. Required `*` uses `#b51f26`.
3. **Focus** — primary border on focused inputs and interactive controls.
4. **Disabled** — `#f5f5f5` / `#b0b0b0`; never rely on color alone.
5. **Navigation** — breadcrumbs for hierarchy; tabs for peers; stepper for linear flows. Listing → View details keeps the same app chrome.
6. **Filters** — ≤2 beside search; >2 Advanced filter popup + Apply.
7. **Listing / Details shell** — shared header + left nav + frame footer; only content swaps.
8. **Login** — two-column brand + form; no product chrome.
9. **Feedback** — snackbar top-right, **380px**, leading icon matches variant; tooltips for short hints only.
10. **Spacing** — 4px base (4, 8, 12, 16, 24, 32…).
11. **Radius** — 8px buttons/inputs/cards; 9999px chips/avatars.
12. **Overlays** — scope to the demo/product frame; avoid full-viewport `fixed` overlays that trap pointer events.
13. **Approve / Reject** — required Remarks; disable until filled.
14. **Upload** — Large Drop Zone (PDF icon, prompt, Choose File or uploading card, helper); Small Upload Bar (PDF icon, name + size, upload / success / cancel).

## Canvas authoring

- Import only from `cursor/canvas`
- One `.canvas.tsx` file; embed data inline; no `fetch`
- After canvas edits, sync the skill `canvases/` copy and any project `canvases/` copy
- Prefer `position: absolute` overlays inside `position: relative` frames for Listing/Details popups
