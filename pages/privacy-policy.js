import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Seo
        title="Privacy Policy | RxBODYFx"
        description="RxBODYFx privacy policy."
        path="/privacy-policy/"
      />
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-20">
        <h1 className="font-display text-3xl text-pine-800 mb-6">Privacy Policy</h1>
        <p className="text-pine-800/80 leading-relaxed">
          ERH Healthcare, PLLC dba RxBODYFx &middot; 121 W Parkwood Avenue,
          Friendswood, TX 77546 &middot; info@rxbodyfx.com &middot; (281) 675-2211
        </p>
        <p className="mt-6 text-pine-800/70 leading-relaxed italic">
          Full policy text to be carried over from the existing site /
          finalized with the practice&rsquo;s compliance counsel before launch.
        </p>
      </section>
    </Layout>
  );
}
