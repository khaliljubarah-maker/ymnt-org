import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero from '@/assets/photos/forum/forum2-01.jpg';

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-[100dvh] flex items-center text-white overflow-hidden">
      <img src={hero} alt="" width={1920} height={1080}
        className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container-wide relative z-10 py-24">
        <div className="max-w-3xl animate-fade-up">
          <p className="inline-block text-xs font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 mb-6">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-balance">
            {t('home.hero.title')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-accent hover:opacity-95 text-secondary-foreground shadow-elegant text-base h-12 px-7">
              <a href="#donate"><Heart className="h-5 w-5 me-2" />{t('home.hero.ctaPrimary')}</a>
            </Button>
            <Button asChild size="lg" variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary text-base h-12 px-7">
              <Link to="/projects">{t('home.hero.ctaSecondary')}<ArrowRight className="h-4 w-4 ms-2 rtl:rotate-180" /></Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
