import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Semaglutide vs. Tirzepatide: What's the Difference? | RxBODYFx"
        description="Both semaglutide and tirzepatide are GLP-1 medications used in medical weight loss, but they work a little differently. Here's an educational overview."
        path="/blog/semaglutide-vs-tirzepatide/"
      />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Semaglutide vs. Tirzepatide: What&rsquo;s the Difference?
        </h1>

        <div className="mt-10 space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            If you&rsquo;ve looked into medical weight loss, you&rsquo;ve probably run
            into both of these names &mdash; often under their brand names,
            like Ozempic, Wegovy, or Mounjaro. Both belong to a class of
            medications called GLP-1 receptor agonists, and both are used for
            weight management, but they aren&rsquo;t identical.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">How semaglutide works</h2>
          <p>
            Semaglutide mimics a hormone called GLP-1 (glucagon-like
            peptide-1), which the body naturally produces after eating. It
            slows digestion, signals fullness to the brain, and helps regulate
            blood sugar &mdash; which is why it was originally developed for
            type 2 diabetes before its weight loss effects became well known.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">How tirzepatide works</h2>
          <p>
            Tirzepatide acts on two hormone pathways instead of one &mdash;
            GLP-1 and GIP (glucose-dependent insulinotropic polypeptide).
            Targeting both pathways is part of why some patients see different
            results on tirzepatide compared to semaglutide, though individual
            response varies significantly from person to person.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Which one is right for you?</h2>
          <p>
            There isn&rsquo;t a universal answer &mdash; the right medication
            depends on your labs, medical history, other conditions you&rsquo;re
            managing, and how your body responds. That&rsquo;s why RxBODYFx
            builds every plan around bloodwork and a licensed provider&rsquo;s
            review, rather than defaulting to one medication for everyone.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">Curious which option fits your health history?</h2>
          <Link href="/contact/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </article>
    </Layout>
  );
}
