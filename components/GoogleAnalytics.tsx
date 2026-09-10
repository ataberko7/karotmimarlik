"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  const [consent, setConsent] = useState(false);
  useEffect(() => { const update = () => setConsent(localStorage.getItem("karot-cookie-consent") === "accepted"); update(); window.addEventListener("karot-cookie-consent", update); return () => window.removeEventListener("karot-cookie-consent", update); }, []);
  useEffect(() => {
    if (!measurementId || !consent) return;
    const trackWhatsApp = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLAnchorElement>("a[href*='wa.me']");
      if (link) window.gtag?.("event", "whatsapp_click", { event_category: "engagement", link_url: link.href });
    };
    document.addEventListener("click", trackWhatsApp);
    return () => document.removeEventListener("click", trackWhatsApp);
  }, [measurementId, consent]);
  if (!measurementId || !consent) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
