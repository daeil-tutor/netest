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
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
var TypographyPreview = function (_a) {
  var typo = _a.typo;
  var Element = typo.tag || "div";
  return _jsxs("div", {
    className: "space-y-3",
    children: [
      _jsxs(Element, {
        style: {
          fontSize: typo.fontSize,
          fontWeight: typo.fontWeight,
          lineHeight: typo.lineHeight,
        },
        children: [typo.name, " - The quick brown fox jumps over the lazy dog"],
      }),
      _jsxs("div", {
        className: "text-sm text-gray-600 space-y-1",
        children: [
          _jsxs("div", {
            children: [
              _jsx("strong", { children: "Variable:" }),
              " ",
              _jsx("code", {
                className: "bg-gray-100 px-2 py-1 rounded",
                children: typo.variable,
              }),
            ],
          }),
          _jsxs("div", {
            children: [
              _jsx("strong", { children: "Size:" }),
              " ",
              typo.fontSize,
              " | ",
              _jsx("strong", { children: "Weight:" }),
              " ",
              typo.fontWeight,
              " | ",
              _jsx("strong", { children: "Height:" }),
              " ",
              typo.lineHeight,
            ],
          }),
        ],
      }),
    ],
  });
};
var headlineTypography = [
  {
    name: "H1",
    fontSize: "var(--font-size-28)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-32)",
    variable: "--type-h1",
    tag: "h1",
  },
  {
    name: "H2",
    fontSize: "var(--font-size-24)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-28)",
    variable: "--type-h2",
    tag: "h2",
  },
];
var subtitleTypography = [
  {
    name: "S1",
    fontSize: "var(--font-size-18)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-20)",
    variable: "--type-s1",
    tag: "h3",
  },
  {
    name: "S2",
    fontSize: "var(--font-size-16)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-20)",
    variable: "--type-s2",
    tag: "h4",
  },
];
var bodyTypography = [
  {
    name: "B1",
    fontSize: "var(--font-size-15)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-18)",
    variable: "--type-b1",
    tag: "p",
  },
  {
    name: "B2",
    fontSize: "var(--font-size-14)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b2",
    tag: "p",
  },
  {
    name: "B3",
    fontSize: "var(--font-size-14)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b3",
    tag: "p",
  },
  {
    name: "B4",
    fontSize: "var(--font-size-13)",
    fontWeight: "var(--font-weight-bold)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-b4",
    tag: "p",
  },
  {
    name: "B5",
    fontSize: "var(--font-size-12)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-14)",
    variable: "--type-b5",
    tag: "p",
  },
];
var captionTypography = [
  {
    name: "C1",
    fontSize: "var(--font-size-11)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-c1",
    tag: "span",
  },
  {
    name: "C2",
    fontSize: "var(--font-size-10)",
    fontWeight: "var(--font-weight-regular)",
    lineHeight: "var(--line-height-16)",
    variable: "--type-c2",
    tag: "span",
  },
];
var fontSizes = [
  { name: "Size 10", variable: "--font-size-10", value: "10px" },
  { name: "Size 11", variable: "--font-size-11", value: "11px" },
  { name: "Size 12", variable: "--font-size-12", value: "12px" },
  { name: "Size 13", variable: "--font-size-13", value: "13px" },
  { name: "Size 14", variable: "--font-size-14", value: "14px" },
  { name: "Size 15", variable: "--font-size-15", value: "15px" },
  { name: "Size 16", variable: "--font-size-16", value: "16px" },
  { name: "Size 18", variable: "--font-size-18", value: "18px" },
  { name: "Size 24", variable: "--font-size-24", value: "24px" },
  { name: "Size 28", variable: "--font-size-28", value: "28px" },
];
var TypographyShowcase = function (_a) {
  var typos = _a.typos;
  return _jsx("div", {
    className: "space-y-8",
    children: typos.map(function (typo) {
      return _jsx(TypographyPreview, { typo: typo }, typo.variable);
    }),
  });
};
var meta = {
  title: "Design System/Typography",
  component: TypographyShowcase,
  parameters: {
    design: {
      url: "https://www.figma.com/design/7IeRNVQ483UAQJJmgBIozv/-%E1%84%89%E1%85%B5%E1%86%AF%E1%84%89%E1%85%B3%E1%86%B8%E1%84%8B%E1%85%AD%E1%86%BC--%EB%84%A5%EC%8A%A8-%E1%84%83%E1%85%B5%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AB%E1%84%89%E1%85%B5%E1%84%89%E1%85%B3%E1%84%90%E1%85%A6%E1%86%B0",
    },
    layout: "padded",
  },
  tags: ["autodocs"],
};
export default meta;
export var Headlines = {
  args: { typos: headlineTypography },
};
export var Subtitles = {
  args: { typos: subtitleTypography },
};
export var Body = {
  args: { typos: bodyTypography },
};
export var Captions = {
  args: { typos: captionTypography },
};
export var AllTypography = {
  args: {},
  render: function () {
    return _jsxs("div", {
      className: "space-y-12",
      children: [
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Headlines",
            }),
            _jsx(TypographyShowcase, { typos: headlineTypography }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Subtitles",
            }),
            _jsx(TypographyShowcase, { typos: subtitleTypography }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Body",
            }),
            _jsx(TypographyShowcase, { typos: bodyTypography }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Captions",
            }),
            _jsx(TypographyShowcase, { typos: captionTypography }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Font Sizes",
            }),
            _jsx("div", {
              className: "space-y-3",
              children: fontSizes.map(function (size) {
                return _jsxs(
                  "div",
                  {
                    className: "flex items-center gap-4",
                    children: [
                      _jsx("div", {
                        style: { fontSize: size.value },
                        children: "Aa",
                      }),
                      _jsxs("div", {
                        className: "flex-1",
                        children: [
                          _jsx("div", {
                            className: "font-mono text-sm font-semibold",
                            children: size.variable,
                          }),
                          _jsx("div", {
                            className: "text-sm text-gray-600",
                            children: size.value,
                          }),
                        ],
                      }),
                    ],
                  },
                  size.variable,
                );
              }),
            }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Font Weights",
            }),
            _jsxs("div", {
              className: "space-y-4",
              children: [
                _jsx("div", {
                  style: { fontWeight: "var(--font-weight-regular)" },
                  children:
                    "Regular (400) - The quick brown fox jumps over the lazy dog",
                }),
                _jsx("div", {
                  style: { fontWeight: "var(--font-weight-medium)" },
                  children:
                    "Medium (500) - The quick brown fox jumps over the lazy dog",
                }),
                _jsx("div", {
                  style: { fontWeight: "var(--font-weight-semibold)" },
                  children:
                    "Semi Bold (600) - The quick brown fox jumps over the lazy dog",
                }),
                _jsx("div", {
                  style: { fontWeight: "var(--font-weight-bold)" },
                  children:
                    "Bold (700) - The quick brown fox jumps over the lazy dog",
                }),
              ],
            }),
          ],
        }),
        _jsxs("section", {
          children: [
            _jsx("h2", {
              className: "text-2xl font-bold mb-6",
              children: "Line Heights",
            }),
            _jsxs("div", {
              className: "space-y-6",
              children: [
                _jsxs("div", {
                  children: [
                    _jsx("div", {
                      style: { lineHeight: "var(--line-height-14)" },
                      children:
                        "Line Height 14px - The quick brown fox jumps over the lazy dog. It is a simple sentence to test the line height value and how it affects readability of the text.",
                    }),
                    _jsx("div", {
                      className: "text-sm text-gray-600 mt-2",
                      children: "--line-height-14",
                    }),
                  ],
                }),
                _jsxs("div", {
                  children: [
                    _jsx("div", {
                      style: { lineHeight: "var(--line-height-20)" },
                      children:
                        "Line Height 20px - The quick brown fox jumps over the lazy dog. It is a simple sentence to test the line height value and how it affects readability of the text.",
                    }),
                    _jsx("div", {
                      className: "text-sm text-gray-600 mt-2",
                      children: "--line-height-20",
                    }),
                  ],
                }),
                _jsxs("div", {
                  children: [
                    _jsx("div", {
                      style: { lineHeight: "var(--line-height-32)" },
                      children:
                        "Line Height 32px - The quick brown fox jumps over the lazy dog. It is a simple sentence to test the line height value and how it affects readability of the text.",
                    }),
                    _jsx("div", {
                      className: "text-sm text-gray-600 mt-2",
                      children: "--line-height-32",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  play: function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var root, typoVars;
      return __generator(this, function (_a) {
        root = document.documentElement;
        typoVars = [
          "--font-size-16",
          "--font-weight-bold",
          "--line-height-20",
          "--type-h1",
          "--type-b2",
        ];
        typoVars.forEach(function (typo) {
          var value = getComputedStyle(root).getPropertyValue(typo);
          if (!value)
            console.warn("Typography variable ".concat(typo, " not found"));
        });
        return [2 /*return*/];
      });
    });
  },
};
export var FontSizeScale = {
  args: {},
  render: function () {
    return _jsxs("div", {
      children: [
        _jsx("h3", {
          className: "text-lg font-bold mb-6",
          children: "Font Size Scale",
        }),
        _jsx("div", {
          className: "space-y-4",
          children: fontSizes.map(function (size) {
            return _jsxs(
              "div",
              {
                style: { fontSize: size.value },
                children: [
                  _jsx("span", { className: "mr-4", children: size.name }),
                  _jsxs("span", {
                    className: "text-gray-600",
                    children: [
                      "The quick brown fox jumps over the lazy dog (",
                      size.value,
                      ")",
                    ],
                  }),
                ],
              },
              size.variable,
            );
          }),
        }),
      ],
    });
  },
};
