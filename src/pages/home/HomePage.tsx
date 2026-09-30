import { useEffect, useState } from "react";
import { Scrollbar } from "../../components/scrollbar";
import { MobileMenu } from "../../components/mobile-menu";
import { Hero } from "../../sections/hero";
import { Studio } from "../../sections/studio";
import { Services } from "../../sections/services";
import { Projects } from "../../sections/projects";
import { Contact } from "../../sections/contact";
import { SiteFooter } from "../../layouts/site-footer";

export function HomePage() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = ready ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [ready]);

  return (
    <main>
      <MobileMenu ready={ready} />
      <Scrollbar ready={ready} />
      <Hero ready={ready} onReady={() => setReady(true)} />
      <Studio />
      <Services />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
