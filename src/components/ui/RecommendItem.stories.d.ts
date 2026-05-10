import type { StoryObj } from "@storybook/react";
import { RecommendItem } from "./RecommendItem";
declare const meta: {
  title: string;
  component: typeof RecommendItem;
  parameters: {
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    status: {
      control: "select";
      options: string[];
    };
    badgeType: {
      control: "select";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PickDefault: Story;
export declare const PickHover: Story;
export declare const RecommendDefault: Story;
export declare const RecommendHover: Story;
export declare const WithLongName: Story;
export declare const WithClick: Story;
