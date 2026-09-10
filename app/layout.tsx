import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karotmimarlik.com"),
  title: "Karot Mimarlık | Antalya Çatı Sistemleri",
  description:
    "Karot Mimarlık - Antalya ve çevre illerde profesyonel çatı sistemleri, yenileme ve izolasyon hizmetleri.",
  keywords: ["Antalya çatı sistemleri", "çatı yapımı", "çatı yenileme", "çatı izolasyonu", "Braas yetkili bayisi", "çelik çatı konstrüksiyonu"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://karotmimarlik.com",
    siteName: "Karot Mimarlık",
    title: "Karot Mimarlık | Antalya Çatı Sistemleri",
    description: "Antalya ve çevre illerde çatı yapımı, yenileme, yalıtım ve Braas çatı sistemi uygulamaları.",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Karot Mimarlık çatı uygulaması" }],
  },
  twitter: { card: "summary_large_image", title: "Karot Mimarlık | Antalya Çatı Sistemleri", description: "Antalya ve çevre illerde profesyonel çatı çözümleri.", images: ["/images/hero.jpg"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "RoofingContractor", name: "Karot Mimarlık", url: "https://karotmimarlik.com", telephone: "+90 531 302 0479", email: "ataberk.orman07@gmail.com", address: { "@type": "PostalAddress", streetAddress: "Cumhuriyet Mah. Fatih Cad. No:49", addressLocality: "Muratpaşa", addressRegion: "Antalya", addressCountry: "TR" }, areaServed: "Antalya ve çevre iller" }) }} />
        <Navbar />
        <GoogleAnalytics />
        <CookieConsent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
