import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { CardItem } from "./CardItem";
import cardThumbnail1 from "../../images/card-thumbnail-image-1.png";

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
    imageUrl: cardThumbnail1,
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
    imageUrl: cardThumbnail1,
  },
};

export const HorizontalDefault: Story = {
  args: {
    style: "horizontal",
    state: "default",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    imageUrl: cardThumbnail1,
  },
};

export const HorizontalHover: Story = {
  args: {
    style: "horizontal",
    state: "hover",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    imageUrl: cardThumbnail1,
  },
};

export const WithoutBadge: Story = {
  args: {
    style: "vertical",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    showUpdate: false,
    imageUrl: cardThumbnail1,
  },
};

export const WithClick: Story = {
  args: {
    style: "vertical",
    gameName: "Game Name",
    gameCategory: "Action RPG",
    imageUrl: cardThumbnail1,
    onClick: () => alert("Card clicked!"),
  },
};
