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
import itemThumbnail1 from "../../images/item-thumbnail-image-1.png";
import itemThumbnail2 from "../../images/item-thumbnail-image-2.png";
var THUMBNAIL_MAP = {
  image1: itemThumbnail1,
  image2: itemThumbnail2,
};
export function Image(_a) {
  var _b = _a.thumbnail,
    thumbnail = _b === void 0 ? "image1" : _b,
    src = _a.src,
    _c = _a.alt,
    alt = _c === void 0 ? "Item" : _c,
    className = _a.className,
    _d = _a.width,
    width = _d === void 0 ? 300 : _d,
    _e = _a.height,
    height = _e === void 0 ? 200 : _e,
    style = _a.style;
  var imageSrc = src || THUMBNAIL_MAP[thumbnail || "image1"];
  return _jsx("img", {
    src: imageSrc,
    alt: alt,
    width: width,
    height: height,
    className: className,
    style: __assign({ display: "block", objectFit: "cover" }, style),
    "data-node-id": "8:72",
  });
}
