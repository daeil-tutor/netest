import type { IconProps } from "./LocationIcon";

interface BackIconProps extends IconProps {
  color?: string;
}

export function BackIcon({
  size = 24,
  className,
  color = "var(--color-grey-700)",
}: BackIconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox="0 0 11.775 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-node-id="6:1189"
    >
      <path
        id="arrow_back_ios_new"
        d="M10 20L0 10L10 0L11.775 1.775L3.55 10L11.775 18.225L10 20Z"
        fill={color}
      />
    </svg>
  );
}
