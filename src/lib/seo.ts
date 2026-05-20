import type { Metadata } from "next";
import { FAQ_ITEMS, SITE_URL } from "./data";

const title =
  "Kapitalanlagen Deutschland — Premium Immobilieninvestments in den besten Lagen";

const description =
  "Strategischer Partner für dein Immobilieninvestment. Off-Market-Objekte, Finanzierung, Kaufabwicklung und Mietverwaltung — in Deutschlands stärksten Lagen. Jetzt kostenloses Expertengespräch sichern.";

const keywords = [
  "Kapitalanlage Immobilien",
  "Immobilieninvestment Deutschland",
  "Anlageimmobilie",
  "Off-Market Immobilien",
  "Renditeobjekt",
  "Immobilienportfolio",
  "Steueroptimierung",
  "Vermögensaufbau Immobilien",
];

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords,
  authors: [{ name: "Kapitalanlagen Deutschland GmbH" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "Kapitalanlagen Deutschland",
    title: "Kapitalanlagen Deutschland — Premium Immobilieninvestments",
    description:
      "Der strategische Partner für dein Immobilieninvestment. Von der Strategie bis zur Mietverwaltung — in Deutschlands besten Lagen.",
    images: [
      {
        url: "/logo-kapitalanlagen-deutschland.png",
        width: 1024,
        height: 309,
        alt: "Kapitalanlagen Deutschland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kapitalanlagen Deutschland — Premium Immobilieninvestments",
    description:
      "Der strategische Partner für dein Immobilieninvestment. Von der Strategie bis zur Mietverwaltung — in Deutschlands besten Lagen.",
  },
  icons: {
    icon: "/logo-kapitalanlagen-deutschland.png",
    apple: "/logo-kapitalanlagen-deutschland.png",
  },
};

export function getRealEstateAgentJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Kapitalanlagen Deutschland GmbH",
    description:
      "Strategischer Partner für Immobilieninvestments in Deutschlands besten Lagen. Beratung, Off-Market-Akquise, Finanzierung, Kaufabwicklung und Mietverwaltung aus einer Hand.",
    url: SITE_URL,
    areaServed: [
      { "@type": "Country", name: "Deutschland" },
      { "@type": "City", name: "München" },
      { "@type": "City", name: "Hamburg" },
      { "@type": "City", name: "Berlin" },
      { "@type": "City", name: "Frankfurt am Main" },
      { "@type": "City", name: "Stuttgart" },
      { "@type": "City", name: "Leipzig" },
    ],
    openingHours: "Mo-Sa 09:00-20:00",
    priceRange: "€€€",
    knowsAbout: [
      "Immobilieninvestment",
      "Kapitalanlage",
      "Off-Market Immobilien",
      "Vermögensaufbau",
      "Mietverwaltung",
    ],
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getJsonLdScripts() {
  return [getRealEstateAgentJsonLd(), getFaqJsonLd()];
}
