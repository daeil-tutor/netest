export interface GameFilterProps {
    className?: string;
    label?: string;
    state?: "default" | "hover" | "active";
    onClick?: () => void;
}
export declare function GameFilter({ className, label, state, onClick, }: GameFilterProps): import("react/jsx-runtime").JSX.Element;
