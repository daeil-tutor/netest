import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MenuIcon, CardIcon, LocationIcon } from "../icons";
export function GnbBar(_a) {
  var className = _a.className,
    onMenuClick = _a.onMenuClick,
    onLoginClick = _a.onLoginClick,
    onSignupClick = _a.onSignupClick;
  return _jsxs("nav", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--spacing-md)",
      backgroundColor: "var(--color-background-white)",
      width: "100%",
      gap: "var(--spacing-md)",
    },
    "data-node-id": "7:1156",
    children: [
      _jsxs("div", {
        style: {
          flex: "1 0 0",
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-sm)",
        },
        children: [
          _jsx("button", {
            onClick: onMenuClick,
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            },
            "aria-label": "Menu",
            children: _jsx(MenuIcon, { size: 24 }),
          }),
          _jsx("span", {
            style: {
              fontFamily: "var(--font-family-pretendard)",
              fontSize: "var(--font-size-16)",
              fontWeight: 700,
              lineHeight: "var(--font-size-20)",
              color: "var(--color-text-primary)",
            },
            children: "\uBA54\uB274",
          }),
        ],
      }),
      _jsx("div", {
        style: {
          display: "flex",
          alignItems: "center",
        },
        children: _jsx(Logo, { width: 99, height: 23 }),
      }),
      _jsxs("div", {
        style: {
          flex: "1 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "var(--spacing-sm)",
        },
        children: [
          _jsx("button", {
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            },
            "aria-label": "Card",
            children: _jsx(CardIcon, { size: 24 }),
          }),
          _jsx("button", {
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            },
            "aria-label": "Location",
            children: _jsx(LocationIcon, { size: 24 }),
          }),
          _jsx("button", {
            onClick: onSignupClick,
            style: {
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              fontFamily: "var(--font-family-pretendard)",
              fontSize: "var(--font-size-14)",
              fontWeight: 400,
              lineHeight: "var(--font-size-16)",
              color: "var(--color-text-primary)",
            },
            children: "\uD68C\uC6D0\uAC00\uC785",
          }),
          _jsx(Button, {
            size: "sm",
            style: "outline",
            onClick: onLoginClick,
            children: "\uB85C\uADF8\uC778",
          }),
        ],
      }),
    ],
  });
}
