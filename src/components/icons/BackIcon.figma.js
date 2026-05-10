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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=6:1186
// source=src/components/icons/BackIcon.tsx
// component=BackIcon
import figma from "figma";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ["<BackIcon size={24} />"],
        ["<BackIcon size={24} />"],
      )),
  ),
  imports: ['import { BackIcon } from "src/components/icons"'],
  id: "back-icon",
  metadata: { nestable: true },
};
var templateObject_1;
