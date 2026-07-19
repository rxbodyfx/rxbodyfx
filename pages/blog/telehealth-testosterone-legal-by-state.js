import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';
import ReviewedBy from '../../components/ReviewedBy';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Is Telehealth Testosterone Therapy Legal in Your State?',
  datePublished: '2026-01-25',
  dateModified: '2026-01-25',
  author: { '@type': 'Organization', name: 'RxBODYFx' },
  reviewedBy: { '@type': 'Person', name: 'Dr. Jack Janoe', jobTitle: 'Supervising Physician' },
  image: 'https://www.rxbodyfx.com/og-image.png',
};

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Is Telehealth Testosterone Therapy Legal in Your State? | RxBODYFx"
        description="Testosterone is a controlled substance with different telehealth rules than GLP-1 medications. Here's what current federal rules actually require."
        path="/blog/telehealth-testosterone-legal-by-state/"
        jsonLd={jsonLd}
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog/' }, { label: 'Telehealth Testosterone by State', href: '/blog/telehealth-testosterone-legal-by-state/' }]} />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay-dark mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Is Telehealth Testosterone Therapy Legal in Your State?
        </h1>
        <div className="mt-8">
          <ReviewedBy />
        </div>

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            This is a genuinely different question than &ldquo;is telehealth
            weight loss legal,&rdquo; and worth understanding before you start
            anywhere. Testosterone is a Schedule III controlled substance
            under federal law, which puts it under different rules than GLP-1
            medications like semaglutide or tirzepatide, which aren&rsquo;t
            controlled substances at all.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">The federal rule that matters most</h2>
          <p>
            The Ryan Haight Act has historically required an in-person
            evaluation before a controlled substance could be prescribed via
            telehealth. Since 2020, the DEA has repeatedly extended temporary
            flexibilities waiving that requirement, most recently through
            December 31, 2026. Under the current rules, a provider can
            prescribe testosterone via telehealth without a prior in-person
            visit &mdash; but only through a real-time, synchronous
            audio-video (or in some cases audio-only) visit. A form filled
            out asynchronously, with no live interaction, doesn&rsquo;t meet
            this standard.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why &ldquo;temporary&rdquo; matters</h2>
          <p>
            These flexibilities have been extended multiple times since 2020
            rather than made permanent, and a permanent federal framework is
            still being finalized. That means the rules governing telehealth
            testosterone prescribing could change again &mdash; which is
            exactly why it&rsquo;s worth choosing a provider who stays current
            on this, rather than one who set up a process once and never
            revisited it.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">State rules can add further requirements</h2>
          <p>
            Federal flexibilities are the floor, not the ceiling &mdash;
            individual states can impose their own, sometimes stricter,
            requirements for telehealth prescribing of controlled substances.
            The provider must also be licensed in the state where you&rsquo;re
            physically located at the time of your visit, regardless of where
            their clinic is based.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What this means for GLP-1 medications, by contrast</h2>
          <p>
            Because semaglutide and tirzepatide aren&rsquo;t controlled
            substances, medical weight loss telehealth doesn&rsquo;t carry
            these same DEA requirements &mdash; the main rule there is simply
            that your provider must be licensed in your state. It&rsquo;s a
            meaningfully simpler regulatory picture than hormone therapy.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">How RxBODYFx handles this</h2>
          <p>
            Hormone optimization visits, including testosterone therapy,
            include a real, live evaluation with a licensed provider &mdash;
            not a one-way questionnaire &mdash; consistent with current
            federal requirements. If you have questions about your specific
            state, that&rsquo;s exactly what your free consultation is for.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Ask your specific state question directly.</h2>
          <Link href="/contact/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </Layout>
  );
}
