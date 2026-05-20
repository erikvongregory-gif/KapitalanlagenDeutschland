import { MANIFEST_CARDS, MANIFEST_FOOTERS } from "@/lib/data";
import { highlightAccent } from "@/lib/highlight";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Manifest() {
  return (
    <section id="manifest" aria-label="Unser Versprechen">
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 07 · Manifest"
          title={
            <>
              Vier <em>Versprechen.</em> Schriftlich.
            </>
          }
          meta="Wir sind eine neue Firma — und genau deshalb arbeiten wir kompromissloser. Jedes Mandat startet mit einem Vertrag, in dem diese vier Punkte verbindlich verankert sind."
        />
        <RevealStagger className="testimonial-grid manifest-grid">
          {MANIFEST_CARDS.map((card, i) => (
            <RevealItem key={card.index}>
              <article className="tcard">
                <span className="qmark">{card.index}</span>
                <blockquote>{highlightAccent(card.quote, card.accent)}</blockquote>
                <div className="who">
                  <div className="who-text">
                    <b>{MANIFEST_FOOTERS[i].title}</b>
                    <span>{MANIFEST_FOOTERS[i].subtitle}</span>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
