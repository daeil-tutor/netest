import type { StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
declare const meta: {
  title: string;
  component: typeof Footer;
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
export declare const WithCustomLinks: Story;
export declare const WithCustomCompanyInfo: Story;
