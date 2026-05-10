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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:89
// source=src/components/ui/Badge.tsx
// component=Badge
import figma from "figma";
var instance = figma.selectedInstance;
var type = instance.getEnum("type", {
  pick: "pick",
  recommend: "recommend",
});
var badgeText = type === "pick" ? "Pick" : "추천";
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<Badge type="', '">', "</Badge>"],
        ['<Badge type="', '">', "</Badge>"],
      )),
    type,
    badgeText,
  ),
  imports: ['import { Badge } from "src/components/ui"'],
  id: "badge",
  metadata: { nestable: true },
};
var templateObject_1;
