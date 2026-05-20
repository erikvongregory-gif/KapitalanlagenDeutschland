import { FAQ_ITEMS } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";

export function FAQ() {
  return (
    <section
      id="faq"
      style={{ background: "var(--bg-paper)" }}
      aria-label="Häufige Fragen"
    >
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 08 · FAQ"
          title={
            <>
              Was du <em>vorher</em> wissen willst.
            </>
          }
          meta="Die Fragen, die in fast jedem Erstgespräch kommen. Wenn deine nicht dabei ist — schreib uns einfach."
        />
        <div className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question} <span className="icn">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
