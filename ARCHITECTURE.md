# ARCHITECTURE.md — Ordnerstruktur & Datenfluß

## Verzeichnisstruktur

```
musician-website/
├── src/
│   ├── app/
│   │   ├── [locale]/              # i18n-Routing (de / en / ru)
│   │   │   ├── page.tsx           # Homepage (alle Sektionen)
│   │   │   ├── layout.tsx         # Locale-Layout mit next-intl
│   │   │   ├── biography/         # Vollständige Biografie-Unterseite
│   │   │   ├── concerts/          # Alle Konzerte (Liste)
│   │   │   ├── repertoire/        # Vollständiges Repertoire
│   │   │   ├── recordings/        # Diskografie-Übersicht
│   │   │   ├── references/        # Alle Pressestimmen
│   │   │   ├── links/             # Externe Links
│   │   │   └── imprint/           # Impressum & Datenschutz
│   │   ├── studio/                # Sanity Studio (embedded)
│   │   │   └── [[...tool]]/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   ├── contact/route.ts   # Kontaktformular → Resend
│   │   │   └── revalidate/route.ts # Sanity ISR Webhook
│   │   ├── layout.tsx             # Root Layout
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # Sticky Header, mobile Menu
│   │   │   └── Footer.tsx
│   │   ├── sections/              # Homepage-Sektionen
│   │   │   ├── HeroSection.tsx    # Parallax Hero
│   │   │   ├── QuoteSection.tsx
│   │   │   ├── BiographySection.tsx
│   │   │   ├── RecordingsSection.tsx  # Horizontales Carousel
│   │   │   ├── ConcertsSection.tsx
│   │   │   ├── RepertoireSection.tsx  # Tab-Navigation
│   │   │   ├── ReferencesSection.tsx
│   │   │   └── ContactSection.tsx
│   │   ├── ui/
│   │   │   ├── Reveal.tsx         # Scroll-Reveal Wrapper
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── AlbumCard.tsx
│   │   └── shared/
│   │       └── LanguageSwitcher.tsx
│   │
│   ├── lib/
│   │   ├── sanity/
│   │   │   ├── client.ts          # Public Sanity client (anon read)
│   │   │   ├── server-client.ts   # Server-only client (mit token)
│   │   │   └── queries/
│   │   │       ├── concerts.ts
│   │   │       ├── recordings.ts
│   │   │       ├── biography.ts
│   │   │       ├── references.ts
│   │   │       └── settings.ts
│   │   └── utils/
│   │       ├── formatDate.ts      # Locale-aware Datumsformatierung
│   │       └── cn.ts              # Tailwind className merge
│   │
│   ├── sanity/
│   │   ├── schemaTypes/
│   │   │   ├── index.ts           # Schema-Aggregation
│   │   │   ├── documents/
│   │   │   │   ├── concert.ts
│   │   │   │   ├── recording.ts
│   │   │   │   ├── reference.ts   # Pressestimme
│   │   │   │   └── link.ts
│   │   │   └── singletons/
│   │   │       ├── biography.ts
│   │   │       ├── repertoire.ts
│   │   │       └── siteSettings.ts
│   │   └── sanity.config.ts
│   │
│   ├── i18n/
│   │   ├── routing.ts             # next-intl Locale-Konfiguration
│   │   └── messages/
│   │       ├── de.json
│   │       ├── en.json
│   │       └── ru.json
│   │
│   └── types/
│       ├── sanity.ts              # Generated Sanity Types
│       └── index.ts
│
├── middleware.ts                  # next-intl Locale-Detection
├── next.config.ts
├── tailwind.config.ts
├── sanity.config.ts               # Studio-Konfiguration
└── .env.local                     # Secrets (nicht in Git)
```

---

## Datenfluß

### Public Page (SSG + ISR)

```
Browser → Next.js Server Component
       → React cache() deduplication
       → Sanity CDN (GROQ query)
       → JSON Response
       → HTML (static, gecacht)
       → Browser (< 100ms TTFB)
```

### CMS Update → Live auf Website

```
Sanity Studio (Editor)
  → Content speichern
  → Sanity Webhook POST /api/revalidate
  → Next.js revalidatePath('/[locale]/concerts')
  → Nächster Request: frisches HTML
```

### Kontaktformular

```
Client (react-hook-form + zod validation)
  → POST /api/contact
  → Server-side zod validation
  → Resend API → E-Mail an Künstler
  → 200 OK → Success-State im UI
```

---

## i18n Routing (next-intl)

```typescript
// middleware.ts
export default createMiddleware({
  locales: ["de", "en", "ru"],
  defaultLocale: "de",
  localeDetection: true,
});

// URL-Struktur
// /                  → DE (default, kein Prefix)
// /en                → EN
// /ru                → RU
// /en/biography      → EN Biography page
```

---

## Umgebungsvariablen

```bash
# .env.local — niemals committen!

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxx          # Server-only (read + write für Studio)
SANITY_WEBHOOK_SECRET=xxx     # ISR Webhook Validierung

# E-Mail
RESEND_API_KEY=xxx
CONTACT_EMAIL=kontakt@alexanderbrenner.de
```

---

## Performance-Strategie

| Maßnahme                    | Effekt                                         |
| --------------------------- | ---------------------------------------------- |
| SSG + ISR                   | TTFB < 100ms, kein SSR-Overhead                |
| next/image + Sanity CDN     | Auto-WebP, responsive srcset                   |
| next/font (self-hosted)     | Kein FOUT, Cumulative Layout Shift = 0         |
| React cache()               | Sanity-Queries werden pro Request dedupliziert |
| Tailwind CSS purge          | CSS Bundle < 10kB                              |
| Lazy load (Gallery, Videos) | Initial bundle klein halten                    |
