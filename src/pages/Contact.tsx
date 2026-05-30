import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('contact.title')} description={t('contact.subtitle')} path="/contact" />
      <PageHero title={t('contact.title')} subtitle={t('contact.subtitle')} />
      <section className="py-16 container-wide">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
