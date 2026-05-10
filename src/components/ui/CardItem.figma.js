var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
var _a, _b;
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:580
// source=src/components/ui/CardItem.tsx
// component=CardItem
import figma from "figma";
var instance = figma.selectedInstance;
var gameName =
  ((_a = instance.findText("game name")) === null || _a === void 0
    ? void 0
    : _a.textContent) || "game name";
var gameCategory =
  ((_b = instance.findText("game category")) === null || _b === void 0
    ? void 0
    : _b.textContent) || "game category";
var state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
});
var style = instance.getEnum("style", {
  vertical: "vertical",
  horizontal: "horizontal",
});
var showUpdate = instance.getBoolean("update bedge#9:5", {
  true: true,
  false: false,
});
var showDesktopIcon = instance.findInstance("desktop") !== null;
var showMobileIcon = instance.findInstance("mobile") !== null;
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        [
          '<CardItem gameName="',
          '" gameCategory="',
          '" state="',
          '" style="',
          '" showUpdate={',
          "} showDesktopIcon={",
          "} showMobileIcon={",
          "} />",
        ],
        [
          '<CardItem gameName="',
          '" gameCategory="',
          '" state="',
          '" style="',
          '" showUpdate={',
          "} showDesktopIcon={",
          "} showMobileIcon={",
          "} />",
        ],
      )),
    gameName,
    gameCategory,
    state,
    style,
    showUpdate,
    showDesktopIcon,
    showMobileIcon,
  ),
  imports: ['import { CardItem } from "src/components/ui"'],
  id: "card-item",
  metadata: { nestable: true },
};
var templateObject_1;
