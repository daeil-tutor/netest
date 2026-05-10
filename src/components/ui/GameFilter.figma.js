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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:150
// source=src/components/ui/GameFilter.tsx
// component=GameFilter
import figma from "figma";
var instance = figma.selectedInstance;
var label = instance.getString("filter name") || "FILTER";
var state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  active: "active",
});
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<GameFilter label="', '" state="', '" />'],
        ['<GameFilter label="', '" state="', '" />'],
      )),
    label,
    state,
  ),
  imports: ['import { GameFilter } from "src/components/ui"'],
  id: "game-filter",
  metadata: { nestable: true },
};
var templateObject_1;
