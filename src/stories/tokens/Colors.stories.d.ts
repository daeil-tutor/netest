import type { StoryObj } from "@storybook/react";
interface ColorSwatch {
  name: string;
  variable: string;
  value: string;
}
declare const meta: {
  title: string;
  component: ({
    colors,
  }: {
    colors: ColorSwatch[];
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
export declare const Primary: Story;
export declare const SemanticBrand: Story;
export declare const Yellow: Story;
export declare const Blue: Story;
export declare const Green: Story;
export declare const Grey: Story;
export declare const Status: Story;
export declare const SemanticText: Story;
export declare const SemanticBackground: Story;
export declare const White: Story;
export declare const AllColors: {
  args: {};
  render: () => import("react/jsx-runtime").JSX.Element;
  play: () => Promise<void>;
};
