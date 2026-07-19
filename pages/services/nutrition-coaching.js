import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';

export default function NutritionCoaching() {
  return (
    <Layout>
      <Seo
        title="Nutrition & Coaching | RxBODYFx"
        description="Personalized nutrition plans and one-on-one coaching to support lasting habit change, in Friendswood, TX and by telehealth nationwide."
        path="/services/nutrition-coaching/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
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
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl text-pine-800">Personalized Plans</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Your plan accounts for your labs, medical history, food
            preferences, and schedule &mdash; built to fit your life, not the
            other way around.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-pine-800">Accountability That Sticks</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Log meals, hydration, and habits in the RxBODYFx app, and your
            coach adjusts your plan as your progress comes in &mdash; in real
            time, not at your next quarterly visit.
          </p>
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
