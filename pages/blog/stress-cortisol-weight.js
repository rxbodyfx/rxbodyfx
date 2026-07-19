import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Stress, Cortisol, and Why You Can't Out-Diet a Stress Response",
  datePublished: '2026-01-20',
  dateModified: '2026-01-20',
  author: { '@type': 'Organization', name: 'RxBODYFx' },
  reviewedBy: { '@type': 'Person', name: 'Dr. Jack Janoe', jobTitle: 'Supervising Physician' },
  image: 'https://www.rxbodyfx.com/og-image.png',
};

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Stress, Cortisol, and Weight: What's the Connection? | RxBODYFx"
        description="How chronic stress and cortisol affect weight and appetite, and why stress management is treated as a real part of a weight loss plan."
        path="/blog/stress-cortisol-weight/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Stress, Cortisol & Weight', href: '/blog/stress-cortisol-weight/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Stress, Cortisol, and Why You Can&rsquo;t Out-Diet a Stress Response
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            You can have a technically perfect nutrition plan and still
            struggle with weight if chronic stress is part of the picture.
            That&rsquo;s not an excuse &mdash; it&rsquo;s physiology.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What cortisol actually does</h2>
          <p>
            Cortisol is a hormone released in response to stress that, among
            other things, affects blood sugar regulation and can increase
            appetite and cravings for high-calorie foods when chronically
            elevated.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Chronic vs. acute stress</h2>
          <p>
            Short-term stress response is a normal, healthy part of biology.
            The concern is chronic, ongoing stress &mdash; work, financial,
            relational &mdash; that keeps cortisol elevated over long periods,
            which is where the metabolic effects become more significant.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why this is one of the five pillars, not an afterthought</h2>
          <p>
            Stress management is treated as a real, addressable factor in your
            plan &mdash; not a vague wellness suggestion tacked onto a
            nutrition plan. That might mean coaching around specific stressors,
            sleep improvements, or referral to additional support when
            appropriate.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What this doesn&rsquo;t mean</h2>
          <p>
            It doesn&rsquo;t mean stress is the only factor, or that addressing
            it alone will resolve weight concerns without other changes. It
            means it&rsquo;s one real piece of a plan that also includes
            nutrition, hormones, sleep, and, when appropriate, medication.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Get a plan that accounts for the whole picture.</h2>
          <Link href="/services/nutrition-coaching/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            See Nutrition &amp; Coaching
          </Link>
        </div>
      </article>
    </Layout>
  );
}
