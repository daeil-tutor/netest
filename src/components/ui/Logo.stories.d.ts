import type { StoryObj } from "@storybook/react";
import { Logo } from "./Logo";
declare const meta: {
  title: string;
  component: typeof Logo;
  parameters: {
    layout: string;
    design: {
      url: string;
    };
  };
  tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Small: Story;
export declare const Large: Story;
