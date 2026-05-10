import iconSvg from "/images/menu.svg";
import type { IconProps } from "./LocationIcon";

export function MenuIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="menu"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1189"
    />
  );
}
