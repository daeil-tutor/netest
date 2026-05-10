import { ReactNode } from "react";
import { DesktopIcon, MobileIcon } from "../icons";

export interface CardItemProps {
  className?: string;
  style?: "vertical" | "horizontal";
  state?: "default" | "hover";
  gameName?: string;
  gameCategory?: string;
  imageUrl?: string;
  showUpdate?: boolean;
  showDesktopIcon?: boolean;
  showMobileIcon?: boolean;
  onClick?: () => void;
}

export function CardItem({
  className,
  style = "vertical",
  state = "default",
  gameName = "game name",
  gameCategory = "game category",
  imageUrl = "https://via.placeholder.com/300x200",
  showUpdate = true,
  showDesktopIcon = true,
  showMobileIcon = true,
  onClick,
}: CardItemProps) {
  const isVertical = style === "vertical";
  const isHover = state === "hover";

  return (
    <div
      className={className}
      style={{
        backgroundColor: "var(--color-background-white)",
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        alignItems: isVertical ? "flex-start" : "center",
        cursor: onClick ? "pointer" : "default",
        opacity: isHover ? 0.8 : 1,
        transition: "opacity 0.2s ease-in-out",
        width: isVertical ? "300px" : "600px",
      }}
      onClick={onClick}
      data-node-id={isVertical ? "9:563" : "9:630"}
    >
      {/* Image Zone */}
      <div
        style={{
          overflow: "hidden",
          width: isVertical ? "100%" : "300px",
          height: "200px",
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
          gap: "var(--spacing-lg)",
          padding: "var(--spacing-lg)",
          width: isVertical ? "100%" : "300px",
          flex: isVertical ? undefined : "1 0 0",
          justifyContent: isVertical ? "flex-start" : "center",
        }}
      >
        {/* Game Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-xs)",
          }}
        >
          <div
            style={{
              fontSize: "var(--font-size-16)",
              fontFamily: "var(--font-family-pretendard)",
              fontWeight: 700,
              lineHeight: "var(--font-size-20)",
              color: "var(--color-text-primary)",
            }}
          >
            {gameName}
          </div>
          <div
            style={{
              fontSize: "var(--font-size-12)",
              fontFamily: "var(--font-family-pretendard)",
              fontWeight: 400,
              lineHeight: "var(--font-size-14)",
              color: "var(--color-text-secondary)",
              textTransform: "uppercase",
            }}
          >
            {gameCategory}
          </div>
        </div>

        {/* Game Deco (Badge + Icons) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Update Badge */}
          {showUpdate && (
            <div
              style={{
                backgroundColor: "var(--color-background-update)",
                padding: "0 var(--spacing-xs)",
                borderRadius: "var(--radius-full)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                Update
              </span>
            </div>
          )}

          {/* Device Icons */}
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-sm)",
              alignItems: "center",
              justifyContent: "flex-end",
              flex: "1 0 0",
            }}
          >
            {showDesktopIcon && <DesktopIcon size={24} />}
            {showMobileIcon && <MobileIcon size={24} />}
          </div>
        </div>
      </div>
    </div>
  );
}
