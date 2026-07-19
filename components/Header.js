import Link from 'next/link';
import { useState } from 'react';

const primaryLinks = [
  { href: '/services/', label: 'Services' },
  { href: '/telehealth/', label: 'Telehealth' },
  { href: '/team/', label: 'Our Team' },
  { href: '/faq/', label: 'FAQ' },
];

const learnLinks = [
  { href: '/blog/', label: 'Blog' },
  { href: '/research/', label: 'Research & Evidence' },
  { href: '/resources/', label: 'Resources' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand/95 backdrop-blur border-b border-pine/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <Link href="/" className="font-display text-xl tracking-tight text-pine-800">
          RxBODY<span className="text-clay">Fx</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {primaryLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-clay transition-colors">
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setLearnOpen(true)}
            onMouseLeave={() => setLearnOpen(false)}
          >
            <button
              className="hover:text-clay transition-colors flex items-center gap-1"
              onClick={() => setLearnOpen((v) => !v)}
              aria-expanded={learnOpen}
              aria-haspopup="true"
            >
              Learn
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {learnOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white border border-pine/10 rounded-xl shadow-lg overflow-hidden">
                  {learnLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-4 py-3 text-sm hover:bg-sand transition-colors" onClick={() => setLearnOpen(false)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/contact/"
            className="bg-pine-800 text-sand px-5 py-2.5 rounded-full hover:bg-clay transition-colors"
          >
            Start Your Consult
          </Link>
        </nav>
        <button
          className="md:hidden text-pine-800"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 font-body text-sm">
          {[...primaryLinks, ...learnLinks].map((l) => (
            <Link key={l.href} href={l.href} className="py-2 border-b border-pine/10" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact/" className="mt-3 bg-pine-800 text-sand text-center px-5 py-3 rounded-full">
            Start Your Consult
          </Link>
        </nav>
      )}
    </header>
  );
}
