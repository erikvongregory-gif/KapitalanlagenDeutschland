import { TRUST_STATS } from "@/lib/data";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";

export function TrustBar() {
  return (
    <section className="stats" id="ueber-uns" aria-label="Über uns und Kennzahlen">
      <div className="wrap">
        <Reveal>
          <p>· Kapitel 01 · Unser Versprechen</p>
          <h2>
            Wir sind keine Makler. <em>Wir sind dein Mandat</em> — boutique,
            persönlich, und nur dir verpflichtet. Keine Verkäuferprovisionen.
            Keine versteckten Anreize.
          </h2>
        </Reveal>
        <RevealStagger className="stat-grid">
          {TRUST_STATS.map((stat) => (
            <RevealItem key={stat.value} className="stat">
              <div className="n">
                {stat.value}
                {"valueSuffix" in stat && stat.valueSuffix ? (
                  <em> {stat.valueSuffix}</em>
                ) : null}
              </div>
              <div className="l">{stat.label}</div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
