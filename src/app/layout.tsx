import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jupiter Tecson | Staff Software Engineer",
    description: "Portfolio of Jupiter Tecson, a Staff Software Engineer specializing in DevOps, Backend/Frontend, Cloud, and Distributed Systems.",
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
                <Navbar />
                {children}
            </body>
        </html>
    );
}
