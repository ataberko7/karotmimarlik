import company from "@/data/company";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Başlık */}
      <section className="px-6 pb-16 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            İletişim
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Projenizi
            <br />
            birlikte konuşalım.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Çatı yapımı, yenileme veya izolasyon projeniz için bizimle
            iletişime geçebilir, ücretsiz keşif ve bilgi alabilirsiniz.
          </p>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="bg-white px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Telefon */}
            <div className="rounded-3xl bg-slate-100 p-8">
              <div className="text-3xl">📞</div>

              <h2 className="mt-6 text-2xl font-bold">
                Telefon
              </h2>

              <p className="mt-3 text-slate-600">
                Bize doğrudan ulaşabilirsiniz.
              </p>

              <a
                href={`tel:${company.phone}`}
                className="mt-6 inline-block font-semibold text-orange-500 hover:text-orange-600"
              >
                {company.phone}
              </a>
            </div>

            {/* E-posta */}
            <div className="rounded-3xl bg-slate-100 p-8">
              <div className="text-3xl">✉️</div>

              <h2 className="mt-6 text-2xl font-bold">
                E-posta
              </h2>

              <p className="mt-3 text-slate-600">
                Sorularınız ve projeleriniz için bize yazabilirsiniz.
              </p>

              <a
                href={`mailto:${company.email}`}
                className="mt-6 inline-block break-all font-semibold text-orange-500 hover:text-orange-600"
              >
                {company.email}
              </a>
            </div>

            {/* Adres */}
            <div className="rounded-3xl bg-slate-100 p-8">
              <div className="text-3xl">📍</div>

              <h2 className="mt-6 text-2xl font-bold">
                Adres
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {company.address}
              </p>

              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x14c38fee1646d92f:0x260d329cf6f47e98?sa=X&ved=1t:8290&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-orange-500 hover:text-orange-600"
              >
                Google Maps'te Gör →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="bg-slate-100 px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-950 p-10 text-center md:p-16">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Hızlı İletişim
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Ücretsiz keşif için bize ulaşın.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Projeniz hakkında bilgi almak ve ücretsiz keşif talebinde
            bulunmak için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>

          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </section>
    </main>
  );
}