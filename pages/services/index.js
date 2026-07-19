import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';

const services = [
  { href: '/services/medical-weight-loss/', title: 'Medical Weight Loss', copy: 'GLP-1 therapy paired with nutrition, hormone, and lifestyle support for weight loss that lasts.' },
  { href: '/services/hormone-optimization/', title: 'Hormone Optimization', copy: 'Testosterone and hormone therapy for energy, mood, and body composition.' },
  { href: '/services/nutrition-coaching/', title: 'Nutrition & Coaching', copy: 'A personalized plan and a real coach who checks in as your habits change.' },
];

const additional = [
  { title: 'Primary Care', copy: 'Routine check-ups, chronic disease management, and preventive medicine.' },
  { title: 'Health Screenings', copy: 'Blood pressure, cholesterol, glucose, BMI, and cancer screenings by risk profile.' },
  { title: 'Lab Work', copy: 'Bloodwork, hormone panels, and genetic/food sensitivity testing through our RUPA partnership.' },
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
        <p className="eyebrow text-clay mb-4">Our Services</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 max-w-2xl leading-tight">
          Care built on five pillars, not one prescription.
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="block border border-pine/10 rounded-2xl p-7 hover:border-clay hover:bg-white transition-colors">
            <h2 className="font-display text-xl text-pine-800">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-pine-800/75">{s.copy}</p>
            <span className="mt-5 inline-block text-sm text-clay font-medium">Learn more &rarr;</span>
          </Link>
        ))}
      </section>

      <div className="rule max-w-6xl mx-auto" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="eyebrow text-clay mb-4">Also Available In-Clinic</p>
        <div className="grid md:grid-cols-3 gap-10">
          {additional.map((s) => (
            <div key={s.title}>
              <h3 className="font-display text-lg text-pine-800">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/75">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
