import { Logo } from "./Logo";
var meta = {
  title: "UI/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=5:1916",
    },
  },
  tags: ["autodocs"],
};
export default meta;
export var Default = {
  args: {
    width: 99,
    height: 23,
    alt: "Logo",
  },
};
export var Small = {
  args: {
    width: 50,
    height: 12,
    alt: "Logo Small",
  },
};
export var Large = {
  args: {
    width: 150,
    height: 35,
    alt: "Logo Large",
  },
};
