import { FAQ_ITEMS } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

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
        <RevealStagger className="faq-list">
          {FAQ_ITEMS.map((item) => (
            <RevealItem key={item.question}>
              <details>
                <summary>
                  {item.question} <span className="icn">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
