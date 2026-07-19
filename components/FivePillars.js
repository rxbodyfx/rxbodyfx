const pillars = [
  { label: 'Nutrition', angle: 0 },
  { label: 'Exercise', angle: 72 },
  { label: 'Hormones', angle: 144 },
  { label: 'Sleep', angle: 216 },
  { label: 'Stress', angle: 288 },
];

export default function FivePillars() {
  const r = 150;
  return (
    <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] mx-auto">
      <svg viewBox="0 0 380 380" className="w-full h-full pillar-orbit" aria-hidden="true">
        <circle cx="190" cy="190" r={r} fill="none" stroke="#1F3F3A" strokeOpacity="0.15" strokeWidth="1" />
        {pillars.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = 190 + r * Math.cos(rad);
          const y = 190 + r * Math.sin(rad);
          return <circle key={p.label} cx={x} cy={y} r="5" fill="#B8863B" />;
        })}
      </svg>
      <div className="absolute inset-0 pillar-label">
        {pillars.map((p) => {
          const rad = (p.angle * Math.PI) / 180;
          const x = 50 + (r / 1.9) * Math.cos(rad);
          const y = 50 + (r / 1.9) * Math.sin(rad);
          return (
            <span
              key={p.label}
              className="absolute text-[11px] font-body font-semibold tracking-wide text-pine-800 bg-sand/90 px-2 py-1 rounded-full border border-pine/10"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
            >
              {p.label}
            </span>
          );
        })}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center bg-sand w-28 h-28 rounded-full border border-pine/15 flex flex-col items-center justify-center shadow-sm">
          <span className="font-display text-2xl text-pine-800 leading-none">5</span>
          <span className="eyebrow text-clay mt-1">Pillars</span>
        </div>
      </div>
    </div>
  );
}
