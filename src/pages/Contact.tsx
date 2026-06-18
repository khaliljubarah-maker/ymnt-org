import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ymnt For Development Foundation',
    alternateName: 'Ymnt Foundation',
    url: 'https://ymnt-org.lovable.app/contact',
    email: 'info@ymnt.org',
    telephone: '+967777605260',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Al-Nuqta Al-Rubaa Street, Al-Qahira District',
      addressLocality: 'Taiz',
      addressCountry: 'YE',
    },
    areaServed: 'YE',
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday'],
      opens: '08:00',
      closes: '16:00',
    }],
  };
  return (
    <>
      <SEO title={t('contact.title')} description={t('contact.subtitle')} path="/contact" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(localBusinessLd)}</script>
      </Helmet>
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} />
      <section className="py-16 container-wide">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
