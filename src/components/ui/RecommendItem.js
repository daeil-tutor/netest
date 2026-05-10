import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from "./Image";
export function RecommendItem(_a) {
  var className = _a.className,
    _b = _a.status,
    status = _b === void 0 ? "default" : _b,
    _c = _a.gameName,
    gameName = _c === void 0 ? "Game name" : _c,
    _d = _a.imageUrl,
    imageUrl = _d === void 0 ? "https://via.placeholder.com/153x192" : _d,
    _e = _a.badgeType,
    badgeType = _e === void 0 ? "pick" : _e,
    onClick = _a.onClick;
  var isHover = status === "hover";
  var badgeBackgroundColor =
    badgeType === "pick"
      ? "var(--color-background-pick)"
      : "var(--color-background-recommend)";
  var badgeText = badgeType === "pick" ? "Pick" : "추천";
  return _jsxs("div", {
    className: className,
    style: {
      backgroundColor: "var(--color-background-white)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      width: "153px",
      height: "324px",
      cursor: onClick ? "pointer" : "default",
      boxShadow: isHover ? "var(--shadow-xs)" : "none",
      transition: "box-shadow 0.2s ease-in-out",
    },
    onClick: onClick,
    "data-node-id": "8:112",
    children: [
      _jsx("div", {
        style: {
          overflow: "hidden",
          width: "100%",
          height: "192px",
          flexShrink: 0,
          position: "relative",
        },
        children: _jsx(Image, {
          src: imageUrl,
          alt: gameName,
          style: {
            width: isHover ? "168.3px" : "100%",
            height: isHover ? "211.2px" : "100%",
            position: "absolute",
            left: isHover ? "-7.65px" : "0",
            top: isHover ? "-9.6px" : "0",
            transition: "all 0.2s ease-in-out",
          },
        }),
      }),
      _jsxs("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-xs)",
          padding: "var(--spacing-md) var(--spacing-sm)",
          flex: "1 0 0",
          width: "100%",
        },
        children: [
          _jsx("div", {
            style: {
              backgroundColor: badgeBackgroundColor,
              padding: "0 var(--spacing-xs)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
            },
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
              children: badgeText,
            }),
          }),
          _jsx("div", {
            style: {
              fontSize: "var(--font-size-14)",
              fontFamily: "var(--font-family-pretendard)",
              fontWeight: 700,
              lineHeight: "var(--line-height-16)",
              color: "var(--color-text-primary)",
              wordBreak: "break-word",
            },
            children: gameName,
          }),
        ],
      }),
    ],
  });
}
