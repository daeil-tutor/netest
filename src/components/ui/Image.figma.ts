// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:72
// source=src/components/ui/Image.tsx
// component=Image
import figma from "figma";
const instance = figma.selectedInstance;

const thumbnail = instance.getEnum("item thumnail", {
  "image 1": "image1",
  "image 2": "image2",
});

export default {
  example: figma.code`<Image thumbnail="${thumbnail}" src="https://via.placeholder.com/300x200" alt="Item" />`,
  imports: ['import { Image } from "src/components/ui"'],
  id: "image",
  metadata: { nestable: true },
};
