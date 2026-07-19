import Reveal from './Reveal';

const stats = [
  { value: '50', label: 'States Served' },
  { value: '5', label: 'Pillars of Care' },
  { value: '40+', label: "Yrs, Supervising Physician's Experience" },
  { value: '1', label: 'Care Team, Start to Finish' },
];

export default function StatsStrip() {
  return (
    <section className="border-y border-pine/10 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} className="text-center md:text-left">
            <div className="font-display text-4xl text-pine-800">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-pine-800/60">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
