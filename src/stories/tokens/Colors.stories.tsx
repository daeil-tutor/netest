import type { Meta, StoryObj } from "@storybook/react";

interface ColorSwatch {
  name: string;
  variable: string;
  value: string;
}

const getComputedColor = (variable: string): string => {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};

const ColorSwatches = ({ colors }: { colors: ColorSwatch[] }) => (
  <div className="space-y-6">
    {colors.map((color) => (
      <div key={color.variable} className="space-y-2">
        <h3
          className="text-base font-semibold"
          style={{ color: `var(${color.variable})` }}
        >
          {color.name}
        </h3>
        <div className="space-y-1">
          {color.value.includes("var(") ? (
            <div className="text-sm text-gray-600">
              <code className="bg-gray-100 px-2 py-1 rounded">
                {color.variable}
              </code>
              <span className="ml-2">= {color.value}</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div
                className="w-20 h-20 rounded border border-gray-300"
                style={{ backgroundColor: `var(${color.variable})` }}
              />
              <div className="text-sm">
                <div className="font-mono">{color.value}</div>
                <div className="text-gray-600">{color.variable}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const primaryColors: ColorSwatch[] = [
  { name: "Primary 900", variable: "--color-primary-900", value: "#01326b" },
  { name: "Primary 800", variable: "--color-primary-800", value: "#01418c" },
  { name: "Primary 700", variable: "--color-primary-700", value: "#0154b5" },
  { name: "Primary 600", variable: "--color-primary-600", value: "#026ce8" },
  { name: "Primary 500", variable: "--color-primary-500", value: "#0277ff" },
  { name: "Primary 400", variable: "--color-primary-400", value: "#3592ff" },
  { name: "Primary 300", variable: "--color-primary-300", value: "#55a4ff" },
  { name: "Primary 200", variable: "--color-primary-200", value: "#8bc0ff" },
  { name: "Primary 100", variable: "--color-primary-100", value: "#b1d5ff" },
  { name: "Primary 50", variable: "--color-primary-50", value: "#e6f1ff" },
];

const semanticBrand: ColorSwatch[] = [
  {
    name: "Brand Primary",
    variable: "--color-brand-primary",
    value: "var(--color-primary-600)",
  },
  {
    name: "Brand Secondary",
    variable: "--color-brand-secondary",
    value: "var(--color-primary-400)",
  },
];

const yellowColors: ColorSwatch[] = [
  { name: "Yellow 900", variable: "--color-yellow-900", value: "#643310" },
  { name: "Yellow 800", variable: "--color-yellow-800", value: "#824315" },
  { name: "Yellow 700", variable: "--color-yellow-700", value: "#a8571c" },
  { name: "Yellow 600", variable: "--color-yellow-600", value: "#d86f23" },
  { name: "Yellow 500", variable: "--color-yellow-500", value: "#ed7a27" },
  { name: "Yellow 400", variable: "--color-yellow-400", value: "#f19552" },
  { name: "Yellow 300", variable: "--color-yellow-300", value: "#f3a66e" },
  { name: "Yellow 200", variable: "--color-yellow-200", value: "#f7c29c" },
  { name: "Yellow 100", variable: "--color-yellow-100", value: "#f9d6bc" },
  { name: "Yellow 50", variable: "--color-yellow-50", value: "#fdf2e9" },
];

const blueColors: ColorSwatch[] = [
  { name: "Blue/Teal 900", variable: "--color-blue-900", value: "#005c59" },
  { name: "Blue/Teal 800", variable: "--color-blue-800", value: "#007874" },
  { name: "Blue/Teal 700", variable: "--color-blue-700", value: "#009b96" },
  { name: "Blue/Teal 600", variable: "--color-blue-600", value: "#00c7c0" },
  { name: "Blue/Teal 500", variable: "--color-blue-500", value: "#00dbd3" },
  { name: "Blue/Teal 400", variable: "--color-blue-400", value: "#33e2dc" },
  { name: "Blue/Teal 300", variable: "--color-blue-300", value: "#54e7e2" },
  { name: "Blue/Teal 200", variable: "--color-blue-200", value: "#8aeeeb" },
  { name: "Blue/Teal 100", variable: "--color-blue-100", value: "#b0f4f1" },
  { name: "Blue/Teal 50", variable: "--color-blue-50", value: "#e6fbfb" },
];

const greenColors: ColorSwatch[] = [
  { name: "Green 900", variable: "--color-green-900", value: "#125a34" },
  { name: "Green 800", variable: "--color-green-800", value: "#187644" },
  { name: "Green 700", variable: "--color-green-700", value: "#1f9958" },
  { name: "Green 600", variable: "--color-green-600", value: "#28c471" },
  { name: "Green 500", variable: "--color-green-500", value: "#2cd77c" },
  { name: "Green 400", variable: "--color-green-400", value: "#56df96" },
  { name: "Green 300", variable: "--color-green-300", value: "#72e4a7" },
  { name: "Green 200", variable: "--color-green-200", value: "#9eedc3" },
  { name: "Green 100", variable: "--color-green-100", value: "#bef3d6" },
  { name: "Green 50", variable: "--color-green-50", value: "#eafbf2" },
];

const greyColors: ColorSwatch[] = [
  { name: "Grey 900", variable: "--color-grey-900", value: "#1a1a1a" },
  { name: "Grey 800", variable: "--color-grey-800", value: "#333333" },
  { name: "Grey 700", variable: "--color-grey-700", value: "#505050" },
  { name: "Grey 600", variable: "--color-grey-600", value: "#666666" },
  { name: "Grey 500", variable: "--color-grey-500", value: "#888888" },
  { name: "Grey 400", variable: "--color-grey-400", value: "#999999" },
  { name: "Grey 300", variable: "--color-grey-300", value: "#bbbbbb" },
  { name: "Grey 200", variable: "--color-grey-200", value: "#dddddd" },
  { name: "Grey 100", variable: "--color-grey-100", value: "#f2f2f2" },
  { name: "Grey 50", variable: "--color-grey-50", value: "#f9f9f9" },
];

const statusColors: ColorSwatch[] = [
  {
    name: "Status Success",
    variable: "--color-status-success",
    value: "var(--color-green-600)",
  },
  {
    name: "Status Success Light",
    variable: "--color-status-success-light",
    value: "var(--color-green-50)",
  },
  {
    name: "Status Warning",
    variable: "--color-status-warning",
    value: "var(--color-yellow-500)",
  },
  {
    name: "Status Warning Light",
    variable: "--color-status-warning-light",
    value: "var(--color-yellow-50)",
  },
  {
    name: "Status Error",
    variable: "--color-status-error",
    value: "var(--color-red-500)",
  },
  {
    name: "Status Error Light",
    variable: "--color-status-error-light",
    value: "var(--color-red-50)",
  },
];

const semanticText: ColorSwatch[] = [
  {
    name: "Text Primary",
    variable: "--color-text-primary",
    value: "var(--color-grey-900)",
  },
  {
    name: "Text Secondary",
    variable: "--color-text-secondary",
    value: "var(--color-grey-600)",
  },
  {
    name: "Text Tertiary",
    variable: "--color-text-tertiary",
    value: "var(--color-grey-500)",
  },
];

const semanticBg: ColorSwatch[] = [
  {
    name: "BG Primary",
    variable: "--color-bg-primary",
    value: "var(--color-white-100)",
  },
  {
    name: "BG Secondary",
    variable: "--color-bg-secondary",
    value: "var(--color-grey-50)",
  },
  {
    name: "BG Tertiary",
    variable: "--color-bg-tertiary",
    value: "var(--color-grey-100)",
  },
];

const whiteColors: ColorSwatch[] = [
  { name: "White 100", variable: "--color-white-100", value: "#ffffff" },
  { name: "White 90", variable: "--color-white-90", value: "#ffffffe5" },
  { name: "White 80", variable: "--color-white-80", value: "#ffffffcc" },
  { name: "White 70", variable: "--color-white-70", value: "#ffffffb2" },
];

const meta = {
  title: "Design System/Colors",
  component: ColorSwatches,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorSwatches>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { colors: primaryColors },
};

export const SemanticBrand: Story = {
  args: { colors: semanticBrand },
};

export const Yellow: Story = {
  args: { colors: yellowColors },
};

export const Blue: Story = {
  args: { colors: blueColors },
};

export const Green: Story = {
  args: { colors: greenColors },
};

export const Grey: Story = {
  args: { colors: greyColors },
};

export const Status: Story = {
  args: { colors: statusColors },
};

export const SemanticText: Story = {
  args: { colors: semanticText },
};

export const SemanticBackground: Story = {
  args: { colors: semanticBg },
};

export const White: Story = {
  args: { colors: whiteColors },
};

export const AllColors = {
  args: {},
  render: () => (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Primary Colors</h2>
        <ColorSwatches colors={primaryColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Yellow (Accent)</h2>
        <ColorSwatches colors={yellowColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Blue/Teal</h2>
        <ColorSwatches colors={blueColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Green (Success)</h2>
        <ColorSwatches colors={greenColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Grey (Neutral)</h2>
        <ColorSwatches colors={greyColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">White & Opacity</h2>
        <ColorSwatches colors={whiteColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Semantic: Brand</h2>
        <ColorSwatches colors={semanticBrand} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Semantic: Status</h2>
        <ColorSwatches colors={statusColors} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Semantic: Text</h2>
        <ColorSwatches colors={semanticText} />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Semantic: Background</h2>
        <ColorSwatches colors={semanticBg} />
      </section>
    </div>
  ),
  play: async () => {
    // Verify all color variables are defined
    const root = document.documentElement;
    const colors = [
      "--color-primary-600",
      "--color-brand-primary",
      "--color-status-success",
    ];
    colors.forEach((color) => {
      const value = getComputedStyle(root).getPropertyValue(color);
      if (!value) console.warn(`Color variable ${color} not found`);
    });
  },
};
