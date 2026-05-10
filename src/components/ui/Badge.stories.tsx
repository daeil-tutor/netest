import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta = {
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
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pick: Story = {
  args: {
    type: "pick",
    children: "Pick",
  },
};

export const Recommend: Story = {
  args: {
    type: "recommend",
    children: "추천",
  },
};

export const WithCustomText: Story = {
  args: {
    type: "pick",
    children: "New",
  },
};
