// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:307
// source=src/components/ui/Link.tsx
// component=Link
import figma from "figma";
const instance = figma.selectedInstance;

const label = instance.findText("Label")?.textContent || "Link";

export default {
  example: figma.code`<Link href="#">${label}</Link>`,
  imports: ['import { Link } from "src/components/ui"'],
  id: "link",
  metadata: { nestable: true },
};
