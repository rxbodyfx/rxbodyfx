import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const rows = [
  {
    topic: 'How you\u2019re evaluated',
    typical: 'A short online questionnaire, sometimes with no live visit at all.',
    rxbodyfx: 'A real consultation and bloodwork, reviewed by a licensed provider before any plan is built.',
  },
  {
    topic: 'What you get',
    typical: 'A prescription, shipped to your door.',
    rxbodyfx: 'A plan built on all five pillars: medication (if appropriate), nutrition coaching, hormone evaluation, and follow-up.',
  },
  {
    topic: 'Ongoing support',
    typical: 'Refill requests through an app; limited access to an actual clinician.',
    rxbodyfx: 'A dedicated nutritionist and care team, with in-person option available near Friendswood, TX.',
  },
  {
    topic: 'If something feels off',
    typical: 'Submit a support ticket and wait.',
    rxbodyfx: 'Message your care team directly, with a provider who knows your history.',
  },
  {
    topic: 'Lab work',
    typical: 'Often optional or skipped entirely.',
    rxbodyfx: 'Built into the process from the start, through our RUPA lab partnership.',
  },
  {
    topic: 'Cost structure',
    typical: 'Medication typically billed separately from the subscription fee.',
    rxbodyfx: 'Medication cost included in the program price. No insurance required.',
  },
];

export default function Compare() {
  return (
    <Layout>
      <Seo
        title="RxBODYFx vs. Typical Subscription Telehealth | How We're Different"
        description="How RxBODYFx's hybrid, provider-led model compares to typical subscription-based telehealth weight loss programs."
        path="/compare/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">How We&rsquo;re Different</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            Not every telehealth program works the same way.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
            A lot of national weight loss and hormone therapy platforms have
            grown up around a subscription-and-prescription model. That works
            for some people. Here&rsquo;s how RxBODYFx&rsquo;s hybrid,
            provider-led approach compares to that typical model.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="hidden md:grid grid-cols-[1fr_1.4fr_1.4fr] gap-4 mb-4 px-2">
          <div />
          <p className="eyebrow text-pine-800/50">Typical Subscription Telehealth</p>
          <p className="eyebrow text-clay-dark">RxBODYFx</p>
        </div>
        <div className="space-y-4">
          {rows.map((r, i) => (
            <Reveal key={r.topic} delay={i * 60} className="border border-pine/10 rounded-2xl bg-white p-6 grid md:grid-cols-[1fr_1.4fr_1.4fr] gap-4">
              <p className="font-display text-base text-pine-800">{r.topic}</p>
              <div className="flex gap-2 items-start">
                <span className="md:hidden eyebrow text-pine-800/50 shrink-0 w-24">Typical</span>
                <p className="text-sm text-pine-800/60 leading-relaxed">{r.typical}</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="md:hidden eyebrow text-clay-dark shrink-0 w-24">RxBODYFx</span>
                <div className="flex items-start gap-2">
                  <Icon name="screening" className="w-4 h-4 text-clay-dark shrink-0 mt-0.5" />
                  <p className="text-sm text-pine-800/80 leading-relaxed font-medium">{r.rxbodyfx}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Reveal>
          <p className="text-sm text-pine-800/60 leading-relaxed italic max-w-2xl">
            This comparison describes a common industry model in general terms
            and isn&rsquo;t naming or evaluating any specific competitor. Program
            structures vary, and it&rsquo;s worth asking any provider these same
            questions directly before enrolling.
          </p>
        </Reveal>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">See the hybrid model for yourself.</h2>
          <Link href="/get-started/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Start Your Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
