"use client";
import { useState } from "react";

export default function MentionsLegales() {
  const [lang, setLang] = useState("fr");

  const T = {
    fr: {
      title: "Mentions légales",
      app: "MathHero",
      editor: "Site édité par : MathHero",
      contact: "Contact",
      address: "Abidjan, Côte d’Ivoire",
      director: "Directeur de la publication",
      host: "Hébergeur : Netlify, Inc.",
      hostAddress: "2325 3rd Street, Suite 296, San Francisco, CA 94107 USA",
      privacyTitle: "Données personnelles",
      privacy: "Aucune donnée personnelle n’est collectée sans votre consentement.",
      copyright: "© 2025 MathHero. Tous droits réservés.",
      switch: "EN",
      me: "KOUADIO Ange Aristide"
    },
    en: {
      title: "Legal Notice",
      app: "MathHero",
      editor: "Site published by: MathHero",
      contact: "Contact",
      address: "Abidjan, Côte d’Ivoire",
      director: "Publication Director",
      host: "Host: Netlify, Inc.",
      hostAddress: "2325 3rd Street, Suite 296, San Francisco, CA 94107 USA",
      privacyTitle: "Privacy",
      privacy: "No personal data is collected without your consent.",
      copyright: "© 2025 MathHero. All rights reserved.",
      switch: "FR",
      me: "KOUADIO Ange Aristide"
    }
  };
  const t = T[lang];

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24, fontSize: 17 }}>
      <button
        onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        style={{
          float: "right",
          background: "#8F41FF",
          color: "#fff",
          border: "none",
          borderRadius: 18,
          padding: "6px 22px",
          fontWeight: 700,
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        {t.switch}
      </button>
      <h1>{t.title} / Legal Notice</h1>
      <h2>{t.app}</h2>
      <p>
        {t.editor}<br />
        {t.contact}: <a href="mailto:support@mathhero.app">support@mathhero.app</a><br />
        {t.address}<br />
        {t.director}: {t.me}
      </p>
      <h2>Hébergement / Hosting</h2>
      <p>
        {t.host}<br />
        {t.hostAddress}
      </p>
      <h2>{t.privacyTitle} / Privacy</h2>
      <p>
        {t.privacy}<br />
        {lang === "fr"
          ? "No personal data is collected without your consent."
          : "Aucune donnée personnelle n’est collectée sans votre consentement."}
      </p>
      <h2>Propriété intellectuelle / Copyright</h2>
      <p>
        {t.copyright}<br />
        {lang === "fr"
          ? "All rights reserved."
          : "Tous droits réservés."}
      </p>
    </div>
  );
}
