import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/site';

export const FeaturedProjects = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <SectionHeader title={t('home.projects.title')} subtitle={t('home.projects.subtitle')} className="mb-0 max-w-2xl" />
          <Button asChild variant="outline">
            <Link to="/projects">{t('common.viewAll')} <ArrowRight className="h-4 w-4 ms-1 rtl:rotate-180" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(p => (
            <Link key={p.slug} to={`/projects/${p.slug}`}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 start-3 text-xs font-bold uppercase tracking-wide bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                  {t(`projects.filters.${p.category}`)}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">{p.title[lng]}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">{p.excerpt[lng]}</p>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />{p.location[lng]}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
