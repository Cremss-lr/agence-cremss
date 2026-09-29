import { CremssLogo } from "../../components/cremss-logo";
const paperGrain = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .45 0 0 0 0 .25 0 0 0 0 .2 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative isolate box-border grid min-h-dvh grid-rows-[1fr_auto] items-center justify-items-center gap-6 overflow-hidden px-[clamp(16px,5vw,64px)] pt-12 pb-7"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-2 bg-[radial-gradient(55%_50%_at_50%_46%,var(--color-ground-glow)_0%,rgb(254_244_238/0)_72%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-1 opacity-[.28] mix-blend-multiply" style={{ backgroundImage: paperGrain }} />
      <CremssLogo className="w-[min(100%,1060px)]!" />
    </section>
  );
}
