import company from "@/data/company";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Başlık */}
      <section className="px-6 pb-16 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Hakkımızda
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Antalya'da yıllara dayanan
            <br />
            çatı tecrübesi.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {company.name}, {company.founded} yılından bu yana Antalya ve
            çevre illerde çatı yapımı, yenileme ve profesyonel çatı
            uygulamaları alanında hizmet vermektedir.
          </p>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="bg-white px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
                Hikayemiz
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Güvenilir işçilik,
                <br />
                uzun ömürlü çözümler.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                {company.name}, {company.founder} öncülüğünde uzun yıllara
                dayanan sektör tecrübesiyle müşterilerine güvenilir çatı
                çözümleri sunmaktadır.
              </p>

              <p>
                Çatı yapımı ve yenileme süreçlerinde doğru ürün seçimi,
                kaliteli işçilik ve profesyonel uygulamayı bir arada sunmayı
                hedefliyoruz.
              </p>

              <p>
                Antalya başta olmak üzere çevre illerde gerçekleştirdiğimiz
                çalışmalarla, her projeye ihtiyaca özel ve uzun ömürlü
                çözümler üretmeye odaklanıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerler */}
      <section className="bg-slate-100 px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Neden Biz?
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Projenizde güvenebileceğiniz bir çözüm ortağı.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">{company.experience}</h3>

              <p className="mt-4 text-slate-600">
                Yıllara dayanan sektör deneyimimizi her projemize
                yansıtıyoruz.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Braas Yetkili Bayisi
              </h3>

              <p className="mt-4 text-slate-600">
                Kaliteli ve güvenilir çatı sistemleriyle profesyonel
                uygulama hizmeti sunuyoruz.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold">
                Antalya ve Çevre İller
              </h3>

              <p className="mt-4 text-slate-600">
                Antalya başta olmak üzere çevre illerde çatı uygulamaları
                gerçekleştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}