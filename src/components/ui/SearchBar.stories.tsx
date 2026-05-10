import type { Meta, StoryObj } from "@storybook/react";
import { expect, within, userEvent } from "@storybook/test";
import { SearchBar } from "./SearchBar";

const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=9:1652",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "focus", "fill"],
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("게임명 검색");
    expect(input).toBeInTheDocument();
  },
};

export const Focus: Story = {
  args: {
    state: "focus",
  },
};

export const Fill: Story = {
  args: {
    state: "fill",
    value: "Game Name",
  },
};

export const WithInput: Story = {
  args: {
    state: "default",
    value: "Search value",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("Search value");
    expect(input).toBeInTheDocument();
  },
};

export const Searchable: Story = {
  args: {
    state: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(
      "게임명 검색",
    ) as HTMLInputElement;
    await userEvent.type(input, "test game");
    expect(input.value).toBe("test game");
  },
};
