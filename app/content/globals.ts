interface Globals {
  sitename: string;
  developer: {
    name: string;
    email: string;
  };
}

export interface AnchorableText {
  title: string;
  path?: string;
}

export const globalContent: Globals = {
  sitename: "KotoRaku",
  developer: {
    name: "Julian Salvador",
    email: process.env.MY_EMAIL!,
  },
};
