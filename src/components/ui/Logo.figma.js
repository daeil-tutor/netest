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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=5:1916
// source=src/components/ui/Logo.tsx
// component=Logo
import figma from "figma";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ["<Logo width={99} height={23} />"],
        ["<Logo width={99} height={23} />"],
      )),
  ),
  imports: ['import { Logo } from "src/components/ui"'],
  id: "logo",
  metadata: { nestable: true },
};
var templateObject_1;
