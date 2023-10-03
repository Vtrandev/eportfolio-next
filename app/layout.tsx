import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio created by Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
          <Background />
          <Footer />
        </div>
      </body>
    </html>
  );
}
