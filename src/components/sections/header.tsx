import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/ui/logo";

export function Header() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Logo variant="header" />
        <nav aria-label="Hauptnavigation">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-cta">
          <span className="phone">
            <span className="phone-dot" aria-hidden />
            Heute geöffnet · 09:00–20:00
          </span>
          <Link href="#kontakt" className="btn btn-primary">
            Beratung anfragen <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
