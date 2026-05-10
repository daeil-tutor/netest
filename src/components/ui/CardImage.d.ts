import { CSSProperties } from "react";
export interface CardImageProps {
  thumbnail?: "image1" | "image2";
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}
export declare function CardImage({
  thumbnail,
  src,
  alt,
  className,
  width,
  height,
  style,
}: CardImageProps): import("react/jsx-runtime").JSX.Element;
