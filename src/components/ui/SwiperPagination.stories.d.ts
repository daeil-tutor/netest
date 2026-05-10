import type { StoryObj } from "@storybook/react";
import { SwiperPagination } from "./SwiperPagination";
declare const meta: {
    title: string;
    component: typeof SwiperPagination;
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
export declare const Active: Story;
export declare const CustomContent: Story;
export declare const LongEventName: Story;
export declare const Clickable: Story;
