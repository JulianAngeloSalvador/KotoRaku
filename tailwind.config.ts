import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

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
    },
  },
  plugins: [],
};
export default config;
