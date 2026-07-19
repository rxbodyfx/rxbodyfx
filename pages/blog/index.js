import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';

export const posts = [
  {
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs. Tirzepatide: What\u2019s the Difference?',
    excerpt: 'Both are GLP-1 medications used in medical weight loss, but they don\u2019t work identically. Here\u2019s how they compare.',
    date: 'January 2026',
  },
  {
    slug: 'remote-patient-monitoring-explained',
    title: 'What Is Remote Patient Monitoring, and How Does It Work?',
    excerpt: 'The technology behind telehealth weight loss programs, explained in plain terms.',
    date: 'January 2026',
  },
  {
    slug: 'is-telehealth-weight-loss-legitimate',
    title: 'Is Telehealth Weight Loss Legitimate?',
    excerpt: 'What separates a real medical weight loss program from a subscription that just ships pills.',
    date: 'January 2026',
  },
];

export default function BlogIndex() {
  return (
    <Layout>
      <Seo
        title="Blog | RxBODYFx"
        description="Education and insight on medical weight loss, hormone optimization, and telehealth care from the RxBODYFx team."
        path="/blog/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <p className="eyebrow text-clay mb-4">Blog</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Straight answers, not sales copy.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          Plain-language explainers on the medicine, technology, and care
          models behind modern weight loss and hormone treatment.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 space-y-8">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}/`} className="block border border-pine/10 rounded-2xl p-7 hover:border-clay hover:bg-white transition-colors">
            <p className="eyebrow text-clay mb-2">{p.date}</p>
            <h2 className="font-display text-2xl text-pine-800">{p.title}</h2>
            <p className="mt-3 text-pine-800/75 leading-relaxed">{p.excerpt}</p>
            <span className="mt-4 inline-block text-sm text-clay font-medium">Read article &rarr;</span>
          </Link>
        ))}
      </section>
    </Layout>
  );
}
