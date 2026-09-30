import { Notice } from "./Notice";
import { MentionLegale } from "./data/MentionLegale";
import { cgv } from "./data/cgv";
import { Confidentialite } from "./data/Confidentialite";

type InfoRow = {
  label: string;
  value: string;
};

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  rows?: InfoRow[];
  list?: string[];
};

type PageName = "MentionLegale" | "cgv" | "Confidentialite";

type ArticleProps = {
  page?: PageName;
};

const pages: Record<PageName, Section[]> = {
  MentionLegale,
  cgv,
  Confidentialite,
};

export function Article({ page = "cgv" }: ArticleProps) {
  const sections = pages[page];
  return (
    <article className="space-y-10 [overflow-wrap:anywhere] text-sm leading-6 text-[#203b46] sm:space-y-12 [&>p:first-child]:mb-10 [&>p:first-child]:rounded-xl [&>p:first-child]:bg-ground [&>p:first-child]:px-4 [&>p:first-child]:py-4 [&>p:first-child]:text-xs sm:[&>p:first-child]:mb-12 sm:[&>p:first-child]:px-5">
      <Notice />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="min-w-0 scroll-mt-20 sm:scroll-mt-24"
        >
          <h2 className="mb-3 break-words font-display text-lg font-normal leading-tight sm:mb-4 sm:text-xl">
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {section.rows && (
              <dl className="min-w-0 overflow-hidden rounded-xl border border-[#203b46]/15">
                {section.rows.map((row, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className="grid min-w-0 gap-1 border-b border-[#203b46]/15 px-3 py-3 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 sm:px-4"
                  >
                    <dt className="font-bold">{row.label}</dt>
                    <dd className="min-w-0 break-words">{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {section.list && (
              <ul className="space-y-3 break-words">
                {section.list.map((item, index) => (
                  <li key={index}>— {item}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </article>
  );
}
