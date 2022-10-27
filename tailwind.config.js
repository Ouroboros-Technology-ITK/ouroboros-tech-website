/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#232967",
        "primary-second": "#191D4D",
        "primary-active": "#4EC9D0",
        "primary-hover": "#353FA4",
      },
      boxShadow: {
        "top-footer": "0px -5px 32px -10px rgba(0,0,0,0.1)",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      fontSize: {
        "s-medium": [
          "14px",
          {
            lineHeight: "auto",
            fontWeight: "500",
          },
        ],
        "m-regular": [
          "16px",
          {
            lineHeight: "auto",
            fontWeight: "400",
          },
        ],
        "m-medium": [
          "16px",
          {
            lineHeight: "auto",
            fontWeight: "500",
          },
        ],
        "m-semibold": [
          "16px",
          {
            lineHeight: "auto",
            fontWeight: "600",
          },
        ],
        "l-medium": [
          "20px",
          {
            lineHeight: "auto",
            fontWeight: "600",
          },
        ],
        "l-bold": [
          "20px",
          {
            lineHeight: "auto",
            fontWeight: "700",
          },
        ],
        "heading-s": [
          "24px",
          {
            lineHeight: "auto",
            fontWeight: "700",
          },
        ],
        "heading-m": [
          "28px",
          {
            lineHeight: "auto",
            fontWeight: "700",
          },
        ],
        "heading-l": [
          "32px",
          {
            lineHeight: "auto",
            fontWeight: "700",
          },
        ],
      },
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
