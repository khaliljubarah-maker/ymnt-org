import { useTranslation } from 'react-i18next';
import { SectionHeader } from '@/components/SectionHeader';
import g1 from '@/assets/photos/forum/forum2-01.jpg';
import g2 from '@/assets/photos/solar-cookers/cookers-01.jpg';
import g3 from '@/assets/photos/noortmona/noortmona-02.jpg';
import g4 from '@/assets/photos/sawaseya/sawaseya-02.jpg';
import g5 from '@/assets/photos/sasa-peace/sasa-01.jpg';
import g6 from '@/assets/photos/forum/forum-01.jpg';
import g7 from '@/assets/photos/solar-cookers/cookers-03.jpg';
import g8 from '@/assets/photos/noortmona/noortmona-04.jpg';
import g9 from '@/assets/photos/sawaseya/sawaseya-05.jpg';

export const Gallery = () => {
  const { t } = useTranslation();
  const imgs = [g1, g2, g3, g4, g5, g6, g7, g8, g9];
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
