"use client";

import Image from "next/image";
import Link from "next/link";
import company from "@/data/company";
import LanguageToggle from "@/components/LanguageToggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="absolute left-0 top-0 z-[100] w-full border-b border-white/10 bg-slate-950/15 backdrop-blur-sm"
    >
      <div className="relative mx-auto flex h-[76px] max-w-7xl items-center px-4 sm:h-[90px] sm:px-6">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.png"
            alt="Karot Mimarlık"
            width={180}
            height={70}
            className="brand-logo-readable h-auto w-[118px] object-contain sm:w-[135px] md:w-[155px]"
            priority
          />
        </Link>

        {/* Menü */}
        <nav className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[68px] flex-col items-stretch gap-1 rounded-2xl border border-white/15 bg-[#344156]/95 p-3 text-sm font-medium text-white shadow-2xl backdrop-blur-xl sm:static sm:ml-auto sm:mr-auto sm:flex sm:flex-row sm:items-center sm:gap-8 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none`}>
          <Link onClick={() => setOpen(false)}
            href="/"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Ana Sayfa
          </Link>

          <Link onClick={() => setOpen(false)}
            href="/hizmetler"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Hizmetler
          </Link>

          <Link onClick={() => setOpen(false)}
            href="/projeler"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Projeler
          </Link>

          <Link onClick={() => setOpen(false)}
            href="/hakkimizda"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Hakkımızda
          </Link>

          <Link onClick={() => setOpen(false)}
            href="/kataloglar"
            className="transition-colors hover:text-[#B52A3A]"
          >
            Kataloglar
          </Link>

          <Link onClick={() => setOpen(false)}
            href="/iletisim"
            className="transition-colors hover:text-[#B52A3A]"
          >
            İletişim
          </Link>

          <span aria-hidden="true" className="hidden h-5 w-px bg-white/25 sm:block" />
          <LanguageToggle />
        </nav>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full bg-[#8B1E2D] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#721724] sm:block sm:px-5 sm:text-sm"
        >
          WhatsApp
        </a>

        <button type="button" aria-label={open ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={open} onClick={() => setOpen(value => !value)} className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white sm:hidden">
          <span className="sr-only">Menü</span><span aria-hidden="true" className="text-xl leading-none">{open ? "×" : "☰"}</span>
        </button>

      </div>
    </header>
  );
}
