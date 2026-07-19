import { useState } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

const faqs = [
  {
    q: 'Do I have to come to Friendswood, TX for care?',
    a: 'No. Patients outside the Houston area can enroll entirely by telehealth through our partnership with Asher Health, including consultations, prescription management, and coaching.',
  },
  {
    q: 'Is medication required for the weight loss program?',
    a: 'No. We offer both medical (including GLP-1 therapy where appropriate) and non-medical paths, decided with your provider based on your labs and health history.',
  },
  {
    q: 'What lab work is required before starting?',
    a: 'We typically review bloodwork and relevant health markers, coordinated through our lab partners (RUPA in-clinic, or a local partner lab for telehealth patients), before finalizing your plan.',
  },
  {
    q: 'Is the RxBODYFx app required?',
    a: 'It is not required, but most patients use it to track vitals, meals, and habits, and to message their care team between visits.',
  },
  {
    q: 'Is my information kept private?',
    a: 'Yes. Your health information is handled according to our Privacy Policy and applicable healthcare privacy law.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 60} className="border border-pine/10 rounded-2xl bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <h2 className="font-display text-lg text-pine-800">{item.q}</h2>
        <svg
          width="18" height="18" viewBox="0 0 24 24" fill="none"
          className={`shrink-0 text-clay transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
        >
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-pine-800/80 leading-relaxed">{item.a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FAQ() {
  return (
    <Layout>
      <Seo
        title="FAQ | RxBODYFx Medical Weight Loss"
        description="Answers to common questions about RxBODYFx's medical weight loss, hormone optimization, and telehealth programs."
        path="/faq/"
        jsonLd={jsonLd}
      />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <p className="eyebrow text-clay mb-4">FAQ</p>
        <h1 className="font-display text-4xl text-pine-800 mb-10">Common questions</h1>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FaqItem key={f.q} item={f} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
