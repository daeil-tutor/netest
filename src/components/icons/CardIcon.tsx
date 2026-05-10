import iconSvg from "/images/card.svg";
import type { IconProps } from "./LocationIcon";

export function CardIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="card"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1233"
    />
  );
}
