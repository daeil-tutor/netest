import { ReactNode } from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { MenuIcon, CardIcon, LocationIcon } from "../icons";

export interface GnbBarProps {
  className?: string;
  onMenuClick?: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
}

export function GnbBar({
  className,
  onMenuClick,
  onLoginClick,
  onSignupClick,
}: GnbBarProps) {
  return (
    <nav
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--spacing-md)",
        backgroundColor: "var(--color-background-white)",
        width: "100%",
        gap: "var(--spacing-md)",
      }}
      data-node-id="7:1156"
    >
      {/* Left Section */}
      <div
        style={{
          flex: "1 0 0",
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-sm)",
        }}
      >
        <button
          onClick={onMenuClick}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Menu"
        >
          <MenuIcon size={24} />
        </button>
        <span
          style={{
            fontFamily: "var(--font-family-pretendard)",
            fontSize: "var(--font-size-16)",
            fontWeight: 700,
            lineHeight: "var(--font-size-20)",
            color: "var(--color-text-primary)",
          }}
        >
          메뉴
        </span>
      </div>

      {/* Center - Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Logo width={99} height={23} />
      </div>

      {/* Right Section */}
      <div
        style={{
          flex: "1 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "var(--spacing-sm)",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Card"
        >
          <CardIcon size={24} />
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          aria-label="Location"
        >
          <LocationIcon size={24} />
        </button>
        <button
          onClick={onSignupClick}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            fontFamily: "var(--font-family-pretendard)",
            fontSize: "var(--font-size-14)",
            fontWeight: 400,
            lineHeight: "var(--font-size-16)",
            color: "var(--color-text-primary)",
          }}
        >
          회원가입
        </button>
        <Button size="sm" style="outline" onClick={onLoginClick}>
          로그인
        </Button>
      </div>
    </nav>
  );
}
