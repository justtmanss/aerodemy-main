import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aerodemy Aviation",
    description: "AerodemyAviation. Buckle Up future aviators!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="overflow-hidden">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
