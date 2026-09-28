import { SiteHeader } from "../site-header";
import { Wave } from "../../components/wave";
import { TableOfContents } from "./TableOfContents";
import { Article } from "./Article";
import { SiteFooter } from "../site-footer";

export function LegalPage() {
  return (
    <main>
      <SiteHeader />
      <Wave />
      <TableOfContents />
      <Article />
      <SiteFooter />
    </main>
  );
}
