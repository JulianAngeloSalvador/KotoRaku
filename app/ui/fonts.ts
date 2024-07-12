import { Russo_One, Urbanist } from "next/font/google";

export const russo = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-russo",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const urbanist = Urbanist({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});
