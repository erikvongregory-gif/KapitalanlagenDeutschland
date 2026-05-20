import { PROCESS_STEPS } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Process() {
  return (
    <section id="prozess" aria-label="Prozess">
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 04 · Vom Erstgespräch zur Mieteinnahme"
          title={
            <>
              Sechs Schritte. <em>Etwa 90 Tage.</em>
            </>
          }
          meta="Vom unverbindlichen Erstgespräch bis zur ersten Mietzahlung auf deinem Konto vergehen typischerweise zwölf bis sechzehn Wochen. Wir machen jeden Schritt transparent."
        />
        <RevealStagger className="process-list">
          {PROCESS_STEPS.map((step) => (
            <RevealItem key={step.num} className="step">
              <span className="step-num">{step.num}</span>
              <h3 className="display">{step.title}</h3>
              <p>{step.description}</p>
              <span className="step-time">{step.duration}</span>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
