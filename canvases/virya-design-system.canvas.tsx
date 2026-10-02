import {
  Code,
  type CSSProperties,
  canvasPaletteLight,
  canvasTokensLight,
  Grid,
  H1,
  H2,
  H3,
  Row,
  Stack,
  Table,
  Text,
  type TextProps,
  mergeStyle,
  useCanvasState,
} from "cursor/canvas";

/** Virya design tokens — sourced from viryavariable.json (KBZ Bank) */
const VIRYA = {
  brand: "kBZBank",
  primary: "#002c76",
  primaryHover: "#012460",
  primarySoft: "#e1ecfe",
  primaryMinimal: "#f0f5ff",
  primaryLight: "#fafcff",
  secondary: "#b51f26",
  secondaryHover: "#911218",
  secondarySoft: "#f9d2d4",
  success: "#008a00",
  warning: "#d28107",
  critical: "#b30909",
  info: "#0b7ad5",
  canvas: "#fafafa",
  surface: "#fdfdfd",
  border: "#e6e6e6",
  borderStrong: "#b0b0b0",
  textPrimary: "#424242",
  textSecondary: "#666666",
  textTertiary: "#b0b0b0",
  textPlaceholder: "#b0b0b0",
  disabledBg: "#f5f5f5",
  disabledText: "#b0b0b0",
  ink: "#1a1a1a",
  fontFamily: '"Poppins", system-ui, sans-serif',
  radiusSm: 4,
  radiusMd: 8,
  radiusLg: 16,
  spacingXs: 4,
  spacingSm: 8,
  spacingMd: 12,
  spacingLg: 16,
  spacingXl: 24,
  btn: {
    primaryEnable: "#002c76",
    primaryHover: "#012460",
    secondaryEnable: "#b51f26",
    secondaryHover: "#911218",
    accentBg: "#e1ecfe",
    accentText: "#002c76",
    disabledBg: "#f5f5f5",
    disabledText: "#b0b0b0",
    textOnFill: "#fdfdfd",
    neutralBg: "#e6e6e6",
    neutralBgHover: "#b0b0b0",
    neutralBorder: "#b0b0b0",
    neutralText: "#949494",
    neutralTextHover: "#666666",
  },
  field: {
    surface: "#fdfdfd",
    border: "#b0b0b0",
    focus: "#002c76",
    error: "#b30909",
    disabled: "#f5f5f5",
    text: "#666666",
    errorText: "#b30909",
  },
  breadcrumbs: {
    default: "#666666",
    active: "#002c76",
  },
  snackbar: {
    text: "#424242",
    iconDefault: "#666666",
    success: { surface: "#e8fde8", border: "#008a00", icon: "#008a00" },
    error: { surface: "#fef0f0", border: "#b30909", icon: "#b30909" },
    info: { surface: "#ecf6fe", border: "#0b7ad5", icon: "#0b7ad5" },
    warning: { surface: "#fef7eb", border: "#d28107", icon: "#d28107" },
  },
  popup: {
    surface: "#fdfdfd",
    text: "#666666",
    title: "#1a1a1a",
    border: "#e6e6e6",
    overlay: "#080808ea",
    alertIcon: "#d28107",
    alertSurface: "#fef7eb",
  },
  stepper: {
    surfaceActive: "#002c76",
    surfaceDefault: "#e6e6e6",
    textActive: "#fdfdfd",
    textDefault: "#b0b0b0",
    iconComplete: "#fdfdfd",
  },
  chip: {
    radius: 9999,
    fontSize: 12,
    fontWeight: 500,
    success: { surface: "#e8fde8", text: "#008a00", icon: "#008a00" },
    error: { surface: "#fef0f0", text: "#b30909", icon: "#b30909" },
    info: { surface: "#ecf6fe", text: "#0b7ad5", icon: "#0b7ad5" },
    warning: { surface: "#fef7eb", text: "#d28107", icon: "#d28107" },
    neutral: { surface: "#f5f5f5", text: "#424242", icon: "#424242" },
    filled: { surface: "#002c76", text: "#fdfdfd", icon: "#fdfdfd" },
    soft: { surface: "#e1ecfe", text: "#002c76", icon: "#002c76" },
    outline: { border: "#002c76", text: "#002c76", icon: "#002c76" },
  },
  table: {
    headerBg: "#f5f5f5",
    headerText: "#424242",
    cellText: "#666666",
    border: "#e6e6e6",
    rowHover: "#fafafa",
  },
  /** Side menu — component variable tokens (shell + item states) */
  menu: {
    width: 248,
    widthCollapsed: 56,
    flyoutWidth: 220,
    surface: "#fdfdfd",
    border: "#e6e6e6",
    paddingX: 10,
    paddingXCollapsed: 8,
    paddingTop: 12,
    paddingBottom: 16,
    sectionGap: 8,
    branchGap: 2,
    rowGap: 8,
    iconSize: 16,
    indentStep: 14,
    basePadLeft: 10,
    padYMenu: 8,
    padYItem: 6,
    padX: 10,
    radius: 8,
    fontSize: 13,
    fontSizeItem: 12,
    fontSizeCaption: 11,
    fontWeight: 500,
    fontWeightStrong: 600,
    caption: "#b0b0b0",
    captionLetterSpacing: "0.04em",
    dotSize: 6,
    /** Idle — not in path */
    default: { bg: "transparent", text: "#666666", icon: "#666666" },
    /** Pointer over */
    hover: { bg: "#f0f5ff", text: "#424242", icon: "#002c76" },
    /**
     * Selected — parent Menu / Sub Menu open with an active child underneath.
     * Soft light gray tint · neutral gray text & icons
     */
    selected: { bg: "#f5f5f5", text: "#666666", icon: "#666666" },
    /**
     * Active — currently active item when its page/route is active.
     * Light blue tint container · dark navy / primary text & icons · bold/medium weight
     */
    active: { bg: "#e1ecfe", text: "#002c76", icon: "#002c76" },
  },
} as const;

const BRAND = {
  primary: VIRYA.primary,
  primaryHover: VIRYA.primaryHover,
  secondary: VIRYA.secondary,
  secondaryHover: VIRYA.secondaryHover,
  primarySoft: VIRYA.primarySoft,
  secondarySoft: VIRYA.secondarySoft,
  success: VIRYA.success,
  warning: VIRYA.warning,
  border: VIRYA.border,
  muted: VIRYA.textSecondary,
  disabledBg: VIRYA.disabledBg,
  disabledText: VIRYA.disabledText,
  ink: VIRYA.ink,
  critical: VIRYA.critical,
  info: VIRYA.info,
  fontFamily: VIRYA.fontFamily,
} as const;

const PRIMARY_SCALE = [
  { step: "50", hex: "#fafcff", role: "Subtle tint" },
  { step: "100", hex: "#f0f5ff", role: "Light fill" },
  { step: "200", hex: "#e1ecfe", role: "Soft accent" },
  { step: "300", hex: "#92bafb", role: "Muted" },
  { step: "400", hex: "#1464eb", role: "Interactive" },
  { step: "500", hex: "#002c76", role: "Primary" },
  { step: "600", hex: "#012460", role: "Hover" },
  { step: "700", hex: "#011b47", role: "Active" },
  { step: "800", hex: "#03122b", role: "Emphasis" },
  { step: "900", hex: "#010913", role: "Ink" },
] as const;

const SECONDARY_SCALE = [
  { step: "50", hex: "#fefbfb", role: "Subtle tint" },
  { step: "100", hex: "#fdf2f3", role: "Light fill" },
  { step: "200", hex: "#f9d2d4", role: "Soft accent" },
  { step: "300", hex: "#f3a5a9", role: "Muted" },
  { step: "400", hex: "#c94a50", role: "Interactive" },
  { step: "500", hex: "#b51f26", role: "Primary" },
  { step: "600", hex: "#911218", role: "Hover" },
  { step: "700", hex: "#69070b", role: "Active" },
  { step: "800", hex: "#3d0104", role: "Emphasis" },
  { step: "900", hex: "#280103", role: "Ink" },
] as const;

const NEUTRAL_SCALE = [
  { step: "0", hex: "#fdfdfd", role: "Surface" },
  { step: "50", hex: "#fdfdfd", role: "Canvas" },
  { step: "100", hex: "#fafafa", role: "Minimal" },
  { step: "200", hex: "#f5f5f5", role: "Soft" },
  { step: "300", hex: "#e6e6e6", role: "Subtle" },
  { step: "400", hex: "#d6d6d6", role: "Muted" },
  { step: "500", hex: "#b0b0b0", role: "Base" },
  { step: "600", hex: "#949494", role: "Strong" },
  { step: "700", hex: "#666666", role: "Emphasis" },
  { step: "800", hex: "#424242", role: "Intense" },
  { step: "900", hex: "#1a1a1a", role: "Ink" },
] as const;

const SEMANTIC = [
  { name: "Success", hex: "#008a00", on: "#FFFFFF", usage: "Confirmations" },
  { name: "Warning", hex: "#d28107", on: "#FFFFFF", usage: "Caution" },
  { name: "Critical", hex: "#b30909", on: "#FFFFFF", usage: "Errors & validation" },
  { name: "Info", hex: "#0b7ad5", on: "#FFFFFF", usage: "Guidance" },
] as const;

const TYPE_SCALE = [
  { name: "Display 01", size: "56px", line: "91px", weight: "600", sample: "Brand moments" },
  { name: "Header H1", size: "40px", line: "65px", weight: "600", sample: "Page title" },
  { name: "Header H2", size: "36px", line: "58px", weight: "600", sample: "Section title" },
  { name: "Title 01", size: "18px", line: "29px", weight: "600", sample: "Subsection" },
  { name: "Body 02", size: "14px", line: "23px", weight: "400", sample: "Primary reading text for UI copy." },
  { name: "Label 02", size: "12px", line: "19px", weight: "400", sample: "Captions and helper text." },
  { name: "Label 03", size: "11px", line: "18px", weight: "500", sample: "FORM LABELS" },
] as const;

type PageId =
  | "overview"
  | "color"
  | "font"
  | "button"
  | "breadcrumbs"
  | "checkbox"
  | "radio"
  | "dropdown"
  | "multiselect"
  | "textfield"
  | "tooltip"
  | "snackbar"
  | "popup"
  | "pagination"
  | "stepper"
  | "tab"
  | "textarea"
  | "chip"
  | "search"
  | "table"
  | "upload"
  | "listing"
  | "details"
  | "login";

const MENU: { group: string; items: { id: PageId; label: string }[] }[] = [
  {
    group: "Start",
    items: [{ id: "overview", label: "Overview" }],
  },
  {
    group: "Foundations",
    items: [
      { id: "color", label: "Color" },
      { id: "font", label: "Font" },
      { id: "login", label: "Login page" },
      { id: "listing", label: "Listing page" },
      { id: "details", label: "Details page" },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "button", label: "Button" },
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "checkbox", label: "Checkbox" },
      { id: "radio", label: "Radio button" },
      { id: "dropdown", label: "Dropdown" },
      { id: "multiselect", label: "Multi-select dropdown" },
      { id: "textfield", label: "Textfield" },
      { id: "tooltip", label: "Tooltips" },
      { id: "snackbar", label: "Snackbar" },
      { id: "popup", label: "Popup" },
      { id: "pagination", label: "Pagination" },
      { id: "stepper", label: "Stepper" },
      { id: "tab", label: "Tab" },
      { id: "textarea", label: "Textarea" },
      { id: "chip", label: "Chip / Tag" },
      { id: "search", label: "Search input" },
      { id: "upload", label: "Upload" },
      { id: "table", label: "Table" },
    ],
  },
];



const LIGHT = {
  kind: "light" as const,
  ...canvasTokensLight,
  tokens: canvasTokensLight,
  palette: canvasPaletteLight,
};

const LT = {
  primary: "#1a1a1a",
  secondary: "#666666",
  tertiary: "#b0b0b0",
  quaternary: "#d6d6d6",
};

const LIGHT_CANVAS = "#fafafa";
const LIGHT_SURFACE = "#fdfdfd";
const LIGHT_BORDER = "#e6e6e6";

function T(props: TextProps) {
  const tone = props.tone ?? "primary";
  return <Text {...props} style={mergeStyle(font({ color: LT[tone] }), props.style)} />;
}

function LH1(props: { children?: unknown; style?: CSSProperties }) {
  return <H1 style={mergeStyle(font({ color: LT.primary }), props.style)}>{props.children as never}</H1>;
}

function LH2(props: { children?: unknown; style?: CSSProperties }) {
  return <H2 style={mergeStyle(font({ color: LT.primary }), props.style)}>{props.children as never}</H2>;
}

function LH3(props: { children?: unknown; style?: CSSProperties }) {
  return <H3 style={mergeStyle(font({ color: LT.primary }), props.style)}>{props.children as never}</H3>;
}

function font(extra?: CSSProperties): CSSProperties {
  return mergeStyle({ fontFamily: BRAND.fontFamily }, extra);
}

function maskBankAccountSearchDisplay(account: string): string {
  const digits = account.replace(/\D/g, "");
  if (digits.length <= 10) return digits;
  return `${digits.slice(0, 6)} •••• ${digits.slice(-4)}`;
}

function SearchFieldIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SearchInput(props: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  mono?: boolean;
  inputMode?: "text" | "numeric";
  maxLength?: number;
  style?: CSSProperties;
}) {
  const focused = props.value.length > 0;
  return (
    <div style={mergeStyle({ maxWidth: 360, position: "relative", minWidth: 160 }, props.style)}>
      <div
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          color: BRAND.muted,
          display: "flex",
        }}
      >
        <SearchFieldIcon />
      </div>
      <input
        value={props.value}
        onChange={(e: { target: { value: string } }) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        maxLength={props.maxLength}
        style={font({
          width: "100%",
          boxSizing: "border-box",
          padding: "8px 36px",
          borderRadius: VIRYA.radiusMd,
          border: `1px solid ${focused ? VIRYA.field.focus : VIRYA.field.border}`,
          background: VIRYA.field.surface,
          color: VIRYA.field.text,
          fontSize: 14,
          outline: "none",
          letterSpacing: props.mono ? "0.08em" : undefined,
          fontFamily: props.mono ? "monospace" : undefined,
          boxShadow: focused ? `0 0 0 3px ${VIRYA.primaryMinimal}` : undefined,
        })}
      />
      {props.value ? (
        <div
          onClick={() => props.onChange("")}
          style={font({
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            width: 18,
            height: 18,
            borderRadius: 9999,
            background: LIGHT.fill.tertiary,
            color: LT.secondary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            cursor: "pointer",
          })}
        >
          ×
        </div>
      ) : null}
    </div>
  );
}

const SAMPLE_BANK_ACCOUNTS = [
  { number: "1234567890123456", label: "Savings — Kaung Myat Hein" },
  { number: "9876543210987654", label: "Current — KBZ Business" },
  { number: "1234560012345678", label: "Payroll — Acme Corp" },
  { number: "4567891234567890", label: "Fixed deposit — Retail" },
] as const;

function FieldLabel(props: { children: string; required?: boolean }) {
  return (
    <Row gap={2} style={{ alignItems: "baseline" }}>
      <T size="small" weight="semibold" style={font()}>
        {props.children}
      </T>
      {props.required ? (
        <T size="small" weight="semibold" style={font({ color: BRAND.secondary })}>
          *
        </T>
      ) : null}
    </Row>
  );
}

function Frame(props: { label?: string; children?: never }) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: `1px solid ${LIGHT_BORDER}`,
        background: LIGHT_SURFACE,
        padding: 16,
      }}
    >
      {props.label ? (
        <T size="small" tone="tertiary" style={font({ marginBottom: 12 })}>
          {props.label}
        </T>
      ) : null}
      {(props as { children?: unknown }).children as never}
    </div>
  );
}

function Demo(props: { label?: string; children?: unknown }) {
  return (
    <div
      style={{
        borderRadius: 8,
        border: `1px solid ${LIGHT_BORDER}`,
        background: LIGHT_SURFACE,
        padding: 16,
      }}
    >
      {props.label ? (
        <T size="small" tone="tertiary" style={font({ marginBottom: 12 })}>
          {props.label}
        </T>
      ) : null}
      {props.children as never}
    </div>
  );
}

function SideNav(props: { active: PageId; onSelect: (id: PageId) => void }) {
  return (
    <div
      style={{
        width: 208,
        flexShrink: 0,
        borderRadius: 8,
        border: `1px solid ${LIGHT_BORDER}`,
        background: LIGHT_SURFACE,
        padding: "16px 12px",
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        maxHeight: "calc(100vh - 32px)",
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <Stack gap={16}>
        <Stack gap={2}>
          <T weight="semibold" style={font({ color: BRAND.primary, fontSize: 15 })}>
            Virya
          </T>
          <T size="small" tone="tertiary" style={font()}>
            Design system
          </T>
        </Stack>
        {MENU.map((section) => (
          <div key={section.group}>
            <Stack gap={4}>
              <T
                size="small"
                weight="semibold"
                style={font({
                  color: LT.tertiary,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontSize: 10,
                  paddingLeft: 8,
                })}
              >
                {section.group}
              </T>
              {section.items.map((item) => {
                const active = item.id === props.active;
                return (
                  <div
                    key={item.id}
                    onClick={() => props.onSelect(item.id)}
                    style={font({
                      padding: "8px 10px",
                      borderRadius: 6,
                      fontSize: 13,
                      fontWeight: active ? 600 : 500,
                      cursor: "pointer",
                      background: active ? BRAND.primary : "transparent",
                      color: active ? "#FFFFFF" : LT.secondary,
                    })}
                  >
                    {item.label}
                  </div>
                );
              })}
            </Stack>
          </div>
        ))}
      </Stack>
    </div>
  );
}

function PageHeader(props: { eyebrow: string; title: string; description: string }) {
  return (
    <Stack gap={8}>
      <T
        size="small"
        weight="semibold"
        style={font({
          color: BRAND.primary,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        })}
      >
        {props.eyebrow}
      </T>
      <LH1 style={font()}>{props.title}</LH1>
      <T tone="secondary" style={font({ maxWidth: 560 })}>
        {props.description}
      </T>
    </Stack>
  );
}

/* —— Overview —— */
function OverviewPage(props: { onSelect: (id: PageId) => void }) {
  const cards: { id: PageId; title: string; summary: string; accent: string }[] = [
    { id: "login", title: "Login page", summary: "Two-column login — brand panel + form", accent: BRAND.primary },
    { id: "listing", title: "Listing page", summary: "Full list layout — header, nav, search, table, pagination", accent: BRAND.secondary },
    { id: "details", title: "Details page", summary: "Same app shell as listing — header, nav, record sections, delete", accent: BRAND.primary },
    { id: "upload", title: "Upload", summary: "Large drop zone and small upload bar for PDF files", accent: BRAND.primary },
    { id: "table", title: "Table", summary: "Column types, alignment, row actions", accent: BRAND.primary },
    { id: "color", title: "Color", summary: "Brand, scales, semantic tokens", accent: BRAND.primary },
    { id: "font", title: "Font", summary: "Poppins scale, spacing, radius", accent: BRAND.primary },
    { id: "button", title: "Button", summary: "Fill, stroke, text, icon, accent states", accent: BRAND.secondary },
    { id: "textfield", title: "Textfield", summary: "Inputs, labels, validation states", accent: BRAND.secondary },
  ];
  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Virya Design System"
        title="Overview"
        description="Canonical Virya spec for future projects. Light mode · Poppins · follow Usage guidelines and Behavior rules on every component page."
      />
      <Row gap={0} style={{ borderRadius: 12, overflow: "hidden" }}>
        <div style={{ flex: 1, height: 8, background: BRAND.primary }} />
        <div style={{ flex: 1, height: 8, background: BRAND.secondary }} />
      </Row>
      <Demo label="How to use in future projects">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            Every component page follows the same documentation structure. Implement UI to match the live demo and obey the behavior rules.
          </T>
          <GuidelineList
            items={[
              "Usage guidelines — when to use the component",
              "Behavior rules — required interaction and layout rules",
              "Example structure — copy-ready patterns",
              "Live demo — visual reference with Virya tokens",
            ]}
          />
        </Stack>
      </Demo>
      <Grid columns={2} gap={12}>
        {cards.map((c) => (
          <div
            key={c.id}
            onClick={() => props.onSelect(c.id)}
            style={{
              borderRadius: 8,
              border: `1px solid ${LIGHT_BORDER}`,
              background: LIGHT_SURFACE,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <div style={{ height: 4, background: c.accent }} />
            <Stack gap={6} style={{ padding: 16 }}>
              <LH2 style={font()}>{c.title}</LH2>
              <T size="small" tone="secondary" style={font()}>
                {c.summary}
              </T>
              <T size="small" weight="semibold" style={font({ color: BRAND.primary })}>
                Open in menu →
              </T>
            </Stack>
          </div>
        ))}
      </Grid>
      <T size="small" tone="tertiary" style={font()}>
        Primary {VIRYA.primary} · Secondary {VIRYA.secondary} · {VIRYA.brand} tokens
      </T>
    </Stack>
  );
}

/* —— Color —— */
function ColorSwatch(props: { hex: string; label: string; sublabel?: string }) {
  return (
    <Stack gap={6}>
      <div
        style={{
          height: 64,
          borderRadius: 8,
          background: props.hex,
          border: `1px solid ${LIGHT_BORDER}`,
        }}
      />
      <T weight="semibold" size="small" style={font()}>
        {props.label}
      </T>
      <T size="small" tone="secondary" style={font()}>
        {props.hex}
      </T>
      {props.sublabel ? (
        <T size="small" tone="tertiary" style={font()}>
          {props.sublabel}
        </T>
      ) : null}
    </Stack>
  );
}

function ScaleStrip(props: {
  title: string;
  scale: readonly { step: string; hex: string; role: string }[];
}) {
  return (
    <Stack gap={10}>
      <LH3 style={font()}>{props.title}</LH3>
      <Row gap={0} style={{ overflow: "hidden", borderRadius: 8, border: `1px solid ${LIGHT_BORDER}` }}>
        {props.scale.map((s) => (
          <div key={s.step} style={{ flex: 1, height: 48, background: s.hex, minWidth: 0 }} />
        ))}
      </Row>
      <Table
        headers={["Step", "Hex", "Role"]}
        rows={props.scale.map((s) => [
          <T size="small" weight="semibold" style={font()}>
            {s.step}
          </T>,
          <Code>{s.hex}</Code>,
          <T size="small" tone="secondary" style={font()}>
            {s.role}
          </T>,
        ])}
        striped
      />
    </Stack>
  );
}

function ColorPage() {
  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Foundations · Color"
        title="Color"
        description="Brand, scale, neutral, and semantic palettes from viryavariable.json (KBZ Bank)."
      />
      <Row gap={0} style={{ borderRadius: 12, overflow: "hidden" }}>
        <div style={{ flex: 1, background: BRAND.primary, padding: "16px" }}>
          <T size="small" style={font({ color: "rgba(255,255,255,0.7)" })}>
            Primary
          </T>
          <T weight="semibold" style={font({ color: "#FFF" })}>
            #002c76
          </T>
        </div>
        <div style={{ flex: 1, background: BRAND.secondary, padding: "16px" }}>
          <T size="small" style={font({ color: "rgba(255,255,255,0.7)" })}>
            Secondary
          </T>
          <T weight="semibold" style={font({ color: "#FFF" })}>
            #B51F26
          </T>
        </div>
      </Row>
      <Grid columns={4} gap={12}>
        <ColorSwatch hex={BRAND.primary} label="Primary" sublabel="CTAs · links" />
        <ColorSwatch hex={BRAND.secondary} label="Secondary" sublabel="Accent · alerts" />
        <ColorSwatch hex="#FFFFFF" label="On brand" sublabel="Text on brand" />
        <ColorSwatch hex={NEUTRAL_SCALE[8].hex} label="Ink" sublabel="Headings" />
      </Grid>
      <ScaleStrip title="Primary scale" scale={PRIMARY_SCALE} />
      <ScaleStrip title="Secondary scale" scale={SECONDARY_SCALE} />
      <ScaleStrip title="Neutral scale" scale={NEUTRAL_SCALE} />
      <LH2 style={font()}>Semantic</LH2>
      <Grid columns={4} gap={12}>
        {SEMANTIC.map((s) => (
          <div
            key={s.name}
            style={{
              borderRadius: 8,
              overflow: "hidden",
              border: `1px solid ${LIGHT_BORDER}`,
            }}
          >
            <div style={{ background: s.hex, padding: "16px 12px" }}>
              <T weight="semibold" style={font({ color: s.on })}>
                {s.name}
              </T>
              <T size="small" style={font({ color: s.on, opacity: 0.85 })}>
                {s.hex}
              </T>
            </div>
            <div style={{ padding: "8px 12px", background: LIGHT_SURFACE }}>
              <T size="small" tone="secondary" style={font()}>
                {s.usage}
              </T>
            </div>
          </div>
        ))}
      </Grid>
    </Stack>
  );
}

/* —— Font —— */
function FontPage() {
  const spacing = [4, 8, 12, 16, 24, 32, 40, 48];
  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Foundations · Font"
        title="Font"
        description="Poppins only. Weights 400 / 500 / 600. 4px spacing unit."
      />
      <Demo label="Live demo">
        <T size="small" tone="tertiary" style={font()}>
          Typeface
        </T>
        <div style={font({ fontSize: 36, fontWeight: 600, color: BRAND.primary, marginTop: 4 })}>
          Poppins
        </div>
        <T tone="secondary" style={font({ marginTop: 8 })}>
          Aa Bb Cc · 0123456789
        </T>
      </Demo>
      <Stack gap={0}>
        {TYPE_SCALE.map((t, i) => (
          <div
            key={t.name}
            style={{
              padding: "12px 0",
              borderBottom: i < TYPE_SCALE.length - 1 ? `1px solid ${LIGHT_BORDER}` : undefined,
            }}
          >
            <Row gap={16} align="center">
              <div style={{ width: 100, flexShrink: 0 }}>
                <T size="small" weight="semibold" style={font()}>
                  {t.name}
                </T>
                <T size="small" tone="tertiary" style={font()}>
                  {t.size} / {t.weight}
                </T>
              </div>
              <div
                style={font({
                  fontSize: t.size,
                  lineHeight: t.line,
                  fontWeight: Number(t.weight),
                })}
              >
                {t.sample}
              </div>
            </Row>
          </div>
        ))}
      </Stack>
      <LH2 style={font()}>Spacing</LH2>
      <Stack gap={8}>
        {spacing.map((px) => (
          <div key={String(px)}>
            <Row gap={12} align="center">
              <T size="small" style={font({ width: 64 })}>
                {px}px
              </T>
              <div
                style={{
                  height: 10,
                  width: px * 4,
                  background: BRAND.primary,
                  borderRadius: 2,
                  opacity: 0.85,
                }}
              />
            </Row>
          </div>
        ))}
      </Stack>
    </Stack>
  );
}

/* —— Button —— */
type BtnStyle = "fill" | "stroke" | "text" | "icon" | "accent";
type BtnState = "enable" | "hover" | "disable";

function PlusIcon(props: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 3.5V12.5M3.5 8H12.5"
        stroke={props.color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpecBtn(props: { style: BtnStyle; state: BtnState; label?: string }) {
  const disabled = props.state === "disable";
  const hover = props.state === "hover";
  const base: CSSProperties = font({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "20px",
    cursor: "default",
    boxSizing: "border-box",
  });
  let style: CSSProperties = {};
  let iconColor = "#FFFFFF";

  if (props.style === "fill") {
    style = disabled
      ? { padding: "8px 16px", background: VIRYA.btn.disabledBg, color: VIRYA.btn.disabledText, border: "1px solid transparent" }
      : hover
        ? { padding: "8px 16px", background: VIRYA.btn.primaryHover, color: VIRYA.btn.textOnFill, border: "1px solid transparent" }
        : { padding: "8px 16px", background: VIRYA.btn.primaryEnable, color: VIRYA.btn.textOnFill, border: "1px solid transparent" };
  }
  if (props.style === "stroke") {
    style = disabled
      ? { padding: "8px 16px", background: "transparent", color: BRAND.disabledText, border: `1px solid ${BRAND.border}` }
      : hover
        ? { padding: "8px 16px", background: BRAND.primarySoft, color: BRAND.primary, border: `1px solid ${BRAND.primary}` }
        : { padding: "8px 16px", background: "transparent", color: BRAND.primary, border: `1px solid ${BRAND.primary}` };
    iconColor = String(style.color);
  }
  if (props.style === "text") {
    style = disabled
      ? { padding: "8px 12px", background: "transparent", color: BRAND.disabledText, border: "1px solid transparent" }
      : hover
        ? { padding: "8px 12px", background: BRAND.primarySoft, color: BRAND.primary, border: "1px solid transparent" }
        : { padding: "8px 12px", background: "transparent", color: BRAND.primary, border: "1px solid transparent" };
    iconColor = String(style.color);
  }
  if (props.style === "accent") {
    style = disabled
      ? { padding: "8px 16px", background: VIRYA.btn.disabledBg, color: VIRYA.btn.disabledText, border: "1px solid transparent" }
      : hover
        ? { padding: "8px 16px", background: VIRYA.btn.secondaryHover, color: VIRYA.btn.textOnFill, border: "1px solid transparent" }
        : { padding: "8px 16px", background: VIRYA.btn.secondaryEnable, color: VIRYA.btn.textOnFill, border: "1px solid transparent" };
  }
  if (props.style === "icon") {
    if (disabled) {
      style = { width: 36, height: 36, background: VIRYA.btn.disabledBg, border: "1px solid transparent" };
      iconColor = VIRYA.btn.disabledText;
    } else if (hover) {
      style = { width: 36, height: 36, background: VIRYA.btn.primaryHover, border: "1px solid transparent" };
    } else {
      style = { width: 36, height: 36, background: VIRYA.btn.primaryEnable, border: "1px solid transparent" };
    }
  }
  if (props.style === "fill" || props.style === "accent") {
    iconColor = disabled ? VIRYA.btn.disabledText : VIRYA.btn.textOnFill;
  }

  return (
    <div style={mergeStyle(base, style)}>
      {props.style === "icon" ? <PlusIcon color={iconColor} /> : props.label ?? "Button"}
    </div>
  );
}

function ButtonPage() {
  const styles: { key: BtnStyle; title: string; note: string }[] = [
    { key: "fill", title: "Fill", note: "Solid primary · main CTAs" },
    { key: "stroke", title: "Stroke", note: "Outlined · secondary actions" },
    { key: "text", title: "Text", note: "No border · low emphasis" },
    { key: "icon", title: "Icon only", note: "36×36 toolbar control" },
    { key: "accent", title: "Accent", note: "Secondary #B51F26" },
  ];
  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Button"
        title="Button"
        description="Styles: fill, stroke, text, icon only, accent. Each style has Enable, Hover, and Disable."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.button} />
      <Demo label="Live demo — states by style">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr 1fr",
          gap: 12,
          alignItems: "center",
        }}
      >
        <T size="small" weight="semibold" style={font()}>
          Style
        </T>
        <T size="small" weight="semibold" style={font()}>
          Enable
        </T>
        <T size="small" weight="semibold" style={font()}>
          Hover
        </T>
        <T size="small" weight="semibold" style={font()}>
          Disable
        </T>
      </div>
      {styles.map((s) => (
        <div
          key={s.key}
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr 1fr",
            gap: 12,
            alignItems: "center",
            paddingTop: 12,
            borderTop: `1px solid ${LIGHT_BORDER}`,
          }}
        >
          <Stack gap={2}>
            <T size="small" weight="semibold" style={font()}>
              {s.title}
            </T>
            <T size="small" tone="tertiary" style={font()}>
              {s.note}
            </T>
          </Stack>
          <SpecBtn style={s.key} state="enable" />
          <SpecBtn style={s.key} state="hover" />
          <SpecBtn style={s.key} state="disable" />
        </div>
      ))}
      </Demo>
    </Stack>
  );
}


/* —— Individual components —— */

function CheckboxPage() {
  const [a, setA] = useCanvasState("chk-a", true);
  const [b, setB] = useCanvasState("chk-b", false);
  const items = [
    {
      label: "Email notifications",
      description: "Receive updates in your inbox",
      val: a,
      set: setA,
      disabled: false,
    },
    {
      label: "SMS alerts",
      description: "Get text messages for urgent alerts",
      val: b,
      set: setB,
      disabled: false,
    },
    {
      label: "Marketing updates",
      description: "Product news and promotional offers",
      val: false,
      set: () => undefined,
      disabled: true,
    },
  ];
  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Checkbox"
        title="Checkbox"
        description="Multi-select with label and optional description. Checked state uses primary fill."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.checkbox} />
      <Demo label="Live demo">
        <Stack gap={14}>
          {items.map((item) => (
            <div
              key={item.label}
              onClick={item.disabled ? undefined : () => item.set(!item.val)}
              style={{ cursor: item.disabled ? "default" : "pointer", opacity: item.disabled ? 0.45 : 1 }}
            >
              <Row gap={10} align="start">
                <div
                  style={{
                    width: 18,
                    height: 18,
                    marginTop: 2,
                    flexShrink: 0,
                    borderRadius: 4,
                    border: `1.5px solid ${item.val ? BRAND.primary : BRAND.border}`,
                    background: item.val ? BRAND.primary : item.disabled ? BRAND.disabledBg : "transparent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.val ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : null}
                </div>
                <Stack gap={2}>
                  <T size="small" weight="semibold" style={font()}>
                    {item.label}
                  </T>
                  <T size="small" tone="tertiary" style={font()}>
                    {item.description}
                  </T>
                </Stack>
              </Row>
            </div>
          ))}
        </Stack>
      </Demo>
    </Stack>
  );
}

function RadioPage() {
  const [value, setValue] = useCanvasState("radio-plan", "pro");
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Radio" title="Radio button" description="Single choice in a group. Selected ring uses primary." />
      <ComponentGuidelines {...COMPONENT_SPECS.radio} />
      <Demo label="Live demo — plan">
        <Stack gap={10}>
          {["free", "pro", "enterprise"].map((id) => {
            const selected = value === id;
            return (
              <div key={id} onClick={() => setValue(id)} style={{ cursor: "pointer" }}>
                <Row gap={8} align="center">
                  <div style={{ width: 18, height: 18, borderRadius: 9999, border: `1.5px solid ${selected ? BRAND.primary : BRAND.border}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {selected ? <div style={{ width: 8, height: 8, borderRadius: 9999, background: BRAND.primary }} /> : null}
                  </div>
                  <T size="small" weight={selected ? "semibold" : "normal"} style={font()}>{id[0].toUpperCase() + id.slice(1)}</T>
                </Row>
              </div>
            );
          })}
        </Stack>
      </Demo>
    </Stack>
  );
}

function DropdownPage() {
  const [open, setOpen] = useCanvasState("dd-open", true);
  const [region, setRegion] = useCanvasState("dd-region", "APAC");
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Dropdown" title="Dropdown" description="Select one option. Active item uses primary soft fill." />
      <ComponentGuidelines {...COMPONENT_SPECS.dropdown} />
      <Demo label="Live demo">
        <div style={{ maxWidth: 280 }}>
          <div onClick={() => setOpen(!open)} style={font({ display: "flex", justifyContent: "space-between", padding: "8px 12px", borderRadius: 8, border: `1px solid ${open ? BRAND.primary : BRAND.border}`, cursor: "pointer", fontSize: 14 })}>
            <span>Region: {region}</span>
            <span style={{ color: BRAND.muted }}>{open ? "▲" : "▼"}</span>
          </div>
          {open ? (
            <div style={{ marginTop: 4, borderRadius: 8, border: `1px solid ${LIGHT_BORDER}`, overflow: "hidden" }}>
              {["APAC", "EMEA", "Americas"].map((r) => (
                <div key={r} onClick={() => { setRegion(r); setOpen(false); }} style={font({ padding: "8px 12px", fontSize: 14, cursor: "pointer", background: r === region ? BRAND.primarySoft : "transparent", color: r === region ? BRAND.primary : LT.primary, fontWeight: r === region ? 600 : 400 })}>
                  {r}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </Demo>
    </Stack>
  );
}

function MultiSelectDropdownPage() {
  const allOptions = [
    "Human Resources",
    "Finance",
    "Engineering",
    "Marketing",
    "Operations",
    "Legal",
    "Information Technology",
    "Sales",
    "Customer Support",
    "Product",
    "Design",
    "Compliance",
  ];
  const [open, setOpen] = useCanvasState("ms-open", true);
  const [query, setQuery] = useCanvasState("ms-query", "");
  const [selected, setSelected] = useCanvasState<string[]>("ms-selected", ["Finance", "Engineering"]);

  const filtered = allOptions.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase()),
  );

  const toggle = (opt: string) => {
    if (selected.includes(opt)) {
      setSelected(selected.filter((s) => s !== opt));
    } else {
      setSelected([...selected, opt]);
    }
  };

  const remove = (opt: string) => {
    setSelected(selected.filter((s) => s !== opt));
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Multi-select dropdown"
        title="Searchable Multi-Select Dropdown"
        description="Search, select multiple values, and display selections as removable chip tags in the field."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.multiselect} />
      <Demo label="Live demo">
        <Stack gap={8}>
          <FieldLabel required>Departments</FieldLabel>
          <div style={{ maxWidth: 420, position: "relative" }}>
            <div
              onClick={() => setOpen(!open)}
              style={font({
                minHeight: 40,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 6,
                padding: "6px 36px 6px 10px",
                borderRadius: 8,
                border: `1px solid ${open ? BRAND.primary : BRAND.border}`,
                background: LIGHT_SURFACE,
                cursor: "pointer",
              })}
            >
              {selected.length === 0 ? (
                <T size="small" tone="tertiary" style={font()}>
                  Select departments…
                </T>
              ) : (
                selected.map((opt) => (
                  <span
                    key={opt}
                    onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
                    style={font({
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "2px 8px",
                      borderRadius: 9999,
                      background: BRAND.primarySoft,
                      color: BRAND.primary,
                      fontSize: 12,
                      fontWeight: 500,
                    })}
                  >
                    {opt}
                    <span
                      onClick={() => remove(opt)}
                      style={{ cursor: "pointer", lineHeight: 1 }}
                    >
                      ×
                    </span>
                  </span>
                ))
              )}
              <span
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: BRAND.muted,
                  fontSize: 12,
                }}
              >
                {open ? "▲" : "▼"}
              </span>
            </div>
            {open ? (
              <div
                style={{
                  marginTop: 4,
                  borderRadius: 8,
                  border: `1px solid ${LIGHT_BORDER}`,
                  background: LIGHT_SURFACE,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: 8, borderBottom: `1px solid ${LIGHT_BORDER}` }}>
                  <input
                    value={query}
                    onChange={(e: { target: { value: string } }) => setQuery(e.target.value)}
                    placeholder="Search departments…"
                    style={font({
                      width: "100%",
                      boxSizing: "border-box",
                      padding: "6px 10px",
                      borderRadius: 6,
                      border: `1px solid ${BRAND.border}`,
                      background: LIGHT_CANVAS,
                      color: LT.primary,
                      fontSize: 13,
                      outline: "none",
                    })}
                  />
                </div>
                <div style={{ maxHeight: 180, overflowY: "auto" }}>
                  {filtered.length === 0 ? (
                    <T size="small" tone="tertiary" style={font({ padding: "10px 12px" })}>
                      No departments found
                    </T>
                  ) : (
                    filtered.map((opt) => {
                      const checked = selected.includes(opt);
                      return (
                        <div
                          key={opt}
                          onClick={() => toggle(opt)}
                          style={font({
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "8px 12px",
                            fontSize: 14,
                            cursor: "pointer",
                            background: checked ? BRAND.primarySoft : "transparent",
                            color: checked ? BRAND.primary : LT.primary,
                            fontWeight: checked ? 600 : 400,
                          })}
                        >
                          <div
                            style={{
                              width: 16,
                              height: 16,
                              borderRadius: 4,
                              border: `1.5px solid ${checked ? BRAND.primary : BRAND.border}`,
                              background: checked ? BRAND.primary : "transparent",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {checked ? (
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
                              </svg>
                            ) : null}
                          </div>
                          {opt}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ) : null}
          </div>
          <T size="small" tone="tertiary" style={font()}>
            {selected.length} selected — remove chips individually or search to add more
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

function TextfieldPage() {
  const [name, setName] = useCanvasState("tf-name", "Kaung Myat Hein");
  const [nrcType, setNrcType] = useCanvasState("tf-nrc-type", "new");
  const [nrcRegion, setNrcRegion] = useCanvasState("tf-nrc-region", "1");
  const [nrcTownship, setNrcTownship] = useCanvasState("tf-nrc-township", "ABC");
  const [nrcCitizen, setNrcCitizen] = useCanvasState("tf-nrc-citizen", "N");
  const [nrcNumber, setNrcNumber] = useCanvasState("tf-nrc-number", "123456");
  const [region, setRegion] = useCanvasState("tf-region", "Yangon Region");
  const [state, setState] = useCanvasState("tf-state", "Yangon");
  const [town, setTown] = useCanvasState("tf-town", "Bahan");
  const [township, setTownship] = useCanvasState("tf-township", "Kamayut");
  const [address, setAddress] = useCanvasState("tf-address", "No. 12, Inya Road");
  const [dateValue, setDateValue] = useCanvasState("tf-date", "01 Sep 2026");
  const [timeValue, setTimeValue] = useCanvasState("tf-time", "14:30:45");
  const [dateOpen, setDateOpen] = useCanvasState("tf-date-open", false);
  const [timeOpen, setTimeOpen] = useCanvasState("tf-time-open", false);

  const dateOptions = ["28 Aug 2026", "29 Aug 2026", "30 Aug 2026", "01 Sep 2026", "02 Sep 2026"];
  const timeOptions = ["09:00:00", "12:00:00", "14:30:45", "18:00:00", "23:59:59"];

  const nrcFormats: Record<string, { label: string; value: string; placeholder: string; note: string }> = {
    old: {
      label: "Old NRC",
      value: "9/OoKaNa(N)123456",
      placeholder: "9/OoKaNa(N)123456",
      note: "Legacy identification format",
    },
    new: {
      label: "New NRC",
      value: `${nrcRegion} / ${nrcTownship} (${nrcCitizen}) ${nrcNumber}`,
      placeholder: "1 / ABC (N) 123456",
      note: "City code (1–14), township code, citizen type N or C (dropdowns), and serial number — displayed horizontally",
    },
    passport: {
      label: "Passport",
      value: "MC1234567",
      placeholder: "MC1234567",
      note: "Passport number for non-NRC holders",
    },
  };
  const activeNrc = nrcFormats[nrcType] ?? nrcFormats.old;

  const inputStyle = (border: string = VIRYA.field.border, extra?: CSSProperties) =>
    font({
      width: "100%",
      boxSizing: "border-box",
      padding: "8px 12px",
      borderRadius: VIRYA.radiusMd,
      border: `1px solid ${border}`,
      background: VIRYA.field.surface,
      color: VIRYA.field.text,
      fontSize: 14,
      outline: "none",
      ...extra,
    });

  const selectStyle = (border: string, extra?: CSSProperties) =>
    font({
      boxSizing: "border-box",
      padding: "8px 10px",
      borderRadius: 8,
      border: `1px solid ${border}`,
      background: LIGHT_SURFACE,
      color: LT.primary,
      fontSize: 14,
      outline: "none",
      cursor: "pointer",
      ...extra,
    });

  const nrcCityCodes = Array.from({ length: 14 }, (_, i) => String(i + 1));
  const nrcTownshipCodes = ["ABC", "DEF", "OUKAMA", "DAGAMA", "HAKATHA"];
  const composedNewNrc = `${nrcRegion} / ${nrcTownship} (${nrcCitizen}) ${nrcNumber}`;

  const addressCatalog: Record<string, Record<string, Record<string, string[]>>> = {
    "Yangon Region": {
      Yangon: {
        Bahan: ["Kamayut", "Tamwe", "Bahan Township"],
        Dagon: ["Dagon", "Seikkan", "Kyauktada"],
      },
      Thanlyin: {
        Thanlyin: ["Thanlyin Township", "Kyauktan"],
      },
    },
    "Mandalay Region": {
      Mandalay: {
        Aungmyaythazan: ["Zegyo", "Chanayethazan"],
        Chanayethazan: ["Gyo Kone", "Thayezone"],
      },
      "Pyin Oo Lwin": {
        "Pyin Oo Lwin": ["Pyin Oo Lwin Township", "Anisakan"],
      },
    },
    "Sagaing Region": {
      Sagaing: {
        Sagaing: ["Sagaing Township", "Myinmu"],
      },
      Monywa: {
        Monywa: ["Monywa Township", "Chaung-U"],
      },
    },
  };

  const addressStates = Object.keys(addressCatalog[region] ?? {});
  const addressTowns = Object.keys(addressCatalog[region]?.[state] ?? {});
  const addressTownships = addressCatalog[region]?.[state]?.[town] ?? [];

  const syncAddress = (nextRegion: string, nextState?: string, nextTown?: string) => {
    const states = Object.keys(addressCatalog[nextRegion] ?? {});
    const resolvedState = nextState && states.includes(nextState) ? nextState : states[0] ?? "";
    const towns = Object.keys(addressCatalog[nextRegion]?.[resolvedState] ?? {});
    const resolvedTown = nextTown && towns.includes(nextTown) ? nextTown : towns[0] ?? "";
    const townships = addressCatalog[nextRegion]?.[resolvedState]?.[resolvedTown] ?? [];
    setRegion(nextRegion);
    setState(resolvedState);
    setTown(resolvedTown);
    setTownship(townships[0] ?? "");
  };

  const onAddressStateChange = (nextState: string) => {
    const towns = Object.keys(addressCatalog[region]?.[nextState] ?? {});
    const nextTown = towns[0] ?? "";
    const townships = addressCatalog[region]?.[nextState]?.[nextTown] ?? [];
    setState(nextState);
    setTown(nextTown);
    setTownship(townships[0] ?? "");
  };

  const onAddressTownChange = (nextTown: string) => {
    const townships = addressCatalog[region]?.[state]?.[nextTown] ?? [];
    setTown(nextTown);
    setTownship(townships[0] ?? "");
  };

  const addressSelectStyle = selectStyle(BRAND.border, { width: "100%" });

  const maskBankAccount = (account: string) => {
    const digits = account.replace(/\D/g, "");
    if (digits.length < 8) return account;
    const start = Math.floor((digits.length - 4) / 2);
    return digits
      .split("")
      .map((d, i) => (i >= start && i < start + 4 ? d : "•"))
      .join("")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Textfield"
        title="Input"
        description="Collect user-provided text data. Always use a visible label. Supports specialized bank formats."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.textfield} />

      <Demo label="Live demo — states">
        <Grid columns={2} gap={16}>
          <Stack gap={6}>
            <FieldLabel required>Full name</FieldLabel>
            <input
              value={name}
              onChange={(e: { target: { value: string } }) => setName(e.target.value)}
              style={inputStyle(BRAND.border)}
            />
            <T size="small" tone="tertiary" style={font()}>Default</T>
          </Stack>
          <Stack gap={6}>
            <FieldLabel required>Email</FieldLabel>
            <input
              value="kaung@example.com"
              readOnly
              style={inputStyle(VIRYA.field.focus, { boxShadow: `0 0 0 3px ${VIRYA.primaryMinimal}` })}
            />
            <T size="small" tone="tertiary" style={font()}>Focus</T>
          </Stack>
          <Stack gap={6}>
            <FieldLabel required>Phone number</FieldLabel>
            <input value="09" readOnly style={inputStyle(VIRYA.field.error)} />
            <T size="small" style={font({ color: VIRYA.field.errorText })}>Enter a valid phone number</T>
          </Stack>
          <Stack gap={6}>
            <FieldLabel>Employee ID</FieldLabel>
            <input value="EMP-1042" disabled style={inputStyle(BRAND.border, { opacity: 0.5 })} />
            <T size="small" tone="tertiary" style={font()}>Disabled</T>
          </Stack>
        </Grid>
      </Demo>

      <Demo label="NRC format">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            The system supports three types of identification formats: Old NRC, New NRC, and Passport. Since bank customers may use different identification types, the NRC input and display format must support all three formats consistently.
          </T>
          <Row gap={8} wrap>
            {Object.entries(nrcFormats).map(([id, fmt]) => (
              <div
                key={id}
                onClick={() => setNrcType(id)}
                style={font({
                  padding: "6px 10px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: nrcType === id ? 600 : 500,
                  cursor: "pointer",
                  background: nrcType === id ? BRAND.primarySoft : "transparent",
                  color: nrcType === id ? BRAND.primary : LT.secondary,
                  border: `1px solid ${nrcType === id ? BRAND.primary : LIGHT_BORDER}`,
                })}
              >
                {fmt.label}
              </div>
            ))}
          </Row>
          <Stack gap={6}>
            <FieldLabel required>Identification number</FieldLabel>
            {nrcType === "new" ? (
              <Stack gap={10}>
                <div
                  style={font({
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "nowrap",
                    overflowX: "auto",
                    padding: "4px 0",
                  })}
                >
                  <select
                    value={nrcRegion}
                    onChange={(e: { target: { value: string } }) => setNrcRegion(e.target.value)}
                    style={selectStyle(BRAND.border, { width: 56, textAlign: "center" })}
                    title="City code"
                  >
                    {nrcCityCodes.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <T size="small" tone="tertiary" style={font()}>/</T>
                  <select
                    value={nrcTownship}
                    onChange={(e: { target: { value: string } }) => setNrcTownship(e.target.value)}
                    style={selectStyle(BRAND.border, { width: 108 })}
                    title="Township code"
                  >
                    {nrcTownshipCodes.map((code) => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                  <select
                    value={nrcCitizen}
                    onChange={(e: { target: { value: string } }) => setNrcCitizen(e.target.value)}
                    style={selectStyle(BRAND.border, { width: 64 })}
                    title="Citizen type"
                  >
                    <option value="N">(N)</option>
                    <option value="C">(C)</option>
                  </select>
                  <input
                    value={nrcNumber}
                    onChange={(e: { target: { value: string } }) => setNrcNumber(e.target.value)}
                    style={inputStyle(BRAND.border, { width: 120, flexShrink: 0 })}
                    title="Serial number"
                  />
                </div>
                <Row gap={16} wrap>
                  <T size="small" tone="tertiary" style={font()}>City code: 1–14</T>
                  <T size="small" tone="tertiary" style={font()}>Township: dropdown</T>
                  <T size="small" tone="tertiary" style={font()}>Type: (N) or (C)</T>
                  <T size="small" tone="tertiary" style={font()}>Serial: text input</T>
                </Row>
                <div style={{ padding: "10px 12px", borderRadius: 8, border: `1px solid ${LIGHT_BORDER}`, background: LIGHT_CANVAS }}>
                  <T size="small" style={font({ fontFamily: "monospace" })}>{composedNewNrc}</T>
                </div>
                <T size="small" tone="tertiary" style={font()}>
                  Horizontal layout: [City code 1–14] / [Township code] ([N or C]) [Serial number]
                </T>
              </Stack>
            ) : (
              <input value={activeNrc.value} readOnly style={inputStyle(BRAND.primary)} />
            )}
            <T size="small" tone="tertiary" style={font()}>{activeNrc.note}</T>
          </Stack>
        </Stack>
      </Demo>

      <Demo label="Bank account format">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            For security and privacy purposes: Only the middle 4 digits of the bank account number should be visible. All remaining digits must be masked.
          </T>
          <Stack gap={6}>
            <FieldLabel>Account number (display)</FieldLabel>
            <input value={maskBankAccount("1234567890123456")} readOnly style={inputStyle(BRAND.border, { letterSpacing: "0.08em", fontFamily: "monospace" })} />
            <T size="small" tone="tertiary" style={font()}>Masked view — middle 4 digits visible</T>
          </Stack>
        </Stack>
      </Demo>

      <Demo label="Address format">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            All addresses should follow the standardized structure below: Region, State, Town, Township, Address. Region (optional), State, Town, and Township use dropdowns; Detailed Address is free text. This ensures consistent address formatting across the system.
          </T>
          <Grid columns={2} gap={12}>
            <Stack gap={6}>
              <FieldLabel>Region</FieldLabel>
              <select
                value={region}
                onChange={(e: { target: { value: string } }) => syncAddress(e.target.value)}
                style={addressSelectStyle}
              >
                {Object.keys(addressCatalog).map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Stack>
            <Stack gap={6}>
              <FieldLabel required>State</FieldLabel>
              <select
                value={state}
                onChange={(e: { target: { value: string } }) => onAddressStateChange(e.target.value)}
                style={addressSelectStyle}
              >
                {addressStates.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Stack>
            <Stack gap={6}>
              <FieldLabel required>Town</FieldLabel>
              <select
                value={town}
                onChange={(e: { target: { value: string } }) => onAddressTownChange(e.target.value)}
                style={addressSelectStyle}
              >
                {addressTowns.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Stack>
            <Stack gap={6}>
              <FieldLabel required>Township</FieldLabel>
              <select
                value={township}
                onChange={(e: { target: { value: string } }) => setTownship(e.target.value)}
                style={addressSelectStyle}
              >
                {addressTownships.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </Stack>
          </Grid>
          <Stack gap={6}>
            <FieldLabel required>Detailed address</FieldLabel>
            <input value={address} onChange={(e: { target: { value: string } }) => setAddress(e.target.value)} style={inputStyle(BRAND.border)} />
          </Stack>
          <div style={{ padding: "10px 12px", borderRadius: 8, border: `1px solid ${LIGHT_BORDER}`, background: LIGHT_CANVAS }}>
            <T size="small" style={font()}>
              {[region, state, town, township, address].filter(Boolean).join(", ")}
            </T>
          </div>
        </Stack>
      </Demo>

      <Demo label="Time & date format">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            The system should use: 24-hour time format [hh:mm:ss] and standardized date display format [DD MMM YYYY]. Click the calendar or clock icon to choose a value.
          </T>
          <Grid columns={2} gap={16}>
            <Stack gap={6}>
              <FieldLabel required>Date</FieldLabel>
              <div style={{ position: "relative" }}>
                <input
                  value={dateValue}
                  onChange={(e: { target: { value: string } }) => setDateValue(e.target.value)}
                  onFocus={() => setDateOpen(true)}
                  style={inputStyle(dateOpen ? VIRYA.field.focus : BRAND.border, { paddingRight: 40 })}
                />
                <div
                  onClick={() => setDateOpen(!dateOpen)}
                  style={font({
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: BRAND.muted,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  })}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5.5 2V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10.5 2V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {dateOpen ? (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "calc(100% + 4px)",
                      zIndex: 2,
                      borderRadius: VIRYA.radiusMd,
                      border: `1px solid ${LIGHT_BORDER}`,
                      background: LIGHT_SURFACE,
                      overflow: "hidden",
                    }}
                  >
                    {dateOptions.map((d) => (
                      <div
                        key={d}
                        onClick={() => {
                          setDateValue(d);
                          setDateOpen(false);
                        }}
                        style={font({
                          padding: "8px 12px",
                          fontSize: 14,
                          cursor: "pointer",
                          background: d === dateValue ? VIRYA.primarySoft : "transparent",
                          color: d === dateValue ? BRAND.primary : VIRYA.field.text,
                          fontWeight: d === dateValue ? 600 : 400,
                        })}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <T size="small" tone="tertiary" style={font()}>DD MMM YYYY</T>
            </Stack>
            <Stack gap={6}>
              <FieldLabel required>Time</FieldLabel>
              <div style={{ position: "relative" }}>
                <input
                  value={timeValue}
                  onChange={(e: { target: { value: string } }) => setTimeValue(e.target.value)}
                  onFocus={() => setTimeOpen(true)}
                  style={inputStyle(timeOpen ? VIRYA.field.focus : BRAND.border, { paddingRight: 40, fontFamily: "monospace" })}
                />
                <div
                  onClick={() => setTimeOpen(!timeOpen)}
                  style={font({
                    position: "absolute",
                    right: 10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: BRAND.muted,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  })}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 5V8.5L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                {timeOpen ? (
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: "calc(100% + 4px)",
                      zIndex: 2,
                      borderRadius: VIRYA.radiusMd,
                      border: `1px solid ${LIGHT_BORDER}`,
                      background: LIGHT_SURFACE,
                      overflow: "hidden",
                    }}
                  >
                    {timeOptions.map((t) => (
                      <div
                        key={t}
                        onClick={() => {
                          setTimeValue(t);
                          setTimeOpen(false);
                        }}
                        style={font({
                          padding: "8px 12px",
                          fontSize: 14,
                          fontFamily: "monospace",
                          cursor: "pointer",
                          background: t === timeValue ? VIRYA.primarySoft : "transparent",
                          color: t === timeValue ? BRAND.primary : VIRYA.field.text,
                          fontWeight: t === timeValue ? 600 : 400,
                        })}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
              <T size="small" tone="tertiary" style={font()}>24-hour · hh:mm:ss</T>
            </Stack>
          </Grid>
        </Stack>
      </Demo>
    </Stack>
  );
}

function TextareaPage() {
  const [notes, setNotes] = useCanvasState("ta-notes", "Add deployment notes…");
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Textarea" title="Textarea" description="Multi-line input with the same label / helper / error pattern as textfield." />
      <ComponentGuidelines {...COMPONENT_SPECS.textarea} />
      <Demo label="Live demo">
      <Grid columns={2} gap={16}>
        <Demo label="Default">
          <Stack gap={6}>
            <FieldLabel>Notes</FieldLabel>
            <textarea value={notes} onChange={(e: { target: { value: string } }) => setNotes(e.target.value)} rows={4} style={font({ width: "100%", boxSizing: "border-box", padding: "8px 12px", borderRadius: 8, border: `1px solid ${BRAND.primary}`, background: LIGHT_SURFACE, color: LT.primary, fontSize: 14, resize: "vertical", outline: "none" })} />
          </Stack>
        </Demo>
        <Demo label="Error">
          <Stack gap={6}>
            <FieldLabel required>Description</FieldLabel>
            <textarea value="" placeholder="Describe the issue…" rows={4} readOnly style={font({ width: "100%", boxSizing: "border-box", padding: "8px 12px", borderRadius: VIRYA.radiusMd, border: `1px solid ${VIRYA.field.error}`, background: VIRYA.field.surface, color: VIRYA.field.text, fontSize: 14, resize: "none" })} />
            <T size="small" style={font({ color: VIRYA.field.errorText })}>Description is required</T>
          </Stack>
        </Demo>
      </Grid>
      </Demo>
    </Stack>
  );
}

function SearchPage() {
  const [q, setQ] = useCanvasState("search-q", "");
  const [accountQ, setAccountQ] = useCanvasState("search-account-q", "");

  const accountDigits = accountQ.replace(/\D/g, "");
  const accountResults = accountDigits
    ? SAMPLE_BANK_ACCOUNTS.filter((a) => a.number.includes(accountDigits))
    : SAMPLE_BANK_ACCOUNTS;

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Search"
        title="Search input"
        description="Simple text search and bank account search with masked account display."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.search} />

      <Demo label="Live demo — simple search">
        <Stack gap={8}>
          <SearchInput value={q} onChange={setQ} placeholder="Search components…" />
          <T size="small" tone="tertiary" style={font()}>
            {q ? `Filtering by “${q}”` : "Type to filter lists, tables, or modules"}
          </T>
        </Stack>
      </Demo>

      <Demo label="Live demo — bank account search">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            Search by account number. Results show the first 6 digits and last 4 digits; the 4 center digits are hidden for privacy.
          </T>
          <SearchInput
            value={accountQ}
            onChange={(v) => setAccountQ(v.replace(/\D/g, ""))}
            placeholder="Search account number…"
            mono
            inputMode="numeric"
            maxLength={16}
          />
          <Stack gap={6}>
            {accountResults.map((account) => (
              <div
                key={account.number}
                style={font({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 12,
                  padding: "10px 12px",
                  borderRadius: VIRYA.radiusMd,
                  border: `1px solid ${VIRYA.field.border}`,
                  background: VIRYA.field.surface,
                })}
              >
                <T size="small" style={font({ fontFamily: "monospace", letterSpacing: "0.08em", color: LT.primary })}>
                  {maskBankAccountSearchDisplay(account.number)}
                </T>
                <T size="small" tone="secondary" style={font()}>
                  {account.label}
                </T>
              </div>
            ))}
            {accountResults.length === 0 ? (
              <T size="small" tone="tertiary" style={font()}>No accounts match this number</T>
            ) : null}
          </Stack>
        </Stack>
      </Demo>
    </Stack>
  );
}


const COMPONENT_SPECS = {
  button: {
    usageWhen: [
      "A user needs to trigger an action (submit, save, confirm, navigate)",
      "The action has clear priority (primary, secondary, or destructive)",
      "Icon-only actions appear in toolbars or compact layouts",
    ],
    usageNote: "Buttons communicate actions — not navigation labels. Use links or tabs for navigation.",
    behaviorRules: [
      "One fill or accent primary action per view",
      "Use stroke or text style for secondary actions",
      "Disabled state must block interaction and use disabled tokens",
      "Hover state provides visual feedback before click",
      "Icon-only buttons require an accessible name (aria-label or tooltip)",
      "Accent (#B51F26) is for brand highlight or destructive — not both in one group",
    ],
    examples: ["Fill: Save changes", "Stroke: Cancel", "Text: Learn more", "Accent: Delete account"],
  },
  breadcrumbs: {
    usageWhen: [
      "The system has multi-level navigation",
      "Users move between hierarchical pages (e.g., List → Details → Edit)",
      "There are parent–child module relationships",
      "The portal contains multiple functional modules",
    ],
    usageNote: "Breadcrumbs help users understand where they are within the system and reduce navigation confusion.",
    behaviorRules: [
      "Display at the top of the page (below the header)",
      "Show hierarchy structure, not user click history",
      "The last item (current page) should not be clickable",
      "Previous levels should be clickable",
      "Must update dynamically based on page location",
    ],
    examples: [
      "Home / To Do List / Task Details",
      "Home / My Tasks / Task Details / Edit",
      "Home / Report / Summary",
    ],
  },
  checkbox: {
    usageTitle: "Use Checkbox when:",
    usageWhen: [
      "Users can select multiple options",
      "There are at least two or more options",
      "Each option is independent of the others",
      "Users need flexibility in selection",
    ],
    structureIntro: "A checkbox item may include:",
    structure: [
      "Checkbox control",
      "Label (required)",
      "Optional description (to provide additional explanation)",
    ],
    behaviorTitle: "Behavior guidelines",
    behaviorRules: [
      "Users can select one, multiple, or all options",
      "Each checkbox functions independently",
      "Label text must be clear and concise",
      "Description text (if available) should provide helpful clarification",
      "Disabled state should clearly indicate non-interactive status",
    ],
    examples: [
      "☑ Email notifications — Receive updates in your inbox",
      "☐ SMS alerts — Get text messages for urgent alerts",
      "☐ Marketing updates — Product news and offers (disabled)",
    ],
  },
  radio: {
    usageWhen: [
      "Users must select exactly one option from a small set",
      "Options are mutually exclusive (plan, role, payment method)",
      "All options should be visible without opening a menu",
    ],
    usageNote: "Prefer dropdown when there are many options or space is limited.",
    behaviorRules: [
      "Only one radio in a group can be selected at a time",
      "Selected state uses primary ring and inner dot",
      "Entire row (control + label) is clickable",
      "Disabled options cannot be selected",
    ],
    examples: ["○ Free  ● Pro  ○ Enterprise", "○ Daily  ● Weekly  ○ Monthly"],
  },
  dropdown: {
    usageWhen: [
      "Users choose one option from a list of 5+ items",
      "Space is limited and all options need not be visible at once",
      "The field represents a single value (region, role, status)",
    ],
    usageNote: "Use radio buttons for 2–4 visible options; use search when the list is very long.",
    behaviorRules: [
      "Closed state shows the selected value or placeholder",
      "Open state highlights the active item with primary soft fill",
      "Selecting an item closes the menu and updates the value",
      "Keyboard navigation and focus management required in implementation",
    ],
    examples: ["Region: APAC ▼", "Status: Active ▼", "Assignee: Unassigned ▼"],
  },
  multiselect: {
    usageTitle: "Use a Searchable Multi-Select Dropdown when:",
    usageWhen: [
      "Users need to select multiple values from a list",
      "The option list contains many items",
      "Users need a search function to quickly locate options",
      "Selected items need to be displayed clearly",
    ],
    commonUseCases: [
      "Selecting multiple departments",
      "Assigning multiple users or roles",
      "Choosing multiple categories or tags",
      "Selecting multiple locations or regions",
      "Applying multiple filters in search",
    ],
    behaviorTitle: "Behavior guidelines",
    behaviorRules: [
      "Users can search for options within the dropdown",
      "Users can select multiple items",
      "Selected items should be displayed in the field (commonly as chip tags)",
      "Users should be able to remove selected items individually.",
    ],
    examples: [
      "Departments: HR × Finance × Engineering",
      "Roles: Admin × Editor × Viewer",
      "Regions: APAC × EMEA × Americas",
    ],
  },
  textfield: {
    usageTitle: "When to use",
    usageWhen: [
      "Use inputs to collect user-provided text data.",
      "Always pair with a visible label.",
    ],
    states: [
      "Default: Standard input state",
      "Focus: Clear focus ring for keyboard navigation",
      "Error: Red border and helper text for validation errors",
      "Disabled: Reduced opacity, no interaction",
    ],
    bestPractices: [
      "Always include a label — never rely on placeholder text alone",
      "Append * to mandatory field labels using secondary color (#B51F26)",
      "Show validation errors inline, close to the field",
      "Use autocomplete attributes for common fields",
      "Keep placeholder text brief and supplemental.",
    ],
    behaviorRules: [],
    examples: [
      "Old NRC: 9/OoKaNa(N)123456",
      "New NRC: 1 / ABC (N) 123456",
      "Passport: MC1234567",
      "Bank account: **** **** 5678 ****",
      "Address: Yangon Region → Yangon → Bahan → Kamayut, No. 12 (dropdowns for Region–Township)",
      "Date: 01 Sep 2026 · Time: 14:30:45",
    ],
  },
  textarea: {
    usageWhen: [
      "Users enter multi-line text (notes, description, comments)",
      "Content may exceed one line and benefit from vertical resize",
    ],
    usageNote: "Same label, helper, and error pattern as textfield.",
    bestPractices: [
      "Append * to mandatory field labels using secondary color (#B51F26)",
    ],
    behaviorRules: [
      "Minimum visible height of 4 rows for empty state",
      "Vertical resize allowed unless layout is fixed",
      "Character limits shown in helper text when applicable",
      "Error message appears below the field",
    ],
    examples: ["Notes: Add deployment notes…", "Description + error: Description is required"],
  },
  search: {
    usageWhen: [
      "Users filter or find items within a list, table, or module",
      "Search is a primary action on the page (directory, inventory, tasks)",
      "Users search bank accounts by account number with privacy masking in results",
    ],
    usageNote: "Two patterns: simple text search, and bank account search with masked display (first 6 + last 4 visible, center 4 hidden).",
    behaviorRules: [
      "Leading search icon; placeholder describes what is searchable",
      "Clear (×) control appears when input has value",
      "Focus uses primary border and soft focus ring",
      "Simple search accepts any text; debounce server requests when needed",
      "Bank account search accepts digits only; results show first 6 digits, masked center (••••), and last 4 digits",
      "Never show full account numbers in bank account search results",
      "Submit on Enter or live filter per product requirement",
    ],
    examples: ["Search components…", "Search employees…", "123456 •••• 3456 — Savings account"],
  },
  upload: {
    usageWhen: [
      "Users attach documents (PDF statements, IDs, forms) to a request or record",
      "A form needs a clear drop zone for first-time file selection",
      "A compact status row is needed to show an in-progress, successful, or cancelled upload",
    ],
    usageNote:
      "Two layouts: Large Drop Zone for empty/first upload, and Small Upload Bar for file status after selection.",
    structureIntro: "Layouts:",
    structure: [
      "Large Drop Zone — centered box with PDF icon, prompt text, Choose File button or uploading card, then helper text",
      "Small Upload Bar — compact row with PDF icon, file name + size, and action icon (upload / success check / cancel)",
    ],
    behaviorRules: [
      "Large Drop Zone is for empty state or first selection — prompt users to drop or choose a file",
      "While uploading in the large zone, replace Choose File with an uploading card (file name, progress or status)",
      "Helper text under the large zone states allowed types, size limits, or other constraints",
      "Small Upload Bar shows one file at a time: icon · name · size · trailing action",
      "Trailing action cycles by state: upload (start/retry), success checkmark (complete), cancel (remove/abort)",
      "Use primary fill for Choose File; success uses success token; cancel uses secondary/critical affordance",
      "Do not mix Large Drop Zone and Small Upload Bar for the same file at the same time — switch when a file is selected",
    ],
    examples: [
      "Large: PDF icon · Drop PDF here or Choose File · PDF up to 10 MB",
      "Large uploading: statement.pdf · Uploading…",
      "Small: PDF · KYC_form.pdf · 1.2 MB · ✓",
      "Small: PDF · invoice.pdf · 840 KB · ✕",
    ],
  },
  tooltip: {
    usageWhen: [
      "Icon-only controls need a short text label",
      "Abbreviated UI needs clarification on hover or focus",
      "Supplementary hint does not fit in the layout",
    ],
    usageNote: "Do not put essential information only in a tooltip.",
    behaviorRules: [
      "Keep copy to one short line",
      "Show on hover and keyboard focus",
      "Dark background (#1A1F2A) with white text",
      "Do not use for interactive content or long paragraphs",
    ],
    examples: ["Save changes", "Export CSV", "More options"],
  },
  snackbar: {
    usageWhen: [
      "Confirm a completed action (saved, sent, copied)",
      "Show non-blocking errors or warnings",
      "Surface brief status messages that users can dismiss",
    ],
    usageNote: "Auto-dismiss after a few seconds; users can also dismiss with the close icon.",
    behaviorRules: [
      "Place toast in the top-right corner of the product frame (16px inset)",
      "Fixed width 380px; do not stretch full width",
      "Leading icon matches variant: success check, error X, info i, warning alert — tinted with snackbar icon tokens",
      "Each variant uses tinted surface, semantic border, and matching status icon from snackbar tokens",
      "Message text uses snackbar text default (#424242)",
      "Close icon on the right uses snackbar icon default (#666666)",
      "Only one snackbar visible at a time",
    ],
    examples: [
      "Success: Invite sent successfully",
      "Error: Upload failed. Please try again.",
      "Info: Draft saved",
      "Warning: Session expires in 5 minutes",
    ],
  },
  popupConfirmation: {
    usageTitle: "Use confirmation popup when:",
    usageWhen: [
      "A destructive or irreversible action needs explicit user approval",
      "Users must choose between two outcomes (confirm or cancel)",
      "A decision blocks further interaction until resolved",
      "An action needs Approve or Reject (review / decision workflows)",
    ],
    usageNote:
      "Use the confirmation layout when the user needs to confirm or cancel an action. Approve / Reject flows always include a Remarks textbox.",
    structureIntro:
      "Layout order: Title + Close Icon → Divider → Description → (Remarks when Approve/Reject) → Secondary Button + Primary Button",
    structure: [
      "Title — Clearly identifies the action or purpose of the popup",
      "Close Icon — Positioned at the top-right corner to dismiss the popup",
      "Divider — Separates the title section from the message content",
      "Description / Message — Explains the action and provides important information or warning",
      "Remarks textbox — Required whenever the action is Approve or Reject; multi-line textarea for decision notes",
      "Delete Captcha text field — Required for delete actions; user must type Delete Confirm",
      "Secondary Button — Alternative or cancel action (right-aligned, before primary)",
      "Primary Button — Main or confirm action (right-aligned, after secondary)",
    ],
    behaviorTitle: "Behavior guidelines",
    behaviorRules: [
      "Display the popup in the center of the screen",
      "Prevent interaction with the background until the popup is closed",
      "Include a clear title and concise message",
      "Follow layout order: Title + Close Icon → Divider → Description → Optional fields → Buttons",
      "Place Secondary Button and Primary Button together on the right (secondary first, then primary)",
      "Use clear action labels such as Cancel / Delete, No / Yes, Back / Confirm, or Reject / Approve",
      "Whenever an action needs Approve or Reject, always add a Remarks textbox (required) before the action buttons",
      "Disable Approve / Reject until Remarks has non-empty text",
      "For delete actions, show Delete Captcha and require typing Delete Confirm before enabling the primary action",
    ],
    examples: [
      "Cancel · Delete — delete account (with Delete Captcha)",
      "Reject · Approve — review request (with Remarks textbox)",
      "Cancel · OK — sign out",
      "No · Yes — discard changes",
      "Back · Confirm — leave page",
    ],
  },
  popupSingle: {
    usageTitle: "Use single-action alert when:",
    usageWhen: [
      "The user only needs to acknowledge a message and proceed",
      "A success, info, warning, or error message requires one action",
      "No cancel or alternative choice is required",
    ],
    usageNote:
      "The Popup Alert uses a centered single-action layout to clearly communicate the message and guide the user toward one action.",
    structureIntro:
      "Layout order: Close Icon → Alert Icon → Title → Description → Action Button",
    structure: [
      "Close Icon — Positioned at the top-right corner to dismiss the popup",
      "Alert Icon — Placed at the top center to visually indicate the alert type",
      "Title — Clearly states the purpose of the alert",
      "Description / Message — Provides a concise explanation or confirmation message",
      "Action Button — Positioned at the bottom to confirm or proceed",
    ],
    behaviorTitle: "Behavior guidelines",
    behaviorRules: [
      "Display the popup in the center of the screen",
      "Prevent interaction with the background until the popup is closed",
      "Use the predefined Alert Icon for all alert dialogs",
      "Center the alert icon, title, and description",
      "Place a single action button at the bottom (e.g., OK, Got it, Continue)",
      "Close icon and action button should both dismiss or complete the alert",
    ],
    examples: [
      "Success — Payment successful · OK",
      "Warning — Session expired · Sign in",
      "Info — Update available · Update now",
      "Error — Connection failed · Retry",
    ],
  },
  pagination: {
    usageWhen: [
      "Data is split across multiple pages (tables, lists, search results)",
      "Users need to jump to a specific page or move next/previous",
    ],
    usageNote: "Show total pages or “Page X of Y” when it helps orientation.",
    behaviorRules: [
      "Current page uses primary fill",
      "Other pages are outlined or text-only and clickable",
      "Disable previous on first page and next on last page",
      "Update list content when page changes without full reload when possible",
    ],
    examples: ["1  2  [3]  4  5", "Page 3 of 12", "← Previous · Next →"],
  },
  stepper: {
    usageWhen: [
      "A task is completed in ordered steps (wizard, checkout, onboarding)",
      "Users need to see progress and which step is current",
    ],
    usageNote: "Use tabs when steps are peers; use stepper for linear flows.",
    behaviorRules: [
      "Completed steps use primary fill with a tick icon",
      "Current step uses primary fill with the step number",
      "Future steps are muted with outline and step number",
      "Users can return to completed steps if the flow allows",
      "Step labels describe the step content clearly",
    ],
    examples: ["① Details — ② Review — ③ Payment — ④ Done", "Step 2 of 4: Review"],
  },
  tab: {
    usageWhen: [
      "Content is grouped into peer sections on the same page",
      "Users switch context without leaving the page (Overview, Activity, Settings)",
    ],
    usageNote: "Use breadcrumbs for hierarchy across pages; tabs for same-level sections.",
    behaviorRules: [
      "Active tab uses primary underline and semibold label",
      "Inactive tabs use secondary text color",
      "Only one panel visible at a time",
      "Preserve tab state in URL or state when useful for sharing",
    ],
    examples: ["Overview | Activity | Settings", "Details | History | Comments"],
  },
  chip: {
    usageWhen: [
      "Display compact labels (status, category, filter tag)",
      "Users remove applied filters or selections",
    ],
    usageNote: "Use chipTag status tokens for semantic labels; filled, soft, and outline for filters.",
    behaviorRules: [
      "Status chips show a leading dot using chipTag icon token (success, error, info, warning, neutral)",
      "Filled, soft, and outline chips may show a leading or trailing icon using chipTag icon token",
      "Filled uses primary surface (#002c76) with inverse text (#fdfdfd)",
      "Soft uses primary soft surface (#e1ecfe) with primary text (#002c76)",
      "Outline uses primary border and text with transparent background",
      "Removable chips show close icon at the end using chipTag icon color; removal updates filter state",
      "Do not use chips for primary navigation",
    ],
    examples: ["● Success · ● Active · ● Pending · ● Overdue", "+ Design × · + Virya × · + Poppins ×"],
  },
  table: {
    usageWhen: [
      "Display structured data across rows and columns (accounts, transactions, users)",
      "Users compare values, scan status, and take row-level actions",
      "Bulk operations apply to one or more selected rows",
    ],
    usageNote: "Header alignment must match data column alignment for every column type.",
    structureIntro: "Supported column types:",
    structure: [
      "Checkbox — row selection; icon-only; center-aligned; no header text",
      "Text — names, labels, descriptions; left-aligned",
      "Number — counts, reference IDs, quantities; right-aligned",
      "Amount — currency values; default text by default, increase/decrease only when value changed; right-aligned",
      "Status — semantic chip tags; center-aligned",
      "Action — one button type per column (icon-only OR text-only); center-aligned; View details navigates to the details page",
    ],
    behaviorRules: [
      "Header alignment matches data column alignment in every column",
      "Number columns are right-aligned",
      "Text columns are left-aligned",
      "Status columns are center-aligned",
      "Amount columns are right-aligned like number columns; use default text for normal values",
      "Show increase/decrease icons and semantic colors only when the amount has changed (up or down)",
      "Action columns are center-aligned; use either icon buttons or text buttons in a column — never mix both",
      "Primary row action is View details (text button); Edit and Delete belong on the details page",
      "View details navigates to the record details page — do not expose Edit/Delete inline in the table row",
      "Checkbox column is icon-only with no text; selecting applies to the entire row, not individual cells",
      "When multiple rows are selected, bulk actions apply consistently to all selected rows",
    ],
    examples: [
      "☐ · Customer name · 001042 · 850 MMK · ● Active · View details",
      "Details page: Edit · Delete (not shown in table row)",
      "Amount with change: ↑ +12,500 MMK · ↓ −3,200 MMK",
    ],
  },
  listing: {
    usageWhen: [
      "Display searchable, paginated lists of records (accounts, transactions, users)",
      "Users need global navigation plus page-level actions on the same screen",
      "Data is browsed in a table with filters and bulk operations",
    ],
    usageNote: "Listing pages combine app shell, page header, optional filters, table list view, and footer pagination.",
    structureIntro: "Layout hierarchy (top to bottom):",
    structure: [
      "App header — Collapse menu → Logo (one or two) on the left · Notification · Account Profile on the right",
      "Left navigation — collapsible; three levels: Menu → Sub Menu → Item",
      "Page top — page name and primary actions on the same row, then breadcrumbs",
      "Filter section — search between breadcrumbs and list view; filters follow the ≤2 / >2 rule",
      "≤2 filters — place filter controls beside the search bar on the same row",
      ">2 filters — place Advanced filter beside the search bar; click opens a popup to set and Apply filters",
      "List view — table data (default 10 rows per page; demo has 50 records / 5 pages)",
      "Footer pagination — page footer inside the app frame (full width under header + nav); rows per page left; ← Prev · 5 page steps · Next → right",
    ],
    behaviorRules: [
      "App header: collapse menu and logo(s) left-aligned; notification and account profile right-aligned — no breadcrumbs in the header",
      "Logo area supports one or two logos depending on product context (e.g. bank + partner)",
      "Collapse menu toggles expanded nav ↔ icon-only rail (labels hidden; icons remain)",
      "Collapsed side menu shows only Menu-level icons — no Sub Menu or Item labels inline",
      "On hover of a collapsed Menu icon, a flyout shows only Sub Menu entries",
      "On hover of a Sub Menu in that flyout, a second flyout shows only Item entries",
      "Flyouts stay open while the pointer is over the icon or either panel; selecting an Item activates that route",
      "Left navigation uses three levels: Menu → Sub Menu → Item; do not place page-specific actions there",
      "Menu and Sub Menu each use a representative icon as a visual anchor for scannability",
      "Item level uses a simple dot icon only — never unique icons per item — to reduce visual noise",
      "Side menu styles use VIRYA.menu tokens for shell and all item states — do not hardcode colors or spacing",
      "Side menu item states: default, hover, selected (parent open), active (current child)",
      "Active state (menu.active): light blue tint bg (#e1ecfe) · dark navy / primary text & icons (#002c76) · bold/medium weight — current page/route",
      "Selected state (menu.selected): soft gray bg · neutral gray text/icons — parent open with active child underneath",
      "State priority when resolving styles: active (current route) → selected (open parent) → hover → default",
      "Page name is left-aligned; primary actions (Create, Export, Bulk) are right-aligned on the same row",
      "Breadcrumbs appear below the page title row in the content area — not in the app header",
      "When filters are required, place the search field between breadcrumbs and the list view",
      "If there are 1–2 filters, place them beside the search bar on the same row (do not stack vertically)",
      "If there are more than 2 filters, show Advanced filter beside the search bar instead of inline fields",
      "Advanced filter opens a popup with a sample filter form (Customer, Account, Amount, Created date); Apply updates the list; Cancel closes without applying drafts; Reset clears the form",
      "Show applied advanced filters as removable chips under the search row when active",
      "List view is the main content area; default to 10 rows per page",
      "Footer keeps rows-per-page and pagination on one row inside the app frame: ← Prev, up to 5 page steps, Next →; do not show “Page X of Y”",
      "Pagination window shows a maximum of 5 page numbers and slides as the user moves through pages",
      "Bulk actions apply to all selected rows consistently",
      "View details opens the Details page inside the same app header and left navigation — do not remove the product shell",
    ],
    examples: [
      "Header: ☰ · KBZ Bank / Virya · 🔔 · Profile",
      "Nav: Accounts [selected · open] → Customer accounts [selected · open] → • All accounts [active]",
      "Active: light blue #e1ecfe · navy #002c76 · Selected (parent open): soft gray #f5f5f5 · #666666",
      "≤2 filters: [Search………………] [Status ▾] [Branch ▾]",
      ">2 filters: [Search………………] [Advanced filter] → popup Apply",
      "Content: Customer accounts —————— [Create] [Export] [Bulk] · Home / Accounts · Search · Table",
    ],
  },
  details: {
    usageWhen: [
      "Users open a record from a listing via View details",
      "Related fields need to be scanned in clear, labeled sections",
      "Section-level edit and page-level delete must stay separated",
    ],
    usageNote:
      "Details pages keep the same app header and left navigation as the listing. Only the content area changes. Edit lives beside section titles; Delete stays at the bottom.",
    structureIntro: "Layout principle (top to bottom):",
    structure: [
      "App shell — same app header and left navigation as Listing (do not remove on View details)",
      "Page Header — page title and Breadcrumbs for location in the system",
      "Information Sections — related fields grouped into separate sections/cards with clear section titles (e.g. Card Information, Member Information, Contact Information, Additional Information)",
      "Section Actions — optional actions beside the section title when relevant (e.g. Member Information — Edit)",
      "System Information — Created By, Created Date & Time, Updated By, Updated Date & Time",
      "Delete / Destructive Action — separate section at the bottom; use destructive button style",
      "Footer pagination — same page footer inside the app frame as Listing (Prev · 5 page steps · Next) to move between records",
    ],
    behaviorRules: [
      "Open from listing View details into this Details Page structure inside the same app shell",
      "Keep app header and left navigation fixed — same chrome as Listing; only swap the content area",
      "Show Breadcrumbs under or with the page title so users know their location",
      "Divide related information into separate sections; each section has a clear title",
      "Place section actions beside the section title only when relevant to that section",
      "Do not put Edit or Delete in the listing table row — Edit is section-level; Delete is at the bottom of Details",
      "Always show System Information for auditability when available",
      "If Delete is available, isolate it in its own bottom section with a destructive button",
      "Delete opens the confirmation popup with Delete Captcha — user must type Delete Confirm before Delete is enabled",
      "Place pagination in the app-frame footer (same control as Listing) to move between records — do not put it in the app header",
      "Layout order: App shell → Page Header → Information Sections → Section Actions → System Information → Destructive Actions → Footer pagination",
    ],
    examples: [
      "Shell: ☰ · KBZ Bank / Virya · 🔔 · Profile · Left nav (same as listing)",
      "Home / Accounts / Customer accounts / Kaung Myat Hein",
      "Member Information — [Edit]",
      "System: Created By · Created Date & Time · Updated By · Updated Date & Time",
      "Danger zone: [Delete]",
      "Footer: 3 of 50 records · ← Prev · 1 2 3 4 5 · Next →",
    ],
  },
  login: {
    usageWhen: [
      "Users authenticate before entering a Virya product portal",
      "Brand identity and product value need to be visible beside the form",
      "Login is the first screen of a multi-module banking or ops system",
    ],
    usageNote:
      "Login pages use a two-column layout: brand & information on the left, login form on the right. Both columns are vertically centered. On smaller screens the sections stack.",
    structureIntro: "Layout principle:",
    structure: [
      "Two-column structure — Left: Brand & Information · Right: Login Form",
      "Left — Logo, product image, product label, main heading, feature tags, description",
      "Right — Page title, subtitle, Login ID, Password, Login button, Forgot Password, footer information",
      "Both sections are vertically centered within the viewport",
      "On smaller screens, sections stack vertically (brand first, then form)",
    ],
    behaviorRules: [
      "Keep brand content on the left and the form on the right on desktop",
      "Vertically center both sections in the available height",
      "Stack sections vertically on smaller screens — brand above, form below",
      "Login ID and Password use standard textfield patterns (label above, helper/error below)",
      "Login is the single primary action — use fill button; disable until required fields are filled",
      "Forgot Password is a text link, not a competing primary button",
      "Footer information on the form side stays secondary (support, copyright, version)",
      "Do not place product navigation or app chrome on the Login page",
    ],
    examples: [
      "Left: KBZ Bank · Virya · Secure banking workspace · Secure · Audit-ready · Role-based",
      "Right: Welcome back · Sign in to continue · Login ID · Password · [Login] · Forgot password?",
      "Footer: Need help? Contact support · © KBZ Bank",
    ],
  },
} as const;

function ComponentGuidelines(props: {
  usageWhen: readonly string[];
  usageTitle?: string;
  usageNote?: string;
  commonUseCases?: readonly string[];
  states?: readonly string[];
  bestPractices?: readonly string[];
  structure?: readonly string[];
  structureIntro?: string;
  behaviorRules?: readonly string[];
  behaviorTitle?: string;
  examples: readonly string[];
}) {
  const usageTitle = props.usageTitle ?? "Should be used when:";
  const behaviorTitle = props.behaviorTitle ?? "Behavior rules";
  return (
  <Stack gap={16}>
    <Demo label="Usage guidelines">
      <Stack gap={12}>
        <T size="small" weight="semibold" style={font()}>
          {usageTitle}
        </T>
        <GuidelineList items={[...props.usageWhen]} />
        {props.usageNote ? (
          <T size="small" tone="secondary" style={font({ marginTop: 4 })}>
            {props.usageNote}
          </T>
        ) : null}
      </Stack>
    </Demo>
    {props.commonUseCases && props.commonUseCases.length > 0 ? (
      <Demo label="Common use cases">
        <GuidelineList items={[...props.commonUseCases]} />
      </Demo>
    ) : null}
    {props.structure && props.structure.length > 0 ? (
      <Demo label="Structure">
        <Stack gap={12}>
          <T size="small" weight="semibold" style={font()}>
            {props.structureIntro ?? "An item may include:"}
          </T>
          <GuidelineList items={[...props.structure]} />
        </Stack>
      </Demo>
    ) : null}
    {props.states && props.states.length > 0 ? (
      <Demo label="States">
        <GuidelineList items={[...props.states]} />
      </Demo>
    ) : null}
    {props.bestPractices && props.bestPractices.length > 0 ? (
      <Demo label="Best practices">
        <GuidelineList items={[...props.bestPractices]} />
      </Demo>
    ) : null}
    {props.behaviorRules && props.behaviorRules.length > 0 ? (
    <Demo label={behaviorTitle}>
      <GuidelineList items={[...props.behaviorRules]} />
    </Demo>
    ) : null}
    {props.examples.length > 0 ? (
      <Demo label="Example structure">
        <Stack gap={8}>
          {props.examples.map((ex) => (
            <div
              key={ex}
              style={{
                padding: "10px 12px",
                borderRadius: 8,
                border: `1px solid ${LIGHT_BORDER}`,
                background: LIGHT_CANVAS,
              }}
            >
              <T size="small" style={font()}>
                {ex}
              </T>
            </div>
          ))}
        </Stack>
      </Demo>
    ) : null}
  </Stack>
  );
}

function BreadcrumbTrail(props: { items: string[]; onNavigate?: (index: number) => void }) {
  const last = props.items.length - 1;
  return (
    <Row gap={6} align="center" wrap>
      {props.items.map((label, i) => {
        const current = i === last;
        const clickable = !current && props.onNavigate;
        return (
          <div key={`${label}-${i}`}>
            <Row gap={6} align="center">
            <div
              onClick={clickable ? () => props.onNavigate?.(i) : undefined}
              style={font({
                fontSize: 13,
                fontWeight: current ? 600 : 400,
                color: current ? BRAND.primary : LT.secondary,
                cursor: clickable ? "pointer" : "default",
                textDecoration: "none",
              })}
            >
              {label}
            </div>
            {i < last ? (
              <T size="small" tone="quaternary" style={font({ userSelect: "none" })}>
                /
              </T>
            ) : null}
            </Row>
          </div>
        );
      })}
    </Row>
  );
}

function GuidelineList(props: { items: string[] }) {
  return (
    <Stack gap={8}>
      {props.items.map((item) => (
        <div key={item}>
          <Row gap={8} align="start">
          <T size="small" style={font({ color: BRAND.primary, lineHeight: "20px", marginTop: 1 })}>
            •
          </T>
          <T size="small" tone="secondary" style={font({ lineHeight: "20px" })}>
            {item}
          </T>
          </Row>
        </div>
      ))}
    </Stack>
  );
}

function BreadcrumbsPage() {
  const [example, setExample] = useCanvasState("bc-example", 0);
  const examples = [
    { label: "To Do List → Task Details", items: ["Home", "To Do List", "Task Details"] },
    { label: "My Tasks → Edit", items: ["Home", "My Tasks", "Task Details", "Edit"] },
    { label: "Report → Summary", items: ["Home", "Report", "Summary"] },
  ];
  const active = examples[example] ?? examples[0];

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Breadcrumbs"
        title="Breadcrumbs"
        description="Hierarchy trail placed below the header. Shows structure, not click history. Last item is the current page."
      />

      <ComponentGuidelines {...COMPONENT_SPECS.breadcrumbs} />

      <Demo label="Live example — current page is not clickable">
        <Stack gap={12}>
          <Row gap={8} wrap>
            {examples.map((ex, i) => (
              <div
                key={ex.label}
                onClick={() => setExample(i)}
                style={font({
                  padding: "6px 10px",
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: example === i ? 600 : 500,
                  cursor: "pointer",
                  background: example === i ? BRAND.primarySoft : "transparent",
                  color: example === i ? BRAND.primary : LT.secondary,
                  border: `1px solid ${example === i ? BRAND.primary : LIGHT_BORDER}`,
                })}
              >
                {ex.label}
              </div>
            ))}
          </Row>
          <div
            style={{
              padding: "12px 14px",
              borderRadius: 8,
              border: `1px solid ${LIGHT_BORDER}`,
              background: LIGHT_CANVAS,
            }}
          >
            <BreadcrumbTrail items={active.items} onNavigate={() => undefined} />
          </div>
          <T size="small" tone="tertiary" style={font()}>
            Clickable: {active.items.slice(0, -1).join(" · ")} — Current page: {active.items[active.items.length - 1]}
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

function PaginationPage() {
  const [page, setPage] = useCanvasState("pg", 3);
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Pagination" title="Pagination" description="Active page uses primary fill." />
      <ComponentGuidelines {...COMPONENT_SPECS.pagination} />
      <Demo label="Live demo">
        <Row gap={6} wrap>
          {[1, 2, 3, 4, 5].map((p) => (
            <div key={String(p)} onClick={() => setPage(p)} style={font({ minWidth: 32, height: 32, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 8, fontSize: 13, fontWeight: p === page ? 600 : 400, cursor: "pointer", background: p === page ? BRAND.primary : "transparent", color: p === page ? "#FFF" : LT.primary, border: p === page ? "none" : `1px solid ${BRAND.border}` })}>{p}</div>
          ))}
        </Row>
        <T size="small" tone="tertiary" style={font({ marginTop: 12 })}>Page {page} of 5</T>
      </Demo>
    </Stack>
  );
}

function StepperCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 7L6 10L11 4"
        stroke={VIRYA.stepper.iconComplete}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StepperPage() {
  const [step, setStep] = useCanvasState("step", 2);
  const steps = ["Details", "Review", "Payment", "Done"];
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Stepper" title="Stepper" description="Multi-step flow. Completed steps show a tick; current step shows the number." />
      <ComponentGuidelines {...COMPONENT_SPECS.stepper} />
      <Demo label="Live demo">
        <Row gap={0} align="center" style={{ width: "100%" }}>
          {steps.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const current = n === step;
            return (
              <div key={label} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : undefined }}>
                <Stack gap={6} style={{ alignItems: "center", cursor: "pointer" }}>
                  <div
                    onClick={() => setStep(n)}
                    style={font({
                      width: 28,
                      height: 28,
                      borderRadius: 9999,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 600,
                      background: done || current ? VIRYA.stepper.surfaceActive : "transparent",
                      color: done || current ? VIRYA.stepper.textActive : VIRYA.stepper.textDefault,
                      border: done || current ? "none" : `1.5px solid ${BRAND.border}`,
                    })}
                  >
                    {done ? <StepperCheckIcon /> : n}
                  </div>
                  <T size="small" weight={current ? "semibold" : "normal"} style={font({ color: current || done ? BRAND.primary : LT.tertiary })}>{label}</T>
                </Stack>
                {i < steps.length - 1 ? <div style={{ flex: 1, height: 2, margin: "0 8px 22px", background: n < step ? BRAND.primary : BRAND.border, minWidth: 16 }} /> : null}
              </div>
            );
          })}
        </Row>
      </Demo>
    </Stack>
  );
}

function TabPage() {
  const [tab, setTab] = useCanvasState("tab", "Overview");
  const tabs = ["Overview", "Activity", "Settings"];
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Tab" title="Tab" description="Active tab has primary underline and semibold label." />
      <ComponentGuidelines {...COMPONENT_SPECS.tab} />
      <Demo label="Live demo">
        <Stack gap={12}>
          <Row gap={0} style={{ borderBottom: `1px solid ${LIGHT_BORDER}` }}>
            {tabs.map((t) => {
              const active = t === tab;
              return (
                <div key={t} onClick={() => setTab(t)} style={font({ padding: "10px 16px", fontSize: 14, fontWeight: active ? 600 : 400, color: active ? BRAND.primary : LT.secondary, borderBottom: active ? `2px solid ${BRAND.primary}` : "2px solid transparent", marginBottom: -1, cursor: "pointer" })}>{t}</div>
              );
            })}
          </Row>
          <T size="small" tone="secondary" style={font()}>Active panel: {tab}</T>
        </Stack>
      </Demo>
    </Stack>
  );
}

function TooltipPage() {
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Tooltips" title="Tooltips" description="Short contextual hints. Prefer dark tip on controls." />
      <ComponentGuidelines {...COMPONENT_SPECS.tooltip} />
      <Demo label="Live demo">
        <Row gap={32} justify="center" style={{ padding: 24 }}>
          <Stack gap={8} style={{ alignItems: "center" }}>
            <div style={font({ background: BRAND.ink, color: "#FFF", padding: "6px 10px", borderRadius: 6, fontSize: 12 })}>Save changes</div>
            <SpecBtn style="fill" state="enable" label="Hover me" />
            <T size="small" tone="tertiary" style={font()}>Top</T>
          </Stack>
        </Row>
      </Demo>
    </Stack>
  );
}

function SnackbarIcon(props: { kind: "success" | "error" | "info" | "warning" }) {
  const color = VIRYA.snackbar[props.kind].icon;
  const onFill = VIRYA.btn.textOnFill;
  if (props.kind === "success") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill={color} />
        <path d="M6 10.2L8.6 12.8L14 7.4" stroke={onFill} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (props.kind === "error") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill={color} />
        <path d="M7 7L13 13M13 7L7 13" stroke={onFill} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (props.kind === "info") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="10" fill={color} />
        <circle cx="10" cy="6.2" r="1.1" fill={onFill} />
        <path d="M10 9.2V14.2" stroke={onFill} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 1.5L18.5 17.5H1.5L10 1.5Z" fill={color} />
      <path d="M10 7.5V11.5" stroke={onFill} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10" cy="14.2" r="1.1" fill={onFill} />
    </svg>
  );
}

function SnackbarCloseIcon(props: { onClick?: () => void }) {
  const color = VIRYA.snackbar.iconDefault;
  return (
    <div
      onClick={props.onClick}
      style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
      title="Close"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M4 4L12 12M12 4L4 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function SnackbarBar(props: {
  kind: "success" | "error" | "info" | "warning";
  message: string;
  onClose?: () => void;
  positioned?: boolean;
}) {
  const tokens = VIRYA.snackbar[props.kind];
  return (
    <div
      style={font({
        ...(props.positioned
          ? {
              position: "absolute",
              top: 16,
              right: 16,
              zIndex: 50,
            }
          : {}),
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 16px",
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${tokens.border}`,
        background: tokens.surface,
        color: VIRYA.snackbar.text,
        width: 380,
        boxSizing: "border-box",
        fontSize: 14,
      })}
    >
      <div style={{ display: "flex", flexShrink: 0 }}>
        <SnackbarIcon kind={props.kind} />
      </div>
      <span style={{ flex: 1, minWidth: 0 }}>{props.message}</span>
      <SnackbarCloseIcon onClick={props.onClose} />
    </div>
  );
}

function SnackbarPage() {
  const [active, setActive] = useCanvasState<string | null>("snackbar-active-v2", "success");

  const items = [
    { id: "success", kind: "success" as const, message: "Invite sent successfully" },
    { id: "error", kind: "error" as const, message: "Upload failed. Please try again." },
    { id: "info", kind: "info" as const, message: "Draft saved" },
    { id: "warning", kind: "warning" as const, message: "Session expires in 5 minutes" },
  ];

  const current = items.find((item) => item.id === active) ?? null;

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Snackbar"
        title="Snackbar"
        description="Transient toast feedback — top-right, 380px wide, with a variant-specific leading icon."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.snackbar} />
      <Demo label="Live demo — top-right · 380px">
        <Stack gap={12}>
          <Row gap={8} wrap>
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActive(item.id)}
                style={font({
                  padding: "6px 12px",
                  borderRadius: VIRYA.radiusSm,
                  fontSize: 12,
                  fontWeight: active === item.id ? 600 : 500,
                  cursor: "pointer",
                  background: active === item.id ? VIRYA.primarySoft : VIRYA.surface,
                  color: active === item.id ? BRAND.primary : VIRYA.textSecondary,
                  border: `1px solid ${active === item.id ? BRAND.primary : VIRYA.border}`,
                })}
              >
                {item.kind}
              </div>
            ))}
          </Row>
          <div
            style={{
              position: "relative",
              height: 160,
              borderRadius: VIRYA.radiusMd,
              border: `1px solid ${VIRYA.border}`,
              background: VIRYA.canvas,
              overflow: "hidden",
            }}
          >
            <div
              style={font({
                position: "absolute",
                left: 16,
                bottom: 16,
                fontSize: 12,
                color: VIRYA.textSecondary,
              })}
            >
              Product frame — toast anchors top-right
            </div>
            {current ? (
              <SnackbarBar
                positioned
                kind={current.kind}
                message={current.message}
                onClose={() => setActive(null)}
              />
            ) : (
              <div
                onClick={() => setActive("success")}
                style={font({
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: BRAND.primary,
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                })}
              >
                Show toast
              </div>
            )}
          </div>
        </Stack>
      </Demo>
    </Stack>
  );
}

function PopupCloseButton(props: { onClick?: () => void }) {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 28,
        height: 28,
        cursor: "pointer",
        flexShrink: 0,
      }}
      title="Close"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M4 4L12 12M12 4L4 12"
          stroke={VIRYA.snackbar.iconDefault}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function PopupAlertIcon(props: { kind: "success" | "error" | "info" | "warning" }) {
  const tokens = VIRYA.snackbar[props.kind];
  const icon = tokens.icon;
  const surface = tokens.surface;

  let iconMarkup = null;
  if (props.kind === "success") {
    iconMarkup = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={icon} strokeWidth="1.8" />
        <path d="M8 12L11 15L16 9" stroke={icon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  } else if (props.kind === "error") {
    iconMarkup = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={icon} strokeWidth="1.8" />
        <path d="M9 9L15 15M15 9L9 15" stroke={icon} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  } else if (props.kind === "info") {
    iconMarkup = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={icon} strokeWidth="1.8" />
        <path d="M12 10V15" stroke={icon} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="7.5" r="1" fill={icon} />
      </svg>
    );
  } else {
    iconMarkup = (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5L20.5 19.5H3.5L12 4.5Z" stroke={icon} strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 10.5V14.5" stroke={icon} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill={icon} />
      </svg>
    );
  }

  return (
    <div
      style={{
        width: 56,
        height: 56,
        borderRadius: 9999,
        background: surface,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconMarkup}
    </div>
  );
}

function PopupActionButton(props: {
  variant: "secondary" | "primary";
  label: string;
  destructive?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  const isPrimary = props.variant === "primary";
  const enabled = !props.disabled;
  let background: string = VIRYA.btn.neutralBg;
  let color: string = VIRYA.btn.neutralText;
  let border: string = `1px solid ${VIRYA.btn.neutralBorder}`;

  if (isPrimary) {
    if (!enabled) {
      background = VIRYA.btn.disabledBg;
      color = VIRYA.btn.disabledText;
      border = "1px solid transparent";
    } else if (props.destructive) {
      background = VIRYA.btn.secondaryEnable;
      color = VIRYA.btn.textOnFill;
      border = "1px solid transparent";
    } else {
      background = VIRYA.btn.primaryEnable;
      color = VIRYA.btn.textOnFill;
      border = "1px solid transparent";
    }
  }

  return (
    <div
      onClick={enabled ? props.onClick : undefined}
      style={font({
        padding: "8px 16px",
        borderRadius: VIRYA.radiusMd,
        background,
        color,
        border,
        fontWeight: 600,
        fontSize: 14,
        textAlign: "center",
        cursor: enabled ? "pointer" : "not-allowed",
        boxSizing: "border-box",
        minWidth: 96,
        opacity: enabled ? 1 : 0.7,
        width: props.fullWidth ? "100%" : undefined,
      })}
    >
      {props.label}
    </div>
  );
}

function PopupPage() {
  const DELETE_CONFIRM_PHRASE = "Delete Confirm";
  const popupExamples = [
    {
      id: "approve",
      trigger: "Approve request",
      title: "Approve request",
      message: "Confirm approval of this account request. Add remarks for the audit trail.",
      secondaryLabel: "Reject",
      primaryLabel: "Approve",
      destructive: false,
      requiresCaptcha: false,
      requiresRemarks: true,
      triggerStyle: { background: BRAND.primarySoft, color: BRAND.primary },
    },
    {
      id: "reject",
      trigger: "Reject request",
      title: "Reject request",
      message: "Confirm rejection of this account request. Remarks are required to explain the decision.",
      secondaryLabel: "Cancel",
      primaryLabel: "Reject",
      destructive: true,
      requiresCaptcha: false,
      requiresRemarks: true,
      triggerStyle: { background: BRAND.secondarySoft, color: BRAND.secondary },
    },
    {
      id: "delete",
      trigger: "Delete account",
      title: "Delete account",
      message: "This action cannot be undone. All your data will be permanently removed from the system.",
      secondaryLabel: "Cancel",
      primaryLabel: "Delete",
      destructive: true,
      requiresCaptcha: true,
      requiresRemarks: false,
      triggerStyle: { background: BRAND.secondarySoft, color: BRAND.secondary },
    },
    {
      id: "signout",
      trigger: "Sign out",
      title: "Sign out",
      message: "You will need to sign in again to access your account.",
      secondaryLabel: "Cancel",
      primaryLabel: "OK",
      destructive: false,
      requiresCaptcha: false,
      requiresRemarks: false,
      triggerStyle: { background: BRAND.primarySoft, color: BRAND.primary },
    },
    {
      id: "discard",
      trigger: "Discard changes",
      title: "Discard changes",
      message: "You have unsaved changes. Do you want to discard them?",
      secondaryLabel: "No",
      primaryLabel: "Yes",
      destructive: true,
      requiresCaptcha: false,
      requiresRemarks: false,
      triggerStyle: { background: LIGHT_SURFACE, color: LT.secondary, border: `1px solid ${LIGHT_BORDER}` },
    },
    {
      id: "leave",
      trigger: "Leave page",
      title: "Leave this page?",
      message: "Progress on this step will not be saved if you leave now.",
      secondaryLabel: "Back",
      primaryLabel: "Confirm",
      destructive: false,
      requiresCaptcha: false,
      requiresRemarks: false,
      triggerStyle: { background: LIGHT_SURFACE, color: BRAND.primary, border: `1px solid ${BRAND.primary}` },
    },
  ] as const;

  const [activeId, setActiveId] = useCanvasState("popup-active-id", "");
  const [lastAction, setLastAction] = useCanvasState("popup-last-action", "No action yet");
  const [deleteCaptcha, setDeleteCaptcha] = useCanvasState("popup-delete-captcha", "");
  const [remarks, setRemarks] = useCanvasState("popup-remarks", "");

  const active = popupExamples.find((item) => item.id === activeId);
  const open = Boolean(active);
  const remarksOk = !active?.requiresRemarks || remarks.trim().length > 0;
  const captchaOk = !active?.requiresCaptcha || deleteCaptcha === DELETE_CONFIRM_PHRASE;
  const canConfirm = remarksOk && captchaOk;

  const closePopup = () => {
    setActiveId("");
    setDeleteCaptcha("");
    setRemarks("");
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Popup"
        title="Popup"
        description="Two alert types — confirmation (dual action) and single-action (centered message with one button)."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.popupConfirmation} />
      <Demo label="Button label examples">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            Secondary and primary buttons align to the right. Secondary comes first, then primary.
          </T>
          {[
            { secondary: "Reject", primary: "Approve", destructive: false },
            { secondary: "Cancel", primary: "Delete", destructive: true },
            { secondary: "Cancel", primary: "OK", destructive: false },
            { secondary: "No", primary: "Yes", destructive: true },
            { secondary: "Back", primary: "Confirm", destructive: false },
          ].map((pair) => (
            <div
              key={`${pair.secondary}-${pair.primary}`}
              style={{
                padding: "12px 16px",
                borderRadius: VIRYA.radiusMd,
                border: `1px solid ${LIGHT_BORDER}`,
                background: LIGHT_SURFACE,
              }}
            >
              <Row gap={12} style={{ justifyContent: "flex-end" }}>
                <PopupActionButton variant="secondary" label={pair.secondary} />
                <PopupActionButton variant="primary" label={pair.primary} destructive={pair.destructive} />
              </Row>
            </div>
          ))}
        </Stack>
      </Demo>
      <Demo label="Live demo — Confirmation box">
        <div
          style={{
            position: "relative",
            minHeight: 420,
            borderRadius: VIRYA.radiusMd,
            border: `1px solid ${LIGHT_BORDER}`,
            background: LIGHT_CANVAS,
            overflow: "hidden",
          }}
        >
          <Stack
            gap={12}
            style={{
              padding: 20,
              opacity: open ? 0.35 : 1,
              pointerEvents: open ? "none" : "auto",
            }}
          >
            <T weight="semibold" style={font()}>Try confirmation examples</T>
            <T size="small" tone="secondary" style={font()}>
              Approve / Reject always include a Remarks textbox. Background is blocked while the popup is open.
            </T>
            <Row gap={8} wrap>
              {popupExamples.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setDeleteCaptcha("");
                    setRemarks("");
                    setActiveId(item.id);
                  }}
                  style={font({
                    display: "inline-flex",
                    padding: "8px 16px",
                    borderRadius: VIRYA.radiusMd,
                    fontWeight: 600,
                    fontSize: 14,
                    cursor: "pointer",
                    ...item.triggerStyle,
                  })}
                >
                  {item.trigger}
                </div>
              ))}
            </Row>
            <T size="small" tone="tertiary" style={font()}>{lastAction}</T>
          </Stack>
          {open && active ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: VIRYA.popup.overlay,
                padding: 24,
              }}
            >
              <div
                style={font({
                  width: "100%",
                  maxWidth: 440,
                  borderRadius: VIRYA.radiusLg,
                  border: `1px solid ${VIRYA.popup.border}`,
                  background: VIRYA.popup.surface,
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(8, 8, 8, 0.12)",
                })}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "16px 16px 12px",
                  }}
                >
                  <T weight="semibold" style={font({ fontSize: 18, color: VIRYA.popup.title })}>
                    {active.title}
                  </T>
                  <PopupCloseButton
                    onClick={() => {
                      closePopup();
                      setLastAction("Closed");
                    }}
                  />
                </div>
                <div style={{ height: 1, background: LIGHT_BORDER }} />
                <Stack gap={16} style={{ padding: "16px 16px 20px" }}>
                  <T size="small" style={font({ color: VIRYA.popup.text, lineHeight: "22px" })}>
                    {active.message}
                  </T>
                  {active.requiresRemarks ? (
                    <Stack gap={6}>
                      <FieldLabel required>Remarks</FieldLabel>
                      <textarea
                        value={remarks}
                        onChange={(e: { target: { value: string } }) => setRemarks(e.target.value)}
                        placeholder="Enter remarks for this decision…"
                        rows={3}
                        style={font({
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "8px 12px",
                          borderRadius: VIRYA.radiusMd,
                          border: `1px solid ${VIRYA.field.border}`,
                          background: VIRYA.field.surface,
                          color: VIRYA.field.text,
                          fontSize: 14,
                          resize: "vertical",
                          outline: "none",
                          minHeight: 72,
                        })}
                      />
                      <T size="small" tone="tertiary" style={font()}>
                        Remarks are required for Approve and Reject
                      </T>
                    </Stack>
                  ) : null}
                  {active.requiresCaptcha ? (
                    <Stack gap={6}>
                      <FieldLabel required>Delete Captcha</FieldLabel>
                      <input
                        value={deleteCaptcha}
                        onChange={(e: { target: { value: string } }) => setDeleteCaptcha(e.target.value)}
                        placeholder={`Type "${DELETE_CONFIRM_PHRASE}"`}
                        style={font({
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "8px 12px",
                          borderRadius: VIRYA.radiusMd,
                          border: `1px solid ${VIRYA.field.border}`,
                          background: VIRYA.field.surface,
                          color: VIRYA.field.text,
                          fontSize: 14,
                          outline: "none",
                        })}
                      />
                      <T size="small" tone="tertiary" style={font()}>
                        Type {DELETE_CONFIRM_PHRASE} to enable delete
                      </T>
                    </Stack>
                  ) : null}
                  <Row gap={12} style={{ justifyContent: "flex-end" }}>
                    <PopupActionButton
                      variant="secondary"
                      label={active.secondaryLabel}
                      disabled={active.requiresRemarks && active.secondaryLabel === "Reject" ? !remarksOk : false}
                      onClick={() => {
                        if (active.requiresRemarks && active.secondaryLabel === "Reject" && !remarksOk) return;
                        closePopup();
                        setLastAction(
                          active.requiresRemarks && remarks.trim()
                            ? `${active.secondaryLabel} — ${active.title} · Remarks: ${remarks.trim()}`
                            : `${active.secondaryLabel} — ${active.title}`,
                        );
                      }}
                    />
                    <PopupActionButton
                      variant="primary"
                      label={active.primaryLabel}
                      destructive={active.destructive}
                      disabled={!canConfirm}
                      onClick={() => {
                        if (!canConfirm) return;
                        closePopup();
                        setLastAction(
                          active.requiresRemarks && remarks.trim()
                            ? `${active.primaryLabel} — ${active.title} · Remarks: ${remarks.trim()}`
                            : `${active.primaryLabel} — ${active.title}`,
                        );
                      }}
                    />
                  </Row>
                </Stack>
              </div>
            </div>
          ) : null}
        </div>
      </Demo>

      <ComponentGuidelines {...COMPONENT_SPECS.popupSingle} />
      <Demo label="Live demo — Single-action alert">
        <SingleActionAlertDemo />
      </Demo>
    </Stack>
  );
}

function SingleActionAlertDemo() {
  const singleAlerts = [
    {
      id: "success",
      trigger: "Payment successful",
      kind: "success" as const,
      title: "Payment successful",
      message: "Your transaction has been completed successfully.",
      actionLabel: "OK",
      triggerStyle: { background: VIRYA.snackbar.success.surface, color: VIRYA.snackbar.success.icon },
    },
    {
      id: "warning",
      trigger: "Session expired",
      kind: "warning" as const,
      title: "Session expired",
      message: "Please sign in again to continue using the application.",
      actionLabel: "Sign in",
      triggerStyle: { background: VIRYA.snackbar.warning.surface, color: VIRYA.snackbar.warning.icon },
    },
    {
      id: "info",
      trigger: "Update available",
      kind: "info" as const,
      title: "Update available",
      message: "A new version is ready to install. Update now to get the latest features.",
      actionLabel: "Update now",
      triggerStyle: { background: VIRYA.snackbar.info.surface, color: VIRYA.snackbar.info.icon },
    },
    {
      id: "error",
      trigger: "Connection failed",
      kind: "error" as const,
      title: "Connection failed",
      message: "We could not reach the server. Check your network and try again.",
      actionLabel: "Retry",
      triggerStyle: { background: VIRYA.snackbar.error.surface, color: VIRYA.snackbar.error.icon },
    },
  ];

  const [activeId, setActiveId] = useCanvasState("popup-single-active-id", "");
  const [lastAction, setLastAction] = useCanvasState("popup-single-last-action", "No action yet");
  const active = singleAlerts.find((item) => item.id === activeId);
  const open = Boolean(active);

  const closePopup = (result: string) => {
    setActiveId("");
    setLastAction(result);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: 420,
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${LIGHT_BORDER}`,
        background: LIGHT_CANVAS,
        overflow: "hidden",
      }}
    >
      <Stack
        gap={12}
        style={{
          padding: 20,
          opacity: open ? 0.35 : 1,
          pointerEvents: open ? "none" : "auto",
        }}
      >
        <T weight="semibold" style={font()}>Try single-action alerts</T>
        <T size="small" tone="secondary" style={font()}>
          Centered layout with alert icon, title, message, and one action button.
        </T>
        <Row gap={8} wrap>
          {singleAlerts.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveId(item.id)}
              style={font({
                display: "inline-flex",
                padding: "8px 16px",
                borderRadius: VIRYA.radiusMd,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                ...item.triggerStyle,
              })}
            >
              {item.trigger}
            </div>
          ))}
        </Row>
        <T size="small" tone="tertiary" style={font()}>{lastAction}</T>
      </Stack>
      {open && active ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: VIRYA.popup.overlay,
            padding: 24,
          }}
        >
          <div
            style={font({
              position: "relative",
              width: "100%",
              maxWidth: 400,
              borderRadius: VIRYA.radiusLg,
              border: `1px solid ${VIRYA.popup.border}`,
              background: VIRYA.popup.surface,
              padding: "20px 20px 24px",
              boxShadow: "0 12px 40px rgba(8, 8, 8, 0.12)",
            })}
          >
            <div style={{ position: "absolute", top: 12, right: 12 }}>
              <PopupCloseButton onClick={() => closePopup("Closed")} />
            </div>
            <Stack gap={16} style={{ alignItems: "center", textAlign: "center", paddingTop: 8 }}>
              <PopupAlertIcon kind={active.kind} />
              <Stack gap={8} style={{ alignItems: "center" }}>
                <T weight="semibold" style={font({ fontSize: 18, color: VIRYA.popup.title })}>
                  {active.title}
                </T>
                <T size="small" style={font({ color: VIRYA.popup.text, lineHeight: "22px", maxWidth: 320 })}>
                  {active.message}
                </T>
              </Stack>
              <div style={{ width: "100%", paddingTop: 4 }}>
                <PopupActionButton
                  variant="primary"
                  label={active.actionLabel}
                  fullWidth
                  onClick={() => closePopup(`${active.actionLabel} — ${active.title}`)}
                />
              </div>
            </Stack>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ChipStatusDot(props: { color: string }) {
  return (
    <span
      style={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: props.color,
        flexShrink: 0,
      }}
    />
  );
}

function ChipCloseIcon(props: { color: string; onClick?: () => void }) {
  return (
    <span
      onClick={props.onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: props.onClick ? "pointer" : "default",
        lineHeight: 0,
        flexShrink: 0,
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M3 3L9 9M9 3L3 9" stroke={props.color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function ChipLeadingIcon(props: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
      <path
        d="M2.5 3.5H6.5L9.5 6.5V8.5H2.5V3.5Z"
        stroke={props.color}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <circle cx="4.25" cy="6" r="0.75" fill={props.color} />
    </svg>
  );
}

const CHIP_STATUS_VARIANTS = new Set(["success", "error", "info", "warning", "neutral"]);

function ChipTag(props: {
  label: string;
  variant: "success" | "error" | "info" | "warning" | "neutral" | "filled" | "soft" | "outline";
  leadingIcon?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}) {
  const base = font({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 10px",
    borderRadius: VIRYA.chip.radius,
    fontSize: VIRYA.chip.fontSize,
    fontWeight: VIRYA.chip.fontWeight,
    boxSizing: "border-box",
  });

  let style: CSSProperties = {};
  let iconColor: string = VIRYA.chip.neutral.icon;
  const isStatus = CHIP_STATUS_VARIANTS.has(props.variant);

  if (props.variant === "filled") {
    style = { background: VIRYA.chip.filled.surface, color: VIRYA.chip.filled.text, border: "1px solid transparent" };
    iconColor = VIRYA.chip.filled.icon;
  } else if (props.variant === "soft") {
    style = { background: VIRYA.chip.soft.surface, color: VIRYA.chip.soft.text, border: "1px solid transparent" };
    iconColor = VIRYA.chip.soft.icon;
  } else if (props.variant === "outline") {
    style = { background: "transparent", color: VIRYA.chip.outline.text, border: `1px solid ${VIRYA.chip.outline.border}` };
    iconColor = VIRYA.chip.outline.icon;
  } else {
    const tokens = VIRYA.chip[props.variant];
    style = { background: tokens.surface, color: tokens.text, border: "1px solid transparent" };
    iconColor = tokens.icon;
  }

  return (
    <span style={mergeStyle(base, style)}>
      {isStatus ? <ChipStatusDot color={iconColor} /> : null}
      {!isStatus && props.leadingIcon ? <ChipLeadingIcon color={iconColor} /> : null}
      {props.label}
      {props.removable ? <ChipCloseIcon color={iconColor} onClick={props.onRemove} /> : null}
    </span>
  );
}

function ChipPage() {
  const [chips, setChips] = useCanvasState("chips", ["Design", "Virya", "Poppins"]);
  return (
    <Stack gap={24}>
      <PageHeader eyebrow="Components · Chip" title="Chip / Tag" description="Compact labels using chipTag tokens from viryavariable.json." />
      <ComponentGuidelines {...COMPONENT_SPECS.chip} />
      <Demo label="Live demo — status variants">
        <Row gap={8} wrap>
          <ChipTag label="Success" variant="success" />
          <ChipTag label="Error" variant="error" />
          <ChipTag label="Info" variant="info" />
          <ChipTag label="Warning" variant="warning" />
          <ChipTag label="Neutral" variant="neutral" />
          <ChipTag label="Overdue" variant="warning" />
        </Row>
      </Demo>
      <Demo label="Live demo — style variants">
        <Row gap={8} wrap>
          <ChipTag label="Filled" variant="filled" leadingIcon />
          <ChipTag label="Soft" variant="soft" leadingIcon />
          <ChipTag label="Outline" variant="outline" leadingIcon />
        </Row>
      </Demo>
      <Demo label="Removable">
        <Row gap={8} wrap>
          {chips.map((c) => (
            <div key={c}>
              <ChipTag
                label={c}
                variant="soft"
                leadingIcon
                removable
                onRemove={() => setChips(chips.filter((x) => x !== c))}
              />
            </div>
          ))}
        </Row>
        {chips.length < 3 ? (
          <div onClick={() => setChips(["Design", "Virya", "Poppins"])} style={font({ marginTop: 10, color: VIRYA.chip.soft.text, fontSize: VIRYA.chip.fontSize, fontWeight: VIRYA.chip.fontWeight, cursor: "pointer" })}>Restore chips</div>
        ) : null}
      </Demo>
    </Stack>
  );
}

type TableColumnAlign = "left" | "center" | "right";

function tableCellStyle(align: TableColumnAlign, isHeader = false): CSSProperties {
  return font({
    padding: "10px 12px",
    textAlign: align,
    fontSize: isHeader ? 12 : 14,
    fontWeight: isHeader ? 600 : 400,
    color: isHeader ? VIRYA.table.headerText : VIRYA.table.cellText,
    verticalAlign: "middle",
    whiteSpace: "nowrap",
  });
}

function TableRowCheckbox(props: { checked: boolean; onChange: () => void }) {
  return (
    <div
      onClick={props.onChange}
      style={{
        width: 18,
        height: 18,
        margin: "0 auto",
        borderRadius: 4,
        border: `1.5px solid ${props.checked ? BRAND.primary : BRAND.border}`,
        background: props.checked ? BRAND.primary : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {props.checked ? (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2.5 6.2L4.8 8.5L9.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : null}
    </div>
  );
}

function TableTrendIcon(props: { direction: "up" | "down" }) {
  const color = props.direction === "up" ? VIRYA.success : VIRYA.critical;
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
      {props.direction === "up" ? (
        <path d="M7 3.5L10.5 8H3.5L7 3.5Z" fill={color} />
      ) : (
        <path d="M7 10.5L3.5 6H10.5L7 10.5Z" fill={color} />
      )}
    </svg>
  );
}

function TableAmountCell(props: { amount: number; trend?: "up" | "down" | "default" }) {
  const trend = props.trend ?? "default";
  const formatted = `${Math.abs(props.amount).toLocaleString()} MMK`;

  if (trend === "default") {
    return (
      <span style={font({ color: VIRYA.table.cellText, fontVariantNumeric: "tabular-nums", fontFamily: "monospace", letterSpacing: "0.02em" })}>
        {formatted}
      </span>
    );
  }

  const color = trend === "up" ? VIRYA.success : VIRYA.critical;
  const prefix = trend === "up" ? "+" : "−";
  return (
    <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "flex-end", gap: 6, width: "100%" }}>
      <TableTrendIcon direction={trend} />
      <span style={font({ color, fontVariantNumeric: "tabular-nums", fontFamily: "monospace", letterSpacing: "0.02em" })}>
        {prefix}{formatted}
      </span>
    </div>
  );
}

function TableTextActionButton(props: {
  label: string;
  variant?: "text" | "stroke" | "accent";
  onClick?: () => void;
}) {
  const variant = props.variant ?? "text";
  let style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: variant === "text" ? "6px 4px" : "6px 12px",
    borderRadius: VIRYA.radiusMd,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    flexShrink: 0,
  };

  if (variant === "text") {
    style = mergeStyle(style, { background: "transparent", border: "1px solid transparent", color: BRAND.primary });
  } else if (variant === "stroke") {
    style = mergeStyle(style, { background: "transparent", border: `1px solid ${BRAND.primary}`, color: BRAND.primary });
  } else {
    style = mergeStyle(style, { background: "transparent", border: `1px solid ${VIRYA.secondary}`, color: VIRYA.secondary });
  }

  return (
    <div onClick={props.onClick} style={font(style)}>
      {props.label}
    </div>
  );
}

const DEMO_TABLE_ROWS = [
  { id: "1", customer: "Kaung Myat Hein", refNo: "001042", amount: 12500, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "2", customer: "KBZ Retail Account", refNo: "002088", amount: 3200, trend: "down" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "3", customer: "Acme Corporation", refNo: "003091", amount: 850, trend: "default" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "4", customer: "Sunrise Trading", refNo: "004517", amount: 48000, trend: "default" as const, status: "error" as const, statusLabel: "Overdue" },
] as const;

function TablePage() {
  const [, setDsPage] = useCanvasState<PageId>("ds-page-v8", "overview");
  const [, setDetailsRecordId] = useCanvasState<string>("details-record-id", DETAILS_SAMPLE.id);
  const [selected, setSelected] = useCanvasState<string[]>("table-selected", []);
  const [lastAction, setLastAction] = useCanvasState("table-last-action", "Select rows to apply bulk actions");
  const [detailId, setDetailId] = useCanvasState<string | null>("table-detail-id", null);

  const detailRow = DEMO_TABLE_ROWS.find((r) => r.id === detailId) ?? null;
  const allSelected = selected.length === DEMO_TABLE_ROWS.length;
  const toggleAll = () => {
    if (allSelected) {
      setSelected([]);
      setLastAction("Cleared all selections");
    } else {
      setSelected(DEMO_TABLE_ROWS.map((r) => r.id));
      setLastAction(`Selected all ${DEMO_TABLE_ROWS.length} rows`);
    }
  };

  const toggleRow = (id: string) => {
    const next = selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id];
    setSelected(next);
    setLastAction(next.length ? `${next.length} row(s) selected` : "Cleared selection");
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Table"
        title="Table"
        description="Column types with matching header and cell alignment — text, number, amount, status, action, and checkbox."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.table} />

      <Demo label="Live demo — column types and alignment">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>
            {lastAction}
          </T>
          {detailRow ? (
            <div
              style={font({
                borderRadius: VIRYA.radiusMd,
                border: `1px solid ${VIRYA.table.border}`,
                background: VIRYA.surface,
                padding: 20,
              })}
            >
              <Stack gap={16}>
                <div
                  onClick={() => {
                    setDetailId(null);
                    setLastAction("Returned to table list");
                  }}
                  style={font({ color: BRAND.primary, fontSize: 13, fontWeight: 600, cursor: "pointer", width: "fit-content" })}
                >
                  ← Back to list
                </div>
                <Stack gap={4}>
                  <T weight="semibold" style={font({ fontSize: 18, color: LT.primary })}>{detailRow.customer}</T>
                  <T size="small" tone="secondary" style={font()}>Ref no. {detailRow.refNo}</T>
                </Stack>
                <Row gap={24} wrap>
                  <Stack gap={4}>
                    <T size="small" tone="tertiary" style={font()}>Amount</T>
                    <TableAmountCell amount={detailRow.amount} trend={detailRow.trend} />
                  </Stack>
                  <Stack gap={4}>
                    <T size="small" tone="tertiary" style={font()}>Status</T>
                    <ChipTag label={detailRow.statusLabel} variant={detailRow.status} />
                  </Stack>
                </Row>
                <T size="small" tone="secondary" style={font()}>
                  Edit and Delete live on the details page — not in the table row.
                </T>
                <Row gap={8}>
                  <TableTextActionButton
                    label="Edit"
                    variant="stroke"
                    onClick={() => setLastAction(`Edit — ${detailRow.customer}`)}
                  />
                  <TableTextActionButton
                    label="Delete"
                    variant="accent"
                    onClick={() => setLastAction(`Delete — ${detailRow.customer}`)}
                  />
                </Row>
              </Stack>
            </div>
          ) : (
          <div style={{ overflowX: "auto", borderRadius: VIRYA.radiusMd, border: `1px solid ${VIRYA.table.border}` }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760, background: VIRYA.surface }}>
              <thead>
                <tr style={{ background: VIRYA.table.headerBg }}>
                  <th style={tableCellStyle("center", true)}>
                    <TableRowCheckbox checked={allSelected} onChange={toggleAll} />
                  </th>
                  <th style={tableCellStyle("left", true)}>Customer</th>
                  <th style={tableCellStyle("right", true)}>Ref no.</th>
                  <th style={tableCellStyle("right", true)}>Amount</th>
                  <th style={tableCellStyle("center", true)}>Status</th>
                  <th style={tableCellStyle("center", true)}>Action</th>
                </tr>
              </thead>
              <tbody>
                {DEMO_TABLE_ROWS.map((row) => {
                  const isSelected = selected.includes(row.id);
                  return (
                    <tr
                      key={row.id}
                      style={{ background: isSelected ? VIRYA.primaryMinimal : "transparent" }}
                      onMouseEnter={(e: { currentTarget: HTMLElement }) => {
                        if (!isSelected) e.currentTarget.style.background = VIRYA.table.rowHover;
                      }}
                      onMouseLeave={(e: { currentTarget: HTMLElement }) => {
                        e.currentTarget.style.background = isSelected ? VIRYA.primaryMinimal : "transparent";
                      }}
                    >
                      <td style={tableCellStyle("center")}>
                        <TableRowCheckbox checked={isSelected} onChange={() => toggleRow(row.id)} />
                      </td>
                      <td style={tableCellStyle("left")}>
                        <T size="small" style={font({ color: LT.primary })}>{row.customer}</T>
                      </td>
                      <td style={mergeStyle(tableCellStyle("right"), { fontFamily: "monospace", fontVariantNumeric: "tabular-nums" })}>
                        {row.refNo}
                      </td>
                      <td style={tableCellStyle("right")}>
                        <TableAmountCell amount={row.amount} trend={row.trend} />
                      </td>
                      <td style={tableCellStyle("center")}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <ChipTag label={row.statusLabel} variant={row.status} />
                        </div>
                      </td>
                      <td style={tableCellStyle("center")}>
                        <TableTextActionButton
                          label="View details"
                          onClick={() => {
                            setDetailsRecordId(row.id);
                            setDsPage("details");
                            setLastAction(`Opened details — ${row.customer}`);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          )}
          <T size="small" tone="tertiary" style={font()}>
            Amount: default text unless changed (↑/↓) · Action: text-only View details · Edit/Delete on details page
          </T>
        </Stack>
      </Demo>
      <Demo label="Related pattern">
        <Stack gap={8}>
          <T size="small" tone="secondary" style={font()}>
            Column types above are used inside the full listing page layout (app header, left nav, search, pagination).
          </T>
          <div
            onClick={() => setDsPage("listing")}
            style={font({
              color: BRAND.primary,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              width: "fit-content",
            })}
          >
            Open Listing page →
          </div>
        </Stack>
      </Demo>
    </Stack>
  );
}

const LISTING_TABLE_ROWS = [
  ...DEMO_TABLE_ROWS,
  { id: "5", customer: "Golden Land Co.", refNo: "005221", amount: 15600, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "6", customer: "River Trade Ltd.", refNo: "006334", amount: 920, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "7", customer: "Myanmar Express", refNo: "007445", amount: 22400, trend: "down" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "8", customer: "City Mart Group", refNo: "008556", amount: 6700, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "9", customer: "Shwe Taung Inc.", refNo: "009667", amount: 4100, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "10", customer: "Pacific Holdings", refNo: "010778", amount: 89000, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "11", customer: "Union Finance", refNo: "011889", amount: 1800, trend: "down" as const, status: "error" as const, statusLabel: "Overdue" },
  { id: "12", customer: "Lotus Services", refNo: "012990", amount: 5400, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "13", customer: "Ayeyarwady Bank", refNo: "013101", amount: 31200, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "14", customer: "Delta Logistics", refNo: "014212", amount: 7800, trend: "default" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "15", customer: "Horizon Retail", refNo: "015323", amount: 14500, trend: "down" as const, status: "info" as const, statusLabel: "Review" },
  { id: "16", customer: "Mandalay Trading", refNo: "016434", amount: 9800, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "17", customer: "Irrawaddy Foods", refNo: "017545", amount: 2200, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "18", customer: "Yangon Motors", refNo: "018656", amount: 45600, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "19", customer: "Bago Agro Co.", refNo: "019767", amount: 6100, trend: "down" as const, status: "error" as const, statusLabel: "Overdue" },
  { id: "20", customer: "Sagaing Textiles", refNo: "020878", amount: 13400, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "21", customer: "Naypyitaw Services", refNo: "021989", amount: 8700, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "22", customer: "Magway Energy", refNo: "022090", amount: 52000, trend: "default" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "23", customer: "Tanintharyi Oil", refNo: "023101", amount: 2900, trend: "down" as const, status: "success" as const, statusLabel: "Active" },
  { id: "24", customer: "Shan Highlands", refNo: "024212", amount: 16800, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "25", customer: "Kayin Commerce", refNo: "025323", amount: 4300, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "26", customer: "Mon Seafood", refNo: "026434", amount: 11200, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "27", customer: "Rakhine Ports", refNo: "027545", amount: 27500, trend: "down" as const, status: "error" as const, statusLabel: "Overdue" },
  { id: "28", customer: "Chin Highlands Co.", refNo: "028656", amount: 3600, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "29", customer: "Kachin Timber", refNo: "029767", amount: 19800, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "30", customer: "Kayah Minerals", refNo: "030878", amount: 8400, trend: "default" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "31", customer: "Pathein Rice Mill", refNo: "031989", amount: 5600, trend: "down" as const, status: "success" as const, statusLabel: "Active" },
  { id: "32", customer: "Pyay Hardware", refNo: "032090", amount: 9100, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "33", customer: "Taunggyi Markets", refNo: "033101", amount: 12400, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "34", customer: "Mawlamyine Trade", refNo: "034212", amount: 17800, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "35", customer: "Sittwe Shipping", refNo: "035323", amount: 6400, trend: "down" as const, status: "error" as const, statusLabel: "Overdue" },
  { id: "36", customer: "Myitkyina Freight", refNo: "036434", amount: 15200, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "37", customer: "Hpa-An Crafts", refNo: "037545", amount: 2800, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "38", customer: "Loikaw Supplies", refNo: "038656", amount: 7300, trend: "default" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "39", customer: "Hakha Services", refNo: "039767", amount: 4100, trend: "down" as const, status: "success" as const, statusLabel: "Active" },
  { id: "40", customer: "Dawei Coastal", refNo: "040878", amount: 21500, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "41", customer: "Bhamo Trading", refNo: "041989", amount: 9800, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "42", customer: "Kalaw Resorts", refNo: "042090", amount: 33600, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
  { id: "43", customer: "Pyin Oo Lwin Co.", refNo: "043101", amount: 12700, trend: "down" as const, status: "error" as const, statusLabel: "Overdue" },
  { id: "44", customer: "Meiktila Motors", refNo: "044212", amount: 5900, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "45", customer: "Pakokku Grain", refNo: "045323", amount: 8600, trend: "up" as const, status: "success" as const, statusLabel: "Active" },
  { id: "46", customer: "Thandwe Hotels", refNo: "046434", amount: 24900, trend: "default" as const, status: "warning" as const, statusLabel: "Pending" },
  { id: "47", customer: "Lashio Commerce", refNo: "047545", amount: 7200, trend: "down" as const, status: "success" as const, statusLabel: "Active" },
  { id: "48", customer: "Monywa Textiles", refNo: "048656", amount: 16300, trend: "default" as const, status: "info" as const, statusLabel: "Review" },
  { id: "49", customer: "Hinthada Mills", refNo: "049767", amount: 4500, trend: "up" as const, status: "neutral" as const, statusLabel: "Inactive" },
  { id: "50", customer: "Thanlyin Port Co.", refNo: "050878", amount: 58200, trend: "default" as const, status: "success" as const, statusLabel: "Active" },
] as const;

/** Listing footer pagination shows at most 5 page steps with Prev / Next. */
function listingVisiblePages(page: number, totalPages: number, maxSteps = 5): number[] {
  const total = Math.max(1, totalPages);
  const steps = Math.min(maxSteps, total);
  if (total <= steps) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  let start = Math.max(1, page - Math.floor(steps / 2));
  let end = start + steps - 1;
  if (end > total) {
    end = total;
    start = end - steps + 1;
  }
  return Array.from({ length: steps }, (_, i) => start + i);
}

function ListingTableFooter(props: {
  page: number;
  totalPages: number;
  rowsPerPage: number;
  totalRows: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange?: (n: number) => void;
  showRowsPerPage?: boolean;
  recordsLabel?: string;
}) {
  const pages = listingVisiblePages(props.page, props.totalPages, 5);
  const showRows = props.showRowsPerPage !== false && Boolean(props.onRowsPerPageChange);
  const canPrev = props.page > 1;
  const canNext = props.page < props.totalPages;
  return (
    <div
      style={font({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
        width: "100%",
        minWidth: 0,
        boxSizing: "border-box",
        padding: "12px 16px",
        borderTop: `1px solid ${VIRYA.table.border}`,
        background: VIRYA.table.headerBg,
        borderBottomLeftRadius: VIRYA.radiusMd,
        borderBottomRightRadius: VIRYA.radiusMd,
      })}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "fit-content",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        {showRows ? (
          <>
            <T size="small" tone="secondary" style={font()}>Rows per page</T>
            <select
              value={props.rowsPerPage}
              onChange={(e: { target: { value: string } }) => props.onRowsPerPageChange?.(Number(e.target.value))}
              style={font({
                padding: "4px 8px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${VIRYA.border}`,
                background: VIRYA.surface,
                fontSize: 13,
                color: LT.primary,
              })}
            >
              {[10, 20, 50].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </>
        ) : null}
        <T size="small" tone="tertiary" style={font()}>
          {props.recordsLabel ?? `${props.totalRows} records`}
        </T>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          width: "fit-content",
          flexShrink: 0,
          marginLeft: "auto",
        }}
      >
        <div
          onClick={() => {
            if (canPrev) props.onPageChange(props.page - 1);
          }}
          style={font({
            padding: "4px 10px",
            fontSize: 13,
            fontWeight: 500,
            cursor: canPrev ? "pointer" : "default",
            color: canPrev ? BRAND.primary : LT.tertiary,
            userSelect: "none",
          })}
        >
          ← Prev
        </div>
        {pages.map((p) => {
          const current = p === props.page;
          return (
            <div
              key={p}
              onClick={() => props.onPageChange(p)}
              style={font({
                minWidth: 32,
                height: 32,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: VIRYA.radiusMd,
                fontSize: 13,
                fontWeight: current ? VIRYA.menu.fontWeightStrong : VIRYA.menu.fontWeight,
                cursor: "pointer",
                background: current ? VIRYA.menu.active.bg : "transparent",
                color: current ? VIRYA.menu.active.text : LT.primary,
                border: current ? "none" : `1px solid ${VIRYA.border}`,
                userSelect: "none",
              })}
            >
              {p}
            </div>
          );
        })}
        <div
          onClick={() => {
            if (canNext) props.onPageChange(props.page + 1);
          }}
          style={font({
            padding: "4px 10px",
            fontSize: 13,
            fontWeight: 500,
            cursor: canNext ? "pointer" : "default",
            color: canNext ? BRAND.primary : LT.tertiary,
            userSelect: "none",
          })}
        >
          Next →
        </div>
      </div>
    </div>
  );
}

function ListingCollapseButton(props: { onClick: () => void }) {
  return (
    <div
      onClick={props.onClick}
      title="Collapse menu"
      style={{
        width: 36,
        height: 36,
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${VIRYA.border}`,
        background: VIRYA.surface,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
        color: LT.secondary,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 4.5H13M3 8H13M3 11.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ListingLogo(props: { label: string; compact?: boolean }) {
  return (
    <Row gap={8} align="center" style={{ width: "fit-content", flexShrink: 0 }}>
      <div
        style={{
          width: props.compact ? 28 : 32,
          height: props.compact ? 28 : 32,
          borderRadius: VIRYA.radiusMd,
          background: BRAND.primary,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: props.compact ? 10 : 11,
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {props.label.slice(0, 2).toUpperCase()}
      </div>
      <T weight="semibold" style={font({ color: BRAND.primary, fontSize: props.compact ? 13 : 15 })}>
        {props.label}
      </T>
    </Row>
  );
}

/** Shared product chrome — app header + left nav + frame footer. Listing and Details must use the same shell. */
function ProductAppShell(props: {
  dualLogo: boolean;
  navOpen: boolean;
  navCurrentId: string;
  navHoverId: string | null;
  navFlyoutId: string | null;
  navSubFlyoutId: string | null;
  onToggleNav: () => void;
  onSelectNav: (id: string) => void;
  onHoverNav: (id: string | null) => void;
  onFlyout: (id: string | null) => void;
  onSubFlyout: (id: string | null) => void;
  contentDimmed?: boolean;
  footer?: unknown;
  children?: unknown;
}) {
  return (
    <div
      style={{
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${VIRYA.table.border}`,
        overflow: "visible",
        background: LIGHT_CANVAS,
      }}
    >
      <ListingAppHeader dualLogo={props.dualLogo} onToggleNav={props.onToggleNav} />
      <Row gap={0} align="stretch" style={{ overflow: "visible" }}>
        <ListingProductNav
          collapsed={!props.navOpen}
          currentId={props.navCurrentId}
          hoverId={props.navHoverId}
          flyoutId={props.navFlyoutId}
          subFlyoutId={props.navSubFlyoutId}
          onSelect={props.onSelectNav}
          onHover={props.onHoverNav}
          onFlyout={props.onFlyout}
          onSubFlyout={props.onSubFlyout}
        />
        <div
          style={{
            position: "relative",
            flex: 1,
            minWidth: 0,
            padding: 20,
            opacity: props.contentDimmed ? 0.35 : 1,
            pointerEvents: props.contentDimmed ? "none" : "auto",
          }}
        >
          {props.children}
        </div>
      </Row>
      {props.footer ? (
        <div style={{ width: "100%", minWidth: 0, overflow: "hidden" }}>
          {props.footer}
        </div>
      ) : null}
    </div>
  );
}

function ListingAppHeader(props: {
  dualLogo: boolean;
  onToggleNav: () => void;
}) {
  return (
    <div
      style={font({
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 16px",
        borderBottom: `1px solid ${VIRYA.table.border}`,
        background: VIRYA.surface,
      })}
    >
      <ListingCollapseButton onClick={props.onToggleNav} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexShrink: 0,
        }}
      >
        <ListingLogo label="KBZ Bank" />
        {props.dualLogo ? (
          <>
            <T
              size="small"
              tone="quaternary"
              style={font({ userSelect: "none", flexShrink: 0, padding: "0 4px" })}
            >
              /
            </T>
            <ListingLogo label="Virya" compact />
          </>
        ) : null}
      </div>
      <div style={{ flex: 1 }} />
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: VIRYA.radiusMd,
          border: `1px solid ${VIRYA.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: LT.secondary,
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2.5C6.5 2.5 5.5 3.8 5.5 5.5V8.5L4 10H12L10.5 8.5V5.5C10.5 3.8 9.5 2.5 8 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M6.5 10.5C6.5 11.6 7.2 12.5 8 12.5C8.8 12.5 9.5 11.6 9.5 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </div>
      <Row gap={8} align="center" style={{ width: "fit-content", flexShrink: 0 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 9999,
            background: BRAND.primarySoft,
            color: BRAND.primary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          KM
        </div>
        <T size="small" weight="semibold" style={font()}>Kaung Myat Hein</T>
      </Row>
    </div>
  );
}

/** Nav icon rules: Menu + Sub Menu use representative icons; Item uses a simple dot. */
function NavMenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function NavAccountsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2.5" y="3.5" width="11" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.5 6.5H13.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5 9.5H8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function NavReportsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 12.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M7 12.5V4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M11 12.5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2.5 13.5H13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function NavSettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M8 2.5V3.8M8 12.2V13.5M13.5 8H12.2M3.8 8H2.5M11.9 4.1L11 5M5 11L4.1 11.9M11.9 11.9L11 11M5 5L4.1 4.1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavSubMenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 4.5H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3 11.5H9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

type NavLevel = "menu" | "submenu" | "item";
type NavItemState = "default" | "hover" | "active" | "selected";

function NavItemDot(props: { state: NavItemState }) {
  const tone = VIRYA.menu[props.state];
  return (
    <span
      style={{
        width: VIRYA.menu.dotSize,
        height: VIRYA.menu.dotSize,
        borderRadius: 9999,
        background: tone.icon,
        flexShrink: 0,
        display: "inline-block",
      }}
    />
  );
}

type NavNode = {
  id: string;
  label: string;
  level: NavLevel;
  icon?: "dashboard" | "accounts" | "reports" | "settings" | "submenu";
  children?: NavNode[];
};

const LISTING_NAV_TREE: NavNode[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    level: "menu",
    icon: "dashboard",
    children: [
      {
        id: "overview",
        label: "Overview",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "home", label: "Home", level: "item" },
          { id: "activity", label: "Activity feed", level: "item" },
        ],
      },
      {
        id: "shortcuts",
        label: "Shortcuts",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "favorites", label: "Favorites", level: "item" },
          { id: "recent", label: "Recent pages", level: "item" },
        ],
      },
    ],
  },
  {
    id: "accounts",
    label: "Accounts",
    level: "menu",
    icon: "accounts",
    children: [
      {
        id: "customer-accounts",
        label: "Customer accounts",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "all-accounts", label: "All accounts", level: "item" },
          { id: "pending-review", label: "Pending review", level: "item" },
          { id: "closed-accounts", label: "Closed accounts", level: "item" },
        ],
      },
      {
        id: "account-requests",
        label: "Account requests",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "new-requests", label: "New requests", level: "item" },
          { id: "approved", label: "Approved", level: "item" },
          { id: "rejected", label: "Rejected", level: "item" },
        ],
      },
    ],
  },
  {
    id: "reports",
    label: "Reports",
    level: "menu",
    icon: "reports",
    children: [
      {
        id: "financial-reports",
        label: "Financial reports",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "daily-balance", label: "Daily balance", level: "item" },
          { id: "transaction-summary", label: "Transaction summary", level: "item" },
          { id: "fee-income", label: "Fee income", level: "item" },
        ],
      },
      {
        id: "operational-reports",
        label: "Operational reports",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "branch-performance", label: "Branch performance", level: "item" },
          { id: "staff-workload", label: "Staff workload", level: "item" },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Settings",
    level: "menu",
    icon: "settings",
    children: [
      {
        id: "user-management",
        label: "User management",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "users", label: "Users", level: "item" },
          { id: "roles", label: "Roles & permissions", level: "item" },
        ],
      },
      {
        id: "system",
        label: "System",
        level: "submenu",
        icon: "submenu",
        children: [
          { id: "preferences", label: "Preferences", level: "item" },
          { id: "audit-log", label: "Audit log", level: "item" },
        ],
      },
    ],
  },
];

function findNavPath(nodes: NavNode[], targetId: string, trail: string[] = []): string[] | null {
  for (const node of nodes) {
    const next = [...trail, node.id];
    if (node.id === targetId) return next;
    if (node.children) {
      const found = findNavPath(node.children, targetId, next);
      if (found) return found;
    }
  }
  return null;
}

/** Active = current page/route item. Selected = parent Menu / Sub Menu open with that active item underneath. */
function resolveNavItemState(
  id: string,
  currentId: string,
  hoverId: string | null,
  pathIds: readonly string[],
): NavItemState {
  if (id === currentId) return "active";
  if (pathIds.includes(id) && id !== currentId) return "selected";
  if (hoverId === id) return "hover";
  return "default";
}

function menuTokenStyle(state: NavItemState, level: NavLevel): CSSProperties {
  const m = VIRYA.menu;
  const tone = m[state];
  const isItem = level === "item";
  return {
    background: tone.bg,
    color: tone.text,
    fontSize: isItem ? m.fontSizeItem : m.fontSize,
    fontWeight: state === "selected" || state === "active" || level === "menu" ? m.fontWeightStrong : m.fontWeight,
    borderRadius: m.radius,
  };
}

function navLevelIcon(node: NavNode, state: NavItemState) {
  if (node.level === "item") return <NavItemDot state={state} />;
  if (node.icon === "dashboard") return <NavMenuIcon />;
  if (node.icon === "accounts") return <NavAccountsIcon />;
  if (node.icon === "reports") return <NavReportsIcon />;
  if (node.icon === "settings") return <NavSettingsIcon />;
  return <NavSubMenuIcon />;
}

function ListingNavRow(props: {
  node: NavNode;
  depth: number;
  state: NavItemState;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const { node, depth, state } = props;
  const m = VIRYA.menu;
  const isItem = node.level === "item";
  const padLeft = m.basePadLeft + depth * m.indentStep;
  const tone = m[state];
  return (
    <div
      onClick={() => props.onSelect(node.id)}
      onMouseEnter={() => props.onHover(node.id)}
      onMouseLeave={() => props.onHover(null)}
      style={font({
        display: "flex",
        alignItems: "center",
        gap: m.rowGap,
        padding: (isItem ? m.padYItem : m.padYMenu) + "px " + m.padX + "px " + (isItem ? m.padYItem : m.padYMenu) + "px " + padLeft + "px",
        cursor: "pointer",
        userSelect: "none",
        ...menuTokenStyle(state, node.level),
      })}
    >
      <span
        style={{
          width: m.iconSize,
          height: m.iconSize,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: tone.icon,
        }}
      >
        {navLevelIcon(node, state)}
      </span>
      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: tone.text }}>{node.label}</span>
    </div>
  );
}

function ListingNavBranch(props: {
  node: NavNode;
  depth: number;
  currentId: string;
  hoverId: string | null;
  pathIds: readonly string[];
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  key?: string;
}) {
  const state = resolveNavItemState(props.node.id, props.currentId, props.hoverId, props.pathIds);
  return (
    <Stack gap={VIRYA.menu.branchGap}>
      <ListingNavRow
        node={props.node}
        depth={props.depth}
        state={state}
        onSelect={props.onSelect}
        onHover={props.onHover}
      />
      {props.node.children?.map((child) => (
        <ListingNavBranch
          key={child.id}
          node={child}
          depth={props.depth + 1}
          currentId={props.currentId}
          hoverId={props.hoverId}
          pathIds={props.pathIds}
          onSelect={props.onSelect}
          onHover={props.onHover}
        />
      ))}
    </Stack>
  );
}

function MenuStateSwatch(props: { state: NavItemState; label: string; hint: string; tokenPath: string }) {
  const m = VIRYA.menu;
  const tone = m[props.state];
  return (
    <Stack gap={6} style={{ flex: 1, minWidth: 140 }}>
      <T size="small" weight="semibold" style={font({ textTransform: "capitalize" })}>{props.label}</T>
      <div
        style={font({
          display: "flex",
          alignItems: "center",
          gap: m.rowGap,
          padding: m.padYMenu + "px " + m.padX + "px",
          ...menuTokenStyle(props.state, props.state === "active" ? "item" : "menu"),
          border: props.state === "default" ? `1px solid ${m.border}` : "1px solid transparent",
        })}
      >
        {props.state === "active" ? (
          <NavItemDot state={props.state} />
        ) : (
          <span
            style={{
              width: m.iconSize,
              height: m.iconSize,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: tone.icon,
            }}
          >
            <NavAccountsIcon />
          </span>
        )}
        <span style={{ color: tone.text }}>
          {props.state === "active" ? "Child item" : props.state === "selected" ? "Parent menu" : "Menu item"}
        </span>
      </div>
      <T size="small" tone="tertiary" style={font({ fontSize: m.fontSizeCaption })}>
        {props.tokenPath}
      </T>
      <T size="small" tone="tertiary" style={font({ fontSize: 10 })}>{props.hint}</T>
    </Stack>
  );
}

function ListingMenuStateDemo() {
  const m = VIRYA.menu;
  return (
    <Demo label="Side menu states — VIRYA.menu variable tokens">
      <Row gap={12} wrap align="start">
        <MenuStateSwatch state="default" label="Default" hint="Idle · not in path" tokenPath="menu.default.{bg,text,icon}" />
        <MenuStateSwatch state="hover" label="Hover" hint="Pointer over item" tokenPath="menu.hover.{bg,text,icon}" />
        <MenuStateSwatch
          state="selected"
          label="Selected"
          hint="Parent open — soft gray tint · neutral gray text/icons"
          tokenPath="menu.selected.{bg,text,icon}"
        />
        <MenuStateSwatch
          state="active"
          label="Active"
          hint="Current page/route — light blue tint · navy text/icons · medium/bold"
          tokenPath="menu.active.{bg,text,icon}"
        />
      </Row>
      <T size="small" tone="tertiary" style={font({ marginTop: 12, fontSize: m.fontSizeCaption })}>
        Active = current route (light blue + primary navy). Selected = open parent above that route (soft gray). Shell + rows use menu.* tokens only.
      </T>
    </Demo>
  );
}

function firstNavLeafId(node: NavNode): string {
  if (!node.children || node.children.length === 0) return node.id;
  return firstNavLeafId(node.children[0]);
}

function ListingFlyoutPanel(props: { title: string; children?: unknown }) {
  const m = VIRYA.menu;
  return (
    <div
      style={{
        position: "absolute",
        left: "100%",
        top: 0,
        marginLeft: 4,
        width: m.flyoutWidth,
        background: m.surface,
        border: `1px solid ${m.border}`,
        borderRadius: m.radius,
        padding: m.padYItem + "px 0",
        zIndex: 40,
        boxSizing: "border-box",
      }}
    >
      <div
        style={font({
          padding: "6px " + m.padX + "px 8px",
          fontSize: m.fontSizeCaption,
          fontWeight: m.fontWeightStrong,
          letterSpacing: m.captionLetterSpacing,
          textTransform: "uppercase",
          color: m.caption,
        })}
      >
        {props.title}
      </div>
      {props.children as never}
    </div>
  );
}

function ListingFlyoutEntry(props: {
  node: NavNode;
  currentId: string;
  pathIds: readonly string[];
  showChevron?: boolean;
  onSelect?: () => void;
  key?: string;
}) {
  const m = VIRYA.menu;
  const state = resolveNavItemState(props.node.id, props.currentId, null, props.pathIds);
  const tone = m[state];
  return (
    <div
      onClick={props.onSelect}
      style={font({
        display: "flex",
        alignItems: "center",
        gap: m.rowGap,
        padding: m.padYMenu + "px " + m.padX + "px",
        cursor: "pointer",
        userSelect: "none",
        ...menuTokenStyle(state, props.node.level),
      })}
    >
      <span
        style={{
          width: m.iconSize,
          height: m.iconSize,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: tone.icon,
        }}
      >
        {navLevelIcon(props.node, state)}
      </span>
      <span
        style={{
          flex: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          color: tone.text,
        }}
      >
        {props.node.label}
      </span>
      {props.showChevron ? (
        <span style={{ color: tone.icon, fontSize: 12, flexShrink: 0 }}>›</span>
      ) : null}
    </div>
  );
}

/** Second-level flyout — Item list only */
function ListingItemsFlyout(props: {
  submenu: NavNode;
  currentId: string;
  pathIds: readonly string[];
  onSelect: (id: string) => void;
}) {
  const items = props.submenu.children ?? [];
  return (
    <ListingFlyoutPanel title={props.submenu.label}>
      <Stack gap={VIRYA.menu.branchGap}>
        {items.map((item) => (
          <ListingFlyoutEntry
            key={item.id}
            node={item}
            currentId={props.currentId}
            pathIds={props.pathIds}
            onSelect={() => props.onSelect(item.id)}
          />
        ))}
      </Stack>
    </ListingFlyoutPanel>
  );
}

/** First-level flyout — Sub Menu list only; hover a Sub Menu to open Items flyout */
function ListingSubMenusFlyout(props: {
  menu: NavNode;
  currentId: string;
  pathIds: readonly string[];
  subFlyoutId: string | null;
  onSubFlyout: (id: string | null) => void;
  onSelect: (id: string) => void;
}) {
  const subMenus = props.menu.children ?? [];
  return (
    <ListingFlyoutPanel title={props.menu.label}>
      {subMenus.length === 0 ? (
        <ListingFlyoutEntry
          node={props.menu}
          currentId={props.currentId}
          pathIds={props.pathIds}
          onSelect={() => props.onSelect(props.menu.id)}
        />
      ) : (
        <Stack gap={VIRYA.menu.branchGap}>
          {subMenus.map((sub) => {
            const hasItems = (sub.children?.length ?? 0) > 0;
            const open = props.subFlyoutId === sub.id;
            return (
              <div
                key={sub.id}
                style={{ position: "relative" }}
                onMouseEnter={() => props.onSubFlyout(sub.id)}
                onMouseLeave={() => props.onSubFlyout(null)}
              >
                <ListingFlyoutEntry
                  node={sub}
                  currentId={props.currentId}
                  pathIds={props.pathIds}
                  showChevron={hasItems}
                  onSelect={() => {
                    if (!hasItems) props.onSelect(sub.id);
                    else props.onSelect(firstNavLeafId(sub));
                  }}
                />
                {open && hasItems ? (
                  <ListingItemsFlyout
                    submenu={sub}
                    currentId={props.currentId}
                    pathIds={props.pathIds}
                    onSelect={props.onSelect}
                  />
                ) : null}
              </div>
            );
          })}
        </Stack>
      )}
    </ListingFlyoutPanel>
  );
}

function ListingNavIconOnly(props: {
  node: NavNode;
  state: NavItemState;
  flyoutOpen: boolean;
  currentId: string;
  pathIds: readonly string[];
  subFlyoutId: string | null;
  onSelect: (id: string) => void;
  onFlyoutOpen: (id: string | null) => void;
  onSubFlyout: (id: string | null) => void;
  key?: string;
}) {
  const m = VIRYA.menu;
  const tone = m[props.state];
  return (
    <div
      style={{ position: "relative", width: "100%" }}
      onMouseEnter={() => props.onFlyoutOpen(props.node.id)}
      onMouseLeave={() => {
        props.onFlyoutOpen(null);
        props.onSubFlyout(null);
      }}
    >
      <div
        onClick={() => props.onSelect(firstNavLeafId(props.node))}
        title={props.node.label}
        style={font({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 40,
          cursor: "pointer",
          userSelect: "none",
          background: tone.bg,
          color: tone.icon,
          borderRadius: m.radius,
        })}
      >
        <span
          style={{
            width: m.iconSize,
            height: m.iconSize,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: tone.icon,
          }}
        >
          {navLevelIcon(props.node, props.state)}
        </span>
      </div>
      {props.flyoutOpen ? (
        <ListingSubMenusFlyout
          menu={props.node}
          currentId={props.currentId}
          pathIds={props.pathIds}
          subFlyoutId={props.subFlyoutId}
          onSubFlyout={props.onSubFlyout}
          onSelect={(id) => {
            props.onSelect(id);
            props.onFlyoutOpen(null);
            props.onSubFlyout(null);
          }}
        />
      ) : null}
    </div>
  );
}

function ListingProductNav(props: {
  collapsed: boolean;
  currentId: string;
  hoverId: string | null;
  flyoutId: string | null;
  subFlyoutId: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  onFlyout: (id: string | null) => void;
  onSubFlyout: (id: string | null) => void;
}) {
  const m = VIRYA.menu;
  const pathIds = findNavPath(LISTING_NAV_TREE, props.currentId) ?? [props.currentId];
  const width = props.collapsed ? m.widthCollapsed : m.width;
  const padX = props.collapsed ? m.paddingXCollapsed : m.paddingX;

  return (
    <div
      style={{
        width,
        flexShrink: 0,
        alignSelf: "stretch",
        borderRight: `1px solid ${m.border}`,
        background: m.surface,
        padding: m.paddingTop + "px " + padX + "px " + m.paddingBottom + "px",
        overflowY: props.collapsed ? "visible" : "auto",
        overflowX: "visible",
        minHeight: 480,
        boxSizing: "border-box",
        transition: "width 160ms ease",
        position: "relative",
        zIndex: props.collapsed ? 20 : 1,
      }}
    >
      <Stack gap={m.sectionGap}>
        {LISTING_NAV_TREE.map((node) => {
          if (props.collapsed) {
            const state = resolveNavItemState(node.id, props.currentId, props.hoverId, pathIds);
            return (
              <ListingNavIconOnly
                key={node.id}
                node={node}
                state={state}
                flyoutOpen={props.flyoutId === node.id}
                currentId={props.currentId}
                pathIds={pathIds}
                subFlyoutId={props.flyoutId === node.id ? props.subFlyoutId : null}
                onSelect={props.onSelect}
                onFlyoutOpen={props.onFlyout}
                onSubFlyout={props.onSubFlyout}
              />
            );
          }
          return (
            <ListingNavBranch
              key={node.id}
              node={node}
              depth={0}
              currentId={props.currentId}
              hoverId={props.hoverId}
              pathIds={pathIds}
              onSelect={props.onSelect}
              onHover={props.onHover}
            />
          );
        })}
      </Stack>
    </div>
  );
}

function ListingPageTitleBar(props: { title: string; actions?: unknown }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: 40,
        gap: 16,
      }}
    >
      <LH2 style={font({ fontSize: 20, margin: 0, lineHeight: "32px", flexShrink: 0 })}>{props.title}</LH2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 8,
          marginLeft: "auto",
          flexShrink: 0,
        }}
      >
        {props.actions as never}
      </div>
    </div>
  );
}

/** Primary actions use fill tokens: btn.primaryEnable + btn.textOnFill. */
function ViryaButton(props: {
  label: string;
  variant?: "fill" | "stroke" | "text";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}) {
  const variant = props.variant ?? "fill";
  const disabled = Boolean(props.disabled);
  const enabled = !disabled;

  let background: string = "transparent";
  let color: string = BRAND.primary;
  let border: string = "1px solid transparent";
  let padding: string = "8px 16px";

  if (variant === "fill") {
    background = enabled ? VIRYA.btn.primaryEnable : VIRYA.btn.disabledBg;
    color = enabled ? VIRYA.btn.textOnFill : VIRYA.btn.disabledText;
    border = "1px solid transparent";
  } else if (variant === "stroke") {
    background = "transparent";
    color = enabled ? BRAND.primary : VIRYA.btn.disabledText;
    border = `1px solid ${enabled ? BRAND.primary : VIRYA.border}`;
  } else {
    padding = "8px 12px";
    background = "transparent";
    color = enabled ? BRAND.primary : VIRYA.btn.disabledText;
    border = "1px solid transparent";
  }

  return (
    <div
      onClick={enabled ? props.onClick : undefined}
      style={font({
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding,
        borderRadius: VIRYA.radiusMd,
        fontSize: 14,
        fontWeight: 600,
        lineHeight: "20px",
        cursor: enabled ? "pointer" : "default",
        background,
        color,
        border,
        boxSizing: "border-box",
        width: props.fullWidth ? "100%" : undefined,
        userSelect: "none",
      })}
    >
      {props.label}
    </div>
  );
}

function ListingPrimaryButton(props: { label: string; variant?: "fill" | "stroke"; onClick?: () => void }) {
  return (
    <ViryaButton
      label={props.label}
      variant={props.variant ?? "fill"}
      onClick={props.onClick}
    />
  );
}

const LISTING_STATUS_OPTIONS = ["All", "Active", "Pending", "Review", "Inactive", "Overdue"] as const;
const LISTING_BRANCH_OPTIONS = ["All", "Yangon Main", "Mandalay", "Naypyitaw"] as const;
const LISTING_PRODUCT_OPTIONS = ["All", "KBZ Savings", "Current", "Fixed deposit"] as const;
const LISTING_RISK_OPTIONS = ["All", "Low", "Medium", "High"] as const;

type ListingAdvFilters = {
  customerName: string;
  refNo: string;
  status: string;
  branch: string;
  product: string;
  risk: string;
  amountFrom: string;
  amountTo: string;
  dateFrom: string;
  dateTo: string;
};

const EMPTY_ADV_FILTERS: ListingAdvFilters = {
  customerName: "",
  refNo: "",
  status: "All",
  branch: "All",
  product: "All",
  risk: "All",
  amountFrom: "",
  amountTo: "",
  dateFrom: "",
  dateTo: "",
};

function listingAdvFilterCount(filters: ListingAdvFilters): number {
  let n = 0;
  if (filters.customerName.trim()) n += 1;
  if (filters.refNo.trim()) n += 1;
  if (filters.status !== "All") n += 1;
  if (filters.branch !== "All") n += 1;
  if (filters.product !== "All") n += 1;
  if (filters.risk !== "All") n += 1;
  if (filters.amountFrom.trim()) n += 1;
  if (filters.amountTo.trim()) n += 1;
  if (filters.dateFrom.trim()) n += 1;
  if (filters.dateTo.trim()) n += 1;
  return n;
}

function ListingFilterTextField(props: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <Stack gap={4} style={{ width: "100%", minWidth: 0 }}>
      <FieldLabel>{props.label}</FieldLabel>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e: { target: { value: string } }) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        style={font({
          width: "100%",
          boxSizing: "border-box",
          padding: "8px 12px",
          borderRadius: VIRYA.radiusMd,
          border: `1px solid ${VIRYA.field.border}`,
          background: VIRYA.field.surface,
          color: VIRYA.field.text,
          fontSize: 14,
          outline: "none",
        })}
      />
    </Stack>
  );
}

function ListingFilterSelect(props: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  minWidth?: number;
  fullWidth?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        width: props.fullWidth ? "100%" : "fit-content",
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <T size="small" tone="tertiary" style={font({ fontSize: 11 })}>{props.label}</T>
      <select
        value={props.value}
        onChange={(e: { target: { value: string } }) => props.onChange(e.target.value)}
        style={font({
          width: props.fullWidth ? "100%" : undefined,
          minWidth: props.fullWidth ? 0 : (props.minWidth ?? 128),
          boxSizing: "border-box",
          padding: "8px 10px",
          borderRadius: VIRYA.radiusMd,
          border: `1px solid ${VIRYA.field.border}`,
          background: VIRYA.field.surface,
          color: VIRYA.field.text,
          fontSize: 13,
          outline: "none",
        })}
      >
        {props.options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function ListingAppliedChip(props: { label: string; onClear: () => void }) {
  return (
    <div
      style={font({
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 8px",
        borderRadius: VIRYA.chip.radius,
        background: VIRYA.chip.soft.surface,
        color: VIRYA.chip.soft.text,
        fontSize: 12,
        fontWeight: 500,
      })}
    >
      {props.label}
      <span
        onClick={props.onClear}
        style={{ cursor: "pointer", fontWeight: 700, lineHeight: 1 }}
      >
        ×
      </span>
    </div>
  );
}

/** ≤2 filters beside search; >2 filters use Advanced filter (popup rendered by parent). */
function ListingFilterBar(props: {
  search: string;
  onSearchChange: (value: string) => void;
  mode: "inline" | "advanced";
  status: string;
  branch: string;
  onStatusChange: (value: string) => void;
  onBranchChange: (value: string) => void;
  advFilters: ListingAdvFilters;
  onAdvFiltersChange: (next: ListingAdvFilters) => void;
  onOpenAdvanced: () => void;
  onAction: (message: string) => void;
}) {
  const appliedCount = listingAdvFilterCount(props.advFilters);

  return (
    <Stack gap={10}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 12,
          flexWrap: "wrap",
          width: "100%",
          minWidth: 0,
        }}
      >
        <SearchInput
          value={props.search}
          onChange={props.onSearchChange}
          placeholder="Search customer or ref no…"
          style={{ flex: 1, maxWidth: "none", minWidth: 200 }}
        />
        {props.mode === "inline" ? (
          <>
            <ListingFilterSelect
              label="Status"
              value={props.status}
              options={LISTING_STATUS_OPTIONS}
              onChange={props.onStatusChange}
            />
            <ListingFilterSelect
              label="Branch"
              value={props.branch}
              options={LISTING_BRANCH_OPTIONS}
              onChange={props.onBranchChange}
            />
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "fit-content", flexShrink: 0 }}>
            <T size="small" tone="tertiary" style={font({ fontSize: 11, opacity: 0 })}>Advanced</T>
            <div
              onClick={props.onOpenAdvanced}
              style={font({
                padding: "8px 14px",
                borderRadius: VIRYA.radiusMd,
                border: `1px solid ${BRAND.primary}`,
                background: appliedCount ? BRAND.primarySoft : "transparent",
                color: BRAND.primary,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
              })}
            >
              Advanced filter{appliedCount ? ` (${appliedCount})` : ""}
            </div>
          </div>
        )}
      </div>

      {props.mode === "advanced" && appliedCount > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
          {props.advFilters.customerName.trim() ? (
            <ListingAppliedChip
              label={`Customer: ${props.advFilters.customerName}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, customerName: "" });
                props.onAction("Cleared Customer filter");
              }}
            />
          ) : null}
          {props.advFilters.refNo.trim() ? (
            <ListingAppliedChip
              label={`Ref: ${props.advFilters.refNo}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, refNo: "" });
                props.onAction("Cleared Ref no. filter");
              }}
            />
          ) : null}
          {props.advFilters.status !== "All" ? (
            <ListingAppliedChip
              label={`Status: ${props.advFilters.status}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, status: "All" });
                props.onAction("Cleared Status filter");
              }}
            />
          ) : null}
          {props.advFilters.branch !== "All" ? (
            <ListingAppliedChip
              label={`Branch: ${props.advFilters.branch}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, branch: "All" });
                props.onAction("Cleared Branch filter");
              }}
            />
          ) : null}
          {props.advFilters.product !== "All" ? (
            <ListingAppliedChip
              label={`Product: ${props.advFilters.product}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, product: "All" });
                props.onAction("Cleared Product filter");
              }}
            />
          ) : null}
          {props.advFilters.risk !== "All" ? (
            <ListingAppliedChip
              label={`Risk: ${props.advFilters.risk}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, risk: "All" });
                props.onAction("Cleared Risk filter");
              }}
            />
          ) : null}
          {props.advFilters.amountFrom.trim() || props.advFilters.amountTo.trim() ? (
            <ListingAppliedChip
              label={`Amount: ${props.advFilters.amountFrom || "…"} – ${props.advFilters.amountTo || "…"}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, amountFrom: "", amountTo: "" });
                props.onAction("Cleared Amount filter");
              }}
            />
          ) : null}
          {props.advFilters.dateFrom.trim() || props.advFilters.dateTo.trim() ? (
            <ListingAppliedChip
              label={`Date: ${props.advFilters.dateFrom || "…"} – ${props.advFilters.dateTo || "…"}`}
              onClear={() => {
                props.onAdvFiltersChange({ ...props.advFilters, dateFrom: "", dateTo: "" });
                props.onAction("Cleared Date filter");
              }}
            />
          ) : null}
        </div>
      ) : null}
    </Stack>
  );
}

function ListingAdvancedFilterPopup(props: {
  draft: ListingAdvFilters;
  onDraftChange: (next: ListingAdvFilters) => void;
  onClose: () => void;
  onApply: () => void;
  onReset: () => void;
  onAction: (message: string) => void;
}) {
  const draft = props.draft;
  const setDraft = props.onDraftChange;

  return (
    <div
      onClick={props.onClose}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: VIRYA.popup.overlay,
        padding: 24,
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        style={font({
          width: "100%",
          maxWidth: 560,
          maxHeight: "100%",
          borderRadius: VIRYA.radiusLg,
          border: `1px solid ${VIRYA.popup.border}`,
          background: VIRYA.popup.surface,
          overflow: "auto",
          boxShadow: "0 12px 40px rgba(8, 8, 8, 0.12)",
        })}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "16px 16px 12px",
            position: "sticky",
            top: 0,
            background: VIRYA.popup.surface,
            zIndex: 1,
          }}
        >
          <T weight="semibold" style={font({ fontSize: 18, color: VIRYA.popup.title })}>
            Advanced filter
          </T>
          <PopupCloseButton
            onClick={() => {
              props.onClose();
              props.onAction("Closed Advanced filter");
            }}
          />
        </div>
        <div style={{ height: 1, background: LIGHT_BORDER }} />
        <Stack gap={20} style={{ padding: "16px 16px 20px" }}>
          <T size="small" style={font({ color: VIRYA.popup.text, lineHeight: "22px" })}>
            Sample filter form — fill the fields you need, then Apply to update the list.
          </T>

          <Stack gap={12}>
            <T size="small" weight="semibold" style={font({ color: LT.primary })}>
              Customer
            </T>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <ListingFilterTextField
                label="Customer name"
                value={draft.customerName}
                onChange={(v) => setDraft({ ...draft, customerName: v })}
                placeholder="e.g. Kaung Myat Hein"
              />
              <ListingFilterTextField
                label="Ref no."
                value={draft.refNo}
                onChange={(v) => setDraft({ ...draft, refNo: v })}
                placeholder="e.g. 001042"
              />
            </div>
          </Stack>

          <Stack gap={12}>
            <T size="small" weight="semibold" style={font({ color: LT.primary })}>
              Account
            </T>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <ListingFilterSelect
                label="Status"
                value={draft.status}
                options={LISTING_STATUS_OPTIONS}
                onChange={(v) => setDraft({ ...draft, status: v })}
                fullWidth
              />
              <ListingFilterSelect
                label="Branch"
                value={draft.branch}
                options={LISTING_BRANCH_OPTIONS}
                onChange={(v) => setDraft({ ...draft, branch: v })}
                fullWidth
              />
              <ListingFilterSelect
                label="Product"
                value={draft.product}
                options={LISTING_PRODUCT_OPTIONS}
                onChange={(v) => setDraft({ ...draft, product: v })}
                fullWidth
              />
              <ListingFilterSelect
                label="Risk"
                value={draft.risk}
                options={LISTING_RISK_OPTIONS}
                onChange={(v) => setDraft({ ...draft, risk: v })}
                fullWidth
              />
            </div>
          </Stack>

          <Stack gap={12}>
            <T size="small" weight="semibold" style={font({ color: LT.primary })}>
              Amount (MMK)
            </T>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <ListingFilterTextField
                label="From"
                value={draft.amountFrom}
                onChange={(v) => setDraft({ ...draft, amountFrom: v })}
                placeholder="0"
                type="number"
              />
              <ListingFilterTextField
                label="To"
                value={draft.amountTo}
                onChange={(v) => setDraft({ ...draft, amountTo: v })}
                placeholder="100000"
                type="number"
              />
            </div>
          </Stack>

          <Stack gap={12}>
            <T size="small" weight="semibold" style={font({ color: LT.primary })}>
              Created date
            </T>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <ListingFilterTextField
                label="From"
                value={draft.dateFrom}
                onChange={(v) => setDraft({ ...draft, dateFrom: v })}
                type="date"
              />
              <ListingFilterTextField
                label="To"
                value={draft.dateTo}
                onChange={(v) => setDraft({ ...draft, dateTo: v })}
                type="date"
              />
            </div>
          </Stack>

          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div
              onClick={props.onReset}
              style={font({
                padding: "8px 12px",
                color: BRAND.primary,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                width: "fit-content",
              })}
            >
              Reset
            </div>
            <div style={{ display: "flex", gap: 12, marginLeft: "auto" }}>
              <PopupActionButton
                variant="secondary"
                label="Cancel"
                onClick={() => {
                  props.onClose();
                  props.onAction("Cancel — Advanced filter");
                }}
              />
              <PopupActionButton
                variant="primary"
                label="Apply"
                onClick={props.onApply}
              />
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

function ListingPage() {
  const [, setDsPage] = useCanvasState<PageId>("ds-page-v8", "listing");
  const [, setDetailsRecordId] = useCanvasState<string>("details-record-id", DETAILS_SAMPLE.id);
  const [search, setSearch] = useCanvasState("listing-search", "");
  const [selected, setSelected] = useCanvasState<string[]>("listing-selected", []);
  const [page, setPage] = useCanvasState("listing-page", 1);
  const [rowsPerPage, setRowsPerPage] = useCanvasState("listing-rows", 10);
  const [lastAction, setLastAction] = useCanvasState("listing-action", "Browse the listing layout");
  const [navOpen, setNavOpen] = useCanvasState("listing-nav-open-v2", true);
  const [dualLogo, setDualLogo] = useCanvasState("listing-dual-logo", true);
  const [navCurrentId, setNavCurrentId] = useCanvasState("listing-nav-current", "all-accounts");
  const [navHoverId, setNavHoverId] = useCanvasState<string | null>("listing-nav-hover", null);
  const [navFlyoutId, setNavFlyoutId] = useCanvasState<string | null>("listing-nav-flyout-v2", null);
  const [navSubFlyoutId, setNavSubFlyoutId] = useCanvasState<string | null>("listing-nav-sub-flyout-v2", null);
  const [filterMode, setFilterMode] = useCanvasState<"inline" | "advanced">("listing-filter-mode", "advanced");
  const [inlineStatus, setInlineStatus] = useCanvasState("listing-inline-status", "All");
  const [inlineBranch, setInlineBranch] = useCanvasState("listing-inline-branch", "All");
  const [advFilters, setAdvFilters] = useCanvasState<ListingAdvFilters>("listing-adv-filters-v2", EMPTY_ADV_FILTERS);
  const [filterPopupOpen, setFilterPopupOpen] = useCanvasState("listing-adv-filter-open-v3", false);
  const [filterDraft, setFilterDraft] = useCanvasState<ListingAdvFilters>("listing-adv-filter-draft-v3", EMPTY_ADV_FILTERS);

  const activeStatus = filterMode === "inline" ? inlineStatus : advFilters.status;
  const filtered = LISTING_TABLE_ROWS.filter((row) => {
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q ||
      row.customer.toLowerCase().includes(q) ||
      row.refNo.includes(search.trim());
    const matchesStatus = activeStatus === "All" || row.statusLabel === activeStatus;
    if (filterMode === "inline") {
      return matchesSearch && matchesStatus;
    }
    const matchesCustomer =
      !advFilters.customerName.trim() ||
      row.customer.toLowerCase().includes(advFilters.customerName.trim().toLowerCase());
    const matchesRef =
      !advFilters.refNo.trim() || row.refNo.includes(advFilters.refNo.trim());
    const amountFrom = Number(advFilters.amountFrom);
    const amountTo = Number(advFilters.amountTo);
    const matchesAmountFrom = !advFilters.amountFrom.trim() || Number.isNaN(amountFrom) || row.amount >= amountFrom;
    const matchesAmountTo = !advFilters.amountTo.trim() || Number.isNaN(amountTo) || row.amount <= amountTo;
    return matchesSearch && matchesStatus && matchesCustomer && matchesRef && matchesAmountFrom && matchesAmountTo;
  });
  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safePage = Math.min(page, totalPages);
  const pageRows = filtered.slice((safePage - 1) * rowsPerPage, safePage * rowsPerPage);
  const allPageSelected = pageRows.length > 0 && pageRows.every((r) => selected.includes(r.id));

  const toggleAll = () => {
    if (allPageSelected) {
      setSelected(selected.filter((id) => !pageRows.some((r) => r.id === id)));
    } else {
      const ids = pageRows.map((r) => r.id);
      setSelected([...new Set([...selected, ...ids])]);
    }
  };

  const toggleRow = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Patterns · Listing"
        title="Listing page"
        description="Full list page layout — app header, left navigation, page actions, filter search (≤2 inline · >2 Advanced filter popup), table list view, and footer pagination."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.listing} />
      <ListingMenuStateDemo />

      <Demo label="Live demo — listing page layout">
        <Stack gap={12}>
          <Row gap={8} wrap align="center">
            <T size="small" tone="secondary" style={font()}>{lastAction}</T>
            <div
              onClick={() => {
                setFilterMode(filterMode === "inline" ? "advanced" : "inline");
                setPage(1);
                setLastAction(
                  filterMode === "inline"
                    ? "Filter mode · >2 filters → Advanced filter"
                    : "Filter mode · ≤2 filters beside search",
                );
              }}
              style={font({
                marginLeft: "auto",
                padding: "4px 10px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${LIGHT_BORDER}`,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                color: BRAND.primary,
                background: BRAND.primarySoft,
              })}
            >
              {filterMode === "inline" ? "Mode: ≤2 inline" : "Mode: >2 Advanced"}
            </div>
            <div
              onClick={() => {
                setDualLogo(!dualLogo);
                setLastAction(dualLogo ? "Single logo header" : "Dual logo header");
              }}
              style={font({
                padding: "4px 10px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${LIGHT_BORDER}`,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                color: dualLogo ? BRAND.primary : LT.secondary,
                background: dualLogo ? BRAND.primarySoft : "transparent",
              })}
            >
              {dualLogo ? "Dual logo" : "Single logo"}
            </div>
          </Row>
          <div style={{ position: "relative" }}>
          <ProductAppShell
            dualLogo={dualLogo}
            navOpen={navOpen}
            navCurrentId={navCurrentId}
            navHoverId={navHoverId}
            navFlyoutId={navFlyoutId}
            navSubFlyoutId={navSubFlyoutId}
            onToggleNav={() => {
              setNavOpen(!navOpen);
              setNavFlyoutId(null);
              setNavSubFlyoutId(null);
              setLastAction(navOpen ? "Collapsed menu · icon → sub flyout → item flyout" : "Expanded menu · labels + tree");
            }}
            onSelectNav={(id) => {
              setNavCurrentId(id);
              setLastAction(`Active nav item · ${id}`);
            }}
            onHoverNav={setNavHoverId}
            onFlyout={setNavFlyoutId}
            onSubFlyout={setNavSubFlyoutId}
            footer={
              <ListingTableFooter
                page={safePage}
                totalPages={totalPages}
                rowsPerPage={rowsPerPage}
                totalRows={filtered.length}
                onPageChange={(p) => {
                  setPage(p);
                  setLastAction(`Page ${p} of ${totalPages}`);
                }}
                onRowsPerPageChange={(n) => {
                  setRowsPerPage(n);
                  setPage(1);
                  setLastAction(`${n} rows per page`);
                }}
              />
            }
          >
            <Stack gap={16}>
              <ListingPageTitleBar
                title="Customer accounts"
                actions={
                  <>
                    <ListingPrimaryButton label="Create" variant="fill" onClick={() => setLastAction("Create account")} />
                    <ListingPrimaryButton label="Export" variant="stroke" onClick={() => setLastAction("Export list")} />
                    <ListingPrimaryButton
                      label={selected.length ? `Bulk actions (${selected.length})` : "Bulk actions"}
                      variant="stroke"
                      onClick={() => setLastAction(selected.length ? `Bulk action on ${selected.length} row(s)` : "Select rows for bulk actions")}
                    />
                  </>
                }
              />
              <BreadcrumbTrail items={["Home", "Accounts", "Customer accounts"]} />
              <ListingFilterBar
                search={search}
                onSearchChange={(v) => {
                  setSearch(v);
                  setPage(1);
                  setLastAction(v ? `Filtering by “${v}”` : "Showing all records");
                }}
                mode={filterMode}
                status={inlineStatus}
                branch={inlineBranch}
                onStatusChange={(v) => {
                  setInlineStatus(v);
                  setPage(1);
                  setLastAction(v === "All" ? "Status · All" : `Status · ${v}`);
                }}
                onBranchChange={(v) => {
                  setInlineBranch(v);
                  setPage(1);
                  setLastAction(v === "All" ? "Branch · All" : `Branch · ${v}`);
                }}
                advFilters={advFilters}
                onAdvFiltersChange={(next) => {
                  setAdvFilters(next);
                  setPage(1);
                }}
                onOpenAdvanced={() => {
                  setFilterDraft({ ...advFilters });
                  setFilterPopupOpen(true);
                  setLastAction("Opened Advanced filter");
                }}
                onAction={setLastAction}
              />
              <div style={{ borderRadius: VIRYA.radiusMd, border: `1px solid ${VIRYA.table.border}`, overflow: "hidden", background: VIRYA.surface }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 680 }}>
                    <thead>
                      <tr style={{ background: VIRYA.table.headerBg }}>
                        <th style={tableCellStyle("center", true)}>
                          <TableRowCheckbox checked={allPageSelected} onChange={toggleAll} />
                        </th>
                        <th style={tableCellStyle("left", true)}>Customer</th>
                        <th style={tableCellStyle("right", true)}>Ref no.</th>
                        <th style={tableCellStyle("right", true)}>Amount</th>
                        <th style={tableCellStyle("center", true)}>Status</th>
                        <th style={tableCellStyle("center", true)}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pageRows.map((row) => (
                        <tr key={row.id}>
                          <td style={tableCellStyle("center")}>
                            <TableRowCheckbox checked={selected.includes(row.id)} onChange={() => toggleRow(row.id)} />
                          </td>
                          <td style={tableCellStyle("left")}>
                            <T size="small" style={font({ color: LT.primary })}>{row.customer}</T>
                          </td>
                          <td style={mergeStyle(tableCellStyle("right"), { fontFamily: "monospace" })}>{row.refNo}</td>
                          <td style={tableCellStyle("right")}>
                            <TableAmountCell amount={row.amount} trend={row.trend} />
                          </td>
                          <td style={tableCellStyle("center")}>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <ChipTag label={row.statusLabel} variant={row.status} />
                            </div>
                          </td>
                          <td style={tableCellStyle("center")}>
                            <TableTextActionButton
                              label="View details"
                              onClick={() => {
                                setDetailsRecordId(row.id);
                                setDsPage("details");
                                setLastAction(`Opened details — ${row.customer}`);
                              }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Stack>
          </ProductAppShell>
          {filterPopupOpen ? (
            <ListingAdvancedFilterPopup
              draft={filterDraft}
              onDraftChange={setFilterDraft}
              onClose={() => setFilterPopupOpen(false)}
              onApply={() => {
                setAdvFilters({ ...filterDraft });
                setFilterPopupOpen(false);
                setPage(1);
                const count = listingAdvFilterCount(filterDraft);
                setLastAction(count ? `Applied ${count} advanced filter(s)` : "Cleared advanced filters");
              }}
              onReset={() => {
                setFilterDraft({ ...EMPTY_ADV_FILTERS });
                setLastAction("Reset Advanced filter form");
              }}
              onAction={setLastAction}
            />
          ) : null}
          </div>
          <T size="small" tone="tertiary" style={font()}>
            {"Header: ☰ · nav flyouts · filters: ≤2 beside search · >2 Advanced filter popup · pagination in frame footer"}
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

const DETAILS_SAMPLE = {
  id: "1",
  title: "Kaung Myat Hein",
  breadcrumbs: ["Home", "Accounts", "Customer accounts", "Kaung Myat Hein"],
  card: [
    { label: "Card number", value: "4532 •••• •••• 1042" },
    { label: "Card type", value: "Visa Debit" },
    { label: "Status", value: "Active" },
    { label: "Expiry", value: "09 / 28" },
  ],
  member: [
    { label: "Full name", value: "Kaung Myat Hein" },
    { label: "Customer ID", value: "CUS-001042" },
    { label: "NRC / Passport", value: "12/TaKaNa(N)123456" },
    { label: "Date of birth", value: "12 Mar 1992" },
  ],
  contact: [
    { label: "Mobile", value: "+95 9 250 123 456" },
    { label: "Email", value: "kaung.myat@example.com" },
    { label: "Preferred channel", value: "SMS" },
  ],
  additional: [
    { label: "Branch", value: "Yangon Main" },
    { label: "Account product", value: "KBZ Savings" },
    { label: "Risk rating", value: "Low" },
    { label: "Notes", value: "Preferred contact after 6 PM." },
  ],
  system: [
    { label: "Created By", value: "Aye Chan" },
    { label: "Created Date & Time", value: "03 Jan 2026, 10:24 AM" },
    { label: "Updated By", value: "Kaung Myat Hein" },
    { label: "Updated Date & Time", value: "02 Sep 2026, 04:12 PM" },
  ],
} as const;

function detailsRecordFromId(id: string) {
  const row = LISTING_TABLE_ROWS.find((r) => r.id === id) ?? LISTING_TABLE_ROWS[0];
  return {
    id: row.id,
    title: row.customer,
    breadcrumbs: ["Home", "Accounts", "Customer accounts", row.customer],
    card: [
      { label: "Card number", value: `4532 •••• •••• ${row.refNo.slice(-4)}` },
      { label: "Card type", value: "Visa Debit" },
      { label: "Status", value: row.statusLabel },
      { label: "Expiry", value: "09 / 28" },
    ],
    member: [
      { label: "Full name", value: row.customer },
      { label: "Customer ID", value: `CUS-${row.refNo}` },
      { label: "NRC / Passport", value: "12/TaKaNa(N)123456" },
      { label: "Date of birth", value: "12 Mar 1992" },
    ],
    contact: [
      { label: "Mobile", value: "+95 9 250 123 456" },
      { label: "Email", value: "kaung.myat@example.com" },
      { label: "Preferred channel", value: "SMS" },
    ],
    additional: [
      { label: "Branch", value: "Yangon Main" },
      { label: "Account product", value: "KBZ Savings" },
      { label: "Risk rating", value: "Low" },
      { label: "Balance", value: `${row.amount.toLocaleString()} MMK` },
    ],
    system: [
      { label: "Created By", value: "Aye Chan" },
      { label: "Created Date & Time", value: "03 Jan 2026, 10:24 AM" },
      { label: "Updated By", value: "Kaung Myat Hein" },
      { label: "Updated Date & Time", value: "02 Sep 2026, 04:12 PM" },
    ],
  };
}

function DetailsField(props: { label: string; value: string; key?: string }) {
  return (
    <Stack gap={4} style={{ minWidth: 160, flex: 1 }}>
      <T size="small" tone="tertiary" style={font({ fontSize: 12 })}>{props.label}</T>
      <T size="small" style={font({ color: LT.primary, fontWeight: 500 })}>{props.value}</T>
    </Stack>
  );
}

function DetailsSection(props: {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
  fields: readonly { label: string; value: string }[];
}) {
  return (
    <div
      style={{
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${VIRYA.border}`,
        background: VIRYA.surface,
        padding: 20,
      }}
    >
      <Stack gap={16}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <LH3 style={font({ margin: 0, fontSize: 16 })}>{props.title}</LH3>
          {props.actionLabel && props.onAction ? (
            <div
              onClick={props.onAction}
              style={font({
                padding: "6px 12px",
                borderRadius: VIRYA.radiusMd,
                border: `1px solid ${BRAND.primary}`,
                color: BRAND.primary,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                flexShrink: 0,
              })}
            >
              {props.actionLabel}
            </div>
          ) : null}
        </div>
        <Row gap={24} wrap align="start">
          {props.fields.map((field) => (
            <DetailsField key={field.label} label={field.label} value={field.value} />
          ))}
        </Row>
      </Stack>
    </div>
  );
}

function DetailsPage() {
  const DELETE_CONFIRM_PHRASE = "Delete Confirm";
  const [, setPage] = useCanvasState<PageId>("ds-page-v8", "details");
  const [recordId, setDetailsRecordId] = useCanvasState<string>("details-record-id", DETAILS_SAMPLE.id);
  const [lastAction, setLastAction] = useCanvasState("details-last-action", "Browse the details layout");
  const [deleteOpen, setDeleteOpen] = useCanvasState("details-delete-open-v2", false);
  const [deleteCaptcha, setDeleteCaptcha] = useCanvasState("details-delete-captcha", "");
  const [navOpen, setNavOpen] = useCanvasState("listing-nav-open-v2", true);
  const [dualLogo, setDualLogo] = useCanvasState("listing-dual-logo", true);
  const [navCurrentId, setNavCurrentId] = useCanvasState("listing-nav-current", "all-accounts");
  const [navHoverId, setNavHoverId] = useCanvasState<string | null>("listing-nav-hover", null);
  const [navFlyoutId, setNavFlyoutId] = useCanvasState<string | null>("listing-nav-flyout-v2", null);
  const [navSubFlyoutId, setNavSubFlyoutId] = useCanvasState<string | null>("listing-nav-sub-flyout-v2", null);

  const recordIndex = Math.max(0, LISTING_TABLE_ROWS.findIndex((r) => r.id === recordId));
  const record = detailsRecordFromId(LISTING_TABLE_ROWS[recordIndex]?.id ?? DETAILS_SAMPLE.id);
  const recordPage = recordIndex + 1;
  const recordTotal = LISTING_TABLE_ROWS.length;
  const canConfirmDelete = deleteCaptcha === DELETE_CONFIRM_PHRASE;

  const closeDeletePopup = () => {
    setDeleteOpen(false);
    setDeleteCaptcha("");
  };

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Patterns · Details"
        title="Details page"
        description="Same app header and left navigation as Listing — only the content area changes. Page header, information sections, section actions, system information, and destructive actions."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.details} />

      <Demo label="Live demo — details page layout">
        <Stack gap={12}>
          <Row gap={8} wrap align="center">
            <T size="small" tone="secondary" style={font()}>{lastAction}</T>
            <div
              onClick={() => {
                setDualLogo(!dualLogo);
                setLastAction(dualLogo ? "Single logo header" : "Dual logo header");
              }}
              style={font({
                marginLeft: "auto",
                padding: "4px 10px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${LIGHT_BORDER}`,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                color: dualLogo ? BRAND.primary : LT.secondary,
                background: dualLogo ? BRAND.primarySoft : "transparent",
              })}
            >
              {dualLogo ? "Dual logo" : "Single logo"}
            </div>
            <div
              onClick={() => {
                setPage("listing");
                setLastAction("Returned to listing");
              }}
              style={font({
                padding: "4px 10px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${LIGHT_BORDER}`,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                color: BRAND.primary,
              })}
            >
              ← Back to listing
            </div>
          </Row>

          <div style={{ position: "relative" }}>
            <ProductAppShell
              dualLogo={dualLogo}
              navOpen={navOpen}
              navCurrentId={navCurrentId}
              navHoverId={navHoverId}
              navFlyoutId={navFlyoutId}
              navSubFlyoutId={navSubFlyoutId}
              contentDimmed={false}
              onToggleNav={() => {
                setNavOpen(!navOpen);
                setNavFlyoutId(null);
                setNavSubFlyoutId(null);
                setLastAction(navOpen ? "Collapsed menu · icon → sub flyout → item flyout" : "Expanded menu · labels + tree");
              }}
              onSelectNav={(id) => {
                setNavCurrentId(id);
                setLastAction(`Active nav item · ${id}`);
              }}
              onHoverNav={setNavHoverId}
              onFlyout={setNavFlyoutId}
              onSubFlyout={setNavSubFlyoutId}
              footer={
                <ListingTableFooter
                  page={recordPage}
                  totalPages={recordTotal}
                  rowsPerPage={1}
                  totalRows={recordTotal}
                  showRowsPerPage={false}
                  recordsLabel={`${recordPage} of ${recordTotal} records`}
                  onPageChange={(p) => {
                    const next = LISTING_TABLE_ROWS[p - 1];
                    if (!next) return;
                    setDetailsRecordId(next.id);
                    setLastAction(`Record ${p} of ${recordTotal} — ${next.customer}`);
                  }}
                />
              }
            >
              <Stack gap={20}>
                <Stack gap={8}>
                  <LH2 style={font({ margin: 0, fontSize: 22 })}>{record.title}</LH2>
                  <BreadcrumbTrail
                    items={[...record.breadcrumbs]}
                    onNavigate={(index) => {
                      if (index <= 2) {
                        setPage("listing");
                        setLastAction(`Breadcrumb → ${record.breadcrumbs[index]}`);
                      }
                    }}
                  />
                  <T size="small" tone="tertiary" style={font()}>
                    Record ID {recordId}
                  </T>
                </Stack>

                <DetailsSection title="Card Information" fields={record.card} />
                <DetailsSection
                  title="Member Information"
                  actionLabel="Edit"
                  onAction={() => setLastAction("Edit — Member Information")}
                  fields={record.member}
                />
                <DetailsSection title="Contact Information" fields={record.contact} />
                <DetailsSection title="Additional Information" fields={record.additional} />
                <DetailsSection title="System Information" fields={record.system} />

                <div
                  style={{
                    borderRadius: VIRYA.radiusMd,
                    border: `1px solid ${VIRYA.secondarySoft}`,
                    background: VIRYA.surface,
                    padding: 20,
                  }}
                >
                  <Stack gap={12}>
                    <LH3 style={font({ margin: 0, fontSize: 16, color: VIRYA.secondary })}>Delete account</LH3>
                    <T size="small" tone="secondary" style={font()}>
                      Permanently remove this customer account. This action cannot be undone.
                    </T>
                    <div style={{ width: "fit-content" }}>
                      <div
                        onClick={() => {
                          setDeleteCaptcha("");
                          setDeleteOpen(true);
                          setLastAction("Opened delete confirmation popup");
                        }}
                        style={font({
                          padding: "8px 16px",
                          borderRadius: VIRYA.radiusMd,
                          background: VIRYA.btn.secondaryEnable,
                          color: VIRYA.btn.textOnFill,
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: "pointer",
                        })}
                      >
                        Delete
                      </div>
                    </div>
                  </Stack>
                </div>
              </Stack>
            </ProductAppShell>

            {deleteOpen ? (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: VIRYA.popup.overlay,
                  padding: 24,
                  borderRadius: VIRYA.radiusMd,
                }}
              >
                <div
                  style={font({
                    width: "100%",
                    maxWidth: 440,
                    borderRadius: VIRYA.radiusLg,
                    border: `1px solid ${VIRYA.popup.border}`,
                    background: VIRYA.popup.surface,
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(8, 8, 8, 0.12)",
                  })}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "16px 16px 12px",
                    }}
                  >
                    <T weight="semibold" style={font({ fontSize: 18, color: VIRYA.popup.title })}>
                      Delete account
                    </T>
                    <PopupCloseButton
                      onClick={() => {
                        closeDeletePopup();
                        setLastAction("Closed delete popup");
                      }}
                    />
                  </div>
                  <div style={{ height: 1, background: LIGHT_BORDER }} />
                  <Stack gap={16} style={{ padding: "16px 16px 20px" }}>
                    <T size="small" style={font({ color: VIRYA.popup.text, lineHeight: "22px" })}>
                      This action cannot be undone. All data for {record.title} will be permanently removed from the system.
                    </T>
                    <Stack gap={6}>
                      <FieldLabel required>Delete Captcha</FieldLabel>
                      <input
                        value={deleteCaptcha}
                        onChange={(e: { target: { value: string } }) => setDeleteCaptcha(e.target.value)}
                        placeholder={`Type "${DELETE_CONFIRM_PHRASE}"`}
                        style={font({
                          width: "100%",
                          boxSizing: "border-box",
                          padding: "8px 12px",
                          borderRadius: VIRYA.radiusMd,
                          border: `1px solid ${VIRYA.field.border}`,
                          background: VIRYA.field.surface,
                          color: VIRYA.field.text,
                          fontSize: 14,
                          outline: "none",
                        })}
                      />
                      <T size="small" tone="tertiary" style={font()}>
                        Type {DELETE_CONFIRM_PHRASE} to enable delete
                      </T>
                    </Stack>
                    <Row gap={12} style={{ justifyContent: "flex-end" }}>
                      <PopupActionButton
                        variant="secondary"
                        label="Cancel"
                        onClick={() => {
                          closeDeletePopup();
                          setLastAction("Cancel — Delete account");
                        }}
                      />
                      <PopupActionButton
                        variant="primary"
                        label="Delete"
                        destructive
                        disabled={!canConfirmDelete}
                        onClick={() => {
                          if (!canConfirmDelete) return;
                          closeDeletePopup();
                          setLastAction(`Delete — ${record.title}`);
                        }}
                      />
                    </Row>
                  </Stack>
                </div>
              </div>
            ) : null}
          </div>

          <T size="small" tone="tertiary" style={font()}>
            Same shell as Listing (header + left nav + pagination in the app frame footer). Content: Page Header → Sections → System Information → Delete
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

const LOGIN_FEATURES = ["Secure access", "Audit-ready", "Role-based"] as const;

function LoginProductImage() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 320,
        height: 180,
        borderRadius: VIRYA.radiusLg,
        background: "rgba(253, 253, 253, 0.12)",
        border: "1px solid rgba(253, 253, 253, 0.22)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <svg width="220" height="140" viewBox="0 0 220 140" fill="none">
        <rect x="24" y="28" width="140" height="88" rx="10" fill="rgba(253,253,253,0.16)" stroke="rgba(253,253,253,0.45)" />
        <rect x="40" y="44" width="72" height="10" rx="5" fill="rgba(253,253,253,0.55)" />
        <rect x="40" y="64" width="108" height="8" rx="4" fill="rgba(253,253,253,0.28)" />
        <rect x="40" y="80" width="96" height="8" rx="4" fill="rgba(253,253,253,0.28)" />
        <rect x="40" y="96" width="56" height="8" rx="4" fill="rgba(225,236,254,0.7)" />
        <rect x="112" y="18" width="84" height="72" rx="10" fill="rgba(253,253,253,0.22)" stroke="rgba(253,253,253,0.5)" />
        <circle cx="154" cy="46" r="14" fill="rgba(225,236,254,0.55)" />
        <rect x="130" y="68" width="48" height="8" rx="4" fill="rgba(253,253,253,0.4)" />
      </svg>
    </div>
  );
}

function LoginPage() {
  const [loginId, setLoginId] = useCanvasState("login-id", "");
  const [password, setPassword] = useCanvasState("login-password", "");
  const [showPassword, setShowPassword] = useCanvasState("login-show-password", false);
  const [lastAction, setLastAction] = useCanvasState("login-last-action", "Enter credentials to sign in");
  const canSubmit = Boolean(loginId.trim() && password.trim());

  const fieldStyle = (focused?: boolean): CSSProperties =>
    font({
      width: "100%",
      boxSizing: "border-box",
      padding: "10px 12px",
      borderRadius: VIRYA.radiusMd,
      border: `1px solid ${focused ? VIRYA.field.focus : VIRYA.field.border}`,
      background: VIRYA.field.surface,
      color: VIRYA.field.text,
      fontSize: 14,
      outline: "none",
    });

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Patterns · Login"
        title="Login page"
        description="Two-column authentication layout — brand & information on the left, login form on the right. Both sections are vertically centered; on smaller screens they stack."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.login} />

      <Demo label="Live demo — login page layout">
        <Stack gap={12}>
          <T size="small" tone="secondary" style={font()}>{lastAction}</T>
          <div
            style={{
              borderRadius: VIRYA.radiusMd,
              border: `1px solid ${VIRYA.table.border}`,
              overflow: "hidden",
              background: VIRYA.surface,
              minHeight: 560,
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                minHeight: 560,
              }}
            >
              {/* Left — Brand & Information */}
              <div
                style={{
                  flex: "1 1 280px",
                  minWidth: 260,
                  background: BRAND.primary,
                  color: VIRYA.btn.textOnFill,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 40,
                  boxSizing: "border-box",
                }}
              >
                <Stack gap={20} style={{ maxWidth: 360, width: "100%" }}>
                  <Row gap={10} align="center" style={{ width: "fit-content" }}>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: VIRYA.radiusMd,
                        background: "rgba(253, 253, 253, 0.16)",
                        border: "1px solid rgba(253, 253, 253, 0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 700,
                        color: VIRYA.btn.textOnFill,
                        fontFamily: BRAND.fontFamily,
                      }}
                    >
                      KB
                    </div>
                    <T weight="semibold" style={font({ color: VIRYA.btn.textOnFill, fontSize: 16 })}>
                      KBZ Bank
                    </T>
                  </Row>

                  <LoginProductImage />

                  <T
                    size="small"
                    weight="semibold"
                    style={font({
                      color: "rgba(253, 253, 253, 0.72)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      fontSize: 11,
                    })}
                  >
                    Virya Portal
                  </T>

                  <LH2 style={font({ margin: 0, fontSize: 28, color: VIRYA.btn.textOnFill, lineHeight: "36px" })}>
                    Secure banking workspace
                  </LH2>

                  <Row gap={8} wrap>
                    {LOGIN_FEATURES.map((tag) => (
                      <div
                        key={tag}
                        style={font({
                          padding: "4px 10px",
                          borderRadius: VIRYA.chip.radius,
                          background: "rgba(225, 236, 254, 0.18)",
                          border: "1px solid rgba(225, 236, 254, 0.35)",
                          color: VIRYA.btn.textOnFill,
                          fontSize: 12,
                          fontWeight: 500,
                        })}
                      >
                        {tag}
                      </div>
                    ))}
                  </Row>

                  <T size="small" style={font({ color: "rgba(253, 253, 253, 0.78)", lineHeight: "22px" })}>
                    Sign in to manage accounts, review requests, and keep audit-ready records across Virya modules.
                  </T>
                </Stack>
              </div>

              {/* Right — Login Form */}
              <div
                style={{
                  flex: "1 1 280px",
                  minWidth: 260,
                  background: VIRYA.surface,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 40,
                  boxSizing: "border-box",
                }}
              >
                <Stack gap={24} style={{ maxWidth: 360, width: "100%" }}>
                  <Stack gap={6}>
                    <LH2 style={font({ margin: 0, fontSize: 24 })}>Welcome back</LH2>
                    <T size="small" tone="secondary" style={font()}>
                      Sign in to continue to Virya
                    </T>
                  </Stack>

                  <Stack gap={16}>
                    <Stack gap={6}>
                      <FieldLabel required>Login ID</FieldLabel>
                      <input
                        value={loginId}
                        onChange={(e: { target: { value: string } }) => setLoginId(e.target.value)}
                        placeholder="Enter your login ID"
                        style={fieldStyle()}
                      />
                    </Stack>

                    <Stack gap={6}>
                      <FieldLabel required>Password</FieldLabel>
                      <div style={{ position: "relative" }}>
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(e: { target: { value: string } }) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          style={mergeStyle(fieldStyle(), { paddingRight: 72 })}
                        />
                        <div
                          onClick={() => setShowPassword(!showPassword)}
                          style={font({
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: 12,
                            fontWeight: 600,
                            color: BRAND.primary,
                            cursor: "pointer",
                            userSelect: "none",
                          })}
                        >
                          {showPassword ? "Hide" : "Show"}
                        </div>
                      </div>
                    </Stack>

                    <ViryaButton
                      label="Login"
                      variant="fill"
                      fullWidth
                      disabled={!canSubmit}
                      onClick={() => {
                        if (!canSubmit) {
                          setLastAction("Enter Login ID and Password to continue");
                          return;
                        }
                        setLastAction(`Signed in as ${loginId.trim()}`);
                      }}
                    />

                    <div
                      onClick={() => setLastAction("Forgot Password — recovery flow")}
                      style={font({
                        color: BRAND.primary,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        width: "fit-content",
                      })}
                    >
                      Forgot Password?
                    </div>
                  </Stack>

                  <Stack gap={4} style={{ paddingTop: 8, borderTop: `1px solid ${LIGHT_BORDER}` }}>
                    <T size="small" tone="tertiary" style={font()}>
                      Need help? Contact IT support
                    </T>
                    <T size="small" tone="tertiary" style={font()}>
                      © KBZ Bank · Virya Portal
                    </T>
                  </Stack>
                </Stack>
              </div>
            </div>
          </div>
          <T size="small" tone="tertiary" style={font()}>
            Two columns · vertically centered · stacks on narrow widths (brand above, form below)
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

function UploadPdfIcon(props: { size?: number; color?: string }) {
  const size = props.size ?? 40;
  const color = props.color ?? VIRYA.critical;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="22" height="32" rx="3" fill={VIRYA.primarySoft} stroke={BRAND.primary} strokeWidth="1.5" />
      <path d="M20 4V12H28" stroke={BRAND.primary} strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="11" y="18" width="14" height="10" rx="2" fill={color} />
      <text
        x="18"
        y="25"
        textAnchor="middle"
        fill={VIRYA.btn.textOnFill}
        fontSize="7"
        fontWeight="700"
        fontFamily="Poppins, system-ui, sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

function UploadCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill={VIRYA.success} />
      <path d="M5.5 9L8 11.5L12.5 6.5" stroke={VIRYA.btn.textOnFill} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UploadCancelIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill={VIRYA.btn.neutralBg} stroke={VIRYA.btn.neutralBorder} />
      <path d="M6.5 6.5L11.5 11.5M11.5 6.5L6.5 11.5" stroke={LT.secondary} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function UploadArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" fill={VIRYA.btn.primaryEnable} />
      <path d="M9 12.5V5.5M9 5.5L6 8.5M9 5.5L12 8.5" stroke={VIRYA.btn.textOnFill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type UploadBarState = "upload" | "success" | "cancel";

function UploadSmallBar(props: {
  fileName: string;
  fileSize: string;
  state: UploadBarState;
  onAction?: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: VIRYA.radiusMd,
        border: `1px solid ${VIRYA.border}`,
        background: VIRYA.surface,
        width: "100%",
        maxWidth: 420,
        boxSizing: "border-box",
      }}
    >
      <div style={{ flexShrink: 0, display: "flex" }}>
        <UploadPdfIcon size={32} />
      </div>
      <Stack gap={2} style={{ flex: 1, minWidth: 0 }}>
        <T size="small" weight="semibold" style={font({ color: LT.primary, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" })}>
          {props.fileName}
        </T>
        <T size="small" tone="tertiary" style={font({ fontSize: 12 })}>
          {props.fileSize}
        </T>
      </Stack>
      <div
        onClick={props.onAction}
        title={props.state === "upload" ? "Upload" : props.state === "success" ? "Uploaded" : "Cancel"}
        style={{
          flexShrink: 0,
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: props.state === "success" ? "default" : "pointer",
          borderRadius: VIRYA.radiusMd,
        }}
      >
        {props.state === "upload" ? <UploadArrowIcon /> : null}
        {props.state === "success" ? <UploadCheckIcon /> : null}
        {props.state === "cancel" ? <UploadCancelIcon /> : null}
      </div>
    </div>
  );
}

function UploadLargeDropZone(props: {
  mode: "idle" | "uploading";
  fileName?: string;
  progressLabel?: string;
  onChooseFile?: () => void;
  helperText: string;
}) {
  return (
    <Stack gap={10} style={{ width: "100%", maxWidth: 480 }}>
      <div
        style={{
          borderRadius: VIRYA.radiusLg,
          border: `1.5px dashed ${VIRYA.borderStrong}`,
          background: VIRYA.primaryLight,
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        <UploadPdfIcon size={48} />
        {props.mode === "idle" ? (
          <>
            <Stack gap={4} style={{ alignItems: "center" }}>
              <T weight="semibold" style={font({ fontSize: 15, color: LT.primary })}>
                Drop PDF here
              </T>
              <T size="small" tone="secondary" style={font()}>
                or select a file from your device
              </T>
            </Stack>
            <ViryaButton label="Choose File" variant="fill" onClick={props.onChooseFile} />
          </>
        ) : (
          <div
            style={{
              width: "100%",
              maxWidth: 320,
              borderRadius: VIRYA.radiusMd,
              border: `1px solid ${VIRYA.border}`,
              background: VIRYA.surface,
              padding: "12px 14px",
              boxSizing: "border-box",
            }}
          >
            <Stack gap={8}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <UploadPdfIcon size={28} />
                <Stack gap={2} style={{ flex: 1, minWidth: 0, alignItems: "flex-start" }}>
                  <T size="small" weight="semibold" style={font({ color: LT.primary })}>
                    {props.fileName ?? "document.pdf"}
                  </T>
                  <T size="small" tone="tertiary" style={font({ fontSize: 12 })}>
                    {props.progressLabel ?? "Uploading…"}
                  </T>
                </Stack>
              </div>
              <div
                style={{
                  height: 6,
                  borderRadius: 9999,
                  background: VIRYA.disabledBg,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "62%",
                    height: "100%",
                    borderRadius: 9999,
                    background: VIRYA.btn.primaryEnable,
                  }}
                />
              </div>
            </Stack>
          </div>
        )}
      </div>
      <T size="small" tone="tertiary" style={font({ textAlign: "center" })}>
        {props.helperText}
      </T>
    </Stack>
  );
}

function UploadPage() {
  const [dropMode, setDropMode] = useCanvasState<"idle" | "uploading">("upload-drop-mode", "idle");
  const [barState, setBarState] = useCanvasState<UploadBarState>("upload-bar-state", "upload");
  const [lastAction, setLastAction] = useCanvasState("upload-last-action", "Choose a file or review upload states");

  return (
    <Stack gap={24}>
      <PageHeader
        eyebrow="Components · Upload"
        title="Upload"
        description="Large Drop Zone for first selection, and Small Upload Bar for compact file status with upload, success, or cancel actions."
      />
      <ComponentGuidelines {...COMPONENT_SPECS.upload} />

      <Demo label="Live demo — Large Drop Zone">
        <Stack gap={12}>
          <Row gap={8} wrap align="center">
            <T size="small" tone="secondary" style={font()}>{lastAction}</T>
            <div
              onClick={() => {
                setDropMode(dropMode === "idle" ? "uploading" : "idle");
                setLastAction(dropMode === "idle" ? "Large zone · uploading card" : "Large zone · Choose File");
              }}
              style={font({
                marginLeft: "auto",
                padding: "4px 10px",
                borderRadius: VIRYA.radiusSm,
                border: `1px solid ${LIGHT_BORDER}`,
                fontSize: 12,
                fontWeight: 500,
                cursor: "pointer",
                color: BRAND.primary,
                background: BRAND.primarySoft,
              })}
            >
              {dropMode === "idle" ? "Show uploading" : "Show idle"}
            </div>
          </Row>
          <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}>
            <UploadLargeDropZone
              mode={dropMode}
              fileName="KBZ_statement_Mar2026.pdf"
              progressLabel="Uploading… 62%"
              helperText="PDF only · Max file size 10 MB"
              onChooseFile={() => {
                setDropMode("uploading");
                setLastAction("Chose file — KBZ_statement_Mar2026.pdf");
              }}
            />
          </div>
        </Stack>
      </Demo>

      <Demo label="Live demo — Small Upload Bar">
        <Stack gap={12}>
          <Row gap={8} wrap>
            {(["upload", "success", "cancel"] as UploadBarState[]).map((s) => (
              <div
                key={s}
                onClick={() => {
                  setBarState(s);
                  setLastAction(`Small bar · ${s}`);
                }}
                style={font({
                  padding: "4px 10px",
                  borderRadius: VIRYA.radiusSm,
                  border: `1px solid ${barState === s ? BRAND.primary : LIGHT_BORDER}`,
                  fontSize: 12,
                  fontWeight: barState === s ? 600 : 500,
                  cursor: "pointer",
                  color: barState === s ? BRAND.primary : LT.secondary,
                  background: barState === s ? BRAND.primarySoft : "transparent",
                })}
              >
                {s === "upload" ? "Upload" : s === "success" ? "Success" : "Cancel"}
              </div>
            ))}
          </Row>
          <UploadSmallBar
            fileName="KYC_form.pdf"
            fileSize="1.2 MB"
            state={barState}
            onAction={() => {
              if (barState === "upload") {
                setBarState("success");
                setLastAction("Upload started → success");
              } else if (barState === "cancel") {
                setLastAction("Cancelled / removed KYC_form.pdf");
              } else {
                setLastAction("Upload complete");
              }
            }}
          />
          <T size="small" tone="tertiary" style={font()}>
            Action icon: upload (primary) · success check · cancel
          </T>
        </Stack>
      </Demo>
    </Stack>
  );
}

const PAGES = {
  color: ColorPage,
  font: FontPage,
  button: ButtonPage,
  breadcrumbs: BreadcrumbsPage,
  checkbox: CheckboxPage,
  radio: RadioPage,
  dropdown: DropdownPage,
  multiselect: MultiSelectDropdownPage,
  textfield: TextfieldPage,
  tooltip: TooltipPage,
  snackbar: SnackbarPage,
  popup: PopupPage,
  pagination: PaginationPage,
  stepper: StepperPage,
  tab: TabPage,
  textarea: TextareaPage,
  chip: ChipPage,
  search: SearchPage,
  upload: UploadPage,
  table: TablePage,
  listing: ListingPage,
  details: DetailsPage,
  login: LoginPage,
};

export default function ViryaDesignSystem() {
  const [page, setPage] = useCanvasState<PageId>("ds-page-v8", "listing");

  let content = <OverviewPage onSelect={setPage} />;
  if (page !== "overview") {
    const Comp = PAGES[page];
    content = Comp ? <Comp /> : (
      <Stack gap={12}>
        <T weight="semibold" style={font()}>Page not found</T>
        <T size="small" tone="secondary" style={font()}>Select a page from the sidebar.</T>
        <div onClick={() => setPage("overview")} style={font({ color: BRAND.primary, fontWeight: 600, cursor: "pointer", width: "fit-content" })}>
          Back to Overview
        </div>
      </Stack>
    );
  }

  return (
    <div style={{ background: LIGHT_CANVAS, minHeight: "100vh", width: "100%", color: LT.primary, boxSizing: "border-box" }}>
    <Row gap={20} align="start" style={font({ padding: 8, minHeight: "100vh", boxSizing: "border-box" })}>
      <SideNav active={page} onSelect={setPage} />
      <div style={{ flex: 1, minWidth: 0 }}>{content}</div>
    </Row>
    </div>
  );
}
