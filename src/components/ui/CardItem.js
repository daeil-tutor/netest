import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DesktopIcon, MobileIcon } from "../icons";
export function CardItem(_a) {
    var className = _a.className, _b = _a.style, style = _b === void 0 ? "vertical" : _b, _c = _a.state, state = _c === void 0 ? "default" : _c, _d = _a.gameName, gameName = _d === void 0 ? "game name" : _d, _e = _a.gameCategory, gameCategory = _e === void 0 ? "game category" : _e, _f = _a.imageUrl, imageUrl = _f === void 0 ? "https://via.placeholder.com/300x200" : _f, _g = _a.showUpdate, showUpdate = _g === void 0 ? true : _g, _h = _a.showDesktopIcon, showDesktopIcon = _h === void 0 ? true : _h, _j = _a.showMobileIcon, showMobileIcon = _j === void 0 ? true : _j, onClick = _a.onClick;
    var isVertical = style === "vertical";
    var isHover = state === "hover";
    return (_jsxs("div", { className: className, style: {
            backgroundColor: "var(--color-background-white)",
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            alignItems: isVertical ? "flex-start" : "center",
            cursor: onClick ? "pointer" : "default",
            boxShadow: isHover ? "0px 0px 6px rgba(0,0,0,0.1)" : "none",
            transition: "box-shadow 0.2s ease-in-out",
            width: isVertical ? "300px" : "600px",
            position: "relative",
        }, onClick: onClick, "data-node-id": isVertical ? "9:563" : "9:630", children: [_jsx("div", { style: {
                    overflow: "hidden",
                    width: isVertical ? "100%" : "300px",
                    height: "200px",
                    flexShrink: 0,
                    position: "relative",
                }, children: _jsx("img", { src: imageUrl, alt: gameName, style: {
                        width: isHover ? "330px" : "100%",
                        height: isHover ? "220px" : "100%",
                        objectFit: "cover",
                        display: "block",
                        position: "absolute",
                        left: isHover ? "-15px" : "0",
                        top: isHover ? "-10px" : "0",
                        transition: "width 0.2s ease-in-out, height 0.2s ease-in-out, left 0.2s ease-in-out, top 0.2s ease-in-out",
                    } }) }), _jsxs("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--spacing-lg)",
                    padding: "var(--spacing-lg)",
                    width: isVertical ? "100%" : "300px",
                    height: isVertical ? "auto" : "100%",
                    justifyContent: isVertical ? "flex-start" : "center",
                    flexShrink: 0,
                    position: "relative",
                    zIndex: 1,
                    boxSizing: "border-box",
                }, children: [_jsxs("div", { style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "var(--spacing-xs)",
                            width: "98px",
                        }, children: [_jsx("div", { style: {
                                    fontSize: "var(--font-size-16)",
                                    fontFamily: "var(--font-family-pretendard)",
                                    fontWeight: 700,
                                    lineHeight: "var(--font-size-20)",
                                    color: "var(--color-text-primary)",
                                }, children: gameName }), _jsx("div", { style: {
                                    fontSize: "var(--font-size-12)",
                                    fontFamily: "var(--font-family-pretendard)",
                                    fontWeight: 400,
                                    lineHeight: "var(--font-size-14)",
                                    color: "var(--color-text-secondary)",
                                    textTransform: "uppercase",
                                }, children: gameCategory })] }), _jsxs("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                            flexShrink: 0,
                        }, children: [showUpdate && (_jsx("div", { style: {
                                    backgroundColor: "var(--color-background-update)",
                                    padding: "0 var(--spacing-xs)",
                                    borderRadius: "var(--radius-full)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "20px",
                                    flexShrink: 0,
                                }, children: _jsx("span", { style: {
                                        fontSize: "var(--font-size-10)",
                                        fontFamily: "var(--font-family-pretendard)",
                                        fontWeight: 400,
                                        lineHeight: "var(--font-size-16)",
                                        color: "var(--color-text-inverse)",
                                        textAlign: "center",
                                        letterSpacing: "-0.3px",
                                        whiteSpace: "nowrap",
                                    }, children: "Update" }) })), _jsxs("div", { style: {
                                    display: "flex",
                                    gap: "var(--spacing-sm)",
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    flex: "1 0 0",
                                    minWidth: "1px",
                                }, children: [showDesktopIcon && (_jsx("div", { style: {
                                            overflow: "hidden",
                                            width: "24px",
                                            height: "24px",
                                        }, children: _jsx(DesktopIcon, { size: 24 }) })), showMobileIcon && (_jsx("div", { style: {
                                            overflow: "hidden",
                                            width: "24px",
                                            height: "24px",
                                        }, children: _jsx(MobileIcon, { size: 24 }) }))] })] })] })] }));
}
