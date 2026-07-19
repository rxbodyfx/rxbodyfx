import Layout from '../components/Layout';
import Seo from '../components/Seo';

const team = [
  {
    name: 'Eleanor Hethcox, DNP',
    role: 'Clinical Director',
    bio: 'Leads the RxBODYFx clinical program, helping patients use weight management as a form of preventive care for both mental and physical health.',
  },
  {
    name: 'Dr. Jack Janoe',
    role: 'Supervising Physician',
    bio: "Over 40 years of experience as a Family Medicine physician and Sports Medicine specialist. Former owner of South Shore Medical Clinic, Dr. Janoe believes in preventative care and optimizing health through the latest evidence-based therapies.",
  },
  {
    name: 'James Hethcox',
    role: 'Chief Operating Officer',
    bio: "A 20-year veteran of the U.S. Army, still actively serving at Ellington Field in Houston. Former U.S. Army aviator and CID Special Agent, with a bachelor's degree in Anthropology from the University of Alabama at Birmingham.",
  },
  {
    name: 'Diana',
    role: 'Clinic Manager',
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
        {team.map((t) => (
          <div key={t.name} className="border border-pine/10 rounded-2xl p-7 bg-white">
            <div className="w-16 h-16 rounded-full bg-pine-800/10 mb-5 flex items-center justify-center text-pine-800 font-display text-xl">
              {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
            </div>
            <h2 className="font-display text-xl text-pine-800">{t.name}</h2>
            <p className="eyebrow text-clay mt-1 mb-3">{t.role}</p>
            <p className="text-sm leading-relaxed text-pine-800/75">{t.bio}</p>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-xl text-pine-800">How We Practice</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            We start with a free consultation and take time to understand the
            factors that influence your weight and health &mdash; culture,
            finances, medical history, and hormones &mdash; before building a
            plan.
          </p>
        </div>
        <div>
          <h2 className="font-display text-xl text-pine-800">Evidence-Based, Individualized</h2>
          <p className="mt-3 leading-relaxed text-pine-800/80">
            Every plan considers your individual medical history and
            preferences &mdash; nurse-led care, primary care services, and
            evidence-based therapies all inform how we treat you.
          </p>
        </div>
      </section>

      <p className="max-w-4xl mx-auto px-6 pb-16 text-xs text-pine-800/40 italic">
        Headshots to be added once provided by the practice.
      </p>
    </Layout>
  );
}
