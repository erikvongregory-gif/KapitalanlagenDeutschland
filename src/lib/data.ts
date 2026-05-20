export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kapitalanlagen-deutschland.de";

export const NAV_LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#prozess", label: "Prozess" },
  { href: "#impressionen", label: "Impressionen" },
  { href: "#standorte", label: "Standorte" },
  { href: "#faq", label: "FAQ" },
] as const;

export const TICKER_CITIES = [
  "München",
  "Hamburg",
  "Berlin",
  "Frankfurt",
  "Stuttgart",
  "Leipzig",
  "Düsseldorf",
  "Köln",
  "Hannover",
] as const;

export const HERO_META = [
  { value: "1 : 1", label: "Persönliches Mandat" },
  { value: "Off-Market", label: "Pipeline statt Portale" },
  { value: "18", label: "Priorisierte Lagen DACH" },
  { value: "0 €", label: "Provision vom Verkäufer" },
] as const;

export const TRUST_STATS = [
  {
    value: "47",
    label:
      "Prüfpunkte in unserer Due-Diligence — bevor ein Objekt überhaupt auf deinen Tisch kommt.",
  },
  {
    value: "100",
    valueSuffix: "%",
    label:
      "Off-Market. Wir zeigen dir nichts, was bereits auf Portalen jeden Tag zwanzig andere Interessenten hat.",
  },
  {
    value: "1 : 1",
    label:
      "Ein Berater, ein Mandat. Du sprichst mit der Person, die deine Strategie auch baut — nicht mit einem Vertriebsteam.",
  },
  {
    value: "0",
    valueSuffix: "€",
    label:
      "Provision vom Verkäufer. Wir werden ausschließlich auf deiner Seite des Tisches vergütet.",
  },
] as const;

export const PRINCIPLES = [
  {
    num: "01 — Professionalität",
    headline: "Daten vor",
    accent: "Bauchgefühl.",
    body: "Jedes Objekt durchläuft eine 47-Punkte-Due-Diligence: Mikrostandort, Bausubstanz, Mieterstruktur, Rückrechnung auf 10-Jahres-Cashflow. Wir rechnen konservativ — lieber ein Objekt weniger als ein Objekt zu viel.",
  },
  {
    num: "02 — Nachhaltigkeit",
    headline: "Substanz statt",
    accent: "Spekulation.",
    body: "Wir bevorzugen Bestand in gewachsenen Quartieren. Sanierte Altbauten, KfW-fähige Neubauten, demografisch stabile Lagen. Was die nächste Generation noch trägt.",
  },
  {
    num: "03 — Beste Lagen",
    headline: "Deutschlands",
    accent: "stärkste 18.",
    body: "Wir konzentrieren uns auf A-Städte und ausgewählte B-Lagen mit Bevölkerungs- und Kaufkraftwachstum. Wo die Mieten ziehen — und nicht stagnieren.",
  },
] as const;

export const SERVICES = [
  {
    index: "01 / 06",
    title: "Beratung & Strategie",
    description:
      "Ziele, Eigenkapital, Risikoprofil, Zeithorizont. Wir entwickeln deinen 5- und 10-Jahres-Fahrplan und das passende Portfolio-Setup — bevor das erste Objekt überhaupt auf dem Tisch liegt.",
  },
  {
    index: "02 / 06",
    title: "Objektauswahl",
    description:
      "Off-Market-Pipeline, geprüfte Lagen, vollständige Kalkulation. Du siehst nur, was unsere Due-Diligence überlebt hat — meistens drei bis fünf Objekte pro Quartal pro Investor.",
  },
  {
    index: "03 / 06",
    title: "Finanzierung",
    description:
      "Wir arbeiten mit einem kuratierten Netzwerk aus Bank- und Finanzierungspartnern. Annuität, Tilgungsaussetzung, KfW-Programme, Volltilger — wir verhandeln Konditionen, die ein privater Käufer einzeln selten bekommt.",
  },
  {
    index: "04 / 06",
    title: "Kaufabwicklung",
    description:
      "Notartermin, Auflassung, Grundbuch, Schlüsselübergabe. Wir koordinieren die gesamte Transaktion und sind bei jedem Termin dabei — auch beim Notar.",
  },
  {
    index: "05 / 06",
    title: "Mietverwaltung",
    description:
      "Mietersuche, Bonitätsprüfung, Übergabe, Nebenkostenabrechnung, Reporting. Du bekommst monatlich ein PDF — und sonst nur Geld auf dein Konto.",
  },
  {
    index: "06 / 06",
    title: "Steuerberater-Empfehlung",
    description:
      "Wir vernetzen dich mit Steuerexperten, die auf Immobilieninvestoren spezialisiert sind. AfA, GbR, vermögensverwaltende GmbH — die Struktur, die zu deinem Portfolio passt.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    num: "01 — Discovery",
    title: "Erstgespräch",
    description:
      "45 Minuten. Ziele, Eigenkapital, Risikoprofil. Am Ende weißt du, ob Immobilien zu dir passen — und ob wir zu dir passen.",
    duration: "Tag 1 · kostenfrei",
  },
  {
    num: "02 — Strategie",
    title: "Portfolio-Setup",
    description:
      "Wir entwickeln deinen individuellen Fahrplan: Anzahl Objekte, Lagen, Finanzierungs-Architektur, Steuerstruktur.",
    duration: "Woche 1–2",
  },
  {
    num: "03 — Selektion",
    title: "Objektvorschläge",
    description:
      "Du erhältst die ersten Off-Market-Objekte inkl. Kalkulation, Bilder, Standortanalyse und Renditeszenarien.",
    duration: "Woche 2–6",
  },
  {
    num: "04 — Finanzierung",
    title: "Bankenabgleich",
    description:
      "Wir holen 3–5 Finanzierungsangebote ein und verhandeln Konditionen — du entscheidest auf einer Vergleichsmatrix.",
    duration: "Woche 4–7",
  },
  {
    num: "05 — Transaktion",
    title: "Notar & Abwicklung",
    description:
      "Kaufvertragsprüfung, Notartermin, Auflassungsvormerkung, Kaufpreiszahlung, Übergabe. Wir koordinieren alles.",
    duration: "Woche 7–12",
  },
  {
    num: "06 — Operation",
    title: "Verwaltung & Reporting",
    description:
      "Mieter, Nebenkosten, Instandhaltung, monatliches Reporting. Ab hier läuft die Immobilie für dich — nicht umgekehrt.",
    duration: "Ab Woche 12 · laufend",
  },
] as const;

export const IMPRESSIONS = [
  {
    className: "t1",
    label: "Sanierter Altbau · A-Lage Norddeutschland",
    tag: "In Prüfung",
  },
  {
    className: "t2",
    label: "Neubau-ETW · München Speckgürtel",
    tag: "Beispiel",
  },
  { className: "t3", label: "Loft-Apartment · Berlin", tag: "Beispiel" },
  {
    className: "t4",
    label: "Mehrfamilienhaus · Leipzig",
    tag: "In Prüfung",
  },
  {
    className: "t5",
    label: "Reihen-Stadthaus · Frankfurt",
    tag: "Beispiel",
  },
  { className: "t6", label: "Penthouse · Stuttgart", tag: "Beispiel" },
] as const;

export const LOCATIONS = [
  { index: "01", city: "München", yield: "3,4 – 4,2 %", tag: "A-Stadt" },
  { index: "02", city: "Hamburg", yield: "3,8 – 5,1 %", tag: "A-Stadt" },
  { index: "03", city: "Berlin", yield: "3,6 – 4,8 %", tag: "A-Stadt" },
  {
    index: "04",
    city: "Frankfurt am Main",
    yield: "4,0 – 5,2 %",
    tag: "A-Stadt",
  },
  { index: "05", city: "Stuttgart", yield: "3,9 – 4,9 %", tag: "A-Stadt" },
  { index: "06", city: "Leipzig", yield: "5,2 – 6,8 %", tag: "B-Stadt" },
  { index: "07", city: "Düsseldorf", yield: "4,1 – 5,0 %", tag: "A-Stadt" },
  { index: "08", city: "Köln", yield: "4,2 – 5,3 %", tag: "A-Stadt" },
  {
    index: "09",
    city: "+ 10 weitere",
    yield: "auf Anfrage",
    tag: "B / B+",
  },
] as const;

export const MAP_PINS = [
  { city: "München", left: "53%", top: "78%" },
  { city: "Hamburg", left: "46%", top: "20%" },
  { city: "Berlin", left: "65%", top: "32%" },
  { city: "Frankfurt", left: "40%", top: "58%" },
  { city: "Stuttgart", left: "43%", top: "74%" },
  { city: "Leipzig", left: "60%", top: "48%" },
  { city: "Düsseldorf", left: "30%", top: "46%" },
  { city: "Köln", left: "32%", top: "54%" },
] as const;

export const MANIFEST_CARDS = [
  {
    index: "01",
    quote:
      "Wir nehmen keine Provision von Verkäufern, Bauträgern oder Banken. Unsere Vergütung sitzt ausschließlich auf deiner Seite des Tisches.",
    accent: "keine Provision",
  },
  {
    index: "02",
    quote:
      "Maximal 30 Mandate pro Jahr. Wenn das Kontingent voll ist, nehmen wir niemanden mehr an — auch wenn der Umsatz lockt.",
    accent: "30 Mandate pro Jahr.",
  },
  {
    index: "03",
    quote:
      "Du siehst die komplette Kalkulation jedes Objekts — inklusive unserer Marge, der Bankkonditionen und drei Renditeszenarien. Keine Black Box.",
    accent: "die komplette Kalkulation",
  },
  {
    index: "04",
    quote:
      "Wenn ein Objekt unsere Due-Diligence nicht überlebt, sagen wir Nein — auch wenn du es schon im Kopf gekauft hast. Lieber kein Deal als ein schlechter.",
    accent: "sagen wir Nein",
  },
] as const;

export const MANIFEST_FOOTERS = [
  { title: "Keine Doppelvergütung", subtitle: "Vertraglich zugesichert" },
  { title: "Boutique by design", subtitle: "Knappheit als Qualitätsschutz" },
  { title: "Volle Transparenz", subtitle: "Offene Bücher pro Deal" },
  { title: "Nein-Sagen ist Service", subtitle: "Diszipliniertes Filterprinzip" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Welches Eigenkapital benötige ich für ein Immobilieninvestment?",
    answer:
      "Für unsere Strategien empfehlen wir in der Regel 40.000–80.000 € Eigenkapital. Im Erstgespräch prüfen wir gemeinsam dein individuelles Profil und entwickeln die passende Finanzierungsstruktur — manchmal funktioniert es auch mit weniger, wenn Bonität und Einkommen stark sind.",
  },
  {
    question: "Was kostet die Erstberatung?",
    answer:
      "Das Expertengespräch ist für dich kostenlos und unverbindlich. Wir verdienen ausschließlich am erfolgreichen Erwerb deiner Objekte — und damit nur, wenn am Ende auch wirklich ein Investment zustande kommt, das zu dir passt.",
  },
  {
    question: "Wie funktioniert eure Off-Market-Akquise?",
    answer:
      "Wir bauen unsere Pipeline über persönliche Beziehungen zu Bestandshaltern, Bauträgern, Banken und Insolvenzverwaltern auf — aus den vorherigen Karrieren unseres Teams. So zeigen wir dir Objekte, bevor sie auf dem freien Markt landen, meist ohne Bieterwettbewerb.",
  },
  {
    question: "Welche Standorte priorisiert ihr aktuell?",
    answer:
      "Schwerpunkt sind A- und ausgewählte B-Städte mit nachhaltigem Bevölkerungswachstum: München, Hamburg, Berlin, Frankfurt, Stuttgart, Düsseldorf, Köln, Leipzig — sowie zehn weitere Lagen, die wir im Strategiegespräch teilen.",
  },
  {
    question: "Welche Nettomietrenditen sind realistisch?",
    answer:
      "Je nach Standort und Strategie zwischen 3,5 % und 6,8 % Nettomietrendite — bei einer Eigenkapitalrendite von typischerweise 8–15 % p. a. inkl. Tilgung und Wertsteigerung. Wir rechnen alles konservativ und zeigen drei Szenarien (basis / neutral / pessimistisch).",
  },
  {
    question:
      "Was passiert nach dem Kauf — muss ich Mieter suchen oder Reparaturen organisieren?",
    answer:
      "Nein. Unsere Mietverwaltung übernimmt Mietersuche, Bonitätsprüfung, Übergabe, Nebenkostenabrechnung und Instandhaltungs-Koordination. Du erhältst monatlich ein Reporting per PDF — und ansonsten nur die Mieteinnahmen auf deinem Konto.",
  },
  {
    question: "Arbeitet ihr auch mit Selbstständigen und Freiberuflern?",
    answer:
      "Ja, und gerade für diese Gruppe ist unser Bankennetzwerk besonders wertvoll. Wir kennen die Banken, die Selbstständige fair bewerten — statt nur pauschal abzulehnen.",
  },
] as const;

export const CTA_BULLETS = [
  "45-minütiges 1-zu-1-Gespräch mit einem unserer Berater",
  "Konkrete Einschätzung zu Eigenkapital, Strategie & passenden Lagen",
  "Keine Verkaufsshow — wenn es nicht passt, sagen wir es ehrlich",
  "Unverbindlich & kostenfrei",
] as const;

export const EQUITY_OPTIONS = [
  "bis 40.000 €",
  "40.000–80.000 €",
  "80.000–150.000 €",
  "150.000–300.000 €",
  "300.000 € +",
  "möchte ich besprechen",
] as const;
