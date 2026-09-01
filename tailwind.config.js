/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3A67',
        secondary: '#496A81',
        accent: '#66999B',
        light: '#B4C5E4',
        dark: '#1B2845',
      },
    },
  },
  plugins: [],
} 