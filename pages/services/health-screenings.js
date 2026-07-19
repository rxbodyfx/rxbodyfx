import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';

const screenings = [
  'Blood pressure',
  'Cholesterol',
  'Blood glucose levels',
  'BMI',
  'Certain types of cancer',
];

export default function HealthScreenings() {
  return (
    <Layout>
      <Seo
        title="Health Screenings | RxBODYFx"
        description="Detect potential health problems before symptoms appear. Blood pressure, cholesterol, glucose, BMI, and cancer screenings based on your risk profile."
        path="/services/health-screenings/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
          <Icon name="screening" className="w-7 h-7" />
        </div>
        <p className="eyebrow text-clay mb-4">Health Screenings</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Catch it before it becomes a symptom.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
          Health screenings are recommended based on age, family history,
          lifestyle, and medical history &mdash; not a one-size-fits-all
          checklist. We help you figure out which screenings actually matter
          for you.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl text-pine-800 mb-6">Screenings we offer</h2>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-pine-800/80 leading-relaxed">
          {screenings.map((s) => (
            <li key={s} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-clay shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Find out which screenings you're due for.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
