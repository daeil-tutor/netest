import iconSvg from "/images/mobile.svg";
import type { IconProps } from "./LocationIcon";

export function MobileIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="mobile"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1190"
    />
  );
}
