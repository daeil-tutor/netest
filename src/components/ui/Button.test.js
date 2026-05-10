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
import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
describe("Button", function () {
  it("renders button with text", function () {
    render(_jsx(Button, { children: "Click me" }));
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  it("handles click events", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var handleClick;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            handleClick = vi.fn();
            render(
              _jsx(Button, { onClick: handleClick, children: "Click me" }),
            );
            return [4 /*yield*/, userEvent.click(screen.getByRole("button"))];
          case 1:
            _a.sent();
            expect(handleClick).toHaveBeenCalledOnce();
            return [2 /*return*/];
        }
      });
    });
  });
  it("renders different sizes", function () {
    var rerender = render(
      _jsx(Button, { size: "lg", children: "Button" }),
    ).rerender;
    var button = screen.getByRole("button");
    expect(button).toHaveStyle({ height: "60px" });
    rerender(_jsx(Button, { size: "md", children: "Button" }));
    button = screen.getByRole("button");
    expect(button).toHaveStyle({ height: "50px" });
    rerender(_jsx(Button, { size: "sm", children: "Button" }));
    button = screen.getByRole("button");
    expect(button).toHaveStyle({ height: "40px" });
  });
  it("renders different styles", function () {
    var rerender = render(
      _jsx(Button, { style: "primary", state: "default", children: "Button" }),
    ).rerender;
    var button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "var(--color-brand-primary)",
    });
    rerender(
      _jsx(Button, {
        style: "secondary",
        state: "default",
        children: "Button",
      }),
    );
    button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "var(--color-primary-100)",
    });
    rerender(
      _jsx(Button, { style: "outline", state: "default", children: "Button" }),
    );
    button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "transparent",
      border: "1px solid var(--color-brand-primary)",
    });
  });
  it("disables button when disabled prop is true", function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var handleClick, button;
      return __generator(this, function (_a) {
        handleClick = vi.fn();
        render(
          _jsx(Button, {
            onClick: handleClick,
            disabled: true,
            children: "Click me",
          }),
        );
        button = screen.getByRole("button");
        expect(button).toBeDisabled();
        return [2 /*return*/];
      });
    });
  });
  it("renders hover state", function () {
    render(
      _jsx(Button, { style: "primary", state: "hover", children: "Button" }),
    );
    var button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "var(--color-primary-700)",
    });
  });
  it("renders press state", function () {
    render(
      _jsx(Button, { style: "primary", state: "press", children: "Button" }),
    );
    var button = screen.getByRole("button");
    expect(button).toHaveStyle({
      backgroundColor: "var(--color-primary-800)",
    });
  });
});
