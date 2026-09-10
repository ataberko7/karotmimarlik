import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://karotmimarlik.com";
  const routes = ["/", "/hizmetler", "/projeler", "/hakkimizda", "/kataloglar", "/iletisim"];
  return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.8 }));
}
