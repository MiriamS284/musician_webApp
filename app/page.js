"use client";

import { useState, useEffect, useRef } from "react";

// ─── TRANSLATIONS DE / EN / RU ───────────────────────────────────────────────
const T = {
  de: {
    nav: {
      home: "Startseite",
      biography: "Lebenslauf",
      repertoire: "Repertoire",
      recordings: "Aufnahmen",
      references: "Referenzen",
      links: "Links",
      contact: "Kontakt",
      imprint: "Impressum",
    },
    hero: { instrument: "Konzertpianist" },
    quote: {
      text: "Ein Philosoph am Klavier — er dringt bis zum Wesen der Werke vor und interpretiert sie mit einer seltenen, leuchtenden Tiefe.",
      source: "— Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "Über den Künstler",
      title: "Lebenslauf",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      p3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      awards: "Auszeichnungen",
      award1: "1. Preis — Internationaler Lorem-Ipsum-Wettbewerb, Wien 2019",
      award2: "Stipendiat der Deutschen Ipsum-Stiftung 2017–2020",
      award3: "Sonderpreis — Dolor-sit-amet-Festival, Leipzig 2016",
    },
    repertoire: {
      label: "Programm",
      title: "Repertoire",
      cats: ["Barock", "Klassik", "Romantik", "20. Jh."],
    },
    concerts: {
      label: "Konzertkalender",
      title: "Konzerte & Auftritte",
      tickets: "Tickets",
      free: "Eintritt frei",
      upcoming: "Vorankündigung",
      cancelled: "Abgesagt",
      past: "Vergangene Konzerte",
    },
    recordings: {
      label: "Diskografie",
      title: "Aufnahmen",
      listen: "Anhören",
      tracks: "Programm",
    },
    references: {
      label: "Pressestimmen",
      title: "Referenzen",
    },
    links: {
      label: "Weiterführendes",
      title: "Links",
    },
    contact: {
      label: "Kontakt",
      title: "Schreiben Sie mir",
      name: "Name",
      email: "E-Mail",
      subject: "Betreff",
      message: "Nachricht",
      send: "Absenden",
      ph_name: "Ihr Name",
      ph_email: "ihre@email.de",
      ph_subject: "Betreff Ihrer Anfrage",
      ph_msg: "Ihre Nachricht...",
      success:
        "Vielen Dank für Ihre Nachricht. Ich melde mich in Kürze bei Ihnen.",
      mgmt: "Management & Booking",
    },
    imprint: { label: "Rechtliches", title: "Impressum" },
    footer: { rights: "Alle Rechte vorbehalten", privacy: "Datenschutz" },
  },
  en: {
    nav: {
      home: "Home",
      biography: "Biography",
      repertoire: "Repertoire",
      recordings: "Recordings",
      references: "References",
      links: "Links",
      contact: "Contact",
      imprint: "Imprint",
    },
    hero: { instrument: "Concert Pianist" },
    quote: {
      text: "A philosopher at the piano — he penetrates to the very essence of each work, interpreting it with rare and luminous depth.",
      source: "— Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "About the Artist",
      title: "Biography",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
      p3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
      awards: "Awards & Prizes",
      award1: "1st Prize — International Lorem Ipsum Competition, Vienna 2019",
      award2: "Scholar of the German Ipsum Foundation 2017–2020",
      award3: "Special Prize — Dolor Sit Amet Festival, Leipzig 2016",
    },
    repertoire: {
      label: "Programme",
      title: "Repertoire",
      cats: ["Baroque", "Classicism", "Romanticism", "20th C."],
    },
    concerts: {
      label: "Concert Calendar",
      title: "Concerts & Performances",
      tickets: "Tickets",
      free: "Free entry",
      upcoming: "Announced",
      cancelled: "Cancelled",
      past: "Past Concerts",
    },
    recordings: {
      label: "Discography",
      title: "Recordings",
      listen: "Listen",
      tracks: "Programme",
    },
    references: {
      label: "Press Reviews",
      title: "References",
    },
    links: {
      label: "Further Reading",
      title: "Links",
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      ph_name: "Your name",
      ph_email: "your@email.com",
      ph_subject: "Subject of your enquiry",
      ph_msg: "Your message...",
      success:
        "Thank you for your message. I will be in touch with you shortly.",
      mgmt: "Management & Booking",
    },
    imprint: { label: "Legal", title: "Imprint" },
    footer: { rights: "All rights reserved", privacy: "Privacy Policy" },
  },
  ru: {
    nav: {
      home: "Главная",
      biography: "Биография",
      repertoire: "Репертуар",
      recordings: "Записи",
      references: "Рецензии",
      links: "Ссылки",
      contact: "Контакт",
      imprint: "Импрессум",
    },
    hero: { instrument: "Концертный пианист" },
    quote: {
      text: "Философ за роялем — он проникает в самую суть произведений и интерпретирует их с редкой, светящейся глубиной.",
      source: "— Frankfurter Allgemeine Zeitung",
    },
    bio: {
      label: "О художнике",
      title: "Биография",
      p1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      p2: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      p3: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto.",
      awards: "Награды и премии",
      award1: "I премия — Международный конкурс Lorem Ipsum, Вена, 2019",
      award2: "Стипендиат Немецкого фонда Ipsum, 2017–2020",
      award3: "Специальная премия — Фестиваль Dolor Sit Amet, Лейпциг, 2016",
    },
    repertoire: {
      label: "Программа",
      title: "Репертуар",
      cats: ["Барокко", "Классицизм", "Романтизм", "XX век"],
    },
    concerts: {
      label: "Концертный календарь",
      title: "Концерты",
      tickets: "Билеты",
      free: "Вход свободный",
      upcoming: "Анонс",
      cancelled: "Отменён",
      past: "Прошедшие концерты",
    },
    recordings: {
      label: "Дискография",
      title: "Записи",
      listen: "Слушать",
      tracks: "Программа",
    },
    references: {
      label: "Пресса о пианисте",
      title: "Рецензии",
    },
    links: {
      label: "Полезные ссылки",
      title: "Ссылки",
    },
    contact: {
      label: "Контакт",
      title: "Напишите мне",
      name: "Имя",
      email: "E-Mail",
      subject: "Тема",
      message: "Сообщение",
      send: "Отправить",
      ph_name: "Ваше имя",
      ph_email: "ваш@email.com",
      ph_subject: "Тема вашего запроса",
      ph_msg: "Ваше сообщение...",
      success:
        "Благодарю за ваше сообщение. Я свяжусь с вами в ближайшее время.",
      mgmt: "Менеджмент и бронирование",
    },
    imprint: { label: "Правовая информация", title: "Импрессум" },
    footer: { rights: "Все права защищены", privacy: "Конфиденциальность" },
  },
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const CONCERTS = [
  {
    id: 1,
    date: "2026-03-15T19:30",
    title_de: "Klavierabend — Chopin & Schubert",
    title_en: "Piano Recital — Chopin & Schubert",
    title_ru: "Фортепианный вечер — Шопен & Шуберт",
    venue: "Elbphilharmonie",
    city: "Hamburg",
    status: "confirmed",
    ticketUrl: "#",
    isFree: false,
  },
  {
    id: 2,
    date: "2026-04-22T20:00",
    title_de: "Beethoven — Klavierkonzert Nr. 5",
    title_en: "Beethoven — Piano Concerto No. 5",
    title_ru: "Бетховен — Фортепианный концерт №5",
    venue: "Alte Oper",
    city: "Frankfurt",
    status: "confirmed",
    ticketUrl: "#",
    isFree: false,
  },
  {
    id: 3,
    date: "2026-05-10T18:00",
    title_de: "Kammerkonzert — Bach & Mozart",
    title_en: "Chamber Concert — Bach & Mozart",
    title_ru: "Камерный концерт — Бах & Моцарт",
    venue: "Konzerthaus",
    city: "Wien",
    status: "announced",
    ticketUrl: null,
    isFree: false,
  },
  {
    id: 4,
    date: "2026-06-03T19:00",
    title_de: "Open-Air Sommerkonzert",
    title_en: "Open-Air Summer Concert",
    title_ru: "Летний концерт под открытым небом",
    venue: "Schlossgarten",
    city: "Stuttgart",
    status: "confirmed",
    ticketUrl: null,
    isFree: true,
  },
  {
    id: 5,
    date: "2025-11-20T20:00",
    title_de: "Brahms & Schumann — Soiree",
    title_en: "Brahms & Schumann — Soirée",
    title_ru: "Брамс & Шуман — Вечер фортепиано",
    venue: "Laeiszhalle",
    city: "Hamburg",
    status: "confirmed",
    ticketUrl: null,
    isFree: false,
  },
  {
    id: 6,
    date: "2025-09-14T19:00",
    title_de: "Solorecital — Festspielhaus",
    title_en: "Solo Recital — Festspielhaus",
    title_ru: "Сольный концерт — Festspielhaus",
    venue: "Festspielhaus",
    city: "Baden-Baden",
    status: "confirmed",
    ticketUrl: null,
    isFree: false,
  },
];

const REPERTOIRE = {
  Barock: [
    {
      composer: "Johann Sebastian Bach",
      works: [
        "Wohltemperiertes Klavier I & II",
        "Goldberg-Variationen BWV 988",
        "Partiten Nr. 1–6 BWV 825–830",
        "Englische & Französische Suiten",
        "Toccaten BWV 910–916",
      ],
    },
    { composer: "Domenico Scarlatti", works: ["Ausgewählte Sonaten"] },
    {
      composer: "Georg Friedrich Händel",
      works: ["Suiten für Klavier HWV 426–433"],
    },
  ],
  Baroque: [
    {
      composer: "Johann Sebastian Bach",
      works: [
        "Well-Tempered Clavier I & II",
        "Goldberg Variations BWV 988",
        "Partitas Nos. 1–6",
        "English & French Suites",
        "Toccatas BWV 910–916",
      ],
    },
    { composer: "Domenico Scarlatti", works: ["Selected Sonatas"] },
    {
      composer: "Georg Friedrich Händel",
      works: ["Suites for Keyboard HWV 426–433"],
    },
  ],
  Барокко: [
    {
      composer: "Иоганн Себастьян Бах",
      works: [
        "Хорошо темперированный клавир I & II",
        "Вариации Гольдберга BWV 988",
        "Партиты №1–6",
        "Английские & Французские сюиты",
      ],
    },
    { composer: "Доменико Скарлатти", works: ["Избранные сонаты"] },
  ],
  Klassik: [
    { composer: "Joseph Haydn", works: ["Sonaten Hob. XVI/20, 32, 49, 52"] },
    {
      composer: "Wolfgang Amadeus Mozart",
      works: [
        "Sonaten KV 310, 330, 331, 457, 570, 576",
        "Klavierkonzerte Nr. 20, 21, 23, 24, 27",
        "Fantasien KV 397, 475",
      ],
    },
    {
      composer: "Ludwig van Beethoven",
      works: [
        "Sonaten op. 13, 27/2, 53, 57, 106, 109, 110, 111",
        "Klavierkonzerte Nr. 1–5",
        "Diabelli-Variationen op. 120",
      ],
    },
  ],
  Classicism: [
    { composer: "Joseph Haydn", works: ["Sonatas Hob. XVI/20, 32, 49, 52"] },
    {
      composer: "Wolfgang Amadeus Mozart",
      works: [
        "Sonatas KV 310, 330, 331, 457, 570, 576",
        "Piano Concertos Nos. 20, 21, 23, 24, 27",
        "Fantasias KV 397, 475",
      ],
    },
    {
      composer: "Ludwig van Beethoven",
      works: [
        "Sonatas op. 13, 27/2, 53, 57, 106, 109, 110, 111",
        "Piano Concertos Nos. 1–5",
        "Diabelli Variations op. 120",
      ],
    },
  ],
  Классицизм: [
    { composer: "Йозеф Гайдн", works: ["Сонаты Hob. XVI/20, 32, 49, 52"] },
    {
      composer: "Вольфганг Амадей Моцарт",
      works: [
        "Сонаты KV 310, 330, 331, 457, 576",
        "Фортепианные концерты №20, 21, 23, 27",
      ],
    },
    {
      composer: "Людвиг ван Бетховен",
      works: [
        "Сонаты op. 13, 27/2, 53, 57, 106, 111",
        "Фортепианные концерты №1–5",
      ],
    },
  ],
  Romantik: [
    {
      composer: "Franz Schubert",
      works: [
        "Sonaten D. 537, 664, 784, 845, 894, 958–960",
        "Impromptus op. 90 & 142",
        "Moments musicaux op. 94",
      ],
    },
    {
      composer: "Frédéric Chopin",
      works: [
        "Sonaten op. 35, 58",
        "Balladen Nr. 1–4",
        "Études op. 10 & 25",
        "Préludes op. 28",
        "Nocturnes",
      ],
    },
    {
      composer: "Robert Schumann",
      works: [
        "Kinderszenen op. 15",
        "Kreisleriana op. 16",
        "Davidsbündlertänze op. 6",
        "Fantasie op. 17",
      ],
    },
    {
      composer: "Johannes Brahms",
      works: [
        "Sonaten op. 1, 2, 5",
        "Intermezzi op. 117–119",
        "Klavierkonzerte Nr. 1 & 2",
      ],
    },
    {
      composer: "Franz Liszt",
      works: ["Sonate h-Moll", "Années de Pèlerinage"],
    },
  ],
  Romanticism: [
    {
      composer: "Franz Schubert",
      works: [
        "Sonatas D. 537, 664, 784, 845, 894, 958–960",
        "Impromptus op. 90 & 142",
      ],
    },
    {
      composer: "Frédéric Chopin",
      works: [
        "Sonatas op. 35, 58",
        "Ballades Nos. 1–4",
        "Études op. 10 & 25",
        "Préludes op. 28",
      ],
    },
    {
      composer: "Robert Schumann",
      works: ["Kinderszenen op. 15", "Kreisleriana op. 16", "Fantasie op. 17"],
    },
    {
      composer: "Johannes Brahms",
      works: [
        "Sonatas op. 1, 2, 5",
        "Intermezzi op. 117–119",
        "Piano Concertos Nos. 1 & 2",
      ],
    },
    {
      composer: "Franz Liszt",
      works: ["Sonata in B minor", "Années de Pèlerinage"],
    },
  ],
  Романтизм: [
    {
      composer: "Франц Шуберт",
      works: ["Сонаты D. 845, 894, 958–960", "Экспромты op. 90 & 142"],
    },
    {
      composer: "Фредерик Шопен",
      works: ["Баллады №1–4", "Этюды op. 10 & 25", "Прелюдии op. 28"],
    },
    {
      composer: "Роберт Шуман",
      works: ["Kindерszenen op. 15", "Kreisleriana op. 16"],
    },
    {
      composer: "Иоганнес Брамс",
      works: ["Сонаты op. 1, 2, 5", "Фортепианные концерты №1 & 2"],
    },
  ],
  "20. Jh.": [
    {
      composer: "Sergei Rachmaninow",
      works: [
        "Klavierkonzerte Nr. 1–4",
        "Sonaten op. 28, 36",
        "Préludes op. 23 & 32",
      ],
    },
    {
      composer: "Alexander Skrjabin",
      works: ["Sonaten Nr. 3, 5, 9, 10", "Études op. 8 & 42"],
    },
    {
      composer: "Sergei Prokofjew",
      works: ["Sonaten Nr. 3, 6, 7, 8", "Klavierkonzerte Nr. 1–5"],
    },
    {
      composer: "Dmitri Schostakowitsch",
      works: ["Präludien & Fugen op. 87", "Sonaten Nr. 1 & 2"],
    },
  ],
  "20th C.": [
    {
      composer: "Sergei Rachmaninoff",
      works: [
        "Piano Concertos Nos. 1–4",
        "Sonatas op. 28, 36",
        "Préludes op. 23 & 32",
      ],
    },
    {
      composer: "Alexander Scriabin",
      works: ["Sonatas Nos. 3, 5, 9, 10", "Études op. 8 & 42"],
    },
    {
      composer: "Sergei Prokofiev",
      works: ["Sonatas Nos. 3, 6, 7, 8", "Piano Concertos Nos. 1–5"],
    },
    {
      composer: "Dmitri Shostakovich",
      works: ["Preludes & Fugues op. 87", "Sonatas Nos. 1 & 2"],
    },
  ],
  "XX век": [
    {
      composer: "Сергей Рахманинов",
      works: ["Фортепианные концерты №1–4", "Прелюдии op. 23 & 32"],
    },
    {
      composer: "Александр Скрябин",
      works: ["Сонаты №3, 5, 9, 10", "Этюды op. 8 & 42"],
    },
    {
      composer: "Сергей Прокофьев",
      works: ["Сонаты №3, 6, 7, 8", "Фортепианные концерты №1–5"],
    },
    { composer: "Дмитрий Шостакович", works: ["Прелюдии и фуги op. 87"] },
  ],
};

const RECORDINGS = [
  {
    id: 1,
    title: "Schubert: Letzte Sonaten",
    label: "Deutsche Grammophon",
    year: 2024,
    color: "#E8E0D4",
    tracks: [
      "Sonate D. 958 · c-Moll",
      "Sonate D. 959 · A-Dur",
      "Sonate D. 960 · B-Dur",
    ],
  },
  {
    id: 2,
    title: "Bach: Wohltemperiertes Klavier I",
    label: "ECM Records",
    year: 2023,
    color: "#D4DDE8",
    tracks: ["24 Präludien & Fugen BWV 846–869"],
  },
  {
    id: 3,
    title: "Chopin: Balladen & Nocturnes",
    label: "Sony Classical",
    year: 2022,
    color: "#E4D4E0",
    tracks: ["Balladen Nr. 1–4", "Nocturnes op. 9, 15, 27, 48"],
  },
];

const REFERENCES = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pianista Brenner virtuosum et expressivum artem suam demonstrat — rarissima qualitas in musico tam iuvene.",
    source: "Prof. Lorem Ipsum",
    origin: "Hochschule für Musik Frankfurt, 2024",
  },
  {
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    source: "Dr. Consectetur Adipiscing",
    origin: "Musikhochschule Wien, 2023",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    source: "Prof. Veniam Quis",
    origin: "Conservatoire de Paris, 2023",
  },
  {
    quote:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi occaecati.",
    source: "Lorem — Wümme-Zeitung",
    origin: "02.03.2024",
  },
  {
    quote:
      "Temporibus autem quibusdam et aut officiis debitis rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.",
    source: "Consectetur — Weser-Kurier",
    origin: "16.04.2023",
  },
];

const LINKS = [
  {
    cat_de: "Konzerthäuser & Festivals",
    cat_en: "Concert Halls & Festivals",
    cat_ru: "Залы и фестивали",
    items: [
      "Elbphilharmonie Hamburg",
      "Alte Oper Frankfurt",
      "Konzerthaus Wien",
      "Berliner Philharmonie",
      "Carnegie Hall New York",
    ],
  },
  {
    cat_de: "Wettbewerbe & Institutionen",
    cat_en: "Competitions & Institutions",
    cat_ru: "Конкурсы и институции",
    items: [
      "ARD Musikwettbewerb München",
      "Int. Chopin-Wettbewerb Warschau",
      "Leeds International Piano Competition",
      "Van Cliburn Competition",
    ],
  },
  {
    cat_de: "Labels & Streaming",
    cat_en: "Labels & Streaming",
    cat_ru: "Лейблы и стриминг",
    items: [
      "Deutsche Grammophon",
      "ECM Records",
      "Sony Classical",
      "Spotify — Künstlerprofil",
      "Apple Music",
    ],
  },
  {
    cat_de: "Presse & Medien",
    cat_en: "Press & Media",
    cat_ru: "Пресса и медиа",
    items: [
      "Frankfurter Allgemeine — Feuilleton",
      "Die Zeit — Musik",
      "Gramophone Magazine",
      "BBC Music Magazine",
    ],
  },
];

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setV(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Reveal({ children, delay = 0, y = 28 }) {
  const [ref, v] = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [locale, setLocale] = useState("de");
  const [activeCat, setActiveCat] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const scrollY = useScrollY();
  const tr = T[locale];
  const headerSolid = scrollY > 80;

  const repCats = tr.repertoire.cats;
  const repKey = (i) => {
    const keys = {
      de: ["Barock", "Klassik", "Romantik", "20. Jh."],
      en: ["Baroque", "Classicism", "Romanticism", "20th C."],
      ru: ["Барокко", "Классицизм", "Романтизм", "XX век"],
    };
    return keys[locale][i];
  };

  const fmtDate = (d) =>
    new Date(d).toLocaleDateString(
      locale === "de" ? "de-DE" : locale === "en" ? "en-GB" : "ru-RU",
      { day: "2-digit", month: "long", year: "numeric" },
    );
  const fmtTime = (d) =>
    new Date(d).toLocaleTimeString(locale === "de" ? "de-DE" : "en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
  const getCTitle = (c) => c[`title_${locale}`] || c.title_de;
  const getLinkCat = (g) =>
    locale === "de" ? g.cat_de : locale === "en" ? g.cat_en : g.cat_ru;
  const upcoming = CONCERTS.filter((c) => new Date(c.date) >= new Date());
  const past = CONCERTS.filter((c) => new Date(c.date) < new Date());

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      style={{
        fontFamily: "'Cormorant Garamond', 'Cormorant', Georgia, serif",
        background: "#F9F7F3",
        color: "#252320",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{overflow-x:hidden}
        ::selection{background:#BFA07A;color:#fff}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-thumb{background:#BFA07A}
        .jost{font-family:'Jost',system-ui,sans-serif}
        .nl{position:relative}
        .nl::after{content:'';position:absolute;bottom:-1px;left:0;width:0;height:1px;background:#BFA07A;transition:width .3s}
        .nl:hover::after,.nl.on::after{width:100%}
        .btn{border:1px solid #252320;color:#252320;background:transparent;padding:10px 24px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .22s;font-family:'Jost',sans-serif;font-weight:400}
        .btn:hover{background:#252320;color:#F9F7F3}
        .btng{border:1px solid #BFA07A;color:#BFA07A;background:transparent;padding:10px 24px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;cursor:pointer;transition:all .22s;font-family:'Jost',sans-serif}
        .btng:hover{background:#BFA07A;color:#fff}
        .btnp{background:#252320;color:#F9F7F3;border:none;padding:14px 36px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:background .2s;font-family:'Jost',sans-serif}
        .btnp:hover{background:#111}
        input,textarea{width:100%;background:transparent;border:none;border-bottom:1px solid #C8C4BA;padding:13px 0;font-size:16px;color:#252320;outline:none;font-family:'Jost',sans-serif;font-weight:300;transition:border-color .2s}
        input:focus,textarea:focus{border-bottom-color:#252320}
        input::placeholder,textarea::placeholder{color:#A0A09A;font-size:14px}
        textarea{resize:none;height:110px}
        .row{border-bottom:1px solid #EAE6DE;transition:background .2s}
        .row:hover{background:#F3EFE8}
        .card{border:1px solid #EAE6DE;padding:28px;transition:border-color .2s,transform .22s;cursor:default}
        .card:hover{border-color:#BFA07A;transform:translateY(-4px)}
        @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fl{from{opacity:0}to{opacity:1}}
        .divider{width:44px;height:1px;background:#BFA07A;margin-top:18px}
      `}</style>

      {/* ── HEADER ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 70,
          padding: "0 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: headerSolid ? "rgba(249,247,243,.97)" : "transparent",
          backdropFilter: headerSolid ? "blur(10px)" : "none",
          borderBottom: headerSolid ? "1px solid #EAE6DE" : "none",
          transition: "all .35s",
        }}
      >
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
              fontSize: 21,
              fontWeight: 300,
              letterSpacing: ".06em",
              color: headerSolid ? "#252320" : "#F9F7F3",
              lineHeight: 1.1,
              transition: "color .3s",
            }}
          >
            Alexander
          </div>
          <div
            style={{
              fontSize: 21,
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: ".06em",
              color: headerSolid ? "#252320" : "#F9F7F3",
              lineHeight: 1.1,
              transition: "color .3s",
            }}
          >
            Brenner
          </div>
        </button>

        <nav style={{ display: "flex", alignItems: "center", gap: 26 }}>
          {[
            ["biography", tr.nav.biography],
            ["repertoire", tr.nav.repertoire],
            ["recordings", tr.nav.recordings],
            ["references", tr.nav.references],
            ["links", tr.nav.links],
            ["contact", tr.nav.contact],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="nl jost"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: ".13em",
                textTransform: "uppercase",
                color: headerSolid ? "#252320" : "rgba(249,247,243,.8)",
                fontWeight: 400,
                paddingBottom: 2,
                transition: "color .3s",
              }}
            >
              {label}
            </button>
          ))}
          {/* Language switcher */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 0,
              paddingLeft: 16,
              marginLeft: 4,
              borderLeft: "1px solid rgba(191,160,122,.4)",
            }}
          >
            {["de", "en", "ru"].map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setLocale(l)}
                  className="jost"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "4px 7px",
                    color:
                      locale === l
                        ? "#BFA07A"
                        : headerSolid
                          ? "#9B9B8E"
                          : "rgba(249,247,243,.45)",
                    fontWeight: locale === l ? 500 : 300,
                    transition: "color .2s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
                {i < 2 && (
                  <span style={{ color: "#C8C4BA", fontSize: 10 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        style={{
          height: "100vh",
          minHeight: 600,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(138deg,#1E1E1C 0%,#3A3630 45%,#5C4F43 100%)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 20% 60%, rgba(191,160,122,.22) 0%,transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(249,247,243,.04) 0%,transparent 45%)",
            }}
          />
          {/* Piano keys motif */}
          <div
            style={{
              position: "absolute",
              right: "-2%",
              top: 0,
              bottom: 0,
              width: "44%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                height: "52%",
                alignItems: "flex-start",
                opacity: 0.07,
              }}
            >
              {Array.from({ length: 26 }).map((_, i) => {
                const isWhite = [0, 2, 4, 5, 7, 9, 11].includes(i % 12);
                return (
                  <div
                    key={i}
                    style={{
                      width: isWhite ? 28 : 18,
                      height: isWhite ? "100%" : "60%",
                      background: isWhite ? "#F9F7F3" : "#111",
                      borderRadius: "0 0 4px 4px",
                      border: "1px solid rgba(255,255,255,.07)",
                      flexShrink: 0,
                    }}
                  />
                );
              })}
            </div>
          </div>
          {/* Subtle vertical lines */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background:
                "linear-gradient(to bottom,transparent,rgba(191,160,122,.15),transparent)",
              opacity: 0.6,
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 52px 88px",
            maxWidth: 900,
          }}
        >
          <p
            className="jost"
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
            style={{
              fontSize: "clamp(56px,9.5vw,115px)",
              fontWeight: 300,
              color: "#F9F7F3",
              lineHeight: 0.87,
              letterSpacing: "-.02em",
              opacity: 0,
              animation: "fu .9s ease .5s forwards",
            }}
          >
            Alexander
            <br />
            <em style={{ fontWeight: 300 }}>Brenner</em>
          </h1>
          <div
            style={{
              marginTop: 36,
              width: 52,
              height: 1,
              background: "#BFA07A",
              opacity: 0,
              animation: "fu .5s ease .85s forwards",
            }}
          />
          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              opacity: 0,
              animation: "fu .6s ease 1.05s forwards",
            }}
          >
            <button className="btng" onClick={() => scrollTo("contact")}>
              {tr.nav.contact}
            </button>
            <button
              onClick={() => scrollTo("repertoire")}
              className="jost"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 11,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "rgba(249,247,243,.45)",
                fontWeight: 300,
              }}
            >
              {tr.nav.repertoire}
            </button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 36,
            right: 52,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
            opacity: 0,
            animation: "fu .5s ease 1.3s forwards",
          }}
        >
          <div
            style={{
              width: 1,
              height: 52,
              background: "linear-gradient(to bottom,transparent,#BFA07A)",
            }}
          />
          <span
            className="jost"
            style={{
              fontSize: 9,
              letterSpacing: ".3em",
              textTransform: "uppercase",
              color: "#BFA07A",
              writingMode: "vertical-rl",
            }}
          >
            scroll
          </span>
        </div>
      </section>

      {/* ── PRESS QUOTE ── */}
      <section style={{ background: "#F0EBE2", padding: "84px 52px" }}>
        <Reveal>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                color: "#BFA07A",
                fontSize: 36,
                lineHeight: 1,
                display: "block",
                marginBottom: 8,
                opacity: 0.7,
              }}
            >
              ❝
            </span>
            <blockquote
              style={{
                fontSize: "clamp(18px,2.8vw,26px)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
                color: "#252320",
              }}
            >
              {tr.quote.text}
            </blockquote>
            <p
              className="jost"
              style={{
                marginTop: 22,
                fontSize: 11,
                letterSpacing: ".22em",
                textTransform: "uppercase",
                color: "#A09688",
              }}
            >
              {tr.quote.source}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── BIOGRAPHY ── */}
      <section
        id="biography"
        style={{ padding: "104px 52px", maxWidth: 1240, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <Reveal>
            <div style={{ position: "sticky", top: 90 }}>
              {/* Placeholder portrait */}
              <div
                style={{
                  aspectRatio: "3/4",
                  background: "linear-gradient(158deg,#E8E2D8,#D5CEC3)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    border: "1px solid #BFA07A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#BFA07A", fontSize: 22 }}>♪</span>
                </div>
                <span
                  className="jost"
                  style={{
                    fontSize: 9,
                    letterSpacing: ".25em",
                    textTransform: "uppercase",
                    color: "#A09688",
                  }}
                >
                  Künstlerfoto
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    width: 28,
                    height: 28,
                    borderTop: "1px solid #BFA07A",
                    borderLeft: "1px solid #BFA07A",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 14,
                    right: 14,
                    width: 28,
                    height: 28,
                    borderBottom: "1px solid #BFA07A",
                    borderRight: "1px solid #BFA07A",
                  }}
                />
              </div>
              <div style={{ marginTop: 22 }}>
                <p style={{ fontSize: 19, fontWeight: 400, color: "#252320" }}>
                  Alexander Brenner
                </p>
                <p
                  className="jost"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "#BFA07A",
                    marginTop: 5,
                  }}
                >
                  {tr.hero.instrument}
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p
                className="jost"
                style={{
                  fontSize: 11,
                  letterSpacing: ".25em",
                  textTransform: "uppercase",
                  color: "#BFA07A",
                  marginBottom: 14,
                }}
              >
                {tr.bio.label}
              </p>
              <h2
                style={{
                  fontSize: "clamp(34px,4.5vw,52px)",
                  fontWeight: 300,
                  letterSpacing: "-.01em",
                  lineHeight: 1,
                }}
              >
                {tr.bio.title}
              </h2>
              <div className="divider" />
            </Reveal>

            <Reveal delay={0.1}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#3A3A36",
                  marginTop: 32,
                  fontWeight: 300,
                }}
              >
                {tr.bio.p1}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#5A5A54",
                  marginTop: 18,
                  fontWeight: 300,
                }}
              >
                {tr.bio.p2}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "#5A5A54",
                  marginTop: 18,
                  fontWeight: 300,
                }}
              >
                {tr.bio.p3}
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div
                style={{
                  marginTop: 44,
                  padding: "32px 36px",
                  background: "#F0EBE2",
                  borderLeft: "2px solid #BFA07A",
                }}
              >
                <p
                  className="jost"
                  style={{
                    fontSize: 11,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "#BFA07A",
                    marginBottom: 18,
                  }}
                >
                  {tr.bio.awards}
                </p>
                {[tr.bio.award1, tr.bio.award2, tr.bio.award3].map((a, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      color: "#3A3A36",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      marginBottom: i < 2 ? 10 : 0,
                    }}
                  >
                    — {a}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── REPERTOIRE ── */}
      <section
        id="repertoire"
        style={{ background: "#F0EBE2", padding: "104px 52px" }}
      >
        <div style={{ maxWidth: 980, margin: "0 auto" }}>
          <Reveal>
            <p
              className="jost"
              style={{
                fontSize: 11,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "#BFA07A",
                marginBottom: 14,
              }}
            >
              {tr.repertoire.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(34px,4.5vw,52px)",
                fontWeight: 300,
                letterSpacing: "-.01em",
              }}
            >
              {tr.repertoire.title}
            </h2>
            <div className="divider" style={{ marginBottom: 44 }} />
          </Reveal>

          {/* Category tabs */}
          <Reveal delay={0.05}>
            <div
              style={{
                display: "flex",
                gap: 0,
                borderBottom: "1px solid #DDD8CE",
                marginBottom: 44,
                overflowX: "auto",
              }}
            >
              {repCats.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(i)}
                  className="jost"
                  style={{
                    background: "none",
                    border: "none",
                    borderBottom:
                      activeCat === i
                        ? "2px solid #BFA07A"
                        : "2px solid transparent",
                    cursor: "pointer",
                    padding: "10px 20px",
                    fontSize: 12,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: activeCat === i ? "#252320" : "#A09688",
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

          {(REPERTOIRE[repKey(activeCat)] || []).map((item, i) => (
            <Reveal key={`${activeCat}-${i}`} delay={i * 0.06}>
              <div
                style={{
                  paddingBottom: 30,
                  marginBottom: 30,
                  borderBottom: "1px solid #DDD8CE",
                }}
              >
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    color: "#252320",
                    marginBottom: 14,
                  }}
                >
                  {item.composer}
                </h3>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "7px 12px" }}
                >
                  {item.works.map((w) => (
                    <span
                      key={w}
                      className="jost"
                      style={{
                        fontSize: 12,
                        color: "#6A6A62",
                        padding: "4px 12px",
                        background: "#F9F7F3",
                        border: "1px solid #DDD8CE",
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
      </section>

      {/* ── CONCERTS ── */}
      <section
        id="concerts"
        style={{ padding: "104px 52px", maxWidth: 1000, margin: "0 auto" }}
      >
        <Reveal>
          <p
            className="jost"
            style={{
              fontSize: 11,
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "#BFA07A",
              marginBottom: 14,
            }}
          >
            {tr.concerts.label}
          </p>
          <h2
            style={{
              fontSize: "clamp(34px,4.5vw,52px)",
              fontWeight: 300,
              letterSpacing: "-.01em",
            }}
          >
            {tr.concerts.title}
          </h2>
          <div className="divider" style={{ marginBottom: 48 }} />
        </Reveal>

        {upcoming.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.07}>
            <div
              className="row"
              style={{
                padding: "22px 0",
                display: "grid",
                gridTemplateColumns: "200px 1fr auto",
                gap: 24,
                alignItems: "center",
              }}
            >
              <div>
                <p
                  className="jost"
                  style={{
                    fontSize: 12,
                    letterSpacing: ".08em",
                    color: "#A09688",
                    textTransform: "uppercase",
                  }}
                >
                  {fmtDate(c.date)}
                </p>
                <p
                  className="jost"
                  style={{ fontSize: 11, color: "#BFA07A", marginTop: 3 }}
                >
                  {fmtTime(c.date)} Uhr
                </p>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    color: "#252320",
                    marginBottom: 4,
                  }}
                >
                  {getCTitle(c)}
                </h3>
                <p className="jost" style={{ fontSize: 13, color: "#A09688" }}>
                  {c.venue} · {c.city}
                </p>
                {c.status === "announced" && (
                  <span
                    className="jost"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".15em",
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
                {c.ticketUrl && (
                  <button className="btn">{tr.concerts.tickets}</button>
                )}
                {c.isFree && (
                  <span
                    className="jost"
                    style={{
                      fontSize: 11,
                      color: "#A09688",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {tr.concerts.free}
                  </span>
                )}
              </div>
            </div>
          </Reveal>
        ))}

        {past.length > 0 && (
          <Reveal delay={0.2}>
            <div style={{ marginTop: 56 }}>
              <p
                className="jost"
                style={{
                  fontSize: 11,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "#A09688",
                  marginBottom: 28,
                }}
              >
                {tr.concerts.past}
              </p>
              {past.map((c, i) => (
                <div
                  key={c.id}
                  className="row"
                  style={{
                    padding: "16px 0",
                    display: "grid",
                    gridTemplateColumns: "200px 1fr",
                    gap: 24,
                    alignItems: "center",
                    opacity: 0.55,
                  }}
                >
                  <p
                    className="jost"
                    style={{
                      fontSize: 12,
                      color: "#A09688",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                    }}
                  >
                    {fmtDate(c.date)}
                  </p>
                  <div>
                    <p
                      style={{
                        fontSize: 16,
                        fontWeight: 300,
                        color: "#252320",
                      }}
                    >
                      {getCTitle(c)}
                    </p>
                    <p
                      className="jost"
                      style={{ fontSize: 12, color: "#A09688", marginTop: 2 }}
                    >
                      {c.venue} · {c.city}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* ── RECORDINGS ── */}
      <section
        id="recordings"
        style={{ background: "#252320", padding: "104px 52px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <p
              className="jost"
              style={{
                fontSize: 11,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "#BFA07A",
                marginBottom: 14,
              }}
            >
              {tr.recordings.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(34px,4.5vw,52px)",
                fontWeight: 300,
                color: "#F9F7F3",
                letterSpacing: "-.01em",
              }}
            >
              {tr.recordings.title}
            </h2>
            <div className="divider" style={{ marginBottom: 56 }} />
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 24,
            }}
          >
            {RECORDINGS.map((rec, i) => (
              <Reveal key={rec.id} delay={i * 0.1}>
                <div
                  className="card"
                  style={{ background: "#2E2B27", borderColor: "#3A3630" }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      background: rec.color,
                      marginBottom: 22,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <span
                      style={{ fontSize: 36, color: "#BFA07A", opacity: 0.45 }}
                    >
                      ♫
                    </span>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                        width: 20,
                        height: 20,
                        borderBottom: "1px solid rgba(191,160,122,.4)",
                        borderRight: "1px solid rgba(191,160,122,.4)",
                      }}
                    />
                  </div>
                  <p
                    className="jost"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "#BFA07A",
                      marginBottom: 8,
                    }}
                  >
                    {rec.label} · {rec.year}
                  </p>
                  <h3
                    style={{
                      fontSize: 19,
                      fontWeight: 400,
                      color: "#F9F7F3",
                      lineHeight: 1.3,
                      marginBottom: 14,
                    }}
                  >
                    {rec.title}
                  </h3>
                  <div style={{ marginBottom: 20 }}>
                    <p
                      className="jost"
                      style={{
                        fontSize: 10,
                        letterSpacing: ".18em",
                        textTransform: "uppercase",
                        color: "#6A6A62",
                        marginBottom: 8,
                      }}
                    >
                      {tr.recordings.tracks}
                    </p>
                    {rec.tracks.map((t) => (
                      <p
                        key={t}
                        className="jost"
                        style={{
                          fontSize: 13,
                          color: "#808078",
                          lineHeight: 1.6,
                        }}
                      >
                        — {t}
                      </p>
                    ))}
                  </div>
                  <button className="btng">{tr.recordings.listen}</button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERENCES ── */}
      <section
        id="references"
        style={{ padding: "104px 52px", maxWidth: 980, margin: "0 auto" }}
      >
        <Reveal>
          <p
            className="jost"
            style={{
              fontSize: 11,
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "#BFA07A",
              marginBottom: 14,
            }}
          >
            {tr.references.label}
          </p>
          <h2
            style={{
              fontSize: "clamp(34px,4.5vw,52px)",
              fontWeight: 300,
              letterSpacing: "-.01em",
            }}
          >
            {tr.references.title}
          </h2>
          <div className="divider" style={{ marginBottom: 56 }} />
        </Reveal>

        {REFERENCES.map((ref, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <div
              style={{
                paddingBottom: 40,
                marginBottom: 40,
                borderBottom: "1px solid #EAE6DE",
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                gap: 20,
              }}
            >
              <span
                style={{
                  color: "#BFA07A",
                  fontSize: 26,
                  lineHeight: 1.2,
                  opacity: 0.8,
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
                    lineHeight: 1.8,
                    color: "#252320",
                    marginBottom: 14,
                  }}
                >
                  {ref.quote}
                </blockquote>
                <p
                  className="jost"
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#252320",
                    letterSpacing: ".04em",
                  }}
                >
                  {ref.source}
                </p>
                <p
                  className="jost"
                  style={{
                    fontSize: 11,
                    color: "#A09688",
                    marginTop: 2,
                    letterSpacing: ".06em",
                  }}
                >
                  {ref.origin}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── LINKS ── */}
      <section
        id="links"
        style={{ background: "#F0EBE2", padding: "104px 52px" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <p
              className="jost"
              style={{
                fontSize: 11,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "#BFA07A",
                marginBottom: 14,
              }}
            >
              {tr.links.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(34px,4.5vw,52px)",
                fontWeight: 300,
                letterSpacing: "-.01em",
              }}
            >
              {tr.links.title}
            </h2>
            <div className="divider" style={{ marginBottom: 56 }} />
          </Reveal>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}
          >
            {LINKS.map((group, gi) => (
              <Reveal key={gi} delay={gi * 0.07}>
                <div>
                  <p
                    className="jost"
                    style={{
                      fontSize: 11,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "#BFA07A",
                      marginBottom: 18,
                    }}
                  >
                    {getLinkCat(group)}
                  </p>
                  <ul style={{ listStyle: "none" }}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{ borderBottom: "1px solid #DDD8CE" }}
                      >
                        <a
                          href="#"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "12px 0",
                            textDecoration: "none",
                            color: "#252320",
                            fontSize: 15,
                            fontWeight: 300,
                            transition: "color .2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#BFA07A")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#252320")
                          }
                        >
                          {item}
                          <span style={{ color: "#BFA07A", fontSize: 13 }}>
                            ↗
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        style={{ padding: "104px 52px", maxWidth: 1200, margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 96,
            alignItems: "start",
          }}
        >
          <Reveal>
            <p
              className="jost"
              style={{
                fontSize: 11,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "#BFA07A",
                marginBottom: 14,
              }}
            >
              {tr.contact.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(34px,4.5vw,52px)",
                fontWeight: 300,
                letterSpacing: "-.01em",
                lineHeight: 1.05,
              }}
            >
              {tr.contact.title}
            </h2>
            <div className="divider" style={{ marginBottom: 44 }} />

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
                  className="jost"
                  style={{
                    fontSize: 10,
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    color: "#A09688",
                    marginBottom: 6,
                  }}
                >
                  {item.l}
                </p>
                <p
                  style={{
                    fontSize: 16,
                    color: "#252320",
                    fontWeight: 300,
                    whiteSpace: "pre-line",
                    lineHeight: 1.6,
                  }}
                >
                  {item.v}
                </p>
              </div>
            ))}

            <div
              style={{
                marginTop: 40,
                paddingTop: 28,
                borderTop: "1px solid #EAE6DE",
                display: "flex",
                gap: 22,
                flexWrap: "wrap",
              }}
            >
              {["YouTube", "Instagram", "Spotify", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="jost"
                  style={{
                    color: "#A09688",
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
                    (e.currentTarget.style.color = "#A09688")
                  }
                >
                  {s}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {sent ? (
              <div style={{ padding: "52px 0", textAlign: "center" }}>
                <div
                  style={{ fontSize: 44, color: "#BFA07A", marginBottom: 18 }}
                >
                  ✓
                </div>
                <p style={{ fontSize: 22, fontWeight: 300 }}>
                  {tr.contact.success}
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
                    ph: tr.contact.ph_subject,
                  },
                ].map((f) => (
                  <div key={f.k}>
                    <label
                      className="jost"
                      style={{
                        fontSize: 10,
                        letterSpacing: ".22em",
                        textTransform: "uppercase",
                        color: "#A09688",
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
                    className="jost"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".22em",
                      textTransform: "uppercase",
                      color: "#A09688",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {tr.contact.message}
                  </label>
                  <textarea
                    placeholder={tr.contact.ph_msg}
                    value={form.message}
                    onChange={(e) =>
                      setForm((s) => ({ ...s, message: e.target.value }))
                    }
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btnp"
                  style={{ alignSelf: "flex-start", marginTop: 6 }}
                >
                  {tr.contact.send}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── IMPRINT ── */}
      <section
        id="imprint"
        style={{ background: "#F0EBE2", padding: "80px 52px" }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <Reveal>
            <p
              className="jost"
              style={{
                fontSize: 11,
                letterSpacing: ".25em",
                textTransform: "uppercase",
                color: "#BFA07A",
                marginBottom: 14,
              }}
            >
              {tr.imprint.label}
            </p>
            <h2
              style={{
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 300,
                letterSpacing: "-.01em",
              }}
            >
              {tr.imprint.title}
            </h2>
            <div className="divider" style={{ marginBottom: 40 }} />
          </Reveal>
          {[
            {
              h:
                locale === "de"
                  ? "Angaben gemäß § 5 TMG"
                  : locale === "en"
                    ? "Information according to § 5 TMG"
                    : "Информация согласно § 5 TMG",
              t: "Alexander Brenner\nMusterstraße 42\n20095 Hamburg\nDeutschland",
            },
            {
              h:
                locale === "de"
                  ? "Kontakt"
                  : locale === "en"
                    ? "Contact"
                    : "Контакт",
              t: "+49 40 123 456 78\nkontakt@alexanderbrenner.de",
            },
            {
              h:
                locale === "de"
                  ? "Haftungsausschluss"
                  : locale === "en"
                    ? "Disclaimer"
                    : "Отказ от ответственности",
              t: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div style={{ marginBottom: 30 }}>
                <h3
                  className="jost"
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: ".08em",
                    color: "#252320",
                    marginBottom: 10,
                  }}
                >
                  {s.h}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: "#5A5A54",
                    fontWeight: 300,
                    whiteSpace: "pre-line",
                  }}
                >
                  {s.t}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#1A1816",
          padding: "36px 52px",
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
              fontSize: 17,
              fontWeight: 300,
              color: "#F9F7F3",
              letterSpacing: ".05em",
            }}
          >
            Alexander <em>Brenner</em>
          </p>
          <p
            className="jost"
            style={{
              fontSize: 11,
              color: "#666056",
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
            gap: 22,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("imprint");
            }}
            className="jost"
            style={{
              color: "#666056",
              textDecoration: "none",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA07A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666056")}
          >
            {tr.nav.imprint}
          </a>
          <a
            href="#"
            className="jost"
            style={{
              color: "#666056",
              textDecoration: "none",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#BFA07A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#666056")}
          >
            {tr.footer.privacy}
          </a>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 18,
              borderLeft: "1px solid #333028",
            }}
          >
            {["de", "en", "ru"].map((l, i) => (
              <span key={l} style={{ display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setLocale(l)}
                  className="jost"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    padding: "4px 7px",
                    color: locale === l ? "#BFA07A" : "#666056",
                    transition: "color .2s",
                  }}
                >
                  {l.toUpperCase()}
                </button>
                {i < 2 && (
                  <span style={{ color: "#333028", fontSize: 10 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
