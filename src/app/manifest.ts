import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kapitalanlagen Deutschland",
    short_name: "Kapitalanlagen",
    description:
      "Strategischer Partner für Immobilieninvestments in Deutschlands besten Lagen.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#f4efe6",
    theme_color: "#1f3a2e",
    lang: "de",
    icons: [
      {
        src: "/logo-mark-house.png",
        sizes: "500x500",
        type: "image/png",
        purpose: "any",
      },
    ],
    id: SITE_URL,
  };
}
