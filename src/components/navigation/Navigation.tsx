import { Link } from "react-scroll";

type NavigationProps = {
  onNavigate?: () => void;
};

export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="font-display text-4xl">
      <ul>
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={onNavigate}>Accueil</Link>
          </li>
          <li>
            <Link to="studio" smooth={true} duration={500} onClick={onNavigate}>Studio</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={onNavigate}>Services</Link>
          </li>
          <li>
            <Link to="realisations" smooth={true} duration={500} onClick={onNavigate}>Réalisations</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={onNavigate}>Contact</Link>
          </li>
      </ul>
    </nav>
  );
}
