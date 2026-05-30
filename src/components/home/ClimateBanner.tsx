import { useTranslation } from 'react-i18next';
import { Leaf } from 'lucide-react';

export const ClimateBanner = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-secondary-soft via-background to-primary-soft">
      <div className="container-wide grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest mb-4">
            <Leaf className="h-4 w-4" /> {t('home.climate.eyebrow')}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">
            {t('home.climate.title')}
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed border-s-4 border-secondary ps-6">
            {t('home.climate.body')}
          </p>
        </div>
      </div>
    </section>
  );
};
