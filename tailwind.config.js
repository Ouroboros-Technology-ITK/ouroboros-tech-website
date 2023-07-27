/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
