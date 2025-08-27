"use client";

import { useState, useMemo } from "react";
import Head from "next/head";

export default function MentionsLegales() {
  const [lang, setLang] = useState("fr");

  const T = useMemo(() => ({
    fr: {
      title: "Mentions légales",
      app: "MathHero",
      editor: "Site édité par : MathHero",
      contact: "Contact",
      address: "Abidjan, Côte d’Ivoire",
      director: "Directeur de la publication",
      host: "Hébergeur : Netlify, Inc.",
      hostAddress: "2325 3rd Street, Suite 296, San Francisco, CA 94107 USA",
      privacyTitle: "Données personnelles",
      privacy:
        "Nous collectons uniquement l’adresse e-mail associée à votre compte Google afin de sécuriser la connexion et sauvegarder votre progression. Ces données ne sont jamais revendues. Les préférences publicitaires, y compris le consentement, peuvent être gérées depuis l’application.",
      iapTitle: "Achats intégrés",
      iap:
        "L’application propose des achats intégrés (ex : suppression des publicités, achat de gemmes). Ces achats sont traités par Google Play Billing et soumis à ses conditions.",
      termsTitle: "Conditions d’utilisation",
      terms:
        "L’utilisation du site et de l’application implique l’acceptation sans réserve des présentes conditions.",
      ipTitle: "Propriété intellectuelle",
      ip:
        "Tous les contenus (textes, graphismes, logos, icônes) sont protégés par le droit d’auteur. Toute reproduction est interdite sans autorisation.",
      cookiesTitle: "Cookies",
      cookies:
        "Des cookies techniques et de mesure d’audience peuvent être utilisés pour améliorer l’expérience et analyser l’usage.",
      copyright: "© 2025 MathHero. Tous droits réservés.",
      switch: "EN",
      me: "KOUADIO Ange Aristide",
      updated: "Dernière mise à jour :",
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
      privacy:
        "We only collect the e-mail address linked to your Google account to secure login and save your progress. This data is never sold. Ad preferences, including consent, can be managed from the app.",
      iapTitle: "In-app Purchases",
      iap:
        "The app offers in-app purchases (e.g., ad removal, gem packs). These purchases are processed by Google Play Billing and subject to its terms.",
      termsTitle: "Terms of Use",
      terms:
        "Using the website and the app implies unconditional acceptance of these terms.",
      ipTitle: "Intellectual Property",
      ip:
        "All content (texts, graphics, logos, icons) is protected by copyright. Any reproduction is prohibited without authorization.",
      cookiesTitle: "Cookies",
      cookies:
        "Technical and analytics cookies may be used to improve experience and measure usage.",
      copyright: "© 2025 MathHero. All rights reserved.",
      switch: "FR",
      me: "KOUADIO Ange Aristide",
      updated: "Last updated:",
    },
  }), []);

  const t = T[lang];
  const updatedAt = "2025-08-21";

  return (
    <>
      <Head>
        <title>{t.title} • {t.app}</title>
        <meta name="description" content={`${t.title} – ${t.app}`} />
        <link rel="canonical" href="https://mathhero.dev/mentions-legales" />
        <meta property="og:title" content={`${t.title} • ${t.app}`} />
        <meta property="og:description" content={t.copyright} />
      </Head>

      <main style={{ maxWidth: 760, margin: "40px auto", padding: 24, fontSize: 17, lineHeight: 1.6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <h1 style={{ margin: 0 }}>{t.title} / Legal Notice</h1>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{
              background: "#8F41FF",
              color: "#fff",
              border: "none",
              borderRadius: 18,
              padding: "8px 18px",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer"
            }}
            aria-label="Change language"
          >
            {t.switch}
          </button>
        </div>

        <section style={{ marginTop: 18 }}>
          <h2 style={{ marginBottom: 6 }}>{t.app}</h2>
          <p>
            {t.editor}<br />
            {t.contact}: <a href="mailto:support@mathhero.dev">support@mathhero.dev</a><br />
            {t.address}<br />
            {t.director}: {t.me}
          </p>
        </section>

        <section>
          <h2>Hébergement / Hosting</h2>
          <p>
            {t.host}<br />
            {t.hostAddress}
          </p>
        </section>

        <section id="privacy">
          <h2>{t.privacyTitle} / Privacy</h2>
          <p>{t.privacy}</p>
        </section>

        <section id="iap">
          <h2>{t.iapTitle}</h2>
          <p>{t.iap}</p>
        </section>

        <section id="terms">
          <h2>{t.termsTitle} / Terms</h2>
          <p>{t.terms}</p>
        </section>

        <section>
          <h2>{t.ipTitle} / Copyright</h2>
          <p>{t.ip}</p>
        </section>

        <section>
          <h2>{t.cookiesTitle}</h2>
          <p>{t.cookies}</p>
        </section>

        <p style={{ marginTop: 18, color: "#666" }}>
          {t.updated} {updatedAt}
        </p>
        <p style={{ marginTop: 10, fontWeight: 600 }}>{t.copyright}</p>
      </main>

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MathHero",
            url: "https://mathhero.dev",
            email: "support@mathhero.dev",
            address: "Abidjan, Côte d’Ivoire",
          })
        }}
      />
    </>
  );
}
