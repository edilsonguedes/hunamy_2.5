import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
    maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
    padding?: "sm" | "md" | "lg" | "xl";
    as?: "section" | "div";
}

const SectionContainer: FC<SectionContainerProps> = ({
    children,
    maxWidth = "lg",
    padding = "md",
    as: Component = "section",
    className,
    ...props
}) => {
    const maxWidthClasses = {
        sm: "max-w-screen-sm",
        md: "max-w-screen-md",
        lg: "max-w-screen-lg",
        xl: "max-w-screen-xl",
        full: "max-w-full",
    };

    const paddingClasses = {
        sm: "py-section-sm px-4 md:px-6",
        md: "py-section-md px-4 md:px-6",
        lg: "py-section-lg px-4 md:px-8",
        xl: "py-section-xl px-4 md:px-8",
    };

    return (
        <Component
            className={cn(
                "mx-auto w-full",
                maxWidthClasses[maxWidth],
                paddingClasses[padding],
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

export default SectionContainer;
