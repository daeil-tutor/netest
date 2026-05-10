import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
      : "var(--color-background-update)";
  var badgeText = badgeType === "pick" ? "Pick" : "Recommend";
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
      opacity: isHover ? 0.8 : 1,
      transition: "opacity 0.2s ease-in-out",
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
        },
        children: _jsx("img", {
          src: imageUrl,
          alt: gameName,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
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
              borderRadius: "var(--radius-full)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "32px",
              height: "20px",
            },
            children: _jsx("span", {
              style: {
                fontSize: "var(--font-size-10)",
                fontFamily: "var(--font-family-pretendard)",
                fontWeight: 400,
                lineHeight: "var(--font-size-16)",
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
              lineHeight: "var(--font-size-16)",
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
