type NavigationProps = {
  onNavigate?: () => void;
  className?: string;
};

export function Navigation({ onNavigate, className }: NavigationProps) {
  return (
    <nav className={className}>
      <ul>
        <li><a href="/#accueil" onClick={onNavigate}>Accueil</a></li>
        <li><a href="/#studio" onClick={onNavigate}>Studio</a></li>
        <li><a href="/#services" onClick={onNavigate}>Services</a></li>
        <li><a href="/#realisations" onClick={onNavigate}>Réalisations</a></li>
        <li><a href="/#contact" onClick={onNavigate}>Contact</a></li>
      </ul>
    </nav>
  );
}
