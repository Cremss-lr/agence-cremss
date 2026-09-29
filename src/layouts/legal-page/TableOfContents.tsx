type Section = {
  id: string;
  label: string;
};

export function TableOfContents({page=""}: {page?: string}) {
  let data: Section[] = [];
  switch (page) {
    case "MentionLegale":
      data = [
        { id: "editeur", label: "Éditeur du site" },
        { id: "publication", label: "Directeurs de la publication" },
        { id: "hebergeur", label: "Hébergeur" },
        { id: "propriete", label: "Propriété intellectuelle" },
        { id: "donnees", label: "Données personnelles" },
        { id: "cookies", label: "Cookies" },
        { id: "liens", label: "Liens hypertextes" },
        { id: "responsabilite", label: "Responsabilité" },
        { id: "droit", label: "Droit applicable" },
      ];
      break;
    case "cgv":
      data = [
        { id: "objet", label: "Article 1 — Objet" },
        { id: "prestations", label: "Article 2 — Prestations" },
        { id: "devis-commande", label: "Article 3 — Devis et commande" },
        { id: "tarifs-paiement", label: "Article 4 — Tarifs et paiement" },
        { id: "deroule-delais", label: "Article 5 — Déroulé et délais" },
        { id: "recette-livraison", label: "Article 6 — Recette et livraison" },
        { id: "propriete-intellectuelle", label: "Article 7 — Propriété intellectuelle", },
        { id: "maintenance-hebergement", label: "Article 8 — Maintenance et hébergement", },
        { id: "responsabilite", label: "Article 9 — Responsabilité" },
        { id: "resiliation", label: "Article 10 — Résiliation" },
        { id: "droit-applicable-litiges", label: "Article 11 — Droit applicable et litiges", },
      ];
      break;
    case "Confidentialite":
      data = [
        { id: "objet", label: "Objet" },
        { id: "responsable-traitement", label: "Responsable de traitement", },
        { id: "donnees-collectees", label: "Données collectées et traitements", },
        { id: "destinataires", label: "Destinataires et sous-traitants", },
        { id: "transferts-hors-ue", label: "Transferts hors Union européenne", },
        { id: "droits", label: "Vos droits" },
        { id: "cookies", label: "Cookies" },
        { id: "securite", label: "Sécurité" },
        { id: "modification-politique", label: "Modification de la politique", },
      ];
      break;

    default:
      break;
  }

  return (
    <nav className="w-fit">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-wide">
        sommaire
      </h2>

      <ul className="relative border-l border-[#203b46]">
        {data.map((section, index) => (
          <li
            key={section.id}
            className="relative pb-5 pl-4 last:pb-0"
          >
            <span
              className={`
                absolute -left-[5px] top-[6px]
                h-[9px] w-[9px]
                rounded-full border border-[#203b46]
                ${
                  index === 0
                    ? "bg-[#68b956]"
                    : "bg-[#f4f3f0]"
                }
              `}
            />

            <a
              href={`#${section.id}`}
              className="text-sm text-[#203b46] transition-opacity hover:opacity-60"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
