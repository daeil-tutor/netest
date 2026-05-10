var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx } from "react/jsx-runtime";
var sizeStyles = {
  lg: {
    padding: "var(--spacing-2xl) var(--spacing-lg)",
    height: "60px",
    fontSize: "var(--font-size-16)",
  },
  md: {
    padding: "var(--spacing-lg) var(--spacing-xl)",
    height: "50px",
    fontSize: "var(--font-size-14)",
  },
  sm: {
    padding: "var(--spacing-sm) var(--spacing-md)",
    height: "40px",
    fontSize: "var(--font-size-12)",
  },
};
var styleVariants = {
  primary: {
    default: {
      backgroundColor: "var(--color-grey-900)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    hover: {
      backgroundColor: "var(--color-primary-500)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    press: {
      backgroundColor: "var(--color-primary-700)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
  },
  secondary: {
    default: {
      backgroundColor: "var(--color-grey-700)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    hover: {
      backgroundColor: "var(--color-primary-500)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    press: {
      backgroundColor: "var(--color-primary-700)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
  },
  outline: {
    default: {
      backgroundColor: "transparent",
      color: "var(--color-grey-900)",
      border: "2px solid var(--color-grey-900)",
    },
    hover: {
      backgroundColor: "var(--color-primary-500)",
      color: "var(--color-text-inverse)",
      border: "2px solid var(--color-primary-500)",
    },
    press: {
      backgroundColor: "var(--color-primary-700)",
      color: "var(--color-text-inverse)",
      border: "2px solid var(--color-primary-700)",
    },
  },
};
export function Button(_a) {
  var children = _a.children,
    _b = _a.size,
    size = _b === void 0 ? "md" : _b,
    _c = _a.style,
    style = _c === void 0 ? "primary" : _c,
    _d = _a.state,
    state = _d === void 0 ? "default" : _d,
    onClick = _a.onClick,
    className = _a.className,
    _e = _a.disabled,
    disabled = _e === void 0 ? false : _e;
  var sizeStyle = sizeStyles[size];
  var stateStyle = styleVariants[style][state];
  var borderRadius =
    style === "outline" ? "var(--radius-full)" : "var(--radius-none)";
  return _jsx("button", {
    onClick: onClick,
    disabled: disabled,
    className: className,
    style: __assign(__assign(__assign({}, sizeStyle), stateStyle), {
      fontFamily: "var(--font-family-pretendard)",
      fontWeight: 700,
      lineHeight: "var(--font-size-20)",
      borderRadius: borderRadius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      whiteSpace: "nowrap",
      transition: "all 0.2s ease-in-out",
    }),
    "data-node-id": "6:1269",
    children: children,
  });
}
