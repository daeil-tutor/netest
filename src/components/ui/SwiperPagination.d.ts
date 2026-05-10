export interface SwiperPaginationProps {
    className?: string;
    gameName?: string;
    eventName?: string;
    state?: "default" | "active";
    onClick?: () => void;
}
export declare function SwiperPagination({ className, gameName, eventName, state, onClick, }: SwiperPaginationProps): import("react/jsx-runtime").JSX.Element;
