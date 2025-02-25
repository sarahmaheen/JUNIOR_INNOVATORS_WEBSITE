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
        "mexican-red": "#A92223",
        pink: "#D48C94",
        "teal-blue": "#1E3D5D",
        "new-gray": "#eff0f3",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        tajawal: ["Tajawal", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
