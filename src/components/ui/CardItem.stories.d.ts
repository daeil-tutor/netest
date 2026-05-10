import type { StoryObj } from "@storybook/react";
import { CardItem } from "./CardItem";
declare const meta: {
  title: string;
  component: typeof CardItem;
  parameters: {
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    style: {
      control: "select";
      options: string[];
    };
    state: {
      control: "select";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const VerticalDefault: Story;
export declare const VerticalHover: Story;
export declare const HorizontalDefault: Story;
export declare const HorizontalHover: Story;
export declare const WithoutBadge: Story;
export declare const WithClick: Story;
