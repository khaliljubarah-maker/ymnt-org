import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { VisionMission } from '@/components/home/VisionMission';
import { Objectives } from '@/components/home/Objectives';
import { Stats } from '@/components/home/Stats';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('about.title')} description={t('about.subtitle')} path="/about" />
      <PageHero title={t('about.title')} subtitle={t('about.subtitle')} />
      <section className="py-20">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold mb-4">{t('about.story.title')}</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{t('about.story.body')}</p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold mb-4">{t('about.approach.title')}</h2>
            <p className="text-foreground/80 leading-relaxed text-lg">{t('about.approach.body')}</p>
          </div>
        </div>
      </section>
      <VisionMission />
      <Objectives />
      <Stats />
    </>
  );
};

export default About;
