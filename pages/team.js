import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function Team() {
  return (
    <Layout>
      <Seo
        title="Our Team | RxBODYFx"
        description="Meet the clinical team behind RxBODYFx's medical weight loss and hormone optimization programs."
        path="/team/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-14">
        <p className="eyebrow text-clay mb-4">Our Team</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Led by clinicians, not a checkout page.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          RxBODYFx is led by Eleanor Hethcox, DNP, alongside a care team
          dedicated to helping patients use weight loss and hormone health as
          a form of preventive care &mdash; not just a number on a scale.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-xl text-pine-800">How We Practice</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            We start with a free consultation and take time to understand the
            factors that influence your weight and health &mdash; culture,
            finances, medical history, and hormones &mdash; before building a
            plan.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-pine-800">Evidence-Based, Individualized</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Every plan considers your individual medical history and
            preferences. We're not a one-size-fits-all program &mdash; nurse-led
            care, primary care services, and alternative medicine all inform
            how we treat you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
