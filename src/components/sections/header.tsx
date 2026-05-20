"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => document.body.classList.remove("nav-open");
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const close = () => setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  return (
    <header className="nav">
      <Reveal immediate direction="down">
        <div className="wrap nav-inner">
          <Logo variant="header" />

          <nav className="nav-desktop" aria-label="Hauptnavigation">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <span className="phone nav-phone">
              <span className="phone-dot" aria-hidden />
              Heute geöffnet · 09:00–20:00
            </span>
            <Link href="#kontakt" className="btn btn-primary nav-cta-btn">
              <span className="nav-cta-btn__long">
                Beratung anfragen <span className="arrow">→</span>
              </span>
              <span className="nav-cta-btn__short">Beratung</span>
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="nav-mobile"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? "Menü schließen" : "Menü öffnen"}
              </span>
              <span className="nav-toggle__bar" aria-hidden />
              <span className="nav-toggle__bar" aria-hidden />
            </button>
          </div>
        </div>
      </Reveal>

      <nav
        id="nav-mobile"
        className={`nav-mobile${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile Navigation"
        hidden={!menuOpen}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-mobile__cta">
            <Link
              href="#kontakt"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Beratung anfragen <span className="arrow">→</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
