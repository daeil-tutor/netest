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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:113
// source=src/components/ui/RecommendItem.tsx
// component=RecommendItem
import figma from "figma";
var instance = figma.selectedInstance;
var gameName =
  ((_a = instance.findText("Game name")) === null || _a === void 0
    ? void 0
    : _a.textContent) || "Game name";
var status = instance.getEnum("status", {
  default: "default",
  hover: "hover",
});
// Get badge type from nested bedge instance
var badge = instance.findInstance("bedge");
var badgeType = "pick";
if (badge && badge.type === "INSTANCE") {
  var badgeTypeValue = badge.getEnum("type", {
    pick: "pick",
    recommend: "recommend",
  });
  badgeType = badgeTypeValue || "pick";
}
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<RecommendItem gameName="', '" status="', '" badgeType="', '" />'],
        ['<RecommendItem gameName="', '" status="', '" badgeType="', '" />'],
      )),
    gameName,
    status,
    badgeType,
  ),
  imports: ['import { RecommendItem } from "src/components/ui"'],
  id: "recommend-item",
  metadata: { nestable: true },
};
var templateObject_1;
