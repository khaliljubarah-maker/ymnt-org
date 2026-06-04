import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DonateSection = () => {
  const { t } = useTranslation();
  const supportMailto = `mailto:info@ymnt.org?subject=${encodeURIComponent(t('home.donate.supportSubject'))}`;
  return (
    <section id="donate" className="py-24 md:py-32 bg-gradient-brand text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
      <div className="container-wide relative text-center max-w-3xl">
        <Heart className="h-12 w-12 mx-auto mb-6 text-secondary" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance">{t('home.donate.title')}</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-10">{t('home.donate.body')}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 h-12 px-8 text-base shadow-elegant">
            <a href={supportMailto}>
              <Heart className="h-5 w-5 me-2" /> {t('home.donate.cta')}
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-white hover:bg-white hover:text-primary h-12 px-8 text-base">
            <Link to="/contact">
              <Handshake className="h-5 w-5 me-2" /> {t('home.donate.partner')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
