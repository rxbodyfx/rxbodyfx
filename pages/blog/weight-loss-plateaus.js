import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Weight Loss Plateaus Happen (and What to Do About Them)',
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
        title="Why Weight Loss Plateaus Happen | RxBODYFx"
        description="The biology behind weight loss plateaus, and what actually helps versus what just adds frustration."
        path="/blog/weight-loss-plateaus/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Weight Loss Plateaus', href: '/blog/weight-loss-plateaus/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay-dark mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Why Weight Loss Plateaus Happen
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            Almost everyone who loses a meaningful amount of weight hits a
            stretch where the scale stops moving, even while doing everything
            right. It&rsquo;s frustrating, but it&rsquo;s also predictable
            physiology, not a sign of failure.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Your body adapts as you lose weight</h2>
          <p>
            As body weight decreases, the number of calories your body burns
            at rest tends to decrease too &mdash; a smaller body simply
            requires less energy. This means a plan that worked at your
            starting weight may need adjustment as you progress, not because
            anything went wrong.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Water weight and non-scale progress</h2>
          <p>
            Short-term plateaus are often explained by water retention,
            hormonal fluctuation, or muscle gain from increased activity
            &mdash; none of which show up as a lower number on the scale, even
            when real progress is happening.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What tends to actually help</h2>
          <p>
            Reassessing labs, adjusting activity, revisiting sleep and stress
            (two of the five pillars that often get overlooked), and, when
            appropriate, adjusting medication dose under provider guidance
            &mdash; these tend to matter more than simply eating less across
            the board.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why regular check-ins matter here specifically</h2>
          <p>
            A plateau is exactly the kind of thing that&rsquo;s hard to solve
            alone and easy to solve with a coach who can look at your full
            picture &mdash; labs, habits, sleep, and stress &mdash; instead of
            guessing at what changed.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Stuck on a plateau? Let&rsquo;s look at your full picture.</h2>
          <Link href="/contact/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </Layout>
  );
}
