import Link from "next/link";
import company from "@/data/company";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        
        {/* Logo */}
        <Link href="/" className="block">
          <h2 className="text-2xl font-bold text-white">
            {company.name}
          </h2>

          <p className="text-xs text-orange-500">
            {company.slogan}
          </p>
        </Link>

        {/* Menü */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          <Link
            href="/"
            className="transition hover:text-orange-500"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/hizmetler"
            className="transition hover:text-orange-500"
          >
            Hizmetler
          </Link>

          <Link
            href="/projeler"
            className="transition hover:text-orange-500"
          >
            Projeler
          </Link>

          <Link
            href="/hakkimizda"
            className="transition hover:text-orange-500"
          >
            Hakkımızda
          </Link>

          <Link
            href="/iletisim"
            className="transition hover:text-orange-500"
          >
            İletişim
          </Link>
        </nav>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}