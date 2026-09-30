import { Button } from "../../components/button";
import { CremssLogo } from "../../components/cremss-logo";
import { Icon } from "../../components/icon";

const WAVE = "M0 45C160 70 300 40 450 55C620 75 680 85 850 65C1030 45 1080 15 1240 40C1330 55 1380 60 1440 40";

type HeroProps = { ready: boolean; onReady: () => void; skipIntro?: boolean };

export function Hero({ ready, onReady, skipIntro = false }: HeroProps) {
  const reveal = `transition-[opacity,translate] duration-[900ms] ease-out ${ready ? "opacity-100" : "translate-y-4 opacity-0"}`;
  const delay = (ms: number) => ({ transitionDelay: `${ms}ms` });

  return (
    <section
      id="accueil"
      className="relative isolate box-border grid min-h-dvh grid-rows-[1fr_auto] items-center justify-items-center gap-6 overflow-hidden px-[clamp(16px,5vw,64px)] pt-12 pb-32"
    >
      <div className="relative w-[min(100%,1060px)]">
        <CremssLogo autoPlay={!skipIntro} onComplete={onReady} />
        <p
          className={`mt-2 text-center font-display text-accent text-ink min-[624px]:absolute min-[624px]:top-[80%] min-[624px]:left-[23.3%] min-[624px]:mt-0 min-[624px]:text-left min-[624px]:text-[clamp(20px,3.2vw,40px)] ${reveal}`}
          style={delay(0)}
        >
          des outils frais et pétillants.
        </p>
      </div>

      <div className="flex w-full flex-col items-center gap-10">
        <div className={`flex w-full max-w-md flex-col gap-4 min-[624px]:w-auto min-[624px]:max-w-none min-[624px]:flex-row ${reveal}`} inert={!ready} style={delay(150)}>
          <Button href="#contact" size="l" className="justify-center">
            Nous contacter
            <Icon />
          </Button>
          <Button href="#realisations" variant="secondary" size="l" className="justify-center">
            Voir nos projets
          </Button>
        </div>
        <a href="#studio" inert={!ready} className={`mt-4 flex items-center gap-3 font-display text-accent text-ink ${reveal}`} style={delay(300)}>
          faites défiler
          <span className="flex rotate-90 animate-[nudge_1.6s_var(--ease-soft)_infinite] motion-reduce:animate-none">
            <Icon />
          </span>
        </a>
      </div>

      <svg aria-hidden="true" className={`absolute inset-x-0 bottom-0 -z-1 h-25 w-full transition-transform duration-[1100ms] ease-out ${ready ? "translate-y-0" : "translate-y-full"}`}
        style={delay(200)} viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path d={`${WAVE}L1440 100L0 100Z`} className="fill-warm-gray" />
        <path d={WAVE} fill="none" strokeWidth="2.5" vectorEffect="non-scaling-stroke" className="stroke-ink" />
      </svg>
    </section>
  );
}
