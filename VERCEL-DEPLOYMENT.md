# Vercel: KapitalanlagenDeutschland

Projektname: **KapitalanlagenDeutschland**  
Vercel-Team / GitHub: **erikvongregory-gif**

---

## Option A — Vercel Dashboard (empfohlen)

1. Auf [vercel.com](https://vercel.com) einloggen (mit GitHub **erikvongregory-gif**).
2. **Add New** → **Project**.
3. Repository importieren (zuerst Code nach GitHub pushen, siehe unten).
4. Einstellungen:
   - **Project Name:** `KapitalanlagenDeutschland`
   - **Framework:** Next.js (automatisch)
   - **Root Directory:** `.`
   - **Build Command:** `npm run build`
   - **Install Command:** `npm install`
5. **Environment Variables** (wichtig für Link-Vorschau):
   - `NEXT_PUBLIC_SITE_URL` = `https://kapitalanlagen-deutschland.de` (oder deine finale Production-Domain, **ohne** trailing slash)
6. **Deploy** klicken.

Nach dem ersten Deploy: In Vercel unter **Settings → Environment Variables** prüfen, dass `NEXT_PUBLIC_SITE_URL` für **Production** gesetzt ist — sonst zeigen WhatsApp, iMessage und LinkedIn falsche oder relative Vorschaubilder.

---

## Option B — Vercel CLI

```bash
cd "/Users/lucybenz/Desktop/Projects EvGlab/KapitalanlagenDeutschland"

# Einmalig: bei Vercel anmelden
npx vercel@latest login

# Projekt verknüpfen (Team erikvongregory-gif)
npx vercel@latest link --scope erikvongregory-gif --project KapitalanlagenDeutschland

# Preview-Deploy
npx vercel@latest --scope erikvongregory-gif

# Production-Deploy
npx vercel@latest --prod --scope erikvongregory-gif
```

---

## GitHub-Repository (falls noch nicht vorhanden)

```bash
cd "/Users/lucybenz/Desktop/Projects EvGlab/KapitalanlagenDeutschland"

# Auf GitHub unter erikvongregory-gif anlegen: KapitalanlagenDeutschland
git remote add origin https://github.com/erikvongregory-gif/KapitalanlagenDeutschland.git
git add .
git commit -m "Initial: Kapitalanlagen Deutschland Website"
git push -u origin main
```

Danach in Vercel das Repo **erikvongregory-gif/KapitalanlagenDeutschland** importieren.

---

## Domain (später)

1. Vercel → Projekt **KapitalanlagenDeutschland** → **Settings** → **Domains**
2. Domain hinzufügen (z. B. `kapitalanlagen-deutschland.de`)
3. DNS bei deinem Anbieter gemäß Vercel-Anleitung setzen
4. `NEXT_PUBLIC_SITE_URL` auf die finale Domain aktualisieren und **Redeploy** auslösen

---

## Link-Vorschau (Open Graph / Social)

Die Website erzeugt automatisch:

- **OG-Bild** 1200×630 (`/opengraph-image`) — Hero-Foto mit Marken-Overlay
- **Twitter/X Card** (`summary_large_image`)
- **Favicon & Apple Touch Icon** aus dem Haus-Logo
- **`/robots.txt`** und **`/sitemap.xml`**

### Vorschau testen

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [opengraph.xyz](https://www.opengraph.xyz/)

URL eingeben → **Scrape again** / Cache leeren, nachdem du deployed hast.

### Checkliste

| Punkt | Status |
|--------|--------|
| `NEXT_PUBLIC_SITE_URL` in Vercel Production | manuell prüfen |
| Domain mit HTTPS erreichbar | nach DNS-Setup |
| OG-Bild unter `https://deine-domain.de/opengraph-image` | nach Deploy testen |
