import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Perimenopause, Menopause, and Weight Gain: What's Actually Happening",
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
        title="Perimenopause, Menopause, and Weight Gain | RxBODYFx"
        description="Why weight distribution and metabolism change during perimenopause and menopause, and what evaluation and support can look like."
        path="/blog/perimenopause-weight-gain/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Perimenopause & Weight Gain', href: '/blog/perimenopause-weight-gain/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay-dark mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Perimenopause, Menopause, and Weight Gain
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            Many women notice weight changes &mdash; especially around the
            midsection &mdash; during perimenopause, even without changing
            their diet or activity level. That&rsquo;s a real physiological
            shift, not a lack of discipline.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What&rsquo;s changing hormonally</h2>
          <p>
            As estrogen levels decline during perimenopause and menopause,
            fat distribution tends to shift, and metabolic rate can decrease.
            Sleep disruption and mood changes common during this stage can
            also make weight management more difficult independent of
            hormones alone.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why the same old approach may stop working</h2>
          <p>
            A diet and exercise routine that worked in your 30s doesn&rsquo;t
            always produce the same results during this transition &mdash;
            which is frustrating, but explainable, and a signal to adjust the
            plan rather than push harder at the same one.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What an evaluation looks like</h2>
          <p>
            A hormone panel can clarify where you are in the transition and
            what, if anything, is worth addressing directly &mdash; whether
            that&rsquo;s hormone therapy, a nutrition plan adjustment, or a
            sleep-focused intervention.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">You don&rsquo;t have to accept it as inevitable</h2>
          <p>
            Weight changes during this life stage are common, but that
            doesn&rsquo;t mean nothing can be done &mdash; an individualized
            plan built around your actual labs and symptoms is different from
            generic advice to &ldquo;eat less and move more.&rdquo;
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Start with a hormone panel, not a guess.</h2>
          <Link href="/services/hormone-optimization/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Hormone Optimization
          </Link>
        </div>
      </article>
    </Layout>
  );
}
