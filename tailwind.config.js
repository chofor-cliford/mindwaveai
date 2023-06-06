/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        primary: "rgba(0, 2, 18, 0.05)",
        secondary: "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
