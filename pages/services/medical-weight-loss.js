import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import Icon from '../../components/Icon';
import Reveal from '../../components/Reveal';
import Checklist from '../../components/Checklist';

const included = [
  { icon: 'weightLoss', label: 'Medication cost fully included', copy: 'No hidden fees on top of your program.' },
  { icon: 'labFlask', label: 'No insurance required to enroll', copy: 'A straightforward cash-pay program.' },
  { icon: 'nutrition', label: 'A dedicated nutritionist', copy: 'Gets to know you, not a generic meal plan.' },
  { icon: 'ongoing', label: 'Up to a year of access', copy: 'To your personalized medical team.' },
];

const expect = [
  { icon: 'consult', label: 'Free consultation', copy: 'To review your goals and history.' },
  { icon: 'labWork', label: 'Lab work', copy: 'Hormone levels, metabolic markers, overall health.' },
  { icon: 'provider', label: 'Provider-reviewed plan', copy: 'Adjusted by a licensed provider, not an algorithm.' },
  { icon: 'telehealth', label: 'Ongoing coaching', copy: 'In-person or by telehealth, on your schedule.' },
];

const pillars = [
  { title: 'Diet', copy: 'What you eat, built around your preferences and schedule, not a rigid template.' },
  { title: 'Exercise', copy: 'Movement that fits your current ability and builds from there.' },
  { title: 'Nutrition', copy: 'Beyond calories: micronutrients, hydration, and how your body actually uses food.' },
  { title: 'Hormone Optimization', copy: 'Because hormone imbalance can undercut even a well-run plan.' },
  { title: 'Sleep', copy: 'Poor sleep drives hunger hormones and undermines everything else on this list.' },
];

const faqs = [
  {
    q: 'Are results guaranteed?',
    a: 'No program can ethically guarantee weight loss outcomes, and we won\u2019t tell you otherwise. Published clinical trials show strong average results for GLP-1 medications, but your own results depend on your biology, adherence, and health history.',
  },
  {
    q: 'How is my medication dose decided?',
    a: 'Your provider starts at a conservative dose and adjusts gradually based on your response and any side effects, following standard titration practices used in the published clinical trials.',
  },
  {
    q: 'What if I have side effects?',
    a: 'GLP-1 medications commonly cause temporary digestive symptoms as your body adjusts. Your care team monitors this at every check-in and can adjust your plan accordingly \u2014 reach out any time between visits through the app.',
  },
  {
    q: 'Can I switch between medical and non-medical paths?',
    a: 'Yes. Your plan isn\u2019t locked in permanently. If your labs, goals, or preferences change, your provider can adjust your path at a follow-up visit.',
  },
];

export default function MedicalWeightLoss() {
  return (
    <Layout>
      <Seo
        title="Medical Weight Loss & GLP-1 Therapy | RxBODYFx"
        description="Physician-guided medical weight loss combining GLP-1 therapy with nutrition, hormone, and lifestyle support. Available in Friendswood, TX and by telehealth nationwide."
        path="/services/medical-weight-loss/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10">
        <Reveal>
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
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800">GLP-1 Therapy</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            For patients who qualify, we manage GLP-1 medications &mdash; the
            same class of medication marketed under names like Wegovy,
            Ozempic, and Mounjaro &mdash; as part of a supervised plan that
            includes lab monitoring and regular follow-up, not a one-time
            prescription.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-2xl text-pine-800">Non-Medical Options</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Not every patient needs medication to see results. Our team also
            builds non-medical plans centered on nutrition coaching, hormone
            balance, and sleep, for patients who prefer that path or don&rsquo;t
            qualify for GLP-1 therapy.
          </p>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">The Framework</p>
          <h2 className="font-display text-2xl md:text-3xl text-pine-800 mb-8">Every plan touches all five pillars.</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="border border-pine/10 rounded-2xl p-6 bg-white">
              <p className="eyebrow text-clay mb-2">0{i + 1}</p>
              <h3 className="font-display text-lg text-pine-800">{p.title}</h3>
              <p className="mt-2 text-sm text-pine-800/75 leading-relaxed">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <div className="bg-white border border-pine/10 rounded-2xl p-8">
            <h2 className="font-display text-2xl text-pine-800 mb-6">What&rsquo;s included in the Metabolic Reset Program</h2>
            <Checklist items={included} columns={2} />
          </div>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-10 pb-16">
        <Reveal>
          <h2 className="font-display text-2xl text-pine-800 mb-6">What to expect</h2>
          <Checklist items={expect} columns={2} />
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Common Questions</p>
          <h2 className="font-display text-2xl text-pine-800 mb-8">About this program specifically</h2>
        </Reveal>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 70} className="border-b border-pine/10 pb-6">
              <h3 className="font-display text-lg text-pine-800">{f.q}</h3>
              <p className="mt-2 text-pine-800/75 leading-relaxed text-sm">{f.a}</p>
            </Reveal>
          ))}
        </div>
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
