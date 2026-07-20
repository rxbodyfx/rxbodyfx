import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import WeightLossChart from '../components/WeightLossChart';
import ReviewedBy from '../components/ReviewedBy';
import StatDashboard from '../components/StatDashboard';
import TrustedSources from '../components/TrustedSources';

const studies = [
  {
    name: 'SURMOUNT-5',
    source: 'New England Journal of Medicine, 2025',
    finding: 'Head-to-head trial of 751 adults with obesity: tirzepatide produced an average 20.2% weight reduction at 72 weeks, compared to 13.7% for semaglutide.',
    href: 'https://pubmed.ncbi.nlm.nih.gov/40353578/',
  },
  {
    name: 'STEP Trial Program',
    source: 'Multiple publications, STEP 1\u20135',
    finding: 'Semaglutide produced average weight reductions of roughly 15% across pivotal trials in adults with obesity.',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12475876/',
  },
  {
    name: 'SURMOUNT Trial Program',
    source: 'Multiple publications, SURMOUNT 1\u20135',
    finding: 'Tirzepatide produced average weight reductions in the range of 21\u201323% across pivotal and real-world observational studies.',
    href: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12475876/',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  name: 'Research & Evidence on GLP-1 Weight Loss Medications',
  url: 'https://www.rxbodyfx.com/research/',
  reviewedBy: { '@type': 'Person', name: 'Dr. Jack Janoe', jobTitle: 'Supervising Physician' },
  lastReviewed: '2026-01-15',
};

export default function Research() {
  return (
    <Layout>
      <Seo
        title="Research & Evidence | RxBODYFx"
        description="Published clinical trial data behind the GLP-1 medications used in our medical weight loss program, with links to original sources."
        path="/research/"
        jsonLd={jsonLd}
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <p className="eyebrow text-clay-dark mb-4">Research & Evidence</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          We don&rsquo;t ask you to take our word for it.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          The medications used in our program have been studied in some of
          the largest clinical trials in modern obesity medicine. Here&rsquo;s
          a plain-language summary of what&rsquo;s been published, with links
          to the original research.
        </p>
        <div className="mt-8 max-w-2xl">
          <ReviewedBy />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-4">
        <WeightLossChart />
        <Link href="/blog/semaglutide-vs-tirzepatide/" className="mt-4 inline-block text-sm text-clay-dark font-medium">
          Read the full breakdown: Semaglutide vs. Tirzepatide &rarr;
        </Link>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <Reveal>
          <StatDashboard />
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        {studies.map((s, i) => (
          <Reveal key={s.name} delay={i * 100} className="border border-pine/10 rounded-2xl p-7 bg-white">
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-display text-xl text-pine-800">{s.name}</h2>
              <span className="text-xs text-pine-800/50 uppercase tracking-wide">{s.source}</span>
            </div>
            <p className="mt-3 text-pine-800/80 leading-relaxed">{s.finding}</p>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-clay-dark font-medium">
              View published study &rarr;
            </a>
          </Reveal>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-10">
        <p className="text-sm text-pine-800/60 leading-relaxed italic">
          Individual results vary. These figures reflect group averages from
          published clinical research, not a guarantee of any individual
          patient&rsquo;s outcome. Always talk to your provider about what to
          expect based on your own health history.
        </p>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">Understanding the Terms</p>
          <h2 className="font-display text-2xl text-pine-800 mb-8">A short glossary.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { term: 'GLP-1', def: 'Glucagon-like peptide-1, a hormone your body makes naturally that signals fullness and slows digestion.' },
            { term: 'GIP', def: 'Glucose-dependent insulinotropic polypeptide, a second hormone pathway that tirzepatide targets alongside GLP-1.' },
            { term: 'Receptor Agonist', def: 'A medication that mimics a natural hormone by activating the same receptors in the body.' },
            { term: 'Head-to-Head Trial', def: 'A study that directly compares two treatments against each other, rather than each against a placebo separately.' },
          ].map((g, i) => (
            <Reveal key={g.term} delay={i * 70} className="border border-pine/10 rounded-2xl p-6 bg-white">
              <h3 className="font-display text-lg text-pine-800">{g.term}</h3>
              <p className="mt-2 text-sm text-pine-800/75 leading-relaxed">{g.def}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">Beyond Our Own Program</p>
          <h2 className="font-display text-2xl text-pine-800 mb-3">Trusted voices in obesity medicine.</h2>
          <p className="text-pine-800/70 leading-relaxed max-w-2xl mb-8">
            We don&rsquo;t expect you to rely on RxBODYFx alone as a source
            &mdash; here are the professional bodies, government data, and
            researchers whose published work informs this field, including
            our own approach.
          </p>
        </Reveal>
        <TrustedSources />
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">Patient Stories</p>
          <h2 className="font-display text-2xl text-pine-800 mb-3">Real experience, not just trial data.</h2>
          <div className="border border-dashed border-pine/25 rounded-2xl p-10 text-center mt-6">
            <p className="text-pine-800/70 leading-relaxed max-w-md mx-auto">
              Real patient transformations and case studies to be added here,
              reviewed and approved by the practice before publishing.
            </p>
          </div>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800 mb-4">How this applies to your plan</h2>
          <p className="text-pine-800/80 leading-relaxed max-w-2xl">
            Trial averages tell you what&rsquo;s possible, not what will happen
            to you specifically. That&rsquo;s why every RxBODYFx plan starts
            with your own labs and history, reviewed by a licensed provider,
            before any medication decision is made.
          </p>
          <Link href="/services/medical-weight-loss/" className="mt-6 inline-block text-clay-dark font-medium">
            See how our program works &rarr;
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}
