import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function LabWork() {
  return (
    <Layout>
      <Seo
        title="Lab Work & Testing | RxBODYFx"
        description="Bloodwork, hormone panels, genetic, and food sensitivity testing through our RUPA lab partnership &mdash; the foundation every RxBODYFx plan is built on."
        path="/services/lab-work/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
          <Icon name="labWork" className="w-7 h-7" />
        </div>
        <p className="eyebrow text-clay mb-4">Lab Work</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Every plan starts with data, not a guess.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
          Regular bloodwork helps identify potential health issues, monitor
          ongoing conditions, and inform real treatment decisions. Through our
          partnership with RUPA, we offer bloodwork alongside genetic and food
          sensitivity testing &mdash; the same labs that inform your weight
          loss, hormone, and primary care plans.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-display text-xl text-pine-800">Bloodwork</h2>
          <p className="mt-3 text-sm leading-relaxed text-pine-800/75">Metabolic and hormone panels that establish your baseline before any treatment begins.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-pine-800">Genetic Testing</h2>
          <p className="mt-3 text-sm leading-relaxed text-pine-800/75">Insight into how your body processes nutrients and responds to certain treatments.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-pine-800">Food Sensitivity Testing</h2>
          <p className="mt-3 text-sm leading-relaxed text-pine-800/75">Identify foods that may be working against your nutrition and weight goals.</p>
        </div>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Start with a full picture of your health.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
