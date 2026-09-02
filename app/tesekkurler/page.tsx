import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#344156] px-6 pb-24 pt-36 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(148,163,184,.3),transparent_34%),radial-gradient(circle_at_88%_88%,rgba(139,30,45,.26),transparent_40%)]" />
      <section className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/25 bg-white/[.1] p-8 text-center shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:p-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8B1E2D] text-3xl">✓</span>
        <p className="mt-8 text-xs font-bold uppercase tracking-[.22em] text-[#f0a4ac]">Teklif talebiniz alındı</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Teşekkür ederiz.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-200">Bilgileriniz ekibimize iletildi. Talebinizi inceleyip en kısa sürede sizinle iletişime geçeceğiz.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">Ana Sayfaya Dön</Link>
          <Link href="/hizmetler" className="rounded-full border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10">Hizmetleri İncele</Link>
        </div>
      </section>
    </main>
  );
}
