import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "./Divider";
var meta = {
  title: "UI/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    design: {
      url: "https://www.figma.com/design/NzIGJGKuE0amh2aDEb2D8P?node-id=10:241",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["vertical", "horizontal"],
    },
  },
};
export default meta;
export var Vertical = {
  args: {
    variant: "vertical",
  },
  decorators: [
    function (Story) {
      return _jsxs("div", {
        style: { display: "flex", gap: "10px", alignItems: "center" },
        children: ["Text", _jsx(Story, {}), "Text"],
      });
    },
  ],
};
export var Horizontal = {
  args: {
    variant: "horizontal",
  },
  decorators: [
    function (Story) {
      return _jsx("div", {
        style: { width: "200px" },
        children: _jsx(Story, {}),
      });
    },
  ],
};
