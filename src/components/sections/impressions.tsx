import { IMPRESSIONS } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Impressions() {
  return (
    <section
      className="impressions"
      id="impressionen"
      aria-label="Impressionen ausgewählter Objekte"
    >
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 05 · Impressionen"
          title={
            <>
              Aus unserer <em>Pipeline.</em>
            </>
          }
          meta="Eine Auswahl an Objekttypen und Lagen, die wir aktuell prüfen. Konkrete Objekte teilen wir ausschließlich im persönlichen Mandatsgespräch — aus Diskretion gegenüber Eigentümern."
        />
        <RevealStagger className="gallery">
          {IMPRESSIONS.map((tile) => (
            <RevealItem key={tile.label}>
              <div
                className={`tile ${tile.className}`}
                data-label={tile.label}
              >
                <span className="tag">{tile.tag}</span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
