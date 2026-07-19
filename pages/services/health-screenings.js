import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Breadcrumbs from '../../components/Breadcrumbs';
import Reveal from '../../components/Reveal';
import Checklist from '../../components/Checklist';

const screenings = [
  { icon: 'ongoing', label: 'Blood pressure', copy: 'A baseline vital, checked at every visit.' },
  { icon: 'labFlask', label: 'Cholesterol', copy: 'Lipid panel to assess cardiovascular risk.' },
  { icon: 'labWork', label: 'Blood glucose levels', copy: 'Screens for prediabetes and diabetes risk.' },
  { icon: 'weightLoss', label: 'BMI', copy: 'One data point among several, not a diagnosis.' },
  { icon: 'screening', label: 'Certain types of cancer', copy: 'Based on age, family history, and risk factors.' },
];

const generalGuidance = [
  { age: '20s\u201330s', copy: 'Blood pressure and cholesterol checks begin, typically at routine visits.' },
  { age: '40s', copy: 'Mammography typically recommended for women; cardiovascular risk factors get closer attention.' },
  { age: '45+', copy: 'Colorectal cancer screening typically begins at 45 for average-risk adults, per current USPSTF guidance.' },
  { age: '50+', copy: 'Screening frequency generally increases across the board as risk factors accumulate with age.' },
];

export default function HealthScreenings() {
  return (
    <Layout>
      <Seo
        title="Health Screenings | RxBODYFx"
        description="Detect potential health problems before symptoms appear. Blood pressure, cholesterol, glucose, BMI, and cancer screenings based on your risk profile."
        path="/services/health-screenings/"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Health Screenings', href: '/services/health-screenings/' }]} />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
            <Icon name="screening" className="w-7 h-7" />
          </div>
          <p className="eyebrow text-clay-dark mb-4">Health Screenings</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            Catch it before it becomes a symptom.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
            Health screenings are recommended based on age, family history,
            lifestyle, and medical history &mdash; not a one-size-fits-all
            checklist. We help you figure out which screenings actually matter
            for you.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Reveal>
          <div className="bg-white border border-pine/10 rounded-2xl p-8">
            <h2 className="font-display text-xl text-pine-800 mb-6">Screenings we offer</h2>
            <Checklist items={screenings} columns={2} />
          </div>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">General Guidance</p>
          <h2 className="font-display text-2xl text-pine-800 mb-3">What to expect, by decade.</h2>
          <p className="text-sm text-pine-800/60 mb-8 max-w-2xl">
            This is general population-level guidance, not a personal
            recommendation &mdash; your actual schedule depends on your own
            risk factors and history, which your provider will review with you.
          </p>
        </Reveal>
        <div className="space-y-4">
          {generalGuidance.map((g, i) => (
            <Reveal key={g.age} delay={i * 70} className="flex gap-6 items-start border-b border-pine/10 pb-4">
              <div className="font-display text-lg text-clay-dark w-20 shrink-0">{g.age}</div>
              <p className="text-pine-800/80 leading-relaxed text-sm">{g.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Find out which screenings you&rsquo;re due for.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
