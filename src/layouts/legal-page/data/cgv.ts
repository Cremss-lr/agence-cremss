export type ArticleSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
};

export const cgv: ArticleSection[] = [
  {
    id: "objet",
    title: "Article 1 — Objet",
    paragraphs: [
      "Les présentes conditions générales de vente régissent les prestations fournies par Cremss, SARL dont le siège est au 44 avenue Albert Einstein, La Rochelle (cremss.lr@gmail.com), à ses clients. Toute commande implique leur acceptation sans réserve.",
    ],
  },
  {
    id: "prestations",
    title: "Article 2 — Prestations",
    paragraphs: [
      "Le périmètre de chaque prestation est précisé dans le devis ou, pour la maintenance et l’hébergement, dans un contrat dédié.",
    ],
    list: [
      "Outils de gestion développés sur mesure pour la restauration.",
      "Sites vitrines et refontes.",
      "Maintenance : mises à jour, corrections et évolutions une fois en ligne.",
      "Hébergement des sites et des outils livrés.",
    ],
  },
  {
    id: "devis-commande",
    title: "Article 3 — Devis et commande",
    paragraphs: [
      "Chaque projet fait l’objet d’un devis gratuit, établi sur mesure et valable 15 jours. La commande est confirmée à réception du devis signé et de l’acompte prévu à l’article 4.",
    ],
  },
  {
    id: "tarifs-paiement",
    title: "Article 4 — Tarifs et paiement",
    paragraphs: [
      "Les montants sont exprimés hors taxes ; la TVA au taux en vigueur s’ajoute au total. Sauf mention contraire du devis :",
    ],
    list: [
      "un acompte de 30 % est versé à la signature ;",
      "le solde est facturé à la livraison, payable à réception ;",
      "tout retard entraîne des pénalités au taux légal et une indemnité forfaitaire de recouvrement de 40 €.",
    ],
  },
  {
    id: "deroule-delais",
    title: "Article 5 — Déroulé et délais",
    paragraphs: [
      "Le projet avance par sprints d’une semaine, avec un point à chaque fin de sprint. Le client désigne un référent et un suppléant. Sans retour sur un livrable sous cinq jours ouvrés, celui-ci est considéré comme validé.",
      "Les délais sont indicatifs et courent à réception des éléments fournis par le client. Toute demande hors du périmètre initial fait l’objet d’un nouveau chiffrage.",
    ],
  },
  {
    id: "recette-livraison",
    title: "Article 6 — Recette et livraison",
    paragraphs: [
      "Cremss effectue ses tests internes selon sa checklist de recette, puis le client teste sur un environnement dédié et remonte les anomalies dans le délai convenu. Cremss corrige ce qui relève du périmètre contractuel. La recette se clôt par un procès-verbal marquant l’acceptation du projet.",
    ],
  },
  {
    id: "propriete-intellectuelle",
    title: "Article 7 — Propriété intellectuelle",
    paragraphs: [
      "Les droits sur les développements réalisés sont cédés au client à réception du paiement intégral, sauf mention contraire du devis. Cremss conserve le droit de réutiliser ses briques techniques génériques, méthodes et savoir-faire.",
    ],
  },
  {
    id: "maintenance-hebergement",
    title: "Article 8 — Maintenance et hébergement",
    paragraphs: [
      "La durée, le périmètre, les délais d’intervention et la disponibilité sont fixés dans le contrat de maintenance ou d’hébergement. Une résiliation anticipée n’ouvre pas droit au remboursement des sommes déjà versées, sauf accord contraire.",
    ],
  },
  {
    id: "responsabilite",
    title: "Article 9 — Responsabilité",
    paragraphs: [
      "Cremss exécute ses prestations avec soin et selon les règles de l’art. Sa responsabilité ne peut être engagée qu’en cas de faute prouvée et reste limitée au montant de la prestation concernée. Elle ne couvre pas les dysfonctionnements de services tiers (paiement, API externes) ni une mauvaise utilisation par le client.",
    ],
  },
  {
    id: "resiliation",
    title: "Article 10 — Résiliation",
    paragraphs: [
      "En cas de manquement grave de l’une des parties, l’autre peut résilier la prestation après une mise en demeure restée sans effet pendant 15 jours.",
    ],
  },
  {
    id: "droit-applicable-litiges",
    title: "Article 11 — Droit applicable et litiges",
    paragraphs: [
      "Les présentes CGV sont soumises au droit français. Une solution amiable est recherchée avant toute action ; à défaut, pour les clients professionnels, les tribunaux du ressort du siège de Cremss sont compétents. Un client consommateur conserve les droits prévus par le Code de la consommation, dont le droit de rétractation de 14 jours pour un contrat conclu à distance.",
    ],
  },
];