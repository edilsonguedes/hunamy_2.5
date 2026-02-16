import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
}

const Card: FC<CardProps> = ({
    children,
    hover = false,
    padding = "md",
    className,
    ...props
}) => {
    const paddingClasses = {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
    };

    const hoverClasses = hover
        ? "hover:-translate-y-1 hover:shadow-soft-lg cursor-pointer"
        : "";

    return (
        <div
            className={cn(
                "bg-white rounded-lg shadow-soft-sm transition-all duration-300",
                paddingClasses[padding],
                hoverClasses,
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
