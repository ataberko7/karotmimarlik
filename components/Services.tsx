import Link from "next/link";

const process = [
  {
    number: "01",
    title: "Yerinde keşif",
    description: "Çatı eğimi, mevcut katmanlar, su tahliyesi ve kritik birleşim noktalarını yerinde değerlendiriyoruz.",
  },
  {
    number: "02",
    title: "Sistemi planlama",
    description: "Kaplama, yalıtım, havalandırma ve yağmur suyu detaylarını yapının ihtiyaçlarına göre birlikte planlıyoruz.",
  },
  {
    number: "03",
    title: "Uygulama ve takip",
    description: "Uygulama sürecini sahada takip ediyor; katmanlar ve birleşim detayları arasındaki uyumu kontrol ediyoruz.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-200 px-6 py-24 text-slate-900 md:py-28">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#8B1E2D]/10 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-slate-500/20 blur-3xl" />
      <div className="mx-auto max-w-7xl">

        <div className="relative grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-semibold uppercase tracking-[.22em] text-[#8B1E2D]">Keşiften teslimata</p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight md:text-5xl">Nitelikli bir çatı, doğru analiz ve planlamayla başlar.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Her yapının ihtiyacı farklıdır. Mevcut koşulları yerinde değerlendiriyor; malzeme seçimi ve uygulama detaylarını bu teknik veriye göre oluşturuyoruz.</p>
            <Link href="/hizmetler" className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#8B1E2D]/30 bg-white/45 px-6 py-3 font-semibold text-[#8B1E2D] backdrop-blur-sm transition hover:bg-[#8B1E2D] hover:text-white">
              Tüm hizmetleri incele <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {process.map((item) => (
              <article key={item.number} className="rounded-2xl border border-white/60 bg-white/40 p-6 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/55">
                <span className="font-bold tracking-[.18em] text-[#8B1E2D]">{item.number}</span>
                <div className="mt-6 h-px w-10 bg-[#8B1E2D]/45" />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
