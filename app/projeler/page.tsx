import Image from "next/image";

const projects = [
  {
    title: "Çatı Uygulaması",
    description:
      "Profesyonel ekip ve kaliteli malzemelerle gerçekleştirilen çatı uygulaması.",
    image: "/images/proje 1.jpg",
  },
  {
    title: "Çatı Yenileme",
    description:
      "Mevcut çatının yenilenmesi ve uzun ömürlü yeni bir çatı sisteminin uygulanması.",
    image: "/images/proje 2.jpg",
  },
  {
    title: "Çatı İzolasyonu",
    description:
      "Su ve ısı yalıtımı uygulamalarıyla çatının dış etkenlere karşı korunması.",
    image: "/images/proje 3.jpg",
  },
  {
    title: "Villa Çatı Uygulaması",
    description:
      "Villa projelerine özel estetik ve dayanıklı çatı çözümleri.",
    image: "/images/proje 4.jpg",
  },
  {
    title: "Kiremit Çatı Sistemi",
    description:
      "Estetik görünümü ve dayanıklılığı bir araya getiren profesyonel çatı uygulaması.",
    image: "/images/proje 5.jpg",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 pb-20 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.2em] text-orange-500">
            Projelerimiz
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Gerçek projeler,
            <br />
            gerçek çatı çözümleri.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Antalya ve çevre illerde gerçekleştirdiğimiz çatı
            uygulamalarından örnekler.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl bg-slate-100"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-2xl font-bold">
                    {project.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}