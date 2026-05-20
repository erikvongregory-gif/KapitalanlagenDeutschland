import { getJsonLdScripts } from "@/lib/seo";

export function JsonLd() {
  const scripts = getJsonLdScripts();
  return (
    <>
      {scripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
