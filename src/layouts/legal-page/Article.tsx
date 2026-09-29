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
    <article className="space-y-12 text-[#203b46]">
      <Notice />

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-24"
        >
          <h2 className="mb-4 text-2xl font-bold">
            {section.title}
          </h2>

          <div className="space-y-4">
            {section.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {section.rows && (
              <dl className="overflow-hidden rounded-xl border border-[#203b46]/15">
                {section.rows.map((row, index) => (
                  <div
                    key={`${row.label}-${index}`}
                    className="grid gap-1 border-b border-[#203b46]/15 px-4 py-3 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6"
                  >
                    <dt className="font-bold">{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {section.list && (
              <ul className="space-y-3">
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
