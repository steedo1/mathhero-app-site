"use client";

import Head from "next/head";
import { useState } from "react";

export default function DeleteAccount() {
  const [lang, setLang] = useState("fr");
  const t = {
    fr: {
      title: "Supprimer mon compte",
      lead: "Voici comment demander la suppression définitive de votre compte MathHero.",
      inAppTitle: "1) Depuis l’application (recommandé)",
      inAppSteps: [
        "Ouvrez MathHero",
        "Allez dans « Paramètres »",
        "Section « Zone dangereuse »",
        "Appuyez sur « Supprimer mon compte » et confirmez"
      ],
      whatTitle: "Données supprimées",
      whatItems: [
        "Profil (pseudo, identifiant)",
        "Progression, scores, badges, avatars",
        "Historique d’achats et droits associés (désactivation des pubs, gemmes...)"
      ],
      helpTitle: "2) Si vous n’avez plus accès à l’app",
      helpText: "Envoyez-nous une demande par e-mail à l’adresse ci-dessous en indiquant votre pseudo et, si possible, l’e-mail lié au compte.",
      mail: "Demander la suppression par e-mail",
      legal: "La suppression est irréversible. Les données transitent chiffrées et ne sont pas revendues. Pour toute question, contactez-nous."
    },
    en: {
      title: "Delete my account",
      lead: "How to permanently delete your MathHero account.",
      inAppTitle: "1) From the app (recommended)",
      inAppSteps: [
        "Open MathHero",
        "Go to “Settings”",
        "Find the “Danger zone” section",
        "Tap “Delete my account” and confirm"
      ],
      whatTitle: "Data that will be deleted",
      whatItems: [
        "Profile (username, user ID)",
        "Progress, scores, badges, avatars",
        "Purchase history and related entitlements (ad removal, gems, …)"
      ],
      helpTitle: "2) If you no longer have access to the app",
      helpText: "Send us a request by e-mail with your username and, if possible, the e-mail linked to the account.",
      mail: "Request deletion by e-mail",
      legal: "Deletion is irreversible. Data is transmitted over encrypted connections and is not sold. For any question, contact us."
    }
  }[lang];

  const mailto =
    "mailto:support@mathhero.app" +
    "?subject=" + encodeURIComponent(lang === "fr" ? "Suppression de compte MathHero" : "MathHero account deletion") +
    "&body=" + encodeURIComponent(
      (lang === "fr"
        ? "Bonjour,\nJe souhaite supprimer définitivement mon compte MathHero.\nPseudo : \nE-mail du compte (si connu) : \nCommentaires : \n"
        : "Hello,\nI would like to permanently delete my MathHero account.\nUsername: \nAccount e-mail (if known): \nComments: \n")
    );

  return (
    <>
      <Head>
        <title>{t.title} • MathHero</title>
        <meta name="description" content={t.lead} />
        <link rel="canonical" href="https://mathhero.dev/delete-account" />
      </Head>

      <main style={{maxWidth:800, margin:"40px auto", padding:"0 20px", lineHeight:1.6}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h1 style={{margin:0}}>{t.title}</h1>
          <button
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{background:"#8F41FF", color:"#fff", border:"none", borderRadius:16, padding:"8px 14px", fontWeight:800, cursor:"pointer"}}
            aria-label="Change language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <p>{t.lead}</p>

        <section>
          <h2>{t.inAppTitle}</h2>
          <ol>
            {t.inAppSteps.map((s,i)=><li key={i}>{s}</li>)}
          </ol>
        </section>

        <section>
          <h2>{t.whatTitle}</h2>
          <ul>
            {t.whatItems.map((s,i)=><li key={i}>{s}</li>)}
          </ul>
        </section>

        <section>
          <h2>{t.helpTitle}</h2>
          <p>{t.helpText}</p>
          <p>
            <a href={mailto} style={{fontWeight:800, textDecoration:"underline", color:"#5A2D91"}}>
              {t.mail} → support@mathhero.dev
            </a>
          </p>
        </section>

        <p style={{color:"#555"}}>{t.legal}</p>
      </main>
    </>
  );
}
