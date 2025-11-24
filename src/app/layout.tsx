import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jupiter | Staff Software Engineer",
    description: "Portfolio of Jupiter, a Staff Software Engineer specializing in Platform Engineering, Internal Developer Platforms (IDP), Distributed Systems, and AI Agents.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StarBackground />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <Navbar />
                    {children}
                </div>
            </body>
        </html>
    );
}
