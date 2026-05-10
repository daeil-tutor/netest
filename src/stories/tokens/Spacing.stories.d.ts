import type { StoryObj } from "@storybook/react";
interface SpacingToken {
  name: string;
  variable: string;
  value: string;
}
declare const meta: {
  title: string;
  component: ({
    tokens,
  }: {
    tokens: SpacingToken[];
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
export declare const Spacing: Story;
export declare const SpacingScale: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
  play: () => Promise<void>;
};
export declare const BorderRadius: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
  play: () => Promise<void>;
};
export declare const LayoutExample: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
};
