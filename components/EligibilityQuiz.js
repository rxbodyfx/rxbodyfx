import { useState } from 'react';
import Link from 'next/link';
import Icon from './Icon';

const STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
  'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
  'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
  'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming',
];

const GOALS = [
  { id: 'weight', icon: 'weightLoss', label: 'Lose weight', service: 'medical-weight-loss', serviceName: 'Medical Weight Loss' },
  { id: 'hormone', icon: 'hormone', label: 'Boost energy & hormones', service: 'hormone-optimization', serviceName: 'Hormone Optimization' },
  { id: 'prevention', icon: 'primaryCare', label: 'General health & prevention', service: 'primary-care', serviceName: 'Primary Care' },
  { id: 'unsure', icon: 'consult', label: 'Not sure yet', service: null, serviceName: null },
];

export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ goal: null, state: '', mode: null });

  const goalData = GOALS.find((g) => g.id === answers.goal);
  const isTexas = answers.state === 'Texas';
  const progress = Math.min(step, 3);

  function next() {
    setStep((s) => Math.min(s + 1, 3));
  }

  return (
    <div className="bg-white border border-pine/10 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-8" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${i <= progress ? 'bg-clay' : 'bg-pine-800/10'}`} />
        ))}
      </div>

      {step === 0 && (
        <div>
          <p className="eyebrow text-clay-dark mb-2">Step 1 of 3</p>
          <h2 className="font-display text-2xl text-pine-800 mb-6">What brings you here today?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {GOALS.map((g) => (
              <button
                key={g.id}
                onClick={() => { setAnswers((a) => ({ ...a, goal: g.id })); next(); }}
                className="flex items-center gap-3 text-left border border-pine/10 rounded-xl p-4 hover:border-clay hover:bg-sand transition-colors"
              >
                <div className="w-9 h-9 shrink-0 rounded-full bg-pine-800/8 flex items-center justify-center text-pine-800">
                  <Icon name={g.icon} className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium text-pine-800">{g.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <p className="eyebrow text-clay-dark mb-2">Step 2 of 3</p>
          <h2 className="font-display text-2xl text-pine-800 mb-6">Which state do you live in?</h2>
          <select
            value={answers.state}
            onChange={(e) => setAnswers((a) => ({ ...a, state: e.target.value }))}
            className="w-full border border-pine/20 rounded-lg px-4 py-3 bg-sand text-pine-800"
          >
            <option value="">Select your state</option>
            {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <button
            onClick={next}
            disabled={!answers.state}
            className="mt-6 w-full bg-pine-800 text-sand py-3 rounded-full font-medium hover:bg-clay transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <p className="eyebrow text-clay-dark mb-2">Step 3 of 3</p>
          <h2 className="font-display text-2xl text-pine-800 mb-6">How would you like to be seen?</h2>
          <div className="space-y-3">
            {isTexas && (
              <button
                onClick={() => { setAnswers((a) => ({ ...a, mode: 'in-person' })); next(); }}
                className="w-full text-left border border-pine/10 rounded-xl p-4 hover:border-clay hover:bg-sand transition-colors"
              >
                <span className="font-medium text-pine-800 text-sm">In-person in Friendswood, TX</span>
              </button>
            )}
            <button
              onClick={() => { setAnswers((a) => ({ ...a, mode: 'telehealth' })); next(); }}
              className="w-full text-left border border-pine/10 rounded-xl p-4 hover:border-clay hover:bg-sand transition-colors"
            >
              <span className="font-medium text-pine-800 text-sm">Telehealth, from anywhere</span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <p className="eyebrow text-clay-dark mb-2">Your Result</p>
          <h2 className="font-display text-2xl text-pine-800 mb-4">
            {goalData?.serviceName ? `${goalData.serviceName} may be a good starting point.` : 'A free consultation is the right next step.'}
          </h2>
          <p className="text-pine-800/75 leading-relaxed mb-3">
            {answers.mode === 'in-person'
              ? 'You can be seen in person at our Friendswood clinic, or switch to telehealth any time it\u2019s more convenient.'
              : `Telehealth is available in ${answers.state || 'your state'} through our partnership with Asher Health \u2014 virtual visits, lab coordination, and ongoing care.`}
          </p>
          <div className="bg-sand rounded-xl p-4 text-sm text-pine-800/70 leading-relaxed mb-6">
            This is a quick way to point you in the right direction &mdash; not a
            medical evaluation. Your actual eligibility and treatment plan will
            be determined by a licensed provider after a free consultation and
            lab review.
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact/" className="bg-pine-800 text-sand px-6 py-3 rounded-full font-medium hover:bg-clay transition-colors">
              Book Your Free Consultation
            </Link>
            {goalData?.service && (
              <Link href={`/services/${goalData.service}/`} className="border border-pine-800/30 px-6 py-3 rounded-full font-medium hover:border-clay hover:text-clay-dark transition-colors">
                Learn More About {goalData.serviceName}
              </Link>
            )}
          </div>
          <button
            onClick={() => { setStep(0); setAnswers({ goal: null, state: '', mode: null }); }}
            className="mt-4 text-sm text-pine-800/50 hover:text-clay-dark"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
