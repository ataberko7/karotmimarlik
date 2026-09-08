"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore } from "react";
import { hotelProjects } from "@/data/hotel-projects";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  return () => observer.disconnect();
}
const copy = {
  tr: {
    label: "PROJELER & REFERANSLAR", title: "Akdeniz’in seçkin yapılarında,", accent: "Karot deneyimi.",
    intro: "Turizm tesislerinden özel konutlara, farklı ölçeklerdeki yapılara uzanan referanslarımızı keşfedin.",
    explore: "Otel referanslarını keşfet", fieldLink: "Sahadan detaylar", selected: "SEÇİLMİŞ REFERANSLAR", hotels: "Otel ve resort projeleri", all: "Tüm bölgeler", count: "otel referansı", view: "Görseli incele", close: "Kapat", source: "Fotoğraf kaynağı", current: "Güncel tesis adı",
    note: "Bu bölümdeki fotoğraflar tesislerin genel görünümünü tanıtır; gerçekleştirilen işin kapsamını veya uygulama tarihini göstermez. Saha fotoğraflarımız aşağıda ayrıca sunulmaktadır.",
    field: "UYGULAMA ARŞİVİ", fieldTitle: "İşçiliğin yakından görünümü.", fieldIntro: "Taşıyıcı sistemden kaplama altı hazırlığa ve tamamlanmış çatıya kadar, sahadaki farklı uygulama aşamaları.",
    fieldNames: ["Ahşap taşıyıcı sistem", "Kaplama altı hazırlık", "Tamamlanmış kiremit çatı"],
    cta: "Bir sonraki projenizi birlikte planlayalım.", ctaText: "Yapınızın ihtiyaçlarını, uygulama seçeneklerini ve keşif sürecini ekibimizle değerlendirin.", contact: "Projenizi anlatın", catalogue: "Teknik kataloglar", official: "Tesisin resmi kaynağı ↗", archive: "Saha fotoğrafı", preview: "Tesis görünümü",
  },
  en: {
    label: "PROJECTS & REFERENCES", title: "Karot expertise,", accent: "across the Mediterranean.",
    intro: "Explore our references across hospitality properties and private residences, with buildings of different scales and requirements.",
    explore: "Explore hotel references", fieldLink: "On-site details", selected: "SELECTED REFERENCES", hotels: "Hotels and resorts", all: "All regions", count: "hotel references", view: "View photograph", close: "Close", source: "Photo source", current: "Current hotel name",
    note: "These photographs show the properties’ general appearance, not the scope or date of our work. Our on-site photographs are presented separately below.",
    field: "ON-SITE ARCHIVE", fieldTitle: "A closer look at the workmanship.", fieldIntro: "Different stages of on-site work, from the supporting structure and roof preparation to the finished tiled roof.",
    fieldNames: ["Timber roof structure", "Roof preparation", "Completed tiled roof"],
    cta: "Let’s plan your next project together.", ctaText: "Discuss your building’s requirements, installation options and the site survey process with our team.", contact: "Tell us about your project", catalogue: "Technical catalogues", official: "Official property source ↗", archive: "On-site photograph", preview: "Property view",
  },
};

export default function ProjectsPage() {
  const locale = useSyncExternalStore<"tr" | "en">(subscribe, () => document.documentElement.lang === "en" ? "en" : "tr", () => "tr");
  const t = copy[locale];
  const [region, setRegion] = useState("all");
  const [selected, setSelected] = useState<(typeof hotelProjects)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const filtered = hotelProjects.filter(p => region === "all" || p.region === region);
  const regions = [...new Set(hotelProjects.map(p => p.region))];
  return (
    <main data-localized="true" lang={locale} className="bg-[#465164] text-white">
      <section className="relative isolate overflow-hidden pb-14 pt-36 md:pb-20 md:pt-44">
        <Image src="/images/projects-hero.png" alt="" fill priority sizes="100vw" className="object-cover brightness-125 saturate-75" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(62,72,88,.94)_0%,rgba(62,72,88,.79)_36%,rgba(62,72,88,.18)_72%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,#465164_0%,transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold tracking-[.24em] text-[#ffc2cb]">{t.label}</p>
          <h1 className="mt-7 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">{t.title}<span className="mt-3 block text-[#f3d3d7]">{t.accent}</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-slate-100">{t.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#hotel-references" className="rounded-full bg-[#8B1E2D] px-6 py-4 text-sm font-semibold hover:bg-[#a92b3d]">{t.explore} ↘</a>
            <a href="#site-archive" className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold backdrop-blur-md hover:bg-white/20">{t.fieldLink}</a>
          </div>
          <div className="mt-16 flex flex-wrap items-end justify-between gap-5 border-t border-white/25 pt-6">
            <div className="flex items-baseline gap-3"><span className="text-4xl font-light">{hotelProjects.length.toString().padStart(2, "0")}</span><span className="text-sm text-slate-200">{t.count}</span></div>
            <p className="rounded-full border border-white/20 bg-[#465164]/60 px-4 py-2 text-xs text-slate-100 backdrop-blur">{locale === "tr" ? "Çatı sistemleri · Mimari detay · Uygulama" : "Roofing systems · Architectural detail · Installation"}</p>
          </div>
        </div>
      </section>
      <section id="hotel-references" className="scroll-mt-28 px-6 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[.22em] text-[#f0b1bb]">{t.selected}</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-5"><h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t.hotels}</h2><span aria-live="polite" className="text-sm text-slate-200">{filtered.length} {t.count}</span></div>
          <div role="group" aria-label={t.all} className="mt-8 flex flex-wrap gap-2 border-b border-white/15 pb-8">
            {["all", ...regions].map(item => <button key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)} className={`rounded-full border px-5 py-2.5 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-4 ${region === item ? "border-[#c87985] bg-[#8B1E2D] text-white" : "border-white/20 bg-white/5 text-slate-100 hover:bg-white/15"}`}>{item === "all" ? t.all : item}</button>)}
          </div>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {filtered.map((project, index) => <article key={project.id} className="group overflow-hidden rounded-2xl border border-white/20 bg-white/[.07] shadow-lg shadow-slate-900/5">
              <button type="button" onClick={() => { setSelected(project); dialog.current?.showModal(); }} aria-label={`${project.name} — ${t.view}`} className="relative block aspect-[16/10] w-full overflow-hidden text-left focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#f0b1bb]">
                <Image src={project.image} alt={`${project.name} — ${t.preview}`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectPosition: project.position }} className="object-cover transition duration-700 motion-safe:group-hover:scale-[1.025]" />
                <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-[#465164]/65 px-3 py-1.5 text-xs text-white backdrop-blur">{project.location}</span>
                <span aria-hidden="true" className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-[#465164]/70 text-xl text-white backdrop-blur">↗</span>
              </button>
              <div className="flex gap-5 p-6 md:p-7"><span aria-hidden="true" className="pt-1 text-sm text-[#efb9c2]">{(index + 1).toString().padStart(2, "0")}</span><div className="min-w-0 flex-1"><h3 className="text-xl font-semibold leading-snug md:text-2xl">{project.name}</h3>{project.currentName && <p className="mt-2 text-xs leading-5 text-slate-200">{t.current}: {project.currentName}</p>}<a href={project.source} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white">{t.source} ↗</a></div></div>
            </article>)}
          </div>
          <p className="mt-8 max-w-4xl text-sm leading-6 text-slate-200">{t.note}</p>
        </div>
      </section>
      <section id="site-archive" className="scroll-mt-24 border-y border-white/15 bg-white/[.06] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl"><div className="grid gap-6 md:grid-cols-2 md:items-end"><div><p className="text-xs font-semibold tracking-[.22em] text-[#f0b1bb]">{t.field}</p><h2 className="mt-5 max-w-lg text-3xl font-semibold leading-tight md:text-5xl">{t.fieldTitle}</h2></div><p className="max-w-lg text-base leading-8 text-slate-100">{t.fieldIntro}</p></div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">{["/images/proje11.jpg", "/images/proje7.jpg", "/images/proje8.jpg"].map((src, index) => <figure key={src} className="overflow-hidden rounded-2xl border border-white/20 bg-white/5"><div className="relative aspect-[4/3]"><Image src={src} alt={t.fieldNames[index]} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div><figcaption className="p-5"><span className="text-xs text-[#f0b1bb]">{t.archive}</span><h3 className="mt-2 text-lg font-semibold">{t.fieldNames[index]}</h3></figcaption></figure>)}</div>
        </div>
      </section>
      <section className="px-6 py-16 md:py-24"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-white/20 bg-[linear-gradient(120deg,rgba(255,255,255,.10),rgba(139,30,45,.15))] p-8 md:p-12 lg:flex-row lg:items-center"><div className="max-w-2xl"><h2 className="text-3xl font-semibold leading-tight md:text-4xl">{t.cta}</h2><p className="mt-4 max-w-lg leading-7 text-slate-100">{t.ctaText}</p></div><div className="flex shrink-0 flex-col gap-4"><Link href="/iletisim" className="rounded-full bg-[#8B1E2D] px-7 py-4 text-center text-sm font-semibold hover:bg-[#a92b3d]">{t.contact} ↗</Link><Link href="/kataloglar" className="text-center text-sm text-slate-200 underline underline-offset-4">{t.catalogue}</Link></div></div></section>
      <dialog ref={dialog} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[92dvh] w-[min(1100px,94vw)] overflow-auto rounded-2xl border border-white/25 bg-[#465164] p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm" aria-label={selected?.name ?? t.view}>
        {selected && <><div className="flex items-center justify-between gap-4 p-5"><div><h2 className="text-lg font-semibold">{selected.name}</h2><p className="mt-1 text-xs text-slate-200">{selected.location}</p></div><button type="button" autoFocus onClick={() => dialog.current?.close()} className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10">{t.close} ×</button></div><div className="relative h-[min(58dvh,650px)] bg-black/15"><Image src={selected.image} alt={`${selected.name} — ${t.preview}`} fill sizes="94vw" className="object-contain" /></div><div className="p-5"><p className="text-xs leading-5 text-slate-200">{t.note}</p><a className="mt-3 inline-block text-sm text-[#ffc2cb] underline underline-offset-4" href={selected.source} target="_blank" rel="noopener noreferrer">{t.official}</a></div></>}
      </dialog>
    </main>
  );
}
