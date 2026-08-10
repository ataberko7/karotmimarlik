import Image from "next/image";
import company from "@/data/company";

const services = [
  {
    title: "Braas Çatı Sistemleri",
    description:
      "Braas yetkili bayisi olarak kaliteli, dayanıklı ve uzun ömürlü çatı sistemleri sunuyoruz.",
    image: "/images/proje 1.jpg",
  },
  {
    title: "Çatı Yapımı",
    description:
      "Yeni yapılarda projeye ve yapının özelliklerine uygun profesyonel çatı uygulamaları gerçekleştiriyoruz.",
    image: "/images/proje 2.jpg",
  },
  {
    title: "Çatı Yenileme",
    description:
      "Eski ve yıpranmış çatıları yeniliyor, modern sistemlerle yeniden uyguluyoruz.",
    image: "/images/proje 3.jpg",
  },
  {
    title: "Çatı İzolasyonu",
    description:
      "Su ve ısı yalıtımı uygulamalarıyla çatınızı dış etkenlere karşı koruyoruz.",
    image: "/images/proje 4.jpg",
  },
  {
    title: "Kiremit Çatı Uygulamaları",
    description:
      "Estetik görünüm ve dayanıklılığı bir araya getiren profesyonel kiremit çatı uygulamaları.",
    image: "/images/proje 5.jpg",
  },
  {
    title: "Profesyonel Çatı Çözümleri",
    description:
      "Antalya ve çevre illerde yapınıza ve ihtiyacınıza uygun çatı çözümleri sunuyoruz.",
    image: "/images/proje 1.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Üst bölüm */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          {/* Sol */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
              Hizmetlerimiz
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              İhtiyacınıza uygun
              <br />
              profesyonel çatı çözümleri.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              {company.name} olarak Antalya ve çevre illerde çatı yapımı,
              yenileme, izolasyon ve profesyonel çatı uygulamaları
              gerçekleştiriyoruz.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-bold">
                ✓
              </span>

              <span className="text-sm font-semibold text-slate-200">
                Braas Yetkili Bayisi
              </span>
            </div>
          </div>

          {/* Sağ - Görsel */}
          <div className="relative">
            <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src="/images/proje 3.jpg"
                alt="Karot Mimarlık çatı uygulaması"
                fill
                className="object-cover"
              />

<div className="absolute inset-0 bg-slate-950/30" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                  Karot Mimarlık
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Profesyonel Çatı Uygulamaları
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-widest text-orange-500">
                Yetkili Bayi
              </p>

              <p className="mt-1 font-bold text-white">
                BRAAS
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Hizmetler */}
      <section className="bg-white px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl">

          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Çalışma Alanlarımız
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Size sunduğumuz hizmetler
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Projenizi Konuşalım
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Çatınız için doğru çözümü birlikte bulalım.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Ücretsiz keşif ve bilgi almak için bizimle iletişime
            geçebilirsiniz.
          </p>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            WhatsApp&apos;tan İletişime Geç
          </a>

        </div>
      </section>

    </main>
  );
}