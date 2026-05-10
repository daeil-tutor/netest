// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:113
// source=src/components/ui/RecommendItem.tsx
// component=RecommendItem
import figma from "figma";
const instance = figma.selectedInstance;

const gameName = instance.findText("Game name")?.textContent || "Game name";
const status = instance.getEnum("status", {
  default: "default",
  hover: "hover",
});

// Get badge type from nested bedge instance
const badge = instance.findInstance("bedge");
let badgeType = "pick";
if (badge && badge.type === "INSTANCE") {
  const badgeTypeValue = badge.getEnum("type", {
    pick: "pick",
    recommend: "recommend",
  });
  badgeType = badgeTypeValue || "pick";
}

export default {
  example: figma.code`<RecommendItem gameName="${gameName}" status="${status}" badgeType="${badgeType}" />`,
  imports: ['import { RecommendItem } from "src/components/ui"'],
  id: "recommend-item",
  metadata: { nestable: true },
};
