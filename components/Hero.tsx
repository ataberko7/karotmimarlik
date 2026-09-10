import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-slate-950 text-white sm:min-h-screen">
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

      {/* Hafif bordo ışık efekti */}
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#8B1E2D]/10 blur-3xl" />

      {/* İçerik */}
      <div className="relative z-10 flex min-h-[760px] items-center sm:min-h-screen">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-14 pt-36 sm:gap-16 sm:px-6 sm:py-32 md:grid-cols-[1.2fr_0.8fr]">

          {/* Sol taraf */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#B52A3A]">
              Braas Yetkili Bayisi
            </p>

            <h1 data-i18n-rich="home-hero" className="mt-5 max-w-4xl text-[2.65rem] font-bold leading-[1.05] sm:text-5xl md:text-7xl">
              Antalya&apos;nın
              <br />
              Güvenilir
              <br />
              Çatı Çözüm Ortağı
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:mt-8 sm:text-lg sm:leading-8">
              Antalya ve çevre illerde; yeni çatı uygulamaları, yenileme ve
              yalıtım çözümlerini yapınızın teknik gereksinimlerine göre planlıyoruz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#teklif-al"
                className="rounded-full bg-[#8B1E2D] px-8 py-4 text-center font-semibold transition hover:bg-[#721724]"
              >
                Teklif Al
              </a>

              <Link
                href="/hizmetler"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-900"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>

          {/* Sağ taraf - BMI / BRAAS */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:p-8">

              {/* Braas yetkili çözüm ortağı rozeti */}
              <div className="rounded-2xl border border-white/15 bg-slate-950/35 p-6 text-center shadow-xl shadow-black/10">
                <p className="text-[10px] font-semibold uppercase tracking-[.28em] text-slate-300">Karot Mimarlık</p>
                <div className="mt-4 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#B52A3A]" />
                  <span className="text-4xl font-extrabold tracking-[-.06em] text-[#e43b32]">BRAAS</span>
                  <span className="h-px w-8 bg-[#B52A3A]" />
                </div>
                <p className="mt-3 text-xs font-bold uppercase tracking-[.2em] text-white">Yetkili Çözüm Ortağı</p>
              </div>

              <div className="my-6 h-px bg-white/15" />

              <h2 className="text-center text-2xl font-bold">Çatı sistemlerinde bütüncül uygulama.</h2>
              <p className="mt-3 text-center text-sm leading-6 text-slate-300">Kaplama, yalıtım ve tamamlayıcı detayları aynı sistem yaklaşımıyla ele alıyoruz.</p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl border border-white/10 bg-white/[.06] p-3"><strong className="block text-lg">30 YIL</strong><span className="text-[10px] uppercase tracking-wider text-slate-300">Ürün garantisi*</span></div>
                <div className="rounded-xl border border-white/10 bg-white/[.06] p-3"><strong className="block text-lg">ANTALYA</strong><span className="text-[10px] uppercase tracking-wider text-slate-300">ve çevre iller</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
