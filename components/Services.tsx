import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Braas Çatı Sistemleri",
    description:
      "Braas yetkili bayisi olarak kaliteli ve uzun ömürlü çatı sistemleri sunuyoruz.",
    image: "/images/proje 1.jpg",
  },
  {
    title: "Çatı Yenileme",
    description:
      "Eski çatıların sökülmesi, yenilenmesi ve modern sistemlerle yeniden uygulanması.",
    image: "/images/proje 2.jpg",
  },
  {
    title: "Çatı İzolasyonu",
    description:
      "Su ve ısı yalıtımı çözümleri ile çatınızı dört mevsim koruyoruz.",
    image: "/images/proje 3.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Başlık */}
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Hizmetlerimiz
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Profesyonel çatı çözümleri
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Antalya ve çevre illerde sunduğumuz profesyonel çatı çözümleri.
          </p>
        </div>

        {/* Hizmet kartları */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Fotoğraf */}
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* İçerik */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/hizmetler"
                  className="mt-6 inline-block font-semibold text-orange-500 transition hover:text-orange-600"
                >
                  Detaylı Bilgi →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}