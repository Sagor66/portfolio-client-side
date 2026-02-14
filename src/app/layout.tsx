import "./globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/Shared/NavBar";
import Footer from "@/components/Shared/Footer";

import CustomCursor from "@/components/Shared/CustomCursor";

export const metadata: Metadata = {
  title: "Shazzad.dev",
  description: "Portfolio of Shazzadul Haque",
  icons: {
    icon: "/icon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-nunito text-black">
        <CustomCursor />
        <div className="min-h-screen">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
