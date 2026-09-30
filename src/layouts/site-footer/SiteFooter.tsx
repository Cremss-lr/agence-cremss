import  Cremss  from "../../components/cremss-logo/svg/cremss-texte.svg";
import  Verre  from "../../components/cremss-logo/svg/cremss-verre.svg";
import { Button } from "../../components/button";
import { Navigation } from "../../components/navigation";
import { Icon } from "../../components/icon";
import { Link } from "react-router";


export function SiteFooter() {
  return (
    <footer className="bg-ground px-5 pb-8 text-ink sm:px-8">
      <div className="mx-auto max-w-6xl md:flex md:items-center md:gap-8 lg:gap-12">
        <div className="mb-8 flex flex-col items-start gap-1 md:mb-0 md:w-[42%] md:flex-row md:items-center md:gap-3 lg:w-[45%]">
          <img className="h-auto w-10" src={Verre} alt="" />
          <img className="h-auto w-32" src={Cremss} alt="Cremss" />
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-7 text-sm leading-6 md:flex-1 md:grid-cols-3 md:text-xs">
          <section>
            <h2 className="mb-1 font-display text-xs uppercase">Navigation</h2>
            <Navigation />
          </section>

          <section className="text-right md:text-left">
            <h2 className="mb-1 font-display text-xs uppercase">Légal</h2>
            <ul>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/cgv">CGV</Link></li>
              <li><Link to="/politique-de-confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </section>

          <section className="col-span-2 md:col-span-1">
            <h2 className="mb-1 font-display text-xs uppercase">Contact</h2>
            <ul>
              <li><a href="mailto:cremss.lr@gmail.com">cremss.lr@gmail.com</a></li>
              <li><a className="inline-flex items-center gap-2" href="https://www.linkedin.com/in/cremss-lr-66116b439/" target="_blank" rel="noreferrer">LinkedIn<Icon name="external" className="size-5" /></a></li>
              <li><a className="inline-flex items-center gap-2" href="https://www.instagram.com/cremss.lr/" target="_blank" rel="noreferrer">Instagram<Icon name="external" className="size-5" /></a></li>
            </ul>
          </section>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-ink/20 pt-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Cremss — SARL · La Rochelle (17)</p>
        <Button
          type="button"
          variant="dark"
          size="s"
          className="self-start sm:self-auto sm:bg-transparent sm:text-ink sm:hover:bg-ground [&_img]:invert sm:[&_img]:invert-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Remonter en haut de la page"
        >
          Remonter
          <span className="flex -rotate-90" aria-hidden="true">
            <Icon />
          </span>
        </Button>
      </div>
    </footer>
  );
}
