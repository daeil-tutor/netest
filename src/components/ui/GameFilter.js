import { jsx as _jsx } from "react/jsx-runtime";
export function GameFilter(_a) {
    var className = _a.className, _b = _a.label, label = _b === void 0 ? "FILTER" : _b, _c = _a.state, state = _c === void 0 ? "default" : _c, onClick = _a.onClick;
    var isActive = state === "active";
    var isHover = state === "hover";
    return (_jsx("button", { className: className, onClick: onClick, style: {
            backgroundColor: isActive
                ? "var(--color-background-primary-btn)"
                : "var(--color-background-white)",
            borderRadius: "12px",
            padding: "4px var(--spacing-xs)",
            border: isActive ? "none" : "1px solid var(--color-border-primary)",
            fontFamily: "var(--font-family-pretendard)",
            fontSize: "var(--font-size-12)",
            fontWeight: 400,
            lineHeight: "var(--font-size-14)",
            color: isActive
                ? "var(--color-text-inverse)"
                : "var(--color-text-primary)",
            textTransform: "uppercase",
            cursor: "pointer",
            whiteSpace: "nowrap",
            opacity: isHover ? 0.8 : 1,
            transition: "all 0.2s ease-in-out",
        }, "data-node-id": "9:147", children: label }));
}
