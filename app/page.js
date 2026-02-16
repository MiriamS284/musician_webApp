"use client";

import { useState, useEffect, useRef } from "react";

const T = {
  de: {
    nav: {
      biography: "Lebenslauf",
      repertoire: "Repertoire",
      recordings: "Aufnahmen",
      concerts: "Konzerte",
      references: "Referenzen",
      contact: "Kontakt",
    },
    hero: { instrument: "Konzertpianist", scroll: "Entdecken" },
    quote: {
      text: "Ein Philosoph am Klavier — er dringt bis zum Wesen der Werke vor und interpretiert sie mit einer seltenen, leuchtenden Tiefe.",
      source: "Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "Über den Künstler",
      title: "Lebenslauf",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    recordings: {
      label: "Diskografie",
      title: "Aufnahmen",
      listen: "Anhören",
      newLabel: "Neu",
    },
    concerts: {
      label: "Konzertkalender",
      title: "Konzerte",
      tickets: "Tickets",
      free: "Eintritt frei",
      upcoming: "Demnächst",
      all: "Alle Konzerte",
    },
    repertoire: {
      label: "Programm",
      title: "Repertoire",
      cats: ["Barock", "Klassik", "Romantik", "20. Jh."],
    },
    references: { label: "Pressestimmen", title: "Referenzen" },
    contact: {
      label: "Kontakt",
      title: "Schreiben Sie mir",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      msg: "Nachricht",
      send: "Absenden",
      ph_name: "Ihr Name",
      ph_email: "ihre@email.de",
      ph_sub: "Betreff",
      ph_msg: "Ihre Nachricht...",
      ok: "Vielen Dank. Ich melde mich in Kürze.",
      mgmt: "Management & Booking",
    },
    footer: {
      rights: "Alle Rechte vorbehalten",
      imprint: "Impressum",
      privacy: "Datenschutz",
    },
  },
  en: {
    nav: {
      biography: "Biography",
      repertoire: "Repertoire",
      recordings: "Recordings",
      concerts: "Concerts",
      references: "References",
      contact: "Contact",
    },
    hero: { instrument: "Concert Pianist", scroll: "Discover" },
    quote: {
      text: "A philosopher at the piano — he penetrates to the very essence of each work, interpreting it with rare and luminous depth.",
      source: "Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "About the Artist",
      title: "Biography",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    },
    recordings: {
      label: "Discography",
      title: "Recordings",
      listen: "Listen",
      newLabel: "New",
    },
    concerts: {
      label: "Concert Calendar",
      title: "Concerts",
      tickets: "Tickets",
      free: "Free entry",
      upcoming: "Upcoming",
      all: "All Concerts",
    },
    repertoire: {
      label: "Programme",
      title: "Repertoire",
      cats: ["Baroque", "Classicism", "Romanticism", "20th C."],
    },
    references: { label: "Press Reviews", title: "References" },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      subject: "Subject",
      msg: "Message",
      send: "Send",
      ph_name: "Your name",
      ph_email: "your@email.com",
      ph_sub: "Subject",
      ph_msg: "Your message...",
      ok: "Thank you. I will be in touch shortly.",
      mgmt: "Management & Booking",
    },
    footer: {
      rights: "All rights reserved",
      imprint: "Imprint",
      privacy: "Privacy Policy",
    },
  },
  ru: {
    nav: {
      biography: "Биография",
      repertoire: "Репертуар",
      recordings: "Записи",
      concerts: "Концерты",
      references: "Рецензии",
      contact: "Контакт",
    },
    hero: { instrument: "Концертный пианист", scroll: "Открыть" },
    quote: {
      text: "Философ за роялем — он проникает в самую суть произведений и интерпретирует их с редкой, светящейся глубиной.",
      source: "Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "О художнике",
      title: "Биография",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      p2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    },
    recordings: {
      label: "Дискография",
      title: "Записи",
      listen: "Слушать",
      newLabel: "Новинка",
    },
    concerts: {
      label: "Концертный календарь",
      title: "Концерты",
      tickets: "Билеты",
      free: "Вход свободный",
      upcoming: "Скоро",
      all: "Все концерты",
    },
    repertoire: {
      label: "Программа",
      title: "Репертуар",
      cats: ["Барокко", "Классицизм", "Романтизм", "XX век"],
    },
    references: { label: "Пресса", title: "Рецензии" },
    contact: {
      label: "Контакт",
      title: "Напишите мне",
      name: "Имя",
      email: "E-Mail",
      subject: "Тема",
      msg: "Сообщение",
      send: "Отправить",
      ph_name: "Ваше имя",
      ph_email: "ваш@email.com",
      ph_sub: "Тема",
      ph_msg: "Ваше сообщение...",
      ok: "Благодарю. Я свяжусь с вами в ближайшее время.",
      mgmt: "Менеджмент и бронирование",
    },
    footer: {
      rights: "Все права защищены",
      imprint: "Импрессум",
      privacy: "Конфиденциальность",
    },
  },
};

const CONCERTS = [
  {
    id: 1,
    date: "2026-03-15T19:30",
    de: "Klavierabend — Chopin & Schubert",
    en: "Piano Recital — Chopin & Schubert",
    ru: "Фортепианный вечер — Шопен & Шуберт",
    venue: "Elbphilharmonie",
    city: "Hamburg",
    status: "confirmed",
    ticket: "#",
    free: false,
  },
  {
    id: 2,
    date: "2026-04-22T20:00",
    de: "Beethoven — Klavierkonzert Nr. 5",
    en: "Beethoven — Piano Concerto No. 5",
    ru: "Бетховен — Концерт №5",
    venue: "Alte Oper",
    city: "Frankfurt",
    status: "confirmed",
    ticket: "#",
    free: false,
  },
  {
    id: 3,
    date: "2026-05-10T18:00",
    de: "Kammerkonzert — Bach & Mozart",
    en: "Chamber Concert — Bach & Mozart",
    ru: "Камерный концерт — Бах & Моцарт",
    venue: "Konzerthaus",
    city: "Wien",
    status: "announced",
    ticket: null,
    free: false,
  },
  {
    id: 4,
    date: "2026-06-03T19:00",
    de: "Open-Air Sommerkonzert",
    en: "Open-Air Summer Concert",
    ru: "Летний концерт",
    venue: "Schlossgarten",
    city: "Stuttgart",
    status: "confirmed",
    ticket: null,
    free: true,
  },
];

const RECORDINGS = [
  {
    id: 1,
    title: "Schubert: Letzte Sonaten",
    sub: "D. 958 · 959 · 960",
    label: "Deutsche Grammophon",
    year: 2024,
    isNew: true,
    bg: "linear-gradient(145deg,#2A2420,#4A3828)",
  },
  {
    id: 2,
    title: "Bach: Wohltemperiertes Klavier I",
    sub: "BWV 846–869",
    label: "ECM Records",
    year: 2023,
    isNew: false,
    bg: "linear-gradient(145deg,#1C2228,#2C3A48)",
  },
  {
    id: 3,
    title: "Chopin: Balladen & Nocturnes",
    sub: "op. 23 · 38 · 52",
    label: "Sony Classical",
    year: 2022,
    isNew: false,
    bg: "linear-gradient(145deg,#28202A,#3C2840)",
  },
  {
    id: 4,
    title: "Brahms: Klavierkonzert Nr. 2",
    sub: "op. 83 · B-Dur",
    label: "Deutsche Grammophon",
    year: 2021,
    isNew: false,
    bg: "linear-gradient(145deg,#1E2820,#2A3C2C)",
  },
  {
    id: 5,
    title: "Beethoven: Diabelli-Variationen",
    sub: "op. 120",
    label: "ECM Records",
    year: 2020,
    isNew: false,
    bg: "linear-gradient(145deg,#26221A,#3C3020)",
  },
  {
    id: 6,
    title: "Rachmaninow: Préludes",
    sub: "op. 23 & op. 32",
    label: "Sony Classical",
    year: 2019,
    isNew: false,
    bg: "linear-gradient(145deg,#221C28,#302040)",
  },
];

const REP_KEYS = ["Barock", "Klassik", "Romantik", "20Jh"];
const REPERTOIRE = {
  Barock: [
    {
      c: "Johann Sebastian Bach",
      w: [
        "Wohltemperiertes Klavier I & II",
        "Goldberg-Variationen BWV 988",
        "Partiten Nr. 1–6",
        "Englische & Französische Suiten",
      ],
    },
    { c: "Domenico Scarlatti", w: ["Ausgewählte Sonaten"] },
  ],
  Klassik: [
    {
      c: "W. A. Mozart",
      w: [
        "Sonaten KV 310, 330, 331, 457, 576",
        "Klavierkonzerte Nr. 20, 21, 23, 27",
      ],
    },
    {
      c: "Ludwig van Beethoven",
      w: [
        "Sonaten op. 13, 27/2, 53, 57, 106, 111",
        "Klavierkonzerte Nr. 1–5",
        "Diabelli-Variationen",
      ],
    },
  ],
  Romantik: [
    {
      c: "Franz Schubert",
      w: ["Sonaten D. 845, 894, 958–960", "Impromptus op. 90 & 142"],
    },
    {
      c: "Frédéric Chopin",
      w: ["Balladen Nr. 1–4", "Études op. 10 & 25", "Préludes op. 28"],
    },
    {
      c: "Johannes Brahms",
      w: ["Sonaten op. 1, 2, 5", "Klavierkonzerte Nr. 1 & 2"],
    },
    { c: "Franz Liszt", w: ["Sonate h-Moll", "Années de Pèlerinage"] },
  ],
  "20Jh": [
    {
      c: "Sergei Rachmaninow",
      w: ["Klavierkonzerte Nr. 1–4", "Préludes op. 23 & 32"],
    },
    { c: "Alexander Skrjabin", w: ["Sonaten Nr. 3, 5, 9, 10"] },
    { c: "Dmitri Schostakowitsch", w: ["Präludien & Fugen op. 87"] },
  ],
};

const REFERENCES = [
  {
    q: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pianista Brenner virtuosum et expressivum artem demonstrat — rarissima qualitas in musico tam iuvene atque tam profundo.",
    src: "Prof. Lorem Ipsum",
    org: "Hochschule für Musik Frankfurt, 2024",
  },
  {
    q: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, mollit anim id est laborum.",
    src: "Dr. Consectetur Adipiscing",
    org: "Musikhochschule Wien, 2023",
  },
  {
    q: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis architecto.",
    src: "Lorem Ipsum — Wümme-Zeitung",
    org: "02.03.2024",
  },
  {
    q: "At vero eos et accusamus iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati.",
    src: "Consectetur — Weser-Kurier",
    org: "16.04.2023",
  },
];

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useInView(threshold) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  const t = threshold || 0.08;
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold: t },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

function Reveal({ children, delay, from }) {
  const d = delay || 0;
  const [ref, v] = useInView(0.08);
  const dir =
    from === "left"
      ? "translateX(-32px)"
      : from === "right"
        ? "translateX(32px)"
        : "translateY(28px)";
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : dir,
        transition:
          "opacity 0.75s ease " + d + "s, transform 0.75s ease " + d + "s",
      }}
    >
      {children}
    </div>
  );
}

function useHorizontalDrag(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false,
      startX = 0,
      scrollLeft = 0;
    const down = (e) => {
      isDown = true;
      el.style.cursor = "grabbing";
      startX = (e.pageX || e.touches[0].pageX) - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const up = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = (e.pageX || e.touches[0].pageX) - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX) * 1.2;
    };
    el.addEventListener("mousedown", down);
    el.addEventListener("mouseleave", up);
    el.addEventListener("mouseup", up);
    el.addEventListener("mousemove", move);
    el.addEventListener("touchstart", down, { passive: true });
    el.addEventListener("touchend", up);
    el.addEventListener("touchmove", move, { passive: false });
    return () => {
      el.removeEventListener("mousedown", down);
      el.removeEventListener("mouseleave", up);
      el.removeEventListener("mouseup", up);
      el.removeEventListener("mousemove", move);
      el.removeEventListener("touchstart", down);
      el.removeEventListener("touchend", up);
      el.removeEventListener("touchmove", move);
    };
  }, [ref]);
}

function Label({ text }) {
  return (
    <p
      style={{
        fontFamily: "Jost,sans-serif",
        fontSize: 10,
        letterSpacing: ".28em",
        textTransform: "uppercase",
        color: "#BFA07A",
        marginBottom: 14,
      }}
    >
      {text}
    </p>
  );
}

function Divider() {
  return (
    <div
      style={{ width: 44, height: 1, background: "#BFA07A", marginTop: 18 }}
    />
  );
}

function RecordingsSection({ tr }) {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  useHorizontalDrag(scrollRef);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section
      id="recordings"
      style={{
        padding: "108px 0 108px",
        background: "#090807",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(to right,transparent,rgba(191,160,122,.18),transparent)",
        }}
      />

      {/* Header with arrows */}
      <div
        style={{
          padding: "0 52px",
          marginBottom: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Reveal>
          <div>
            <Label text={tr.recordings.label} />
            <h2
              style={{
                fontSize: "clamp(34px,5vw,56px)",
                fontWeight: 300,
                color: "#F0ECE4",
                letterSpacing: "-.01em",
              }}
            >
              {tr.recordings.title}
            </h2>
            <Divider />
          </div>
        </Reveal>
        {/* Arrow buttons */}
        <div
          style={{
            display: "flex",
            gap: 10,
            alignItems: "center",
            paddingBottom: 4,
          }}
        >
          <button
            onClick={() => scroll(-1)}
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(240,236,228,.15)",
              background: "transparent",
              cursor: canLeft ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .2s",
              opacity: canLeft ? 1 : 0.25,
            }}
            onMouseEnter={(e) => {
              if (canLeft) e.currentTarget.style.borderColor = "#BFA07A";
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,236,228,.15)")
            }
          >
            <span style={{ color: "#F0ECE4", fontSize: 18, lineHeight: 1 }}>
              ←
            </span>
          </button>
          <button
            onClick={() => scroll(1)}
            style={{
              width: 44,
              height: 44,
              border: "1px solid rgba(240,236,228,.15)",
              background: "transparent",
              cursor: canRight ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all .2s",
              opacity: canRight ? 1 : 0.25,
            }}
            onMouseEnter={(e) => {
              if (canRight) e.currentTarget.style.borderColor = "#BFA07A";
            }}
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "rgba(240,236,228,.15)")
            }
          >
            <span style={{ color: "#F0ECE4", fontSize: 18, lineHeight: 1 }}>
              →
            </span>
          </button>
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: 20,
          overflowX: "auto",
          paddingLeft: 52,
          paddingRight: 52,
          paddingBottom: 8,
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <style>{`.rec-scroll::-webkit-scrollbar{display:none}`}</style>
        {RECORDINGS.map((rec, i) => (
          <div
            key={rec.id}
            style={{
              flexShrink: 0,
              width: "clamp(240px,30vw,320px)",
              transition: "transform .35s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Artwork */}
            <div
              style={{
                width: "100%",
                aspectRatio: "1",
                background: rec.bg,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 44, color: "rgba(191,160,122,.2)" }}>
                  ♫
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  right: 12,
                  bottom: 12,
                  border: "1px solid rgba(191,160,122,.1)",
                }}
              />
              {rec.isNew && (
                <div style={{ position: "absolute", top: 14, right: 14 }}>
                  <span
                    className="j"
                    style={{
                      fontSize: 9,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      background: "#BFA07A",
                      color: "#0E0D0B",
                      padding: "4px 10px",
                      fontWeight: 500,
                    }}
                  >
                    {tr.recordings.newLabel}
                  </span>
                </div>
              )}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "35%",
                  background:
                    "linear-gradient(to top,rgba(9,8,7,.92),transparent)",
                }}
              />
            </div>
            {/* Info */}
            <div style={{ paddingTop: 18 }}>
              <p
                className="j"
                style={{
                  fontSize: 10,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "rgba(191,160,122,.55)",
                  marginBottom: 7,
                }}
              >
                {rec.label} · {rec.year}
              </p>
              <h3
                style={{
                  fontSize: 19,
                  fontWeight: 400,
                  color: "#F0ECE4",
                  lineHeight: 1.2,
                  marginBottom: 5,
                }}
              >
                {rec.title}
              </h3>
              <p
                className="j"
                style={{
                  fontSize: 13,
                  color: "rgba(240,236,228,.38)",
                  marginBottom: 16,
                }}
              >
                {rec.sub}
              </p>
              <button
                className="bg"
                style={{ fontSize: 10, padding: "8px 20px" }}
              >
                {tr.recordings.listen}
              </button>
            </div>
          </div>
        ))}
        {/* Fade edge right */}
      </div>

      {/* Right fade gradient */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to left,#090807,transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />
      {/* Left fade gradient */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 80,
          background: "linear-gradient(to right,#090807,transparent)",
          pointerEvents: "none",
          zIndex: 2,
          opacity: canLeft ? 1 : 0,
          transition: "opacity .3s",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(to right,transparent,rgba(191,160,122,.18),transparent)",
        }}
      />
    </section>
  );
}

export default function App() {
  const [locale, setLocale] = useState("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    msg: "",
  });
  const [sent, setSent] = useState(false);
  const scrollY = useScrollY();
  const tr = T[locale];
  const headerSolid = scrollY > 60 || menuOpen;
  const py = scrollY * 0.4;

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString(
      locale === "ru" ? "ru-RU" : locale === "en" ? "en-GB" : "de-DE",
      { day: "2-digit", month: "short", year: "numeric" },
    );
  const fmtTime = (d) =>
    new Date(d).toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const cTitle = (c) => c[locale] || c.de;
  const upcoming = CONCERTS.filter((c) => new Date(c.date) >= new Date());

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const NAV = Object.entries(tr.nav);

  return (
    <div
      style={{
        fontFamily: "Cormorant Garamond,Georgia,serif",
        background: "#0E0D0B",
        color: "#F0ECE4",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        ::selection{background:#BFA07A;color:#0E0D0B}
        ::-webkit-scrollbar{width:2px}
        ::-webkit-scrollbar-thumb{background:#BFA07A}
        .j{font-family:Jost,sans-serif}
        .hl{position:relative;background:none;border:none;cursor:pointer;padding-bottom:3px}
        .hl::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;background:#BFA07A;transition:width .3s}
        .hl:hover::after{width:100%}
        .bg{border:1px solid #BFA07A;color:#BFA07A;background:transparent;padding:11px 26px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .25s;font-family:Jost,sans-serif}
        .bg:hover{background:#BFA07A;color:#0E0D0B}
        .bw{border:1px solid rgba(240,236,228,.25);color:#F0ECE4;background:transparent;padding:11px 26px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .25s;font-family:Jost,sans-serif}
        .bw:hover{background:#F0ECE4;color:#0E0D0B}
        .bp{background:#BFA07A;color:#0E0D0B;border:none;padding:14px 36px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;font-family:Jost,sans-serif;font-weight:500;transition:background .2s}
        .bp:hover{background:#D4B48C}
        input,textarea{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(240,236,228,.18);padding:13px 0;font-size:16px;color:#F0ECE4;outline:none;font-family:Jost,sans-serif;font-weight:300;transition:border-color .2s}
        input:focus,textarea:focus{border-bottom-color:#BFA07A}
        input::placeholder,textarea::placeholder{color:rgba(240,236,228,.28);font-size:14px}
        textarea{resize:none;height:110px}
        .cr{border-bottom:1px solid rgba(240,236,228,.07);transition:background .2s}
        .cr:hover{background:rgba(191,160,122,.05)}
        @keyframes fu{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes sd{0%{transform:translateY(0);opacity:.8}100%{transform:translateY(120%);opacity:0}}

        @media(max-width:768px){
          .dn{display:none!important}
          .df{display:flex!important}
          .sp{padding:72px 24px!important}
          .hc{padding:0 24px 72px!important}
          .ht{font-size:clamp(52px,15vw,80px)!important}
          .bg2{grid-template-columns:1fr!important;gap:44px!important}
          .rg{grid-template-columns:1fr!important}
          .cg{grid-template-columns:1fr!important;gap:6px!important}
          .ctg{grid-template-columns:1fr!important;gap:52px!important}
          .rpg{grid-template-columns:1fr!important}
          .fi{flex-direction:column!important;align-items:flex-start!important;gap:20px!important}
        }
        @media(min-width:769px) and (max-width:1024px){
          .rg{grid-template-columns:repeat(2,1fr)!important}
          .bg2{gap:48px!important}
        }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          height: 68,
          padding: "0 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: headerSolid ? "rgba(14,13,11,.96)" : "transparent",
          backdropFilter: headerSolid ? "blur(12px)" : "none",
          borderBottom: headerSolid
            ? "1px solid rgba(191,160,122,.12)"
            : "none",
          transition: "all .35s",
        }}
      >
        <button
          onClick={() => go("hero")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: 19,
              fontWeight: 300,
              letterSpacing: ".07em",
              color: "#F0ECE4",
              lineHeight: 1.1,
            }}
          >
            Mustermann
          </div>
          <div
            style={{
              fontSize: 19,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: ".07em",
              color: "#F0ECE4",
              lineHeight: 1.1,
            }}
          >
            Konzertpianist
          </div>
        </button>

        <nav
          className="j dn"
          style={{ display: "flex", alignItems: "center", gap: 24 }}
        >
          {NAV.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="hl j"
              style={{
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "rgba(240,236,228,.6)",
                fontWeight: 300,
                transition: "color .2s",
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingBottom: 3,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F0ECE4")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(240,236,228,.6)")
              }
            >
              {label}
            </button>
          ))}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 16,
              marginLeft: 4,
              borderLeft: "1px solid rgba(191,160,122,.2)",
            }}
          >
            {["de", "en", "ru"].map((l, idx) => (
              <span key={l} style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setLocale(l)}
                  className="j"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "4px 7px",
                    color: locale === l ? "#BFA07A" : "rgba(240,236,228,.3)",
                    fontWeight: locale === l ? 500 : 300,
                    transition: "color .2s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
                {idx < 2 && (
                  <span
                    style={{ color: "rgba(191,160,122,.25)", fontSize: 10 }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="df"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
            padding: 4,
          }}
        >
          <span
            style={{
              display: "block",
              width: 26,
              height: 1,
              background: "#F0ECE4",
              transition: "all .3s",
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 26,
              height: 1,
              background: "#F0ECE4",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity .3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 26,
              height: 1,
              background: "#F0ECE4",
              transition: "all .3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </header>

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "#0E0D0B",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          transition: "opacity .4s",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {NAV.map(([id, label]) => (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 34,
              fontWeight: 300,
              color: "#F0ECE4",
              letterSpacing: ".06em",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA07A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#F0ECE4")}
          >
            {label}
          </button>
        ))}
        <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
          {["de", "en", "ru"].map((l) => (
            <button
              key={l}
              onClick={() => setLocale(l)}
              className="j"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 13,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                padding: "6px 10px",
                color: locale === l ? "#BFA07A" : "rgba(240,236,228,.35)",
                borderBottom:
                  locale === l ? "1px solid #BFA07A" : "1px solid transparent",
                transition: "all .2s",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section
        id="hero"
        style={{
          height: "100vh",
          minHeight: 580,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-18%",
            transform: "translateY(" + py + "px)",
            willChange: "transform",
            background:
              "linear-gradient(155deg,#111009 0%,#1E1A14 40%,#2C2018 70%,#181410 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 16% 62%, rgba(191,160,122,.2) 0%,transparent 48%), radial-gradient(ellipse at 82% 18%, rgba(191,160,122,.06) 0%,transparent 40%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "4%",
              top: "8%",
              bottom: "8%",
              width: "36%",
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                height: "42%",
                alignItems: "flex-start",
                opacity: 0.055,
              }}
            >
              {Array.from({ length: 26 }).map((_, i) => {
                const w = [0, 2, 4, 5, 7, 9, 11].includes(i % 12);
                return (
                  <div
                    key={i}
                    style={{
                      width: w ? 28 : 17,
                      height: w ? "100%" : "60%",
                      background: w ? "#F0ECE4" : "#0E0D0B",
                      borderRadius: "0 0 4px 4px",
                      border: "1px solid rgba(255,255,255,.05)",
                      flexShrink: 0,
                    }}
                  />
                );
              })}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "26%",
              left: 0,
              right: 0,
              height: 1,
              background:
                "linear-gradient(to right,transparent,rgba(191,160,122,.2),transparent)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 200,
            background: "linear-gradient(to bottom,transparent,#0E0D0B)",
            zIndex: 1,
          }}
        />

        <div
          className="hc"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 52px 92px",
            maxWidth: 960,
            width: "100%",
          }}
        >
          <p
            className="j"
            style={{
              fontSize: 11,
              letterSpacing: ".32em",
              textTransform: "uppercase",
              color: "#BFA07A",
              marginBottom: 28,
              opacity: 0,
              animation: "fu .8s ease .3s forwards",
            }}
          >
            {tr.hero.instrument}
          </p>
          <h1
            className="ht"
            style={{
              fontSize: "clamp(60px,10vw,118px)",
              fontWeight: 300,
              color: "#F0ECE4",
              lineHeight: 0.87,
              letterSpacing: "-.02em",
              opacity: 0,
              animation: "fu .95s ease .5s forwards",
            }}
          >
            Mustermann
            <br />
            <em style={{ fontWeight: 300, color: "#CCB898" }}>
              Konzertpianist
            </em>
          </h1>
          <div
            style={{
              marginTop: 38,
              width: 60,
              height: 1,
              background: "linear-gradient(to right,#BFA07A,transparent)",
              opacity: 0,
              animation: "fu .5s ease .9s forwards",
            }}
          />
          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "fu .6s ease 1.1s forwards",
            }}
          >
            <button className="bg" onClick={() => go("contact")}>
              {tr.nav.contact}
            </button>
            <button className="bw" onClick={() => go("recordings")}>
              {tr.nav.recordings}
            </button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
            opacity: 0,
            animation: "fu .5s ease 1.4s forwards",
            zIndex: 2,
          }}
        >
          <span
            className="j"
            style={{
              fontSize: 9,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "rgba(191,160,122,.55)",
              writingMode: "vertical-rl",
            }}
          >
            {tr.hero.scroll}
          </span>
          <div
            style={{
              width: 1,
              height: 56,
              background: "rgba(191,160,122,.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                width: "100%",
                height: "45%",
                background: "#BFA07A",
                animation: "sd 2s ease infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section
        style={{
          background: "#0E0D0B",
          padding: "88px 52px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 50% 50%, rgba(191,160,122,.05) 0%,transparent 65%)",
          }}
        />
        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "#BFA07A",
                  fontSize: 44,
                  lineHeight: 1,
                  display: "block",
                  marginBottom: 10,
                  opacity: 0.45,
                }}
              >
                ❝
              </span>
              <blockquote
                style={{
                  fontSize: "clamp(19px,3vw,28px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1.62,
                  color: "#CBBFA8",
                }}
              >
                {tr.quote.text}
              </blockquote>
              <div
                style={{
                  width: 30,
                  height: 1,
                  background: "#BFA07A",
                  margin: "26px auto 0",
                }}
              />
              <p
                className="j"
                style={{
                  marginTop: 16,
                  fontSize: 11,
                  letterSpacing: ".24em",
                  textTransform: "uppercase",
                  color: "rgba(191,160,122,.55)",
                }}
              >
                {tr.quote.source}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIOGRAPHY */}
      <section
        id="biography"
        className="sp"
        style={{ padding: "108px 52px", background: "#111009" }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div
            className="bg2"
            style={{
              display: "grid",
              gridTemplateColumns: "320px 1fr",
              gap: 72,
              alignItems: "start",
            }}
          >
            <div className="dn" style={{ display: "block" }}>
              <Reveal from="left">
                <div style={{ position: "sticky", top: 88 }}>
                  <div
                    style={{
                      aspectRatio: "3/4",
                      background: "linear-gradient(155deg,#2A2420,#1A1612)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: 14,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        border: "1px solid rgba(191,160,122,.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <span
                        style={{ color: "#BFA07A", fontSize: 20, opacity: 0.6 }}
                      >
                        ♪
                      </span>
                    </div>
                    <span
                      className="j"
                      style={{
                        fontSize: 9,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        color: "rgba(191,160,122,.35)",
                      }}
                    >
                      Künstlerfoto
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        width: 26,
                        height: 26,
                        borderTop: "1px solid rgba(191,160,122,.3)",
                        borderLeft: "1px solid rgba(191,160,122,.3)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 14,
                        right: 14,
                        width: 26,
                        height: 26,
                        borderBottom: "1px solid rgba(191,160,122,.3)",
                        borderRight: "1px solid rgba(191,160,122,.3)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "28%",
                        background:
                          "linear-gradient(to top,rgba(14,13,11,.8),transparent)",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#F0ECE4",
                      marginTop: 20,
                      letterSpacing: ".04em",
                    }}
                  >
                    Alexander Brenner
                  </p>
                  <p
                    className="j"
                    style={{
                      fontSize: 11,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "#BFA07A",
                      marginTop: 6,
                    }}
                  >
                    {tr.hero.instrument}
                  </p>
                </div>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <Label text={tr.bio.label} />
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  style={{
                    fontSize: "clamp(34px,5vw,56px)",
                    fontWeight: 300,
                    letterSpacing: "-.01em",
                    color: "#F0ECE4",
                    lineHeight: 1,
                  }}
                >
                  {tr.bio.title}
                </h2>
                <Divider />
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(240,236,228,.65)",
                    fontWeight: 300,
                    marginTop: 36,
                  }}
                >
                  {tr.bio.p1}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p
                  style={{
                    fontSize: 17,
                    lineHeight: 1.9,
                    color: "rgba(240,236,228,.5)",
                    fontWeight: 300,
                    marginTop: 20,
                  }}
                >
                  {tr.bio.p2}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div
                  style={{
                    marginTop: 44,
                    padding: "26px 30px",
                    background: "rgba(191,160,122,.06)",
                    borderLeft: "2px solid #BFA07A",
                  }}
                >
                  <p
                    className="j"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "#BFA07A",
                      marginBottom: 14,
                    }}
                  >
                    Auszeichnungen · Awards · Награды
                  </p>
                  {[
                    "1. Preis — Int. Lorem-Ipsum-Wettbewerb, Wien 2019",
                    "Stipendiat der Deutschen Ipsum-Stiftung 2017–2020",
                    "Sonderpreis — Dolor-sit-amet-Festival, Leipzig 2016",
                  ].map((a, i) => (
                    <p
                      key={i}
                      className="j"
                      style={{
                        fontSize: 13,
                        color: "rgba(240,236,228,.5)",
                        lineHeight: 1.7,
                        marginBottom: i < 2 ? 7 : 0,
                      }}
                    >
                      — {a}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RECORDINGS — horizontal scroll carousel */}
      <RecordingsSection tr={tr} />

      {/* CONCERTS */}
      <section
        id="concerts"
        className="sp"
        style={{ padding: "108px 52px", background: "#111009" }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Reveal>
            <Label text={tr.concerts.label} />
            <h2
              style={{
                fontSize: "clamp(34px,5vw,56px)",
                fontWeight: 300,
                color: "#F0ECE4",
                letterSpacing: "-.01em",
              }}
            >
              {tr.concerts.title}
            </h2>
            <Divider />
          </Reveal>
          <div style={{ marginTop: 52 }}>
            {upcoming.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <div className="cr" style={{ padding: "20px 0" }}>
                  <div
                    className="cg"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "170px 1fr auto",
                      gap: 20,
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        className="j"
                        style={{
                          fontSize: 12,
                          letterSpacing: ".07em",
                          color: "rgba(191,160,122,.65)",
                          textTransform: "uppercase",
                        }}
                      >
                        {fmtDate(c.date)}
                      </p>
                      <p
                        className="j"
                        style={{
                          fontSize: 11,
                          color: "rgba(240,236,228,.35)",
                          marginTop: 3,
                        }}
                      >
                        {fmtTime(c.date)} Uhr
                      </p>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: 18,
                          fontWeight: 400,
                          color: "#F0ECE4",
                          marginBottom: 4,
                        }}
                      >
                        {cTitle(c)}
                      </h3>
                      <p
                        className="j"
                        style={{ fontSize: 13, color: "rgba(240,236,228,.38)" }}
                      >
                        {c.venue} · {c.city}
                      </p>
                      {c.status === "announced" && (
                        <span
                          className="j"
                          style={{
                            fontSize: 10,
                            letterSpacing: ".14em",
                            textTransform: "uppercase",
                            color: "#BFA07A",
                            display: "block",
                            marginTop: 4,
                          }}
                        >
                          {tr.concerts.upcoming}
                        </span>
                      )}
                    </div>
                    <div>
                      {c.ticket && (
                        <button
                          className="bg"
                          style={{ fontSize: 10, padding: "8px 18px" }}
                        >
                          {tr.concerts.tickets}
                        </button>
                      )}
                      {c.free && (
                        <span
                          className="j"
                          style={{
                            fontSize: 11,
                            color: "rgba(191,160,122,.55)",
                            letterSpacing: ".1em",
                            textTransform: "uppercase",
                          }}
                        >
                          {tr.concerts.free}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 40, textAlign: "right" }}>
              <button className="bw">{tr.concerts.all} →</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REPERTOIRE */}
      <section
        id="repertoire"
        className="sp"
        style={{
          padding: "108px 52px",
          background: "#0D0C0A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 80% 50%, rgba(191,160,122,.04) 0%,transparent 55%)",
          }}
        />
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal>
            <Label text={tr.repertoire.label} />
            <h2
              style={{
                fontSize: "clamp(34px,5vw,56px)",
                fontWeight: 300,
                color: "#F0ECE4",
                letterSpacing: "-.01em",
              }}
            >
              {tr.repertoire.title}
            </h2>
            <Divider />
          </Reveal>
          <Reveal delay={0.05}>
            <div
              style={{
                display: "flex",
                gap: 0,
                borderBottom: "1px solid rgba(240,236,228,.08)",
                marginTop: 44,
                marginBottom: 40,
                overflowX: "auto",
              }}
            >
              {tr.repertoire.cats.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(i)}
                  className="j"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom:
                      activeCat === i
                        ? "2px solid #BFA07A"
                        : "2px solid transparent",
                    cursor: "pointer",
                    padding: "10px 22px",
                    fontSize: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: activeCat === i ? "#F0ECE4" : "rgba(240,236,228,.3)",
                    marginBottom: -1,
                    transition: "all .2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
          <div
            className="rpg"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 52px",
            }}
          >
            {(REPERTOIRE[REP_KEYS[activeCat]] || []).map((item, i) => (
              <Reveal key={activeCat + "-" + i} delay={i * 0.06}>
                <div
                  style={{
                    paddingBottom: 28,
                    marginBottom: 28,
                    borderBottom: "1px solid rgba(240,236,228,.07)",
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#CBBFA8",
                      marginBottom: 12,
                    }}
                  >
                    {item.c}
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px 10px",
                    }}
                  >
                    {item.w.map((w) => (
                      <span
                        key={w}
                        className="j"
                        style={{
                          fontSize: 12,
                          color: "rgba(240,236,228,.4)",
                          padding: "3px 10px",
                          border: "1px solid rgba(240,236,228,.09)",
                        }}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section
        id="references"
        className="sp"
        style={{ padding: "108px 52px", background: "#111009" }}
      >
        <div style={{ maxWidth: 940, margin: "0 auto" }}>
          <Reveal>
            <Label text={tr.references.label} />
            <h2
              style={{
                fontSize: "clamp(34px,5vw,56px)",
                fontWeight: 300,
                color: "#F0ECE4",
                letterSpacing: "-.01em",
              }}
            >
              {tr.references.title}
            </h2>
            <Divider />
          </Reveal>
          <div style={{ marginTop: 56 }}>
            {REFERENCES.map((ref, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 1fr",
                    gap: 20,
                    paddingBottom: 44,
                    marginBottom: 44,
                    borderBottom: "1px solid rgba(240,236,228,.07)",
                  }}
                >
                  <span
                    style={{
                      color: "#BFA07A",
                      fontSize: 26,
                      lineHeight: 1.2,
                      opacity: 0.55,
                    }}
                  >
                    ❝
                  </span>
                  <div>
                    <blockquote
                      style={{
                        fontSize: 17,
                        fontStyle: "italic",
                        fontWeight: 300,
                        lineHeight: 1.85,
                        color: "rgba(240,236,228,.65)",
                        marginBottom: 16,
                      }}
                    >
                      {ref.q}
                    </blockquote>
                    <p
                      className="j"
                      style={{
                        fontSize: 12,
                        fontWeight: 500,
                        color: "#CBBFA8",
                        letterSpacing: ".04em",
                      }}
                    >
                      {ref.src}
                    </p>
                    <p
                      className="j"
                      style={{
                        fontSize: 11,
                        color: "rgba(240,236,228,.3)",
                        marginTop: 3,
                        letterSpacing: ".06em",
                      }}
                    >
                      {ref.org}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="sp"
        style={{
          padding: "108px 52px",
          background: "#090807",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(ellipse at 25% 55%, rgba(191,160,122,.05) 0%,transparent 50%)",
          }}
        />
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            className="ctg"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 96,
              alignItems: "start",
            }}
          >
            <Reveal from="left">
              <Label text={tr.contact.label} />
              <h2
                style={{
                  fontSize: "clamp(32px,5vw,56px)",
                  fontWeight: 300,
                  color: "#F0ECE4",
                  letterSpacing: "-.01em",
                  lineHeight: 1.05,
                }}
              >
                {tr.contact.title}
              </h2>
              <Divider />
              <div style={{ marginTop: 44 }}>
                {[
                  { l: "E-Mail", v: "kontakt@alexanderbrenner.de" },
                  {
                    l: tr.contact.mgmt,
                    v: "Konzertdirektion Lorem GmbH\nmanagement@lorem.de",
                  },
                  { l: "Booking", v: "+49 40 123 456 78" },
                ].map((item) => (
                  <div key={item.l} style={{ marginBottom: 28 }}>
                    <p
                      className="j"
                      style={{
                        fontSize: 10,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        color: "rgba(191,160,122,.55)",
                        marginBottom: 6,
                      }}
                    >
                      {item.l}
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        color: "rgba(240,236,228,.65)",
                        fontWeight: 300,
                        whiteSpace: "pre-line",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.v}
                    </p>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 40,
                  paddingTop: 28,
                  borderTop: "1px solid rgba(240,236,228,.07)",
                  display: "flex",
                  gap: 20,
                  flexWrap: "wrap",
                }}
              >
                {["YouTube", "Instagram", "Spotify", "Facebook"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="j"
                    style={{
                      color: "rgba(240,236,228,.28)",
                      textDecoration: "none",
                      fontSize: 11,
                      letterSpacing: ".15em",
                      textTransform: "uppercase",
                      transition: "color .2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#BFA07A")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(240,236,228,.28)")
                    }
                  >
                    {s}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal from="right" delay={0.1}>
              {sent ? (
                <div style={{ textAlign: "center", padding: "52px 0" }}>
                  <div
                    style={{ fontSize: 48, color: "#BFA07A", marginBottom: 18 }}
                  >
                    ✓
                  </div>
                  <p
                    style={{ fontSize: 22, fontWeight: 300, color: "#F0ECE4" }}
                  >
                    {tr.contact.ok}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: 26 }}
                >
                  {[
                    {
                      l: tr.contact.name,
                      k: "name",
                      t: "text",
                      ph: tr.contact.ph_name,
                    },
                    {
                      l: tr.contact.email,
                      k: "email",
                      t: "email",
                      ph: tr.contact.ph_email,
                    },
                    {
                      l: tr.contact.subject,
                      k: "subject",
                      t: "text",
                      ph: tr.contact.ph_sub,
                    },
                  ].map((f) => (
                    <div key={f.k}>
                      <label
                        className="j"
                        style={{
                          fontSize: 10,
                          letterSpacing: ".22em",
                          textTransform: "uppercase",
                          color: "rgba(191,160,122,.55)",
                          display: "block",
                          marginBottom: 8,
                        }}
                      >
                        {f.l}
                      </label>
                      <input
                        type={f.t}
                        placeholder={f.ph}
                        value={form[f.k]}
                        onChange={(e) =>
                          setForm((s) => ({ ...s, [f.k]: e.target.value }))
                        }
                        required
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      className="j"
                      style={{
                        fontSize: 10,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        color: "rgba(191,160,122,.55)",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      {tr.contact.msg}
                    </label>
                    <textarea
                      placeholder={tr.contact.ph_msg}
                      value={form.msg}
                      onChange={(e) =>
                        setForm((s) => ({ ...s, msg: e.target.value }))
                      }
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bp"
                    style={{ alignSelf: "flex-start", marginTop: 6 }}
                  >
                    {tr.contact.send}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#070605",
          padding: "34px 52px",
          borderTop: "1px solid rgba(191,160,122,.1)",
        }}
      >
        <div
          className="fi"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "#F0ECE4",
                letterSpacing: ".06em",
              }}
            >
              Mustermann <em>Konzertpianist</em>
            </p>
            <p
              className="j"
              style={{
                fontSize: 11,
                color: "rgba(240,236,228,.22)",
                marginTop: 4,
                letterSpacing: ".1em",
              }}
            >
              © 2026 · {tr.footer.rights}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              flexWrap: "wrap",
            }}
          >
            {[tr.footer.imprint, tr.footer.privacy].map((l) => (
              <a
                key={l}
                href="#"
                className="j"
                style={{
                  color: "rgba(240,236,228,.22)",
                  textDecoration: "none",
                  fontSize: 11,
                  letterSpacing: ".13em",
                  textTransform: "uppercase",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA07A")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(240,236,228,.22)")
                }
              >
                {l}
              </a>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: 16,
                borderLeft: "1px solid rgba(191,160,122,.12)",
              }}
            >
              {["de", "en", "ru"].map((l, idx) => (
                <span key={l} style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={() => setLocale(l)}
                    className="j"
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: 11,
                      letterSpacing: ".13em",
                      textTransform: "uppercase",
                      padding: "4px 7px",
                      color: locale === l ? "#BFA07A" : "rgba(240,236,228,.22)",
                      transition: "color .2s",
                    }}
                  >
                    {l.toUpperCase()}
                  </button>
                  {idx < 2 && (
                    <span
                      style={{ color: "rgba(191,160,122,.15)", fontSize: 10 }}
                    >
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
