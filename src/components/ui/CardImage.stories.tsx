import type { Meta, StoryObj } from "@storybook/react";
import { CardImage } from "./CardImage";

const meta = {
  title: "UI/CardImage",
  component: CardImage,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=9:420",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    thumbnail: {
      control: "radio",
      options: ["image1", "image2"],
    },
  },
} satisfies Meta<typeof CardImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    thumbnail: "image1",
    alt: "Card image",
    width: 300,
    height: 200,
  },
};

export const Image1: Story = {
  args: {
    thumbnail: "image1",
    alt: "Card image 1",
    width: 300,
    height: 200,
  },
};

export const Image2: Story = {
  args: {
    thumbnail: "image2",
    alt: "Card image 2",
    width: 300,
    height: 200,
  },
};

export const CustomUrl: Story = {
  args: {
    src: "https://via.placeholder.com/300x200?text=Custom+Card",
    alt: "Custom card image",
    width: 300,
    height: 200,
  },
};
