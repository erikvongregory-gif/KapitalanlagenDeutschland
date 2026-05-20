"use client";

import { useState } from "react";
import { CTA_BULLETS, EQUITY_OPTIONS } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { useIsMobile } from "@/hooks/use-motion-preset";

export function CTA() {
  const isMobile = useIsMobile();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Fehler beim Senden");
      setStatus("success");
      setMessage("Vielen Dank — wir melden uns innerhalb von 24 Stunden.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error ? err.message : "Bitte versuche es erneut.",
      );
    }
  }

  return (
    <section className="cta" id="kontakt" aria-label="Beratungsanfrage">
      <div className="wrap">
        <div className="cta-grid">
          <Reveal direction={isMobile ? "up" : "left"}>
            <div>
            <span
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              · Nächster Schritt
            </span>
            <h2
              className="display"
              style={{ marginTop: 24, color: "var(--accent-ink)" }}
            >
              Sichere dir dein{" "}
              <em>kostenloses Expertengespräch.</em>
            </h2>
            <ul className="cta-bullets" style={{ marginTop: 36 }}>
              {CTA_BULLETS.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            </div>
          </Reveal>

          <Reveal direction={isMobile ? "up" : "right"} delay={isMobile ? 0.06 : 0.1}>
          <form className="cta-form" onSubmit={handleSubmit}>
            <h3>Termin sichern</h3>
            <p>Antwort innerhalb von 24 Stunden, Werktage.</p>
            <div className="field-row">
              <div className="field">
                <label htmlFor="firstName">Vorname</label>
                <input
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Nachname</label>
                <input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">E-Mail *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Telefon</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="equity">Eigenkapital</label>
              <select id="equity" name="equity" required defaultValue="">
                <option value="" disabled>
                  Bitte wählen
                </option>
                {EQUITY_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Wird gesendet …" : "Termin anfragen →"}
            </button>
            {message && (
              <p role="status" style={{ fontSize: 14, marginTop: 8 }}>
                {message}
              </p>
            )}
            <p className="cta-fine">
              Mit dem Absenden willige ich in die Verarbeitung meiner Daten zur
              Kontaktaufnahme gem. Datenschutzerklärung ein.
            </p>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
