const sources = [
  {
    name: 'Obesity Medicine Association',
    type: 'Professional Body',
    note: 'The largest U.S. organization of clinicians specializing in obesity medicine, publishing the clinical Obesity Algorithm used across the field.',
    href: 'https://obesitymedicine.org/',
  },
  {
    name: 'The Obesity Society',
    type: 'Professional Body',
    note: 'A research and clinical society publishing the journal Obesity and patient-facing education reviewed by its physician members.',
    href: 'https://www.obesity.org/information-for-patients/',
  },
  {
    name: 'CDC \u2014 Obesity Data & Statistics',
    type: 'Government / Public Health',
    note: 'National prevalence data drawn from NHANES, the government\u2019s ongoing health examination survey of the U.S. population.',
    href: 'https://www.cdc.gov/obesity/data-and-statistics/index.html',
  },
  {
    name: 'NIDDK (National Institutes of Health)',
    type: 'Government / Research',
    note: 'The NIH institute responsible for federally funded research on obesity, diabetes, and metabolic disease.',
    href: 'https://www.niddk.nih.gov/health-information/health-statistics/overweight-obesity',
  },
  {
    name: 'Dr. Robert F. Kushner, MD \u2014 Northwestern Medicine',
    type: 'Researcher',
    note: 'A presenter of the pivotal STEP trial program data on semaglutide for weight management at the American Diabetes Association.',
    href: 'https://www.ccjm.org/page/ada-2021/gp1-obesity',
  },
  {
    name: 'Dr. Louis J. Aronne, MD \u2014 Weill Cornell Medicine',
    type: 'Researcher',
    note: 'Lead investigator of the SURMOUNT-5 head-to-head trial comparing tirzepatide and semaglutide, published in NEJM.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/40353578/',
  },
];

export default function TrustedSources() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {sources.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-pine/10 rounded-2xl p-6 bg-white hover:border-clay transition-colors"
        >
          <p className="text-xs text-clay font-semibold uppercase tracking-wide">{s.type}</p>
          <h3 className="mt-2 font-display text-base text-pine-800">{s.name}</h3>
          <p className="mt-2 text-sm text-pine-800/70 leading-relaxed">{s.note}</p>
        </a>
      ))}
    </div>
  );
}
