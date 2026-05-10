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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var getComputedColor = function (variable) {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
};
var ColorSwatches = function (_a) {
  var colors = _a.colors;
  return _jsx("div", {
    className: "space-y-6",
    children: colors.map(function (color) {
      return _jsxs(
        "div",
        {
          className: "space-y-2",
          children: [
            _jsx("h3", {
              className: "text-base font-semibold",
              style: { color: "var(".concat(color.variable, ")") },
              children: color.name,
            }),
            _jsx("div", {
              className: "space-y-1",
              children: color.value.includes("var(")
                ? _jsxs("div", {
                    className: "text-sm text-gray-600",
                    children: [
                      _jsx("code", {
                        className: "bg-gray-100 px-2 py-1 rounded",
                        children: color.variable,
                      }),
                      _jsxs("span", {
                        className: "ml-2",
                        children: ["= ", color.value],
                      }),
                    ],
                  })
                : _jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      _jsx("div", {
                        className: "w-20 h-20 rounded border border-gray-300",
                        style: {
                          backgroundColor: "var(".concat(color.variable, ")"),
                        },
                      }),
                      _jsxs("div", {
                        className: "text-sm",
                        children: [
                          _jsx("div", {
                            className: "font-mono",
                            children: color.value,
                          }),
                          _jsx("div", {
                            className: "text-gray-600",
                            children: color.variable,
                          }),
                        ],
                      }),
                    ],
                  }),
            }),
          ],
        },
        color.variable,
      );
    }),
  });
};
var primaryColors = [
  { name: "Primary 900", variable: "--color-primary-900", value: "#01326b" },
  { name: "Primary 800", variable: "--color-primary-800", value: "#01418c" },
  { name: "Primary 700", variable: "--color-primary-700", value: "#0154b5" },
  { name: "Primary 600", variable: "--color-primary-600", value: "#026ce8" },
  { name: "Primary 500", variable: "--color-primary-500", value: "#0277ff" },
  { name: "Primary 400", variable: "--color-primary-400", value: "#3592ff" },
  { name: "Primary 300", variable: "--color-primary-300", value: "#55a4ff" },
  { name: "Primary 200", variable: "--color-primary-200", value: "#8bc0ff" },
  { name: "Primary 100", variable: "--color-primary-100", value: "#b1d5ff" },
  { name: "Primary 50", variable: "--color-primary-50", value: "#e6f1ff" },
];
var semanticBrand = [
  {
    name: "Brand Primary",
    variable: "--color-brand-primary",
    value: "var(--color-primary-600)",
  },
  {
    name: "Brand Secondary",
    variable: "--color-brand-secondary",
    value: "var(--color-primary-400)",
  },
];
var yellowColors = [
  { name: "Yellow 900", variable: "--color-yellow-900", value: "#643310" },
  { name: "Yellow 800", variable: "--color-yellow-800", value: "#824315" },
  { name: "Yellow 700", variable: "--color-yellow-700", value: "#a8571c" },
  { name: "Yellow 600", variable: "--color-yellow-600", value: "#d86f23" },
  { name: "Yellow 500", variable: "--color-yellow-500", value: "#ed7a27" },
  { name: "Yellow 400", variable: "--color-yellow-400", value: "#f19552" },
  { name: "Yellow 300", variable: "--color-yellow-300", value: "#f3a66e" },
  { name: "Yellow 200", variable: "--color-yellow-200", value: "#f7c29c" },
  { name: "Yellow 100", variable: "--color-yellow-100", value: "#f9d6bc" },
  { name: "Yellow 50", variable: "--color-yellow-50", value: "#fdf2e9" },
];
var blueColors = [
  { name: "Blue/Teal 900", variable: "--color-blue-900", value: "#005c59" },
  { name: "Blue/Teal 800", variable: "--color-blue-800", value: "#007874" },
  { name: "Blue/Teal 700", variable: "--color-blue-700", value: "#009b96" },
  { name: "Blue/Teal 600", variable: "--color-blue-600", value: "#00c7c0" },
  { name: "Blue/Teal 500", variable: "--color-blue-500", value: "#00dbd3" },
  { name: "Blue/Teal 400", variable: "--color-blue-400", value: "#33e2dc" },
  { name: "Blue/Teal 300", variable: "--color-blue-300", value: "#54e7e2" },
  { name: "Blue/Teal 200", variable: "--color-blue-200", value: "#8aeeeb" },
  { name: "Blue/Teal 100", variable: "--color-blue-100", value: "#b0f4f1" },
  { name: "Blue/Teal 50", variable: "--color-blue-50", value: "#e6fbfb" },
];
var greenColors = [
  { name: "Green 900", variable: "--color-green-900", value: "#125a34" },
  { name: "Green 800", variable: "--color-green-800", value: "#187644" },
  { name: "Green 700", variable: "--color-green-700", value: "#1f9958" },
  { name: "Green 600", variable: "--color-green-600", value: "#28c471" },
  { name: "Green 500", variable: "--color-green-500", value: "#2cd77c" },
  { name: "Green 400", variable: "--color-green-400", value: "#56df96" },
  { name: "Green 300", variable: "--color-green-300", value: "#72e4a7" },
  { name: "Green 200", variable: "--color-green-200", value: "#9eedc3" },
  { name: "Green 100", variable: "--color-green-100", value: "#bef3d6" },
  { name: "Green 50", variable: "--color-green-50", value: "#eafbf2" },
];
var greyColors = [
  { name: "Grey 900", variable: "--color-grey-900", value: "#1a1a1a" },
  { name: "Grey 800", variable: "--color-grey-800", value: "#333333" },
  { name: "Grey 700", variable: "--color-grey-700", value: "#505050" },
  { name: "Grey 600", variable: "--color-grey-600", value: "#666666" },
  { name: "Grey 500", variable: "--color-grey-500", value: "#888888" },
  { name: "Grey 400", variable: "--color-grey-400", value: "#999999" },
  { name: "Grey 300", variable: "--color-grey-300", value: "#bbbbbb" },
  { name: "Grey 200", variable: "--color-grey-200", value: "#dddddd" },
  { name: "Grey 100", variable: "--color-grey-100", value: "#f2f2f2" },
  { name: "Grey 50", variable: "--color-grey-50", value: "#f9f9f9" },
];
var statusColors = [
  {
    name: "Status Success",
    variable: "--color-status-success",
    value: "var(--color-green-600)",
  },
  {
    name: "Status Success Light",
    variable: "--color-status-success-light",
    value: "var(--color-green-50)",
  },
  {
    name: "Status Warning",
    variable: "--color-status-warning",
    value: "var(--color-yellow-500)",
  },
  {
    name: "Status Warning Light",
    variable: "--color-status-warning-light",
    value: "var(--color-yellow-50)",
  },
  {
    name: "Status Error",
    variable: "--color-status-error",
    value: "var(--color-red-500)",
  },
  {
    name: "Status Error Light",
    variable: "--color-status-error-light",
    value: "var(--color-red-50)",
  },
];
var semanticText = [
  {
    name: "Text Primary",
    variable: "--color-text-primary",
    value: "var(--color-grey-900)",
  },
  {
    name: "Text Secondary",
    variable: "--color-text-secondary",
    value: "var(--color-grey-600)",
  },
  {
    name: "Text Tertiary",
    variable: "--color-text-tertiary",
    value: "var(--color-grey-500)",
  },
];
var semanticBg = [
  {
    name: "BG Primary",
    variable: "--color-bg-primary",
    value: "var(--color-white-100)",
  },
  {
    name: "BG Secondary",
    variable: "--color-bg-secondary",
    value: "var(--color-grey-50)",
  },
  {
    name: "BG Tertiary",
    variable: "--color-bg-tertiary",
    value: "var(--color-grey-100)",
  },
];
var whiteColors = [
  { name: "White 100", variable: "--color-white-100", value: "#ffffff" },
  { name: "White 90", variable: "--color-white-90", value: "#ffffffe5" },
  { name: "White 80", variable: "--color-white-80", value: "#ffffffcc" },
  { name: "White 70", variable: "--color-white-70", value: "#ffffffb2" },
];
var meta = {
  title: "Design System/Colors",
  component: ColorSwatches,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
};
export default meta;
export var Primary = {
  args: { colors: primaryColors },
};
export var SemanticBrand = {
  args: { colors: semanticBrand },
};
export var Yellow = {
  args: { colors: yellowColors },
};
export var Blue = {
  args: { colors: blueColors },
};
export var Green = {
  args: { colors: greenColors },
};
export var Grey = {
  args: { colors: greyColors },
};
export var Status = {
  args: { colors: statusColors },
};
export var SemanticText = {
  args: { colors: semanticText },
};
export var SemanticBackground = {
  args: { colors: semanticBg },
};
export var White = {
  args: { colors: whiteColors },
};
export var AllColors = {
  args: {},
  render: function () {
    return _jsxs("div", {
      className: "space-y-12",
      children: [
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Primary Colors",
            }),
            _jsx(ColorSwatches, { colors: primaryColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Yellow (Accent)",
            }),
            _jsx(ColorSwatches, { colors: yellowColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Blue/Teal",
            }),
            _jsx(ColorSwatches, { colors: blueColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Green (Success)",
            }),
            _jsx(ColorSwatches, { colors: greenColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Grey (Neutral)",
            }),
            _jsx(ColorSwatches, { colors: greyColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "White & Opacity",
            }),
            _jsx(ColorSwatches, { colors: whiteColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Semantic: Brand",
            }),
            _jsx(ColorSwatches, { colors: semanticBrand }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Semantic: Status",
            }),
            _jsx(ColorSwatches, { colors: statusColors }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Semantic: Text",
            }),
            _jsx(ColorSwatches, { colors: semanticText }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-4",
              children: "Semantic: Background",
            }),
            _jsx(ColorSwatches, { colors: semanticBg }),
          ],
        }),
      ],
    });
  },
  play: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var root, colors;
      return __generator(this, function (_a) {
        root = document.documentElement;
        colors = [
          "--color-primary-600",
          "--color-brand-primary",
          "--color-status-success",
        ];
        colors.forEach(function (color) {
          var value = getComputedStyle(root).getPropertyValue(color);
          if (!value)
            console.warn("Color variable ".concat(color, " not found"));
        });
        return [2 /*return*/];
      });
    });
  },
};
