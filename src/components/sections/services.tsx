import { SERVICES } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Services() {
  return (
    <section className="services" id="leistungen" aria-label="Leistungen">
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 03 · Leistungen"
          title={
            <>
              Alles aus einer Hand. <em>Ohne Bruchstellen.</em>
            </>
          }
          meta="Sechs Disziplinen, ein Team, eine Schnittstelle. Du sprichst mit einem Berater — dahinter arbeitet ein Netzwerk aus Maklern, Banken, Notaren, Hausverwaltern und Steuerexperten."
        />
        <RevealStagger className="service-grid">
          {SERVICES.map((service) => (
            <RevealItem key={service.index}>
              <article className="service">
                <span className="ix">{service.index}</span>
                <div>
                  <h3 className="display">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="arr" aria-hidden>
                  →
                </span>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
