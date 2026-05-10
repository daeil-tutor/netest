import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SwiperPagination(_a) {
    var className = _a.className, _b = _a.gameName, gameName = _b === void 0 ? "game name" : _b, _c = _a.eventName, eventName = _c === void 0 ? "event name" : _c, _d = _a.state, state = _d === void 0 ? "default" : _d, onClick = _a.onClick;
    var isActive = state === "active";
    return (_jsxs("div", { className: className, onClick: onClick, style: {
            backgroundColor: isActive
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(255, 255, 255, 0.1)",
            padding: "var(--spacing-md)",
            borderRadius: "var(--radius-xs)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-sm)",
            alignItems: "flex-start",
            width: "255px",
            overflow: "hidden",
            cursor: onClick ? "pointer" : "default",
            transition: "background-color 0.2s ease-in-out",
        }, "data-node-id": "7:1192", children: [_jsx("div", { style: {
                    fontSize: "var(--font-size-13)",
                    fontFamily: "var(--font-family-pretendard)",
                    fontWeight: 700,
                    lineHeight: "var(--font-size-16)",
                    color: "var(--color-text-inverse)",
                    whiteSpace: "nowrap",
                }, children: gameName }), _jsx("div", { style: {
                    fontSize: "var(--font-size-18)",
                    fontFamily: "var(--font-family-pretendard)",
                    fontWeight: 700,
                    lineHeight: "var(--font-size-20)",
                    color: "var(--color-text-inverse)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    width: "100%",
                }, title: eventName, children: eventName })] }));
}
