import { ReactNode } from "react";
import { Divider } from "./Divider";

export interface FooterLink {
  label: string;
  href?: string;
}

export interface FooterProps {
  className?: string;
  topLinks?: FooterLink[];
  bottomLinks?: FooterLink[];
  companyInfo?: {
    name: string;
    ceo?: string;
    address: string;
    phone: string;
    fax: string;
    email: string;
    businessNumber: string;
    noticeNumber: string;
  };
  copyright?: string;
}

const DEFAULT_TOP_LINKS: FooterLink[] = [
  { label: "이용약관" },
  { label: "개인정보처리방침" },
  { label: "청소년보호정책" },
  { label: "게임IP사용가이드" },
  { label: "게임시간선택제" },
  { label: "고객센터" },
  { label: "전체서비스" },
];

const DEFAULT_BOTTOM_LINKS: FooterLink[] = [
  { label: "회사소개" },
  { label: "채용안내" },
  { label: "윤리경영" },
  { label: "넥슨브랜드가이드" },
  { label: "광고문의" },
  { label: "넥슨PC방" },
  { label: "넥슨에센셜" },
];

const DEFAULT_COMPANY_INFO = {
  name: "㈜넥슨코리아",
  ceo: "강대현·김정욱",
  address: "경기도 성남시 분당구 판교로 256번길 7",
  phone: "1588-7701",
  fax: "0502-258-8322",
  email: "contact-us@nexon.co.kr",
  businessNumber: "220-87-17483호",
  noticeNumber: "제2013-경기성남-1659호",
};

export function Footer({
  className,
  topLinks = DEFAULT_TOP_LINKS,
  bottomLinks = DEFAULT_BOTTOM_LINKS,
  companyInfo = DEFAULT_COMPANY_INFO,
  copyright = "© NEXON Korea Corporation All Rights Reserved.",
}: FooterProps) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: "var(--color-background-footer)",
        padding: "var(--spacing-2xl)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-md)",
      }}
      data-node-id="17:289"
    >
      {/* Top Links */}
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-sm)",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {topLinks.map((link, index) => (
          <div
            key={`top-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-sm)",
            }}
          >
            <a
              href={link.href || "#"}
              style={{
                fontSize: "var(--font-size-12)",
                fontFamily: "var(--font-family-pretendard)",
                fontWeight: 400,
                lineHeight: "var(--font-size-14)",
                color: "var(--color-text-footer-link)",
                textDecoration: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
            {index < topLinks.length - 1 && <Divider variant="vertical" />}
          </div>
        ))}
      </div>

      {/* Bottom Links */}
      <div
        style={{
          display: "flex",
          gap: "var(--spacing-sm)",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {bottomLinks.map((link, index) => (
          <div
            key={`bottom-${index}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-sm)",
            }}
          >
            <a
              href={link.href || "#"}
              style={{
                fontSize: "var(--font-size-12)",
                fontFamily: "var(--font-family-pretendard)",
                fontWeight: 400,
                lineHeight: "var(--font-size-14)",
                color: "var(--color-text-footer-link)",
                textDecoration: "none",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
            {index < bottomLinks.length - 1 && <Divider variant="vertical" />}
          </div>
        ))}
      </div>

      {/* Company Info */}
      <div
        style={{
          fontSize: "var(--font-size-11)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 400,
          lineHeight: "var(--font-size-16)",
          color: "var(--color-text-footer-caption)",
          letterSpacing: "-0.3px",
        }}
      >
        <p style={{ margin: "0 0 var(--spacing-xs) 0" }}>
          {`${companyInfo.name}${companyInfo.ceo ? ` 대표이사 ${companyInfo.ceo}` : ""} ${companyInfo.address} 전화 : ${companyInfo.phone} 팩스 : ${companyInfo.fax}`}
        </p>
        <p style={{ margin: "0 0 var(--spacing-xs) 0" }}>
          {`E-mail : ${companyInfo.email} 사업자등록번호 : ${companyInfo.businessNumber} 통신판매업 신고번호 : ${companyInfo.noticeNumber} 사업자정보확인`}
        </p>
      </div>

      {/* Copyright */}
      <div
        style={{
          fontSize: "var(--font-size-10)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 400,
          lineHeight: "var(--font-size-16)",
          color: "var(--color-text-footer-caption)",
          letterSpacing: "-0.3px",
        }}
      >
        <p style={{ margin: 0 }}>{copyright}</p>
      </div>
    </footer>
  );
}
