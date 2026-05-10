import iconSvg from "/images/search.svg";
import type { IconProps } from "./LocationIcon";

export function SearchIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="search"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1188"
    />
  );
}
