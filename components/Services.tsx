export default function Services() {
  const services = [
    {
      title: "Braas Çatı Sistemleri",
      description:
        "Braas yetkili bayisi olarak kaliteli ve uzun ömürlü çatı sistemleri sunuyoruz.",
    },
    {
      title: "Çatı Yenileme",
      description:
        "Eski çatıların sökülmesi, yenilenmesi ve modern sistemlerle yeniden uygulanması.",
    },
    {
      title: "Çatı İzolasyonu",
      description:
        "Su ve ısı yalıtımı çözümleri ile çatınızı dört mevsim koruyoruz.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Hizmetlerimiz
        </h2>

        <p className="mt-4 max-w-2xl text-slate-600">
          Antalya ve çevre illerde sunduğumuz profesyonel çatı çözümleri.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}