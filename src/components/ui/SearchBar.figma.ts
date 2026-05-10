// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:1640
// source=src/components/ui/SearchBar.tsx
// component=SearchBar
import figma from "figma";
const instance = figma.selectedInstance;

const state = instance.getEnum("state", {
  default: "default",
  fill: "fill",
  focus: "focus",
});

export default {
  example: figma.code`<SearchBar state="${state}" placeholder="게임명 검색" />`,
  imports: ['import { SearchBar } from "src/components/ui"'],
  id: "search-bar",
  metadata: { nestable: true },
};
