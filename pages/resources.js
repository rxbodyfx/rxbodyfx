import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';
import Reveal from '../components/Reveal';

const guides = [
  { href: '/blog/semaglutide-vs-tirzepatide/', title: 'Semaglutide vs. Tirzepatide', tag: 'Medication Guide' },
  { href: '/blog/remote-patient-monitoring-explained/', title: 'What Is Remote Patient Monitoring?', tag: 'Technology' },
  { href: '/blog/is-telehealth-weight-loss-legitimate/', title: 'Is Telehealth Weight Loss Legitimate?', tag: 'Care Model' },
  { href: '/research/', title: 'Research & Evidence', tag: 'Clinical Data' },
];

export default function Resources() {
  return (
    <Layout>
      <Seo
        title="Resources | RxBODYFx"
        description="Guides, case studies, and educational resources on medical weight loss, hormone optimization, and telehealth care."
        path="/resources/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <p className="eyebrow text-clay mb-4">Resources</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Everything to help you decide, before you enroll.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          Guides, patient stories, and reference material on medical weight
          loss, hormone care, and how our program actually works.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <p className="eyebrow text-clay mb-5">Guides</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((g, i) => (
            <Reveal key={g.href} delay={i * 80}>
              <Link href={g.href} className="block h-full border border-pine/10 rounded-2xl p-6 hover:border-clay hover:bg-white hover:-translate-y-1 transition-all">
                <p className="text-xs text-clay font-semibold uppercase tracking-wide">{g.tag}</p>
                <h2 className="mt-2 font-display text-lg text-pine-800">{g.title}</h2>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="eyebrow text-clay mb-5">Patient Stories</p>
        <div className="border border-dashed border-pine/25 rounded-2xl p-10 text-center">
          <p className="text-pine-800/70 leading-relaxed max-w-md mx-auto">
            Real patient transformations and case studies to be added here,
            reviewed and approved by the practice before publishing.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <p className="eyebrow text-clay mb-5">Reference</p>
        <div className="grid sm:grid-cols-2 gap-6 text-pine-800/80 leading-relaxed">
          <Reveal className="border border-pine/10 rounded-2xl p-6">
            <h3 className="font-display text-lg text-pine-800">Understanding Your Labs</h3>
            <p className="mt-2 text-sm">What bloodwork tells your care team before your plan is built.</p>
          </Reveal>
          <Reveal delay={80} className="border border-pine/10 rounded-2xl p-6">
            <h3 className="font-display text-lg text-pine-800">The Five Pillars, Explained</h3>
            <p className="mt-2 text-sm">Diet, exercise, nutrition, hormone optimization, and sleep &mdash; how each one factors into your plan.</p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
