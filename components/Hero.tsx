import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Arka plan fotoğrafı */}
      <Image
        src="/images/hero.jpg"
        alt="Karot Mimarlık çatı uygulaması"
        fill
        priority
        className="object-cover"
      />

      {/* Fotoğrafın üzerine koyu katman */}
      <div className="absolute inset-0 bg-slate-950/65" />

      {/* Hafif turuncu ışık efekti */}
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      {/* İçerik */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-32 md:grid-cols-[1.2fr_0.8fr]">

          {/* Sol taraf */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Braas Yetkili Bayisi
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Antalya&apos;nın
              <br />
              Güvenilir
              <br />
              Çatı Çözüm Ortağı
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Karot Mimarlık olarak Antalya ve çevre illerde çatı sistemleri,
              izolasyon, yenileme ve profesyonel uygulama hizmetleri sunuyoruz.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/905313020479"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
              >
                Ücretsiz Keşif
              </a>

              <Link
                href="/hizmetler"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>

          {/* Sağ taraf - BMI / BRAAS */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md">

              {/* Marka alanı */}
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#00a5df] text-lg font-extrabold text-white">
                  BMI
                </div>

                <div className="text-3xl font-bold tracking-tight">
                  BRAAS
                </div>
              </div>

              <div className="my-7 h-px bg-white/15" />

              {/* Rozet */}
              <div className="mx-auto flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-orange-500 bg-slate-950/80 text-center shadow-2xl">
                <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                  Yetkili
                </span>

                <span className="mt-1 text-lg font-bold">
                  BAYİ
                </span>

                <span className="mt-1 text-[10px] uppercase tracking-wider text-slate-300">
                  Çatı Sistemleri
                </span>
              </div>

              <h2 className="mt-7 text-center text-2xl font-bold">
                Braas Çatı Sistemleri
              </h2>

              <p className="mt-3 text-center text-sm leading-6 text-slate-300">
                Kaliteli çatı sistemleri ve profesyonel uygulama çözümleri.
              </p>

              <div className="mt-6 flex justify-center">
                <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-400">
                  Güvenilir Çözüm Ortağı
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}