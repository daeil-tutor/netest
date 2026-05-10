// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:89
// source=src/components/ui/Badge.tsx
// component=Badge
import figma from "figma";
const instance = figma.selectedInstance;

const type = instance.getEnum("type", {
  pick: "pick",
  recommend: "recommend",
});

const badgeText = type === "pick" ? "Pick" : "추천";

export default {
  example: figma.code`<Badge type="${type}">${badgeText}</Badge>`,
  imports: ['import { Badge } from "src/components/ui"'],
  id: "badge",
  metadata: { nestable: true },
};
