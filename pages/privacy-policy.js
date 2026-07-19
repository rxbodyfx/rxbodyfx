import Layout from '../components/Layout';
import Seo from '../components/Seo';

const sections = [
  {
    title: '1. Information We Collect',
    body: [
      'We collect personal information you provide directly, including name, email address, postal address, phone number, payment information, and profile information such as username and password.',
      'We also collect usage data such as IP address, browser type and version, pages visited, time and date of visits, duration of visits, and geolocation information.',
      'We use cookies and similar tracking technologies to enhance your experience, analyze trends, and gather demographic data. You can adjust your browser settings to refuse cookies, though this may affect certain features of our services.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    body: [
      'To provide and improve our products and services',
      'To personalize your experience',
      'To process transactions and manage billing',
      'To send transactional and promotional communications (if you opt in)',
      'To detect and prevent fraud and ensure security',
      'To comply with legal obligations',
    ],
    list: true,
  },
  {
    title: '3. How We Share Your Information',
    body: [
      'We do not sell, rent, or lease your personal information to third parties. We may share your information with service providers who assist in operating our services (such as payment processors and cloud hosting), who are obligated to protect your information and use it only to provide services to us.',
      'We may disclose your information if required by law or in response to legal requests, such as subpoenas or court orders, and your information may be transferred as part of a merger, acquisition, or sale of assets.',
    ],
  },
  {
    title: '4. Data Security',
    body: [
      'We use commercially reasonable security measures to protect your personal data, including encryption and access controls. No method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee the absolute security of your information.',
    ],
  },
  {
    title: '5. Your Rights and Choices',
    body: [
      'Access: request a copy of the personal information we hold about you.',
      'Correction: request that we correct or update your information.',
      'Deletion: request that we delete your personal data, subject to legal limitations.',
      'Opt-out: unsubscribe from marketing communications at any time.',
      'Withdraw Consent: withdraw consent at any time where we process data based on consent.',
    ],
    list: true,
  },
  {
    title: '6. International Data Transfers',
    body: [
      'If you are located outside the country where we operate, your data may be transferred to and processed in the United States or other locations where we or our service providers operate. By using our services, you consent to this transfer.',
    ],
  },
  {
    title: "7. Children's Privacy",
    body: [
      'Our services are not directed to children under the age of 18, and we do not knowingly collect personal data from children. If we learn we have collected personal information from a child under 18, we will take steps to delete that information.',
    ],
  },
  {
    title: '8. Changes to This Privacy Policy',
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will post the revised policy on our website and update the effective date above. We encourage you to review this policy periodically.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy | RxBODYFx"
        description="RxBODYFx / ERH Healthcare, PLLC privacy policy: how we collect, use, and protect your personal information."
        path="/privacy-policy/"
      />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <p className="eyebrow text-clay mb-4">Legal</p>
        <h1 className="font-display text-4xl text-pine-800 mb-3">Privacy Policy</h1>
        <p className="text-sm text-pine-800/60 mb-10">Effective Date: 08/02/2025</p>

        <p className="text-pine-800/80 leading-relaxed">
          At ERH Healthcare, PLLC ("we", "us", "our"), we respect your privacy
          and are committed to protecting the personal information you share
          with us. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your data when you visit our website{' '}
          <a href="https://www.rxbodyfx.com" className="text-clay">www.rxbodyfx.com</a>,
          use our products and services, or otherwise interact with us. By
          using our services, you agree to the practices described in this
          policy.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-xl text-pine-800 mb-3">{s.title}</h2>
              {s.list ? (
                <ul className="space-y-2 text-pine-800/80 leading-relaxed">
                  {s.body.map((b) => (
                    <li key={b}>&middot; {b}</li>
                  ))}
                </ul>
              ) : (
                s.body.map((b, i) => (
                  <p key={i} className="text-pine-800/80 leading-relaxed mb-3">{b}</p>
                ))
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-pine/10">
          <h2 className="font-display text-xl text-pine-800 mb-3">9. Contact Us</h2>
          <p className="text-pine-800/80 leading-relaxed">
            If you have any questions or concerns about this Privacy Policy,
            or would like to exercise any of your rights, please contact us
            at:
          </p>
          <p className="mt-3 text-pine-800/80 leading-relaxed">
            ERH Healthcare, PLLC dba RxBODYFx<br />
            121 W Parkwood Avenue, Friendswood, TX 77546<br />
            info@rxbodyfx.com<br />
            (281) 675-2211 or (281) 612-2320
          </p>
        </div>
      </section>
    </Layout>
  );
}
