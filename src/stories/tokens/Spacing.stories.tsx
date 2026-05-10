import type { Meta, StoryObj } from "@storybook/react";

interface SpacingToken {
  name: string;
  variable: string;
  value: string;
}

interface RadiusToken {
  name: string;
  variable: string;
  value: string;
}

const SpacingBox = ({ token }: { token: SpacingToken }) => {
  const size = token.value;
  const numValue = parseInt(size);

  return (
    <div className="flex items-start gap-4">
      <div>
        <div
          className="border border-dashed border-gray-400"
          style={{
            width: size,
            height: size,
            backgroundColor: "var(--color-primary-50)",
          }}
        />
      </div>
      <div className="flex-1">
        <div className="font-mono text-sm font-semibold">{token.variable}</div>
        <div className="text-sm text-gray-600">{token.value}</div>
        <div className="text-xs text-gray-400 mt-1">{numValue}px</div>
      </div>
    </div>
  );
};

const RadiusBox = ({ token }: { token: RadiusToken }) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className="border-2 border-gray-300"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: token.value,
          backgroundColor: "var(--color-brand-primary)",
        }}
      />
      <div className="flex-1">
        <div className="font-mono text-sm font-semibold">{token.variable}</div>
        <div className="text-sm text-gray-600">{token.value}</div>
      </div>
    </div>
  );
};

const spacingTokens: SpacingToken[] = [
  { name: "None", variable: "--spacing-none", value: "0" },
  { name: "XXS", variable: "--spacing-xxs", value: "4px" },
  { name: "XS", variable: "--spacing-xs", value: "8px" },
  { name: "SM", variable: "--spacing-sm", value: "12px" },
  { name: "MD", variable: "--spacing-md", value: "16px" },
  { name: "LG", variable: "--spacing-lg", value: "20px" },
  { name: "XL", variable: "--spacing-xl", value: "24px" },
  { name: "2XL", variable: "--spacing-2xl", value: "32px" },
  { name: "3XL", variable: "--spacing-3xl", value: "40px" },
];

const radiusTokens: RadiusToken[] = [
  { name: "None", variable: "--radius-none", value: "0" },
  { name: "XXS", variable: "--radius-xxs", value: "2px" },
  { name: "XS", variable: "--radius-xs", value: "4px" },
  { name: "SM", variable: "--radius-sm", value: "8px" },
  { name: "LG", variable: "--radius-lg", value: "16px" },
  { name: "Full", variable: "--radius-full", value: "9999px" },
];

const SpacingShowcase = ({ tokens }: { tokens: SpacingToken[] }) => (
  <div className="space-y-6">
    {tokens.map((token) => (
      <SpacingBox key={token.variable} token={token} />
    ))}
  </div>
);

const RadiusShowcase = ({ tokens }: { tokens: RadiusToken[] }) => (
  <div className="space-y-6">
    {tokens.map((token) => (
      <RadiusBox key={token.variable} token={token} />
    ))}
  </div>
);

const meta = {
  title: "Design System/Spacing & Radius",
  component: SpacingShowcase,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpacingShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  args: { tokens: spacingTokens },
};

export const SpacingScale = {
  args: {},
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Spacing Scale</h3>
        <SpacingShowcase tokens={spacingTokens} />
      </div>
    </div>
  ),
  play: async () => {
    // Verify spacing tokens
    const root = document.documentElement;
    const spacingVars = [
      "--spacing-none",
      "--spacing-xs",
      "--spacing-md",
      "--spacing-xl",
    ];
    spacingVars.forEach((spacing) => {
      const value = getComputedStyle(root).getPropertyValue(spacing);
      if (!value) console.warn(`Spacing variable ${spacing} not found`);
    });
  },
};

export const BorderRadius = {
  args: {},
  render: () => (
    <div>
      <h3 className="text-lg font-bold mb-4">Border Radius</h3>
      <RadiusShowcase tokens={radiusTokens} />
    </div>
  ),
  play: async () => {
    // Verify radius tokens
    const root = document.documentElement;
    const radiusVars = [
      "--radius-none",
      "--radius-sm",
      "--radius-lg",
      "--radius-full",
    ];
    radiusVars.forEach((radius) => {
      const value = getComputedStyle(root).getPropertyValue(radius);
      if (!value) console.warn(`Radius variable ${radius} not found`);
    });
  },
};

export const LayoutExample = {
  args: {},
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold mb-4">Padding Examples</h3>
        <div className="space-y-4">
          <div
            className="bg-blue-100 border border-blue-300"
            style={{ padding: "var(--spacing-sm)" }}
          >
            <div className="text-sm text-gray-700">
              Padding: --spacing-sm (12px)
            </div>
          </div>
          <div
            className="bg-blue-100 border border-blue-300"
            style={{ padding: "var(--spacing-md)" }}
          >
            <div className="text-sm text-gray-700">
              Padding: --spacing-md (16px)
            </div>
          </div>
          <div
            className="bg-blue-100 border border-blue-300"
            style={{ padding: "var(--spacing-lg)" }}
          >
            <div className="text-sm text-gray-700">
              Padding: --spacing-lg (20px)
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Gap Examples</h3>
        <div style={{ display: "flex", gap: "var(--spacing-md)" }}>
          <div className="w-16 h-16 bg-green-200 border border-green-400" />
          <div className="w-16 h-16 bg-green-200 border border-green-400" />
          <div className="w-16 h-16 bg-green-200 border border-green-400" />
        </div>
        <div className="text-sm text-gray-600 mt-2">
          Gap: --spacing-md (16px)
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Radius Examples</h3>
        <div className="space-y-3">
          <div
            className="w-24 h-24 bg-yellow-200 border border-yellow-400"
            style={{ borderRadius: "var(--radius-xs)" }}
          />
          <div
            className="w-24 h-24 bg-yellow-200 border border-yellow-400"
            style={{ borderRadius: "var(--radius-lg)" }}
          />
          <div
            className="w-24 h-24 bg-yellow-200 border border-yellow-400"
            style={{ borderRadius: "var(--radius-full)" }}
          />
        </div>
      </div>
    </div>
  ),
};
