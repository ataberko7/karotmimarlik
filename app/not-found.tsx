import Link from "next/link";

export default function NotFound() { return <main className="flex min-h-[70vh] items-center justify-center bg-[#465164] px-6 text-center text-white"><div><p className="text-sm font-semibold uppercase tracking-[.22em] text-[#ffc2cb]">404</p><h1 className="mt-4 text-4xl font-bold md:text-6xl">Sayfa bulunamadı.</h1><p className="mx-auto mt-4 max-w-md text-slate-200">Aradığınız sayfa taşınmış veya artık mevcut olmayabilir.</p><Link href="/" className="mt-8 inline-flex rounded-full bg-[#8B1E2D] px-6 py-3 font-semibold">Ana sayfaya dön ↗</Link></div></main>; }
