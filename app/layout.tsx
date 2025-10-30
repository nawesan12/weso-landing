import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Serif_Display, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-space-grotesk",
});

const dmSerif = DM_Serif_Display({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable: "--font-dm-serif",
});

export const metadata: Metadata = {
    title: "Weso — Agencia Creativa para Marcas Imparables",
    description:
        "Weso es la agencia creativa que impulsa marcas ambiciosas con branding, productos digitales y campañas integradas que enamoran a las audiencias.",
    icons: {
        icon: "/image.png",
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="es"
            className={`${inter.variable} ${spaceGrotesk.variable} ${dmSerif.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
