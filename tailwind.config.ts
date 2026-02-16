import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                quicksand: ["var(--font-quicksand)", "sans-serif"],
                heading: ["var(--font-space-grotesk)", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                indigo: {
                    50: "#eef2ff",
                    100: "#e0e7ff",
                    200: "#c7d2fe",
                    300: "#a5b4fc",
                    400: "#818cf8",
                    500: "#6366f1",
                    600: "#4f46e5",
                    700: "#4338ca",
                    800: "#3730a3",
                    900: "#312e81",
                    950: "#1e1b4b",
                },
                dark: {
                    bg: "#0a0a0a",
                    card: "#171717",
                    border: "rgba(255, 255, 255, 0.1)",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            boxShadow: {
                "glow": "0 0 20px rgba(99, 102, 241, 0.5)",
                "glow-sm": "0 0 10px rgba(99, 102, 241, 0.3)",
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulseGlow 2s infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulseGlow: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.5" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
