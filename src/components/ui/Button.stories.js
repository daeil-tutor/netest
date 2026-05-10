var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype,
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import { expect, userEvent, within } from "@storybook/test";
import { Button } from "./Button";
var meta = {
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
};
export default meta;
// Primary Buttons
export var PrimaryLargeDefault = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "default",
  },
  play: function (_a) {
    return __awaiter(void 0, [_a], void 0, function (_b) {
      var canvas, button;
      var canvasElement = _b.canvasElement;
      return __generator(this, function (_c) {
        canvas = within(canvasElement);
        button = canvas.getByRole("button");
        expect(button).toBeInTheDocument();
        return [2 /*return*/];
      });
    });
  },
};
export var PrimaryLargeHover = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "hover",
  },
};
export var PrimaryLargePress = {
  args: {
    children: "Button",
    size: "lg",
    style: "primary",
    state: "press",
  },
};
export var PrimaryMediumDefault = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "default",
  },
};
export var PrimaryMediumHover = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "hover",
  },
};
export var PrimaryMediumPress = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    state: "press",
  },
};
export var PrimarySmallDefault = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "default",
  },
};
export var PrimarySmallHover = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "hover",
  },
};
export var PrimarySmallPress = {
  args: {
    children: "Button",
    size: "sm",
    style: "primary",
    state: "press",
  },
};
// Secondary Buttons
export var SecondaryLargeDefault = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "default",
  },
};
export var SecondaryLargeHover = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "hover",
  },
};
export var SecondaryLargePress = {
  args: {
    children: "Button",
    size: "lg",
    style: "secondary",
    state: "press",
  },
};
export var SecondaryMediumDefault = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "default",
  },
};
export var SecondaryMediumHover = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "hover",
  },
};
export var SecondaryMediumPress = {
  args: {
    children: "Button",
    size: "md",
    style: "secondary",
    state: "press",
  },
};
export var SecondarySmallDefault = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "default",
  },
};
export var SecondarySmallHover = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "hover",
  },
};
export var SecondarySmallPress = {
  args: {
    children: "Button",
    size: "sm",
    style: "secondary",
    state: "press",
  },
};
// Outline Buttons
export var OutlineLargeDefault = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "default",
  },
};
export var OutlineLargeHover = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "hover",
  },
};
export var OutlineLargePress = {
  args: {
    children: "Button",
    size: "lg",
    style: "outline",
    state: "press",
  },
};
export var OutlineMediumDefault = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "default",
  },
};
export var OutlineMediumHover = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "hover",
  },
};
export var OutlineMediumPress = {
  args: {
    children: "Button",
    size: "md",
    style: "outline",
    state: "press",
  },
};
export var OutlineSmallDefault = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "default",
  },
};
export var OutlineSmallHover = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "hover",
  },
};
export var OutlineSmallPress = {
  args: {
    children: "Button",
    size: "sm",
    style: "outline",
    state: "press",
  },
};
// Disabled State
export var Disabled = {
  args: {
    children: "Button",
    size: "md",
    style: "primary",
    disabled: true,
  },
};
// Interactive Play
export var Interactive = {
  args: {
    children: "Click me",
    size: "md",
    style: "primary",
  },
  play: function (_a) {
    return __awaiter(void 0, [_a], void 0, function (_b) {
      var canvas, button;
      var canvasElement = _b.canvasElement;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            canvas = within(canvasElement);
            button = canvas.getByRole("button");
            return [4 /*yield*/, userEvent.click(button)];
          case 1:
            _c.sent();
            expect(button).toBeInTheDocument();
            return [2 /*return*/];
        }
      });
    });
  },
};
