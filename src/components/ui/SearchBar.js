import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchIcon } from "../icons";
export function SearchBar(_a) {
  var className = _a.className,
    _b = _a.state,
    state = _b === void 0 ? "default" : _b,
    _c = _a.placeholder,
    placeholder = _c === void 0 ? "게임명 검색" : _c,
    _d = _a.value,
    value = _d === void 0 ? "" : _d,
    onChange = _a.onChange,
    onSearch = _a.onSearch;
  var isFocus = state === "focus";
  return _jsxs("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      width: "300px",
      padding: "0 var(--spacing-xxs)",
      borderBottom: "1px solid var(--color-border-primary)",
      borderRadius: "var(--radius-xxs)",
      backgroundColor: isFocus
        ? "var(--color-bg-secondary)"
        : "var(--color-background-white)",
      transition: "background-color 0.2s ease-in-out",
    },
    "data-node-id": "9:1639",
    children: [
      _jsx("input", {
        type: "text",
        value: value,
        onChange: function (e) {
          return onChange === null || onChange === void 0
            ? void 0
            : onChange(e.target.value);
        },
        placeholder: placeholder,
        style: {
          flex: "1 0 0",
          border: "none",
          background: "transparent",
          fontFamily: "var(--font-family-pretendard)",
          fontSize: "var(--font-size-12)",
          fontWeight: 400,
          lineHeight: "var(--font-size-14)",
          color: value
            ? "var(--color-text-primary)"
            : "var(--color-text-tertiary)",
          padding: "12px",
          outline: "none",
          textTransform: "uppercase",
        },
      }),
      _jsx("button", {
        onClick: onSearch,
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
        },
        "aria-label": "Search",
        children: _jsx(SearchIcon, { size: 24 }),
      }),
    ],
  });
}
