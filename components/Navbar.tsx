"use client";

import Image from "next/image";
import Link from "next/link";
import company from "@/data/company";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  return (
    <header
      className="absolute left-0 top-0 z-[100] w-full border-b border-white/10 bg-slate-950/15 backdrop-blur-sm"
    >
      <div className="relative mx-auto flex h-[90px] max-w-7xl items-center px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Karot Mimarlık"
            width={180}
            height={70}
            className="brand-logo-readable h-auto w-[135px] object-contain md:w-[155px]"
            priority
          />
        </Link>

        {/* Menü */}
        <nav className="ml-auto mr-auto flex items-center gap-8 whitespace-nowrap text-sm font-medium text-white">
          <Link
            href="/"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Ana Sayfa
          </Link>

          <Link
            href="/hizmetler"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Hizmetler
          </Link>

          <Link
            href="/projeler"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Projeler
          </Link>

          <Link
            href="/hakkimizda"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Hakkımızda
          </Link>

          <Link
            href="/kataloglar"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Kataloglar
          </Link>

          <Link
            href="/iletisim"
            className="transition-colors hover:text-[#B52A3A]"
          >
            İletişim
          </Link>

          <span aria-hidden="true" className="h-5 w-px bg-white/25" />
          <LanguageToggle />
        </nav>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[#8B1E2D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#721724]"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}
