import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: {
            DEFAULT: "#7A1C1C",
            dark: "#581111",
            light: "#9E2A2A",
          },
          vermilion: "#B52C23",
          mustard: {
            DEFAULT: "#E6AC2A",
            dark: "#C8830E",
            light: "#F5B84A",
          },
          forest: {
            DEFAULT: "#285F49",
            dark: "#14361E",
            light: "#3E7C62",
          },
          blue: {
            DEFAULT: "#244B6B",
            dark: "#16324F",
          },
        },
        surface: {
          canvas: "#FFF8EE",
          card: "#FFFFFF",
          parchment: "#F3E4C5",
          sand: "#F2DFBA",
          inverse: "#262321",
        },
        text: {
          primary: "#262321",
          secondary: "#5A524D",
          muted: "#8C8178",
          inverse: "#FFF8EE",
          price: "#7A1C1C",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-poppins)", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        arch: "9999px 9999px 12px 12px",
      },
      boxShadow: {
        retro: "3px 4px 0px 0px #262321",
        "retro-sm": "2px 2px 0px 0px #262321",
        "retro-lg": "4px 6px 0px 0px #262321",
      },
    },
  },
  plugins: [],
};

export default config;

