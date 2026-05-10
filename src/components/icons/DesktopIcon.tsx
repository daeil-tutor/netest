import iconSvg from "/images/desktop.svg";
import type { IconProps } from "./LocationIcon";

export function DesktopIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="desktop"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1184"
    />
  );
}
