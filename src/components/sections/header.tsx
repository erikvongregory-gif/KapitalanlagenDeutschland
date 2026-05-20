"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import { MobileNav } from "@/components/sections/mobile-nav";

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

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

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

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
