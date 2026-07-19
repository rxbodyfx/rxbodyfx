import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Testosterone Replacement Therapy: Myths vs. Facts',
  datePublished: '2026-01-20',
  dateModified: '2026-01-20',
  author: { '@type': 'Organization', name: 'RxBODYFx' },
  reviewedBy: { '@type': 'Person', name: 'Dr. Jack Janoe', jobTitle: 'Supervising Physician' },
  image: 'https://www.rxbodyfx.com/og-image.png',
};

const items = [
  {
    myth: 'TRT is just for bodybuilders.',
    fact: 'Clinically low testosterone is a real, diagnosable condition that affects energy, mood, and metabolism regardless of whether someone lifts weights.',
  },
  {
    myth: 'Any tiredness or low mood means you need TRT.',
    fact: 'Fatigue and mood changes have many possible causes. TRT is appropriate specifically when bloodwork confirms clinically low testosterone, not based on symptoms alone.',
  },
  {
    myth: "Once you start, you can't stop.",
    fact: 'Treatment decisions, including whether to continue, adjust, or stop, are ongoing conversations with your provider based on your labs and how you feel.',
  },
  {
    myth: "It's a quick fix with no monitoring needed.",
    fact: 'Legitimate TRT involves regular lab monitoring to keep levels in a safe, effective range and to watch for any needed adjustments.',
  },
];

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Testosterone Replacement Therapy: Myths vs. Facts | RxBODYFx"
        description="Common misconceptions about TRT, and what the evidence and clinical practice actually say."
        path="/blog/trt-myths-vs-facts/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'TRT Myths vs. Facts', href: '/blog/trt-myths-vs-facts/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay-dark mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Testosterone Replacement Therapy: Myths vs. Facts
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg mb-10">
          <p>
            TRT gets talked about a lot online, and not always accurately.
            Here&rsquo;s a plain look at some of the most common claims.
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.myth} className="bg-white border border-pine/10 rounded-2xl p-7">
              <p className="text-xs text-clay-dark font-semibold uppercase tracking-wide">Myth</p>
              <p className="mt-1 font-display text-lg text-pine-800">{item.myth}</p>
              <p className="mt-4 text-xs text-pine-800/50 font-semibold uppercase tracking-wide">Fact</p>
              <p className="mt-1 text-pine-800/80 leading-relaxed">{item.fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Find out where your levels actually stand.</h2>
          <Link href="/services/hormone-optimization/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Hormone Optimization
          </Link>
        </div>
      </article>
    </Layout>
  );
}
