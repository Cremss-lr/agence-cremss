// import { Logo } from "../../components/logo";
import { Button } from "../../components/button";
import { Icon } from "../../components/icon";
import { MobileMenu } from "../../components/mobile-menu";

export function SiteHeader({ menu = true }: { menu?: boolean }) {
  return (
    <header className="contents md:mx-auto md:mt-10 md:box-content md:flex md:h-16 md:w-full md:max-w-300 md:items-center md:justify-between md:px-6">
      {/*<Logo />*/}
      <div className="hidden md:block">
        <Button to="/" variant="ghost">
          <span className="flex rotate-180" aria-hidden="true">
            <Icon />
          </span>
          Retour à l’accueil
        </Button>
      </div>
      {menu && (
        <div className="contents md:hidden">
          <MobileMenu />
        </div>
      )}
    </header>
  );
}
