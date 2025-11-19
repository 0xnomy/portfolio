/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1a365d',
                secondary: '#2c5282',
                accent: '#4299e1',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Source Serif Pro', 'serif'],
            },
        },
    },
    plugins: [],
}
