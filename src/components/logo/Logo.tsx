import { Link } from "react-router";
import logo from "./logo.svg";

export function Logo() {
  return (
    <Link to="/" aria-label="Cremss — accueil">
      <img src={logo} alt="" width={142} height={56} />
    </Link>
  );
}
