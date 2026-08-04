export default function WhyUs() {
  const features = [
    {
      title: "Braas Yetkili Bayisi",
      description: "Orijinal Braas ürünleri ve profesyonel uygulama hizmeti.",
    },
    {
      title: "Garantili İşçilik",
      description: "Kaliteli işçilik ve uzun ömürlü çatı çözümleri.",
    },
    {
      title: "Ücretsiz Keşif",
      description: "Yerinde keşif yaparak ihtiyacınıza en uygun çözümü sunuyoruz.",
    },
    {
      title: "Antalya ve Çevre İller",
      description: "Antalya başta olmak üzere çevre illerde hizmet veriyoruz.",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-slate-900">
          Neden Karot Mimarlık?
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}