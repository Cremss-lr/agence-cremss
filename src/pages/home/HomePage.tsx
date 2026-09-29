import { Scrollbar } from "../../components/scrollbar";
import { MobileMenu } from "../../components/mobile-menu";
import { Hero } from "../../sections/hero";
import { Studio } from "../../sections/studio";
import { Services } from "../../sections/services";
import { Projects } from "../../sections/projects";
import { Contact } from "../../sections/contact";
import { SiteFooter } from "../../layouts/site-footer";

export function HomePage() {
  return (
    <main>
      <MobileMenu />
      <Scrollbar />
      <Hero />
      <Studio />
      <Services />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
