import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <Layout>
      <Seo
        title="Contact & Book a Consultation | RxBODYFx"
        description="Book your free consultation with RxBODYFx. Call, message, or request an appointment online &mdash; in Friendswood, TX or nationwide by telehealth."
        path="/contact/"
      />
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-10 grid md:grid-cols-2 gap-10 md:gap-14">
        <Reveal>
          <p className="eyebrow text-clay-dark mb-4">Get Started</p>
          <h1 className="font-display text-4xl text-pine-800 leading-tight">
            Your consultation is free.
          </h1>
          <p className="mt-6 leading-relaxed text-pine-800/80">
            Tell us about your goals and we&rsquo;ll match you with the right
            plan &mdash; in-person in Friendswood, or by telehealth wherever
            you are.
          </p>

          <div className="mt-10 space-y-4 text-pine-800/85">
            <div>
              <div className="eyebrow text-clay-dark">Phone</div>
              <a href="tel:+12816122320" className="font-display text-xl">(281) 612-2320</a>
            </div>
            <div>
              <div className="eyebrow text-clay-dark">Visit</div>
              <p>121 W Parkwood Ave, Friendswood, TX 77546</p>
            </div>
            <div>
              <div className="eyebrow text-clay-dark">Hours</div>
              <p className="text-sm leading-relaxed">
                Mon&ndash;Wed: 8:30am&ndash;5pm<br />
                Thu: 8:30am&ndash;6pm<br />
                Fri: 8:30am&ndash;1pm<br />
                Sat&ndash;Sun: Closed
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form className="bg-white border border-pine/10 rounded-2xl p-8 space-y-4" aria-label="Consultation request form">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-pine-800">Full name</label>
              <input id="name" name="name" type="text" required autoComplete="name" className="mt-1.5 w-full border border-pine/20 rounded-lg px-4 py-2.5 bg-sand" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-pine-800">Email</label>
              <input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5 w-full border border-pine/20 rounded-lg px-4 py-2.5 bg-sand" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-pine-800">Phone</label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" className="mt-1.5 w-full border border-pine/20 rounded-lg px-4 py-2.5 bg-sand" />
            </div>
            <div>
              <label htmlFor="interest" className="text-sm font-medium text-pine-800">What are you interested in?</label>
              <select id="interest" name="interest" className="mt-1.5 w-full border border-pine/20 rounded-lg px-4 py-2.5 bg-sand">
                <option>Medical Weight Loss</option>
                <option>Hormone Optimization</option>
                <option>Nutrition &amp; Coaching</option>
                <option>Primary Care</option>
                <option>Not Sure Yet</option>
              </select>
            </div>
            <button type="button" className="w-full bg-pine-800 text-sand py-3 rounded-full font-medium hover:bg-clay transition-colors">
              Request My Free Consultation
            </button>
            <p className="text-xs text-pine-800/50">
              Form submissions to be wired to the practice&rsquo;s scheduling/CRM system.
            </p>
          </form>
        </Reveal>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-20">
        <Reveal className="rounded-2xl overflow-hidden border border-pine/10 h-72">
          <iframe
            title="RxBODYFx location map"
            src="https://maps.google.com/maps?q=121%20W%20Parkwood%20Ave%2C%20Friendswood%2C%20TX%2077546&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </Layout>
  );
}
