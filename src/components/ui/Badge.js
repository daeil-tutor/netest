import { jsx as _jsx } from "react/jsx-runtime";
export function Badge(_a) {
  var _b = _a.type,
    type = _b === void 0 ? "pick" : _b,
    _c = _a.children,
    children = _c === void 0 ? (type === "pick" ? "Pick" : "추천") : _c,
    className = _a.className;
  var backgroundColor =
    type === "pick"
      ? "var(--color-background-pick)"
      : "var(--color-background-recommend)";
  return _jsx("div", {
    className: className,
    style: {
      backgroundColor: backgroundColor,
      padding: "0 var(--spacing-xs)",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
    },
    "data-node-id": type === "pick" ? "8:83" : "8:81",
    children: _jsx("span", {
      style: {
        fontSize: "var(--font-size-10)",
        fontFamily: "var(--font-family-pretendard)",
        fontWeight: 400,
        lineHeight: "var(--line-height-16)",
        color: "var(--color-text-inverse)",
        textAlign: "center",
        letterSpacing: "-0.3px",
        whiteSpace: "nowrap",
      },
      children: children,
    }),
  });
}
