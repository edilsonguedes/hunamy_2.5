import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Hunamy Brand Colors
                preto: "#000000",
                grafite: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#E5E5E5",
                    300: "#D4D4D4",
                    400: "#A3A3A3",
                    500: "#737373",
                    600: "#525252",
                    700: "#3F3F3F",
                    800: "#2A2A2A",
                    900: "#171717",
                },
                anil: {
                    50: "#EBF5FF",
                    100: "#D1E7FF",
                    200: "#A6D5FF",
                    300: "#70BCFF",
                    400: "#3B9EFF",
                    500: "#0066CC", // Primary Azul Anil
                    600: "#0052A3",
                    700: "#003F7A",
                    800: "#002D52",
                    900: "#001C29",
                },
                branco: "#FFFFFF",
                offwhite: "#F8F9FA",
            },
            fontFamily: {
                archivo: ["var(--font-archivo)", "sans-serif"],
                bricolage: ["var(--font-bricolage)", "sans-serif"],
                dmsans: ["var(--font-dmsans)", "sans-serif"],
            },
            fontSize: {
                // Responsive typography scale
                "display-lg": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-md": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-sm": ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "heading-1": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "heading-2": ["2.25rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
                "heading-3": ["1.875rem", { lineHeight: "1.3" }],
                "heading-4": ["1.5rem", { lineHeight: "1.4" }],
                "heading-5": ["1.25rem", { lineHeight: "1.4" }],
                "body-lg": ["1.125rem", { lineHeight: "1.75" }],
                "body-md": ["1rem", { lineHeight: "1.75" }],
                "body-sm": ["0.875rem", { lineHeight: "1.6" }],
                "caption": ["0.75rem", { lineHeight: "1.5" }],
            },
            spacing: {
                "section-sm": "4rem",
                "section-md": "6rem",
                "section-lg": "8rem",
                "section-xl": "10rem",
            },
            borderRadius: {
                sm: "0.375rem", // 6px
                DEFAULT: "0.5rem", // 8px
                md: "0.75rem", // 12px
                lg: "1rem", // 16px
                xl: "1.5rem", // 24px
                "2xl": "2rem", // 32px
            },
            boxShadow: {
                "soft-sm": "0 2px 8px rgba(0, 0, 0, 0.08)",
                "soft-md": "0 4px 16px rgba(0, 0, 0, 0.1)",
                "soft-lg": "0 8px 24px rgba(0, 0, 0, 0.12)",
                "glassmorphism": "0 8px 32px 0 rgba(0, 102, 204, 0.1)",
            },
            transitionDuration: {
                DEFAULT: "200ms", // Smooth and quick
                fast: "150ms",
                slow: "300ms",
                slower: "500ms",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
                "smooth-in": "cubic-bezier(0.4, 0, 1, 1)", // ease-in
                "smooth-out": "cubic-bezier(0, 0, 0.2, 1)", // ease-out
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-out",
                "fade-up": "fadeUp 0.6s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-tech": "linear-gradient(135deg, #0066CC 0%, #003F7A 100%)",
                "gradient-dark": "linear-gradient(135deg, #2A2A2A 0%, #000000 100%)",
            },
        },
    },
    plugins: [],
};

export default config;
