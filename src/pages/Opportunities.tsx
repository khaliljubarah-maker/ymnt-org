import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { opportunities } from '@/data/site';

const Opportunities = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <>
      <SEO title={t('opportunities.title')} description={t('opportunities.subtitle')} path="/opportunities" />
      <PageHero title={t('opportunities.title')} subtitle={t('opportunities.subtitle')} />
      <section className="py-16 container-wide">
        {opportunities.length === 0 ? (
          <p className="text-center text-muted-foreground">{t('opportunities.empty')}</p>
        ) : (
          <ul className="space-y-4 max-w-4xl mx-auto">
            {opportunities.map((o, i) => (
              <li key={i} className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:shadow-elegant transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0"><Briefcase className="h-5 w-5" /></div>
                <div className="flex-1">
                  <h2 className="font-bold text-lg mb-2">{o.title[lng]}</h2>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{o.type[lng]}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{o.location[lng]}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{t('opportunities.deadline')}: {o.deadline}</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">{t('opportunities.apply')}</Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Opportunities;
