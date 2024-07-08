import { Russo_One, Poppins } from "next/font/google";

export const russo = Russo_One({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const poppins = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});
