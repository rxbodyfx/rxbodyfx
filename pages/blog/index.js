import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Reveal from '../../components/Reveal';

export const posts = [
  {
    slug: 'semaglutide-vs-tirzepatide',
    title: 'Semaglutide vs. Tirzepatide: What\u2019s the Difference?',
    excerpt: 'Both are GLP-1 medications used in medical weight loss, but they don\u2019t work identically.',
    category: 'Medication',
  },
  {
    slug: 'how-long-until-glp1-results',
    title: 'How Long Does It Take to See Results?',
    excerpt: 'A realistic timeline for what to expect on GLP-1 medication.',
    category: 'Medication',
  },
  {
    slug: 'what-happens-if-you-stop-glp1',
    title: 'What Happens If You Stop Taking GLP-1 Medication?',
    excerpt: 'What the research shows about discontinuation and long-term maintenance.',
    category: 'Medication',
  },
  {
    slug: 'compounded-vs-brand-glp1',
    title: 'Compounded vs. Brand-Name GLP-1',
    excerpt: 'What compounding means and what questions are worth asking any provider.',
    category: 'Medication',
  },
  {
    slug: 'weight-loss-plateaus',
    title: 'Why Weight Loss Plateaus Happen',
    excerpt: 'The biology behind plateaus, and what actually helps.',
    category: 'Weight Loss',
  },
  {
    slug: 'perimenopause-weight-gain',
    title: 'Perimenopause, Menopause, and Weight Gain',
    excerpt: 'Why weight distribution and metabolism change, and what evaluation looks like.',
    category: 'Hormones',
  },
  {
    slug: 'trt-myths-vs-facts',
    title: 'Testosterone Replacement Therapy: Myths vs. Facts',
    excerpt: 'Common misconceptions about TRT, and what the evidence says.',
    category: 'Hormones',
  },
  {
    slug: 'sleep-and-weight-management',
    title: 'The Role of Sleep in Weight Management',
    excerpt: 'Why sleep is one of the five pillars, not a minor detail.',
    category: 'Lifestyle',
  },
  {
    slug: 'stress-cortisol-weight',
    title: 'Stress, Cortisol, and Weight',
    excerpt: 'Why you can\u2019t out-diet a chronic stress response.',
    category: 'Lifestyle',
  },
  {
    slug: 'understanding-your-bloodwork',
    title: 'Understanding Your Bloodwork',
    excerpt: 'A patient\u2019s guide to the common labs behind every plan.',
    category: 'Preventive Care',
  },
  {
    slug: 'remote-patient-monitoring-explained',
    title: 'What Is Remote Patient Monitoring?',
    excerpt: 'The technology behind telehealth weight loss programs, explained.',
    category: 'Telehealth',
  },
  {
    slug: 'is-telehealth-weight-loss-legitimate',
    title: 'Is Telehealth Weight Loss Legitimate?',
    excerpt: 'What separates a real program from a subscription that just ships pills.',
    category: 'Telehealth',
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
        <p className="eyebrow text-clay-dark mb-4">Blog</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Straight answers, not sales copy.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          Plain-language explainers on the medicine, technology, and care
          models behind modern weight loss and hormone treatment.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24 grid sm:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 40}>
            <Link href={`/blog/${p.slug}/`} className="block h-full border border-pine/10 rounded-2xl p-6 hover:border-clay hover:bg-white hover:-translate-y-1 transition-all">
              <p className="text-xs text-clay-dark font-semibold uppercase tracking-wide">{p.category}</p>
              <h2 className="mt-2 font-display text-lg text-pine-800">{p.title}</h2>
              <p className="mt-2 text-sm text-pine-800/70 leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-block text-sm text-clay-dark font-medium">Read article &rarr;</span>
            </Link>
          </Reveal>
        ))}
      </section>
    </Layout>
  );
}
