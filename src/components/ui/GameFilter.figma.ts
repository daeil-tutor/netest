// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:150
// source=src/components/ui/GameFilter.tsx
// component=GameFilter
import figma from "figma";
const instance = figma.selectedInstance;

const label = instance.getString("filter name") || "FILTER";
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  active: "active",
});

export default {
  example: figma.code`<GameFilter label="${label}" state="${state}" />`,
  imports: ['import { GameFilter } from "src/components/ui"'],
  id: "game-filter",
  metadata: { nestable: true },
};
