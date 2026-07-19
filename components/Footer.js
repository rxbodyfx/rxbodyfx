import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pine-900 text-sand/80 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-5">
        <div className="sm:col-span-2 md:col-span-1">
          <div className="font-display text-lg text-sand">RxBODYFx</div>
          <p className="mt-3 text-sm leading-relaxed">
            Physician-led medical weight loss and hormone optimization. In-person
            in Friendswood, TX &mdash; and by telehealth in all 50 states.
          </p>
        </div>
        <div>
          <div className="eyebrow text-clay mb-3">Care</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services/medical-weight-loss/" className="hover:text-sand">Medical Weight Loss</Link></li>
            <li><Link href="/services/hormone-optimization/" className="hover:text-sand">Hormone Optimization</Link></li>
            <li><Link href="/services/nutrition-coaching/" className="hover:text-sand">Nutrition &amp; Coaching</Link></li>
            <li><Link href="/services/primary-care/" className="hover:text-sand">Primary Care</Link></li>
            <li><Link href="/services/health-screenings/" className="hover:text-sand">Health Screenings</Link></li>
            <li><Link href="/services/lab-work/" className="hover:text-sand">Lab Work</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-clay mb-3">Learn</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/telehealth/" className="hover:text-sand">Telehealth, 50 States</Link></li>
            <li><Link href="/research/" className="hover:text-sand">Research &amp; Evidence</Link></li>
            <li><Link href="/blog/" className="hover:text-sand">Blog</Link></li>
            <li><Link href="/faq/" className="hover:text-sand">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-clay mb-3">Practice</div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/team/" className="hover:text-sand">Our Team</Link></li>
            <li><Link href="/privacy-policy/" className="hover:text-sand">Privacy Policy</Link></li>
            <li><Link href="/contact/" className="hover:text-sand">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow text-clay mb-3">Visit</div>
          <p className="text-sm leading-relaxed">
            121 W Parkwood Ave<br />Friendswood, TX 77546<br />
            <a href="tel:+12816122320" className="hover:text-sand">(281) 612-2320</a>
          </p>
        </div>
      </div>
      <div className="border-t border-sand/10 py-6 text-center text-xs text-sand/50">
        &copy; {new Date().getFullYear()} RxBODYFx / ERH Healthcare, PLLC. All rights reserved.
      </div>
    </footer>
  );
}
