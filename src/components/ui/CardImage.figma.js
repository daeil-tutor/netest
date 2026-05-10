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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:420
// source=src/components/ui/CardImage.tsx
// component=CardImage
import figma from "figma";
var instance = figma.selectedInstance;
var thumbnail = instance.getEnum("thumnail", {
  "image 1": "image1",
  "image 2": "image2",
});
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        [
          '<CardImage thumbnail="',
          '" src="https://via.placeholder.com/300x200" alt="Card" />',
        ],
        [
          '<CardImage thumbnail="',
          '" src="https://via.placeholder.com/300x200" alt="Card" />',
        ],
      )),
    thumbnail,
  ),
  imports: ['import { CardImage } from "src/components/ui"'],
  id: "card-image",
  metadata: { nestable: true },
};
var templateObject_1;
