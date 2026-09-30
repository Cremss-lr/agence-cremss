import { SiteHeader } from "../site-header";
import { Wave } from "../../components/wave";
import { TableOfContents } from "./TableOfContents";
import { Article } from "./Article";
import { SiteFooter } from "../site-footer";

type LegalPageProps = {
  page?: "MentionLegale" | "cgv" | "Confidentialite";
};

export function LegalPage({ page = "cgv" }: LegalPageProps) {
  let title = "";
  let lastUpdated = "";

  switch (page) {
    case "MentionLegale":
      title = "Mentions légales";
      lastUpdated = "25 septembre 2026";
      break;
    case "cgv":
      title = "Conditions générales de vente";
      lastUpdated = "25 septembre 2026";
      break;
    case "Confidentialite":
      title = "Politique de confidentialité";
      lastUpdated = "25 septembre 2026";
      break;
  }

  return (
    <main className="min-h-screen bg-ground text-ink">
      <SiteHeader />

      <section className="bg-warm-gray font-body">
        <div className="relative bg-ground">
          <Wave Wave="#1E3A3C" UpWave="#FBE3D6" BotWave="#F2F1EE" />

          <div className="absolute inset-x-0 top-0 mx-auto w-full max-w-6xl px-4 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-24">
            <p className="mb-3 font-display text-[0.65rem] uppercase tracking-[0.16em] sm:mb-5 sm:text-[0.68rem]">
              Informations légales
            </p>
            <h1 className="max-w-5xl break-words font-display text-[clamp(2rem,10vw,3rem)] leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-3 text-xs sm:mt-4 sm:text-sm">
              Dernière mise à jour : {lastUpdated}
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 px-4 pb-16 pt-8 sm:gap-8 sm:px-8 sm:pb-24 sm:pt-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:pb-32 lg:pt-16">
          <aside className="hidden lg:sticky lg:top-8 lg:block [&_h2]:font-display [&_h2]:font-normal [&_h2]:text-[0.68rem] [&_li]:pb-4 [&_a]:text-xs">
            <TableOfContents page={page} />
          </aside>

          <div className="min-w-0 rounded-xl bg-white px-4 py-6 shadow-[0_1px_2px_rgba(30,58,60,0.03)] sm:rounded-2xl sm:px-8 sm:py-10 lg:px-14 lg:py-12">
            <Article page={page} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
