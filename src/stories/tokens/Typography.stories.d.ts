import type { StoryObj } from "@storybook/react";
interface TypographyToken {
  name: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  variable: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}
declare const meta: {
  title: string;
  component: ({
    typos,
  }: {
    typos: TypographyToken[];
  }) => import("react/jsx-runtime").JSX.Element;
  parameters: {
    design: {
      url: string;
    };
    layout: string;
  };
  tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Headlines: Story;
export declare const Subtitles: Story;
export declare const Body: Story;
export declare const Captions: Story;
export declare const AllTypography: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
  play: () => Promise<void>;
};
export declare const FontSizeScale: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
};
