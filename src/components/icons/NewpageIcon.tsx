import iconSvg from "/images/newpage.svg";
import type { IconProps } from "./LocationIcon";

export function NewpageIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="newpage"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1185"
    />
  );
}
