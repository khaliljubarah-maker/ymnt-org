import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { news } from '@/data/site';

export const LatestNews = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <section className="py-20 md:py-28 bg-muted/40">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <SectionHeader title={t('home.news.title')} subtitle={t('home.news.subtitle')} className="mb-0" />
          <Button asChild variant="outline"><Link to="/news">{t('common.viewAll')} <ArrowRight className="h-4 w-4 ms-1 rtl:rotate-180" /></Link></Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(n => (
            <Link key={n.slug} to={`/news/${n.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={n.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="text-secondary font-bold uppercase tracking-wide">{n.category[lng]}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(n.date).toLocaleDateString(lng === 'ar' ? 'ar-EG' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">{n.title[lng]}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{n.excerpt[lng]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
