export type InfoRow = {
  label: string;
  value: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  rows?: InfoRow[];
};

export const MentionLegale: ArticleSection[] = [
  {
    id: "editeur",
    title: "1. Éditeur du site",
    rows: [
      {
        label: "Dénomination",
        value: "Cremss",
      },
      {
        label: "Forme juridique",
        value: "SARL",
      },
      {
        label: "Capital social",
        value: "0 €",
      },
      {
        label: "Siège social",
        value: "44 avenue Albert Einstein, La Rochelle, France",
      },
      {
        label: "Téléphone",
        value: "XX XX XX XX XX",
      },
      {
        label: "E-mail",
        value: "cremss.lr@gmail.com",
      },
      {
        label: "RCS · SIRET · TVA",
        value: "X",
      },
    ],
  },

  {
    id: "publication",
    title: "2. Directeurs de la publication",
    paragraphs: [
      "Gaël, Lucas et Mathéo, en qualité de gérants. Contact : cremss.lr@gmail.com",
    ],
  },

  {
    id: "hebergeur",
    title: "3. Hébergeur",
    rows: [
      {
        label: "Dénomination",
        value: "LPMIAW",
      },
      {
        label: "Adresse",
        value: "44 avenue Albert Einstein, 17000 La Rochelle",
      },
      {
        label: "Site web",
        value: "lpmiaw.univ-lr.fr",
      },
    ],
  },

  {
    id: "propriete",
    title: "4. Propriété intellectuelle",
    paragraphs: [
      "L’ensemble des éléments de ce site — structure, textes, images, graphismes, logo, charte graphique, code source — est la propriété exclusive de Cremss ou de ses ayants droit, et est protégé par le Code de la propriété intellectuelle.",
      "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable de Cremss. Les marques et visuels des clients présentés dans les réalisations restent la propriété de leurs titulaires et sont reproduits avec leur accord.",
    ],
  },

  {
    id: "donnees",
    title: "5. Données personnelles",
    paragraphs: [
      "Les données collectées via le formulaire de contact (nom, prénom, e-mail, entreprise, objet, message) sont traitées par Cremss, responsable de traitement, aux seules fins de répondre aux demandes.",
    ],
    rows: [
      {
        label: "Base légale",
        value:
          "Intérêt légitime (art. 6.1.f du RGPD) : répondre à une demande que vous avez initiée",
      },
      {
        label: "Conservation",
        value: "3 ans à compter du dernier contact",
      },
      {
        label: "Destinataires",
        value:
          "Les personnes habilitées chez Cremss ; LPMIAW (hébergement) et Gmail (messagerie) en sous-traitants",
      },
    ],
  },

  {
    id: "donnees-droits",
    title: "",
    paragraphs: [
      "Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité : écrivez à cremss.lr@gmail.com. Réclamation possible auprès de la CNIL (cnil.fr). Le détail figure dans la politique de confidentialité.",
    ],
  },

  {
    id: "cookies",
    title: "6. Cookies",
    paragraphs: [
      "Le site dépose des cookies de mesure d’audience Google Analytics 4 (Google Ireland Limited), uniquement après votre consentement explicite. Aucun ciblage publicitaire, aucun recoupement entre sites.",
    ],
    rows: [
      {
        label: "_ga",
        value: "Distinguer les visiteurs uniques · 13 mois",
      },
      {
        label: "_ga_XXXXXXXXX",
        value: "Maintenir la session de mesure · 13 mois",
      },
    ],
  },

  {
    id: "cookies-info",
    title: "",
    paragraphs: [
      "Vous pouvez retirer votre choix à tout moment. Les données peuvent être transférées à Google LLC États-Unis, dans le cadre de la décision d’adéquation UE–États-Unis du 10 juillet 2023. Conservation : 14 mois.",
    ],
  },

  {
    id: "liens",
    title: "7. Liens hypertextes",
    paragraphs: [
      "Ce site peut contenir des liens vers des sites tiers. Cremss n’exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations qui y figurent.",
    ],
  },

  {
    id: "responsabilite",
    title: "8. Responsabilité",
    paragraphs: [
      "Cremss s’efforce d’assurer l’exactitude des informations publiées, sans garantir qu’elles soient exemptes d’erreurs ou d’omissions. Elles sont fournies à titre indicatif et ne constituent pas un engagement contractuel. Cremss ne saurait être tenue responsable des dommages résultant de l’accès au site, de son utilisation ou d’une interruption de service.",
    ],
  },

  {
    id: "droit",
    title: "9. Droit applicable",
    paragraphs: [
      "Les présentes mentions légales sont régies par le droit français. Tout litige relève de la compétence des tribunaux français. Tout contenu manifestement illicite peut être signalé à cremss.lr@gmail.com.",
    ],
  },
];