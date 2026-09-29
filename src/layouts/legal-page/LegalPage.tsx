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
    <main className="min-h-screen bg-[#FBE3D6] text-ink">
      <SiteHeader />

      <section className="bg-[#F2F1EE] font-body">
        <div className="relative bg-[#FBE3D6]">
          <Wave Wave="#1E3A3C" UpWave="#FBE3D6" BotWave="#F2F1EE" />

          <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-6xl px-6 pt-16 sm:px-10 sm:pt-20 lg:px-12 lg:pt-24">
            <p className="mb-5 font-display text-[0.68rem] uppercase tracking-[0.16em]">
              Informations légales
            </p>
            <h1 className="max-w-5xl font-display text-4xl leading-[1.05] tracking-[-0.025em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xs sm:text-sm">
              Dernière mise à jour : {lastUpdated}
            </p>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-6xl items-start gap-10 px-6 pb-24 pt-10 sm:px-10 sm:pt-14 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:pb-32 lg:pt-16">
          <aside className="hidden lg:sticky lg:top-8 lg:block [&_h2]:font-display [&_h2]:font-normal [&_h2]:text-[0.68rem] [&_li]:pb-4 [&_a]:text-xs">
            <TableOfContents page={page} />
          </aside>

          <div className="rounded-2xl bg-white px-6 py-8 shadow-[0_1px_2px_rgba(30,58,60,0.03)] sm:px-10 sm:py-10 lg:px-14 lg:py-12 [&>article]:text-sm [&>article]:leading-6 [&>article>p:first-child]:mb-12 [&>article>p:first-child]:rounded-xl [&>article>p:first-child]:bg-[#FBE3D6] [&>article>p:first-child]:px-5 [&>article>p:first-child]:py-4 [&>article>p:first-child]:text-xs [&>article_h2]:font-display [&>article_h2]:font-normal [&>article_h2]:text-xl [&>article_h2]:leading-tight">
            <Article page={page} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
