import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Breadcrumbs from '../../components/Breadcrumbs';
import Reveal from '../../components/Reveal';
import Checklist from '../../components/Checklist';

const symptoms = [
  { icon: 'ongoing', label: 'Persistent fatigue', copy: 'Low energy that doesn\u2019t improve with rest.' },
  { icon: 'hormone', label: 'Mood changes', copy: 'Irritability, low motivation, or flat mood.' },
  { icon: 'weightLoss', label: 'Stubborn weight gain', copy: 'Weight that resists diet and exercise alone.' },
  { icon: 'app', label: 'Reduced drive or focus', copy: 'A noticeable dip from your baseline.' },
];

const testingSteps = [
  { icon: 'consult', label: 'Consultation', copy: 'Discuss your symptoms and history.' },
  { icon: 'labFlask', label: 'Bloodwork', copy: 'A full hormone panel, not a single number.' },
  { icon: 'provider', label: 'Provider Review', copy: 'Your results reviewed against your symptoms.' },
  { icon: 'ongoing', label: 'Plan & Monitoring', copy: 'Treatment starts, then labs are rechecked.' },
];

const faqs = [
  {
    q: 'How often are hormone levels rechecked?',
    a: 'Typically at set intervals after starting therapy, then periodically once your levels stabilize \u2014 your provider will set a schedule based on your specific treatment.',
  },
  {
    q: 'Is hormone therapy only for men?',
    a: 'No. We work with both men and women. For men, this often centers on testosterone; for women, hormone shifts around perimenopause and menopause are a common reason for evaluation.',
  },
  {
    q: 'Will this affect my other medications?',
    a: 'Your provider reviews your full medication list and health history before starting any hormone therapy to check for interactions or contraindications.',
  },
];

export default function HormoneOptimization() {
  return (
    <Layout>
      <Seo
        title="Hormone Optimization & Testosterone Therapy | RxBODYFx"
        description="Hormone and testosterone optimization to address fatigue, mood, and weight gain at the root. In-person in Friendswood, TX and by telehealth nationwide."
        path="/services/hormone-optimization/"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Hormone Optimization', href: '/services/hormone-optimization/' }]} />
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

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <Reveal className="border border-pine/10 rounded-2xl p-7 bg-white">
          <h2 className="font-display text-xl text-pine-800">For Men</h2>
          <p className="mt-3 text-sm leading-relaxed text-pine-800/75">
            Testosterone replacement therapy for patients with clinically low
            levels, addressing energy, muscle mass, mood, and libido, with
            regular lab monitoring to keep levels in a safe, effective range.
          </p>
        </Reveal>
        <Reveal delay={100} className="border border-pine/10 rounded-2xl p-7 bg-white">
          <h2 className="font-display text-xl text-pine-800">For Women</h2>
          <p className="mt-3 text-sm leading-relaxed text-pine-800/75">
            Hormone evaluation and support around perimenopause and menopause,
            and other hormone-related shifts affecting weight, mood, sleep, and
            energy &mdash; individualized to your labs and stage of life.
          </p>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">The Process</p>
          <h2 className="font-display text-2xl text-pine-800 mb-8">From symptoms to a treatment plan.</h2>
        </Reveal>
        <div className="bg-white border border-pine/10 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start">
            {testingSteps.map((s, i) => (
              <div key={s.label} className="flex sm:flex-1">
                <div className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-3 py-3 sm:py-0">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-display text-sm text-pine-800">{s.label}</p>
                    <p className="text-xs text-pine-800/60 mt-1 max-w-[9rem] sm:mx-auto">{s.copy}</p>
                  </div>
                </div>
                {i < testingSteps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center flex-1 pt-6 text-clay/50" aria-hidden="true">
                    <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
                      <path d="M0 6h22M18 1l6 5-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800 mb-8">Common questions</h2>
        </Reveal>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70} className="border-b border-pine/10 pb-6">
              <h3 className="font-display text-lg text-pine-800">{f.q}</h3>
              <p className="mt-2 text-pine-800/75 leading-relaxed text-sm">{f.a}</p>
            </Reveal>
          ))}
        </div>
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
