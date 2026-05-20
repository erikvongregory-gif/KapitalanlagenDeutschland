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
5. **Environment Variables** (optional):
   - `NEXT_PUBLIC_SITE_URL` = `https://kapitalanlagen-deutschland.de` (oder deine Domain)
6. **Deploy** klicken.

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
