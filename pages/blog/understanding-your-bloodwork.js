import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Understanding Your Bloodwork: A Patient's Guide to Common Labs",
  datePublished: '2026-01-20',
  dateModified: '2026-01-20',
  author: { '@type': 'Organization', name: 'RxBODYFx' },
  reviewedBy: { '@type': 'Person', name: 'Dr. Jack Janoe', jobTitle: 'Supervising Physician' },
  image: 'https://www.rxbodyfx.com/og-image.png',
};

const labs = [
  { name: 'A1C / Fasting Glucose', what: 'Reflects average blood sugar over time and screens for prediabetes or diabetes risk.' },
  { name: 'Lipid Panel', what: 'Cholesterol and triglyceride levels, used to assess cardiovascular risk.' },
  { name: 'TSH (Thyroid)', what: 'Screens thyroid function, since an under- or overactive thyroid can affect weight, energy, and mood.' },
  { name: 'Testosterone / Estrogen Panel', what: 'Establishes baseline hormone levels before any hormone therapy is considered.' },
  { name: 'Vitamin D', what: 'A common deficiency linked to energy, mood, and bone health.' },
  { name: 'CBC (Complete Blood Count)', what: 'A general health screen covering red and white blood cells, often the starting point for any workup.' },
];

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Understanding Your Bloodwork: A Patient's Guide | RxBODYFx"
        description="A plain-language guide to the common labs used to build a medical weight loss or hormone optimization plan."
        path="/blog/understanding-your-bloodwork/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Understanding Your Bloodwork', href: '/blog/understanding-your-bloodwork/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Understanding Your Bloodwork: A Patient&rsquo;s Guide
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg mb-10">
          <p>
            Every RxBODYFx plan starts with lab work, and it helps to know
            what those labs are actually looking for before your first
            appointment. Here&rsquo;s a plain-language guide to some of the
            most common ones.
          </p>
        </div>

        <div className="space-y-4">
          {labs.map((l) => (
            <div key={l.name} className="border-b border-pine/10 pb-4">
              <h2 className="font-display text-lg text-pine-800">{l.name}</h2>
              <p className="mt-1 text-pine-800/75 leading-relaxed text-sm">{l.what}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg mt-10">
          <h2 className="font-display text-2xl text-pine-800 pt-4">Why this matters more than a symptom checklist</h2>
          <p>
            Two people with the exact same symptoms can have very different
            labs, and very different appropriate treatments. This is why
            RxBODYFx builds every plan &mdash; medical weight loss, hormone
            optimization, or primary care &mdash; around real data rather than
            symptoms alone.
          </p>
          <p>
            This guide is educational and general &mdash; your own results
            should always be interpreted by your provider in the context of
            your full health history, not compared against generic reference
            ranges alone.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">See what your own labs would show.</h2>
          <Link href="/services/lab-work/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Lab Work
          </Link>
        </div>
      </article>
    </Layout>
  );
}
