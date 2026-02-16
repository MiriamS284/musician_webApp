# PROJECT.md — Alexander Brenner Pianist Website

## Problemstellung

Konzertpianist Mustermann ist ein internationaler Konzertpianist. Seine bestehende Website
(notofficial.de als Referenz) ist nicht mehr zeitgemäß — sie fehlen:

- Mobile Responsivität
- Mehrsprachigkeit (DE/EN/RU)
- CMS für eigenständige Inhaltspflege
- Modernes, cinematisches Design

## Ziel

Eine professionelle, dreisprachige Web-Applikation die den Künstler
international repräsentiert und von ihm selbst gepflegt werden kann.

---

## Tech Stack & Begründung

| Technologie             | Begründung                                               |
| ----------------------- | -------------------------------------------------------- |
| Next.js 15 (App Router) | SSG/ISR für Performance, Server Components, i18n-Routing |
| TypeScript (strict)     | Typsicherheit, bessere DX, weniger Runtime-Fehler        |
| Tailwind CSS            | Utility-first, kein CSS-Overhead, konsistente Tokens     |
| Sanity.io v3            | Hosted Studio, GROQ-Queries, Webhook-basiertes ISR       |
| next-intl               | Type-safe i18n, App Router kompatibel, RU/DE/EN          |
| Resend                  | Zuverlässige E-Mail-API für Kontaktformular              |
| Vercel                  | Edge-Netzwerk, auto-Deploy bei git push                  |

---

## Architecture Decision Records

### ADR-001: App Router statt Pages Router

**Entscheidung:** App Router  
**Begründung:** Server Components reduzieren Client-Bundle, bessere Performance,
native i18n-Segment-Unterstützung mit next-intl.

### ADR-002: Sanity statt Strapi/Payload

**Entscheidung:** Sanity.io v3  
**Begründung:** Gehostetes Studio unter /studio, kein eigener Server,
exzellente Next.js-Integration, GROQ für flexible Queries.

### ADR-003: next-intl für Dreisprachigkeit

**Entscheidung:** next-intl  
**Begründung:** Type-safe, App Router nativ, unterstützt RTL-Vorbereitung,
saubere Trennung von UI-Strings (JSON) und CMS-Content (bilingual fields).

### ADR-004: SSG + ISR statt SSR

**Entscheidung:** Static Site Generation mit Incremental Static Regeneration  
**Begründung:** Maximale Performance (Lighthouse ≥ 95), Sanity-Webhooks
triggern gezieltes Revalidieren einzelner Seiten.

---

## Feature Scope

### MVP (Phase 1 — Prototype)

- [x] Cinematischer Hero mit Parallax
- [x] Biografie-Sektion
- [x] Konzertkalender
- [x] Aufnahmen — horizontales Scroll-Carousel
- [x] Repertoire mit Kategorie-Tabs
- [x] Pressestimmen / Referenzen
- [x] Kontaktformular
- [x] DE / EN / RU Sprachwechsel
- [x] Vollständig responsive (Mobile, Tablet, Desktop)
- [x] Impressum

### Phase 2 — CMS-Integration

- [ ] Sanity Studio unter /studio
- [ ] Alle Inhalte aus CMS (Konzerte, Aufnahmen, Bio, Referenzen)
- [ ] Webhook-basiertes ISR
- [ ] Kontaktformular → Resend E-Mail API
- [ ] SEO Optimierung (meta, OG, JSON-LD)
- [ ] Galerie-Sektion mit Lightbox

### Out of Scope (Phase 1)

- Ticketing-System
- Newsletter-Integration
- Shop / E-Commerce
- Video-Streaming

---

## Non-Functional Requirements

| Metrik                   | Ziel       |
| ------------------------ | ---------- |
| Lighthouse Performance   | ≥ 95       |
| Lighthouse Accessibility | ≥ 95       |
| Lighthouse SEO           | 100        |
| First Contentful Paint   | < 1.2s     |
| Largest Contentful Paint | < 2.5s     |
| Initial JS Bundle        | < 100kB    |
| Responsiv                | 320px – 4K |

---

## Deployment Strategie

```
main         → Vercel Production  (auto-deploy)
develop      → Vercel Staging     (auto-deploy)
feature/*    → Vercel Preview     (auto-deploy per PR)
```
