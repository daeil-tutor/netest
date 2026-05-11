import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { SwiperPagination } from "./SwiperPagination";
export function Banner(_a) {
  var className = _a.className,
    imageUrl = _a.imageUrl,
    _b = _a.events,
    events = _b === void 0 ? [] : _b,
    _c = _a.height,
    height = _c === void 0 ? 560 : _c;
  var _d = useState(0),
    activeIndex = _d[0],
    setActiveIndex = _d[1];
  return _jsxs("div", {
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "".concat(height, "px"),
      alignItems: "center",
      justifyContent: "flex-end",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
    },
    "data-node-id": "45:329",
    children: [
      imageUrl &&
        _jsx("img", {
          src: imageUrl,
          alt: "Banner",
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          },
        }),
      _jsx("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 0,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        },
        children: events.map(function (event, index) {
          return _jsx(
            SwiperPagination,
            {
              eventName: event.eventName,
              gameName: event.gameName,
              state: index === activeIndex ? "active" : "default",
              onClick: function () {
                return setActiveIndex(index);
              },
            },
            event.id,
          );
        }),
      }),
    ],
  });
}
