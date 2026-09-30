import { useEffect } from "react";
import { useLocation } from "react-router";
import { Scrollbar } from "../../components/scrollbar";
import { MobileMenu } from "../../components/mobile-menu";
import { Hero } from "../../sections/hero";
import { Studio } from "../../sections/studio";
import { Services } from "../../sections/services";
import { Projects } from "../../sections/projects";
import { Contact } from "../../sections/contact";
import { SiteFooter } from "../../layouts/site-footer";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const section = document.getElementById(hash.slice(1));
    if (!section) return;

    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

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
