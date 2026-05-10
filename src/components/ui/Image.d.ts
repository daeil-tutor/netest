import { CSSProperties } from "react";
export interface ImageProps {
  thumbnail?: "image1" | "image2";
  src?: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}
export declare function Image({
  thumbnail,
  src,
  alt,
  className,
  width,
  height,
  style,
}: ImageProps): import("react/jsx-runtime").JSX.Element;
