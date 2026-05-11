import { ReactNode } from "react";
export interface ButtonProps {
  children?: ReactNode;
  size?: "lg" | "md" | "sm";
  style?: "primary" | "secondary" | "outline";
  state?: "default" | "hover" | "press";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}
export declare function Button({
  children,
  size,
  style,
  state,
  onClick,
  className,
  disabled,
}: ButtonProps): import("react/jsx-runtime").JSX.Element;
