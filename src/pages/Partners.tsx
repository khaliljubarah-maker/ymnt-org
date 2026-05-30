import { useTranslation } from 'react-i18next';
import { Handshake } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { Partners as PartnersSection } from '@/components/home/Partners';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Partners = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('partners.title')} description={t('partners.subtitle')} path="/partners" />
      <PageHero title={t('partners.title')} subtitle={t('partners.subtitle')} />
      <PartnersSection />
      <section className="py-20">
        <div className="container-wide max-w-3xl text-center bg-gradient-brand text-primary-foreground rounded-3xl p-12 shadow-elegant">
          <Handshake className="h-12 w-12 mx-auto mb-4 text-secondary" />
          <h2 className="text-3xl font-extrabold mb-3">{t('partners.becomePartner')}</h2>
          <p className="text-primary-foreground/85 mb-6">{t('partners.partnerBody')}</p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90"><Link to="/contact">{t('nav.contact')}</Link></Button>
        </div>
      </section>
    </>
  );
};

export default Partners;
