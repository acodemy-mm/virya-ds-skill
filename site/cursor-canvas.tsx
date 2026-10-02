import {
  type CSSProperties,
  type ReactNode,
  useState,
  type JSX,
} from "react";

export type { CSSProperties };

export function mergeStyle(base: CSSProperties, override?: CSSProperties): CSSProperties {
  return { ...base, ...override };
}

export const canvasPaletteLight = {
  foreground: "#1a1a1a",
  foregroundSecondary: "#424242",
  foregroundTertiary: "#666666",
  foregroundQuaternary: "#b0b0b0",
  editor: "#fafafa",
  chrome: "#fdfdfd",
  sidebar: "#fdfdfd",
  elevated: "#fdfdfd",
  fillPrimary: "#e1ecfe",
  fillSecondary: "#f0f5ff",
  fillTertiary: "#f5f5f5",
  fillQuaternary: "#fafafa",
  strokePrimary: "#b0b0b0",
  strokeSecondary: "#e6e6e6",
  strokeTertiary: "#eeeeee",
  strokeFocused: "#002c76",
  accent: "#002c76",
  buttonBackground: "#002c76",
  buttonForeground: "#fdfdfd",
  buttonHoverBackground: "#012460",
  link: "#002c76",
  diffInsertedLine: "#e8fde8",
  diffRemovedLine: "#fef0f0",
  diffStripAdded: "#008a00",
  diffStripRemoved: "#b30909",
} as const;

export const canvasTokensLight = {
  bg: {
    editor: canvasPaletteLight.editor,
    chrome: canvasPaletteLight.chrome,
    elevated: canvasPaletteLight.elevated,
  },
  text: {
    primary: canvasPaletteLight.foreground,
    secondary: canvasPaletteLight.foregroundSecondary,
    tertiary: canvasPaletteLight.foregroundTertiary,
    quaternary: canvasPaletteLight.foregroundQuaternary,
    link: canvasPaletteLight.link,
    onAccent: canvasPaletteLight.buttonForeground,
  },
  stroke: {
    primary: canvasPaletteLight.strokePrimary,
    secondary: canvasPaletteLight.strokeSecondary,
    tertiary: canvasPaletteLight.strokeTertiary,
    focused: canvasPaletteLight.strokeFocused,
  },
  fill: {
    primary: canvasPaletteLight.fillPrimary,
    secondary: canvasPaletteLight.fillSecondary,
    tertiary: canvasPaletteLight.fillTertiary,
    quaternary: canvasPaletteLight.fillQuaternary,
  },
  accent: {
    primary: canvasPaletteLight.accent,
    control: canvasPaletteLight.buttonBackground,
    controlHover: canvasPaletteLight.buttonHoverBackground,
  },
  diff: {
    insertedLine: canvasPaletteLight.diffInsertedLine,
    removedLine: canvasPaletteLight.diffRemovedLine,
    stripAdded: canvasPaletteLight.diffStripAdded,
    stripRemoved: canvasPaletteLight.diffStripRemoved,
  },
  category: {},
} as const;

export type TextWeight = "normal" | "medium" | "semibold" | "bold";

export type TextProps = {
  children?: ReactNode;
  tone?: "primary" | "secondary" | "tertiary" | "quaternary";
  size?: "body" | "small";
  as?: "p" | "span";
  weight?: TextWeight;
  italic?: boolean;
  truncate?: boolean | "start" | "end";
  style?: CSSProperties;
};

const TONE: Record<string, string> = {
  primary: "#1a1a1a",
  secondary: "#666666",
  tertiary: "#b0b0b0",
  quaternary: "#d6d6d6",
};

const WEIGHT: Record<TextWeight, number> = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export function Stack(props: { children?: ReactNode; gap?: number; style?: CSSProperties }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: props.gap,
        minWidth: 0,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export function Row(props: {
  children?: ReactNode;
  gap?: number;
  align?: "start" | "center" | "end" | "stretch";
  justify?: "start" | "center" | "end" | "space-between";
  wrap?: boolean;
  style?: CSSProperties;
}) {
  const align =
    props.align === "start" ? "flex-start" : props.align === "end" ? "flex-end" : props.align;
  const justify =
    props.justify === "start"
      ? "flex-start"
      : props.justify === "end"
        ? "flex-end"
        : props.justify;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: props.gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: props.wrap ? "wrap" : undefined,
        width: "100%",
        minWidth: 0,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export function Grid(props: {
  children?: ReactNode;
  columns: number | string;
  gap?: number;
  align?: "start" | "center" | "end" | "stretch";
  style?: CSSProperties;
}) {
  const columns =
    typeof props.columns === "number"
      ? `repeat(${props.columns}, minmax(0, 1fr))`
      : props.columns;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gap: props.gap,
        alignItems: props.align,
        width: "100%",
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}

export function Text(props: TextProps) {
  const Tag = (props.as ?? "p") as "p" | "span";
  const truncate = props.truncate === true || props.truncate === "end";
  return (
    <Tag
      style={{
        margin: 0,
        color: TONE[props.tone ?? "primary"],
        fontSize: props.size === "small" ? 12 : 14,
        lineHeight: props.size === "small" ? "16px" : "20px",
        fontWeight: WEIGHT[props.weight ?? "normal"],
        fontStyle: props.italic ? "italic" : undefined,
        overflow: truncate ? "hidden" : undefined,
        textOverflow: truncate ? "ellipsis" : undefined,
        whiteSpace: truncate ? "nowrap" : undefined,
        ...props.style,
      }}
    >
      {props.children}
    </Tag>
  );
}

export function H1(props: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <h1 style={{ margin: 0, fontSize: 24, lineHeight: "30px", fontWeight: 600, ...props.style }}>
      {props.children}
    </h1>
  );
}

export function H2(props: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <h2 style={{ margin: 0, fontSize: 18, lineHeight: "24px", fontWeight: 600, ...props.style }}>
      {props.children}
    </h2>
  );
}

export function H3(props: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <h3 style={{ margin: 0, fontSize: 16, lineHeight: "22px", fontWeight: 600, ...props.style }}>
      {props.children}
    </h3>
  );
}

export function Code(props: { children?: ReactNode; style?: CSSProperties }) {
  return (
    <code
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: "0.92em",
        background: "#f5f5f5",
        border: "1px solid #e6e6e6",
        borderRadius: 4,
        padding: "1px 6px",
        ...props.style,
      }}
    >
      {props.children}
    </code>
  );
}

export function Table(props: {
  headers: ReactNode[];
  rows: ReactNode[][];
  columnAlign?: Array<"left" | "center" | "right" | undefined>;
  striped?: boolean;
  framed?: boolean;
  style?: CSSProperties;
}) {
  const framed = props.framed !== false;
  return (
    <div
      style={{
        overflowX: "auto",
        border: framed ? "1px solid #e6e6e6" : undefined,
        borderRadius: framed ? 8 : undefined,
        background: "#fdfdfd",
        ...props.style,
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {props.headers.map((header, i) => (
              <th
                key={i}
                style={{
                  textAlign: props.columnAlign?.[i] ?? "left",
                  padding: "8px 10px",
                  background: "#f5f5f5",
                  color: "#424242",
                  fontSize: 12,
                  fontWeight: 600,
                  borderBottom: "1px solid #e6e6e6",
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row, r) => (
            <tr key={r} style={{ background: props.striped && r % 2 === 1 ? "#fafafa" : undefined }}>
              {props.headers.map((_, c) => (
                <td
                  key={c}
                  style={{
                    textAlign: props.columnAlign?.[c] ?? "left",
                    padding: "8px 10px",
                    fontSize: 13,
                    color: "#666666",
                    borderBottom: "1px solid #e6e6e6",
                    verticalAlign: "top",
                  }}
                >
                  {row[c]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export type SetCanvasState<T> = (action: T | ((prev: T) => T)) => void;

export function useCanvasState<T>(key: string, initial: T): [T, SetCanvasState<T>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(`virya-ds:${key}`);
      return raw != null ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });

  const set = (action: T | ((prev: T) => T)) => {
    setValue((prev) => {
      const next = typeof action === "function" ? (action as (p: T) => T)(prev) : action;
      try {
        localStorage.setItem(`virya-ds:${key}`, JSON.stringify(next));
      } catch {
        /* ignore quota */
      }
      return next;
    });
  };

  return [value, set];
}

export type { JSX };
