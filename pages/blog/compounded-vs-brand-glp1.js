import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Compounded vs. Brand-Name GLP-1: What's the Difference?",
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
        title="Compounded vs. Brand-Name GLP-1 Medication | RxBODYFx"
        description="What compounding actually means, why it's been part of the GLP-1 conversation, and what questions are worth asking any provider about it."
        path="/blog/compounded-vs-brand-glp1/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Compounded vs. Brand-Name GLP-1', href: '/blog/compounded-vs-brand-glp1/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Compounded vs. Brand-Name GLP-1: What&rsquo;s the Difference?
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            You&rsquo;ve probably seen both terms used in ads and articles about
            weight loss medication. They aren&rsquo;t the same thing, and the
            difference matters for safety, not just price.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What &ldquo;brand-name&rdquo; means</h2>
          <p>
            Brand-name medications like Wegovy, Ozempic, and Mounjaro are
            manufactured by the original pharmaceutical company under FDA
            approval, with consistent, standardized dosing straight from the
            manufacturer.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What &ldquo;compounded&rdquo; means</h2>
          <p>
            Compounded versions are prepared by a licensed pharmacy, often
            during periods of manufacturer shortage, using the same active
            ingredient but produced outside the standard manufacturing
            process. Compounding itself is a legal, long-standing practice in
            pharmacy &mdash; but oversight and quality standards vary
            significantly by pharmacy.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Questions worth asking any provider</h2>
          <p>
            If a program offers compounded medication, it&rsquo;s reasonable to
            ask which pharmacy fills it, whether that pharmacy holds relevant
            accreditation, and how ingredient sourcing and dosing consistency
            are verified. A program that can&rsquo;t answer those questions
            clearly is a program worth being cautious about.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">How RxBODYFx approaches this</h2>
          <p>
            Medication decisions, including whether a brand-name or
            compounded option is appropriate, are made with your provider
            based on availability, your labs, and your specific situation
            &mdash; not defaulted to whichever option is cheaper to source.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Ask your questions directly to a provider.</h2>
          <Link href="/contact/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </Layout>
  );
}
