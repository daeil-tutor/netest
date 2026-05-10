import iconSvg from "/images/back.svg";
import type { IconProps } from "./LocationIcon";

export function BackIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="back"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1186"
    />
  );
}
