import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { GnbBar } from "./GnbBar";

const meta = {
  title: "Components/GnbBar",
  component: GnbBar,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=7:1156",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GnbBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <GnbBar />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("메뉴")).toBeInTheDocument();
    expect(canvas.getByText("회원가입")).toBeInTheDocument();
    expect(canvas.getByRole("button", { name: "로그인" })).toBeInTheDocument();
  },
};

export const WithHandlers: Story = {
  render: () => (
    <GnbBar
      onMenuClick={() => alert("Menu clicked")}
      onSignupClick={() => alert("Signup clicked")}
      onLoginClick={() => alert("Login clicked")}
    />
  ),
};
