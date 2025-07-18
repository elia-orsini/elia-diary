import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import type { Viewport } from "next";

const TimesNewRoman = localFont({
  src: [
    {
      path: "./Times New Roman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Times New Roman Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Times New Roman Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Times New Roman Bold Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-times-new-roman",
});

export const metadata: Metadata = {
  title: "Elia's Diary",
  description: "Elia's Image Diary",
  icons: {
    icon: "/globe.svg",
  },
  openGraph: {
    title: "Elia's Diary",
    description: "Elia's Image Diary",
    url: "https://diary.elia-orsini.com",
    siteName: "Elia's Diary",
    images: [
      {
        url: "/cover.png",
        width: 500,
        height: 500,
        alt: "Elia's Diary",
      },
    ],
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`no-scrollbar flex flex-col overflow-x-clip bg-gray-100 text-red-600 antialiased ${TimesNewRoman.className} text-[12px]`}
      >
        <div className="flex min-h-dvh flex-col">{children}</div>
      </body>
    </html>
  );
}
