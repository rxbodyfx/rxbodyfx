import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Reveal from '../../components/Reveal';

const services = [
  { href: '/services/medical-weight-loss/', icon: 'weightLoss', title: 'Medical Weight Loss', copy: 'GLP-1 therapy paired with nutrition, hormone, and lifestyle support for weight loss that lasts.' },
  { href: '/services/hormone-optimization/', icon: 'hormone', title: 'Hormone Optimization', copy: 'Testosterone and hormone therapy for energy, mood, and body composition.' },
  { href: '/services/nutrition-coaching/', icon: 'nutrition', title: 'Nutrition & Coaching', copy: 'A personalized plan and a real coach who checks in as your habits change.' },
];

const additional = [
  { href: '/services/primary-care/', icon: 'primaryCare', title: 'Primary Care', copy: 'Routine check-ups, chronic disease management, and preventive medicine.' },
  { href: '/services/health-screenings/', icon: 'screening', title: 'Health Screenings', copy: 'Blood pressure, cholesterol, glucose, BMI, and cancer screenings by risk profile.' },
  { href: '/services/lab-work/', icon: 'labWork', title: 'Lab Work', copy: 'Bloodwork, hormone panels, and genetic/food sensitivity testing through our RUPA partnership.' },
];

export default function Services() {
  return (
    <Layout>
      <Seo
        title="Our Services | RxBODYFx Medical Weight Loss & Wellness"
        description="Medical weight loss, hormone optimization, nutrition coaching, primary care, and lab work &mdash; in Friendswood, TX and nationwide by telehealth."
        path="/services/"
      />
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14">
        <p className="eyebrow text-clay-dark mb-4">Our Services</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 max-w-2xl leading-tight">
          Care built on five pillars, not one prescription.
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Reveal key={s.href} delay={i * 100}>
            <Link href={s.href} className="block h-full border border-pine/10 rounded-2xl p-7 hover:border-clay hover:bg-white hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-5">
                <Icon name={s.icon} className="w-6 h-6" />
              </div>
              <h2 className="font-display text-xl text-pine-800">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-pine-800/75">{s.copy}</p>
              <span className="mt-5 inline-block text-sm text-clay-dark font-medium">Learn more &rarr;</span>
            </Link>
          </Reveal>
        ))}
      </section>

      <div className="rule max-w-6xl mx-auto" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="eyebrow text-clay-dark mb-4">Also Available In-Clinic</p>
        <div className="grid md:grid-cols-3 gap-10">
          {additional.map((s, i) => (
            <Reveal key={s.href} delay={i * 100}>
              <Link href={s.href} className="flex gap-4 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                  <Icon name={s.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-pine-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-pine-800/75">{s.copy}</p>
                  <span className="mt-3 inline-block text-sm text-clay-dark font-medium">Learn more &rarr;</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
