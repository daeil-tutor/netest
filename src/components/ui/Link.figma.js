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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:307
// source=src/components/ui/Link.tsx
// component=Link
import figma from "figma";
var instance = figma.selectedInstance;
var label =
  ((_a = instance.findText("Label")) === null || _a === void 0
    ? void 0
    : _a.textContent) || "Link";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<Link href="#">', "</Link>"],
        ['<Link href="#">', "</Link>"],
      )),
    label,
  ),
  imports: ['import { Link } from "src/components/ui"'],
  id: "link",
  metadata: { nestable: true },
};
var templateObject_1;
