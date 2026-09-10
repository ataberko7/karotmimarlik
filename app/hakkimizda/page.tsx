import Image from "next/image";
import Link from "next/link";
import company from "@/data/company";
import PrinciplesStrip from "@/components/PrinciplesStrip";

export const metadata = { title: "Hakkımızda | Karot Mimarlık", description: "Karot Mimarlık’ın Antalya ve çevre illerdeki çatı uygulama deneyimi ve çalışma yaklaşımı." };

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <Image src="/images/about-hero.png" alt="Karot Mimarlık uzmanlık ve uygulama yaklaşımı" fill priority className="object-cover brightness-150 saturate-75" />
        <div className="absolute inset-0 bg-slate-700/30" />
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#8B1E2D]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">

            {/* Sol */}
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#D46A76]">
                Hakkımızda
              </p>

              <h1 data-i18n-rich="about-hero" className="mt-5 max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-7xl">
                Çatı konusunda
                <br />
                <span className="text-[#D46A76]">
                  uzmanlığımız.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">
                {company.name} olarak {company.founded} yılından bu yana Antalya
                ve çevre illerde yeni çatı, yenileme ve yalıtım uygulamalarını;
                yapının ihtiyaçlarını, iklim koşullarını ve mimari hedeflerini
                birlikte değerlendirerek yürütüyoruz. Her projede güvenilir
                malzeme, doğru detay ve ölçülebilir işçilik kalitesini bir arada
                sunmayı hedefliyoruz.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="rounded-full bg-[#8B1E2D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#721724]"
                >
                  Bizimle İletişime Geç →
                </Link>

                <Link
                  href="/projeler"
                  className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white hover:text-slate-900"
                >
                  Projelerimizi Gör
                </Link>
              </div>
            </div>

            {/* Arka planı kapatmayan saydam uzmanlık özeti */}
            <div className="rounded-3xl border border-white/20 bg-slate-100/[.05] p-7 shadow-2xl shadow-black/10 backdrop-blur-md md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#D46A76]">Karot Mimarlık yaklaşımı</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight">Doğru detay, uzun ömürlü sonuç.</h2>
              <p className="mt-4 max-w-md leading-7 text-slate-200">Her uygulamada çatıyı yalnızca bir kaplama olarak değil; taşıyıcı sistem, yalıtım, su tahliyesi ve bitiş detaylarıyla birlikte değerlendiriyoruz.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-slate-950/10 p-4"><p className="text-2xl font-bold text-white">{company.experience}</p><p className="mt-1 text-xs leading-5 text-slate-300">Sektör deneyimi</p></div>
                <div className="rounded-2xl border border-white/15 bg-slate-950/10 p-4"><p className="text-2xl font-bold text-white">30 YIL</p><p className="mt-1 text-xs leading-5 text-slate-300">Ürün özellikleri garantisi*</p></div>
                <div className="rounded-2xl border border-white/15 bg-slate-950/10 p-4"><p className="text-2xl font-bold text-white">ANTALYA</p><p className="mt-1 text-xs leading-5 text-slate-300">ve çevre illerde hizmet</p></div>
              </div>
              <p className="mt-5 text-xs text-slate-300">*Uygun Braas ürün grupları için geçerli ürün özellikleri garantisi.</p>
            </div>

          </div>
        </div>
      </section>

      {/* HİKAYEMİZ */}
      <section className="border-y border-slate-200 bg-slate-50 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Metin */}
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
                Hikayemiz
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight md:text-5xl">
                Güvenilir işçilik,
                <br />
                uzun ömürlü çözümler.
              </h2>

              <div className="mt-7 max-w-xl space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  {company.name}, {company.founder} öncülüğünde edinilen sektör
                  deneyimini; yeni yapılar, yenileme çalışmaları ve yalıtım
                  uygulamalarında teknik bir bakış açısıyla kullanmaktadır.
                </p>

                <p>
                  Her projede; ürün seçimi, uygulama yöntemi ve kritik birleşim
                  detaylarını yapının koşullarına göre birlikte planlıyoruz.
                </p>

                <p>
                  Antalya ve çevre illerde gerçekleştirdiğimiz çalışmalarda,
                  mimari beklenti ile iklim koşullarını dengeli biçimde
                  değerlendirmeye odaklanıyoruz.
                </p>
              </div>
            </div>

            {/* Sağ bilgi kartları */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B1E2D]/10 text-xl text-[#8B1E2D]">
                  ✓
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Kaliteli İşçilik
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Kritik birleşim noktalarını sistem bütünlüğü içinde ele alan
                  uygulama yaklaşımı.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B1E2D]/10 text-xl text-[#8B1E2D]">
                  ◆
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Doğru Malzeme
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Yapı tipine, çatı eğimine ve uygulama ihtiyacına uygun sistem
                  bileşenleri.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B1E2D]/10 text-xl text-[#8B1E2D]">
                  ★
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Güvenilir Hizmet
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  İlk değerlendirmeden uygulama sonrasına uzanan açık ve düzenli
                  iletişim.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#8B1E2D]/10 text-xl text-[#8B1E2D]">
                  +
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  Uzun Ömürlü
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Uygulama detaylarını, çatının kullanım sürecindeki performansını
                  gözeterek planlıyoruz.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BRAAS */}
      <section className="bg-white px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid overflow-hidden rounded-3xl bg-slate-900 lg:grid-cols-2">

            {/* Sol */}
            <div className="p-10 md:p-14 lg:p-16">
              <p className="font-semibold uppercase tracking-[0.2em] text-[#D7A1AA]">
                Yetkili Bayi
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                Braas Çatı Sistemleri
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Braas sistem bileşenlerini; yapı, iklim ve uygulama detaylarıyla
                uyumlu bir bütün olarak değerlendiriyoruz.
              </p>

              <div className="mt-8 inline-flex rounded-2xl bg-white p-2.5 shadow-lg shadow-black/20">
                <Image
                  src="/images/braas.png"
                  alt="Braas Çatı Sistemleri"
                  width={1082}
                  height={1082}
                  className="h-20 w-20 rounded-xl object-cover"
                />
              </div>

              <div className="mt-9">
                <Link
                  href="/hizmetler"
                  className="inline-flex rounded-full bg-[#8B1E2D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#721724]"
                >
                  Hizmetlerimizi İncele →
                </Link>
              </div>
            </div>

            {/* Çözüm ortaklığı ödülü */}
            <div className="relative min-h-[360px] overflow-hidden bg-slate-950 lg:min-h-full">
              <Image
                src="/images/braas-solution-partner-award-designed.png"
                alt="Karot Mimarlık Braas 20 yıllık çözüm ortaklığı ödülü"
                fill
                className="scale-125 object-cover opacity-25 blur-xl"
              />
              <div className="absolute inset-0 bg-slate-950/55" />
              <Image
                src="/images/braas-solution-partner-award-designed.png"
                alt="Karot Mimarlık Braas 20 yıllık çözüm ortaklığı ödülü"
                fill
                className="award-float object-contain p-5 brightness-110 contrast-110 saturate-[.82] md:p-8"
              />
              <div className="award-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-7 bottom-6 h-px bg-gradient-to-r from-transparent via-[#d8a16d]/80 to-transparent" />
            </div>

          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="bg-slate-50 px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]">
              Neden Biz?
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Projenizde güvenebileceğiniz
              <br />
              bir çözüm ortağı.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
              <p className="text-4xl font-bold text-[#8B1E2D]">
                {company.experience}
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Deneyim
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sektör deneyimimizi, her projenin teknik gereksinimlerine göre
                şekillenen uygulama kararlarına yansıtıyoruz.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
              <p className="text-4xl font-bold text-[#8B1E2D]">
                BRAAS
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Yetkili Bayi
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Uyumlu sistem bileşenleri ve detay odaklı saha uygulaması
                gerçekleştiriyoruz.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 ring-1 ring-slate-200">
              <p className="text-4xl font-bold text-[#8B1E2D]">
                ANTALYA
              </p>

              <h3 className="mt-5 text-xl font-bold">
                Bölgesel Hizmet
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Antalya ve çevre illerde yeni çatı, yenileme ve yalıtım
                uygulamaları yürütüyoruz.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl bg-[#8B1E2D] px-8 py-14 text-center md:px-16">
            <p className="font-semibold uppercase tracking-[0.2em] text-white/70">
              Karot Mimarlık
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
              Çatınız için uygun sistemi birlikte planlayalım.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Projeniz için ön değerlendirme ve ücretsiz keşif talebi oluşturmak
              üzere bizimle iletişime geçebilirsiniz.
            </p>

            <div className="mt-8">
              <Link
                href="/iletisim"
                className="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-[#8B1E2D] transition hover:bg-slate-100"
              >
                İletişime Geç →
              </Link>
            </div>
          </div>

        </div>
      </section>

      <PrinciplesStrip message="Deneyim · Güvenilir işçilik · Uzun ömürlü çözümler" />
    </main>
  );
}
