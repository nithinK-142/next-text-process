import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import { ImageContextProvider } from "@/context/ImageContextProvider";
import Header from "@/components/Header";

const kanit = Kanit({
  weight: ["100", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Text Extractor",
  description: "Text Extractor created using nextjs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <ImageContextProvider>
          <Header />
          {children}
        </ImageContextProvider>
      </body>
    </html>
  );
}
