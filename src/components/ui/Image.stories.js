import { Image } from "./Image";
var meta = {
  title: "UI/Image",
  component: Image,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=8:72",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    thumbnail: {
      control: "radio",
      options: ["image1", "image2"],
    },
  },
};
export default meta;
export var Default = {
  args: {
    thumbnail: "image1",
    alt: "Item thumbnail",
    width: 300,
    height: 200,
  },
};
export var Image1 = {
  args: {
    thumbnail: "image1",
    alt: "First thumbnail",
    width: 300,
    height: 200,
  },
};
export var Image2 = {
  args: {
    thumbnail: "image2",
    alt: "Second thumbnail",
    width: 300,
    height: 200,
  },
};
export var CustomUrl = {
  args: {
    src: "https://via.placeholder.com/300x200?text=Custom+Image",
    alt: "Custom image",
    width: 300,
    height: 200,
  },
};
