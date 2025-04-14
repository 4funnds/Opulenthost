/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "sans-serif"],
      },
      animation: {
        "gold-pulse": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(212, 175, 55, 0.3)",
        "gold-md": "0 4px 12px rgba(212, 175, 55, 0.4)",
        "gold-lg": "0 8px 24px rgba(212, 175, 55, 0.5)",
      },
    },
  },
  // plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  plugin: [],
};
