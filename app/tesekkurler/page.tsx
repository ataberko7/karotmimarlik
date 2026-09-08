"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import company from "@/data/company";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  return () => observer.disconnect();
}

const copy = {
  tr: {
    label: "TALEBİNİZ BİZE ULAŞTI", title: "Güveniniz için", accent: "teşekkür ederiz.",
    intro: "Çatı projenizle ilgili bilgileri aldık. Ekibimiz talebinizi inceleyerek paylaştığınız iletişim bilgileri üzerinden size dönüş yapacak.",
    next: "BUNDAN SONRA NE OLACAK?",
    steps: [
      ["Talebinizi inceliyoruz", "Yapınızın konumunu, ihtiyaçlarınızı ve paylaştığınız proje detaylarını değerlendiriyoruz."],
      ["Sizinle görüşüyoruz", "Uygun çözüm seçeneklerini konuşmak ve eksik bilgileri tamamlamak için sizinle iletişime geçiyoruz."],
      ["Sonraki adımı planlıyoruz", "Görüşmemizin ardından ihtiyaç duyulursa yerinde keşfi birlikte planlıyoruz."],
    ],
    photo: "Projenizi daha yakından tanıyalım.", photoText: "Çatınızın mevcut durumunu gösteren fotoğraflar, ilk değerlendirmemize yardımcı olur. Dilerseniz adınızı belirterek WhatsApp üzerinden paylaşabilirsiniz.",
    whatsapp: "WhatsApp’tan fotoğraf paylaş", projects: "Projelerimizi inceleyin", home: "Ana sayfaya dön", note: "Talebinizi tekrar göndermenize gerek yok.",
    message: "Merhaba, web sitenizden teklif talebi gönderdim. Projeme ait fotoğrafları paylaşmak istiyorum.",
  },
  en: {
    label: "REQUEST RECEIVED", title: "Thank you for", accent: "placing your trust in us.",
    intro: "We have received the details of your roofing project. Our team will review your request and get back to you using the contact information you provided.",
    next: "WHAT HAPPENS NEXT?",
    steps: [
      ["We review your request", "We assess your location, requirements and the project details you have shared."],
      ["We get in touch", "We contact you to discuss suitable solutions and clarify any remaining details."],
      ["We plan the next step", "Following our discussion, we arrange an on-site survey with you if needed."],
    ],
    photo: "Help us get to know your project.", photoText: "Photos showing your roof’s current condition help with our initial assessment. You can share them on WhatsApp, along with your name.",
    whatsapp: "Share photos on WhatsApp", projects: "Explore our projects", home: "Back to home", note: "There is no need to submit your request again.",
    message: "Hello, I submitted a quote request through your website and would like to share photos of my project.",
  },
};

export default function ThankYouPage() {
  const locale = useSyncExternalStore<"tr" | "en">(subscribe, () => document.documentElement.lang === "en" ? "en" : "tr", () => "tr");
  const t = copy[locale];
  return (
    <main data-localized="true" lang={locale} className="relative overflow-hidden bg-[#465164] px-6 pb-20 pt-36 text-white md:pb-24 md:pt-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(203,213,225,.23),transparent_55%),radial-gradient(ellipse_at_95%_85%,rgba(139,30,45,.22),transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <section>
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-white/10 shadow-lg shadow-slate-950/10">
              <svg aria-hidden="true" viewBox="0 0 48 48" className="h-11 w-11 fill-none stroke-[#f1bcc2]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path className="confirmation-check" d="m11 25 9 9 18-21" pathLength="1" /></svg>
            </div>
            <p className="text-xs font-semibold tracking-[.2em] text-[#f1bcc2]">{t.label}</p>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl"><span className="block">{t.title}</span><span className="mt-2 block text-slate-200">{t.accent}</span></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-200">{t.intro}</p>
            <p className="mt-5 text-sm text-slate-300">{t.note}</p>
          </section>
          <section className="rounded-3xl border border-white/20 bg-white/[.08] p-7 shadow-xl shadow-slate-950/10 backdrop-blur-xl md:p-9">
            <h2 className="text-xs font-semibold tracking-[.16em] text-slate-200">{t.next}</h2>
            <ol className="mt-8 space-y-7">
              {t.steps.map(([title, description], index) => <li key={index} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#efb1bb]/35 bg-[#8B1E2D]/20 text-xs font-semibold text-[#f5c9cf]">0{index + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-200">{description}</p></div></li>)}
            </ol>
          </section>
        </div>
        <section className="mt-14 grid items-center gap-6 rounded-2xl border border-white/20 bg-white/[.06] p-7 md:grid-cols-[1fr_auto] md:p-8">
          <div><h2 className="text-xl font-semibold">{t.photo}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200">{t.photoText}</p></div>
          <a href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(t.message)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#8B1E2D] px-6 py-4 text-sm font-semibold transition hover:bg-[#a3293a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{t.whatsapp}<span aria-hidden="true">↗</span></a>
        </section>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 text-sm">
          <Link href="/" className="text-slate-200 transition hover:text-white">← {t.home}</Link>
          <Link href="/projeler" className="font-semibold text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white">{t.projects} →</Link>
        </div>
      </div>
    </main>
  );
}
