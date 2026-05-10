import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  title: "UI/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:241",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    variant: "vertical",
  },
  decorators: [
    (Story) => (
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        Text
        <Story />
        Text
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "200px" }}>
        <Story />
      </div>
    ),
  ],
};
