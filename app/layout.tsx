import type { Metadata, Viewport} from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header"; // <--- IMPORTAR
import { Footer } from "../components/layout/Footer"
import { ThemeProvider } from "@/components/theme-provider"; // <-- 1. IMPORTE AQUI

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
  description: "Dayvson Moura Soluções.",
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
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >

        <ThemeProvider
          attribute="class"        // <-- Diz a ele para mudar a 'class' no <html>
          defaultTheme="system"    // <-- O tema padrão é o do sistema
          enableSystem             // <-- Habilita a detecção do sistema
          disableTransitionOnChange // <-- Evita "flash" de tema ao trocar
        >
        <Header /> {/* <--- SEU HEADER AQUI */}
        
        <main>{children}</main> {/* <--- SEU "MIOLO" (PAGE.TSX) VEM AQUI */}
        
        <Footer/>

        </ThemeProvider>
        
      </body>
    </html>
  );
}
