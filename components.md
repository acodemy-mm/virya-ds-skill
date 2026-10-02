# Virya components

Read the matching section before implementing a control. Required field labels append `*` in secondary `#b51f26`.

## Button

**Use when:** trigger an action with clear priority (primary, secondary, destructive). Icon-only in toolbars.

Buttons communicate actions — not navigation labels. Use links or tabs for navigation.

**Rules:** one fill/accent primary per view; stroke or text for secondary; disabled blocks interaction; hover feedback; icon-only needs `aria-label` or tooltip; accent `#b51f26` is brand highlight **or** destructive — not both in one group.

**Examples:** `Fill: Save changes` · `Stroke: Cancel` · `Text: Learn more` · `Accent: Delete account`

## Breadcrumbs

**Use when:** multi-level nav, list → details → edit, parent–child modules.

**Rules:** below page title (not in app header); hierarchy not history; last item not clickable; previous levels clickable; update from location.

**Examples:** `Home / Accounts / Customer accounts` · `Home / To Do List / Task Details`

## Checkbox

**Use when:** multiple independent options (at least two).

**Structure:** control + required label + optional description.

**Rules:** one, multiple, or all; each item independent; concise labels; disabled clearly non-interactive.

**Examples:** `☑ Email notifications` · `☐ SMS alerts` · `☐ Marketing updates (disabled)`

## Radio button

**Use when:** exactly one option from a small mutually exclusive set; all options visible.

Prefer dropdown for many options or limited space.

**Rules:** one selected per group; selected uses primary ring + inner dot; entire row clickable; disabled cannot be selected.

**Examples:** `○ Free  ● Pro  ○ Enterprise`

## Dropdown

**Use when:** one value from 5+ items; space limited. Use radio for 2–4 visible options; search when the list is very long.

**Rules:** closed shows value or placeholder; open highlights active item with primary soft fill; select closes and updates; keyboard + focus required in product UI.

**Examples:** `Region: APAC ▼` · `Status: Active ▼`

## Multi-select dropdown

**Use when:** multiple values from a long searchable list (departments, roles, tags, locations, filters).

**Rules:** search inside the menu; selected items as chips in the field; remove items individually.

**Examples:** `Departments: HR × Finance × Engineering`

## Textfield

**Use when:** collect single-line user text. Always pair with a visible label — never placeholder alone.

**States:** default · focus (primary ring) · error (red border + helper) · disabled.

**Rules:** `*` on mandatory labels in `#b51f26`; inline validation next to the field; autocomplete for common fields; brief placeholder.

**Examples:** NRC, passport, masked bank account `**** **** 5678 ****`, address cascade (Region → Township), date/time.

## Textarea

**Use when:** multi-line notes, description, comments.

Same label / helper / error as textfield. Minimum 4 rows empty; vertical resize unless layout is fixed; character limits in helper when applicable.

**Examples:** `Notes: Add deployment notes…` · `Description is required`

## Search input

**Use when:** filter or find in a list/table; bank-account search with privacy masking.

**Rules:** leading search icon; clear (×) when valued; focus uses primary border + soft ring; simple search accepts any text.

**Bank account search:** digits only; results show first 6 + masked center (`••••`) + last 4; never show the full number.

**Examples:** `Search employees…` · `123456 •••• 3456 — Savings account`

## Upload

Two layouts — do not mix both for the same file at once; switch when a file is selected.

**Large Drop Zone** — empty/first selection: PDF icon, prompt, Choose File (primary fill) or uploading card, helper (types/size). While uploading, replace Choose File with name + progress.

**Small Upload Bar** — one file: PDF icon · name · size · trailing action (upload/retry · success check · cancel). Success uses success token; cancel uses secondary/critical.

**Examples:** `Drop PDF here or Choose File · PDF up to 10 MB` · `KYC_form.pdf · 1.2 MB · ✓`

## Tooltip

**Use when:** icon-only label, abbreviation, or a short hint. Do not put essential information only in a tooltip.

**Rules:** one short line; hover and keyboard focus; dark background `#1a1f2a` with white text; no interactive or long content.

**Examples:** `Save changes` · `Export CSV`

## Snackbar

**Use when:** confirm a completed action or show a dismissible non-blocking status.

**Rules:** top-right of the product frame (16px inset); **380px** wide; one at a time; auto-dismiss + close icon; leading icon matches variant (success / error / info / warning); message `#424242`; close `#666666`.

**Examples:** `Invite sent successfully` · `Upload failed. Please try again.` · `Draft saved` · `Session expires in 5 minutes`

## Popup

### Confirmation

**Use when:** destructive/irreversible action, two outcomes, or Approve/Reject.

Layout: Title + Close → Divider → Description → (Remarks if Approve/Reject) → (Delete Captcha if delete) → Secondary + Primary (right, secondary first).

**Rules:** center of frame; block background; Approve/Reject always require Remarks and stay disabled until filled; delete requires typing `Delete Confirm`.

**Examples:** `Cancel · Delete` · `Reject · Approve` · `No · Yes`

### Single-action alert

**Use when:** acknowledge only (success, info, warning, error). Layout: Close → Alert icon → Title → Description → one button. Center icon, title, and description.

**Examples:** `Payment successful · OK` · `Connection failed · Retry`

## Pagination

**Use when:** data is split across pages.

**Rules:** current page uses primary fill; others outlined or text; disable Prev on first / Next on last.

On **Listing / Details** footers: `← Prev` · up to 5 page steps · `Next →`; do **not** show “Page X of Y”. Standalone pagination pages may show “Page X of Y” when it helps orientation.

**Examples:** `1  2  [3]  4  5` · `← Previous · Next →`

## Stepper

**Use when:** ordered linear flow (wizard, checkout, onboarding). Use tabs for peer sections.

**Rules:** completed = primary fill + tick; current = primary fill + number; future = muted outline + number; return to completed steps if the flow allows.

**Examples:** `① Details — ② Review — ③ Payment — ④ Done`

## Tab

**Use when:** peer sections on the same page (Overview, Activity, Settings). Breadcrumbs for hierarchy across pages.

**Rules:** active = primary underline + semibold; inactive = secondary text; one panel visible; preserve tab in URL/state when useful.

**Examples:** `Overview | Activity | Settings`

## Chip / Tag

**Use when:** compact status, category, or removable filter — not primary navigation.

**Rules:** status chips use a leading semantic dot; filled `#002c76`/`#fdfdfd`; soft `#e1ecfe`/`#002c76`; outline primary border/text; removable chips have a close icon that updates filter state.

**Examples:** `● Success · ● Active` · `+ Design ×`

## Table

**Use when:** structured rows (accounts, transactions, users); compare, scan status, bulk select.

**Column types**

| Type | Align | Notes |
|------|-------|--------|
| Checkbox | center | Icon-only; no header text; selects the row |
| Text | left | Names, labels |
| Number | right | Counts, IDs |
| Amount | right | Currency; trend icons only when value changed |
| Status | center | Semantic chips |
| Action | center | Icon-only **or** text-only in a column — never mix |

**Rules:** header alignment matches data; primary row action is **View details** (text); Edit and Delete belong on Details; bulk actions apply to all selected rows.

**Examples:** `☐ · Customer name · 001042 · 850 MMK · ● Active · View details`
