export type InfoRow = {
  label: string;
  value: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  rows?: InfoRow[];
  list?: string[];
};

export const Confidentialite: ArticleSection[] = [
  {
    id: "objet",
    title: "1. Objet",
    paragraphs: [
      "Cette politique décrit comment Cremss collecte, utilise et protège les données personnelles des personnes qui consultent son site ou la contactent. Elle s’applique au site agence-cremss.lpmiaw.univ-lr.fr et complète les mentions légales.",
    ],
  },

  {
    id: "responsable-traitement",
    title: "2. Responsable de traitement",
    rows: [
      {
        label: "Responsable",
        value: "Cremss, SARL",
      },
      {
        label: "Siège social",
        value: "44 avenue Albert Einstein, La Rochelle, France",
      },
      {
        label: "Représentants",
        value: "Gaël, Lucas, Mathéo",
      },
      {
        label: "Contact",
        value: "cremss.lr@gmail.com",
      },
    ],
    paragraphs: [
      "Cremss n’a pas désigné de délégué à la protection des données, cette désignation n’étant pas obligatoire au regard de son activité.",
    ],
  },

  {
    id: "donnees-collectees",
    title: "3. Données collectées et traitements",
    rows: [
      {
        label: "Répondre à vos demandes",
        value:
          "Intérêt légitime (art. 6.1.f) · nom, prénom, e-mail, entreprise, objet, message · 3 ans après le dernier contact",
      },
      {
        label: "Mesurer l’audience",
        value:
          "Consentement (art. 6.1.a) · identifiant de cookie, pages vues, source, appareil, adresse IP · 14 mois",
      },
      {
        label: "Sécurité du site",
        value:
          "Intérêt légitime (art. 6.1.f) · adresse IP, horodatage, page demandée, agent utilisateur · 6 mois",
      },
    ],
    paragraphs: [
      "Cremss ne collecte que les données strictement nécessaires. Aucune donnée sensible au sens de l’article 9 du RGPD n’est collectée.",
      "Les champs facultatifs du formulaire peuvent être laissés vides sans conséquence sur le traitement de votre demande.",
    ],
  },

  {
    id: "destinataires",
    title: "4. Destinataires et sous-traitants",
    paragraphs: [
      "Vos données sont traitées par les personnes habilitées chez Cremss. Elles ne sont ni cédées, ni louées, ni revendues.",
    ],
    rows: [
      {
        label: "LPMIAW",
        value: "Hébergement du site et des données · France (UE)",
      },
      {
        label: "Google Ireland Limited",
        value: "Messagerie Gmail et Google Analytics 4 · Irlande (UE)",
      },
    ],
  },

  {
    id: "transferts-hors-ue",
    title: "5. Transferts hors Union européenne",
    paragraphs: [
      "Les données traitées par Google peuvent être transférées à Google LLC aux États-Unis, dans le cadre de la décision d’adéquation UE–États-Unis du 10 juillet 2023. Aucun autre transfert hors UE n’est effectué.",
    ],
  },

  {
    id: "droits",
    title: "6. Vos droits",
    list: [
      "Accès : obtenir une copie de vos données.",
      "Rectification : corriger des données inexactes.",
      "Effacement : demander la suppression de vos données.",
      "Limitation : geler un traitement que vous contestez.",
      "Opposition : vous opposer à un traitement fondé sur l’intérêt légitime.",
      "Portabilité : recevoir vos données dans un format lisible par machine.",
      "Retrait du consentement, à tout moment, notamment pour la mesure d’audience.",
      "Directives sur le sort de vos données après votre décès.",
    ],
    paragraphs: [
      "Écrivez à cremss.lr@gmail.com. Réponse sous un mois (prolongeable de deux mois pour une demande complexe). Réclamation possible auprès de la CNIL : cnil.fr, 3 place de Fontenoy, 75334 Paris Cedex 07.",
    ],
  },

  {
    id: "cookies",
    title: "7. Cookies",
    paragraphs: [
      "Les cookies Google Analytics 4 ne sont déposés qu’après votre consentement explicite. Vous pouvez modifier ou retirer votre choix à tout moment ; le détail des cookies figure dans les mentions légales.",
    ],
  },

  {
    id: "securite",
    title: "8. Sécurité",
    paragraphs: [
      "Échanges chiffrés (HTTPS), accès limités aux seules personnes habilitées et composants logiciels tenus à jour.",
    ],
  },

  {
    id: "modification-politique",
    title: "9. Modification de la politique",
    paragraphs: [
      "Cremss peut adapter cette politique à l’évolution de ses services ou de la réglementation. La version en vigueur est celle publiée sur le site ; en cas de changement important, vous en êtes informé.",
    ],
  },
];