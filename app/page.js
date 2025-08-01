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

const TEXT = {
  fr: {
    nav: { home: "Accueil", features: "Fonctionnalités", faq: "FAQ", about: "À propos", contact: "Contact", lang: "EN" },
    slogan: "Apprends, progresse, deviens un héros des maths !",
    desc: "MathHero transforme les maths en aventure. Quiz, défis, avatars, badges et classement : tout pour te motiver et t’aider à progresser du collège au lycée.",
    play: "Télécharger sur Google Play",
    featuresTitle: "Fonctionnalités clés",
    features: [
      "🎯 Quiz interactifs, auto-corrigés et adaptés à ton niveau",
      "📚 Basé sur le programme officiel, idéal pour réviser et réussir les examens",
      "🏆 Podium hebdomadaire : chaque semaine, les 3 meilleurs élèves sont mis à l’honneur avec des récompenses uniques",
      "🔥 Classement quotidien, national et entre amis : défie élèves du monde entier",
      "👤 Avatars, badges, progression ludique et motivation renforcée",
      "🌍 Plateforme internationale, contenus adaptés à chaque pays",
      "🆓 100% gratuit"
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      { q: "Est-ce vraiment gratuit ?", a: "Oui, MathHero est 100% gratuit." },
      { q: "Sur quel programme s’appuie MathHero ?", a: "MathHero suit fidèlement le programme officiel, ce qui facilite la préparation aux examens nationaux et internationaux." },
      { q: "Qu’est-ce que le podium hebdomadaire ?", a: "Chaque semaine, les 3 meilleurs élèves de la plateforme sont mis en avant avec des avatars et badges spéciaux." },
      { q: "Quels niveaux sont couverts ?", a: "Du collège (6e) au lycée (Terminale), et bientôt plus !" },
      { q: "Comment puis-je sauvegarder mes progrès ?", a: "Crée un compte gratuitement pour garder ton historique, tes récompenses, et accéder au classement." },
      { q: "MathHero fonctionne-t-il dans mon pays ?", a: "Oui, MathHero est international, mais chaque quiz suit le programme officiel de ton pays." },
    ],
    aboutTitle: "À propos du créateur",
    about: "MathHero a été conçu et développé par Kouadio Ange Aristide, professeur certifié de mathématiques en lycée, fort de 15 ans d’expérience. Convaincu que la réussite scolaire passe par la confiance, le plaisir d’apprendre et une préparation ciblée, il a créé MathHero pour offrir à chaque élève un accompagnement efficace, conforme au programme officiel, pour réussir au collège, au lycée et aux examens nationaux.",
    contact: "Une question, une suggestion ? Contacte-moi :",
    email: "support@mathhero.app",
    legal: "Mentions légales",
    copyright: "© 2025 MathHero – Créé par Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Professeur certifié de mathématiques en lycée, développeur et créateur de MathHero. Passionné par l’éducation, la pédagogie et le numérique."
    }
  },
  en: {
    nav: { home: "Home", features: "Features", faq: "FAQ", about: "About", contact: "Contact", lang: "FR" },
    slogan: "Learn, progress, become a math hero!",
    desc: "MathHero turns math into an adventure. Quizzes, challenges, avatars, badges and leaderboard keep you motivated from middle to high school.",
    play: "Download on Google Play",
    featuresTitle: "Key Features",
    features: [
      "🎯 Interactive, auto-graded quizzes tailored to your level",
      "📚 Based on the official curriculum – perfect for revising and passing exams",
      "🏆 Weekly podium: the top 3 students each week are rewarded and featured",
      "🔥 Daily, national & friends leaderboard – challenge students worldwide",
      "👤 Avatars, badges, fun rewards and gamified progression",
      "🌍 International platform: content tailored to each country",
      "🆓 100% free"
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      { q: "Is it really free?", a: "Yes, MathHero is completely free." },
      { q: "What curriculum does MathHero follow?", a: "MathHero is strictly based on the official curriculum, making it ideal for preparing for national and international exams." },
      { q: "What is the weekly podium?", a: "Each week, the top 3 students of the platform are featured and receive special avatars and badges." },
      { q: "Which grades are covered?", a: "From grade 6 to grade 12 (Terminale), and more coming soon!" },
      { q: "How can I save my progress?", a: "Create a free account to save your history, rewards, and access the leaderboard." },
      { q: "Is MathHero available in my country?", a: "Yes! MathHero is an international platform, but each quiz follows the official curriculum of your country." },
    ],
    aboutTitle: "About the creator",
    about: "MathHero was designed and developed by Kouadio Ange Aristide, a certified high school mathematics teacher with 15 years of experience. Passionate about helping every student succeed, he believes that confidence, enjoyment and targeted learning are key. MathHero was created to provide effective support fully aligned with the official curriculum, helping students thrive at school and prepare for national exams.",
    contact: "Questions or suggestions? Get in touch:",
    email: "support@mathhero.app",
    legal: "Legal notice",
    copyright: "© 2025 MathHero – Created by Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Certified high school mathematics teacher, developer and creator of MathHero. Passionate about education, pedagogy and digital learning."
    }
  }
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
    <div style={{ background: COLORS.background, minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <Head>
        <title>MathHero | {t.slogan}</title>
        <meta name="description" content={t.desc} />
        <meta property="og:title" content={`MathHero | ${t.slogan}`} />
        <meta property="og:description" content={t.desc} />
        <meta property="og:image" content={LOGO} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      {/* HEADER & BURGER */}
      <header style={{
        position: "sticky", top: 0, zIndex: 30, background: `${COLORS.background}cc`, backdropFilter: "blur(7px)",
        borderBottom: "1px solid #ECE2F7", display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 0 10px 0", maxWidth: 950, margin: "0 auto"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image src={LOGO} alt="MathHero logo" width={48} height={48} style={{ borderRadius: 12 }} />
          <span style={{ fontWeight: 800, fontSize: 24, color: COLORS.primary, letterSpacing: -1 }}>MathHero</span>
        </div>
        {/* Desktop navigation */}
        <nav className="desktop-nav" style={{ display: "flex", gap: 22, alignItems: "center" }}>
          {[{ id: "hero", label: t.nav.home },
            { id: "features", label: t.nav.features },
            { id: "faq", label: t.nav.faq },
            { id: "about", label: t.nav.about },
            { id: "contact", label: t.nav.contact }]
            .map(({ id, label }) => (
              <button key={id} onClick={() => scrollTo(id)} style={navBtnStyle}>{label}</button>
          ))}
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{
              ...navBtnStyle,
              background: "#fff", color: COLORS.primary,
              border: "1.5px solid #ECE2F7",
              borderRadius: 18, padding: "6px 18px"
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
            background: "none", border: "none", cursor: "pointer", padding: 8,
            borderRadius: 10
          }}
        >
          <span style={{ fontSize: 32, color: COLORS.primary }}>☰</span>
        </button>
        {/* Overlay menu */}
        {menuOpen && (
          <div
            style={{
              position: "fixed", inset: 0, background: `${COLORS.background}ee`, zIndex: 100,
              display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 70
            }}
          >
            <button
              aria-label="Fermer le menu"
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute", top: 20, right: 20, fontSize: 32,
                background: "none", border: "none", color: COLORS.primary, cursor: "pointer"
              }}
            >✕</button>
            {[{ id: "hero", label: t.nav.home },
              { id: "features", label: t.nav.features },
              { id: "faq", label: t.nav.faq },
              { id: "about", label: t.nav.about },
              { id: "contact", label: t.nav.contact }]
              .map(({ id, label }) => (
                <button key={id} onClick={() => scrollTo(id)} style={burgerBtnStyle}>{label}</button>
            ))}
            <button
              onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setMenuOpen(false); }}
              style={{
                ...burgerBtnStyle,
                background: "#fff", color: COLORS.primary, border: "1.5px solid #ECE2F7", marginTop: 18
              }}
            >
              {t.nav.lang}
            </button>
          </div>
        )}
        {/* Responsive CSS */}
        <style jsx global>{`
          @media (max-width: 800px) {
            .desktop-nav { display: none !important; }
            .burger-btn { display: block !important; }
          }
          @media (min-width: 801px) {
            .burger-btn { display: none !important; }
            .desktop-nav { display: flex !important; }
          }
        `}</style>
      </header>

      {/* HERO */}
      <section id="hero" style={{
        padding: "56px 10px 32px 10px", maxWidth: 900, margin: "0 auto", textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 42, fontWeight: 900, marginBottom: 18, letterSpacing: -2, color: COLORS.primary
        }}>
          {t.slogan}
        </h1>
        <p style={{
          fontSize: 21, color: COLORS.textDark, margin: "0 0 20px 0", fontWeight: 500, maxWidth: 650, marginLeft: "auto", marginRight: "auto"
        }}>
          {t.desc}
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.kanaristech.mathhero"
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
            boxShadow: hoverPlay ? "0 4px 22px rgba(116,81,200,0.35)" : "0 2px 16px rgba(90,45,145,0.18)",
            transition: "background .25s, box-shadow .18s",
            display: "inline-block",
            marginBottom: 34,
            marginTop: 10
          }}
        >
          {t.play}
        </a>
        <div style={{ margin: "32px 0 10px 0", display: "flex", gap: 26, justifyContent: "center", flexWrap: "wrap" }}>
          <Image src={SCREEN1} alt="MathHero quiz" width={180} height={340} style={screenStyle} />
          <Image src={SCREEN2} alt="MathHero accueil" width={180} height={340} style={screenStyle} />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{
        maxWidth: 880, margin: "0 auto", padding: "36px 10px"
      }}>
        <h2 style={{
          fontSize: 28, fontWeight: 700, color: COLORS.primary, marginBottom: 22, textAlign: "center"
        }}>
          {t.featuresTitle}
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: 460 }}>
          {t.features.map((f, i) => (
            <li key={i} style={{
              fontSize: 18, background: "#fff", marginBottom: 13, borderRadius: 12, padding: "13px 20px",
              boxShadow: "0 1px 8px rgba(90,45,145,0.09)", fontWeight: 500, color: COLORS.textDark
            }}>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" style={{
        background: COLORS.background, marginTop: 48, padding: "38px 0"
      }}>
        <div style={{
          maxWidth: 700, margin: "0 auto", textAlign: "center", fontSize: 17, color: "#444"
        }}>
          <h2 style={{ fontWeight: 700, fontSize: 25, marginBottom: 20, color: COLORS.primary }}>{t.faqTitle}</h2>
          {t.faq.map((item, i) => (
            <details key={i} style={{
              marginBottom: 13, padding: "12px 18px", background: "#fff", borderRadius: 11, cursor: "pointer",
              border: "1.5px solid #ECE2F7", textAlign: "left"
            }}>
              <summary style={{ fontWeight: 700, color: COLORS.primary, fontSize: 17 }}>{item.q}</summary>
              <div style={{ paddingTop: 7, color: "#333" }}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{
        background: "#fff", maxWidth: 750, margin: "46px auto 0", borderRadius: 16,
        padding: 34, boxShadow: "0 2px 18px rgba(116,81,200,0.16)", textAlign: "center"
      }}>
        <h2 style={{ fontWeight: 700, fontSize: 25, color: COLORS.primary, marginBottom: 14 }}>{t.aboutTitle}</h2>
        <Image src={AVATAR} alt={t.creator.name} width={88} height={88} style={{
          borderRadius: "50%", marginBottom: 13, objectFit: "cover", boxShadow: "0 2px 12px rgba(90,45,145,0.15)"
        }} />
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 6 }}>{t.creator.name}</div>
        <div style={{ color: "#555", fontSize: 16, marginBottom: 11 }}>{t.creator.bio}</div>
        <div style={{ color: "#888", fontSize: 15, marginBottom: 10 }}>{t.about}</div>
        <a href="mailto:contact@mathhero.app" style={{ color: COLORS.primary, fontWeight: 700, fontSize: 17, textDecoration: "underline" }}>{t.email}</a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        maxWidth: 600, margin: "0 auto", padding: "38px 10px 28px", textAlign: "center"
      }}>
        <h2 style={{ fontWeight: 700, fontSize: 22, color: COLORS.primary, marginBottom: 11 }}>{t.nav.contact}</h2>
        <p style={{ marginBottom: 8, color: COLORS.textDark, fontSize: 16 }}>{t.contact}</p>
        <a
          href="mailto:contact@mathhero.app"
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
            boxShadow: "0 2px 14px rgba(90,45,145,0.22)"
          }}
        >
          {t.email}
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: 35, padding: "16px 0 24px", color: COLORS.primary, textAlign: "center", fontSize: 15
      }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/mentions-legales" style={{ color: COLORS.primary, textDecoration: "underline", marginRight: 12 }}>{t.legal}</a>|
          <a href="mailto:contact@mathhero.app" style={{ color: COLORS.primary, textDecoration: "underline", marginLeft: 12 }}>{t.nav.contact}</a>
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
  transition: "background 0.18s"
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
  color: COLORS.primary
};
const screenStyle = {
  borderRadius: 18,
  objectFit: "cover",
  boxShadow: "0 2px 14px rgba(90,45,145,0.13)"
};
