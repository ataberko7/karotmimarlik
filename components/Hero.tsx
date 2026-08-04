export default function Hero() {
  return (
<section className="min-h-screen bg-slate-950 pt-20 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-orange-500 font-semibold uppercase tracking-[0.2em]">
          Braas Yetkili Bayisi
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
          Antalya'nın
          <br />
          Güvenilir
          <br />
          Çatı Çözüm Ortağı
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-slate-300">
          Karot Mimarlık olarak Antalya ve çevre illerde çatı sistemleri,
          izolasyon, yenileme ve profesyonel uygulama hizmetleri sunuyoruz.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold hover:bg-orange-600 transition">
            Ücretsiz Keşif
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:bg-white hover:text-slate-900 transition">
            Hizmetlerimiz
          </button>
        </div>
      </div>
    </section>
  );
}