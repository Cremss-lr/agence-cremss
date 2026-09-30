import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Scrollbar } from "../../components/scrollbar";
import { MobileMenu } from "../../components/mobile-menu";
import { Hero } from "../../sections/hero";
import { Studio } from "../../sections/studio";
import { Services } from "../../sections/services";
import { Projects } from "../../sections/projects";
import { Contact } from "../../sections/contact";
import { SiteFooter } from "../../layouts/site-footer";

const INTRO_KEY = "cremss-intro-seen";

function introSeen() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === "1";
  } catch {
    return false;
  }
}

export function HomePage() {
  const { hash, key } = useLocation();
  const [skipIntro] = useState(introSeen);
  const [ready, setReady] = useState(skipIntro);

  useEffect(() => {
    if (!ready) return;
    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // storage unavailable: the intro simply replays next visit
    }
  }, [ready]);

  useEffect(() => {
    document.documentElement.style.overflow = ready ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [ready]);

  useEffect(() => {
    if (!hash) return;

    const section = document.getElementById(hash.slice(1));
    if (!section) return;

    requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, key]);

  return (
    <main>
      <MobileMenu ready={ready} />
      <Scrollbar ready={ready} />
      <Hero skipIntro={skipIntro} ready={ready} onReady={() => setReady(true)} />
      <Studio />
      <Services />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
