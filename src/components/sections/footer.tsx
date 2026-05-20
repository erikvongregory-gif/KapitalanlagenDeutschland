import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/ui/logo";
import { Reveal, RevealItem, RevealStagger } from "@/components/ui/reveal";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <RevealStagger className="foot-grid">
          <RevealItem className="brand-block">
            <Logo variant="footer" linked={false} />
            <p>
              Strategischer Partner für Immobilieninvestments — von der Strategie
              bis zur Mietverwaltung. Boutique-Beratung, mandatsbasiert, mit
              ausschließlicher Vergütung auf Investorenseite.
            </p>
          </RevealItem>
          <RevealItem>
            <h4>Navigation</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </RevealItem>
          <RevealItem>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href="mailto:kontakt@kapitalanlagen-deutschland.de">
                  kontakt@kapitalanlagen-deutschland.de
                </a>
              </li>
              <li>+49 (0) — auf Anfrage</li>
              <li>Mo–Sa 09:00–20:00</li>
              <li>
                <Link href="#kontakt">Termin anfragen →</Link>
              </li>
            </ul>
          </RevealItem>
          <RevealItem>
            <h4>Rechtliches</h4>
            <ul>
              <li>
                <Link href="/impressum">Impressum</Link>
              </li>
              <li>
                <Link href="/datenschutz">Datenschutz</Link>
              </li>
              <li>
                <Link href="/agb">AGB</Link>
              </li>
              <li>
                <Link href="/cookies">Cookies</Link>
              </li>
            </ul>
          </RevealItem>
        </RevealStagger>
        <Reveal delay={0.12} direction="none">
          <p className="mega" aria-hidden>
            Kapitalanlagen
          </p>
        </Reveal>
        <Reveal delay={0.16} direction="none">
          <div className="foot-bottom">
            <span>© 2026 Kapitalanlagen Deutschland GmbH</span>
            <span>Made in Germany · Hosted in Frankfurt</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
