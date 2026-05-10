import { Badge } from "./Badge";
var meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:89",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["pick", "recommend"],
    },
  },
};
export default meta;
export var Pick = {
  args: {
    type: "pick",
    children: "Pick",
  },
};
export var Recommend = {
  args: {
    type: "recommend",
    children: "추천",
  },
};
export var WithCustomText = {
  args: {
    type: "pick",
    children: "New",
  },
};
