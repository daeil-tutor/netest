import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  style?: "primary" | "secondary" | "outline";
  state?: "default" | "hover" | "press";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const sizeStyles = {
  lg: {
    padding: "var(--spacing-2xl) var(--spacing-lg)",
    height: "60px",
    fontSize: "var(--font-size-16)",
  },
  md: {
    padding: "var(--spacing-lg) var(--spacing-xl)",
    height: "50px",
    fontSize: "var(--font-size-14)",
  },
  sm: {
    padding: "var(--spacing-sm) var(--spacing-md)",
    height: "40px",
    fontSize: "var(--font-size-12)",
  },
};

const styleVariants = {
  primary: {
    default: {
      backgroundColor: "var(--color-brand-primary)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    hover: {
      backgroundColor: "var(--color-primary-700)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
    press: {
      backgroundColor: "var(--color-primary-800)",
      color: "var(--color-text-inverse)",
      border: "none",
    },
  },
  secondary: {
    default: {
      backgroundColor: "var(--color-primary-100)",
      color: "var(--color-brand-primary)",
      border: "none",
    },
    hover: {
      backgroundColor: "var(--color-primary-200)",
      color: "var(--color-brand-primary)",
      border: "none",
    },
    press: {
      backgroundColor: "var(--color-primary-300)",
      color: "var(--color-brand-primary)",
      border: "none",
    },
  },
  outline: {
    default: {
      backgroundColor: "transparent",
      color: "var(--color-brand-primary)",
      border: "1px solid var(--color-brand-primary)",
    },
    hover: {
      backgroundColor: "var(--color-primary-50)",
      color: "var(--color-brand-primary)",
      border: "1px solid var(--color-brand-primary)",
    },
    press: {
      backgroundColor: "var(--color-primary-100)",
      color: "var(--color-brand-primary)",
      border: "1px solid var(--color-brand-primary)",
    },
  },
};

export function Button({
  children,
  size = "md",
  style = "primary",
  state = "default",
  onClick,
  className,
  disabled = false,
}: ButtonProps) {
  const sizeStyle = sizeStyles[size];
  const stateStyle = styleVariants[style][state];

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{
        ...sizeStyle,
        ...stateStyle,
        fontFamily: "var(--font-family-pretendard)",
        fontWeight: 700,
        lineHeight: "var(--font-size-20)",
        borderRadius: "var(--radius-default)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "nowrap",
        transition: "all 0.2s ease-in-out",
      }}
      data-node-id="6:1269"
    >
      {children}
    </button>
  );
}
