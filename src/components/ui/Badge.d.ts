export interface BadgeProps {
  type?: "pick" | "recommend";
  children?: string;
  className?: string;
}
export declare function Badge({
  type,
  children,
  className,
}: BadgeProps): import("react/jsx-runtime").JSX.Element;
