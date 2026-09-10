import Image from "next/image";
import Link from "next/link";
import company from "@/data/company";

const serviceLinks = [
  { label: "Braas Çatı Sistemleri", detail: "Bütünleşik kaplama ve detay çözümleri" },
  { label: "Yeni Çatı Yapımı", detail: "Taşıyıcı sistemden son katmana uygulama" },
  { label: "Çatı Yenileme", detail: "Mevcut çatılar için onarım ve dönüşüm" },
  { label: "Su ve Isı Yalıtımı", detail: "Nem, yoğuşma ve ısı kaybına karşı katmanlar" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2f3b4f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(148,163,184,.28),transparent_35%),radial-gradient(circle_at_95%_100%,rgba(139,30,45,.22),transparent_38%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr_.9fr]">

          {/* Firma Bilgileri */}
          <div>
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={180}
              height={70}
              className="brand-logo-readable h-auto w-40 object-contain"
            />

            <p className="mt-5 max-w-sm leading-7 text-slate-300">
              2007&apos;den bu yana Antalya ve çevre illerde, yapıların ihtiyaçlarına özel çatı,
              yenileme ve yalıtım çözümlerini teknik uzmanlıkla uyguluyoruz.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[.14em] text-slate-300">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Braas Yetkili Bayisi</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-2">Ücretsiz Keşif</span>
            </div>

          </div>

          {/* Hizmetler */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D46A76]">Çalışma alanları</p>
            <h3 className="mt-3 text-2xl font-semibold">Hizmetlerimiz</h3>

            <ul className="mt-6 space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link href="/hizmetler" className="group block">
                    <span className="font-medium text-slate-100 transition group-hover:text-[#D46A76]">{service.label} <span aria-hidden="true">↗</span></span>
                    <span className="mt-1 block text-sm leading-5 text-slate-400">{service.detail}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#D46A76]">İletişim ve keşif</p>
            <h3 className="mt-3 text-2xl font-semibold">Projenizi birlikte değerlendirelim.</h3>

            <p className="mt-4 max-w-sm leading-7 text-slate-300">
              İlk görüşmede ihtiyaçlarınızı dinliyor, yerinde keşif sonrasında çatınız için uygulanabilir sistem alternatiflerini paylaşıyoruz.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 transition hover:text-white"><span className="mt-0.5 text-[#D46A76]">01</span><span><b className="block text-slate-100">Telefon</b>{company.phone}</span></a>
              <a href={`mailto:${company.email}`} className="flex items-start gap-3 transition hover:text-white"><span className="mt-0.5 text-[#D46A76]">02</span><span><b className="block text-slate-100">E-posta</b>{company.email}</span></a>
              <div className="flex items-start gap-3"><span className="mt-0.5 text-[#D46A76]">03</span><span><b className="block text-slate-100">Hizmet bölgesi</b>Antalya ve çevre iller</span></div>
            </div>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-[#8B1E2D] px-6 py-3 font-semibold transition hover:bg-[#721724]"
            >
              WhatsApp&apos;tan Yaz
            </a>
          </div>

        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-center text-sm text-slate-300 md:flex-row md:items-center md:justify-between md:text-left">
          <span>© {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.</span>
          <span className="flex flex-wrap items-center justify-center gap-3 md:justify-end"><span>Antalya&apos;da çatı sistemleri · Yenileme · Yalıtım</span><Link href="/gizlilik" className="text-[#f0b1bb] underline underline-offset-4 hover:text-white">Gizlilik ve KVKK</Link></span>
        </div>
        <p className="mt-4 max-w-4xl text-center text-xs leading-5 text-slate-300/80 md:text-left">
          Bu sitede yer alan metin, görsel, tasarım, marka ve diğer içerikler Karot Mimarlık&apos;a veya ilgili hak sahiplerine aittir. Yazılı izin olmaksızın kopyalanamaz, çoğaltılamaz ya da ticari amaçla kullanılamaz.
        </p>

      </div>
    </footer>
  );
}
