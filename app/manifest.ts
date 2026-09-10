import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Karot Mimarlık", short_name: "Karot Mimarlık", description: "Antalya ve çevre illerde profesyonel çatı çözümleri.", start_url: "/", display: "standalone", background_color: "#465164", theme_color: "#465164", icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }] };
}
