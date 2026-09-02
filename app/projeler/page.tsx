import Image from "next/image";

const projects = [
  {
    title: "Ahşap Taşıyıcı Çatı Konstrüksiyonu",
    description:
      "Yeni yapı için hazırlanan ahşap taşıyıcı sistemin, çatı eğimi ve baca geçişleri dikkate alınarak oluşturulması.",
    image: "/images/proje11.jpg",
    category: "Yeni çatı yapımı",
    scope: "Taşıyıcı sistem",
  },
  {
    title: "Yalıtım Katmanları ve Kaplama Altı Sistem",
    description:
      "Su yalıtım örtüsü, ısı yalıtım levhası ve kaplama altı bileşenlerinin bir arada ele alındığı uygulama aşaması.",
    image: "/images/proje10.jpg",
    category: "Çatı izolasyonu",
    scope: "Sistem detayı",
  },
  {
    title: "Çatı Yenileme ve Lata Uygulaması",
    description:
      "Mevcut çatıda kaplama öncesi hazırlık, su yalıtım örtüsü ve lata yerleşiminin uygulandığı yenileme çalışması.",
    image: "/images/proje7.jpg",
    category: "Çatı yenileme",
    scope: "Uygulama aşaması",
  },
  {
    title: "Kiremitli Villa Çatısı",
    description:
      "Yapının mimari karakteriyle uyumlu, tamamlanmış kiremit kaplama ve çatı detayları.",
    image: "/images/proje8.jpg",
    category: "Kiremit uygulaması",
    scope: "Tamamlanmış proje",
  },
  {
    title: "Braas Kiremit Sistem Uygulaması",
    description:
      "Kiremit, mahya ve tamamlayıcı elemanların birlikte uygulandığı, detay odaklı çatı sistemi çözümü.",
    image: "/images/proje6.jpg",
    category: "Braas çatı sistemleri",
    scope: "Kaplama ve detay",
  },
];

const process = [
  ["Keşif ve ihtiyaç analizi", "Yapının mevcut durumu, çatı eğimi, taşıyıcı sistem ve su tahliye detayları sahada değerlendirilir."],
  ["Sistem ve malzeme seçimi", "Projenin teknik gereksinimlerine uygun kaplama, yalıtım ve detay bileşenleri birlikte planlanır."],
  ["Uygulama ve kalite kontrol", "Uygulama aşamaları takip edilir; kritik birleşim ve sabitleme noktaları teslim öncesi kontrol edilir."],
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-28 pt-40">
        <Image src="/images/projects-hero.png" alt="Karot Mimarlık proje görseli" fill priority className="object-cover brightness-150 saturate-75" />
        <div className="absolute inset-0 bg-slate-700/30" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#8B1E2D]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#B52A3A]">
              Projelerimiz
            </p>

            <h1 data-i18n-rich="projects-hero" className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
              Gerçek projeler,
              <br />
              gerçek çatı çözümleri.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              Antalya ve çevre illerde, farklı yapı tipleri için gerçekleştirdiğimiz
              çatı uygulamalarından seçilmiş saha örnekleri.
            </p>
        </div>
      </section>

      {/* PROJELER */}
      <section className="bg-white px-6 py-28 text-slate-900">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
              Çalışmalarımız
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Uygulama portföyümüz
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Her çalışmada; yapının teknik ihtiyacına, çatı eğimine ve uygulama
              detaylarına göre şekillenen farklı çözüm aşamalarını görebilirsiniz.
            </p>
          </div>

          {/* Proje galerisi */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8B1E2D]/30 hover:shadow-xl ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >

                {/* Fotoğraf */}
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "h-[460px]" : "h-80"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Fotoğraf overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  {/* Proje adı */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#D66A76]">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Açıklama */}
                <div className="p-7">
                  <p className="leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-5 text-sm">
                    <span className="font-semibold text-[#8B1E2D]">{project.scope}</span>
                    <span className="font-semibold text-slate-500 transition group-hover:text-[#721724]">Saha uygulaması ↗</span>
                  </div>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-900 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="font-semibold uppercase tracking-[.2em] text-[#8B1E2D]">Uygulama metodumuz</p><h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Her proje, doğru teknik kararlarla şekillenir.</h2><p className="mt-6 text-lg leading-8 text-slate-600">Portföyde yer alan her uygulamanın arkasında; saha incelemesi, uygun sistem bileşenlerinin seçimi ve kritik detayların kontrolü bulunur.</p></div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {process.map(([title, text], index) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"><span className="text-sm font-bold text-[#8B1E2D]">0{index + 1}</span><h3 className="mt-7 text-xl font-bold">{title}</h3><p className="mt-4 leading-7 text-slate-600">{text}</p></article>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 px-6 py-28 text-slate-900">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
            Projeniz için ilk adım
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Çatı projenizi birlikte değerlendirelim.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Yapınızın ihtiyaçlarını görüşmek ve ücretsiz keşif talebinizi iletmek
            için bizimle iletişime geçebilirsiniz.
          </p>

          <a
            href="https://wa.me/905313020479"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#721724]"
          >
            Ücretsiz Keşif
          </a>

        </div>
      </section>

    </main>
  );
}
