"use client";

import { useState } from "react";
import Head from "next/head";

/*
  Matero – Landing Page (pages/index.tsx)
  - Aucune dépendance externe (pas de Tailwind requis)
  - Sections : Hero, Pourquoi, Modes (Aventure / Apprentissage + Révision / Défi), Formats de questions,
               Gamification, Bilingue & Programme, Auteur, FAQ, CTA final
  - Ancrages : #modes #formats #revision #programme #auteur #faq #download
  - Placeholders d'images en bas du fichier (constants IMAGES)
  - À la fin du fichier : TODO visuels à fournir (formats / tailles conseillées)
*/

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.matero.app"; // TODO: Remplacer par l'URL réelle si différente

/* —————————————————————————————————————————————————————————————— */
/*                        TEXTES FR / EN                         */
/* —————————————————————————————————————————————————————————————— */
const TEXT = {
  fr: {
    nav: {
      modes: "Modes",
      formats: "Formats",
      revision: "Révision",
      programme: "Programme",
      auteur: "Auteur",
      faq: "FAQ",
      download: "Télécharger",
      lang: "EN",
    },
    hero: {
      title: "Apprends les maths en jouant",
      subtitle: "Bilingue FR/EN, aligné sur le programme officiel. Collège → Lycée.",
      ctaPrimary: "Télécharger",
      ctaSecondary: "Essayer maintenant",
    },
    why: {
      title: "Pourquoi Matero ?",
      p1: "Les mathématiques sont souvent perçues comme abstraites et difficiles.",
      p2: "Matero transforme l’apprentissage en expérience ludique : quiz interactifs, explications claires, progression motivante.",
      p3: "Contenu strictement aligné sur le programme officiel, utile en classe et pour les examens.",
    },
    modes: {
      title: "Les 3 modes phares",
      adventure: {
        title: "Aventure",
        p1: "Bienvenue à Matropolis : sept savants ont été capturés (un par niveau de la 6e à la Terminale).",
        p2: "Libère un savant à chaque épisode en réussissant les épreuves du niveau (ex. Euclide pour la 6e).",
        bonus: "Bonus : Blocage du temps, Indice.",
      },
      learning: {
        title: "Apprentissage",
        p1: "Quiz avec explications détaillées pour comprendre le ‘pourquoi’.",
        p2: "Indice disponible (2 MathGems).",
        revisionTitle: "Révision",
        revisionP: "À la fin de chaque quiz, rejoue uniquement tes questions non réussies (rejeu ciblé + explications) pour ancrer durablement.",
      },
      challenge: {
        title: "Défi",
        p1: "Affrontements en ligne en 1v1 ou 2v2 contre des joueurs du monde entier.",
        p2: "Parties rapides, intenses et fun.",
        bonus: "Bonus : +30 secondes, Indice.",
      },
    },
    formats: {
      title: "Formats de questions",
      p: "Plusieurs formats pour apprendre en profondeur, pas seulement répondre.",
      items: [
        { title: "QCM", desc: "Choisis la bonne réponse parmi plusieurs propositions." },
        { title: "Vrai/Faux (VF)", desc: "Valide rapidement des affirmations mathématiques." },
        { title: "Input", desc: "Saisis la réponse exacte pour vérifier ta maîtrise." },
        { title: "Pair Matching", desc: "Associe les bonnes paires (définition ↔ exemple, propriété ↔ formule…)." },
      ],
    },
    gamif: {
      title: "Gamification & Économie",
      p1: "Les MathGems sont la monnaie de Matero : utilise-les pour activer des indices et des bonus au bon moment.",
    },
    program: {
      title: "Bilingue & Programme",
      p1: "FR/EN : une expérience accessible au plus grand nombre.",
      p2: "Aligné sur le programme officiel pour couvrir les attentes scolaires.",
    },
    author: {
      title: "L’Auteur",
      p: "Née d’une passion pour le développement et les mathématiques, Matero vise à réconcilier les élèves avec les maths grâce au jeu, à l’histoire et au challenge.",
    },
    faq: {
      title: "FAQ",
      q1: "Qu’est-ce que la Révision ?",
      a1: "Après chaque quiz, Matero liste tes questions non réussies et te propose un replay ciblé avec explications.",
      q2: "Quels types de questions propose Matero ?",
      a2: "QCM, Vrai/Faux, Input, Pair Matching (et autres), toujours avec explications.",
      q3: "À quoi servent les MathGems ?",
      a3: "À activer des indices/bonus dans les différents modes pour progresser plus vite.",
    },
    cta: {
      title: "Prêt à (ré)aimer les maths ?",
      p: "Télécharge Matero et commence l’aventure.",
      button: "Télécharger Matero",
    },
    footer: {
      rights: "© Matero – Tous droits réservés",
    },
  },
  en: {
    nav: {
      modes: "Modes",
      formats: "Question Types",
      revision: "Revision",
      programme: "Curriculum",
      auteur: "Author",
      faq: "FAQ",
      download: "Download",
      lang: "FR",
    },
    hero: {
      title: "Learn math by playing",
      subtitle: "Bilingual FR/EN, aligned with the official curriculum. Middle to High School.",
      ctaPrimary: "Download",
      ctaSecondary: "Try now",
    },
    why: {
      title: "Why Matero?",
      p1: "Math is often perceived as abstract and difficult.",
      p2: "Matero turns learning into a playful experience: interactive quizzes, clear explanations, and motivating progression.",
      p3: "Content strictly aligned with the official curriculum, useful in class and for exams.",
    },
    modes: {
      title: "The 3 key modes",
      adventure: {
        title: "Adventure",
        p1: "Welcome to Matropolis: seven scholars were captured (one per grade, 6th to 12th).",
        p2: "Free one scholar per episode by clearing the level’s challenges (e.g., Euclid for 6th grade).",
        bonus: "Bonuses: Time Freeze, Hint.",
      },
      learning: {
        title: "Learning",
        p1: "Quizzes with detailed explanations to understand the ‘why’.",
        p2: "Hint available (2 MathGems).",
        revisionTitle: "Revision",
        revisionP: "At the end of each quiz, replay only the questions you missed (targeted replay + explanations) to create lasting mastery.",
      },
      challenge: {
        title: "Challenge",
        p1: "Online matches in 1v1 or 2v2 against players worldwide.",
        p2: "Fast, intense, and fun rounds.",
        bonus: "Bonuses: +30 seconds, Hint.",
      },
    },
    formats: {
      title: "Question types",
      p: "Several formats to truly learn, not just answer.",
      items: [
        { title: "MCQ", desc: "Pick the correct answer among several choices." },
        { title: "True/False", desc: "Quickly validate statements." },
        { title: "Input", desc: "Type the exact result to check your mastery." },
        { title: "Pair Matching", desc: "Match correct pairs (definition ↔ example, property ↔ formula, etc.)." },
      ],
    },
    gamif: {
      title: "Gamification & Economy",
      p1: "MathGems are Matero’s currency: use them to activate hints and bonuses at the right time.",
    },
    program: {
      title: "Bilingual & Curriculum",
      p1: "FR/EN experience accessible to a wide audience.",
      p2: "Aligned with the official curriculum to meet school expectations.",
    },
    author: {
      title: "Author",
      p: "Born from a passion for development and mathematics, Matero’s mission is to reconcile students with math through play, story, and challenge.",
    },
    faq: {
      title: "FAQ",
      q1: "What is the Revision module?",
      a1: "After each quiz, Matero lists your missed questions and proposes a targeted replay with explanations.",
      q2: "Which question types are available?",
      a2: "MCQ, True/False, Input, Pair Matching (and others), always with explanations.",
      q3: "What are MathGems for?",
      a3: "To activate hints/bonuses across modes and progress faster.",
    },
    cta: {
      title: "Ready to love math again?",
      p: "Download Matero and start the adventure.",
      button: "Download Matero",
    },
    footer: {
      rights: "© Matero – All rights reserved",
    },
  },
};

/* —————————————————————————————————————————————————————————————— */
/*                              UI                                */
/* —————————————————————————————————————————————————————————————— */
export default function Landing() {
  const [lang, setLang] = useState<'fr' | 'en'>("fr");
  const T = TEXT[lang];

  return (
    <>
      <Head>
        <title>Matero — Apprends les maths en jouant (FR/EN, programme officiel)</title>
        <meta name="description" content="Application de mathématiques gamifiée : Aventure, Apprentissage (explications + Révision), Défi 1v1/2v2, QCM/VF/Input/Pair Matching. Bilingue FR/EN. Programme officiel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logoRow}>
          <img src={IMAGES.logo} alt="Logo Matero" style={{ height: 36 }} />
          <nav style={styles.nav} aria-label="Primary">
            <a href="#modes" style={styles.navLink}>{T.nav.modes}</a>
            <a href="#formats" style={styles.navLink}>{T.nav.formats}</a>
            <a href="#revision" style={styles.navLink}>{T.nav.revision}</a>
            <a href="#programme" style={styles.navLink}>{T.nav.programme}</a>
            <a href="#auteur" style={styles.navLink}>{T.nav.auteur}</a>
            <a href="#faq" style={styles.navLink}>{T.nav.faq}</a>
            <a href="#download" style={{...styles.navLink, ...styles.downloadBtn}}>{T.nav.download}</a>
            <button onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')} style={styles.langBtn}>{T.nav.lang}</button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.h1}>{T.hero.title}</h1>
          <p style={styles.lead}>{T.hero.subtitle}</p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <a href={PLAY_STORE} target="_blank" rel="noreferrer" style={styles.ctaPrimary}>{T.hero.ctaPrimary}</a>
            <a href="#modes" style={styles.ctaSecondary}>{T.hero.ctaSecondary}</a>
          </div>
        </div>
        <div style={styles.heroRight}>
          <img src={IMAGES.hero} alt="Aperçu de l’application Matero sur smartphone" style={styles.heroImg} />
        </div>
      </section>

      {/* Pourquoi */}
      <section style={styles.section}>
        <h2 style={styles.h2}>{T.why.title}</h2>
        <div style={styles.grid2}>
          <p style={styles.p}>{T.why.p1}</p>
          <p style={styles.p}>{T.why.p2}</p>
          <p style={styles.p}>{T.why.p3}</p>
          <img src={IMAGES.why} alt="Illustration Pourquoi Matero" style={styles.cardImg} />
        </div>
      </section>

      {/* Modes */}
      <section id="modes" style={styles.section}>
        <h2 style={styles.h2}>{T.modes.title}</h2>
        <div style={styles.modeRow}>
          <div style={styles.modeCard}>
            <img src={IMAGES.aventure} alt="Mode Aventure — Matropolis et progression par épisodes" style={styles.cardImg} />
            <h3 style={styles.h3}>{T.modes.adventure.title}</h3>
            <p style={styles.p}>{T.modes.adventure.p1}</p>
            <p style={styles.p}>{T.modes.adventure.p2}</p>
            <p style={styles.small}>{T.modes.adventure.bonus}</p>
          </div>
          <div style={styles.modeCard}>
            <img src={IMAGES.apprentissage} alt="Mode Apprentissage — quiz et explications détaillées" style={styles.cardImg} />
            <h3 style={styles.h3}>{T.modes.learning.title}</h3>
            <p style={styles.p}>{T.modes.learning.p1}</p>
            <p style={styles.p}>{T.modes.learning.p2}</p>
            <div id="revision" style={styles.revisionBox}>
              <img src={IMAGES.revision} alt="Module Révision — rejouer les questions non réussies" style={styles.revisionImg} />
              <div>
                <strong>{T.modes.learning.revisionTitle}</strong>
                <p style={{ ...styles.p, marginTop: 6 }}>{T.modes.learning.revisionP}</p>
              </div>
            </div>
          </div>
          <div style={styles.modeCard}>
            <img src={IMAGES.defi} alt="Mode Défi — affrontement en ligne 1v1/2v2" style={styles.cardImg} />
            <h3 style={styles.h3}>{T.modes.challenge.title}</h3>
            <p style={styles.p}>{T.modes.challenge.p1}</p>
            <p style={styles.p}>{T.modes.challenge.p2}</p>
            <p style={styles.small}>{T.modes.challenge.bonus}</p>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section id="formats" style={styles.section}>
        <h2 style={styles.h2}>{T.formats.title}</h2>
        <p style={styles.p}>{T.formats.p}</p>
        <div style={styles.grid4}>
          <FormatCard title={T.formats.items[0].title} desc={T.formats.items[0].desc} img={IMAGES.qcm} alt="QCM – liste d’options" />
          <FormatCard title={T.formats.items[1].title} desc={T.formats.items[1].desc} img={IMAGES.vf} alt="Vrai/Faux – cartes ou interrupteur" />
          <FormatCard title={T.formats.items[2].title} desc={T.formats.items[2].desc} img={IMAGES.input} alt="Input – champ de réponse" />
          <FormatCard title={T.formats.items[3].title} desc={T.formats.items[3].desc} img={IMAGES.matching} alt="Pair Matching – appariement de cartes" />
        </div>
      </section>

      {/* Gamification */}
      <section style={styles.section}>
        <h2 style={styles.h2}>{T.gamif.title}</h2>
        <div style={styles.grid2}>
          <p style={styles.p}>{T.gamif.p1}</p>
          <img src={IMAGES.gems} alt="MathGems – monnaie du jeu" style={styles.cardImg} />
        </div>
      </section>

      {/* Programme */}
      <section id="programme" style={styles.section}>
        <h2 style={styles.h2}>{T.program.title}</h2>
        <div style={styles.grid2}>
          <div>
            <p style={styles.p}>{T.program.p1}</p>
            <p style={styles.p}>{T.program.p2}</p>
          </div>
          <img src={IMAGES.programme} alt="Bilingue FR/EN et aligné sur le programme officiel" style={styles.cardImg} />
        </div>
      </section>

      {/* Auteur */}
      <section id="auteur" style={styles.section}>
        <h2 style={styles.h2}>{T.author.title}</h2>
        <div style={styles.authorBox}>
          <img src={IMAGES.author} alt="L’auteur de Matero" style={styles.authorImg} />
          <p style={{ ...styles.p, marginLeft: 16 }}>{T.author.p}</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={styles.section}>
        <h2 style={styles.h2}>{T.faq.title}</h2>
        <div style={styles.faq}>
          <details style={styles.details}>
            <summary style={styles.summary}>{T.faq.q1}</summary>
            <p style={styles.p}>{T.faq.a1}</p>
          </details>
          <details style={styles.details}>
            <summary style={styles.summary}>{T.faq.q2}</summary>
            <p style={styles.p}>{T.faq.a2}</p>
          </details>
          <details style={styles.details}>
            <summary style={styles.summary}>{T.faq.q3}</summary>
            <p style={styles.p}>{T.faq.a3}</p>
          </details>
        </div>
      </section>

      {/* CTA final */}
      <section id="download" style={{ ...styles.section, ...styles.ctaSection }}>
        <h2 style={styles.h2}>{T.cta.title}</h2>
        <p style={styles.p}>{T.cta.p}</p>
        <a href={PLAY_STORE} target="_blank" rel="noreferrer" style={styles.ctaPrimary}>{T.cta.button}</a>
      </section>

      <footer style={styles.footer}>
        <p style={styles.small}>{T.footer.rights}</p>
      </footer>
    </>
  );
}

function FormatCard({ title, desc, img, alt }: { title: string; desc: string; img: string; alt: string }) {
  return (
    <div style={styles.card}>
      <img src={img} alt={alt} style={styles.cardImg} />
      <h3 style={styles.h3}>{title}</h3>
      <p style={styles.p}>{desc}</p>
    </div>
  );
}

/* —————————————————————————————————————————————————————————————— */
/*                              STYLES                            */
/* —————————————————————————————————————————————————————————————— */
const COLORS = {
  primary: "#5A2D91",
  primaryLight: "#7451C8",
  bg: "#F7F4FF",
  text: "#24134B",
  textSoft: "#4A3D75",
  card: "#FFFFFF",
  border: "#E6E0FA",
};

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: COLORS.card,
    borderBottom: `1px solid ${COLORS.border}`,
  },
  logoRow: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: { display: "flex", alignItems: "center", gap: 14 },
  navLink: { color: COLORS.textSoft, textDecoration: "none", fontSize: 14 },
  downloadBtn: {
    padding: "8px 12px",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
  },
  langBtn: {
    border: `1px solid ${COLORS.border}`,
    background: COLORS.card,
    color: COLORS.text,
    padding: "6px 10px",
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 13,
  },

  hero: {
    maxWidth: 1120,
    margin: "24px auto 0",
    padding: "32px 16px",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 24,
    alignItems: "center",
  },
  heroLeft: {},
  heroRight: { textAlign: "right" },
  heroImg: { width: "100%", maxWidth: 480, borderRadius: 16, boxShadow: "0 10px 30px rgba(90,45,145,0.25)" },

  h1: { fontSize: 40, color: COLORS.text, margin: 0 },
  h2: { fontSize: 28, color: COLORS.text, margin: "0 0 16px 0" },
  h3: { fontSize: 18, color: COLORS.text, margin: "8px 0" },
  lead: { color: COLORS.textSoft, fontSize: 18, marginTop: 10 },
  p: { color: COLORS.textSoft, lineHeight: 1.6, margin: "8px 0" },
  small: { color: COLORS.textSoft, fontSize: 13 },

  ctaPrimary: {
    background: COLORS.primary,
    color: "#fff",
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    display: "inline-block",
  },
  ctaSecondary: {
    background: COLORS.card,
    color: COLORS.primary,
    padding: "12px 16px",
    borderRadius: 12,
    textDecoration: "none",
    border: `1px solid ${COLORS.border}`,
    display: "inline-block",
  },

  section: {
    maxWidth: 1120,
    margin: "48px auto 0",
    padding: "0 16px",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    alignItems: "center",
  },
  grid4: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 16,
  },
  card: {
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 14,
    padding: 14,
  },
  cardImg: {
    width: "100%",
    height: "auto",
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
  },
  modeRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
  },
  modeCard: {
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 14,
    padding: 16,
  },
  revisionBox: {
    marginTop: 10,
    display: "grid",
    gridTemplateColumns: "72px 1fr",
    gap: 12,
    alignItems: "center",
    background: COLORS.bg,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 12,
    padding: 10,
  },
  revisionImg: {
    width: 72,
    height: 72,
    objectFit: "cover",
    borderRadius: 10,
    border: `1px solid ${COLORS.border}`,
  },
  authorBox: {
    display: "flex",
    alignItems: "center",
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 14,
    padding: 14,
  },
  authorImg: {
    width: 72,
    height: 72,
    borderRadius: "50%",
    objectFit: "cover",
    border: `1px solid ${COLORS.border}`,
  },
  faq: { display: "grid", gap: 10 },
  details: { background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: 12 },
  summary: { cursor: "pointer", color: COLORS.text },

  ctaSection: {
    textAlign: "center",
    background: COLORS.bg,
    padding: "24px 16px",
    borderRadius: 16,
  },
  footer: {
    marginTop: 40,
    padding: 20,
    textAlign: "center",
    borderTop: `1px solid ${COLORS.border}`,
  },
};



