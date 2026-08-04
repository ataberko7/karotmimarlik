export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            KAROT MİMARLIK
          </h2>

          <p className="text-xs text-orange-500">
            Braas Yetkili Bayisi
          </p>
        </div>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#">Ana Sayfa</a>
          <a href="#">Hizmetler</a>
          <a href="#">Projeler</a>
          <a href="#">Hakkımızda</a>
          <a href="#">İletişim</a>
        </nav>

        <a
          href="#"
          className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}