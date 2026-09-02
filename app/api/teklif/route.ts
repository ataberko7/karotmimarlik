import { NextResponse } from "next/server";
import company from "@/data/company";

const clean = (value: unknown) => typeof value === "string" ? value.trim() : "";
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;",
}[character] ?? character));

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ error: "E-posta servisi henüz yapılandırılmadı." }, { status: 503 });
  }

  const payload = await request.json();
  const name = clean(payload.name);
  const phone = clean(payload.phone);
  const email = clean(payload.email);
  const location = clean(payload.location);
  const service = clean(payload.service);
  const roofArea = clean(payload.roofArea);
  const message = clean(payload.message);

  if (!name || !phone || !email || !location || !service) {
    return NextResponse.json({ error: "Lütfen zorunlu alanları doldurun." }, { status: 400 });
  }

  const details = [
    ["Ad soyad", name], ["Telefon", phone], ["E-posta", email], ["Proje konumu", location],
    ["Hizmet türü", service], ["Yaklaşık çatı alanı", roofArea || "Belirtilmedi"], ["Proje detayları", message || "Belirtilmedi"],
  ];
  const rows = details.map(([label, value]) => `<tr><td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#64748b;font-weight:600">${label}</td><td style="padding:10px 14px;border-bottom:1px solid #e2e8f0;color:#0f172a">${escapeHtml(value)}</td></tr>`).join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [company.email],
      reply_to: email,
      subject: `Yeni teklif talebi — ${name}`,
      html: `<div style="font-family:Arial,sans-serif;background:#f1f5f9;padding:32px"><div style="max-width:640px;margin:auto;background:#fff;border-radius:16px;overflow:hidden"><div style="background:#344156;padding:24px 28px;color:#fff"><p style="margin:0;color:#f0a4ac;font-size:12px;font-weight:bold;letter-spacing:2px">KAROT MİMARLIK</p><h1 style="margin:8px 0 0;font-size:24px">Yeni teklif talebi</h1></div><table style="width:100%;border-collapse:collapse">${rows}</table></div></div>`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Talep şu anda iletilemedi. Lütfen tekrar deneyin." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
