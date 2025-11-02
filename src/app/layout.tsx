import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const trebuchet = localFont({
  src: [
    {
      path: "../../public/fonts/Trebuchet MS/trebuchetms.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-trebuchet", // This creates the CSS variable
});

const centuryGothic = localFont({
  src: [
    {
      path: "../../public/fonts/Century Gothic/centurygothic.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Century Gothic/centurygothic_bold.ttf",
      weight: "700",
      style: "bold",
    }
  ],
  variable: "--font-century-gothic",
});

const verdana = localFont({
  src: [
    {
      path: "../../public/fonts/Verdana/Verdana.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Verdana/Verdana-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Verdana/Verdana-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Verdana/Verdana-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-verdana",
});

export const metadata: Metadata = {
  title: "Psychology Society",
  description: "The official website of the Psychology Society of Ashoka University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${trebuchet.variable} ${centuryGothic.variable} ${verdana.variable} font-sans antialiased h-full`}
      >
        {children}
      </body>
    </html>
  );
}
