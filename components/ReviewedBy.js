export default function ReviewedBy({ date = 'January 2026' }) {
  return (
    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-pine/10">
      <div className="w-10 h-10 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 font-display text-sm shrink-0">
        JJ
      </div>
      <div className="text-sm">
        <p className="text-pine-800/80">
          Medically reviewed by <span className="font-medium text-pine-800">Dr. Jack Janoe, MD</span> &mdash; Supervising Physician, RxBODYFx
        </p>
        <p className="text-pine-800/50 text-xs mt-0.5">Last updated {date}</p>
      </div>
    </div>
  );
}
