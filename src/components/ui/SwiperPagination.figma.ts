// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=7:1193
// source=src/components/ui/SwiperPagination.tsx
// component=SwiperPagination
import figma from "figma";
const instance = figma.selectedInstance;

const gameName = instance.getString("game name#7:0") || "game name";
const eventName = instance.getString("event name#7:3") || "event name";
const state = instance.getEnum("state", {
  default: "default",
  active: "active",
});

export default {
  example: figma.code`<SwiperPagination gameName="${gameName}" eventName="${eventName}" state="${state}" />`,
  imports: ['import { SwiperPagination } from "src/components/ui"'],
  id: "swiper-pagination",
  metadata: { nestable: true },
};
