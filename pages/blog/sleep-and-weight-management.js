import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Role of Sleep in Weight Management',
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
        title="The Role of Sleep in Weight Management | RxBODYFx"
        description="Why sleep is one of the five pillars of healthy weight, and how poor sleep works against nutrition and medication alike."
        path="/blog/sleep-and-weight-management/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Sleep & Weight Management', href: '/blog/sleep-and-weight-management/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          The Role of Sleep in Weight Management
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            Sleep is one of the five pillars behind RxBODYFx&rsquo;s approach
            to weight management for a reason &mdash; it&rsquo;s not a minor
            lifestyle detail, it&rsquo;s directly tied to the hormones that
            control hunger and metabolism.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">The hunger hormone connection</h2>
          <p>
            Poor or insufficient sleep affects ghrelin and leptin &mdash; the
            hormones that signal hunger and fullness &mdash; which can
            increase appetite and cravings independent of what you ate the
            day before.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Sleep and insulin sensitivity</h2>
          <p>
            Short-term sleep restriction has been shown to reduce insulin
            sensitivity, meaning the body doesn&rsquo;t process blood sugar as
            efficiently &mdash; a factor that matters for weight management
            and metabolic health broadly, not just for people with diabetes.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why medication and nutrition plans underperform without it</h2>
          <p>
            Even a well-designed GLP-1 or nutrition plan works against a
            headwind if sleep is consistently poor &mdash; which is why
            it&rsquo;s addressed directly in your plan rather than treated as
            an afterthought.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What actually helps</h2>
          <p>
            Consistent sleep and wake times, reducing screen exposure before
            bed, and addressing underlying issues like sleep apnea (which is
            worth screening for, especially alongside weight-related health
            concerns) tend to matter more than any single supplement or
            product marketed for sleep.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Sleep is part of your plan, not separate from it.</h2>
          <Link href="/services/medical-weight-loss/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Medical Weight Loss
          </Link>
        </div>
      </article>
    </Layout>
  );
}
