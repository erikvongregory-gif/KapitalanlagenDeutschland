import { PRINCIPLES } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";
import { RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Mission() {
  return (
    <section id="mission" aria-label="Mission und Prinzipien">
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 02 · Mission"
          title={
            <>
              Drei Prinzipien. <em>Null Kompromisse.</em>
            </>
          }
          meta="Unsere Arbeit ruht auf einem schmalen, aber unverrückbaren Fundament. Was wir empfehlen, würden wir auch selbst kaufen — und tun es nachweislich auch."
        />
        <RevealStagger className="principles-grid">
          {PRINCIPLES.map((item) => (
            <RevealItem key={item.num}>
              <article className="principle">
                <span className="num">{item.num}</span>
                <div>
                  <h3 className="display">
                    {item.headline} <em>{item.accent}</em>
                  </h3>
                  <p>{item.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
