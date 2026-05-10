import { jsx as _jsx } from "react/jsx-runtime";
export function Link(_a) {
  var _b = _a.href,
    href = _b === void 0 ? "#" : _b,
    _c = _a.children,
    children = _c === void 0 ? "Link" : _c,
    className = _a.className,
    target = _a.target,
    rel = _a.rel;
  return _jsx("a", {
    href: href,
    target: target,
    rel: rel,
    className: className,
    style: {
      fontSize: "var(--font-size-12)",
      fontFamily: "var(--font-family-pretendard)",
      fontWeight: 400,
      lineHeight: "var(--font-size-14)",
      color: "var(--color-text-footer-link)",
      textDecoration: "none",
      cursor: "pointer",
      textTransform: "uppercase",
    },
    "data-node-id": "10:307",
    children: children,
  });
}
