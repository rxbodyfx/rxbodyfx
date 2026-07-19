import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Link from 'next/link';
import RpmDiagram from '../../components/RpmDiagram';

export default function Post() {
  return (
    <Layout>
      <Seo
        title="What Is Remote Patient Monitoring? | RxBODYFx"
        description="How remote patient monitoring technology supports telehealth weight loss and hormone care, explained in plain terms."
        path="/blog/remote-patient-monitoring-explained/"
      />
      <article className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <p className="eyebrow text-clay mb-4">January 2026</p>
        <h1 className="font-display text-4xl md:text-5xl text-pine-800 leading-tight">
          What Is Remote Patient Monitoring, and How Does It Work?
        </h1>

        <div className="mt-10 space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <p>
            "Remote patient monitoring," or RPM, is the technology that makes
            real telehealth care possible &mdash; not just a video call, but
            an ongoing connection between what&rsquo;s happening with your
            health and the team managing your care.
          </p>
        </div>

        <RpmDiagram />

        <div className="space-y-6 text-pine-800/85 leading-relaxed text-lg">
          <h2 className="font-display text-2xl text-pine-800 pt-4">What it actually tracks</h2>
          <p>
            Through the RxBODYFx app, patients can sync data like weight,
            blood pressure, heart rate, and blood sugar, alongside daily logs
            of meals, hydration, steps, and supplements. That data flows to
            your care team, not just into an app you check alone.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Why it matters for weight loss and hormone care</h2>
          <p>
            Medical weight loss and hormone optimization aren&rsquo;t
            one-and-done treatments &mdash; they&rsquo;re adjusted over time
            based on how your body responds. RPM means your provider can see
            trends between visits, not just a snapshot every few months, and
            can flag concerns early rather than waiting for your next
            appointment.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">What it isn&rsquo;t</h2>
          <p>
            RPM isn&rsquo;t a replacement for lab work or a licensed
            provider&rsquo;s judgment &mdash; it&rsquo;s a tool that gives your care
            team more to work with. At RxBODYFx, your plan is still reviewed
            and adjusted by a real clinician, whether you&rsquo;re being seen
            in-clinic in Friendswood or by telehealth anywhere else in the
            country.
          </p>

          <h2 className="font-display text-2xl text-pine-800 pt-4">Privacy and security</h2>
          <p>
            Health data flowing between an app and your care team naturally
            raises privacy questions, and it&rsquo;s a fair thing to ask about
            before enrolling anywhere. Your information should be handled
            according to a clear privacy policy and applicable healthcare
            privacy law, with encryption and access controls in place. Read
            our own <Link href="/privacy-policy/" className="text-clay font-medium">Privacy Policy</Link> for the specifics on how we handle
            your data.
          </p>
        </div>

        <div className="mt-14 bg-pine-800 text-sand rounded-2xl p-10 text-center">
          <h2 className="font-display text-2xl">See how RPM fits into your care plan.</h2>
          <Link href="/telehealth/" className="mt-6 inline-block bg-clay text-pine-900 px-8 py-3.5 rounded-full font-medium hover:bg-sand transition-colors">
            Learn About Telehealth
          </Link>
        </div>
      </article>
    </Layout>
  );
}
