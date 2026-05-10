import type { IconProps } from "./LocationIcon";

interface MenuIconProps extends IconProps {
  color?: string;
}

export function MenuIcon({
  size = 24,
  className,
  color = "var(--color-grey-700)",
}: MenuIconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-node-id="6:1193"
    >
      <path
        id="dehaze"
        d="M0 2V0H18V2H0ZM0 14V12H18V14H0ZM0 8V6H18V8H0Z"
        fill={color}
      />
    </svg>
  );
}
