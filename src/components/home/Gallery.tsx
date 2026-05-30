import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';
import edu from '@/assets/project-education.jpg';
import climate from '@/assets/project-climate.jpg';
import water from '@/assets/project-water.jpg';
import women from '@/assets/project-women.jpg';
import hero from '@/assets/hero-yemen.jpg';

export const Gallery = () => {
  const { t } = useTranslation();
  const imgs = [climate, edu, hero, water, women, climate];
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader title={t('home.gallery.title')} subtitle={t('home.gallery.subtitle')} center />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {imgs.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i === 2 ? 'col-span-2 md:col-span-1 row-span-2 aspect-square md:aspect-auto' : 'aspect-[4/3]'}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
