import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MapPin, Users, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/site';

const ProjectDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  const p = projects.find(x => x.slug === slug);

  if (!p) return (
    <div className="pt-40 pb-20 container-wide text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <Button asChild className="mt-6"><Link to="/projects">{t('nav.projects')}</Link></Button>
    </div>
  );

  return (
    <>
      <SEO title={p.title[lng]} description={p.excerpt[lng]} path={`/projects/${p.slug}`} />
      <section className="pt-28 md:pt-32 pb-10">
        <div className="container-wide">
          <Button asChild variant="ghost" size="sm" className="mb-6"><Link to="/projects"><ArrowLeft className="h-4 w-4 me-1 rtl:rotate-180" />{t('nav.projects')}</Link></Button>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="inline-block text-xs font-bold uppercase tracking-wide bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-4">{t(`projects.filters.${p.category}`)}</span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-balance">{p.title[lng]}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">{p.excerpt[lng]}</p>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mt-8 shadow-elegant">
                <img src={p.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="prose prose-lg mt-10 max-w-none">
                <h2 className="text-2xl font-bold mb-3">{t('projects.overview')}</h2>
                <p className="text-foreground/80 leading-relaxed">{p.overview[lng]}</p>

                <h2 className="text-2xl font-bold mt-10 mb-4">{t('projects.objectives')}</h2>
                <ul className="space-y-3">
                  {p.objectives[lng].map((o, i) => (
                    <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" /><span>{o}</span></li>
                  ))}
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4">{t('projects.results')}</h2>
                <ul className="space-y-3">
                  {p.results[lng].map((r, i) => (
                    <li key={i} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /><span>{r}</span></li>
                  ))}
                </ul>
              </div>

              {p.videoUrl && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-4">{t('projects.video')}</h2>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant bg-black">
                    <iframe
                      src={p.videoUrl}
                      title={p.title[lng]}
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                </div>
              )}

              {p.gallery && p.gallery.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-4">{t('projects.gallery')}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {p.gallery.map((src, i) => (
                      <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl">
                        <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <aside className="lg:sticky lg:top-28 self-start">
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <Meta icon={MapPin} label={t('projects.location')} value={p.location[lng]} />
                <Meta icon={Users} label={t('projects.beneficiaries')} value={p.beneficiaries} />
                <Meta icon={Calendar} label={t('projects.duration')} value={p.duration} />
                <Meta icon={Building2} label={t('projects.donor')} value={p.donor} />
                <Button asChild className="w-full bg-gradient-accent mt-2"><Link to="/#donate">{t('home.donate.cta')}</Link></Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const Meta = ({ icon: Icon, label, value }: any) => (
  <div className="flex gap-3">
    <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
    <div>
      <div className="text-xs text-muted-foreground uppercase tracking-wide font-bold">{label}</div>
      <div className="font-semibold">{value}</div>
    </div>
  </div>
);

export default ProjectDetail;
