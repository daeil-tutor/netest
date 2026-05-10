import { ReactNode } from "react";
export interface LinkProps {
  href?: string;
  children?: ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
}
export declare function Link({
  href,
  children,
  className,
  target,
  rel,
}: LinkProps): import("react/jsx-runtime").JSX.Element;
