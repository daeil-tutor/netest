import type { StoryObj } from "@storybook/react";
import { GameFilter } from "./GameFilter";
declare const meta: {
  title: string;
  component: typeof GameFilter;
  parameters: {
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    state: {
      control: "select";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Hover: Story;
export declare const Active: Story;
export declare const CustomLabel: Story;
export declare const Clickable: Story;
