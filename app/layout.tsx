import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "KotoRaku",
  description: "Expand your Japanese Vocabulary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary">{children}</body>
    </html>
  );
}
