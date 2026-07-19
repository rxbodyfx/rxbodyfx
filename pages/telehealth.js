import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';
import Icon from '../components/Icon';
import Reveal from '../components/Reveal';

const steps = [
  {
    icon: 'consult',
    title: 'Free Virtual Consultation',
    copy: 'Tell us about your health history and goals. No obligation, no pressure.',
  },
  {
    icon: 'labFlask',
    title: 'Lab Work, Wherever You Are',
    copy: 'We coordinate bloodwork through local partner labs so your plan is built on real data, not guesswork.',
  },
  {
    icon: 'provider',
    title: 'Your Plan, Reviewed by a Clinician',
    copy: 'A licensed provider reviews your labs and history and builds a plan around the five pillars: nutrition, exercise, hormones, sleep, and stress.',
  },
  {
    icon: 'telehealth',
    title: 'Ongoing Telehealth Visits',
    copy: 'Prescription management and check-ins happen by video, on your schedule.',
  },
  {
    icon: 'app',
    title: 'Tracked Through Our App',
    copy: 'Log meals, habits, and vitals in the RxBODYFx app so your care team can adjust your plan in real time.',
  },
];

export default function Telehealth() {
  return (
    <Layout>
      <Seo
        title="Telehealth Weight Loss & Hormone Care, All 50 States | RxBODYFx"
        description="Physician-guided medical weight loss and hormone optimization by telehealth, available in all 50 states through our partnership with Asher Health."
        path="/telehealth/"
      />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-14 md:pt-20">
        <p className="eyebrow text-clay mb-4">Now Available Nationwide</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 max-w-2xl leading-tight">
          The same physician-led care, now in all 50 states.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          RxBODYFx started as a Friendswood, Texas clinic built around real,
          in-person relationships. Through our partnership with{' '}
          <strong>Asher Health</strong>, we&rsquo;ve extended that same
          physician-guided model &mdash; medical weight loss, hormone
          optimization, and ongoing coaching &mdash; to patients everywhere in
          the country, without giving up the parts of care that matter most:
          real labs, a real provider, and a real plan.
        </p>
      </section>

      <div className="rule max-w-6xl mx-auto" />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="eyebrow text-clay mb-4">How It Works</p>
        <h2 className="font-display text-3xl text-pine-800 mb-12">From consult to ongoing care.</h2>

        <div className="relative">
          <div className="absolute left-7 top-2 bottom-2 w-px bg-pine-800/15 hidden sm:block" aria-hidden="true" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80} className="flex gap-6 items-start relative">
                <div className="w-14 h-14 shrink-0 rounded-full bg-white border border-pine/10 flex items-center justify-center text-pine-800 relative z-10">
                  <Icon name={s.icon} className="w-6 h-6" />
                </div>
                <div className="pt-2">
                  <p className="eyebrow text-clay/70 mb-1">Step {i + 1}</p>
                  <h3 className="font-display text-xl text-pine-800">{s.title}</h3>
                  <p className="mt-2 text-pine-800/75 leading-relaxed max-w-lg">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="rule max-w-6xl mx-auto" />

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 md:gap-14">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800">Why hybrid care matters</h2>
          <p className="mt-4 leading-relaxed text-pine-800/80">
            A lot of national weight loss programs are built entirely around a
            subscription and a prescription. RxBODYFx started as a real clinic,
            and it shows in how we practice telehealth: labs before medication,
            a licensed provider reviewing your case, and a coach who follows up
            &mdash; not a chatbot.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-2xl text-pine-800">What the app does</h2>
          <p className="mt-4 leading-relaxed text-pine-800/80">
            Every telehealth patient gets access to the RxBODYFx app, where you
            can track weight, blood pressure, meals, hydration, and habits,
            message your care team directly, and schedule your next
            telemedicine visit &mdash; all in one place.
          </p>
        </Reveal>
      </section>

      <section className="bg-pine-800 text-sand">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Wherever you live, your consult is free.</h2>
          <Link href="/contact/" className="mt-8 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Check If You Qualify
          </Link>
        </div>
      </section>
    </Layout>
  );
}
