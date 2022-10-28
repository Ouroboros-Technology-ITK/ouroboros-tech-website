/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
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
        brand: {
          primary: {
            "08": "#252a2a",
            "07": "#4a5454",
            "06": "#6f7e7e",
            "05": "#94a8a8",
            "04": "#b9d2d2",
            "03": "#c7dbdb",
            "02": "#d5e4e4",
            "01": "#e3eded",
            "00": "#f1f6f6",
          },
          secondary: {
            "08": "#011315",
            "07": "#02262a",
            "06": "#03383e",
            "05": "#044b53",
            "04": "#055e68",
            "03": "#377e86",
            "02": "#699ea4",
            "01": "#9bbfc3",
            "00": "#cddfe1",
          },
          trinity: {
            "08": "#14211b",
            "07": "#274136",
            "06": "#3b6252",
            "05": "#4e826d",
            "04": "#62a388",
            "03": "#81b5a0",
            "02": "#a1c8b8",
            "01": "#c0dacf",
            "00": "#e0ede7",
          },
          natural: {
            "00": "#d6d6d6",
            "08": "#0a0a0a",
            "07": "#151515",
            "06": "#1f1f1f",
            "05": "#2a2a2a",
            "04": "#343434",
            "03": "#5d5d5d",
            "02": "#858585",
            "01": "#aeaeae",
          },
        },
      },
<<<<<<< HEAD
=======
      boxShadow: {
        "top-footer": "0px -5px 32px -10px rgba(0,0,0,0.1)",
        "glow-card-1":
          "2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset, -2px -2px 20px 1px rgba(78, 201, 208, 0.5),8px 8px 28px 0px rgba(25, 29, 77, 0.5),-2px -2px 8px 0px rgba(78, 201, 208, 0.2),8px 8px 16px 0px rgba(25, 29, 77, 1)",
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
>>>>>>> 1c91e4d (feat: add some configuration)
    },
  },
  plugins: [],
};
