"use client";

import { useMemo } from "react";
import company from "@/data/company";

export default function QuoteForm() {
  const thankYouUrl = useMemo(
    () => typeof window === "undefined" ? "" : `${window.location.origin}/tesekkurler`,
    []
  );

  return (
    <section id="teklif-al" className="relative overflow-hidden bg-[#344156] px-6 py-24 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_15%,rgba(148,163,184,.3),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(139,30,45,.23),transparent_42%)]" />
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#8B1E2D]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-slate-300/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <p className="font-semibold uppercase tracking-[.22em] text-[#D46A76]">Ücretsiz ön değerlendirme</p>
          <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight md:text-5xl">Çatı projeniz için teklif talep edin.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Yapınız ve ihtiyacınız hakkında temel bilgileri paylaşın. Talebiniz doğrudan ekibimize iletilir; değerlendirme sonrasında sizinle iletişime geçeriz.</p>
          <div className="mt-9 space-y-4 text-sm leading-6 text-slate-300">
            <p className="flex gap-3"><span className="font-bold text-[#D46A76]">01</span> Yeni çatı, yenileme veya yalıtım ihtiyacınızı belirtin.</p>
            <p className="flex gap-3"><span className="font-bold text-[#D46A76]">02</span> Konum ve yaklaşık metrekare bilgisini ekleyin.</p>
            <p className="flex gap-3"><span className="font-bold text-[#D46A76]">03</span> Dilerseniz WhatsApp üzerinden fotoğraf ve ek detay paylaşın.</p>
          </div>
        </div>

        <form action={`https://formsubmit.co/${company.email}`} method="POST" className="grid gap-5 rounded-3xl border border-white/25 bg-white/[.12] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur-xl md:grid-cols-2 md:p-8">
          <input type="hidden" name="_subject" value="Yeni web sitesi teklif talebi | Karot Mimarlık" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={thankYouUrl} />
          <input type="hidden" name="_autoresponse" value="Talebiniz Karot Mimarlık ekibine ulaşmıştır. En kısa sürede sizinle iletişime geçeceğiz." />
          <div><label htmlFor="quote-name" className="text-sm font-semibold">Ad soyad *</label><input id="quote-name" name="Ad soyad" required autoComplete="name" className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/50 focus:border-[#D46A76]" placeholder="Adınız ve soyadınız" /></div>
          <div><label htmlFor="quote-phone" className="text-sm font-semibold">Telefon *</label><input id="quote-phone" name="Telefon" required autoComplete="tel" type="tel" className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/50 focus:border-[#D46A76]" placeholder="05XX XXX XX XX" /></div>
          <div><label htmlFor="quote-email" className="text-sm font-semibold">E-posta *</label><input id="quote-email" name="email" required autoComplete="email" type="email" className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/50 focus:border-[#D46A76]" placeholder="ornek@eposta.com" /></div>
          <div><label htmlFor="quote-city" className="text-sm font-semibold">Proje konumu *</label><input id="quote-city" name="Proje konumu" required className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/50 focus:border-[#D46A76]" placeholder="İlçe / il" /></div>
          <div><label htmlFor="quote-service" className="text-sm font-semibold">Hizmet türü *</label><select id="quote-service" name="Hizmet türü" required defaultValue="" className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition focus:border-[#D46A76]"><option value="" disabled>Seçiniz</option><option>Yeni çatı yapımı</option><option>Çelik çatı konstrüksiyonu</option><option>Çatı yenileme</option><option>Su ve ısı yalıtımı</option><option>Braas çatı sistemi</option><option>Bakım / onarım</option></select></div>
          <div><label htmlFor="quote-size" className="text-sm font-semibold">Yaklaşık çatı alanı</label><select id="quote-size" name="Yaklaşık çatı alanı" defaultValue="" className="mt-2 w-full rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition focus:border-[#D46A76]"><option value="" disabled>Seçiniz</option><option>0 - 100 m²</option><option>100 - 250 m²</option><option>250 - 500 m²</option><option>500 m² ve üzeri</option><option>Henüz bilmiyorum</option></select></div>
          <div className="md:col-span-2"><label htmlFor="quote-message" className="text-sm font-semibold">Proje detayları</label><textarea id="quote-message" name="Proje detayları" rows={5} className="mt-2 w-full resize-y rounded-xl border border-white/20 bg-slate-900/25 px-4 py-3 text-white outline-none transition placeholder:text-slate-300/50 focus:border-[#D46A76]" placeholder="Mevcut çatı durumu, beklentiniz veya paylaşmak istediğiniz diğer bilgiler..." /></div>
          <label className="flex items-start gap-3 text-xs leading-5 text-slate-300 md:col-span-2"><input type="checkbox" name="İletişim onayı" required className="mt-1 accent-[#8B1E2D]" />Paylaştığım bilgilerin teklif talebimin değerlendirilmesi ve benimle iletişime geçilmesi amacıyla kullanılmasını kabul ediyorum.</label>
          <button type="submit" className="inline-flex justify-center rounded-xl bg-[#8B1E2D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#721724] md:col-span-2">Teklif talebini gönder →</button>
          <p className="text-center text-xs leading-5 text-slate-400 md:col-span-2">Talebiniz e-posta yoluyla ekibimize iletilir. İlk gönderimden sonra e-posta yönlendirmesini etkinleştirmeniz istenebilir.</p>
        </form>
      </div>
    </section>
  );
}
