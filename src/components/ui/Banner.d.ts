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
export declare function Banner({
  className,
  imageUrl,
  events,
  height,
}: BannerProps): import("react/jsx-runtime").JSX.Element;
