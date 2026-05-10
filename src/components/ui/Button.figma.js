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
var _a;
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=6:1270
// source=src/components/ui/Button.tsx
// component=Button
import figma from "figma";
var instance = figma.selectedInstance;
var label =
  ((_a = instance.findText("Button")) === null || _a === void 0
    ? void 0
    : _a.textContent) || "Button";
var style = instance.getEnum("style", {
  outline: "outline",
  primary: "primary",
  secondary: "secondary",
});
var size = instance.getEnum("size", {
  lg: "lg",
  md: "md",
  sm: "sm",
});
var state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  press: "press",
});
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<Button style="', '" size="', '" state="', '">', "</Button>"],
        ['<Button style="', '" size="', '" state="', '">', "</Button>"],
      )),
    style,
    size,
    state,
    label,
  ),
  imports: ['import { Button } from "src/components/ui"'],
  id: "button",
  metadata: { nestable: true },
};
var templateObject_1;
