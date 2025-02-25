/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "mexican-red": "rgb(var(--mexican-red) / <alpha-value>)",
        pink: "rgb(var(--pink) / <alpha-value>)",
        "teal-blue": "rgb(var(--teal-blue) / <alpha-value>)",
        "new-gray": "rgb(var(--new-gray) / <alpha-value>)",
        "light-gray": "rgb(var(--light-gray) / <alpha-value>)",
        "btn-color": "rgb(var(--button-font-color) / <alpha-value>)",
      },
      fontFamily: {
        tajawal: ["var(--font-tajawal)", "sans-serif"],
        cairo: ["var(--font-cairo)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
