/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1DB954",
          dark: "#1aa34a",
        },
      },
      spacing: {
        card: "300px",
        "section-sm": "1rem",
        "section-md": "2.5rem",
      },
      gridTemplateColumns: {
        "auto-fit-card":
          "repeat(auto-fit, minmax(var(--spacing-card, 300px), 1fr))",
      },
      transitionTimingFunction: {
        hover: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
