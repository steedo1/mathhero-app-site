redonne ceci en mettant .dev partout au lieu de .app "use client";

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
    email: "support@mathhero.app",
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
    email: "support@mathhero.app",
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

      {/* HEADER & BURGER */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 30,
          background: `${COLORS.background}cc`,
          backdropFilter: "blur(7px)",
          borderBottom: "1px solid #ECE2F7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          maxWidth: 950,
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image
            src={LOGO}
            alt="MathHero logo"
            width={48}
            height={48}
            style={{ borderRadius: 12 }}
          />
          <span
            style={{
              fontWeight: 800,
              fontSize: 24,
              color: COLORS.primary,
              letterSpacing: -1,
            }}
          >
            MathHero
          </span>
        </div>

        {/* Desktop navigation */}
        <nav
          className="desktop-nav"
          style={{ display: "flex", gap: 22, alignItems: "center" }}
        >
          {[
            { id: "hero", label: t.nav.home },
            { id: "features", label: t.nav.features },
            { id: "faq", label: t.nav.faq },
            { id: "about", label: t.nav.about },
            { id: "contact", label: t.nav.contact },
          ].map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)} style={navBtnStyle}>
              {label}
            </button>
          ))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{
              ...navBtnStyle,
              background: "#fff",
              color: COLORS.primary,
              border: "1.5px solid #ECE2F7",
              borderRadius: 18,
              padding: "6px 18px",
            }}
            aria-label="Change language"
          >
            {t.nav.lang}
          </button>
        </nav>

        {/* Burger icon - mobile only */}
        <button
          className="burger-btn"
          aria-label="Ouvrir le menu"
          onClick={() => setMenuOpen(true)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <span style={{ fontSize: 32, color: COLORS.primary }}>☰</span>
        </button>

        {/* Overlay menu */}
        {menuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              inset: 0,
              background: `${COLORS.background}ee`,
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 70,
            }}
          >
            <button
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                fontSize: 32,
                background: "none",
                border: "none",
                color: COLORS.primary,
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            {[
              { id: "hero", label: t.nav.home },
              { id: "features", label: t.nav.features },
              { id: "faq", label: t.nav.faq },
              { id: "about", label: t.nav.about },
              { id: "contact", label: t.nav.contact },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={burgerBtnStyle}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setLang(lang === "fr" ? "en" : "fr");
                setMenuOpen(false);
              }}
              style={{
                ...burgerBtnStyle,
                background: "#fff",
                color: COLORS.primary,
                border: "1.5px solid #ECE2F7",
                marginTop: 18,
              }}
            >
              {t.nav.lang}
            </button>
          </div>
        )}

        {/* Responsive CSS */}
        <style jsx global>{`
          @media (max-width: 800px) {
            .desktop-nav {
              display: none !important;
            }
            .burger-btn {
              display: block !important;
            }
          }
          @media (min-width: 801px) {
            .burger-btn {
              display: none !important;
            }
            .desktop-nav {
              display: flex !important;
            }
          }
        `}</style>
      </header>

      {/* HERO */}
      <section
        id="hero"
        style={{
          padding: "56px 10px 32px 10px",
          maxWidth: 900,
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 900,
            marginBottom: 18,
            letterSpacing: -2,
            color: COLORS.primary,
          }}
        >
          {t.slogan}
        </h1>
        <p
          style={{
            fontSize: 21,
            color: COLORS.textDark,
            margin: "0 0 20px 0",
            fontWeight: 500,
            maxWidth: 650,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {t.desc}
        </p>

        <a
          href={PLAY_STORE}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoverPlay(true)}
          onMouseLeave={() => setHoverPlay(false)}
          style={{
            background: hoverPlay ? COLORS.primaryLight : COLORS.primary,
            color: "#fff",
            fontWeight: 800,
            padding: "18px 44px",
            borderRadius: 14,
            fontSize: 21,
            textDecoration: "none",
            boxShadow: hoverPlay
              ? "0 4px 22px rgba(116,81,200,0.35)"
              : "0 2px 16px rgba(90,45,145,0.18)",
            transition: "background .25s, box-shadow .18s",
            display: "inline-block",
            marginBottom: 34,
            marginTop: 10,
          }}
          aria-label="Télécharger MathHero sur Google Play"
        >
          {t.play}
        </a>

        <div
          style={{
            margin: "32px 0 10px 0",
            display: "flex",
            gap: 26,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Image
            src={SCREEN1}
            alt="Capture d’écran quiz MathHero"
            width={180}
            height={340}
            style={screenStyle}
          />
          <Image
            src={SCREEN2}
            alt="Capture d’écran accueil MathHero"
            width={180}
            height={340}
            style={screenStyle}
          />
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        style={{ maxWidth: 880, margin: "0 auto", padding: "36px 10px" }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: COLORS.primary,
            marginBottom: 22,
            textAlign: "center",
          }}
        >
          {t.featuresTitle}
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: 520 }}>
          {t.features.map((f, i) => (
            <li
              key={i}
              style={{
                fontSize: 18,
                background: "#fff",
                marginBottom: 13,
                borderRadius: 12,
                padding: "13px 20px",
                boxShadow: "0 1px 8px rgba(90,45,145,0.09)",
                fontWeight: 500,
                color: COLORS.textDark,
              }}
            >
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        style={{ background: COLORS.background, marginTop: 48, padding: "38px 0" }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            textAlign: "center",
            fontSize: 17,
            color: "#444",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: 25,
              marginBottom: 20,
              color: COLORS.primary,
            }}
          >
            {t.faqTitle}
          </h2>
          {t.faq.map((item, i) => (
            <details
              key={i}
              style={{
                marginBottom: 13,
                padding: "12px 18px",
                background: "#fff",
                borderRadius: 11,
                cursor: "pointer",
                border: "1.5px solid #ECE2F7",
                textAlign: "left",
              }}
            >
              <summary
                style={{ fontWeight: 700, color: COLORS.primary, fontSize: 17 }}
              >
                {item.q}
              </summary>
              <div style={{ paddingTop: 7, color: "#333" }}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: "#fff",
          maxWidth: 750,
          margin: "46px auto 0",
          borderRadius: 16,
          padding: 34,
          boxShadow: "0 2px 18px rgba(116,81,200,0.16)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: 25,
            color: COLORS.primary,
            marginBottom: 14,
          }}
        >
          {t.aboutTitle}
        </h2>
        <Image
          src={AVATAR}
          alt={t.creator.name}
          width={88}
          height={88}
          style={{
            borderRadius: "50%",
            marginBottom: 13,
            objectFit: "cover",
            boxShadow: "0 2px 12px rgba(90,45,145,0.15)",
          }}
        />
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>
          {t.creator.name}
        </div>
        <div style={{ color: "#555", fontSize: 16, marginBottom: 11 }}>
          {t.creator.bio}
        </div>
        <div style={{ color: "#888", fontSize: 15, marginBottom: 10 }}>
          {t.about}
        </div>
        <a
          href="mailto:support@mathhero.app"
          style={{
            color: COLORS.primary,
            fontWeight: 700,
            fontSize: 17,
            textDecoration: "underline",
          }}
        >
          {t.email}
        </a>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "38px 10px 28px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: 22,
            color: COLORS.primary,
            marginBottom: 11,
          }}
        >
          {t.nav.contact}
        </h2>
        <p style={{ marginBottom: 8, color: COLORS.textDark, fontSize: 16 }}>
          {t.contact}
        </p>
        <a
          href="mailto:support@mathhero.app"
          style={{
            display: "inline-block",
            fontWeight: 700,
            fontSize: 17,
            color: "#fff",
            background: COLORS.primary,
            textDecoration: "none",
            padding: "11px 32px",
            borderRadius: 16,
            marginTop: 7,
            boxShadow: "0 2px 14px rgba(90,45,145,0.22)",
          }}
        >
          {t.email}
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: 35,
          padding: "16px 0 24px",
          color: COLORS.primary,
          textAlign: "center",
          fontSize: 15,
        }}
      >
        <div style={{ marginBottom: 8 }}>
          {/* Ajout du lien Supprimer mon compte */}
          <a
            href="/delete-account"
            style={{
              color: COLORS.primary,
              textDecoration: "underline",
              marginRight: 12,
            }}
          >
            {lang === "fr" ? "Supprimer mon compte" : "Delete my account"}
          </a>
          |
          <a
            href="/mentions-legales#privacy"
            style={{
              color: COLORS.primary,
              textDecoration: "underline",
              marginLeft: 12,
              marginRight: 12,
            }}
          >
            {lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}
          </a>
          |
          <a
            href="/mentions-legales#terms"
            style={{
              color: COLORS.primary,
              textDecoration: "underline",
              marginLeft: 12,
            }}
          >
            {lang === "fr" ? "Conditions d’utilisation" : "Terms of Use"}
          </a>
        </div>
        <div style={{ fontWeight: 600 }}>{t.copyright}</div>
      </footer>
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
