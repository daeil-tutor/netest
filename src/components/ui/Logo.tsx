import logoImage from "../../images/logo.png";

export interface LogoProps {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export function Logo({
  className,
  alt = "Logo",
  width = 99,
  height = 23,
}: LogoProps) {
  return (
    <img
      src={logoImage}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-node-id="5:1916"
    />
  );
}
