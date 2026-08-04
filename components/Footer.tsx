import company from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Firma Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold">{company.name}</h2>

            <p className="mt-4 text-slate-400">
  {company.founded} yılından bu yana Antalya ve çevre illerde profesyonel çatı
  çözümleri sunuyoruz.
</p>

            <div className="mt-6 space-y-2 text-slate-300">
              <p>📞 {company.phone}</p>
              <p>📧 {company.email}</p>
              <p>📍 {company.address}</p>
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xl font-semibold">Hizmetlerimiz</h3>

            <ul className="mt-4 space-y-2 text-slate-400">
              {company.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xl font-semibold">Bize Ulaşın</h3>

            <p className="mt-4 text-slate-400">
              Çatı projeleriniz için ücretsiz keşif ve teklif almak üzere bizimle
              iletişime geçebilirsiniz.
            </p>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-orange-500 px-6 py-3 font-semibold transition hover:bg-orange-600"
            >
              WhatsApp'tan Yaz
            </a>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {company.name}. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
}