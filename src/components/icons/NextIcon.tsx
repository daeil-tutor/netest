import type { IconProps } from "./LocationIcon";

interface NextIconProps extends IconProps {
  color?: string;
}

export function NextIcon({
  size = 24,
  className,
  color = "var(--color-grey-700)",
}: NextIconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox="0 0 11.775 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-node-id="6:1192"
    >
      <path
        id="arrow_forward_ios"
        d="M1.775 20L0 18.225L8.225 10L0 1.775L1.775 0L11.775 10L1.775 20Z"
        fill={color}
      />
    </svg>
  );
}
