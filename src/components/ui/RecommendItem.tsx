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
      : "var(--color-background-recommend)";
  const badgeText = badgeType === "pick" ? "Pick" : "추천";

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
        boxShadow: isHover ? "0 0 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.2s ease-in-out",
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
          position: "relative",
        }}
      >
        <img
          src={imageUrl}
          alt={gameName}
          style={{
            width: isHover ? "168.3px" : "100%",
            height: isHover ? "211.2px" : "100%",
            objectFit: "cover",
            display: "block",
            position: "absolute" as const,
            left: isHover ? "-7.65px" : "0",
            top: isHover ? "-9.6px" : "0",
            transition: "all 0.2s ease-in-out",
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
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
          }}
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
