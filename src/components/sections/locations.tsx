import { LOCATIONS, MAP_PINS } from "@/lib/data";
import { SectionHead } from "@/components/ui/section-head";

export function Locations() {
  return (
    <section className="locations" id="standorte" aria-label="Standorte">
      <div className="wrap">
        <SectionHead
          eyebrow="· Kapitel 06 · Standorte"
          title={
            <>
              Deutschlands <em>beste 18.</em>
            </>
          }
          meta="Wir investieren dort, wo Bevölkerung, Kaufkraft und Arbeitsmarkt nachweislich wachsen. Keine Renditefallen in strukturschwachen Regionen — sondern A- und B-Städte mit messbarem Aufwärtstrend."
        />
        <div className="loc-wrap">
          <div className="loc-list" role="list">
            {LOCATIONS.map((loc) => (
              <div key={loc.index} className="loc" role="listitem">
                <span className="ix">{loc.index}</span>
                <span className="name">{loc.city}</span>
                <span className="rendite">{loc.yield}</span>
                <span className="tag">{loc.tag}</span>
              </div>
            ))}
          </div>
          <div
            className="map-card"
            aria-label="Deutschlandkarte mit unseren Standorten"
          >
            <svg
              className="map-svg"
              viewBox="0 0 400 480"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path
                d="M195 30 L230 42 L260 38 L275 60 L295 70 L300 95 L320 110 L325 145 L345 165 L340 195 L355 215 L345 245 L360 280 L335 305 L340 335 L320 360 L310 395 L280 415 L245 440 L210 445 L175 435 L150 450 L130 440 L110 410 L95 380 L75 360 L60 320 L70 290 L55 260 L50 220 L65 195 L55 165 L75 140 L70 110 L95 90 L115 70 L145 55 L175 38 Z"
                fill="none"
                stroke="rgba(21,19,15,0.3)"
                strokeWidth="1.2"
              />
            </svg>
            <div className="map-pins-layer" aria-hidden>
              {MAP_PINS.map((pin, index) => (
                <div
                  key={pin.city}
                  className="map-pin"
                  style={
                    {
                      left: pin.left,
                      top: pin.top,
                      "--pin-delay": `${index * 0.4}s`,
                    } as React.CSSProperties
                  }
                >
                  <span className="map-pin__ring" />
                  <span className="map-pin__ring map-pin__ring--delayed" />
                  <span className="map-pin__dot" />
                  <span className="map-pin__label">{pin.city}</span>
                </div>
              ))}
            </div>
            <span className="map-caption">DACH · 18 priorisierte Lagen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
