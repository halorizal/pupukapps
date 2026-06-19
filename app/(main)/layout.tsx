import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Informasi Utama
  title: {
    default: "Pupuk App - Manajemen Distribusi Pupuk Terintegrasi",
    template: "%s - Pupuk App", // Template untuk halaman lain
  },
  description: "Platform manajemen distribusi pupuk terpercaya untuk pemantauan stok real-time dan logistik yang efisien.",

  // 2. Metadata untuk Mesin Pencari
  keywords: ["distribusi pupuk", "manajemen pupuk", "logistik pupuk", "aplikasi pupuk"],
  authors: [{ name: "PT. Rain Kreasi Media" }],
  creator: "PT. Rain Kreasi Media",

  // 3. Open Graph (Untuk share ke WA/Social Media agar ada gambar preview)
  openGraph: {
    title: "Pupuk App",
    description: "Solusi manajemen distribusi pupuk terbaik untuk efisiensi bisnis Anda.",
    url: "https://domain-anda.com", // Ganti dengan domain asli
    siteName: "Pupuk App",
    images: [
      {
        url: "/og-image.png", // Taruh gambar di folder /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 4. Canonical URL (Penting untuk SEO agar Google tahu ini halaman utama)
  alternates: {
    canonical: "https://domain-anda.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full bg-white">
      <body
        className={`${inter.variable} font-sans antialiased min-h-full flex flex-col `}
      >
        <Navbar />
        <main className="bg-white">
          {children}</main>
        <Footer />
        <MobileNav />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}