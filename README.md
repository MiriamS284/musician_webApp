# Alexander Brenner — Pianist Web Application

Professionelle, mehrsprachige Künstlerwebsite für einen Konzertpianisten.  
Gebaut mit **Next.js 15**, **TypeScript**, **Tailwind CSS** und **Sanity CMS**.

---

## Projektstruktur & Dokumentation

| Datei                                                | Inhalt                                      |
| ---------------------------------------------------- | ------------------------------------------- |
| [PROJECT.md](./PROJECT.md)                           | Ziele, Tech Stack, ADRs, Scope              |
| [ARCHITECTURE.md](./ARCHITECTURE.md)                 | Ordnerstruktur, Datenfluß, Routing          |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)               | Farben, Typografie, Komponenten, Responsive |
| [CMS_SCHEMA.md](./CMS_SCHEMA.md)                     | Alle Sanity Schemas mit TypeScript          |
| [CODING_STANDARDS.md](./CODING_STANDARDS.md)         | Konventionen, Patterns, Git-Workflow        |
| [CMS_BENUTZERHANDBUCH.md](./CMS_BENUTZERHANDBUCH.md) | Anleitung für den Künstler                  |

---

## Design-Philosophie

> _„Weniger ist mehr — das Design dient der Musik."_

- Cinematisches, dunkles Farbschema
- Parallax-Hero mit subtilen Bewegungseffekten
- Dreisprachig: Deutsch · English · Русский
- Scroll-Reveal-Animationen, horizontales Album-Carousel
- Mobile-first, vollständig responsive

---

## Tech Stack

```
Next.js 15 (App Router)     Routing, SSG/ISR, Server Components
TypeScript (strict)          Typsicherheit
Tailwind CSS                 Utility-first Styling
Sanity.io v3                 CMS + embedded Studio at /studio
next-intl                    i18n (DE / EN / RU)
Resend                       Kontaktformular E-Mail API
Vercel                       Deployment + Edge Network
```

---

## Starten

```bash
cd musician-website
npm install
npm run dev
# → http://localhost:3000
```

---

## Deployment

`git push` auf `main` → automatisches Vercel-Deploy (~2 min)

Live: `https://musician-web-app.vercel.app`

---

## Sprachen

| Code | Sprache            | Route |
| ---- | ------------------ | ----- |
| `de` | Deutsch (Standard) | `/`   |
| `en` | English            | `/en` |
| `ru` | Русский            | `/ru` |
