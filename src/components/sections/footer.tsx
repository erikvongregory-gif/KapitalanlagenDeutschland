import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="brand-block">
            <Logo variant="footer" linked={false} />
            <p>
              Strategischer Partner für Immobilieninvestments — von der Strategie
              bis zur Mietverwaltung. Boutique-Beratung, mandatsbasiert, mit
              ausschließlicher Vergütung auf Investorenseite.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
        </div>
        <p className="mega" aria-hidden>
          Kapitalanlagen
        </p>
        <div className="foot-bottom">
          <span>© 2026 Kapitalanlagen Deutschland GmbH</span>
          <span>Made in Germany · Hosted in Frankfurt</span>
        </div>
      </div>
    </footer>
  );
}
