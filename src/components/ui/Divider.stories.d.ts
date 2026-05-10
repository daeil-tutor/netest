import type { StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
declare const meta: {
  title: string;
  component: typeof Divider;
  parameters: {
    layout: string;
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    variant: {
      control: "radio";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Vertical: Story;
export declare const Horizontal: Story;
