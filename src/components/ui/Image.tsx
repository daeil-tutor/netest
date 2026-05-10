import { CSSProperties } from "react";
import itemThumbnail1 from "../../images/item-thumbnail-image-1.png";
import itemThumbnail2 from "../../images/item-thumbnail-image-2.png";

export interface ImageProps {
  thumbnail?: "image1" | "image2";
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

const THUMBNAIL_MAP = {
  image1: itemThumbnail1,
  image2: itemThumbnail2,
};

export function Image({
  thumbnail = "image1",
  src,
  alt = "Item",
  className,
  width = 300,
  height = 200,
  style,
}: ImageProps) {
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
      data-node-id="8:72"
    />
  );
}
