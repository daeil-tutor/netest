// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:580
// source=src/components/ui/CardItem.tsx
// component=CardItem
import figma from "figma";
const instance = figma.selectedInstance;

const gameName = instance.findText("game name")?.textContent || "game name";
const gameCategory =
  instance.findText("game category")?.textContent || "game category";
const state = instance.getEnum("state", {
  default: "default",
  hover: "hover",
});
const style = instance.getEnum("style", {
  vertical: "vertical",
  horizontal: "horizontal",
});
const showUpdate = instance.getBoolean("update bedge#9:5", {
  true: true,
  false: false,
});
const showDesktopIcon = instance.findInstance("desktop") !== null;
const showMobileIcon = instance.findInstance("mobile") !== null;

export default {
  example: figma.code`<CardItem gameName="${gameName}" gameCategory="${gameCategory}" state="${state}" style="${style}" showUpdate={${showUpdate}} showDesktopIcon={${showDesktopIcon}} showMobileIcon={${showMobileIcon}} />`,
  imports: ['import { CardItem } from "src/components/ui"'],
  id: "card-item",
  metadata: { nestable: true },
};
