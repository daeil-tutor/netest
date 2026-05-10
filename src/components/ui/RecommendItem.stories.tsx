import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { RecommendItem } from "./RecommendItem";

const meta = {
  title: "Components/RecommendItem",
  component: RecommendItem,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=8:114",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "hover"],
    },
    badgeType: {
      control: "select",
      options: ["pick", "recommend"],
    },
  },
} satisfies Meta<typeof RecommendItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PickDefault: Story = {
  args: {
    status: "default",
    gameName: "Game name",
    badgeType: "pick",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Game name")).toBeInTheDocument();
    expect(canvas.getByText("Pick")).toBeInTheDocument();
  },
};

export const PickHover: Story = {
  args: {
    status: "hover",
    gameName: "Game name",
    badgeType: "pick",
  },
};

export const RecommendDefault: Story = {
  args: {
    status: "default",
    gameName: "Game name",
    badgeType: "recommend",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Recommend")).toBeInTheDocument();
  },
};

export const RecommendHover: Story = {
  args: {
    status: "hover",
    gameName: "Game name",
    badgeType: "recommend",
  },
};

export const WithLongName: Story = {
  args: {
    status: "default",
    gameName: "Very Long Game Name Here",
    badgeType: "pick",
  },
};

export const WithClick: Story = {
  args: {
    status: "default",
    gameName: "Game name",
    badgeType: "pick",
    onClick: () => alert("Recommend item clicked!"),
  },
};
