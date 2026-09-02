import WhyUs from "@/components/WhyUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <QuoteForm />
      <section aria-label="Karot Mimarlık hizmet ilkesi" className="relative overflow-hidden border-y border-[#e7a3aa]/45 bg-[#8B1E2D] px-6 py-4 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(68,12,22,.35),transparent,rgba(68,12,22,.35))]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-white/65" />
            <p className="text-xs font-bold uppercase tracking-[.2em] text-white">Karot Mimarlık</p>
          </div>
          <p className="text-xs font-medium text-slate-100">Doğru malzeme · Teknik uygulama · Uzun ömürlü çatı sistemleri</p>
          <span className="hidden h-px w-12 bg-white/65 sm:block" />
        </div>
      </section>
    </>
  );
}
