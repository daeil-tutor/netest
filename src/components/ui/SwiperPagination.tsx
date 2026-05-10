export interface SwiperPaginationProps {
  className?: string;
  gameName?: string;
  eventName?: string;
  state?: "default" | "active";
  onClick?: () => void;
}

export function SwiperPagination({
  className,
  gameName = "game name",
  eventName = "event name",
  state = "default",
  onClick,
}: SwiperPaginationProps) {
  const isActive = state === "active";

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        backgroundColor: isActive
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(255, 255, 255, 0.1)",
        padding: "var(--spacing-md)",
        borderRadius: "var(--radius-xs)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--spacing-sm)",
        alignItems: "flex-start",
        width: "255px",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        transition: "background-color 0.2s ease-in-out",
      }}
      data-node-id="7:1192"
    >
      {/* Game Name */}
      <div
        style={{
          fontSize: "var(--font-size-13)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 700,
          lineHeight: "var(--font-size-16)",
          color: "var(--color-text-inverse)",
          whiteSpace: "nowrap",
        }}
      >
        {gameName}
      </div>

      {/* Event Name */}
      <div
        style={{
          fontSize: "var(--font-size-18)",
          fontFamily: "var(--font-family-pretendard)",
          fontWeight: 700,
          lineHeight: "var(--font-size-20)",
          color: "var(--color-text-inverse)",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          width: "100%",
        }}
        title={eventName}
      >
        {eventName}
      </div>
    </div>
  );
}
