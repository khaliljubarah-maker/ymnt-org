import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoMark from '@/assets/logo-mark.png';
import logoHorizontal from '@/assets/logo-horizontal.png';
import logoMarkWhite from '@/assets/logos/logo-mark-white.png';
import logoHorizontalWhite from '@/assets/logos/logo-horizontal-white.png';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
  const onLight = scrolled || open;

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/governance', label: t('nav.governance') },
    { to: '/team', label: t('nav.team') },
    { to: '/news', label: t('nav.news') },
    { to: '/partners', label: t('nav.partners') },
    { to: '/resources', label: t('nav.resources') },
    { to: '/opportunities', label: t('nav.opportunities') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      onLight ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent',
    )}>
      <div className="container-wide flex items-center justify-between h-16 md:h-20 gap-4">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0" aria-label={t('brand.name')}>
          <img
            src={onLight ? logoHorizontal : logoHorizontalWhite}
            alt={t('brand.name')}
            className="hidden sm:block h-9 md:h-11 w-auto object-contain"
          />
          <img
            src={onLight ? logoMark : logoMarkWhite}
            alt={t('brand.name')}
            className="sm:hidden h-9 w-9 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => cn(
                'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'text-primary'
                  : onLight ? 'text-foreground/80 hover:text-primary' : 'text-white/90 hover:text-white',
              )}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleLang} aria-label="Switch language"
            className={cn('gap-1.5', !onLight && 'text-white hover:text-white hover:bg-white/10')}>
            <Globe className="h-4 w-4" />
            <span className="text-xs font-semibold">{i18n.language === 'ar' ? 'EN' : 'ع'}</span>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex bg-gradient-accent hover:opacity-90 text-secondary-foreground shadow-sm">
            <Link to="/#donate"><Heart className="h-4 w-4 me-1.5" /> {t('nav.donate')}</Link>
          </Button>
          <Button variant="ghost" size="icon" className={cn('lg:hidden', !onLight && 'text-white hover:text-white hover:bg-white/10')}
            onClick={() => setOpen(o => !o)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background" aria-label="Mobile">
          <div className="container-wide py-3 flex flex-col">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) => cn('py-3 text-sm font-medium border-b border-border last:border-0',
                  isActive ? 'text-primary' : 'text-foreground')}>
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-4 bg-gradient-accent">
              <Link to="/#donate"><Heart className="h-4 w-4 me-2" /> {t('nav.donate')}</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};
