import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function PrimaryCare() {
  return (
    <Layout>
      <Seo
        title="Primary Care | RxBODYFx"
        description="Routine check-ups, vaccinations, and chronic disease management from a team focused on prevention and early intervention, in Friendswood, TX."
        path="/services/primary-care/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
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
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl text-pine-800">Routine & Preventive Care</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Annual check-ups, vaccinations, and wellness visits designed to
            catch small issues before they become bigger ones.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-pine-800">Chronic Condition Management</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Ongoing management for conditions like diabetes and hypertension,
            coordinated with the same team that oversees your weight and
            hormone care.
          </p>
        </div>
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
