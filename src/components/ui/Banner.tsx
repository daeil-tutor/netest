import { useState } from "react";
import { SwiperPagination } from "./SwiperPagination";

export interface BannerEvent {
  id: string;
  eventName: string;
  gameName: string;
}

export interface BannerProps {
  className?: string;
  imageUrl?: string;
  events?: BannerEvent[];
  height?: number;
}

export function Banner({
  className,
  imageUrl,
  events = [],
  height = 560,
}: BannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: `${height}px`,
        alignItems: "center",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
      data-node-id="45:329"
    >
      {/* Background Image */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Banner"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Pagination Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: 0,
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {events.map((event, index) => (
          <SwiperPagination
            key={event.id}
            eventName={event.eventName}
            gameName={event.gameName}
            state={index === activeIndex ? "active" : "default"}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
