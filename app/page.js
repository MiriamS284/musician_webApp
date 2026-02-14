"use client";
import { useState, useEffect, useRef } from "react";

const translations = {
  de: {
    nav: {
      biography: "Biografie",
      concerts: "Konzerte",
      gallery: "Galerie",
      presskit: "Presskit",
      contact: "Kontakt",
    },
    hero: { instrument: "Konzertpianist" },
    quote: {
      text: "Ein Philosoph am Klavier — Stepanov dringt bis zum Wesen der Werke vor.",
      source: "— Wümme-Zeitung",
    },
    bio: {
      label: "Über den Künstler",
      title: "Biografie",
      text1:
        "Alexander Brenner zählt zu den bedeutendsten Pianisten seiner Generation. Seine Interpretationen verbinden technische Virtuosität mit einer seltenen musikalischen Tiefe, die Kritiker und Publikum gleichermaßen bewegt.",
      text2:
        "Er konzertiert in den renommiertesten Sälen Europas — von der Elbphilharmonie über die Alte Oper Frankfurt bis zum Konzerthaus Wien. Sein Repertoire umfasst die großen Werke der Klavierliteratur von Bach bis zur Moderne.",
      more: "Vollständige Biografie",
    },
    concerts: {
      label: "Veranstaltungen",
      title: "Konzerte",
      upcoming: "Bevorstehend",
      past: "Vergangen",
      tickets: "Tickets",
      free: "Eintritt frei",
      noMore: "Alle Konzerte ansehen",
      cancelled: "Abgesagt",
    },
    presskit: {
      label: "Für die Presse",
      title: "Presskit",
      desc: "Biografien, Pressefotos und technische Unterlagen stehen hier zum Download bereit.",
      download: "Herunterladen",
    },
    contact: {
      label: "Kontakt",
      title: "Schreiben Sie mir",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Absenden",
      placeholder_name: "Ihr Name",
      placeholder_email: "ihre@email.de",
      placeholder_message: "Ihre Nachricht...",
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
      concerts: "Concerts",
      gallery: "Gallery",
      presskit: "Press Kit",
      contact: "Contact",
    },
    hero: { instrument: "Concert Pianist" },
    quote: {
      text: "A philosopher at the piano — Brenner penetrates to the very essence of each work.",
      source: "— Frankfurter Allgemeine",
    },
    bio: {
      label: "About the Artist",
      title: "Biography",
      text1:
        "Alexander Brenner stands among the most significant pianists of his generation. His interpretations unite technical virtuosity with a rare musical depth that moves critics and audiences alike.",
      text2:
        "He performs in Europe's most prestigious concert halls — from the Elbphilharmonie to the Konzerthaus Wien. His repertoire spans the great works of piano literature from Bach to the contemporary.",
      more: "Full Biography",
    },
    concerts: {
      label: "Events",
      title: "Concerts",
      upcoming: "Upcoming",
      past: "Past",
      tickets: "Tickets",
      free: "Free entry",
      noMore: "View all concerts",
      cancelled: "Cancelled",
    },
    presskit: {
      label: "For the Press",
      title: "Press Kit",
      desc: "Biographies, press photos and technical documents are available for download here.",
      download: "Download",
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      placeholder_name: "Your name",
      placeholder_email: "your@email.com",
      placeholder_message: "Your message...",
    },
    footer: {
      rights: "All rights reserved",
      imprint: "Imprint",
      privacy: "Privacy",
    },
  },
};

const concerts = [
  {
    id: 1,
    date: "2026-03-15T19:30",
    title: "Klavierabend — Chopin & Schubert",
    venue: "Elbphilharmonie",
    city: "Hamburg",
    status: "confirmed",
    ticketUrl: "#",
    isFree: false,
  },
  {
    id: 2,
    date: "2026-04-22T20:00",
    title: "Beethoven Klavierkonzert Nr. 5",
    venue: "Alte Oper",
    city: "Frankfurt",
    status: "confirmed",
    ticketUrl: "#",
    isFree: false,
  },
  {
    id: 3,
    date: "2026-05-10T18:00",
    title: "Kammerkonzert — Bach & Mozart",
    venue: "Konzerthaus",
    city: "Wien",
    status: "announced",
    ticketUrl: null,
    isFree: false,
  },
  {
    id: 4,
    date: "2026-06-03T19:00",
    title: "Open Air Sommerkonzert",
    venue: "Schlossgarten",
    city: "Stuttgart",
    status: "confirmed",
    ticketUrl: null,
    isFree: true,
  },
];

const pressFiles = [
  {
    id: 1,
    title_de: "Biografie 2026 (Deutsch)",
    title_en: "Biography 2026 (German)",
    category: "biography",
    lang: "de",
  },
  {
    id: 2,
    title_de: "Biography 2026 (English)",
    title_en: "Biography 2026 (English)",
    category: "biography",
    lang: "en",
  },
  {
    id: 3,
    title_de: "Pressefotos — High Resolution",
    title_en: "Press Photos — High Resolution",
    category: "photos",
    lang: "both",
  },
  {
    id: 4,
    title_de: "Technischer Rider",
    title_en: "Technical Rider",
    category: "rider",
    lang: "both",
  },
];

function useScrollY() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrollY;
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function MusicianWebsite() {
  const [locale, setLocale] = useState("de");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);
  const scrollY = useScrollY();
  const t = translations[locale];

  const headerSolid = scrollY > 60;

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString(locale === "de" ? "de-DE" : "en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    return (
      d.toLocaleTimeString(locale === "de" ? "de-DE" : "en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      }) + " Uhr"
    );
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  const navLinks = [
    { id: "biography", label: t.nav.biography },
    { id: "concerts", label: t.nav.concerts },
    { id: "gallery", label: t.nav.gallery },
    { id: "presskit", label: t.nav.presskit },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div
      style={{
        fontFamily: "'Crimson Pro', 'Crimson Text', Georgia, serif",
        background: "#F8F6F2",
        color: "#2C2C2A",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; }
        ::selection { background: #C4A882; color: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #F8F6F2; }
        ::-webkit-scrollbar-thumb { background: #C4A882; }
        .sans { font-family: 'DM Sans', system-ui, sans-serif; }
        .nav-link { position: relative; }
        .nav-link::after { content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 1px; background: #C4A882; transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .concert-row { border-bottom: 1px solid #E8E4DC; transition: background 0.2s; }
        .concert-row:hover { background: #F2EDE6; }
        .btn-outline { border: 1px solid #2C2C2A; color: #2C2C2A; background: transparent; padding: 8px 20px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .btn-outline:hover { background: #2C2C2A; color: #F8F6F2; }
        .btn-accent { border: 1px solid #C4A882; color: #C4A882; background: transparent; padding: 8px 20px; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .btn-accent:hover { background: #C4A882; color: #fff; }
        .btn-primary { background: #2C2C2A; color: #F8F6F2; border: none; padding: 14px 32px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; font-family: 'DM Sans', sans-serif; }
        .btn-primary:hover { background: #1A1A18; }
        input, textarea { width: 100%; background: transparent; border: none; border-bottom: 1px solid #C8C4BC; padding: 12px 0; font-size: 15px; color: #2C2C2A; outline: none; font-family: 'DM Sans', sans-serif; transition: border-color 0.2s; }
        input:focus, textarea:focus { border-bottom-color: #2C2C2A; }
        input::placeholder, textarea::placeholder { color: #9B9B8E; font-size: 14px; }
        textarea { resize: none; height: 100px; }
        .press-row { display: flex; align-items: center; justify-content: space-between; padding: 16px 0; border-bottom: 1px solid #E8E4DC; transition: background 0.2s; }
        .press-row:hover { background: #F2EDE6; padding-left: 8px; padding-right: 8px; margin: 0 -8px; }
        .hero-img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); }
        .social-link { color: #9B9B8E; text-decoration: none; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; transition: color 0.2s; font-family: 'DM Sans', sans-serif; }
        .social-link:hover { color: #C4A882; }
        .lang-btn { background: none; border: none; cursor: pointer; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; transition: color 0.2s; font-family: 'DM Sans', sans-serif; padding: 4px 8px; }
      `}</style>

      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 40px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: headerSolid ? "rgba(248,246,242,0.97)" : "transparent",
          backdropFilter: headerSolid ? "blur(8px)" : "none",
          borderBottom: headerSolid ? "1px solid #E8E4DC" : "none",
          transition: "all 0.35s ease",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 300,
              letterSpacing: "0.06em",
              color: "#2C2C2A",
              lineHeight: 1.1,
            }}
          >
            Alexander
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#2C2C2A",
              lineHeight: 1.1,
            }}
          >
            Brenner
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          style={{ display: "flex", alignItems: "center", gap: 36 }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="nav-link sans"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#2C2C2A",
                fontWeight: 400,
              }}
            >
              {link.label}
            </button>
          ))}
          <div
            style={{
              display: "flex",
              gap: 2,
              marginLeft: 8,
              borderLeft: "1px solid #C8C4BC",
              paddingLeft: 16,
            }}
          >
            <button
              className="lang-btn"
              onClick={() => setLocale("de")}
              style={{
                color: locale === "de" ? "#C4A882" : "#9B9B8E",
                fontWeight: locale === "de" ? 500 : 400,
              }}
            >
              DE
            </button>
            <span
              style={{ color: "#C8C4BC", lineHeight: "28px", fontSize: 11 }}
            >
              |
            </span>
            <button
              className="lang-btn"
              onClick={() => setLocale("en")}
              style={{
                color: locale === "en" ? "#C4A882" : "#9B9B8E",
                fontWeight: locale === "en" ? 500 : 400,
              }}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          className="mobile-menu-btn"
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 1,
              background: "#2C2C2A",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1,
              background: "#2C2C2A",
              opacity: menuOpen ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 1,
              background: "#2C2C2A",
              transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#F8F6F2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 32,
                fontWeight: 300,
                color: "#2C2C2A",
                letterSpacing: "0.06em",
              }}
            >
              {link.label}
            </button>
          ))}
          <div style={{ display: "flex", gap: 16, marginTop: 16 }}>
            <button
              className="lang-btn"
              onClick={() => {
                setLocale("de");
                setMenuOpen(false);
              }}
              style={{
                color: locale === "de" ? "#C4A882" : "#9B9B8E",
                fontSize: 14,
              }}
            >
              Deutsch
            </button>
            <button
              className="lang-btn"
              onClick={() => {
                setLocale("en");
                setMenuOpen(false);
              }}
              style={{
                color: locale === "en" ? "#C4A882" : "#9B9B8E",
                fontSize: 14,
              }}
            >
              English
            </button>
          </div>
        </div>
      )}

      {/* HERO */}
      <section
        id="home"
        style={{
          height: "100vh",
          minHeight: 600,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #2C2C2A 0%, #4A4640 40%, #6B5E52 100%)",
            overflow: "hidden",
          }}
        >
          {/* Subtle texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 30% 50%, rgba(196,168,130,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(248,246,242,0.05) 0%, transparent 50%)",
            }}
          />
          {/* Piano keys decorative element */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "45%",
              background:
                "linear-gradient(to left, rgba(196,168,130,0.08), transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 3,
                height: "60%",
                alignItems: "flex-start",
                opacity: 0.12,
              }}
            >
              {Array.from({ length: 22 }).map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: [0, 2, 5, 7, 9, 12, 14].includes(i % 14) ? 28 : 18,
                    height: [0, 2, 5, 7, 9, 12, 14].includes(i % 14)
                      ? "100%"
                      : "60%",
                    background: [0, 2, 5, 7, 9, 12, 14].includes(i % 14)
                      ? "#F8F6F2"
                      : "#1A1A18",
                    borderRadius: "0 0 3px 3px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 48px 72px",
            maxWidth: 900,
          }}
        >
          <div
            className="sans"
            style={{
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C4A882",
              marginBottom: 24,
              opacity: 0,
              animation: "fadeUp 0.8s ease 0.3s forwards",
            }}
          >
            {t.hero.instrument}
          </div>
          <h1
            style={{
              fontSize: "clamp(56px, 9vw, 108px)",
              fontWeight: 300,
              color: "#F8F6F2",
              lineHeight: 0.9,
              letterSpacing: "-0.01em",
              opacity: 0,
              animation: "fadeUp 0.8s ease 0.5s forwards",
            }}
          >
            Alexander
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 300 }}>
              Brenner
            </span>
          </h1>
          <div
            style={{
              marginTop: 32,
              width: 48,
              height: 1,
              background: "#C4A882",
              opacity: 0,
              animation: "fadeUp 0.6s ease 0.8s forwards",
            }}
          />
          <div
            style={{
              marginTop: 32,
              display: "flex",
              gap: 16,
              opacity: 0,
              animation: "fadeUp 0.6s ease 1s forwards",
            }}
          >
            <button className="btn-accent" onClick={() => scrollTo("concerts")}>
              {t.nav.concerts}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(248,246,242,0.6)",
                fontFamily: "'DM Sans', sans-serif",
              }}
              className="nav-link"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0,
            animation: "fadeUp 0.6s ease 1.2s forwards",
          }}
        >
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, transparent, #C4A882)",
            }}
          />
          <span
            className="sans"
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C4A882",
              writingMode: "vertical-rl",
            }}
          >
            scroll
          </span>
        </div>

        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
      </section>

      {/* PRESS QUOTE */}
      <section style={{ background: "#F2EDE6", padding: "80px 48px" }}>
        <FadeIn>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#C4A882", marginBottom: 4 }}>
              ❝
            </div>
            <blockquote
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#2C2C2A",
                letterSpacing: "0.01em",
              }}
            >
              {t.quote.text}
            </blockquote>
            <p
              className="sans"
              style={{
                marginTop: 20,
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9B9B8E",
              }}
            >
              {t.quote.source}
            </p>
          </div>
        </FadeIn>
      </section>

      {/* BIOGRAPHY */}
      <section
        id="biography"
        style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Image placeholder */}
          <FadeIn delay={0}>
            <div
              style={{
                position: "relative",
                aspectRatio: "3/4",
                background: "linear-gradient(160deg, #E8E4DC, #D4CFC5)",
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
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    border: "1px solid #C4A882",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#C4A882", fontSize: 20 }}>♪</span>
                </div>
                <span
                  className="sans"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#9B9B8E",
                  }}
                >
                  Künstlerfoto
                </span>
              </div>
              {/* Decorative corner */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  width: 32,
                  height: 32,
                  borderTop: "1px solid #C4A882",
                  borderLeft: "1px solid #C4A882",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  width: 32,
                  height: 32,
                  borderBottom: "1px solid #C4A882",
                  borderRight: "1px solid #C4A882",
                }}
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeIn delay={0.15}>
            <div>
              <p
                className="sans"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                  marginBottom: 16,
                }}
              >
                {t.bio.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  marginBottom: 32,
                  lineHeight: 1.05,
                }}
              >
                {t.bio.title}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "#C4A882",
                  marginBottom: 32,
                }}
              />
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#3C3C3A",
                  marginBottom: 20,
                  fontWeight: 300,
                }}
              >
                {t.bio.text1}
              </p>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.8,
                  color: "#5A5A58",
                  fontWeight: 300,
                }}
              >
                {t.bio.text2}
              </p>
              <button className="btn-outline sans" style={{ marginTop: 40 }}>
                {t.bio.more} →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONCERTS */}
      <section
        id="concerts"
        style={{ background: "#F2EDE6", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <p
                className="sans"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                  marginBottom: 12,
                }}
              >
                {t.concerts.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.concerts.title}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "#C4A882",
                  marginTop: 20,
                }}
              />
            </div>
          </FadeIn>

          {concerts.map((concert, i) => (
            <FadeIn key={concert.id} delay={i * 0.08}>
              <div
                className="concert-row"
                style={{
                  padding: "24px 0",
                  display: "grid",
                  gridTemplateColumns: "160px 1fr auto",
                  gap: 24,
                  alignItems: "center",
                }}
              >
                <div>
                  <div
                    className="sans"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      color: "#9B9B8E",
                      textTransform: "uppercase",
                    }}
                  >
                    {formatDate(concert.date)}
                  </div>
                  <div
                    className="sans"
                    style={{ fontSize: 12, color: "#C4A882", marginTop: 3 }}
                  >
                    {formatTime(concert.date)}
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color:
                        concert.status === "cancelled" ? "#9B9B8E" : "#2C2C2A",
                      textDecoration:
                        concert.status === "cancelled"
                          ? "line-through"
                          : "none",
                      marginBottom: 4,
                    }}
                  >
                    {concert.title}
                  </h3>
                  <p
                    className="sans"
                    style={{ fontSize: 13, color: "#9B9B8E" }}
                  >
                    {concert.venue} · {concert.city}
                  </p>
                  {concert.status === "announced" && (
                    <span
                      className="sans"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#C4A882",
                        marginTop: 4,
                        display: "block",
                      }}
                    >
                      {t.concerts.upcoming}
                    </span>
                  )}
                </div>
                <div>
                  {concert.ticketUrl && concert.status !== "cancelled" && (
                    <button className="btn-outline">
                      {t.concerts.tickets}
                    </button>
                  )}
                  {concert.isFree && concert.status !== "cancelled" && (
                    <span
                      className="sans"
                      style={{
                        fontSize: 11,
                        color: "#9B9B8E",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t.concerts.free}
                    </span>
                  )}
                  {concert.status === "cancelled" && (
                    <span
                      className="sans"
                      style={{
                        fontSize: 11,
                        color: "#C0392B",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {t.concerts.cancelled}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div style={{ marginTop: 48, textAlign: "right" }}>
              <button className="btn-outline">{t.concerts.noMore} →</button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section
        id="gallery"
        style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
      >
        <FadeIn>
          <div
            style={{
              marginBottom: 56,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <p
                className="sans"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                  marginBottom: 12,
                }}
              >
                {t.nav.gallery}
              </p>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                }}
              >
                {t.nav.gallery}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "#C4A882",
                  marginTop: 20,
                }}
              />
            </div>
            <button className="btn-outline" style={{ marginBottom: 8 }}>
              {t.nav.gallery} →
            </button>
          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {[
            { aspect: "4/5", delay: 0 },
            { aspect: "4/3", delay: 0.1, gridRow: "span 1" },
            { aspect: "4/5", delay: 0.2 },
          ].map((item, i) => (
            <FadeIn key={i} delay={item.delay}>
              <div
                style={{
                  aspectRatio: item.aspect,
                  background: `linear-gradient(${135 + i * 30}deg, #E8E4DC, #D4CFC5)`,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.02)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <span
                    style={{ color: "#C4A882", fontSize: 24, opacity: 0.5 }}
                  >
                    ♪
                  </span>
                  <span
                    className="sans"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9B9B8E",
                    }}
                  >
                    Konzertfoto {i + 1}
                  </span>
                </div>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(44,44,42,0)",
                    transition: "background 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(44,44,42,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(44,44,42,0)")
                  }
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* PRESSKIT */}
      <section
        id="presskit"
        style={{ background: "#2C2C2A", padding: "100px 48px" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ marginBottom: 56 }}>
              <p
                className="sans"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                  marginBottom: 12,
                }}
              >
                {t.presskit.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  color: "#F8F6F2",
                }}
              >
                {t.presskit.title}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "#C4A882",
                  marginTop: 20,
                  marginBottom: 24,
                }}
              />
              <p
                className="sans"
                style={{ fontSize: 15, color: "#9B9B8E", maxWidth: 480 }}
              >
                {t.presskit.desc}
              </p>
            </div>
          </FadeIn>

          {pressFiles.map((file, i) => (
            <FadeIn key={file.id} delay={i * 0.08}>
              <div
                className="press-row"
                style={{ borderBottomColor: "#3C3C3A" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      border: "1px solid #3C3C3A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: "#C4A882", fontSize: 14 }}>↓</span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#F8F6F2",
                      }}
                    >
                      {locale === "de" ? file.title_de : file.title_en}
                    </p>
                    <p
                      className="sans"
                      style={{
                        fontSize: 12,
                        color: "#6B6B68",
                        marginTop: 2,
                        letterSpacing: "0.08em",
                      }}
                    >
                      PDF ·{" "}
                      {file.lang === "de"
                        ? "Deutsch"
                        : file.lang === "en"
                          ? "English"
                          : "DE / EN"}
                    </p>
                  </div>
                </div>
                <button className="btn-accent">{t.presskit.download}</button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 100,
            alignItems: "start",
          }}
        >
          <FadeIn delay={0}>
            <div>
              <p
                className="sans"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#C4A882",
                  marginBottom: 12,
                }}
              >
                {t.contact.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.1,
                }}
              >
                {t.contact.title}
              </h2>
              <div
                style={{
                  width: 40,
                  height: 1,
                  background: "#C4A882",
                  marginTop: 20,
                  marginBottom: 40,
                }}
              />

              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                {[
                  { label: "E-Mail", value: "kontakt@alexanderbrenner.de" },
                  {
                    label: "Management",
                    value: "Konzertdirektion Müller GmbH",
                  },
                  { label: "Booking", value: "+49 40 123 456 78" },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="sans"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#9B9B8E",
                        marginBottom: 4,
                      }}
                    >
                      {item.label}
                    </p>
                    <p style={{ fontSize: 16, color: "#2C2C2A" }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
                {["YouTube", "Instagram", "Spotify"].map((s) => (
                  <a key={s} href="#" className="social-link">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {formSent ? (
              <div style={{ padding: "48px 0", textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
                <p style={{ fontSize: 20, fontWeight: 300 }}>
                  {locale === "de"
                    ? "Vielen Dank für Ihre Nachricht."
                    : "Thank you for your message."}
                </p>
                <p
                  className="sans"
                  style={{ fontSize: 14, color: "#9B9B8E", marginTop: 8 }}
                >
                  {locale === "de"
                    ? "Ich melde mich in Kürze."
                    : "I will be in touch shortly."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 28 }}
              >
                <div>
                  <label
                    className="sans"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9B9B8E",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.placeholder_name}
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="sans"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9B9B8E",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    placeholder={t.contact.placeholder_email}
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    required
                  />
                </div>
                <div>
                  <label
                    className="sans"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#9B9B8E",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {t.contact.message}
                  </label>
                  <textarea
                    placeholder={t.contact.placeholder_message}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, message: e.target.value }))
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ alignSelf: "flex-start", marginTop: 8 }}
                >
                  {t.contact.send}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1A1A18",
          padding: "40px 48px",
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
              fontSize: 18,
              fontWeight: 300,
              color: "#F8F6F2",
              letterSpacing: "0.06em",
            }}
          >
            Alexander Brenner
          </p>
          <p
            className="sans"
            style={{
              fontSize: 11,
              color: "#6B6B68",
              marginTop: 4,
              letterSpacing: "0.1em",
            }}
          >
            © 2026 · {t.footer.rights}
          </p>
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[t.footer.imprint, t.footer.privacy].map((link) => (
            <a key={link} href="#" className="social-link">
              {link}
            </a>
          ))}
          <div
            style={{
              display: "flex",
              gap: 2,
              borderLeft: "1px solid #3C3C3A",
              paddingLeft: 20,
            }}
          >
            <button
              className="lang-btn"
              onClick={() => setLocale("de")}
              style={{ color: locale === "de" ? "#C4A882" : "#6B6B68" }}
            >
              DE
            </button>
            <span
              style={{ color: "#3C3C3A", lineHeight: "28px", fontSize: 11 }}
            >
              |
            </span>
            <button
              className="lang-btn"
              onClick={() => setLocale("en")}
              style={{ color: locale === "en" ? "#C4A882" : "#6B6B68" }}
            >
              EN
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
