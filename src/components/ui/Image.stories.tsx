import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "./Image";

const meta = {
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
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "image1",
    alt: "Item thumbnail",
    width: 300,
    height: 200,
  },
};

export const Image1: Story = {
  args: {
    thumbnail: "image1",
    alt: "First thumbnail",
    width: 300,
    height: 200,
  },
};

export const Image2: Story = {
  args: {
    thumbnail: "image2",
    alt: "Second thumbnail",
    width: 300,
    height: 200,
  },
};

export const CustomUrl: Story = {
  args: {
    src: "https://via.placeholder.com/300x200?text=Custom+Image",
    alt: "Custom image",
    width: 300,
    height: 200,
  },
};
