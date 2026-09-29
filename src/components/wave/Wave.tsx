
export function Wave({Wave, UpWave, BotWave}: {Wave?: string, UpWave?: string, BotWave?: string}) {
  return (
    <section
      className="relative min-h-[400px] overflow-hidden"
      style={{ backgroundColor: UpWave }}
    >
      <svg
        className="absolute bottom-0 left-0 h-[100px] w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        {/* Remplissage du bas */}
        <path
          d="
            M0 45
            C160 70, 300 40, 450 55
            C620 75, 680 85, 850 65
            C1030 45, 1080 15, 1240 40
            C1330 55, 1380 60, 1440 40
            L1440 100
            L0 100
            Z
          "
          fill={BotWave}
        />

        {/* Ligne visible uniquement sur la vague */}
        <path
          d="
            M0 45
            C160 70, 300 40, 450 55
            C620 75, 680 85, 850 65
            C1030 45, 1080 15, 1240 40
            C1330 55, 1380 60, 1440 40
          "
          fill="none"
          stroke= {Wave}
          strokeWidth="2.5"
        />
      </svg>
    </section>
  );
}
