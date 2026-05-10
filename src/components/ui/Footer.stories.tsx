import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=17:289",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Footer />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("이용약관")).toBeInTheDocument();
    expect(canvas.getByText("회사소개")).toBeInTheDocument();
  },
};

export const WithCustomLinks: Story = {
  render: () => (
    <Footer
      topLinks={[
        { label: "Terms", href: "/terms" },
        { label: "Privacy", href: "/privacy" },
        { label: "Support", href: "/support" },
      ]}
      bottomLinks={[
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
      ]}
    />
  ),
};

export const WithCustomCompanyInfo: Story = {
  render: () => (
    <Footer
      companyInfo={{
        name: "테스트 회사",
        ceo: "홍길동",
        address: "서울시 강남구 테헤란로 123",
        phone: "02-1234-5678",
        fax: "02-1234-5679",
        email: "test@company.com",
        businessNumber: "123-45-67890",
        noticeNumber: "2024-서울강남-12345",
      }}
    />
  ),
};
