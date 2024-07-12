import type { Metadata } from "next";
import "@/app/globals.css";
import { russo, urbanist } from "./ui/fonts";
import Footer from "./ui/components/Footer";
import LenisContainer from "./ui/components/LenisContainer";

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
      <body className={`${urbanist.variable} ${russo.variable} antialiased`}>
        <LenisContainer>
          <main className="w-fluid-1200 mx-auto px-10">
            {children}
            <Footer />
          </main>
        </LenisContainer>
      </body>
    </html>
  );
}
