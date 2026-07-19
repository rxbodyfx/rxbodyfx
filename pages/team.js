import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Image from 'next/image';
import Reveal from '../components/Reveal';

const team = [
  {
    name: 'Eleanor Hethcox, DNP',
    role: 'Clinical Director',
    photo: '/team/eleanor-hethcox.webp',
    bio: 'Leads the RxBODYFx clinical program, helping patients use weight management as a form of preventive care for both mental and physical health.',
  },
  {
    name: 'Dr. Jack Janoe',
    role: 'Supervising Physician',
    photo: '/team/jack-janoe.jpg',
    bio: "Over 40 years of experience as a Family Medicine physician and Sports Medicine specialist. Former owner of South Shore Medical Clinic, Dr. Janoe believes in preventative care and optimizing health through the latest evidence-based therapies.",
  },
  {
    name: 'James Hethcox',
    role: 'Chief Operating Officer',
    photo: '/team/james-hethcox.jpg',
    bio: "A 20-year veteran of the U.S. Army, still actively serving at Ellington Field in Houston. Former U.S. Army aviator and CID Special Agent, with a bachelor's degree in Anthropology from the University of Alabama at Birmingham.",
  },
  {
    name: 'Diana Pena',
    role: 'Clinic Manager',
    photo: '/team/diana-pena.jpg',
    bio: "Earned her Master's degree from Sam Houston State University and her Bachelor's from the University of Houston, Clear Lake. Keeps the clinic running for every patient who walks through the door.",
  },
];

export default function Team() {
  return (
    <Layout>
      <Seo
        title="Our Team | RxBODYFx"
        description="Meet the clinical and operations team behind RxBODYFx's medical weight loss and hormone optimization programs in Friendswood, TX."
        path="/team/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <p className="eyebrow text-clay mb-4">Our Team</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          Led by clinicians, not a checkout page.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-pine-800/80 max-w-2xl">
          RxBODYFx is led by a Friendswood-based clinical and operations team
          dedicated to helping patients use weight loss and hormone health as
          a form of preventive care &mdash; not just a number on a scale.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid sm:grid-cols-2 gap-8">
        {team.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="border border-pine/10 rounded-2xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-md transition-all">
            <div className="relative w-full h-64">
              <Image src={t.photo} alt={t.name} fill sizes="(max-width: 640px) 100vw, 400px" style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-7">
              <h2 className="font-display text-xl text-pine-800">{t.name}</h2>
              <p className="eyebrow text-clay mt-1 mb-3">{t.role}</p>
              <p className="text-sm leading-relaxed text-pine-800/75">{t.bio}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">
        <Reveal>
          <h2 className="font-display text-xl text-pine-800">How We Practice</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            We start with a free consultation and take time to understand the
            factors that influence your weight and health &mdash; culture,
            finances, medical history, and hormones &mdash; before building a
            plan.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-xl text-pine-800">Evidence-Based, Individualized</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Every plan considers your individual medical history and
            preferences &mdash; nurse-led care, primary care services, and
            evidence-based therapies all inform how we treat you.
          </p>
        </Reveal>
      </section>

      <div className="rule max-w-4xl mx-auto" />

      <section className="max-w-4xl mx-auto px-6 py-16">
        <Reveal>
          <p className="eyebrow text-clay mb-4">Our Values</p>
          <h2 className="font-display text-2xl text-pine-800 mb-10">What guides how we practice.</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Compassion First', copy: 'Weight and hormone health are personal. We start every relationship with time, not a form.' },
            { title: 'Evidence Over Trends', copy: 'Our plans follow published clinical research, not whatever\u2019s trending this month.' },
            { title: 'Real Accountability', copy: 'A coach and provider who actually follow up \u2014 not a subscription you forget about.' },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 100}>
              <h3 className="font-display text-lg text-pine-800">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pine-800/75">{v.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
