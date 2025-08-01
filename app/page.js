"use client";
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

// IMAGES
const LOGO = "/logo-mathhero.png"; // 200x200px recommandé
const SCREEN1 = "/screenshot1.png";
const SCREEN2 = "/screenshot2.png";
const AVATAR = "/avatar-hero.png"; // Facultatif, illustration fun

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
    slogan: "Apprends, progresse, deviens un héros des maths !",
    desc: "MathHero transforme les maths en aventure. Quiz, défis, avatars, badges et classement : tout pour te motiver et t’aider à progresser du collège au lycée.",
    play: "Télécharger sur Google Play",
    featuresTitle: "Fonctionnalités clés",
    features: [
      "🎯 Quiz interactifs, auto-corrigés et adaptés à ton niveau",
      "🏆 Gagne des avatars, badges et monte dans le classement",
      "🚀 Système de progression fun, XP, récompenses, défis",
      "👫 Classement national et entre amis",
      "🆓 100% gratuit"
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      {
        q: "Est-ce vraiment gratuit ?",
        a: "Oui, MathHero est 100% gratuit."
      },
      {
        q: "Quels niveaux sont couverts ?",
        a: "Du collège (6e) au lycée (Terminale), et bientôt plus !"
      },
      {
        q: "Comment puis-je sauvegarder mes progrès ?",
        a: "Crée un compte gratuitement pour garder ton historique, tes récompenses, et accéder au classement."
      }
    ],
    aboutTitle: "À propos du créateur",
    about: "Développé avec passion par Kouadio Ange Aristide, jeune développeur ivoirien, convaincu que la réussite scolaire passe par la confiance et le plaisir d’apprendre. MathHero est né pour aider tous les élèves à s’épanouir en maths.",
    contact: "Une question, une suggestion ? Contacte-moi :",
    email: "contact@mathhero.app",
    legal: "Mentions légales",
    copyright: "© 2025 MathHero – Créé par Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Développeur, créateur de MathHero. Passionné d'éducation et de technologie. Ouvert à des collaborations !"
    }
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
    desc: "MathHero turns math into an adventure. Quizzes, challenges, avatars, badges and leaderboard: everything to keep you motivated and help you progress from middle to high school.",
    play: "Download on Google Play",
    featuresTitle: "Key Features",
    features: [
      "🎯 Interactive, auto-graded quizzes tailored to your level",
      "🏆 Earn avatars, badges and climb the leaderboard",
      "🚀 Fun progression system, XP, rewards, challenges",
      "👫 National and friends leaderboard",
      "🆓 100% free, no ads"
    ],
    faqTitle: "Frequently Asked Questions",
    faq: [
      {
        q: "Is it really free?",
        a: "Yes, MathHero is 100% free and ad-free."
      },
      {
        q: "Which grades are covered?",
        a: "From grade 6 to grade 12 (Terminale), and more coming soon!"
      },
      {
        q: "How can I save my progress?",
        a: "Create a free account to save your history, rewards, and access the leaderboard."
      }
    ],
    aboutTitle: "About the creator",
    about: "Developed with passion by Kouadio Ange Aristide, a young Ivorian developer, convinced that success in school comes from confidence and the joy of learning. MathHero was born to help every student thrive in math.",
    contact: "Questions or suggestions? Get in touch:",
    email: "contact@mathhero.app",
    legal: "Legal notice",
    copyright: "© 2025 MathHero – Created by Kouadio Ange Aristide",
    creator: {
      name: "Kouadio Ange Aristide",
      bio: "Developer, creator of MathHero. Passionate about education and technology. Open to collaborations!"
    }
  }
};

export default function Home() {
  const [lang, setLang] = useState("fr");
  const t = TEXT[lang];
  const [hoverPlay, setHoverPlay] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{
      background: "#F3EFFF",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif"
    }}>
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

      {/* HEADER */}
      <header style={{
        position: "sticky", top: 0, zIndex: 10, background: "#F3EFFFcc",
        backdropFilter: "blur(7px)", borderBottom: "1px solid #ECE2F7",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 0 10px 0", maxWidth: 950, margin: "0 auto"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Image src={LOGO} alt="MathHero logo" width={48} height={48} style={{ borderRadius: 12 }} />
          <span style={{ fontWeight: 800, fontSize: 24, color: "#8F41FF", letterSpacing: -1 }}>MathHero</span>
        </div>
        <nav style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <button onClick={() => scrollTo("hero")} style={navBtnStyle}>{t.nav.home}</button>
          <button onClick={() => scrollTo("features")} style={navBtnStyle}>{t.nav.features}</button>
          <button onClick={() => scrollTo("faq")} style={navBtnStyle}>{t.nav.faq}</button>
          <button onClick={() => scrollTo("about")} style={navBtnStyle}>{t.nav.about}</button>
          <button onClick={() => scrollTo("contact")} style={navBtnStyle}>{t.nav.contact}</button>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{
              ...navBtnStyle,
              background: "#fff", color: "#8F41FF", border: "1.5px solid #ECE2F7",
              borderRadius: 18, padding: "6px 18px"
            }}
            aria-label="Change language"
          >
            {t.nav.lang}
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" style={{
        padding: "56px 10px 32px 10px", maxWidth: 900, margin: "0 auto", textAlign: "center"
      }}>
        <h1 style={{
          fontSize: 42, fontWeight: 900, marginBottom: 18, letterSpacing: -2, color: "#8F41FF"
        }}>
          {t.slogan}
        </h1>
        <p style={{
          fontSize: 21, color: "#2C165A", margin: "0 0 20px 0", fontWeight: 500, maxWidth: 650, marginLeft: "auto", marginRight: "auto"
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
            background: hoverPlay ? "#39D0FF" : "#8F41FF",
            color: "#fff",
            fontWeight: 800,
            padding: "18px 44px",
            borderRadius: 14,
            fontSize: 21,
            textDecoration: "none",
            boxShadow: hoverPlay ? "0 4px 22px #9de3f066" : "0 2px 16px #a77fff19",
            transition: "background 0.25s, box-shadow 0.18s",
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
          fontSize: 28, fontWeight: 700, color: "#8F41FF", marginBottom: 22, textAlign: "center"
        }}>
          {t.featuresTitle}
        </h2>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 auto", maxWidth: 460 }}>
          {t.features.map((f, i) => (
            <li key={i} style={{
              fontSize: 18, background: "#fff", marginBottom: 13, borderRadius: 12, padding: "13px 20px",
              boxShadow: "0 1px 8px #8f41ff12", fontWeight: 500, color: "#2C165A"
            }}>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" style={{
        background: "#F3EFFF", margin: "48px 0 0 0", padding: "38px 0"
      }}>
        <div style={{
          maxWidth: 700, margin: "0 auto", textAlign: "center", fontSize: 17, color: "#444"
        }}>
          <h2 style={{ fontWeight: 700, fontSize: 25, marginBottom: 20, color: "#8F41FF" }}>{t.faqTitle}</h2>
          {t.faq.map((item, i) => (
            <details key={i} style={{
              marginBottom: 13, padding: "12px 18px", background: "#fff", borderRadius: 11, cursor: "pointer",
              border: "1.5px solid #E0D1F8", textAlign: "left"
            }}>
              <summary style={{ fontWeight: 700, color: "#8F41FF", fontSize: 17 }}>{item.q}</summary>
              <div style={{ paddingTop: 7, color: "#333" }}>{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* À PROPOS DU CREATEUR */}
      <section id="about" style={{
        background: "#fff",
        maxWidth: 750,
        margin: "46px auto 0 auto",
        borderRadius: 16,
        padding: 34,
        boxShadow: "0 2px 18px #b694ee28",
        textAlign: "center"
      }}>
        <h2 style={{fontWeight:700, fontSize:25, color:"#8F41FF", marginBottom:14}}>{t.aboutTitle}</h2>
        <Image
          src={AVATAR}
          alt={t.creator.name}
          width={88}
          height={88}
          style={{borderRadius: "50%", marginBottom: 13, objectFit: "cover", boxShadow: "0 2px 12px #8f41ff13"}}
        />
        <div style={{fontWeight: 600, fontSize: 18, marginBottom: 6}}>{t.creator.name}</div>
        <div style={{color:"#444", fontSize:16, marginBottom:11}}>
          {t.creator.bio}
        </div>
        <div style={{color:"#888", fontSize:15, marginBottom:10}}>{t.about}</div>
        <a href="mailto:contact@mathhero.app" style={{color:"#8F41FF", fontWeight:700, fontSize:17, textDecoration: "underline"}}>{t.email}</a>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{
        maxWidth: 600, margin: "0 auto", padding: "38px 10px 28px 10px", textAlign: "center"
      }}>
        <h2 style={{ fontWeight: 700, fontSize: 22, color: "#8F41FF", marginBottom: 11 }}>{t.nav.contact}</h2>
        <p style={{ marginBottom: 8, color: "#2C165A", fontSize: 16 }}>{t.contact}</p>
        <a
          href="mailto:contact@mathhero.app"
          style={{
            display: "inline-block",
            fontWeight: 700,
            fontSize: 17,
            color: "#fff",
            background: "#8F41FF",
            textDecoration: "none",
            padding: "11px 32px",
            borderRadius: 16,
            marginTop: 7,
            boxShadow: "0 2px 14px #8f41ff22"
          }}
        >
          {t.email}
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        marginTop: 35, padding: "16px 0 24px 0", background: "none", color: "#8F41FF",
        textAlign: "center", fontSize: 15, fontWeight: 400
      }}>
        <div style={{ marginBottom: 8 }}>
          <a href="/mentions-legales" style={{ color: "#8F41FF", textDecoration: "underline", marginRight: 12 }}>
            {t.legal}
          </a>
          |
          <a href="mailto:contact@mathhero.app" style={{ color: "#8F41FF", textDecoration: "underline", marginLeft: 12 }}>
            {t.nav.contact}
          </a>
        </div>
        <div style={{ fontWeight: 600 }}>{t.copyright}</div>
      </footer>
    </div>
  );
}

// ---- STYLES ----
const navBtnStyle = {
  background: "none",
  border: "none",
  color: "#8F41FF",
  fontWeight: 700,
  fontSize: 17,
  padding: "8px 12px",
  cursor: "pointer",
  borderRadius: 8,
  transition: "background 0.18s"
};
const screenStyle = {
  borderRadius: 18,
  objectFit: "cover",
  boxShadow: "0 2px 14px #8f41ff13"
};
