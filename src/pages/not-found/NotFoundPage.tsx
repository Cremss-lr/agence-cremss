import { SiteHeader } from "../../layouts/site-header";
import { EmptyGlass } from "../../components/empty-glass";
import { Button } from "../../components/button";
import { Icon } from "../../components/icon";

export function NotFoundPage() {
  return (
    <main className="flex h-dvh flex-col overflow-hidden bg-ground text-ink">
      <SiteHeader menu={false} />
      <div className="mx-auto grid min-h-0 w-full max-w-360 flex-1 grid-cols-[1fr_auto] content-center gap-4 px-6 py-6 md:flex md:flex-row md:items-center md:justify-between md:gap-12 md:py-8 md:pr-20 md:pl-31">
        <div className="contents md:flex md:flex-col md:items-start md:gap-4">
          <h1 className="col-start-1 row-start-1 font-display text-[min(30vw,120px)] leading-none md:text-[160px]">404</h1>
          <h2 className="col-span-2 font-display text-title-2 text-balance">Cette page n’existe pas.</h2>
          <p className="col-span-2 max-w-130 font-body text-body">
            La page que vous cherchez n’est pas (ou plus) au menu.
          </p>
          <div className="col-span-2 pt-4">
            <Button to="/" size="s" className="w-full justify-center md:w-auto">
              Retour à l’accueil
              <Icon />
            </Button>
          </div>
        </div>
        <div className="col-start-2 row-start-1 w-[24vw] max-w-28 self-end md:max-w-none md:self-center md:aspect-square md:w-[min(45%,35rem,calc(100dvh_-_11rem))]">
          <EmptyGlass />
        </div>
      </div>
    </main>
  );
}
