import type { Metadata } from "next";
import { FAQ_ITEMS, SITE_URL } from "./data";

const siteName = "Kapitalanlagen Deutschland";

const title =
  "Kapitalanlagen Deutschland — Premium Immobilieninvestments in den besten Lagen";

const description =
  "Strategischer Partner für dein Immobilieninvestment. Off-Market-Objekte, Finanzierung, Kaufabwicklung und Mietverwaltung — in Deutschlands stärksten Lagen. Jetzt kostenloses Expertengespräch sichern.";

const ogTitle = "Kapitalanlagen Deutschland — Premium Immobilieninvestments";

const ogDescription =
  "Der strategische Partner für dein Immobilieninvestment. Von der Strategie bis zur Mietverwaltung — in Deutschlands besten Lagen.";

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
  title: {
    default: title,
    template: `%s · ${siteName}`,
  },
  description,
  keywords,
  applicationName: siteName,
  authors: [{ name: "Kapitalanlagen Deutschland GmbH" }],
  creator: "Kapitalanlagen Deutschland GmbH",
  publisher: "Kapitalanlagen Deutschland GmbH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName,
    title: ogTitle,
    description: ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
  category: "finance",
  other: {
    "theme-color": "#1f3a2e",
    "apple-mobile-web-app-title": "Kapitalanlagen",
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
    image: `${SITE_URL}/opengraph-image`,
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
