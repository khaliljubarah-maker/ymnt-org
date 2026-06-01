import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import logoFull from '@/assets/logo-full.png';

export const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-wide py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex bg-white rounded-xl p-3 mb-4 shadow-sm">
            <img src={logoFull} alt={t('brand.name')} className="h-24 w-auto object-contain" />
          </div>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">{t('footer.about')}</p>
          <p className="text-xs mt-4 text-primary-foreground/60">{t('footer.registered')}</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-base">{t('footer.quickLinks')}</h3>
          <ul className="space-y-2.5 text-sm text-primary-foreground/85">
            <li><Link to="/about" className="hover:text-secondary transition-colors">{t('nav.about')}</Link></li>
            <li><Link to="/projects" className="hover:text-secondary transition-colors">{t('nav.projects')}</Link></li>
            <li><Link to="/governance" className="hover:text-secondary transition-colors">{t('nav.governance')}</Link></li>
            <li><Link to="/news" className="hover:text-secondary transition-colors">{t('nav.news')}</Link></li>
            <li><Link to="/opportunities" className="hover:text-secondary transition-colors">{t('nav.opportunities')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-base">{t('nav.contact')}</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {t('contact.addressValue')}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@ymnt.org</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> <span dir="ltr">+967 777 605 260</span></li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 grid place-items-center rounded-full bg-primary-foreground/10 hover:bg-secondary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-base">{t('home.newsletter.title')}</h3>
          <p className="text-sm text-primary-foreground/80 mb-4">{t('home.newsletter.body')}</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <Input type="email" required placeholder={t('home.newsletter.placeholder')}
              aria-label={t('home.newsletter.placeholder')}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50" />
            <Button type="submit" className="bg-secondary hover:bg-secondary/90 shrink-0">{t('home.newsletter.cta')}</Button>
          </form>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-wide py-5 text-xs text-primary-foreground/70 text-center">
          {t('footer.rights', { year })}
        </div>
      </div>
    </footer>
  );
};
