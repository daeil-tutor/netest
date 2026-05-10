import { jsx as _jsx } from "react/jsx-runtime";
import logoImage from "../../images/logo.png";
export function Logo(_a) {
  var className = _a.className,
    _b = _a.alt,
    alt = _b === void 0 ? "Logo" : _b,
    _c = _a.width,
    width = _c === void 0 ? 99 : _c,
    _d = _a.height,
    height = _d === void 0 ? 23 : _d;
  return _jsx("img", {
    src: logoImage,
    alt: alt,
    width: width,
    height: height,
    className: className,
    "data-node-id": "5:1916",
  });
}
