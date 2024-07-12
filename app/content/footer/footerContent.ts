import { AnchorableText, globalContent } from "../globals";

export const footerContent: AnchorableText[] = [
  {
    title: globalContent.sitename,
    path: "/",
  },
  {
    title: `All Rights Reserved ${new Date().getFullYear()}`,
  },
  {
    title: `Developed by: ${globalContent.developer.name}`,
    path: "/",
  },
];
