import Icon from './Icon';
import Reveal from './Reveal';

export default function Checklist({ items, columns = 1 }) {
  const gridClass = columns === 2 ? 'sm:grid-cols-2' : '';
  return (
    <div className={`grid ${gridClass} gap-5`}>
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 60} className="flex items-start gap-4">
          <div className="w-9 h-9 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mt-0.5">
            <Icon name={item.icon || 'screening'} className="w-4 h-4" />
          </div>
          <div>
            <p className="font-display text-base text-pine-800">{item.label}</p>
            {item.copy && <p className="text-sm text-pine-800/70 mt-0.5 leading-relaxed">{item.copy}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
