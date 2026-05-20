import { SERVICES } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";

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
        <div className="service-grid">
          {SERVICES.map((service) => (
            <article key={service.index} className="service">
              <span className="ix">{service.index}</span>
              <div>
                <h3 className="display">{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <span className="arr" aria-hidden>
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
