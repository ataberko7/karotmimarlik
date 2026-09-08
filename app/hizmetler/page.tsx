import Image from "next/image";
import company from "@/data/company";

const services = [
  {
    title: "Braas Çatı Sistemleri",
    description:
      "Braas yetkili bayisi olarak, kaplama ve tamamlayıcı bileşenleri birbiriyle uyumlu sistem yaklaşımıyla uyguluyoruz.",
    image: "/images/proje 5.jpg",
    details: ["Kiremit model ve renk seçimi", "Mahya ve kenar detayları", "Sistem bileşenlerinin uyumu"],
  },
  {
    title: "Çatı Yapımı",
    description:
      "Yeni yapılarda taşıyıcı sistemden kaplama katmanına kadar, projeye uygun çatı uygulamaları gerçekleştiriyoruz.",
    image: "/images/proje11.jpg",
    details: ["Yeni yapı çatısı", "Taşıyıcı sisteme uygun çözüm", "Uygulama planlaması"],
  },
  {
    title: "Çatı Yenileme",
    description:
      "Mevcut çatılarda ihtiyaç analizi yapıyor; yıpranan katmanları ve kritik detayları uygun uygulama planıyla yeniliyoruz.",
    image: "/images/proje7.jpg",
    details: ["Hasar ve sızıntı tespiti", "Yıpranan katmanların yenilenmesi", "Detay noktalarının iyileştirilmesi"],
  },
  {
    title: "Çatı İzolasyonu",
    description:
      "Su ve ısı yalıtımı katmanlarını; nem, yoğuşma ve ısı kaybı risklerini dikkate alarak planlıyoruz.",
    image: "/images/roof-insulation-detail.png",
    details: ["Nefes alan su yalıtımı", "Isı kaybını azaltan katmanlar", "Yoğuşma riskine karşı planlama"],
  },
  {
    title: "Kiremit Çatı Uygulamaları",
    description:
      "Yapının mimari karakterine ve çatı eğimine uygun kiremit uygulamalarını, tamamlayıcı detaylarla birlikte gerçekleştiriyoruz.",
    image: "/images/proje8.jpg",
    details: ["Model ve doku seçimi", "Mahya, dere ve saçak detayları", "Estetik ile dayanıklılık dengesi"],
  },
  {
    title: "Çelik Çatı Konstrüksiyonu",
    description:
      "Yapının statik gereksinimleri doğrultusunda; çelik taşıyıcı sistem, aşık yerleşimi ve bağlantı detaylarını uygulama sürecine uygun biçimde planlıyoruz.",
    image: "/images/steel-roof-construction-v2.png",
    imagePosition: "center 50%",
    details: ["Çelik taşıyıcı sistem kurulumu", "Aşık ve bağlantı detayları", "Kaplama sistemine uygun hazırlık"],
  },
  {
    title: "Profesyonel Çatı Çözümleri",
    description:
      "Antalya ve çevre illerde, yapınızın mevcut durumu ve kullanım gereksinimlerine göre çatı çözümleri geliştiriyoruz.",
    image: "/images/proje6.jpg",
    details: ["Ücretsiz ilk değerlendirme", "Proje özelinde sistem önerisi", "Saha uygulama takibi"],
  },
];

const systemSteps = [
  { number: "01", title: "Kaplama", text: "Kiremit modeli; çatının eğimi, mimari dili ve iklim koşulları dikkate alınarak belirlenir." },
  { number: "02", title: "Su ve Isı Yalıtımı", text: "Çatı altı katmanları, yoğuşma ve dış etken kaynaklı nem riskine karşı sistemin sürekliliğini destekler." },
  { number: "03", title: "Mahya ve Detaylar", text: "Baca dibi, mahya, dere ve kenar birleşimleri; uzun ömürlü bir çatının en kritik noktalarıdır." },
  { number: "04", title: "Yağmur Suyu Yönetimi", text: "Oluk ve indirme elemanları, suyun yapıdan kontrollü biçimde uzaklaştırılmasına yardımcı olur." },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative min-h-[640px] overflow-hidden px-6 pb-28 pt-40">
        <Image src="/images/services-system-hero.png" alt="Çatı sistem katmanları" fill priority className="object-cover brightness-150 saturate-75" />
        <div className="absolute inset-0 bg-slate-700/30" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#8B1E2D]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">

          {/* Sol */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-[#B52A3A]">
              Hizmetlerimiz
            </p>

            <h1 data-i18n-rich="services-hero" className="mt-6 max-w-3xl text-5xl font-bold leading-tight md:text-6xl">
              İhtiyacınıza uygun
              <br />
              profesyonel
              <br />
              çatı çözümleri.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Antalya ve çevre illerde; yeni çatı, yenileme ve yalıtım uygulamalarını
              yapınızın mimari ve teknik gereksinimlerine göre planlıyor, sahada uyguluyoruz.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B1E2D] text-sm font-bold">
                ✓
              </span>

              <span className="text-sm font-semibold text-slate-200">
                Braas Yetkili Bayisi
              </span>
            </div>
          </div>

          {/* Sağ görsel */}
          <div className="rounded-3xl border border-white/20 bg-slate-100/[.05] p-8 shadow-2xl shadow-black/10 backdrop-blur-md md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8B1E2D]/80 text-2xl font-bold text-white">✓</div>
            <p className="mt-7 text-xs font-semibold uppercase tracking-[.2em] text-[#D46A76]">Sistem odaklı uygulama</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Çatının her katmanı için doğru çözüm.</h2>
            <p className="mt-4 leading-7 text-slate-200">Kaplama, yalıtım, mahya detayları ve yağmur suyu yönetimini aynı uygulama planı içinde değerlendiriyoruz.</p>
          </div>

        </div>
      </section>

      {/* HİZMETLER */}
      <section className="bg-white px-6 py-28 text-slate-900">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
              Çalışma Alanlarımız
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Size sunduğumuz hizmetler
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Yapının mevcut durumu, mimari beklentileri ve iklim koşullarına göre
              uygun sistemi belirliyor; uygulama sürecini planlı biçimde yönetiyoruz.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#8B1E2D]/30 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectPosition: service.imagePosition ?? "center" }}
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
                    {service.details.map((detail) => <li key={detail} className="flex gap-2"><span className="font-bold text-[#8B1E2D]">•</span>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-slate-100 px-6 py-24 text-slate-900 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-semibold uppercase tracking-[.2em] text-[#8B1E2D]">Sistem yaklaşımımız</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">İyi bir çatı, sadece kiremitten oluşmaz.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">Eğimli çatılarda performans; kaplama, yalıtım, havalandırma, sabitleme ve su tahliyesi detaylarının birlikte tasarlanmasına bağlıdır. Uygulama kararlarımızı bu bütünlükle oluşturuyoruz.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {systemSteps.map((step) => <article key={step.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-[#8B1E2D]">{step.number}</span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-100 px-6 py-28 text-slate-900">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
            Projenizi Konuşalım
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Çatınız için uygun sistemi birlikte planlayalım.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Projeniz için ön değerlendirme ve ücretsiz keşif talebi oluşturmak üzere
            bizimle iletişime geçebilirsiniz.
          </p>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#8B1E2D] px-8 py-4 font-semibold text-white transition hover:bg-[#721724]"
          >
            WhatsApp&apos;tan İletişime Geç
          </a>

        </div>
      </section>

    </main>
  );
}
