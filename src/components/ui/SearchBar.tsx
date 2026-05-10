import { SearchIcon } from "../icons";

export interface SearchBarProps {
  className?: string;
  state?: "default" | "focus" | "fill";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

export function SearchBar({
  className,
  state = "default",
  placeholder = "게임명 검색",
  value = "",
  onChange,
  onSearch,
}: SearchBarProps) {
  const isFocus = state === "focus";

  return (
    <div
      className={className}
      style={{
        display: "flex",
        alignItems: "center",
        width: "300px",
        padding: "0 var(--spacing-xxs)",
        ...(isFocus
          ? { border: "2px solid var(--color-primary-500)" }
          : { borderBottom: "1px solid var(--color-border-primary)" }),
        borderRadius: "var(--radius-xxs)",
        backgroundColor: "var(--color-background-white)",
        transition: "border 0.2s ease-in-out",
      }}
      data-node-id="9:1639"
    >
      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: "1 0 0",
          border: "none",
          background: "transparent",
          fontFamily: "var(--font-family-pretendard)",
          fontSize: "var(--font-size-12)",
          fontWeight: 400,
          lineHeight: "var(--font-size-14)",
          color: value
            ? "var(--color-text-primary)"
            : "var(--color-text-tertiary)",
          padding: "12px",
          outline: "none",
          textTransform: "uppercase",
        }}
      />

      {/* Search Button */}
      <button
        onClick={onSearch}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px",
          background: "none",
          border: "none",
          cursor: "pointer",
          flexShrink: 0,
        }}
        aria-label="Search"
      >
        <SearchIcon size={24} />
      </button>
    </div>
  );
}
