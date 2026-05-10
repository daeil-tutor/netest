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
export declare function Footer({
  className,
  topLinks,
  bottomLinks,
  companyInfo,
  copyright,
}: FooterProps): import("react/jsx-runtime").JSX.Element;
