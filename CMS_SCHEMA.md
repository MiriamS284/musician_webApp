# CMS_SCHEMA.md — Sanity Schema Definitionen

Alle Schemas inkl. TypeScript-Typen und GROQ-Queries.

---

## Document: `concert`

```typescript
// sanity/schemaTypes/documents/concert.ts
import { defineType, defineField } from "sanity";

export const concert = defineType({
  name: "concert",
  title: "Konzert",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "object",
      fields: [
        {
          name: "de",
          title: "Deutsch",
          type: "string",
          validation: (R) => R.required(),
        },
        { name: "en", title: "English", type: "string" },
        { name: "ru", title: "Русский", type: "string" },
      ],
    }),
    defineField({
      name: "date",
      title: "Datum & Uhrzeit",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "venue",
      title: "Veranstaltungsort",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Saal / Haus",
          type: "string",
          validation: (R) => R.required(),
        },
        {
          name: "city",
          title: "Stadt",
          type: "string",
          validation: (R) => R.required(),
        },
        { name: "country", title: "Land", type: "string" },
        { name: "address", title: "Adresse", type: "string" },
      ],
    }),
    defineField({
      name: "program",
      title: "Programm",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "composer", title: "Komponist", type: "string" },
            { name: "work", title: "Werk", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Bestätigt", value: "confirmed" },
          { title: "Vorankündigung", value: "announced" },
          { title: "Abgesagt", value: "cancelled" },
        ],
      },
      initialValue: "confirmed",
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket-Link",
      type: "url",
      description: "Leer lassen wenn noch kein Ticketverkauf",
    }),
    defineField({
      name: "isFree",
      title: "Eintritt frei",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "notes",
      title: "Notizen",
      type: "object",
      fields: [
        { name: "de", type: "text", rows: 3 },
        { name: "en", type: "text", rows: 3 },
        { name: "ru", type: "text", rows: 3 },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title.de",
      date: "date",
      city: "venue.city",
      status: "status",
    },
    prepare({ title, date, city, status }) {
      const emoji =
        status === "cancelled" ? "🚫" : status === "announced" ? "📢" : "🎹";
      const d = date ? new Date(date).toLocaleDateString("de-DE") : "—";
      return { title: `${emoji} ${title}`, subtitle: `${d} · ${city}` };
    },
  },
  orderings: [
    {
      title: "Datum (neueste zuerst)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
});
```

---

## Document: `recording`

```typescript
// sanity/schemaTypes/documents/recording.ts
export const recording = defineType({
  name: "recording",
  title: "Aufnahme",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Albumtitel",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Untertitel / Werke",
      type: "string",
      description: 'z.B. "D. 958 · 959 · 960"',
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "z.B. Deutsche Grammophon, ECM Records",
    }),
    defineField({
      name: "year",
      title: "Erscheinungsjahr",
      type: "number",
      validation: (R) => R.required().min(1900).max(2100),
    }),
    defineField({
      name: "artwork",
      title: "Album-Artwork",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "isNew",
      title: 'Als "Neu" markieren',
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "tracks",
      title: "Programm / Tracks",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "spotifyUrl",
      title: "Spotify Link",
      type: "url",
    }),
    defineField({
      name: "appleMusicUrl",
      title: "Apple Music Link",
      type: "url",
    }),
    defineField({
      name: "sortOrder",
      title: "Reihenfolge",
      type: "number",
      description: "Niedrigere Zahl = weiter links im Carousel",
    }),
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "sortOrder",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
    {
      title: "Jahr (neueste zuerst)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
  ],
});
```

---

## Document: `reference` (Pressestimme)

```typescript
export const reference = defineType({
  name: "reference",
  title: "Pressestimme / Referenz",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Zitat",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "source",
      title: "Quelle (Person/Medium)",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "origin",
      title: "Herkunft (Institution / Datum)",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Presse", value: "press" },
          { title: "Kollege / Lehrer", value: "colleague" },
          { title: "Institution", value: "institution" },
        ],
      },
    }),
    defineField({ name: "sortOrder", type: "number", title: "Reihenfolge" }),
  ],
});
```

---

## Document: `link`

```typescript
export const link = defineType({
  name: "link",
  title: "Link",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Bezeichnung",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          { title: "Konzerthäuser & Festivals", value: "venues" },
          { title: "Wettbewerbe & Institutionen", value: "competitions" },
          { title: "Labels & Streaming", value: "labels" },
          { title: "Presse & Medien", value: "press" },
        ],
      },
    }),
    defineField({ name: "sortOrder", type: "number", title: "Reihenfolge" }),
  ],
});
```

---

## Singleton: `biography`

```typescript
export const biography = defineType({
  name: "biography",
  title: "Biografie",
  type: "document",
  __experimental_actions: ["update", "publish"], // kein create/delete
  fields: [
    defineField({
      name: "portrait",
      title: "Porträtfoto",
      type: "image",
      options: { hotspot: true },
      description: "Empfehlung: 1200×1600px, hochauflösend",
    }),
    defineField({
      name: "shortBio",
      title: "Kurzbiografie (für Homepage-Preview)",
      type: "object",
      fields: [
        {
          name: "de",
          type: "text",
          rows: 4,
          title: "Deutsch",
          validation: (R) => R.max(400),
        },
        {
          name: "en",
          type: "text",
          rows: 4,
          title: "English",
          validation: (R) => R.max(400),
        },
        {
          name: "ru",
          type: "text",
          rows: 4,
          title: "Русский",
          validation: (R) => R.max(400),
        },
      ],
    }),
    defineField({
      name: "sections",
      title: "Vollständige Biografie (Abschnitte)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              type: "object",
              title: "Überschrift",
              fields: [
                { name: "de", type: "string", title: "Deutsch" },
                { name: "en", type: "string", title: "English" },
                { name: "ru", type: "string", title: "Русский" },
              ],
            },
            {
              name: "text",
              type: "object",
              title: "Text",
              fields: [
                { name: "de", type: "text", rows: 6, title: "Deutsch" },
                { name: "en", type: "text", rows: 6, title: "English" },
                { name: "ru", type: "text", rows: 6, title: "Русский" },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "awards",
      title: "Auszeichnungen & Preise",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "de", type: "string", title: "Deutsch" },
            { name: "en", type: "string", title: "English" },
            { name: "ru", type: "string", title: "Русский" },
          ],
        },
      ],
    }),
  ],
});
```

---

## Singleton: `siteSettings`

```typescript
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Website-Einstellungen",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "artistName",
      title: "Künstlername",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "instrument",
      title: "Instrument / Titel",
      type: "object",
      fields: [
        { name: "de", type: "string", initialValue: "Konzertpianist" },
        { name: "en", type: "string", initialValue: "Concert Pianist" },
        { name: "ru", type: "string", initialValue: "Концертный пианист" },
      ],
    }),
    defineField({
      name: "heroQuote",
      title: "Hero-Zitat (Homepage)",
      type: "object",
      fields: [
        { name: "text", type: "text", rows: 2 },
        { name: "source", type: "string" },
      ],
    }),
    defineField({
      name: "contact",
      title: "Kontaktdaten",
      type: "object",
      fields: [
        { name: "email", type: "string" },
        { name: "phone", type: "string" },
        {
          name: "management",
          type: "string",
          description: "Name der Agentur/Management",
        },
        { name: "managementEmail", type: "string" },
      ],
    }),
    defineField({
      name: "social",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "youtube", type: "url" },
        { name: "instagram", type: "url" },
        { name: "spotify", type: "url" },
        { name: "facebook", type: "url" },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaDescription",
          type: "object",
          fields: [
            {
              name: "de",
              type: "text",
              rows: 2,
              validation: (R) => R.max(160),
            },
            {
              name: "en",
              type: "text",
              rows: 2,
              validation: (R) => R.max(160),
            },
            {
              name: "ru",
              type: "text",
              rows: 2,
              validation: (R) => R.max(160),
            },
          ],
        },
        { name: "ogImage", type: "image", title: "Open Graph Bild" },
      ],
    }),
  ],
});
```

---

## GROQ Queries

```typescript
// lib/sanity/queries/concerts.ts
import { groq } from "next-sanity";

export const upcomingConcertsQuery = groq`
  *[_type == "concert" && date >= now() && status != "cancelled"]
  | order(date asc) [0...10] {
    _id, title, date, status, ticketUrl, isFree,
    venue { name, city, country },
    program[] { composer, work }
  }
`;

export const allConcertsQuery = groq`
  *[_type == "concert"] | order(date desc) {
    _id, title, date, status, ticketUrl, isFree,
    venue { name, city }
  }
`;

// lib/sanity/queries/recordings.ts
export const recordingsQuery = groq`
  *[_type == "recording"] | order(sortOrder asc, year desc) {
    _id, title, subtitle, label, year, isNew, tracks,
    spotifyUrl, appleMusicUrl,
    artwork { asset->{ url, metadata { lqip } } }
  }
`;

// lib/sanity/queries/settings.ts
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    artistName, instrument, heroQuote, contact, social, seo
  }
`;
```
