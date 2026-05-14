import type { Metadata } from "next";
import { Poppins, Tajawal } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Nexora Agency | Premium Engineering Partner",
  description:
    "Nexora Agency builds scalable software, AI workflows, and premium digital experiences for ambitious businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${tajawal.className} bg-base text-white`}>{children}</body>
    </html>
  );
}
