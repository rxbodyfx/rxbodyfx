const pillars = [
  { label: 'Nutrition', angle: -90 },
  { label: 'Hormones', angle: -18 },
  { label: 'Sleep', angle: 54 },
  { label: 'Stress', angle: 126 },
  { label: 'Exercise', angle: 198 },
];

const RADIUS_PCT = 36;

export default function FivePillars() {
  return (
    <div className="relative w-[80vw] max-w-[300px] sm:max-w-[340px] md:max-w-[380px] aspect-square mx-auto">
      {/* Static background ring */}
      <svg viewBox="0 0 380 380" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <circle cx="190" cy="190" r="140" fill="none" stroke="#1F3F3A" strokeOpacity="0.15" strokeWidth="1" />
      </svg>

      {/* Single rotating layer: dots + labels move together, always in sync */}
      <div className="absolute inset-0 orbit-rotate">
        {pillars.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = 50 + RADIUS_PCT * Math.cos(rad);
          const y = 50 + RADIUS_PCT * Math.sin(rad);
          return (
            <div
              key={p.label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {/* Counter-rotates to cancel the parent's spin, keeping text upright while still orbiting */}
              <div className="orbit-counter flex flex-col items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-clay shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-body font-semibold tracking-wide text-pine-800 bg-sand/95 px-2 py-1 rounded-full border border-pine/10 whitespace-nowrap">
                  {p.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Static center badge, never rotates */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-sand w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-pine/15 flex flex-col items-center justify-center shadow-sm">
          <span className="font-display text-xl sm:text-2xl text-pine-800 leading-none">5</span>
          <span className="eyebrow text-clay mt-1 text-[9px] sm:text-[10px]">Pillars</span>
        </div>
      </div>
    </div>
  );
}
