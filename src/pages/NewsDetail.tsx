import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { news } from '@/data/site';

const NewsDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  const n = news.find(x => x.slug === slug);
  if (!n) return <div className="pt-40 container-wide"><Button asChild><Link to="/news">{t('nav.news')}</Link></Button></div>;
  return (
    <>
      <SEO title={n.title[lng]} description={n.excerpt[lng]} path={`/news/${n.slug}`} />
      <article className="pt-28 md:pt-32 pb-20">
        <div className="container-wide max-w-3xl">
          <Button asChild variant="ghost" size="sm" className="mb-6"><Link to="/news"><ArrowLeft className="h-4 w-4 me-1 rtl:rotate-180" />{t('nav.news')}</Link></Button>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="text-secondary font-bold uppercase">{n.category[lng]}</span>
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{new Date(n.date).toLocaleDateString(lng === 'ar' ? 'ar-EG' : 'en-US', { dateStyle: 'long' })}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-balance">{n.title[lng]}</h1>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-elegant mb-10">
            <img src={n.image} alt="" className="w-full h-full object-cover" />
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">{n.excerpt[lng]}</p>
          <p className="text-lg leading-relaxed text-foreground/85">{n.body[lng]}</p>
        </div>
      </article>
    </>
  );
};

export default NewsDetail;
