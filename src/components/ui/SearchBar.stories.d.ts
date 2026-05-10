import type { StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
declare const meta: {
  title: string;
  component: typeof SearchBar;
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
export declare const Focus: Story;
export declare const Fill: Story;
export declare const WithInput: Story;
export declare const Searchable: Story;
