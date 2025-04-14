import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design At UCR",
  description:
    "Empowering students interested in UI/UX design, web design, and design thinking at the University of California, Riverside",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
