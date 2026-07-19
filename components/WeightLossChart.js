const data = [
  { label: 'Semaglutide', value: 13.7, source: 'SURMOUNT-5, 72 weeks' },
  { label: 'Tirzepatide', value: 20.2, source: 'SURMOUNT-5, 72 weeks' },
];

const max = 25;

export default function WeightLossChart() {
  return (
    <figure className="my-4">
      <div
        className="bg-white border border-pine/10 rounded-2xl p-8"
        role="img"
        aria-label="Bar chart: average weight loss at 72 weeks, SURMOUNT-5 trial. Semaglutide 13.7 percent. Tirzepatide 20.2 percent."
      >
        <p className="eyebrow text-clay mb-6">SURMOUNT-5 &middot; Average Weight Loss at 72 Weeks</p>
        <div className="space-y-6">
          {data.map((d) => (
            <div key={d.label}>
              <div className="flex justify-between items-baseline mb-1.5">
                <span className="font-display text-lg text-pine-800">{d.label}</span>
                <span className="font-display text-lg text-clay">{d.value}%</span>
              </div>
              <div className="h-3 rounded-full bg-pine-800/8 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-pine-700 to-clay"
                  style={{ width: `${(d.value / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-pine-800/50">
          Source: SURMOUNT-5 head-to-head trial, published in the New England Journal of Medicine. Group averages; individual results vary.
        </p>
      </div>
    </figure>
  );
}
