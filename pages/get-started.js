import Layout from '../components/Layout';
import Seo from '../components/Seo';
import EligibilityQuiz from '../components/EligibilityQuiz';
import Reveal from '../components/Reveal';

export default function GetStarted() {
  return (
    <Layout>
      <Seo
        title="Get Started | RxBODYFx"
        description="A quick, no-obligation way to find out which RxBODYFx program fits your goals, in-person in Friendswood, TX or by telehealth nationwide."
        path="/get-started/"
      />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">Get Started</p>
          <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
            Find your starting point in under a minute.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-xl mx-auto">
            Three quick questions, no medical history required yet &mdash;
            just enough to point you toward the right program before your
            free consultation.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <Reveal delay={100}>
          <EligibilityQuiz />
        </Reveal>
      </section>
    </Layout>
  );
}
