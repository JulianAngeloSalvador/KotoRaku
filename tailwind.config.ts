import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      light: "100",
      DEFAULT: "300",
      regular: "400",
      semibold: "500",
      bold: "700",
      extrabold: "900",
    },
    fontSize: {
      "special-headline": "var(--special-fs)",
      "special-subheadline": "var(--special-sub-fs)",
      headline: "clamp(3rem, 3vw + 1rem, 4.5rem)",
      subheadline: "clamp(2rem, 3vw + 1rem, 3rem)",
      caption: "clamp(1.35rem, 2vw + 1rem, 1.5rem)",
      "main-fs": "clamp(1.05rem, 2vw + 1rem, 1.225rem)",
      small: "clamp(.8rem, 2vw + 1rem, 1.05rem)",
    },
    transitionDuration: {
      fast: ".3s",
      medium: ".5s",
      slow: ".75s",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#141414",
        secondary: "#EBEBEB",
      },
      fontFamily: {
        russo: ["var(--font-russo)"],
        urbanist: ["var(--font-urbanist)"],
      },
      width: {
        "fluid-120": "min(120px, 100%)",
        "fluid-1200": "min(1200px, 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*"),
        addVariant("hocus", ["&:hover", "&:focus"]);
    }),
  ],
};
export default config;
