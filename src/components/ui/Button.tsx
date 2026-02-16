import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "link";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
    ...props
}) => {
    const baseClasses =
        "inline-flex items-center justify-center font-dmsans font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anil-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
        primary:
            "bg-anil-500 text-white hover:bg-anil-600 active:bg-anil-700 shadow-soft-sm hover:shadow-soft-md",
        secondary:
            "border-2 border-grafite-800 text-grafite-800 hover:bg-grafite-800 hover:text-white active:bg-preto",
        ghost:
            "text-grafite-700 hover:bg-grafite-100 hover:text-grafite-900 active:bg-grafite-200",
        link: "text-anil-500 underline-offset-4 hover:underline hover:text-anil-600",
    };

    const sizeClasses = {
        sm: "text-sm px-4 py-2 gap-1.5",
        md: "text-base px-6 py-3 gap-2",
        lg: "text-lg px-8 py-4 gap-2.5",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
        <button
            className={cn(
                baseClasses,
                variantClasses[variant],
                sizeClasses[size],
                widthClass,
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
