"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setVisible(localStorage.getItem("karot-cookie-consent") !== "accepted"), 0); return () => window.clearTimeout(timer); }, []);
  if (!visible) return null;
  return <div className="fixed inset-x-3 bottom-3 z-[200] mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-white/20 bg-[#344156]/95 p-4 text-white shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:p-5"><p className="text-xs leading-5 text-slate-200">Daha iyi bir deneyim için anonim ziyaret istatistikleri kullanıyoruz. <a href="/gizlilik" className="underline underline-offset-2">Gizlilik politikası</a></p><button type="button" onClick={() => { localStorage.setItem("karot-cookie-consent", "accepted"); window.dispatchEvent(new Event("karot-cookie-consent")); setVisible(false); }} className="shrink-0 rounded-full bg-[#8B1E2D] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#721724]">Kabul et</button></div>;
}
