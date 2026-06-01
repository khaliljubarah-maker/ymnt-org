import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { projects, Category } from '@/data/site';
import { cn } from '@/lib/utils';

const cats: ('all' | Category)[] = ['all', 'climate', 'education', 'advocacy', 'capacity'];

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  const [filter, setFilter] = useState<'all' | Category>('all');
  const filtered = useMemo(() => filter === 'all' ? projects : projects.filter(p => p.category === filter), [filter]);

  return (
    <>
      <SEO title={t('projects.title')} description={t('projects.subtitle')} path="/projects" />
      <PageHero title={t('projects.title')} subtitle={t('projects.subtitle')} />
      <section className="py-16">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {cats.map(c => (
              <Button key={c} variant={filter === c ? 'default' : 'outline'} size="sm"
                onClick={() => setFilter(c)}
                className={cn(filter === c && 'bg-primary')}>
                {t(`projects.filters.${c}`)}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
              <Link key={p.slug} to={`/projects/${p.slug}`}
                className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 start-3 text-xs font-bold uppercase bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full">
                    {t(`projects.filters.${p.category}`)}
                  </span>
                  <span className="absolute top-3 end-3 text-xs font-medium bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {t(`projects.status.${p.status}`)}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">{p.title[lng]}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{p.excerpt[lng]}</p>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />{p.location[lng]}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
