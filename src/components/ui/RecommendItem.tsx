import { ReactNode } from "react";

export interface RecommendItemProps {
  className?: string;
  status?: "default" | "hover";
  gameName?: string;
  imageUrl?: string;
  badgeType?: "pick" | "recommend";
  onClick?: () => void;
}

export function RecommendItem({
  className,
  status = "default",
  gameName = "Game name",
  imageUrl = "https://via.placeholder.com/153x192",
  badgeType = "pick",
  onClick,
}: RecommendItemProps) {
  const isHover = status === "hover";
  const badgeBackgroundColor =
    badgeType === "pick"
      ? "var(--color-background-pick)"
      : "var(--color-background-update)";
  const badgeText = badgeType === "pick" ? "Pick" : "Recommend";

  return (
    <div
      className={className}
      style={{
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "153px",
        height: "324px",
        cursor: onClick ? "pointer" : "default",
        opacity: isHover ? 0.8 : 1,
        transition: "opacity 0.2s ease-in-out",
      }}
      onClick={onClick}
      data-node-id="8:112"
    >
      {/* Image Zone */}
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: "192px",
          flexShrink: 0,
        }}
      >
        <img
          src={imageUrl}
          alt={gameName}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Game Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-xs)",
          padding: "var(--spacing-md) var(--spacing-sm)",
          flex: "1 0 0",
          width: "100%",
        }}
      >
        {/* Badge */}
        <div
          style={{
            backgroundColor: badgeBackgroundColor,
            padding: "0 var(--spacing-xs)",
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "20px",
          }}
        >
          <span
            style={{
              fontSize: "var(--font-size-10)",
              fontFamily: "var(--font-family-pretendard)",
              fontWeight: 400,
              lineHeight: "var(--font-size-16)",
              color: "var(--color-text-inverse)",
              textAlign: "center",
              letterSpacing: "-0.3px",
              whiteSpace: "nowrap",
            }}
          >
            {badgeText}
          </span>
        </div>

        {/* Game Name */}
        <div
          style={{
            fontSize: "var(--font-size-14)",
            fontFamily: "var(--font-family-pretendard)",
            fontWeight: 700,
            lineHeight: "var(--font-size-16)",
            color: "var(--color-text-primary)",
            wordBreak: "break-word",
          }}
        >
          {gameName}
        </div>
      </div>
    </div>
  );
}
