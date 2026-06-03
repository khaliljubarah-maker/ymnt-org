import { useTranslation } from 'react-i18next';
import { ExternalLink, FileText, FolderOpen, PlayCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero, SectionHeader } from '@/components/SectionHeader';
import { externalResources, videos } from '@/data/site';

const Resources = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';

  return (
    <>
      <SEO title={t('resources.title')} description={t('resources.subtitle')} path="/resources" />
      <PageHero title={t('resources.title')} subtitle={t('resources.subtitle')} />

      <section className="py-16">
        <div className="container-wide">
          <SectionHeader title={t('resources.documents')} subtitle={t('resources.documentsBody')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {externalResources.map(r => {
              const Icon = r.type === 'folder' ? FolderOpen : FileText;
              return (
                <a
                  key={r.key}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-4 p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-elegant transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-snug mb-1 group-hover:text-primary transition-colors">
                      {r.title[lng]}
                    </h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      {t(`resources.type.${r.type}`)}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container-wide">
          <SectionHeader
            title={t('resources.videos')}
            subtitle={t('resources.videosBody')}
            center
          />
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map(v => (
              <div key={v.key} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="relative aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                    title={v.title[lng]}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-5 flex items-start gap-3">
                  <PlayCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <h3 className="font-semibold leading-snug">{v.title[lng]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
