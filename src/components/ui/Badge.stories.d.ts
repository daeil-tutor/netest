import type { StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
declare const meta: {
  title: string;
  component: typeof Badge;
  parameters: {
    layout: string;
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    type: {
      control: "radio";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Pick: Story;
export declare const Recommend: Story;
export declare const WithCustomText: Story;
