import { useState } from "react";
import { Link } from "react-scroll";

type NavigationProps = {
  onNavigate?: () => void;
};

const LINKS = [
  { to: "accueil", label: "Accueil" },
  { to: "studio", label: "Studio" },
  { to: "services", label: "Services" },
  { to: "realisations", label: "Réalisations" },
  { to: "contact", label: "Contact" },
];

export function Navigation({ onNavigate }: NavigationProps) {
  const [active] = useState(
    () => LINKS.filter(({ to }) => (document.getElementById(to)?.getBoundingClientRect().top ?? 1) <= innerHeight * 0.4).at(-1)?.to,
  );

  return (
    <nav className="font-display text-4xl">
      <ul>
        {LINKS.map(({ to, label }, index) => (
          <li key={to} className="animate-[rise_600ms_var(--ease-out)_backwards]" style={{ animationDelay: `${150 + index * 70}ms` }}>
            <Link to={to} smooth duration={500} className={active === to ? "is-active" : undefined} onClick={onNavigate}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
