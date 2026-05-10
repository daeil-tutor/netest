import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { CardItem } from "./CardItem";

const meta = {
  title: "Components/CardItem",
  component: CardItem,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=9:597",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    state: {
      control: "select",
      options: ["default", "hover"],
    },
  },
} satisfies Meta<typeof CardItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalDefault: Story = {
  args: {
    style: "vertical",
    state: "default",
    gameName: "Game Name",
    gameCategory: "Action RPG",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Game Name")).toBeInTheDocument();
    expect(canvas.getByText("ACTION RPG")).toBeInTheDocument();
  },
};

export const VerticalHover: Story = {
  args: {
    style: "vertical",
    state: "hover",
    gameName: "Game Name",
    gameCategory: "Action RPG",
  },
};

export const HorizontalDefault: Story = {
  args: {
    style: "horizontal",
    state: "default",
    gameName: "Game Name",
    gameCategory: "Action RPG",
  },
};

export const HorizontalHover: Story = {
  args: {
    style: "horizontal",
    state: "hover",
    gameName: "Game Name",
    gameCategory: "Action RPG",
  },
};

export const WithoutBadge: Story = {
  args: {
    style: "vertical",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    showUpdate: false,
  },
};

export const WithClick: Story = {
  args: {
    style: "vertical",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    onClick: () => alert("Card clicked!"),
  },
};
