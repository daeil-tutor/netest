export interface GameFilterProps {
  className?: string;
  label?: string;
  state?: "default" | "hover" | "active";
  onClick?: () => void;
}

export function GameFilter({
  className,
  label = "FILTER",
  state = "default",
  onClick,
}: GameFilterProps) {
  const isActive = state === "active";
  const isHover = state === "hover";

  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: isActive
          ? "var(--color-background-primary-btn)"
          : "var(--color-background-white)",
        borderRadius: "12px",
        padding: "4px var(--spacing-xs)",
        border: "none",
        fontFamily: "var(--font-family-pretendard)",
        fontSize: "var(--font-size-12)",
        fontWeight: 400,
        lineHeight: "var(--font-size-14)",
        color: isActive
          ? "var(--color-text-inverse)"
          : isHover
            ? "var(--color-primary-500)"
            : "var(--color-text-secondary)",
        textTransform: "uppercase",
        cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "color 0.2s ease-in-out",
      }}
      data-node-id="9:147"
    >
      {label}
    </button>
  );
}
