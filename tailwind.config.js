import {heroui} from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "main-red": "#ed1944",
            },
            boxShadow: {
                "bottom": "0 1px 0 rgba(0, 0, 0, 0.14), 0 2px 0 rgba(0, 0, 0, 0.05)",
            }
        },
    },
    darkMode: "class",
    plugins: [heroui()],
}

