export interface BadgeProps {
  type?: "pick" | "recommend";
  children?: string;
  className?: string;
}

export function Badge({
  type = "pick",
  children = type === "pick" ? "Pick" : "추천",
  className,
}: BadgeProps) {
  const backgroundColor =
    type === "pick"
      ? "var(--color-background-pick)"
      : "var(--color-background-recommend)";

  return (
    <div
      className={className}
      style={{
        backgroundColor,
        padding: "0 var(--spacing-xs)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "fit-content",
      }}
      data-node-id={type === "pick" ? "8:83" : "8:81"}
    >
      <span
        style={{
          fontSize: "var(--font-size-10)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 400,
          lineHeight: "var(--line-height-16)",
          color: "var(--color-text-inverse)",
          textAlign: "center",
          letterSpacing: "-0.3px",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
    </div>
  );
}
