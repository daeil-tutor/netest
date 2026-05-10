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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=6:1233
// source=src/components/icons/CardIcon.tsx
// component=CardIcon
import figma from "figma";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ["<CardIcon size={24} />"],
        ["<CardIcon size={24} />"],
      )),
  ),
  imports: ['import { CardIcon } from "src/components/icons"'],
  id: "card-icon",
  metadata: { nestable: true },
};
var templateObject_1;
