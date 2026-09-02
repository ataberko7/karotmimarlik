import Image from "next/image";

const sourceUrl = "https://www.bmigroup.com/tr/dokuman-kaynaklar/";

const catalogs = [
  { number: "01", title: "Ürünler ve Çözümler", description: "Eğimli çatı sistemini oluşturan ürünler, uygulama örnekleri ve tamamlayıcı detaylar." },
  { number: "02", title: "Fotovoltaik Güneş Enerji Sistemleri", description: "Çatıya entegre güneş enerjisi çözümlerine ilişkin ürün ve uygulama dokümanları." },
  { number: "03", title: "Rüzgar Klipsleri", description: "Rüzgar yüklerine karşı sabitleme elemanları ve uygulama prensipleri." },
  { number: "04", title: "Braas Kiremit", description: "Kiremit model, renk, yüzey ve teknik özelliklerine ilişkin ürün seçkisi." },
  { number: "05", title: "Çatı Kaplama Altı Levhası", description: "Su, ısı ve nem yönetimine katkı sağlayan kaplama altı sistem çözümleri." },
  { number: "06", title: "Yağmur Suyu Sistemleri", description: "Yağmur suyunun kontrollü toplanması ve yapıdan uzaklaştırılması için elemanlar." },
];

export default function CatalogsPage() {
  return (
    <main className="min-h-screen bg-slate-200 text-slate-900">
      <section className="relative overflow-hidden px-6 pb-20 pt-36 text-white md:pb-28 md:pt-40">
        <Image src="/images/siyahcati.png" alt="Braas katalogları" fill priority className="object-cover brightness-125 saturate-75" />
        <div className="absolute inset-0 bg-slate-700/35" />
        <div className="absolute -right-40 top-8 h-96 w-96 rounded-full bg-[#8B1E2D]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="font-semibold uppercase tracking-[.2em] text-[#D46A76]">Braas Türkiye</p>
            <h1 data-i18n-rich="catalogues-hero" className="mt-5 max-w-3xl text-5xl font-bold leading-[1.06] tracking-tight md:text-7xl">Teknik dokümanlara doğrudan erişim.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-200">Braas Çatı Sistemleri&apos;nin ürün, uygulama ve teknik detay kataloglarını resmî kaynağından inceleyin.</p>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#8B1E2D] px-7 py-3.5 font-semibold transition hover:bg-[#721724]">Resmî Braas Kaynakları ↗</a>
          </div>
          <div className="rounded-3xl border border-white/25 bg-slate-100/20 p-10 shadow-2xl shadow-black/15 backdrop-blur-xl">
            <div className="rounded-2xl bg-white p-4">
              <Image src="/images/braas.png" alt="Braas Çatı Sistemleri" width={1082} height={1082} className="h-auto w-full" priority />
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-200">Kataloglar BMI Group Türkiye&apos;nin resmî doküman merkezi üzerinden güncel olarak sunulur.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/40 bg-slate-200 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl"><p className="font-semibold uppercase tracking-[.2em] text-[#D46A76]">Doküman merkezi</p><h2 className="mt-4 text-4xl font-bold md:text-5xl">Projeniz için ilgili kaynağı inceleyin.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {catalogs.map((catalog) => <a key={catalog.number} href={sourceUrl} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/50 bg-white/45 p-7 shadow-lg shadow-slate-900/10 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#D46A76]/60 hover:bg-white/65">
              <span className="text-sm font-bold text-[#D46A76]">{catalog.number}</span>
              <h3 className="mt-8 text-xl font-bold">{catalog.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{catalog.description}</p>
              <span className="mt-7 inline-flex text-sm font-semibold text-slate-900 transition group-hover:text-[#8B1E2D]">Resmî kaynağa git →</span>
            </a>)}
          </div>
        </div>
      </section>
    </main>
  );
}
