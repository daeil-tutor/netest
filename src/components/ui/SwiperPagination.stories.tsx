import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { SwiperPagination } from "./SwiperPagination";

const meta = {
  title: "Components/SwiperPagination",
  component: SwiperPagination,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=7:1158",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "active"],
    },
  },
} satisfies Meta<typeof SwiperPagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
    gameName: "game name",
    eventName: "event name",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("game name")).toBeInTheDocument();
    expect(canvas.getByText("event name")).toBeInTheDocument();
  },
};

export const Active: Story = {
  args: {
    state: "active",
    gameName: "game name",
    eventName: "event name",
  },
};

export const CustomContent: Story = {
  args: {
    state: "default",
    gameName: "MapleStory",
    eventName: "Summer Adventure Update",
  },
};

export const LongEventName: Story = {
  args: {
    state: "default",
    gameName: "MapleStory",
    eventName: "This is a very long event name that should be truncated",
  },
};

export const Clickable: Story = {
  args: {
    state: "default",
    gameName: "MapleStory",
    eventName: "Summer Adventure Update",
    onClick: () => alert("Pagination clicked!"),
  },
};
