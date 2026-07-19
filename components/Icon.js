const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

const icons = {
  weightLoss: (
    <>
      <path d="M12 3v4M8 7h8l2 13H6L8 7z" />
      <path d="M9 12h6" />
    </>
  ),
  hormone: (
    <>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="M10.1 10.1l3.8 3.8" />
    </>
  ),
  nutrition: (
    <>
      <path d="M12 3c-1.2 1.4-1.6 2.7-1.2 4 .5-1 1.4-1.6 2.4-1.7" />
      <path d="M12 7c-4 0-6.5 3-6.5 7 0 4 2.7 7 6.5 7s6.5-3 6.5-7c0-4-2.5-7-6.5-7z" />
    </>
  ),
  primaryCare: (
    <>
      <path d="M12 21s-7-4.35-9.3-8.7C1.4 9.4 2.7 6 6 6c2 0 3.3 1 4 2.2C10.7 7 12 6 14 6c3.3 0 4.6 3.4 3.3 6.3C15 16.65 12 21 12 21z" />
    </>
  ),
  screening: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 3h6v3H9z" />
      <path d="M8.5 12l2 2 4-4.5" />
    </>
  ),
  labWork: (
    <>
      <path d="M9 3h6M10 3v7.5L5.5 18a2 2 0 0 0 1.7 3h9.6a2 2 0 0 0 1.7-3L14 10.5V3" />
      <path d="M8.5 15h7" />
    </>
  ),
  telehealth: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10.5l5-2.5v9l-5-2.5" />
    </>
  ),
  consult: (
    <>
      <path d="M4 4h16v11H8l-4 4V4z" />
      <path d="M8 9h8M8 12h5" />
    </>
  ),
  labFlask: (
    <>
      <path d="M9 2h6M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 20.5h11.6a2 2 0 0 0 1.7-3L14 8V2" />
    </>
  ),
  provider: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" />
    </>
  ),
  ongoing: (
    <>
      <path d="M4 12a8 8 0 0 1 14-5.2M20 12a8 8 0 0 1-14 5.2" />
      <path d="M18 4v3h-3M6 20v-3h3" />
    </>
  ),
  app: (
    <>
      <rect x="6" y="2.5" width="12" height="19" rx="2" />
      <path d="M11 19h2" />
    </>
  ),
};

export default function Icon({ name, className = 'w-6 h-6', ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base} {...props}>
      {icons[name] || null}
    </svg>
  );
}
