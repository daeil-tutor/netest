export interface DividerProps {
  variant?: "vertical" | "horizontal";
  className?: string;
}

export function Divider({ variant = "vertical", className }: DividerProps) {
  return (
    <div
      className={className}
      style={
        variant === "vertical"
          ? {
              width: "1px",
              height: "12px",
              backgroundColor: "var(--color-border-primary)",
              opacity: 0.3,
            }
          : {
              width: "100%",
              height: "1px",
              backgroundColor: "var(--color-border-primary)",
              opacity: 0.2,
            }
      }
      data-node-id="10:241"
    />
  );
}
