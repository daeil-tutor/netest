import iconSvg from "/images/next.svg";
import type { IconProps } from "./LocationIcon";

export function NextIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="next"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1187"
    />
  );
}
