import Image from "next/image";
import Link from "next/link";
import { HERO_META, TICKER_CITIES } from "@/lib/data";

const HERO_IMAGE = {
  src: "/hero-bestand-a-lage.jpg",
  alt: "Moderne Einbauküche in einer Bestandsimmobilie — A-Lage",
} as const;

export function Hero() {
  return (
    <section className="hero" aria-label="Einleitung">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Premium Immobilieninvestment · DACH</span>
            <h1 className="display" style={{ marginTop: 28 }}>
              Der strategische Partner für dein{" "}
              <em>Immobilien&shy;vermögen.</em>
            </h1>
            <p className="lede">
              Wir begleiten dich vom Erstgespräch bis zur ersten Mietzahlung —
              mit Off-Market-Objekten in Deutschlands stärksten Lagen,
              professioneller Finanzierung und einer Verwaltung, die du nie
              wieder anfassen musst.
            </p>
            <div className="hero-cta-row">
              <Link href="#kontakt" className="btn btn-primary">
                Kostenloses Expertengespräch{" "}
                <span className="arrow">→</span>
              </Link>
              <Link href="#leistungen" className="btn btn-ghost">
                Leistungen entdecken
              </Link>
            </div>
            <div className="hero-meta">
              {HERO_META.map((item) => (
                <span key={item.label}>
                  <strong>{item.value}</strong>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              className="hero-visual hero-visual--photo"
              aria-label={HERO_IMAGE.alt}
            >
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="hero-visual__img"
              />
              <span className="hero-badge">
                Aktuelle Off-Market-Auswahl
                <b>Bestand · A-Lage</b>
              </span>
            </div>
            <div className="hero-quote">
              „Immobilien sollten arbeiten, nicht beschaffen werden."
              <cite>— Unser Gründungs&shy;prinzip</cite>
            </div>
          </div>
        </div>

        <div className="ticker" aria-hidden>
          <div className="ticker-track">
            {[...TICKER_CITIES, ...TICKER_CITIES].map((city, i) => (
              <span key={`${city}-${i}`}>{city}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
