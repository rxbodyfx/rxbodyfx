import Reveal from './Reveal';

const stats = [
  { value: '40.3%', label: 'U.S. adults with obesity', source: 'CDC / NHANES, 2021\u20132023' },
  { value: '9.7%', label: 'U.S. adults with severe obesity', source: 'CDC / NHANES, 2021\u20132023' },
  { value: '72.4%', label: 'U.S. adults overweight or higher', source: 'CDC / NHANES, 2021\u20132023' },
  { value: '21.1%', label: 'Children & teens (2\u201319) with obesity', source: 'CDC / NHANES, 2021\u20132023' },
];

export default function StatDashboard() {
  return (
    <div className="bg-white border border-pine/10 rounded-2xl p-8">
      <p className="eyebrow text-clay-dark mb-1">National Snapshot</p>
      <h2 className="font-display text-xl text-pine-800 mb-6">Obesity in the U.S., by the numbers</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70}>
            <div className="font-display text-3xl sm:text-4xl text-pine-800">{s.value}</div>
            <p className="mt-1.5 text-xs text-pine-800/70 leading-snug">{s.label}</p>
            <p className="mt-1 text-[10px] text-pine-800/40 uppercase tracking-wide">{s.source}</p>
          </Reveal>
        ))}
      </div>
      <a
        href="https://www.cdc.gov/obesity/data-and-statistics/index.html"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-sm text-clay-dark font-medium"
      >
        View full CDC data &rarr;
      </a>
    </div>
  );
}
