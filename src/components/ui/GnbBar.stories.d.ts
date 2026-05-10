import type { StoryObj } from "@storybook/react";
import { GnbBar } from "./GnbBar";
declare const meta: {
  title: string;
  component: typeof GnbBar;
  parameters: {
    design: {
      url: string;
    };
  };
  tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithHandlers: Story;
