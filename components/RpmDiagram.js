import Icon from './Icon';

const nodes = [
  { icon: 'app', label: 'You Log Data', copy: 'Weight, vitals, meals, habits' },
  { icon: 'ongoing', label: 'Synced in Real Time', copy: 'Flows to your care team' },
  { icon: 'provider', label: 'Provider Reviews', copy: 'Trends, not just one snapshot' },
  { icon: 'consult', label: 'Plan Adjusted', copy: 'Between visits, not just at them' },
];

export default function RpmDiagram() {
  return (
    <div className="my-4 bg-white border border-pine/10 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start">
        {nodes.map((n, i) => (
          <div key={n.label} className="flex sm:flex-1">
            <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3 py-3 sm:py-0">
              <div className="w-14 h-14 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                <Icon name={n.icon} className="w-6 h-6" />
              </div>
              <div>
                <p className="font-display text-sm text-pine-800">{n.label}</p>
                <p className="text-xs text-pine-800/60 mt-1 max-w-[9rem] sm:mx-auto">{n.copy}</p>
              </div>
            </div>
            {i < nodes.length - 1 && (
              <div className="hidden sm:flex items-center justify-center flex-1 pt-6 text-clay-dark/50" aria-hidden="true">
                <Icon name="ongoing" className="w-4 h-4 opacity-0" />
                <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                  <path d="M0 6h22M18 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
