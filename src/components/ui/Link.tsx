import { ReactNode } from "react";

export interface LinkProps {
  href?: string;
  children?: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}

export function Link({
  href = "#",
  children = "Link",
  className,
  target,
  rel,
}: LinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
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
      data-node-id="10:307"
    >
      {children}
    </a>
  );
}
