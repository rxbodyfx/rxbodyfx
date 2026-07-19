import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Breadcrumbs from '../../components/Breadcrumbs';
import Reveal from '../../components/Reveal';
import Checklist from '../../components/Checklist';

const coverage = [
  { icon: 'screening', label: 'Annual check-ups & wellness visits', copy: 'Catch small issues before they grow.' },
  { icon: 'labWork', label: 'Vaccinations', copy: 'Routine immunizations, on schedule.' },
  { icon: 'hormone', label: 'Diabetes management', copy: 'Ongoing monitoring and treatment.' },
  { icon: 'weightLoss', label: 'Hypertension management', copy: 'Coordinated with your weight & hormone care.' },
];

const reasons = [
  { icon: 'consult', label: 'A new or ongoing symptom', copy: 'Something that\u2019s changed and needs a real look.' },
  { icon: 'ongoing', label: 'Medication management', copy: 'Refills, dose changes, or reviewing what you\u2019re on.' },
  { icon: 'labFlask', label: 'Annual physical', copy: 'A baseline check-in, even if nothing feels wrong.' },
  { icon: 'screening', label: 'Referral coordination', copy: 'Connecting you to the right specialist when needed.' },
];

export default function PrimaryCare() {
  return (
    <Layout>
      <Seo
        title="Primary Care | RxBODYFx"
        description="Routine check-ups, vaccinations, and chronic disease management from a team focused on prevention and early intervention, in Friendswood, TX."
        path="/services/primary-care/"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Primary Care', href: '/services/primary-care/' }]} />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
            <Icon name="primaryCare" className="w-7 h-7" />
          </div>
          <p className="eyebrow text-clay mb-4">Primary Care</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            The cornerstone of catching problems early.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
            Our primary care services span routine check-ups and vaccinations to
            managing chronic conditions like diabetes or hypertension &mdash;
            the foundation of preventive healthcare for patients of all ages.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Reveal>
          <div className="bg-white border border-pine/10 rounded-2xl p-8">
            <h2 className="font-display text-xl text-pine-800 mb-6">What&rsquo;s covered</h2>
            <Checklist items={coverage} columns={2} />
          </div>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Why It Matters</p>
          <h2 className="font-display text-2xl text-pine-800 mb-6">Prevention is cheaper than treatment.</h2>
          <p className="text-pine-800/80 leading-relaxed max-w-2xl mb-8">
            A lot of serious health conditions &mdash; diabetes, hypertension,
            heart disease &mdash; develop quietly for years before symptoms
            show up. Regular primary care means someone is watching your
            numbers the whole time, not just when something already feels
            wrong.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-display text-xl text-pine-800 mb-6">Common reasons patients come in</h2>
        </Reveal>
        <Checklist items={reasons} columns={2} />
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Make preventive care part of your routine.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
