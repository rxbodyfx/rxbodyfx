export default function OrgSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.rxbodyfx.com/#organization',
    name: 'RxBODYFx Metabolic Reset Weight Loss Program',
    alternateName: 'RxBODYFx',
    url: 'https://www.rxbodyfx.com',
    logo: 'https://www.rxbodyfx.com/icon-512.png',
    telephone: '+1-281-612-2320',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '121 W Parkwood Ave',
      addressLocality: 'Friendswood',
      addressRegion: 'TX',
      postalCode: '77546',
      addressCountry: 'US',
    },
    medicalSpecialty: ['Weight Management', 'Endocrinology', 'Primary Care'],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'], opens: '08:30', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Thursday'], opens: '08:30', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '08:30', closes: '13:00' },
    ],
    employee: [
      {
        '@type': 'Person',
        name: 'Eleanor Hethcox',
        honorificSuffix: 'DNP',
        jobTitle: 'Clinical Director',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Jack Janoe',
        jobTitle: 'Supervising Physician',
        medicalSpecialty: ['Family Medicine', 'Sports Medicine'],
      },
      {
        '@type': 'Person',
        name: 'James Hethcox',
        jobTitle: 'Chief Operating Officer',
      },
      {
        '@type': 'Person',
        name: 'Diana Pena',
        jobTitle: 'Clinic Manager',
      },
    ],
    sameAs: [
      'https://www.facebook.com/rxbodyfx/',
      'https://www.linkedin.com/company/rxbodyfx',
      'https://twitter.com/rxbodyfx',
      'https://apps.apple.com/us/app/rxbodyfx/id1608392040',
      'https://play.google.com/store/apps/details?id=com.coachcare.rxbodyfx',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
