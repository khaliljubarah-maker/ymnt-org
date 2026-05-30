import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';
import { partners } from '@/data/site';

export const Partners = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-muted/40">
      <div className="container-wide">
        <SectionHeader title={t('home.partners.title')} subtitle={t('home.partners.subtitle')} center />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map(p => (
            <div key={p} className="aspect-[3/2] grid place-items-center bg-card border border-border rounded-xl px-4 text-center font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
