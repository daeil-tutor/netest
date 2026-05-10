export interface SearchBarProps {
    className?: string;
    state?: "default" | "focus" | "fill";
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: () => void;
}
export declare function SearchBar({ className, state, placeholder, value, onChange, onSearch, }: SearchBarProps): import("react/jsx-runtime").JSX.Element;
