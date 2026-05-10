import { jsx as _jsx } from "react/jsx-runtime";
export function NewpageIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    className = _a.className,
    _c = _a.color,
    color = _c === void 0 ? "var(--color-grey-700)" : _c;
  return _jsx("svg", {
    width: size,
    height: size,
    style: { display: "block" },
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    "data-node-id": "6:1191",
    children: _jsx("path", {
      id: "arrow_outward",
      d: "M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z",
      fill: color,
    }),
  });
}
