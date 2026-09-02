import Image from "next/image";
import company from "@/data/company";

export default function Page() {
  const whatsappNumber = company.whatsapp.replace(/\D/g, "");

  const whatsappMessage = encodeURIComponent(
    "Merhaba, çatı projem hakkında bilgi almak istiyorum."
  );

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* ======================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[760px] overflow-hidden">

        {/* Arka plan fotoğrafı */}
        <Image
          src="/images/villalar.png"
          alt="Karot Mimarlık çatı uygulamaları"
          fill
          priority
          className="object-cover"
        />

        {/* Ana sayfadakiyle aynı tek koyu katman: fotoğraf canlı kalır. */}
        <div className="absolute inset-0 bg-slate-950/55" />

        {/* Ana sayfadaki hafif bordo ışık efekti */}
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#8B1E2D]/10 blur-3xl" />

        {/* Hero içerik */}
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-20 pt-36">

          <div className="max-w-4xl">

            {/* Küçük başlık */}
            <div className="flex items-center gap-5">
              <span className="h-[2px] w-12 bg-[#A91F2D]" />

              <p className="font-semibold uppercase tracking-[0.28em] text-[#D96771]">
                İletişim
              </p>
            </div>


            {/* Başlık */}
            <h1 data-i18n-rich="contact-hero" className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl">
              Projenizi
              <br />
              birlikte konuşalım
              <span className="text-[#A91F2D]">.</span>
            </h1>


            {/* Açıklama */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
              Çatı yapımı, yenileme veya izolasyon projeniz için bizimle
              iletişime geçebilir, ücretsiz keşif ve detaylı bilgi
              alabilirsiniz.
            </p>


            {/* Özellikler */}
            <div className="mt-14 grid max-w-4xl gap-8 sm:grid-cols-3">

              {/* Garanti */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#A91F2D] bg-slate-950/30 text-xl text-[#E36D77] backdrop-blur-sm">
                  ◈
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 text-white">
                    30 YIL
                    <br />
                    ÜRÜN GARANTİSİ
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Suya ve dona karşı güvence
                  </p>
                </div>

              </div>


              {/* Braas */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#A91F2D] bg-slate-950/30 text-xl text-[#E36D77] backdrop-blur-sm">
                  ✦
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 text-white">
                    BRAAS
                    <br />
                    YETKİLİ BAYİ
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Orijinal ürün ve profesyonel hizmet
                  </p>
                </div>

              </div>


              {/* Antalya */}
              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#A91F2D] bg-slate-950/30 text-xl text-[#E36D77] backdrop-blur-sm">
                  ●
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 text-white">
                    ANTALYA
                    <br />
                    VE ÇEVRESİ
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Hızlı keşif ve yerinde çözüm
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ======================================================
          İLETİŞİM BİLGİLERİ
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-white/10 bg-slate-900 px-6 py-24 md:py-28">

        {/* Ana sayfadaki cam kart atmosferi için hafif bordo ışık */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#8B1E2D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">

            {/* ==================================================
                SOL TARAF
            ================================================== */}
            <div>

              <div className="flex items-center gap-5">
                <span className="h-[2px] w-12 bg-[#A91F2D]" />

                <p className="font-semibold uppercase tracking-[0.28em] text-[#E1878E]">
                  Bize Ulaşın
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                İletişim Bilgilerimiz
              </h2>


              {/* Kartlar */}
              <div className="mt-9 grid gap-4 md:grid-cols-3">


                {/* ================= TELEFON ================= */}
                <div className="flex min-h-[310px] flex-col rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.14]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B1E2D]/25 text-xl text-[#FF737C]">
                    ☎
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    Telefon
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Bize doğrudan ulaşın
                  </p>

                  {/* TEK SATIR */}
                  <a
                    href={`tel:${company.phone}`}
                    className="mt-5 block whitespace-nowrap text-[13px] font-bold tracking-[-0.02em] text-[#FF9299] transition hover:text-white"
                  >
                    {company.phone}
                  </a>

                  <a
                    href={`tel:${company.phone}`}
                    className="mt-auto flex items-center justify-between rounded-xl border border-[#A63A45]/80 bg-[#8B1E2D]/10 px-4 py-3 text-xs font-bold text-[#F3C2C5] transition hover:bg-[#8B1E2D]/30"
                  >
                    HEMEN ARA
                    <span>→</span>
                  </a>

                </div>


                {/* ================= E-POSTA ================= */}
                <div className="flex min-h-[310px] flex-col rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.14]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B1E2D]/25 text-xl text-[#FF737C]">
                    ✉
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    E-posta
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Sorularınız için yazın
                  </p>

                  {/* TEK SATIR + TAŞMAYI ENGELLE */}
                  <a
                    href={`mailto:${company.email}`}
                    title={company.email}
                    className="mt-5 block whitespace-nowrap text-[11px] font-bold tracking-[-0.035em] text-[#FF9299] transition hover:text-white xl:text-[12px]"
                  >
                    {company.email}
                  </a>

                  <a
                    href={`mailto:${company.email}`}
                    className="mt-auto flex items-center justify-between rounded-xl border border-[#A63A45]/80 bg-[#8B1E2D]/10 px-4 py-3 text-xs font-bold text-[#F3C2C5] transition hover:bg-[#8B1E2D]/30"
                  >
                    E-POSTA GÖNDER
                    <span>→</span>
                  </a>

                </div>


                {/* ================= ADRES ================= */}
                <div className="flex min-h-[310px] flex-col rounded-3xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-white/25 hover:bg-white/[0.14]">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B1E2D]/25 text-lg text-[#FF737C]">
                    ●
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white">
                    Adres
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Ziyaret etmek isterseniz
                  </p>

                  <p className="mt-5 text-[13px] font-medium leading-6 text-slate-200">
                    {company.address}
                  </p>

                  <a
                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c38fee1646d92f:0x260d329cf6f47e98?sa=X&ved=1t:8290&ictx=111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto flex items-center justify-between rounded-xl border border-[#A63A45]/80 bg-[#8B1E2D]/10 px-4 py-3 text-xs font-bold text-[#F3C2C5] transition hover:bg-[#8B1E2D]/30"
                  >
                    HARİTADA GÖR
                    <span>→</span>
                  </a>

                </div>

              </div>


              {/* Alt bilgiler */}
              <div className="mt-10 grid gap-7 border-t border-white/10 pt-8 sm:grid-cols-3">

                <div>
                  <h4 className="font-bold text-white">
                    Ücretsiz Keşif
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Yerinde detaylı inceleme
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Hızlı Geri Dönüş
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Size en kısa sürede ulaşırız
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white">
                    Profesyonel Destek
                  </h4>

                  <p className="mt-2 text-sm text-slate-400">
                    Deneyimli ekibimizle yanınızdayız
                  </p>
                </div>

              </div>

            </div>


            {/* ==================================================
                SAĞ TARAF
            ================================================== */}
            <aside className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <Image src="/images/iletisim.png" alt="Karot Mimarlık hızlı iletişim" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover brightness-105 contrast-105 saturate-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[.2em] text-white/85">Hızlı iletişim</p>
              </div>
              <div className="flex min-h-[220px] flex-col p-6">
                <h2 className="text-2xl font-bold leading-tight text-white">Projenizi birlikte planlayalım.</h2>
                <p className="mt-3 leading-6 text-slate-300">Ücretsiz keşif talebiniz ve teknik sorularınız için dilediğiniz kanaldan bize ulaşabilirsiniz.</p>
                <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#8B1E2D] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#721724]"><span>☎</span> WhatsApp</a>
                  <a href="https://www.instagram.com/karot_mimarlik/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"><span>◎</span> Instagram</a>
                </div>
              </div>
            </aside>

          </div>

        </div>

      </section>

      <section className="bg-slate-100 px-6 py-20 text-slate-900 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div><p className="font-semibold uppercase tracking-[.2em] text-[#8B1E2D]">Keşif süreci</p><h2 className="mt-4 text-4xl font-bold leading-tight">Projenizi nasıl değerlendiriyoruz?</h2><p className="mt-5 text-lg leading-8 text-slate-600">İlk görüşmeden uygulama planına kadar, çatınızın mevcut koşullarını ve ihtiyaçlarını birlikte netleştiriyoruz.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["İlk görüşme", "Yerinde inceleme", "Sistem önerisi"].map((title, index) => <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><span className="text-sm font-bold text-[#8B1E2D]">0{index + 1}</span><h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{index === 0 ? "İhtiyacınızı ve beklentinizi dinleriz." : index === 1 ? "Çatıdaki kritik noktaları yerinde inceleriz." : "Uygun malzeme ve uygulama detaylarını paylaşırız."}</p></div>)}
          </div>
        </div>
      </section>

    </main>
  );
}
