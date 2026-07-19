import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Breadcrumbs from '../../components/Breadcrumbs';
import Reveal from '../../components/Reveal';
import CoachingCycle from '../../components/CoachingCycle';
import Checklist from '../../components/Checklist';

const sessionCovers = [
  { icon: 'nutrition', label: 'What you\u2019re actually eating', copy: 'Real meals, not an idealized log.' },
  { icon: 'ongoing', label: 'What\u2019s working and what isn\u2019t', copy: 'Honest review of the past week.' },
  { icon: 'weightLoss', label: 'Adjustments to your plan', copy: 'Based on progress, not a fixed script.' },
  { icon: 'app', label: 'Your questions', copy: 'Time to ask what\u2019s actually on your mind.' },
];

const faqs = [
  {
    q: 'How often do I meet with my coach?',
    a: 'Cadence varies by your plan and stage of the program \u2014 more frequent early on while your plan is being dialed in, then adjusting as your habits stabilize.',
  },
  {
    q: 'Is the plan the same for everyone?',
    a: 'No. Your coach builds around your food preferences, schedule, culture, and budget \u2014 not a generic template handed to every patient.',
  },
  {
    q: 'What if I fall off track for a while?',
    a: 'That\u2019s normal and expected. Your coach\u2019s job is to help you get back on track, not to make you feel judged for a rough week.',
  },
];

export default function NutritionCoaching() {
  return (
    <Layout>
      <Seo
        title="Nutrition & Coaching | RxBODYFx"
        description="Personalized nutrition plans and one-on-one coaching to support lasting habit change, in Friendswood, TX and by telehealth nationwide."
        path="/services/nutrition-coaching/"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services/' }, { label: 'Nutrition & Coaching', href: '/services/nutrition-coaching/' }]} />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
          <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
            <Icon name="nutrition" className="w-7 h-7" />
          </div>
          <p className="eyebrow text-clay mb-4">Nutrition &amp; Coaching</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            A plan is only as good as the person following up on it.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
            Every RxBODYFx patient is matched with a nutrition coach who builds
            a plan around your goals and dietary needs, then stays with you as
            your habits change &mdash; not a PDF you get once and never hear
            about again.
          </p>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <Reveal>
          <CoachingCycle />
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">In Every Session</p>
          <h2 className="font-display text-2xl text-pine-800 mb-8">What coaching actually covers.</h2>
        </Reveal>
        <div className="bg-white border border-pine/10 rounded-2xl p-8">
          <Checklist items={sessionCovers} columns={2} />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800">Personalized Plans</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Your plan accounts for your labs, medical history, food
            preferences, and schedule &mdash; built to fit your life, not the
            other way around.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-2xl text-pine-800">Accountability That Sticks</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Log meals, hydration, and habits in the RxBODYFx app, and your
            coach adjusts your plan as your progress comes in &mdash; in real
            time, not at your next quarterly visit.
          </p>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800 mb-8">Common questions</h2>
        </Reveal>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70} className="border-b border-pine/10 pb-6">
              <h3 className="font-display text-lg text-pine-800">{f.q}</h3>
              <p className="mt-2 text-pine-800/75 leading-relaxed text-sm">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">Meet your coach with a free consultation.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </Layout>
  );
}
