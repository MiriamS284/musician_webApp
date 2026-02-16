# DESIGN_SYSTEM.md — Visuelles Design-System

## Design-Philosophie

Cinematisch · Minimalistisch · Künstlerisch

Inspiriert von: vikingurolafsson.com, deutschegrammophon.com  
Differenzierung: Warme Goldtöne statt kühlem Grau, Cormorant Garamond für
edlen Klassik-Charakter, dunkler Hintergrund für dramatischen Kontrast.

---

## Farb-Palette

```
Primär-Hintergrund   #0E0D0B   — Tiefschwarz mit warmem Unterton
Sekundär-Hintergrund #111009   — Sektionsabwechslung
Tertiär-Hintergrund  #090807   — Recordings (dunkelster Bereich)

Textfarbe primary    #F0ECE4   — Warmes Off-White
Textfarbe secondary  rgba(240,236,228,.65)  — Abgestufte Lesbarkeit
Textfarbe muted      rgba(240,236,228,.35)  — Metainformationen

Gold-Akzent          #BFA07A   — Alle Highlights, CTAs, Dividers
Gold-Hover           #D4B48C   — Hover-Zustand
Gold-Subtle          rgba(191,160,122,.06)  — Hintergrund-Boxen

Border               rgba(240,236,228,.07)  — Zeilentrennungen
Border-accent        rgba(191,160,122,.18)  — Goldene Trennlinien
```

### CSS Custom Properties (tailwind.config.ts)

```typescript
colors: {
  brand: {
    bg:      '#0E0D0B',
    surface: '#111009',
    dark:    '#090807',
    text:    '#F0ECE4',
    gold:    '#BFA07A',
    'gold-hover': '#D4B48C',
  }
}
```

---

## Typografie

### Schriftarten

```
Display / Überschriften:  Cormorant Garamond
  — Gewichte: 300 (Light), 400 (Regular), italic 300/400
  — Verwendung: h1–h4, Zitate, Künstlername

UI / Navigation / Labels: Jost
  — Gewichte: 300 (Light), 400 (Regular), 500 (Medium)
  — Verwendung: Nav-Links, Labels, Buttons, Metadaten
```

### Typografie-Skala

```
Hero h1:        clamp(60px, 10vw, 118px) · weight 300 · tracking -.02em
Section h2:     clamp(34px, 5vw, 56px)  · weight 300 · tracking -.01em
Card h3:        18–22px                  · weight 400
Body:           17px                     · line-height 1.9 · weight 300
Label:          10px · Jost              · tracking .28em · uppercase
Caption:        11–13px · Jost           · tracking .08em
```

### Google Fonts Import

```css
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap");
```

---

## Abstände & Layout

```
Section padding Desktop:  108px 52px
Section padding Mobile:   72px 24px
Section padding Tablet:   88px 36px

Max-width Content:        1180px (Standard)
Max-width Text:           860–980px (Lesbarkeit)
Max-width Schmal:         720px (Impressum, Kontakt-Text)

Grid-Gaps:
  Biografie 2-col:        72px
  Recordings-Carousel:    20px (zwischen Cards)
  Konzert-Rows:           20px (Grid-columns)

Divider:                  44px × 1px · Farbe #BFA07A
```

---

## Komponenten

### SectionLabel

```tsx
<p
  style={{
    fontFamily: "Jost",
    fontSize: 10,
    letterSpacing: ".28em",
    textTransform: "uppercase",
    color: "#BFA07A",
  }}
>
  {label}
</p>
```

### Buttons

```
.btn-gold    — border #BFA07A, color #BFA07A → hover: bg #BFA07A, text dark
.btn-white   — border rgba(white,.25), color white → hover: bg white, text dark
.btn-primary — bg #BFA07A, color dark → hover: bg #D4B48C (Kontaktformular Submit)
```

### AlbumCard (Recordings Carousel)

- Quadratisches Artwork (1:1 aspect ratio)
- Gradient-Hintergrund (kein echtes Bild im Prototype)
- Hover: translateY(-6px) transition .35s
- "Neu"-Badge: goldener Label oben rechts
- Rahmen-Inset: 1px solid rgba(gold,.1)

### ConcertRow

```
Grid: 170px (Datum) | 1fr (Titel/Ort) | auto (Button)
border-bottom: 1px solid rgba(white,.07)
hover: background rgba(gold,.05)
```

### Reveal (Scroll-Animation)

```tsx
// Intersection Observer → opacity 0→1, translateY(28px)→0
// Konfigurierbar: delay, from (bottom/left/right)
// Threshold: 0.08 (früh triggern)
// Transition: 0.75s ease
```

---

## Parallax-System

```
Hero-Hintergrund:    scrollY × 0.4  (sanfter als Scroll)
Inset offset:        -18% top/bottom (verhindert weiße Ränder)
will-change:         transform       (GPU-Beschleunigung)
```

---

## Horizontales Carousel (Recordings)

```
Container:    overflow-x: auto · scrollbar: none
              cursor: grab → grabbing
              WebkitOverflowScrolling: touch (iOS Momentum)

Drag:         mousedown/mousemove berechnet scrollLeft Delta × 1.2
Touch:        touchstart/touchmove für mobile Swipe

Card-Breite:  clamp(240px, 30vw, 320px) · flexShrink: 0

Pfeil-Buttons: 44×44px · opacity .25 wenn nicht scrollbar
Fade-Edges:    80px Gradient links/rechts
```

---

## Responsive Breakpoints

```
Mobile:   ≤ 768px
Tablet:   769px – 1024px
Desktop:  ≥ 1025px
```

### Mobile-Anpassungen

```
Navigation:      Hamburger → Fullscreen Overlay Menu
Hero-Title:      clamp(52px, 15vw, 80px)
Biografie:       Portrait ausgeblendet, 1-Spalten-Layout
Recordings:      Carousel funktioniert gleich (Touch-Swipe)
Konzerte:        1-Spalten-Grid
Kontakt:         1-Spalten-Grid
Section-Padding: 72px 24px
```

---

## Animationen

```
Hero-Elemente:   opacity 0 → 1 + translateY(24px) → 0
                 gestaffelte delays: .3s / .5s / .9s / 1.1s / 1.4s

Scroll-Indikator: slideDown 2s ease infinite
                  goldener Balken scrollt durch vertikale Linie

Scroll-Reveal:   opacity 0→1 + translateY/X(28-32px) → 0
                 Trigger: IntersectionObserver threshold 0.08

Section-Borders: 1px gradient (transparent → gold → transparent)
                 obere/untere Kante der Recordings-Section

Hover-Effekte:
  Album-Cards:   translateY(-6px) · .35s ease
  Nav-Links:     ::after Unterlinie 0→100% width · .3s
  Buttons:       background/color swap · .25s
  Footer-Links:  color → #BFA07A · .2s
```
