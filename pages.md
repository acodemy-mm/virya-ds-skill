# Virya page patterns

Read this when building Login, Listing, Details, or decision popups.

## Login page

Two-column layout; both sections vertically centered. On small screens, stack (brand above, form below).

**Left — Brand & Information**
- Logo, product image, product label, main heading, feature tags, description
- Primary navy brand panel (`#002c76`)

**Right — Login Form**
- Page title, subtitle, Login ID, Password (Show/Hide), Login button, Forgot Password, footer

**Rules**
- No app header / left nav on Login
- Login ID and Password use standard textfield patterns (label above, helper/error below)
- Login is the only primary action (fill); disable until Login ID + Password are filled
- Forgot Password is a text link, not a second primary button
- Footer stays secondary (support, copyright, version)

**Examples:** `Left: KBZ Bank · Virya · Secure banking workspace` · `Right: Welcome back · Sign in to continue · Login ID · Password · [Login] · Forgot password?`

## Listing page

Shared product shell: **app header + left nav + content + frame footer pagination**.

**Layout (top → bottom)**
1. App header — Collapse (☰) · Logo(s) left · Notification · Profile right (no breadcrumbs in header)
2. Left nav — Menu → Sub Menu → Item; collapse to icon rail; flyouts when collapsed
3. Page title + primary actions (Create / Export / Bulk) on one row (title left, actions right)
4. Breadcrumbs under title
5. Filter section (search + filters)
6. Table list view (default 10 rows/page)
7. Footer pagination **inside the app frame** (full width under header + nav)

### Left nav

- Three levels: Menu → Sub Menu → Item. Do not put page-specific actions in the nav.
- Menu and Sub Menu each have a representative icon. Item level uses a **dot only** — never unique icons per item.
- Collapse toggles expanded nav ↔ icon-only rail (labels hidden).
- Collapsed rail shows Menu-level icons only. Hover a Menu icon → flyout of Sub Menus; hover a Sub Menu → second flyout of Items. Flyouts stay open while the pointer is over the icon or either panel.
- Styles use `VIRYA.menu` — do not hardcode colors or spacing.

| State | Meaning | Style |
|-------|---------|--------|
| default | Idle | Transparent / `#666666` |
| hover | Pointer over | `#f0f5ff` / navy accents |
| selected | Parent open with active child | `#f5f5f5` / `#666666` |
| active | Current route | `#e1ecfe` / `#002c76` weight 600 |

Priority: active → selected → hover → default

### Filtering

- **1–2 filters** — place filter controls **beside** the search bar on the same row
- **More than 2 filters** — show **Advanced filter** beside search; click opens a sample filter form popup (Customer, Account, Amount, Created date)
- Apply updates the list; Cancel closes without applying drafts; Reset clears the form
- Applied advanced filters show as removable chips under the search row
- Overlay must be scoped to the listing frame (`position: absolute` inside a relative wrapper) — never `position: fixed` over the whole canvas (blocks clicks)

### Footer pagination

- One row inside the frame: Rows per page + count left · `← Prev` · up to **5** page steps · `Next →` right
- Do not show “Page X of Y”
- Keep pagination inside the frame (`width: fit-content` clusters — Canvas `Row` defaults to `width: 100%` and will overflow)

### Table actions

- Primary row action: **View details** (text-only)
- Edit and Delete live on the Details page — not in the table row
- View details opens Details **inside the same app shell**

## Details page

Same app shell as Listing (do **not** remove header or left nav). Only the content area changes.

**Layout**
1. App shell (header + left nav)
2. Page header — title + breadcrumbs
3. Information sections (Card, Member, Contact, Additional, …) with clear section titles
4. Section actions beside section titles when relevant (e.g. Member — Edit)
5. System Information — Created By / Created Date & Time / Updated By / Updated Date & Time
6. Destructive Actions — Delete section at the bottom
7. Footer pagination — navigate between records (same control as Listing)

**Delete**
- Opens confirmation popup with required **Delete Captcha**
- User must type `Delete Confirm` before Delete is enabled
- Cancel / close dismiss without deleting

## Popup & decisions

### Confirmation popup

Layout: Title + Close → Divider → Description → optional fields → Secondary + Primary (right-aligned, secondary first).

- Overlay + title + close · message · secondary + primary actions
- Destructive primary uses secondary/red fill
- Scope overlay to the product frame (`position: absolute` inside a relative wrapper)

### Approve / Reject

- Whenever Approve or Reject is required, always include a required **Remarks** textarea
- Disable decision actions until remarks are entered

### Delete

- Use Delete Captcha: type `Delete Confirm` to enable Delete

### Single-action alert

Layout: Close → Alert icon → Title → Description → one action (OK / Got it / Continue). Centered icon, title, and description. No cancel/alternative.

## Breadcrumbs

**Use when:** multi-level navigation, list → details → edit, parent–child modules.

**Rules:** under page title (not in app header); hierarchy not history; last item not clickable; previous levels clickable; update from location.

**Examples:** `Home / Accounts / Customer accounts` · `Home / Accounts / Customer accounts / Kaung Myat Hein`
