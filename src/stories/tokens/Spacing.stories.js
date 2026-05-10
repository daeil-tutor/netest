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
var SpacingBox = function (_a) {
  var token = _a.token;
  var size = token.value;
  var numValue = parseInt(size);
  return _jsxs("div", {
    className: "flex items-start gap-4",
    children: [
      _jsx("div", {
        children: _jsx("div", {
          className: "border border-dashed border-gray-400",
          style: {
            width: size,
            height: size,
            backgroundColor: "var(--color-primary-50)",
          },
        }),
      }),
      _jsxs("div", {
        className: "flex-1",
        children: [
          _jsx("div", {
            className: "font-mono text-sm font-semibold",
            children: token.variable,
          }),
          _jsx("div", {
            className: "text-sm text-gray-600",
            children: token.value,
          }),
          _jsxs("div", {
            className: "text-xs text-gray-400 mt-1",
            children: [numValue, "px"],
          }),
        ],
      }),
    ],
  });
};
var RadiusBox = function (_a) {
  var token = _a.token;
  return _jsxs("div", {
    className: "flex items-center gap-4",
    children: [
      _jsx("div", {
        className: "border-2 border-gray-300",
        style: {
          width: "80px",
          height: "80px",
          borderRadius: token.value,
          backgroundColor: "var(--color-brand-primary)",
        },
      }),
      _jsxs("div", {
        className: "flex-1",
        children: [
          _jsx("div", {
            className: "font-mono text-sm font-semibold",
            children: token.variable,
          }),
          _jsx("div", {
            className: "text-sm text-gray-600",
            children: token.value,
          }),
        ],
      }),
    ],
  });
};
var spacingTokens = [
  { name: "None", variable: "--spacing-none", value: "0" },
  { name: "XXS", variable: "--spacing-xxs", value: "4px" },
  { name: "XS", variable: "--spacing-xs", value: "8px" },
  { name: "SM", variable: "--spacing-sm", value: "12px" },
  { name: "MD", variable: "--spacing-md", value: "16px" },
  { name: "LG", variable: "--spacing-lg", value: "20px" },
  { name: "XL", variable: "--spacing-xl", value: "24px" },
  { name: "2XL", variable: "--spacing-2xl", value: "32px" },
  { name: "3XL", variable: "--spacing-3xl", value: "40px" },
];
var radiusTokens = [
  { name: "None", variable: "--radius-none", value: "0" },
  { name: "XXS", variable: "--radius-xxs", value: "2px" },
  { name: "XS", variable: "--radius-xs", value: "4px" },
  { name: "SM", variable: "--radius-sm", value: "8px" },
  { name: "LG", variable: "--radius-lg", value: "16px" },
  { name: "Full", variable: "--radius-full", value: "9999px" },
];
var SpacingShowcase = function (_a) {
  var tokens = _a.tokens;
  return _jsx("div", {
    className: "space-y-6",
    children: tokens.map(function (token) {
      return _jsx(SpacingBox, { token: token }, token.variable);
    }),
  });
};
var RadiusShowcase = function (_a) {
  var tokens = _a.tokens;
  return _jsx("div", {
    className: "space-y-6",
    children: tokens.map(function (token) {
      return _jsx(RadiusBox, { token: token }, token.variable);
    }),
  });
};
var meta = {
  title: "Design System/Spacing & Radius",
  component: SpacingShowcase,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
};
export default meta;
export var Spacing = {
  args: { tokens: spacingTokens },
};
export var SpacingScale = {
  args: {},
  render: function () {
    return _jsx("div", {
      className: "space-y-8",
      children: _jsxs("div", {
        children: [
          _jsx("h3", {
            className: "text-lg font-bold mb-4",
            children: "Spacing Scale",
          }),
          _jsx(SpacingShowcase, { tokens: spacingTokens }),
        ],
      }),
    });
  },
  play: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var root, spacingVars;
      return __generator(this, function (_a) {
        root = document.documentElement;
        spacingVars = [
          "--spacing-none",
          "--spacing-xs",
          "--spacing-md",
          "--spacing-xl",
        ];
        spacingVars.forEach(function (spacing) {
          var value = getComputedStyle(root).getPropertyValue(spacing);
          if (!value)
            console.warn("Spacing variable ".concat(spacing, " not found"));
        });
        return [2 /*return*/];
      });
    });
  },
};
export var BorderRadius = {
  args: {},
  render: function () {
    return _jsxs("div", {
      children: [
        _jsx("h3", {
          className: "text-lg font-bold mb-4",
          children: "Border Radius",
        }),
        _jsx(RadiusShowcase, { tokens: radiusTokens }),
      ],
    });
  },
  play: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var root, radiusVars;
      return __generator(this, function (_a) {
        root = document.documentElement;
        radiusVars = [
          "--radius-none",
          "--radius-sm",
          "--radius-lg",
          "--radius-full",
        ];
        radiusVars.forEach(function (radius) {
          var value = getComputedStyle(root).getPropertyValue(radius);
          if (!value)
            console.warn("Radius variable ".concat(radius, " not found"));
        });
        return [2 /*return*/];
      });
    });
  },
};
export var LayoutExample = {
  args: {},
  render: function () {
    return _jsxs("div", {
      className: "space-y-8",
      children: [
        _jsxs("div", {
          children: [
            _jsx("h3", {
              className: "text-lg font-bold mb-4",
              children: "Padding Examples",
            }),
            _jsxs("div", {
              className: "space-y-4",
              children: [
                _jsx("div", {
                  className: "bg-blue-100 border border-blue-300",
                  style: { padding: "var(--spacing-sm)" },
                  children: _jsx("div", {
                    className: "text-sm text-gray-700",
                    children: "Padding: --spacing-sm (12px)",
                  }),
                }),
                _jsx("div", {
                  className: "bg-blue-100 border border-blue-300",
                  style: { padding: "var(--spacing-md)" },
                  children: _jsx("div", {
                    className: "text-sm text-gray-700",
                    children: "Padding: --spacing-md (16px)",
                  }),
                }),
                _jsx("div", {
                  className: "bg-blue-100 border border-blue-300",
                  style: { padding: "var(--spacing-lg)" },
                  children: _jsx("div", {
                    className: "text-sm text-gray-700",
                    children: "Padding: --spacing-lg (20px)",
                  }),
                }),
              ],
            }),
          ],
        }),
        _jsxs("div", {
          children: [
            _jsx("h3", {
              className: "text-lg font-bold mb-4",
              children: "Gap Examples",
            }),
            _jsxs("div", {
              style: { display: "flex", gap: "var(--spacing-md)" },
              children: [
                _jsx("div", {
                  className: "w-16 h-16 bg-green-200 border border-green-400",
                }),
                _jsx("div", {
                  className: "w-16 h-16 bg-green-200 border border-green-400",
                }),
                _jsx("div", {
                  className: "w-16 h-16 bg-green-200 border border-green-400",
                }),
              ],
            }),
            _jsx("div", {
              className: "text-sm text-gray-600 mt-2",
              children: "Gap: --spacing-md (16px)",
            }),
          ],
        }),
        _jsxs("div", {
          children: [
            _jsx("h3", {
              className: "text-lg font-bold mb-4",
              children: "Radius Examples",
            }),
            _jsxs("div", {
              className: "space-y-3",
              children: [
                _jsx("div", {
                  className: "w-24 h-24 bg-yellow-200 border border-yellow-400",
                  style: { borderRadius: "var(--radius-xs)" },
                }),
                _jsx("div", {
                  className: "w-24 h-24 bg-yellow-200 border border-yellow-400",
                  style: { borderRadius: "var(--radius-lg)" },
                }),
                _jsx("div", {
                  className: "w-24 h-24 bg-yellow-200 border border-yellow-400",
                  style: { borderRadius: "var(--radius-full)" },
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
};
