import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';

export default function Post() {
  return (
    <Layout>
      <Seo
        title="Is Telehealth Weight Loss Legitimate? | RxBODYFx"
        description="What separates a real medical weight loss program from a subscription that just ships medication, and what to look for before you enroll."
        path="/blog/is-telehealth-weight-loss-legitimate/"
      />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Is Telehealth Weight Loss Legitimate?
        </h1>

        <div className="mt-10 space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            The short answer: it can be &mdash; but the category has grown
            fast, and not every program is built the same way. Here&rsquo;s
            what&rsquo;s worth checking before you enroll anywhere.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Does it start with labs, or just a questionnaire?</h2>
          <p>
            A program that prescribes medication based on a short online form
            alone isn&rsquo;t practicing the same standard of care as one that
            reviews bloodwork first. Labs matter &mdash; they catch
            contraindications and help a provider choose the right medication
            and dose.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Is a licensed provider actually involved?</h2>
          <p>
            Look for a program where a physician or advanced practice
            provider reviews your case &mdash; not just a fulfillment pipeline
            that ships medication after a form is submitted.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What happens after you start?</h2>
          <p>
            Ongoing care matters as much as the first prescription. Coaching,
            follow-up labs, and a way to reach your care team between visits
            are what separate a program built to support long-term results
            from one built to sell a subscription.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">How RxBODYFx approaches this</h2>
          <p>
            RxBODYFx started as an in-person clinic in Friendswood, Texas, and
            built its telehealth program &mdash; now available in all 50
            states through our partnership with Asher Health &mdash; on the
            same standard: labs first, a licensed provider reviewing your
            case, and a dedicated nutritionist and care team throughout your
            program.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">See what our program actually includes.</h2>
          <Link href="/services/medical-weight-loss/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            View Medical Weight Loss
          </Link>
        </div>
      </article>
    </Layout>
  );
}
