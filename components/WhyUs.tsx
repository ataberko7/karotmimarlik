export default function WhyUs() {
  const features = [
    {
      title: "Braas Yetkili Bayisi",
      eyebrow: "Sistem uyumu",
      description: "Braas çatı sistemlerini yalnızca kaplama malzemesi olarak değil; havalandırma, mahya ve tamamlayıcı bileşenleriyle bir bütün olarak ele alıyoruz.",
      detail: "Yapının eğimi, mimari karakteri ve kullanım koşullarına uygun sistem bileşenlerini birlikte belirliyoruz.",
    },
    {
      title: "Garantili İşçilik",
      eyebrow: "Doğru uygulama",
      description: "Çatının dayanımı, malzeme kadar birleşim noktalarındaki işçiliğe de bağlıdır. Mahya, baca dibi, dere ve saçak detaylarını titizlikle ele alıyoruz.",
      detail: "Uygulama sürecinde estetik beklentiler ile iklim koşullarına karşı performansı birlikte gözetiyoruz.",
    },
    {
      title: "Ücretsiz Keşif",
      eyebrow: "Yerinde değerlendirme",
      description: "Uygulamaya başlamadan önce mevcut çatıyı yerinde inceliyor; su alma, ısı kaybı, taşıyıcı sistem ve yenileme ihtiyacını netleştiriyoruz.",
      detail: "Bu değerlendirme, gereksiz müdahaleler yerine yapınıza uygun çözüm kapsamının belirlenmesini sağlar.",
    },
    {
      title: "Antalya ve Çevre İller",
      eyebrow: "Bölgesel tecrübe",
      description: "Antalya'nın yoğun güneş, ani yağış ve rüzgar koşullarını dikkate alarak çatı katmanlarını ve uygulama detaylarını planlıyoruz.",
      detail: "Antalya merkez ve çevre illerde yeni çatı, yenileme, izolasyon ve bakım ihtiyaçları için sahada hizmet veriyoruz.",
    },
  ];

  return (
    <section className="bg-slate-100 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="font-semibold uppercase tracking-[.2em] text-[#8B1E2D]">Karot Mimarlık farkı</p>
          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Çatınızı, birbiriyle uyum içinde çalışan bir sistem olarak planlıyoruz.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Malzeme seçimi, uygulama kalitesi ve iklim koşullarına uygun detaylar; çatı sisteminin performansını birlikte belirler.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/70 bg-white/55 p-8 shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#8B1E2D]">{item.eyebrow}</p>
              <h3 className="text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
              <p className="mt-5 border-t border-slate-200/80 pt-5 text-sm leading-6 text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
