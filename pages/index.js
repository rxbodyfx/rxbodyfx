import Layout from '../components/Layout';
import Seo from '../components/Seo';
import FivePillars from '../components/FivePillars';
import Link from 'next/link';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const services = [
  {
    href: '/services/medical-weight-loss/',
    icon: 'weightLoss',
    title: 'Medical Weight Loss',
    copy: 'Physician-guided plans built around GLP-1 therapy, nutrition, and the habits that make results stick.',
  },
  {
    href: '/services/hormone-optimization/',
    icon: 'hormone',
    title: 'Hormone Optimization',
    copy: 'Testosterone and hormone therapy to address fatigue, mood, and weight gain at the root.',
  },
  {
    href: '/services/nutrition-coaching/',
    icon: 'nutrition',
    title: 'Nutrition & Coaching',
    copy: 'A dedicated coach, a real plan, and a care team that watches your progress in real time.',
  },
];

const trust = [
  { icon: 'provider', title: 'Physician & DNP-Led', copy: 'Every plan is built and monitored by a licensed clinical team, not an algorithm alone.' },
  { icon: 'labFlask', title: 'Real Lab Work', copy: 'Bloodwork and hormone panels through our RUPA lab partnership inform every plan.' },
  { icon: 'app', title: 'Tracked, Not Guessed', copy: 'Our patient app syncs your vitals, habits, and check-ins so your care team sees real progress.' },
];

export default function Home() {
  return (
    <Layout>
      <Seo
        title="RxBODYFx | Medical Weight Loss & Hormone Optimization, Nationwide"
        description="Physician-led medical weight loss, GLP-1 therapy, and hormone optimization. In-person in Friendswood, TX and by telehealth in all 50 states."
        path="/"
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div>
          <p className="eyebrow text-clay mb-5">Physician-Led &middot; In-Person + Telehealth</p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-pine-800">
            A metabolic reset, wherever you live.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-md">
            RxBODYFx built its program on five pillars of health &mdash; not a
            prescription alone. Now, through our partnership with Asher Health,
            that same care is available by telehealth in all 50 states.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact/" className="bg-pine-800 text-sand px-7 py-3.5 rounded-full hover:bg-clay transition-colors font-medium">
              Start Your Consultation
            </Link>
            <Link href="/telehealth/" className="border border-pine-800/30 px-7 py-3.5 rounded-full hover:border-clay hover:text-clay transition-colors font-medium">
              How Telehealth Works
            </Link>
          </div>
        </div>
        <FivePillars />
      </section>

      <div className="rule max-w-6xl mx-auto" />

      {/* Care model */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 md:gap-14">
        <Reveal>
          <p className="eyebrow text-clay mb-4">In Friendswood, Texas</p>
          <h2 className="font-display text-3xl text-pine-800">In-person care, done right.</h2>
          <p className="mt-4 leading-relaxed text-pine-800/80">
            Our Friendswood clinic offers full primary care, lab work through our
            partners at RUPA, health screenings, and hands-on visits with a team
            that knows your history &mdash; not just your chart.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow text-clay mb-4">Everywhere Else</p>
          <h2 className="font-display text-3xl text-pine-800">Telehealth, built for 50 states.</h2>
          <p className="mt-4 leading-relaxed text-pine-800/80">
            Through our partnership with Asher Health, patients outside the
            Houston area get the same physician-guided program: virtual visits,
            prescription management, and a care team that tracks progress
            through our patient app in real time.
          </p>
        </Reveal>
      </section>

      <div className="rule max-w-6xl mx-auto" />

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <p className="eyebrow text-clay mb-4">Our Programs</p>
        <h2 className="font-display text-3xl md:text-4xl text-pine-800 mb-12 max-w-lg">
          Care built around how your body actually works.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Reveal key={s.href} delay={i * 100}>
              <Link
                href={s.href}
                className="block h-full border border-pine/10 rounded-2xl p-7 hover:border-clay hover:bg-white hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-5">
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl text-pine-800">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pine-800/75">{s.copy}</p>
                <span className="mt-5 inline-block text-sm text-clay font-medium">Learn more &rarr;</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule max-w-6xl mx-auto" />

      {/* Trust */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {trust.map((t, i) => (
          <Reveal key={t.title} delay={i * 100}>
            <div className="w-11 h-11 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-4">
              <Icon name={t.icon} className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg text-pine-800">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pine-800/75">{t.copy}</p>
          </Reveal>
        ))}
      </section>

      {/* CTA banner */}
      <section className="bg-pine-800 text-sand">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Available in Texas &mdash; and now, everywhere.</h2>
          <p className="mt-4 text-sand/80 max-w-xl mx-auto">
            Free consultation, no obligation. Find out if medical weight loss or
            hormone optimization is right for you.
          </p>
          <Link href="/contact/" className="mt-8 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book Your Free Consult
          </Link>
        </div>
      </section>
    </Layout>
  );
}
