import type { IconProps } from "./LocationIcon";

interface NewpageIconProps extends IconProps {
  color?: string;
}

export function NewpageIcon({
  size = 24,
  className,
  color = "var(--color-grey-700)",
}: NewpageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      data-node-id="6:1191"
    >
      <path
        id="arrow_outward"
        d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z"
        fill={color}
      />
    </svg>
  );
}
