import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Reveal from '../../components/Reveal';
import Checklist from '../../components/Checklist';

const symptoms = [
  { icon: 'ongoing', label: 'Persistent fatigue', copy: 'Low energy that doesn\u2019t improve with rest.' },
  { icon: 'hormone', label: 'Mood changes', copy: 'Irritability, low motivation, or flat mood.' },
  { icon: 'weightLoss', label: 'Stubborn weight gain', copy: 'Weight that resists diet and exercise alone.' },
  { icon: 'app', label: 'Reduced drive or focus', copy: 'A noticeable dip from your baseline.' },
];

export default function HormoneOptimization() {
  return (
    <Layout>
      <Seo
        title="Hormone Optimization & Testosterone Therapy | RxBODYFx"
        description="Hormone and testosterone optimization to address fatigue, mood, and weight gain at the root. In-person in Friendswood, TX and by telehealth nationwide."
        path="/services/hormone-optimization/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
            <Icon name="hormone" className="w-7 h-7" />
          </div>
          <p className="eyebrow text-clay mb-4">Hormone Optimization</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            Fatigue and weight gain aren&rsquo;t always about willpower.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
            Hormone imbalance can drive fatigue, mood changes, and stubborn
            weight gain long before it shows up anywhere else. We test first,
            then treat &mdash; adjusting hormone levels through lifestyle
            changes, medication, or therapy based on what your labs actually
            show.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Reveal>
          <div className="bg-white border border-pine/10 rounded-2xl p-8">
            <h2 className="font-display text-xl text-pine-800 mb-6">Signs your hormones may be a factor</h2>
            <Checklist items={symptoms} columns={2} />
          </div>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800">Testosterone Therapy</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            For patients with clinically low testosterone, we manage
            replacement therapy with regular lab monitoring to keep levels in
            a safe, effective range.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-2xl text-pine-800">Whole-Body Approach</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Hormone therapy works best alongside the same five pillars behind
            our weight loss program &mdash; sleep, nutrition, and stress
            management all affect hormone levels too.
          </p>
        </Reveal>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Start with a lab panel, not a guess.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
