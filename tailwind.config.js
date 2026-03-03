/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#E8E4DD",
                accent: "#E63B2E",
                background: "#F5F3EE",
                dark: "#111111",
            },
            fontFamily: {
                heading: ['"Zalando Sans"', 'sans-serif'],
                drama: ['"DM Serif Display"', 'serif'],
                data: ['"Space Mono"', 'monospace'],
                sans: ['"Zalando Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
