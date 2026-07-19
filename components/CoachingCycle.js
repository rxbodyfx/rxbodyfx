import Icon from './Icon';

const steps = [
  { icon: 'consult', label: 'You Log' },
  { icon: 'ongoing', label: 'Coach Reviews' },
  { icon: 'provider', label: 'Plan Adjusts' },
  { icon: 'app', label: 'You Follow Up' },
];

export default function CoachingCycle() {
  return (
    <div className="bg-white border border-pine/10 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center">
        {steps.map((s, i) => (
          <div key={s.label} className="flex sm:flex-1">
            <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3 py-3 sm:py-0">
              <div className="w-14 h-14 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                <Icon name={s.icon} className="w-6 h-6" />
              </div>
              <p className="font-display text-sm text-pine-800">{s.label}</p>
            </div>
            {i < steps.length - 1 ? (
              <div className="hidden sm:flex items-center justify-center flex-1 text-clay/50" aria-hidden="true">
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                  <path d="M0 6h22M18 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ) : (
              <div className="hidden sm:flex items-center justify-center text-clay/50 pl-2" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M18 4v3h-3M6 20v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-pine-800/50">A cycle that repeats every week, not a plan you get once.</p>
    </div>
  );
}
