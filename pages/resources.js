import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';
import Reveal from '../components/Reveal';
import { posts } from './blog/index';

const categories = ['Medication', 'Weight Loss', 'Hormones', 'Lifestyle', 'Preventive Care', 'Telehealth'];

export default function Resources() {
  return (
    <Layout>
      <Seo
        title="Resources | RxBODYFx"
        description="A categorized library of guides on medical weight loss, hormone optimization, telehealth, and preventive care."
        path="/resources/"
      />
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <p className="eyebrow text-clay mb-4">Resources</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Everything to help you decide, before you enroll.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          A full library of guides on medication, hormones, lifestyle, and
          telehealth &mdash; organized so you can find your specific question
          without leaving the site.
        </p>
      </section>

      {categories.map((cat, ci) => {
        const items = posts.filter((p) => p.category === cat);
        if (items.length === 0) return null;
        return (
          <section key={cat} className="max-w-5xl mx-auto px-6 py-8">
            <Reveal>
              <p className="eyebrow text-clay mb-5">{cat}</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((p, i) => (
                <Reveal key={p.slug} delay={i * 60}>
                  <Link href={`/blog/${p.slug}/`} className="block h-full border border-pine/10 rounded-2xl p-6 bg-white hover:border-clay hover:-translate-y-1 transition-all">
                    <h2 className="font-display text-base text-pine-800">{p.title}</h2>
                    <p className="mt-2 text-xs text-pine-800/60 leading-relaxed">{p.excerpt}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <div className="rule max-w-5xl mx-auto mt-10" />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-5">Clinical Data</p>
          <Link href="/research/" className="block border border-pine/10 rounded-2xl p-7 bg-white hover:border-clay transition-colors max-w-lg">
            <h2 className="font-display text-lg text-pine-800">Research &amp; Evidence</h2>
            <p className="mt-2 text-sm text-pine-800/70">Clinical trial data, a national obesity statistics dashboard, and links to trusted external sources: CDC, NIH, and leading obesity researchers.</p>
          </Link>
        </Reveal>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <Reveal>
          <p className="eyebrow text-clay mb-5">Patient Stories</p>
          <div className="border border-dashed border-pine/25 rounded-2xl p-10 text-center">
            <p className="text-pine-800/70 leading-relaxed max-w-md mx-auto">
              Real patient transformations and case studies to be added here,
              reviewed and approved by the practice before publishing.
            </p>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
