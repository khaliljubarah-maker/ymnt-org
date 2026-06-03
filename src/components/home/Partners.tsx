import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';
import { partners } from '@/data/site';

export const Partners = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <section className="py-20 bg-muted/40">
      <div className="container-wide">
        <SectionHeader title={t('home.partners.title')} subtitle={t('home.partners.subtitle')} center />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map(p => (
            <div
              key={p.name.en}
              title={p.name[lng]}
              className="aspect-[3/2] grid place-items-center bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-elegant transition-all group"
            >
              <img
                src={p.logo}
                alt={p.name[lng]}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
