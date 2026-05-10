import { CSSProperties } from "react";
import cardThumbnail1 from "../../images/card-thumbnail-image-1.png";
import cardThumbnail2 from "../../images/card-thumbnail-image-2.png";

export interface CardImageProps {
  thumbnail?: "image1" | "image2";
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const THUMBNAIL_MAP = {
  image1: cardThumbnail1,
  image2: cardThumbnail2,
};

export function CardImage({
  thumbnail = "image1",
  src,
  alt = "Card",
  className,
  width = 300,
  height = 200,
  style,
}: CardImageProps) {
  const imageSrc = src || THUMBNAIL_MAP[thumbnail || "image1"];

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        display: "block",
        objectFit: "cover",
        ...style,
      }}
      data-node-id="9:420"
    />
  );
}
