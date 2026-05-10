import iconSvg from "/images/location.svg";

export interface IconProps {
  size?: number;
  className?: string;
}

export function LocationIcon({ size = 24, className }: IconProps) {
  return (
    <img
      src={iconSvg}
      alt="location"
      width={size}
      height={size}
      className={className}
      data-node-id="6:1191"
    />
  );
}
