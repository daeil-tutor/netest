import type { StoryObj } from "@storybook/react";
import { Link } from "./Link";
declare const meta: {
  title: string;
  component: typeof Link;
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
export declare const WithUrl: Story;
export declare const External: Story;
export declare const TermsLink: Story;
export declare const PrivacyLink: Story;
