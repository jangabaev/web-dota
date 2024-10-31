/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "var(--bg-color)",
        textColor: "var(--text-color)",
        bgNav: "var(--bg-nav)",
        textNav: "var(--text-nav)",
      },
    },
  },
  plugins: [],
};
