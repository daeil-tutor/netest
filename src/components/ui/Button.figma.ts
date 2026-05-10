// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=6:1270
// source=src/components/ui/Button.tsx
// component=Button
import figma from "figma";
const instance = figma.selectedInstance;

const label = instance.findText("Button")?.textContent || "Button";
const style = instance.getEnum("style", {
  outline: "outline",
  primary: "primary",
  secondary: "secondary",
});
const size = instance.getEnum("size", {
  lg: "lg",
  md: "md",
  sm: "sm",
});
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
  press: "press",
});

export default {
  example: figma.code`<Button style="${style}" size="${size}" state="${state}">${label}</Button>`,
  imports: ['import { Button } from "src/components/ui"'],
  id: "button",
  metadata: { nestable: true },
};
