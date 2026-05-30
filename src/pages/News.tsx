import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { news } from '@/data/site';

const News = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <>
      <SEO title={t('news.title')} description={t('news.subtitle')} path="/news" />
      <PageHero title={t('news.title')} subtitle={t('news.subtitle')} />
      <section className="py-16 container-wide">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map(n => (
            <Link key={n.slug} to={`/news/${n.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="aspect-[16/9] overflow-hidden"><img src={n.image} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="text-secondary font-bold uppercase">{n.category[lng]}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(n.date).toLocaleDateString(lng === 'ar' ? 'ar-EG' : 'en-US', { dateStyle: 'medium' })}</span>
                </div>
                <h2 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">{n.title[lng]}</h2>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{n.excerpt[lng]}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4">{t('news.readArticle')} <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
