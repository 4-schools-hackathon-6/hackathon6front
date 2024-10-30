import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Swing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.className} antialiased bg-gray-400 flex justify-center`}
      >
        <div className="max-w-[1440px] max-h-[3200px] text-black bg-white w-[100vw] h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
