import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "./Divider";
var DEFAULT_TOP_LINKS = [
  { label: "이용약관" },
  { label: "개인정보처리방침" },
  { label: "청소년보호정책" },
  { label: "게임IP사용가이드" },
  { label: "게임시간선택제" },
  { label: "고객센터" },
  { label: "전체서비스" },
];
var DEFAULT_BOTTOM_LINKS = [
  { label: "회사소개" },
  { label: "채용안내" },
  { label: "윤리경영" },
  { label: "넥슨브랜드가이드" },
  { label: "광고문의" },
  { label: "넥슨PC방" },
  { label: "넥슨에센셜" },
];
var DEFAULT_COMPANY_INFO = {
  name: "㈜넥슨코리아",
  ceo: "강대현·김정욱",
  address: "경기도 성남시 분당구 판교로 256번길 7",
  phone: "1588-7701",
  fax: "0502-258-8322",
  email: "contact-us@nexon.co.kr",
  businessNumber: "220-87-17483호",
  noticeNumber: "제2013-경기성남-1659호",
};
export function Footer(_a) {
  var className = _a.className,
    _b = _a.topLinks,
    topLinks = _b === void 0 ? DEFAULT_TOP_LINKS : _b,
    _c = _a.bottomLinks,
    bottomLinks = _c === void 0 ? DEFAULT_BOTTOM_LINKS : _c,
    _d = _a.companyInfo,
    companyInfo = _d === void 0 ? DEFAULT_COMPANY_INFO : _d,
    _e = _a.copyright,
    copyright =
      _e === void 0 ? "© NEXON Korea Corporation All Rights Reserved." : _e;
  return _jsxs("footer", {
    className: className,
    style: {
      backgroundColor: "var(--color-background-footer)",
      padding: "var(--spacing-2xl)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--spacing-md)",
    },
    "data-node-id": "17:289",
    children: [
      _jsx("div", {
        style: {
          display: "flex",
          gap: "var(--spacing-sm)",
          alignItems: "center",
          flexWrap: "wrap",
        },
        children: topLinks.map(function (link, index) {
          return _jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
              },
              children: [
                _jsx("a", {
                  href: link.href || "#",
                  style: {
                    fontSize: "var(--font-size-12)",
                    fontFamily: "var(--font-family-pretendard)",
                    fontWeight: 400,
                    lineHeight: "var(--font-size-14)",
                    color: "var(--color-text-footer-link)",
                    textDecoration: "none",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  },
                  children: link.label,
                }),
                index < topLinks.length - 1 &&
                  _jsx(Divider, { variant: "vertical" }),
              ],
            },
            "top-".concat(index),
          );
        }),
      }),
      _jsx("div", {
        style: {
          display: "flex",
          gap: "var(--spacing-sm)",
          alignItems: "center",
          flexWrap: "wrap",
        },
        children: bottomLinks.map(function (link, index) {
          return _jsxs(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "var(--spacing-sm)",
              },
              children: [
                _jsx("a", {
                  href: link.href || "#",
                  style: {
                    fontSize: "var(--font-size-12)",
                    fontFamily: "var(--font-family-pretendard)",
                    fontWeight: 400,
                    lineHeight: "var(--font-size-14)",
                    color: "var(--color-text-footer-link)",
                    textDecoration: "none",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  },
                  children: link.label,
                }),
                index < bottomLinks.length - 1 &&
                  _jsx(Divider, { variant: "vertical" }),
              ],
            },
            "bottom-".concat(index),
          );
        }),
      }),
      _jsxs("div", {
        style: {
          fontSize: "var(--font-size-11)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 400,
          lineHeight: "var(--font-size-16)",
          color: "var(--color-text-footer-caption)",
          letterSpacing: "-0.3px",
        },
        children: [
          _jsx("p", {
            style: { margin: "0 0 var(--spacing-xs) 0" },
            children: ""
              .concat(companyInfo.name)
              .concat(
                companyInfo.ceo
                  ? " \uB300\uD45C\uC774\uC0AC ".concat(companyInfo.ceo)
                  : "",
                " ",
              )
              .concat(companyInfo.address, " \uC804\uD654 : ")
              .concat(companyInfo.phone, " \uD329\uC2A4 : ")
              .concat(companyInfo.fax),
          }),
          _jsx("p", {
            style: { margin: "0 0 var(--spacing-xs) 0" },
            children: "E-mail : "
              .concat(
                companyInfo.email,
                " \uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638 : ",
              )
              .concat(
                companyInfo.businessNumber,
                " \uD1B5\uC2E0\uD310\uB9E4\uC5C5 \uC2E0\uACE0\uBC88\uD638 : ",
              )
              .concat(
                companyInfo.noticeNumber,
                " \uC0AC\uC5C5\uC790\uC815\uBCF4\uD655\uC778",
              ),
          }),
        ],
      }),
      _jsx("div", {
        style: {
          fontSize: "var(--font-size-10)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 400,
          lineHeight: "var(--font-size-16)",
          color: "var(--color-text-footer-caption)",
          letterSpacing: "-0.3px",
        },
        children: _jsx("p", { style: { margin: 0 }, children: copyright }),
      }),
    ],
  });
}
