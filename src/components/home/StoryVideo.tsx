import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';

export const StoryVideo = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-24">
      <div className="container-wide">
        <SectionHeader title={t('home.storyVideo.title')} subtitle={t('home.storyVideo.subtitle')} center />
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-elegant max-w-4xl mx-auto mt-10">
          <iframe
            src="https://www.youtube.com/embed/2-R6JwPq9jI"
            title={t('home.storyVideo.title')}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};
