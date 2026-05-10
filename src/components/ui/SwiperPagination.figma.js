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
// url=https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=7:1193
// source=src/components/ui/SwiperPagination.tsx
// component=SwiperPagination
import figma from "figma";
var instance = figma.selectedInstance;
var gameName = instance.getString("game name#7:0") || "game name";
var eventName = instance.getString("event name#7:3") || "event name";
var state = instance.getEnum("state", {
  default: "default",
  active: "active",
});
export default {
  example: figma.code(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['<SwiperPagination gameName="', '" eventName="', '" state="', '" />'],
        ['<SwiperPagination gameName="', '" eventName="', '" state="', '" />'],
      )),
    gameName,
    eventName,
    state,
  ),
  imports: ['import { SwiperPagination } from "src/components/ui"'],
  id: "swiper-pagination",
  metadata: { nestable: true },
};
var templateObject_1;
