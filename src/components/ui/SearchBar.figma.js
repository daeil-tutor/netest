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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:1640
// source=src/components/ui/SearchBar.tsx
// component=SearchBar
import figma from "figma";
var instance = figma.selectedInstance;
var state = instance.getEnum("state", {
  default: "default",
  fill: "fill",
  focus: "focus",
});
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        [
          '<SearchBar state="',
          '" placeholder="\uAC8C\uC784\uBA85 \uAC80\uC0C9" />',
        ],
        [
          '<SearchBar state="',
          '" placeholder="\uAC8C\uC784\uBA85 \uAC80\uC0C9" />',
        ],
      )),
    state,
  ),
  imports: ['import { SearchBar } from "src/components/ui"'],
  id: "search-bar",
  metadata: { nestable: true },
};
var templateObject_1;
