import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';

export default function MedicalWeightLoss() {
  return (
    <Layout>
      <Seo
        title="Medical Weight Loss & GLP-1 Therapy | RxBODYFx"
        description="Physician-guided medical weight loss combining GLP-1 therapy with nutrition, hormone, and lifestyle support. Available in Friendswood, TX and by telehealth nationwide."
        path="/services/medical-weight-loss/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <div className="w-14 h-14 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800 mb-6">
          <Icon name="weightLoss" className="w-7 h-7" />
        </div>
        <p className="eyebrow text-clay mb-4">Medical Weight Loss</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Weight loss built on your biology, not willpower alone.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80">
          Our medical weight loss program addresses the five pillars of
          healthy weight &mdash; diet, exercise, nutrition, hormone
          optimization, and sleep &mdash; alongside medical treatment when it&rsquo;s
          appropriate. We offer both medical and non-medical paths, decided
          with your provider based on your labs and history.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-2xl text-pine-800">GLP-1 Therapy</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            For patients who qualify, we manage GLP-1 medications &mdash; the
            same class of medication marketed under names like Wegovy,
            Ozempic, and Mounjaro &mdash; as part of a supervised plan that
            includes lab monitoring and regular follow-up, not a one-time
            prescription.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-pine-800">Non-Medical Options</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Not every patient needs medication to see results. Our team also
            builds non-medical plans centered on nutrition coaching, hormone
            balance, and sleep, for patients who prefer that path or don&rsquo;t
            qualify for GLP-1 therapy.
          </p>
        </div>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-10 bg-white border border-pine/10 rounded-2xl">
        <div className="p-8">
          <h2 className="font-display text-2xl text-pine-800">What's included in the Metabolic Reset Program</h2>
          <ul className="mt-5 space-y-3 text-pine-800/80 leading-relaxed">
            <li>&middot; Medication cost is fully included in your program &mdash; no hidden fees</li>
            <li>&middot; No insurance required to enroll</li>
            <li>&middot; A dedicated nutritionist who gets to know you, not a generic meal plan</li>
            <li>&middot; Up to a year of access to your personalized medical team</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="font-display text-2xl text-pine-800">What to expect</h2>
        <ul className="mt-5 space-y-3 text-pine-800/80 leading-relaxed">
          <li>&middot; A free consultation to review your goals and history</li>
          <li>&middot; Lab work to check hormone levels, metabolic markers, and overall health</li>
          <li>&middot; A plan reviewed and adjusted by a licensed provider, not an algorithm</li>
          <li>&middot; Ongoing coaching and check-ins, in-person or by telehealth</li>
        </ul>
      </section>

      <section className="bg-pine-800 text-sand mt-10">
        <div className="max-w-4xl mx-auto px-6 py-14 text-center">
          <h2 className="font-display text-2xl md:text-3xl">See if medical weight loss is right for you.</h2>
          <Link href="/contact/" className="mt-7 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </Layout>
  );
}
