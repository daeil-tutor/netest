import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta = {
  title: "UI/Link",
  component: Link,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:307",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Link",
  },
};

export const WithUrl: Story = {
  args: {
    href: "https://example.com",
    children: "Visit Site",
  },
};

export const External: Story = {
  args: {
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "External Link",
  },
};

export const TermsLink: Story = {
  args: {
    href: "#terms",
    children: "이용약관",
  },
};

export const PrivacyLink: Story = {
  args: {
    href: "#privacy",
    children: "개인정보처리방침",
  },
};
