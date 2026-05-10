export interface CardItemProps {
  className?: string;
  style?: "vertical" | "horizontal";
  state?: "default" | "hover";
  gameName?: string;
  gameCategory?: string;
  imageUrl?: string;
  showUpdate?: boolean;
  showDesktopIcon?: boolean;
  showMobileIcon?: boolean;
  onClick?: () => void;
}
export declare function CardItem({
  className,
  style,
  state,
  gameName,
  gameCategory,
  imageUrl,
  showUpdate,
  showDesktopIcon,
  showMobileIcon,
  onClick,
}: CardItemProps): import("react/jsx-runtime").JSX.Element;
