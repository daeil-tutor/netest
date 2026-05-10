import type { StoryObj } from "@storybook/react";
import { Image } from "./Image";
declare const meta: {
  title: string;
  component: typeof Image;
  parameters: {
    layout: string;
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    thumbnail: {
      control: "radio";
      options: string[];
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Image1: Story;
export declare const Image2: Story;
export declare const CustomUrl: Story;
