import { jsx as _jsx } from "react/jsx-runtime";
export function Divider(_a) {
  var _b = _a.variant,
    variant = _b === void 0 ? "vertical" : _b,
    className = _a.className;
  return _jsx("div", {
    className: className,
    style:
      variant === "vertical"
        ? {
            width: "1px",
            height: "12px",
            backgroundColor: "var(--color-border-primary)",
            opacity: 0.3,
          }
        : {
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-border-primary)",
            opacity: 0.2,
          },
    "data-node-id": "10:241",
  });
}
