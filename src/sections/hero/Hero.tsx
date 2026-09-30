import { CremssLogo } from "../../components/cremss-logo";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate box-border grid min-h-dvh grid-rows-[1fr_auto] items-center justify-items-center gap-6 overflow-hidden px-[clamp(16px,5vw,64px)] pt-12 pb-7"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-2 bg-[radial-gradient(55%_50%_at_50%_46%,var(--color-ground-glow)_0%,rgb(254_244_238/0)_72%)]" />
      <CremssLogo className="w-[min(100%,1060px)]!" />
    </section>
  );
}
