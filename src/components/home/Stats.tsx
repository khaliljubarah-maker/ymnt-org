import { useTranslation } from 'react-i18next';

export const Stats = () => {
  const { t } = useTranslation();
  const items = t('home.stats.items', { returnObjects: true }) as { value: string; label: string }[];
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground">
      <div className="container-wide">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 text-primary-foreground/90">{t('home.stats.title')}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-white to-secondary bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="mt-2 text-sm md:text-base text-primary-foreground/80 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
