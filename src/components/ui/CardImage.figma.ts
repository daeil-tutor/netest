// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:420
// source=src/components/ui/CardImage.tsx
// component=CardImage
import figma from "figma";
const instance = figma.selectedInstance;

const thumbnail = instance.getEnum("thumnail", {
  "image 1": "image1",
  "image 2": "image2",
});

export default {
  example: figma.code`<CardImage thumbnail="${thumbnail}" src="https://via.placeholder.com/300x200" alt="Card" />`,
  imports: ['import { CardImage } from "src/components/ui"'],
  id: "card-image",
  metadata: { nestable: true },
};
