import { useState } from "react";
import { Link } from "react-router";

type NavigationProps = {
  onNavigate?: () => void;
  className?: string;
};

const LINKS = [
  { id: "accueil", label: "Accueil" },
  { id: "studio", label: "Studio" },
  { id: "services", label: "Services" },
  { id: "realisations", label: "Réalisations" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ onNavigate, className }: NavigationProps) {
  const [active] = useState(
    () => LINKS.filter(({ id }) => (document.getElementById(id)?.getBoundingClientRect().top ?? 1) <= innerHeight * 0.4).at(-1)?.id,
  );

  return (
    <nav className={className}>
      <ul>
        {LINKS.map(({ id, label }, index) => (
          <li key={id} className="animate-[rise_600ms_var(--ease-out)_backwards]" style={{ animationDelay: `${150 + index * 70}ms` }}>
            <Link to={`/#${id}`} className={active === id ? "is-active" : undefined} onClick={onNavigate}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
