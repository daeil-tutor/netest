import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { GameFilter } from "./GameFilter";

const meta = {
  title: "Components/GameFilter",
  component: GameFilter,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=9:151",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "hover", "active"],
    },
  },
} satisfies Meta<typeof GameFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    label: "FILTER",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("button")).toBeInTheDocument();
    expect(canvas.getByText("FILTER")).toBeInTheDocument();
  },
};

export const Hover: Story = {
  args: {
    state: "hover",
    label: "FILTER",
  },
};

export const Active: Story = {
  args: {
    state: "active",
    label: "FILTER",
  },
};

export const CustomLabel: Story = {
  args: {
    state: "default",
    label: "ACTION RPG",
  },
};

export const Clickable: Story = {
  args: {
    state: "default",
    label: "FILTER",
    onClick: () => alert("Filter clicked!"),
  },
};
