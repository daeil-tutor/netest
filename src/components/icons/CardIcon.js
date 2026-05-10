import { jsx as _jsx } from "react/jsx-runtime";
import iconSvg from "/images/card.svg";
export function CardIcon(_a) {
  var _b = _a.size,
    size = _b === void 0 ? 24 : _b,
    className = _a.className;
  return _jsx("img", {
    src: iconSvg,
    alt: "card",
    width: size,
    height: size,
    className: className,
    "data-node-id": "6:1233",
  });
}
