import type { Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header"; // <--- IMPORTAR
import { Footer } from "../components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dayvson Moura",
  description: "O Desenvolvedor das suas Soluções.",
};

// 2. Crie o 'export const viewport' separado aqui
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Header /> {/* <--- SEU HEADER AQUI */}
        
        <main>{children}</main> {/* <--- SEU "MIOLO" (PAGE.TSX) VEM AQUI */}
        
        <Footer/>
        
      </body>
    </html>
  );
}
