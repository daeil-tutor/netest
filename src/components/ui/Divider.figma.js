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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:241
// source=src/components/ui/Divider.tsx
// component=Divider
import figma from "figma";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<Divider variant="vertical" />'],
        ['<Divider variant="vertical" />'],
      )),
  ),
  imports: ['import { Divider } from "src/components/ui"'],
  id: "divider",
  metadata: { nestable: true },
};
var templateObject_1;
