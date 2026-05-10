export interface RecommendItemProps {
  className?: string;
  status?: "default" | "hover";
  gameName?: string;
  imageUrl?: string;
  badgeType?: "pick" | "recommend";
  onClick?: () => void;
}
export declare function RecommendItem({
  className,
  status,
  gameName,
  imageUrl,
  badgeType,
  onClick,
}: RecommendItemProps): import("react/jsx-runtime").JSX.Element;
