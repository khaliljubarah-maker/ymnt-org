import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';

export const Objectives = () => {
  const { t } = useTranslation();
  const items = t('home.objectives.items', { returnObjects: true }) as { title: string; body: string }[];
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-wide">
        <SectionHeader title={t('home.objectives.title')} center />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={i} className="bg-card rounded-2xl p-7 border border-border relative overflow-hidden">
              <div className="text-7xl font-extrabold text-primary/10 absolute top-2 end-4 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary relative">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
