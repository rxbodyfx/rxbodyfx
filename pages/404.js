import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <Seo
        title="Page Not Found | RxBODYFx"
        description="This page could not be found."
        path="/404/"
      />
      <section className="max-w-2xl mx-auto px-6 py-28 text-center">
        <p className="eyebrow text-clay mb-4">404</p>
        <h1 className="font-display text-4xl text-pine-800">We couldn&rsquo;t find that page.</h1>
        <p className="mt-4 text-pine-800/75 leading-relaxed">
          The page you&rsquo;re looking for may have moved. Try one of these instead:
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/" className="bg-pine-800 text-sand px-6 py-3 rounded-full font-medium hover:bg-clay transition-colors">
            Go Home
          </Link>
          <Link href="/services/" className="border border-pine-800/30 px-6 py-3 rounded-full font-medium hover:border-clay hover:text-clay transition-colors">
            View Services
          </Link>
          <Link href="/contact/" className="border border-pine-800/30 px-6 py-3 rounded-full font-medium hover:border-clay hover:text-clay transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}
