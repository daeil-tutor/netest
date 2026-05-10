import type { Meta, StoryObj } from "@storybook/react";

interface TypographyToken {
  name: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  variable: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const TypographyPreview = ({ typo }: { typo: TypographyToken }) => {
  const Element = typo.tag || "div";
  return (
    <div className="space-y-3">
      <Element
        style={{
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
        }}
      >
        {typo.name} - The quick brown fox jumps over the lazy dog
      </Element>
      <div className="text-sm text-gray-600 space-y-1">
        <div>
          <strong>Variable:</strong>{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">{typo.variable}</code>
        </div>
        <div>
          <strong>Size:</strong> {typo.fontSize} | <strong>Weight:</strong>{" "}
          {typo.fontWeight} | <strong>Height:</strong> {typo.lineHeight}
        </div>
      </div>
    </div>
  );
};

const headlineTypography: TypographyToken[] = [
  {
    name: "H1",
    fontSize: "var(--font-size-28)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-32)",
    variable: "--type-h1",
    tag: "h1",
  },
  {
    name: "H2",
    fontSize: "var(--font-size-24)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-28)",
    variable: "--type-h2",
    tag: "h2",
  },
];

const subtitleTypography: TypographyToken[] = [
  {
    name: "S1",
    fontSize: "var(--font-size-18)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-20)",
    variable: "--type-s1",
    tag: "h3",
  },
  {
    name: "S2",
    fontSize: "var(--font-size-16)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-20)",
    variable: "--type-s2",
    tag: "h4",
  },
];

const bodyTypography: TypographyToken[] = [
  {
    name: "B1",
    fontSize: "var(--font-size-15)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-18)",
    variable: "--type-b1",
    tag: "p",
  },
  {
    name: "B2",
    fontSize: "var(--font-size-14)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b2",
    tag: "p",
  },
  {
    name: "B3",
    fontSize: "var(--font-size-14)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b3",
    tag: "p",
  },
  {
    name: "B4",
    fontSize: "var(--font-size-13)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b4",
    tag: "p",
  },
  {
    name: "B5",
    fontSize: "var(--font-size-12)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-14)",
    variable: "--type-b5",
    tag: "p",
  },
];

const captionTypography: TypographyToken[] = [
  {
    name: "C1",
    fontSize: "var(--font-size-11)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-c1",
    tag: "span",
  },
  {
    name: "C2",
    fontSize: "var(--font-size-10)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-c2",
    tag: "span",
  },
];

const fontSizes = [
  { name: "Size 10", variable: "--font-size-10", value: "10px" },
  { name: "Size 11", variable: "--font-size-11", value: "11px" },
  { name: "Size 12", variable: "--font-size-12", value: "12px" },
  { name: "Size 13", variable: "--font-size-13", value: "13px" },
  { name: "Size 14", variable: "--font-size-14", value: "14px" },
  { name: "Size 15", variable: "--font-size-15", value: "15px" },
  { name: "Size 16", variable: "--font-size-16", value: "16px" },
  { name: "Size 18", variable: "--font-size-18", value: "18px" },
  { name: "Size 24", variable: "--font-size-24", value: "24px" },
  { name: "Size 28", variable: "--font-size-28", value: "28px" },
];

const TypographyShowcase = ({ typos }: { typos: TypographyToken[] }) => (
  <div className="space-y-8">
    {typos.map((typo) => (
      <TypographyPreview key={typo.variable} typo={typo} />
    ))}
  </div>
);

const meta = {
  title: "Design System/Typography",
  component: TypographyShowcase,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypographyShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headlines: Story = {
  args: { typos: headlineTypography },
};

export const Subtitles: Story = {
  args: { typos: subtitleTypography },
};

export const Body: Story = {
  args: { typos: bodyTypography },
};

export const Captions: Story = {
  args: { typos: captionTypography },
};

export const AllTypography = {
  args: {},
  render: () => (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Headlines</h2>
        <TypographyShowcase typos={headlineTypography} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Subtitles</h2>
        <TypographyShowcase typos={subtitleTypography} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Body</h2>
        <TypographyShowcase typos={bodyTypography} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Captions</h2>
        <TypographyShowcase typos={captionTypography} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Font Sizes</h2>
        <div className="space-y-3">
          {fontSizes.map((size) => (
            <div key={size.variable} className="flex items-center gap-4">
              <div style={{ fontSize: size.value }}>Aa</div>
              <div className="flex-1">
                <div className="font-mono text-sm font-semibold">
                  {size.variable}
                </div>
                <div className="text-sm text-gray-600">{size.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Font Weights</h2>
        <div className="space-y-4">
          <div style={{ fontWeight: "var(--font-weight-regular)" }}>
            Regular (400) - The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontWeight: "var(--font-weight-medium)" }}>
            Medium (500) - The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontWeight: "var(--font-weight-semibold)" }}>
            Semi Bold (600) - The quick brown fox jumps over the lazy dog
          </div>
          <div style={{ fontWeight: "var(--font-weight-bold)" }}>
            Bold (700) - The quick brown fox jumps over the lazy dog
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Line Heights</h2>
        <div className="space-y-6">
          <div>
            <div style={{ lineHeight: "var(--line-height-14)" }}>
              Line Height 14px - The quick brown fox jumps over the lazy dog. It
              is a simple sentence to test the line height value and how it
              affects readability of the text.
            </div>
            <div className="text-sm text-gray-600 mt-2">--line-height-14</div>
          </div>
          <div>
            <div style={{ lineHeight: "var(--line-height-20)" }}>
              Line Height 20px - The quick brown fox jumps over the lazy dog. It
              is a simple sentence to test the line height value and how it
              affects readability of the text.
            </div>
            <div className="text-sm text-gray-600 mt-2">--line-height-20</div>
          </div>
          <div>
            <div style={{ lineHeight: "var(--line-height-32)" }}>
              Line Height 32px - The quick brown fox jumps over the lazy dog. It
              is a simple sentence to test the line height value and how it
              affects readability of the text.
            </div>
            <div className="text-sm text-gray-600 mt-2">--line-height-32</div>
          </div>
        </div>
      </section>
    </div>
  ),
  play: async () => {
    // Verify typography tokens exist
    const root = document.documentElement;
    const typoVars = [
      "--font-size-16",
      "--font-weight-bold",
      "--line-height-20",
      "--type-h1",
      "--type-b2",
    ];
    typoVars.forEach((typo) => {
      const value = getComputedStyle(root).getPropertyValue(typo);
      if (!value) console.warn(`Typography variable ${typo} not found`);
    });
  },
};

export const FontSizeScale = {
  args: {},
  render: () => (
    <div>
      <h3 className="text-lg font-bold mb-6">Font Size Scale</h3>
      <div className="space-y-4">
        {fontSizes.map((size) => (
          <div key={size.variable} style={{ fontSize: size.value }}>
            <span className="mr-4">{size.name}</span>
            <span className="text-gray-600">
              The quick brown fox jumps over the lazy dog ({size.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
};
