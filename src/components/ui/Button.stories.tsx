import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/?node-id=7:1079",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["lg", "md", "sm"],
      description: "Button size",
    },
    style: {
      control: "select",
      options: ["primary", "secondary", "outline"],
      description: "Button style variant",
    },
    state: {
      control: "select",
      options: ["default", "hover", "press"],
      description: "Button state",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Buttons
export const PrimaryLargeDefault: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "default",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toBeInTheDocument();
  },
};

export const PrimaryLargeHover: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "hover",
  },
};

export const PrimaryLargePress: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "press",
  },
};

export const PrimaryMediumDefault: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "default",
  },
};

export const PrimaryMediumHover: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "hover",
  },
};

export const PrimaryMediumPress: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "press",
  },
};

export const PrimarySmallDefault: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "default",
  },
};

export const PrimarySmallHover: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "hover",
  },
};

export const PrimarySmallPress: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "press",
  },
};

// Secondary Buttons
export const SecondaryLargeDefault: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "default",
  },
};

export const SecondaryLargeHover: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "hover",
  },
};

export const SecondaryLargePress: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "press",
  },
};

export const SecondaryMediumDefault: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "default",
  },
};

export const SecondaryMediumHover: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "hover",
  },
};

export const SecondaryMediumPress: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "press",
  },
};

export const SecondarySmallDefault: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "default",
  },
};

export const SecondarySmallHover: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "hover",
  },
};

export const SecondarySmallPress: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "press",
  },
};

// Outline Buttons
export const OutlineLargeDefault: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "default",
  },
};

export const OutlineLargeHover: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "hover",
  },
};

export const OutlineLargePress: Story = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "press",
  },
};

export const OutlineMediumDefault: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "default",
  },
};

export const OutlineMediumHover: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "hover",
  },
};

export const OutlineMediumPress: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "press",
  },
};

export const OutlineSmallDefault: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "default",
  },
};

export const OutlineSmallHover: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "hover",
  },
};

export const OutlineSmallPress: Story = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "press",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    disabled: true,
  },
};

// Interactive Play
export const Interactive: Story = {
  args: {
    children: "Click me",
    size: "md",
    style: "primary",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
  },
};
