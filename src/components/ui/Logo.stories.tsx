import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta = {
  title: "UI/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=5:1916",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 99,
    height: 23,
    alt: "Logo",
  },
};

export const Small: Story = {
  args: {
    width: 50,
    height: 12,
    alt: "Logo Small",
  },
};

export const Large: Story = {
  args: {
    width: 150,
    height: 35,
    alt: "Logo Large",
  },
};
