import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Breadcrumbs from '../../components/Breadcrumbs';
import Reveal from '../../components/Reveal';

const categories = [
  {
    icon: 'labWork',
    title: 'Bloodwork',
    copy: 'Metabolic and hormone panels that establish your baseline before any treatment begins.',
    detail: 'This typically includes markers like blood glucose, lipid panels, thyroid function, and relevant hormone levels, depending on which program you\u2019re enrolling in.',
  },
  {
    icon: 'hormone',
    title: 'Genetic Testing',
    copy: 'Insight into how your body processes nutrients and responds to certain treatments.',
    detail: 'Genetic testing can reveal predispositions that inform how your provider approaches your plan, though it\u2019s one input among several, not a standalone diagnosis.',
  },
  {
    icon: 'nutrition',
    title: 'Food Sensitivity Testing',
    copy: 'Identify foods that may be working against your nutrition and weight goals.',
    detail: 'Results feed directly into the plan your nutrition coach builds, so recommendations are based on your actual physiology, not general dietary trends.',
  },
];

export default function LabWork() {
  return (
    <Layout>
      <Seo
        title="Lab Work & Testing | RxBODYFx"
        description="Bloodwork, hormone panels, genetic, and food sensitivity testing through our RUPA lab partnership &mdash; the foundation every RxBODYFx plan is built on."
        path="/services/lab-work/"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Lab Work', href: '/services/lab-work/' }]} />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
            <Icon name="labWork" className="w-7 h-7" />
          </div>
          <p className="eyebrow text-clay-dark mb-4">Lab Work</p>
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
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        {categories.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="bg-white border border-pine/10 rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                <Icon name={c.icon} className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display text-lg text-pine-800">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-pine-800/75">{c.copy}</p>
                <p className="mt-2 text-sm leading-relaxed text-pine-800/60">{c.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800 mb-4">Why RUPA</h2>
          <p className="text-pine-800/80 leading-relaxed max-w-2xl">
            Our lab partnership with RUPA gives us access to a broad testing
            menu without the delays of coordinating multiple separate
            vendors &mdash; meaning your results get back to your provider
            faster, and your plan can be built or adjusted sooner.
          </p>
        </Reveal>
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
