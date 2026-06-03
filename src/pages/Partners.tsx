import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { partners } from '@/data/site';

const Partners = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <>
      <SEO title={t('partners.title')} description={t('partners.subtitle')} path="/partners" />
      <PageHero title={t('partners.title')} subtitle={t('partners.subtitle')} />
      <section className="py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map(p => (
              <div key={p.name.en} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-elegant transition-shadow">
                <div className="aspect-[3/2] w-full grid place-items-center mb-4">
                  <img src={p.logo} alt={p.name[lng]} className="max-h-24 max-w-full object-contain" loading="lazy" />
                </div>
                <p className="text-sm font-medium text-foreground/80">{p.name[lng]}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-muted/40 rounded-2xl p-10">
            <h2 className="text-2xl font-bold mb-2">{t('partners.becomePartner')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('partners.partnerBody')}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
