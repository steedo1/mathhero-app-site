"use client";

import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

// Palette violet nuit
const COLORS = {
  primary: "#5A2D91",
  primaryLight: "#7451C8",
  textDark: "#24134B",
  background: "#F3EFFF",
};

const LOGO = "/logo-mathhero.png";
const SCREEN1 = "/screenshot1.png";
const SCREEN2 = "/screenshot2.png";
const AVATAR = "/avatar-hero.png";

// 🔧 Lien Play Store corrigé sur le bon package
const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.steedo1.mathhero";

const TEXT = {
  fr: {
    nav: {
      home: "Accueil",
      features: "Fonctionnalités",
      faq: "FAQ",
      about: "À propos",
      contact: "Contact",
      lang: "EN",
    },
    slogan: "Apprends, progresse, deviens un héros des maths !",
    desc: "MathHero transforme les maths en aventure. Quiz, défis, avatars, badges et classement : tout pour te motiver et t’aider à progresser du collège au lycée.",
    play: "Télécharger sur Google Play",
    featuresTitle: "Fonctionnalités clés",
    features: [
      "🎯 Quiz interactifs, auto-corrigés et adaptés à ton niveau",
      "📚 Basé sur le programme officiel, idéal pour réviser et réussir les examens",
      "🏆 Podium hebdomadaire : les 3 meilleurs élèves gagnent des récompenses",
      "🔥 Classement quotidien, national et entre amis",
      "👤 Avatars, badges et progression ludique",
      "🌍 Plateforme internationale, contenus adaptés",
      "🆓 100% gratuit",
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Est-ce vraiment gratuit ?", a: "Oui, MathHero est 100% gratuit." },
      {
        q: "Sur quel programme s’appuie MathHero ?",
        a: "Sur le programme officiel, idéal pour préparer les examens.",
      },
      {
        q: "Qu’est-ce que le podium hebdomadaire ?",
        a: "Chaque semaine, les 3 meilleurs élèves sont mis à l’honneur.",
      },
      {
        q: "Quels niveaux sont couverts ?",
        a: "De la 6e à la Terminale, et plus bientôt !",
      },
      {
        q: "Comment sauvegarder mes progrès ?",
        a: "Crée un compte gratuit pour l’historique et le classement.",
      },
      {
        q: "Disponible dans mon pays ?",
        a: "Oui, avec des contenus conformes au programme de ton pays.",
      },
    ],
    aboutTitle: "À propos du créateur",
    about:
      "MathHero a été conçu par Kouadio Ange Aristide, professeur certifié de mathématiques (15 ans d’expérience), pour aider chaque élève à réussir grâce à une progression motivante et conforme au programme.",
    contact: "Une question, une suggestion ?",
    email: "support@mathhero.dev",
    legal: "Mentions légales",
    copyright: "© 2025 MathHero – Créé par Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Professeur certifié, développeur et créateur de MathHero. Passionné par l’éducation et le numérique.",
    },
  },
  en: {
    nav: {
      home: "Home",
      features: "Features",
      faq: "FAQ",
      about: "About",
      contact: "Contact",
      lang: "FR",
    },
    slogan: "Learn, progress, become a math hero!",
    desc: "MathHero turns math into an adventure. Quizzes, challenges, avatars, badges and leaderboard keep you motivated from middle to high school.",
    play: "Download on Google Play",
    featuresTitle: "Key Features",
    features: [
      "🎯 Interactive, auto-graded quizzes tailored to your level",
      "📚 Based on the official curriculum – perfect for exams",
      "🏆 Weekly podium: top 3 students rewarded and featured",
      "🔥 Daily, national & friends leaderboard",
      "👤 Avatars, badges and gamified progression",
      "🌍 International platform, country-tailored content",
      "🆓 100% free",
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { q: "Is it really free?", a: "Yes, MathHero is completely free." },
      {
        q: "Which curriculum?",
        a: "Strictly based on the official curriculum.",
      },
      {
        q: "What is the weekly podium?",
        a: "Top 3 students each week get featured and rewarded.",
      },
      {
        q: "Which grades are covered?",
        a: "From grade 6 to grade 12 (Terminale), more coming soon!",
      },
      {
        q: "How do I save progress?",
        a: "Create a free account for history and leaderboard.",
      },
      {
        q: "Available in my country?",
        a: "Yes, with content aligned to your country’s curriculum.",
      },
    ],
    aboutTitle: "About the creator",
    about:
      "Designed by Kouadio Ange Aristide, a certified high-school math teacher (15 years’ experience), to help every student succeed with engaging, curriculum-aligned learning.",
    contact: "Questions or suggestions?",
    email: "support@mathhero.dev",
    legal: "Legal notice",
    copyright: "© 2025 MathHero – Created by Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Certified math teacher, developer and creator of MathHero.",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState("fr");
  const t = TEXT[lang];
  const [hoverPlay, setHoverPlay] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        background: COLORS.background,
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, Arial, sans-serif",
      }}
    >
      <Head>
        <title>MathHero | {t.slogan}</title>
        <meta name="description" content={t.desc} />
        {/* Canonical corrigé vers .dev */}
        <link rel="canonical" href="https://mathhero.dev/" />
        <meta property="og:title" content={`MathHero | ${t.slogan}`} />
        <meta property="og:description" content={t.desc} />
        <meta property="og:image" content={LOGO} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* HEADER, HERO, FEATURES, FAQ, ABOUT, CONTACT, FOOTER identiques */}
      {/* … (garde tout ton JSX tel qu’avant, juste mails et canonical en .dev) */}
    </div>
  );
}

// STYLES
const navBtnStyle = {
  background: "none",
  border: "none",
  color: COLORS.primary,
  fontWeight: 700,
  fontSize: 17,
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: 8,
  transition: "background 0.18s",
};

const burgerBtnStyle = {
  ...navBtnStyle,
  fontSize: 22,
  width: "80vw",
  maxWidth: 300,
  margin: "14px 0",
  padding: "13px 8px",
  background: "#fff",
  borderRadius: 15,
  border: "1.2px solid #ECE2F7",
  color: COLORS.primary,
};

const screenStyle = {
  borderRadius: 18,
  objectFit: "cover",
  boxShadow: "0 2px 14px rgba(90,45,145,0.13)",
};
