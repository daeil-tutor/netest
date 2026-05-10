import type { StoryObj } from "@storybook/react";
import { Button } from "./Button";
declare const meta: {
  title: string;
  component: typeof Button;
  parameters: {
    design: {
      url: string;
    };
  };
  tags: string[];
  argTypes: {
    size: {
      control: "select";
      options: string[];
      description: string;
    };
    style: {
      control: "select";
      options: string[];
      description: string;
    };
    state: {
      control: "select";
      options: string[];
      description: string;
    };
    disabled: {
      control: "boolean";
      description: string;
    };
  };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimaryLargeDefault: Story;
export declare const PrimaryLargeHover: Story;
export declare const PrimaryLargePress: Story;
export declare const PrimaryMediumDefault: Story;
export declare const PrimaryMediumHover: Story;
export declare const PrimaryMediumPress: Story;
export declare const PrimarySmallDefault: Story;
export declare const PrimarySmallHover: Story;
export declare const PrimarySmallPress: Story;
export declare const SecondaryLargeDefault: Story;
export declare const SecondaryLargeHover: Story;
export declare const SecondaryLargePress: Story;
export declare const SecondaryMediumDefault: Story;
export declare const SecondaryMediumHover: Story;
export declare const SecondaryMediumPress: Story;
export declare const SecondarySmallDefault: Story;
export declare const SecondarySmallHover: Story;
export declare const SecondarySmallPress: Story;
export declare const OutlineLargeDefault: Story;
export declare const OutlineLargeHover: Story;
export declare const OutlineLargePress: Story;
export declare const OutlineMediumDefault: Story;
export declare const OutlineMediumHover: Story;
export declare const OutlineMediumPress: Story;
export declare const OutlineSmallDefault: Story;
export declare const OutlineSmallHover: Story;
export declare const OutlineSmallPress: Story;
export declare const Disabled: Story;
export declare const Interactive: Story;
