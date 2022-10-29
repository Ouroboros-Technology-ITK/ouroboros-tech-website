/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-main": "#232967",
        "primary-second": "#191D4D",
        "primary-active": "#4EC9D0",
        "primary-hover": "#353FA4",
      },
      boxShadow: {
        "top-footer": "0px -5px 32px -10px rgba(0,0,0,0.1)",
        "glow-1":
          "2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset, -2px -2px 20px 1px rgba(78, 201, 208, 0.5),8px 8px 28px 0px rgba(25, 29, 77, 0.5),-2px -2px 8px 0px rgba(78, 201, 208, 0.2),8px 8px 16px 0px rgba(25, 29, 77, 1)",
        "glow-2":
          "0px 0px 32px 0px rgba(0, 0, 0, 0.25) inset, -0px -0px 0px 1.5px rgba(78, 201, 208, 0.5),8px 8px 28px 0px rgba(25, 29, 77, 0.5),-0px -0px 16px 8px rgba(78, 201, 208, 0.2),8px 8px 16px 0px rgba(25, 29, 77, 1)",
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
