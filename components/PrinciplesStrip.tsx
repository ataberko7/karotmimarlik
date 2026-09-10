"use client";

import { useEffect, useState } from "react";
type PrinciplesStripProps = { message: string };
const translations: Record<string, string> = {
  "Keşif · Sistem planlama · Titiz uygulama": "Survey · System planning · Precise installation",
  "Deneyim · Güvenilir işçilik · Uzun ömürlü çözümler": "Experience · Reliable workmanship · Long-lasting solutions",
  "Teknik doküman · Doğru ürün · Bilinçli uygulama": "Technical documents · Right products · Informed installation",
  "Gerçek referanslar · Teknik detay · Karot Mimarlık deneyimi": "Real references · Technical detail · The Karot Architecture experience",
  "Hızlı iletişim · Ücretsiz keşif · Net çözüm": "Quick contact · Free survey · Clear solution",
};

export default function PrinciplesStrip({ message }: PrinciplesStripProps) {
  const [english, setEnglish] = useState(false);
  useEffect(() => {
    const update = () => setEnglish(document.documentElement.lang === "en");
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
    return () => observer.disconnect();
  }, []);
  return (
    <section aria-label="Karot Mimarlık hizmet ilkeleri" className="relative overflow-hidden border-y border-[#e7a3aa]/45 bg-[#8B1E2D] px-4 py-4 text-white sm:px-6">
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(68,12,22,.35),transparent,rgba(68,12,22,.35))]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3 sm:gap-4"><span className="h-px w-8 bg-white/65 sm:w-12" /><p className="text-[11px] font-bold uppercase tracking-[.16em] sm:text-xs sm:tracking-[.2em]">Karot Mimarlık</p></div>
        <p className="text-[11px] font-medium text-slate-100 sm:text-xs">{english ? translations[message] ?? message : message}</p>
        <span className="hidden h-px w-12 bg-white/65 sm:block" />
      </div>
    </section>
  );
}
