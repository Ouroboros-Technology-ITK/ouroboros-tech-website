/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-main": "#232967",
      "primary-second": "#191D4D",
      "primary-active": "#4EC9D0",
      "primary-hover": "#353FA4",
    },
    extend: {
      backgroundImage: (theme) => ({
        "primary-gradient-to-t": `linear-gradient(to top, ${theme(
          "colors.primary-second"
        )}, ${theme("colors.primary-hover")})`,
        "primary-gradient-to-b": `linear-gradient(to bottom, ${theme(
          "colors.primary-second"
        )}, ${theme("colors.primary-hover")})`,
        "primary-gradient-to-l": `linear-gradient(to left, ${theme(
          "colors.primary-second"
        )}, ${theme("colors.primary-hover")})`,
        "primary-gradient-to-r": `linear-gradient(to right, ${theme(
          "colors.primary-second"
        )}, ${theme("colors.primary-hover")})`,
      }),
    },
  },
  plugins: [],
};
