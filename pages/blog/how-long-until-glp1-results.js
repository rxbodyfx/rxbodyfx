import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Long Does It Take to See Results on GLP-1 Medication?',
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
        title="How Long Until You See Results on GLP-1 Medication? | RxBODYFx"
        description="A realistic timeline for what to expect on semaglutide or tirzepatide, from the first weeks through the dose titration period."
        path="/blog/how-long-until-glp1-results/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'How Long Until Results?', href: '/blog/how-long-until-glp1-results/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay-dark mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          How Long Does It Take to See Results?
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            One of the most common questions patients ask before starting a
            GLP-1 medication is simple: when will I actually notice something
            happening? The honest answer is that it&rsquo;s gradual by design,
            not a switch that flips overnight.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">The first few weeks</h2>
          <p>
            Most patients start at a low dose, which is increased gradually
            over weeks or months &mdash; the same titration schedule used in
            the published clinical trials. Early on, the most noticeable
            effect for many people is reduced appetite rather than dramatic
            weight change on the scale.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Months two through six</h2>
          <p>
            This is typically where the clinical trial data shows the most
            consistent progress, as doses reach a therapeutic level and the
            body adjusts. Weight loss tends to be steady rather than linear
            &mdash; weeks of visible progress followed by plateaus are normal,
            not a sign that something is wrong.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why your timeline might differ from someone else&rsquo;s</h2>
          <p>
            Starting weight, dose, adherence, and individual biology all
            affect how quickly results show up. This is exactly why RxBODYFx
            check-ins exist &mdash; to adjust your plan based on your actual
            progress rather than a generic calendar.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">When to reach out to your care team</h2>
          <p>
            If you&rsquo;re several months in with no meaningful change, that&rsquo;s
            worth a conversation with your provider &mdash; not a reason to
            quietly stop or adjust your own dose. Your plan can be reviewed
            and changed if it isn&rsquo;t working the way it should.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">See what a realistic plan looks like for you.</h2>
          <Link href="/services/medical-weight-loss/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Medical Weight Loss
          </Link>
        </div>
      </article>
    </Layout>
  );
}
