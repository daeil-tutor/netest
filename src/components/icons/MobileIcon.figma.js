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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=6:1190
// source=src/components/icons/MobileIcon.tsx
// component=MobileIcon
import figma from "figma";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ["<MobileIcon size={24} />"],
        ["<MobileIcon size={24} />"],
      )),
  ),
  imports: ['import { MobileIcon } from "src/components/icons"'],
  id: "mobile-icon",
  metadata: { nestable: true },
};
var templateObject_1;
