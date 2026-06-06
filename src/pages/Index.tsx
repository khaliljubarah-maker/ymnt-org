import { SEO } from '@/components/SEO';
import { Hero } from '@/components/home/Hero';
import { StoryVideo } from '@/components/home/StoryVideo';
import { ClimateBanner } from '@/components/home/ClimateBanner';
import { Stats } from '@/components/home/Stats';
import { VisionMission } from '@/components/home/VisionMission';
import { Objectives } from '@/components/home/Objectives';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Partners } from '@/components/home/Partners';
import { Testimonials } from '@/components/home/Testimonials';
import { LatestNews } from '@/components/home/LatestNews';
import { Gallery } from '@/components/home/Gallery';
import { DonateSection } from '@/components/home/DonateSection';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeader } from '@/components/SectionHeader';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO />
      <Hero />
      <ClimateBanner />
      <StoryVideo />
      <Stats />
      <VisionMission />
      <Objectives />
      <FeaturedProjects />
      <Partners />
      <Testimonials />
      <LatestNews />
      <Gallery />
      <DonateSection />
      <section id="contact" className="py-20 md:py-28">
        <div className="container-wide">
          <SectionHeader title={t('home.contact.title')} subtitle={t('home.contact.subtitle')} center />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Index;
