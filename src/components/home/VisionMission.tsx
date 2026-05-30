import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const VisionMission = () => {
  const { t } = useTranslation();
  const items = [
    { icon: Eye, title: t('home.vmv.vision.title'), body: t('home.vmv.vision.body') },
    { icon: Target, title: t('home.vmv.mission.title'), body: t('home.vmv.mission.body') },
    { icon: Heart, title: t('home.vmv.values.title'), body: t('home.vmv.values.body') },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader title={t('home.vmv.title')} center />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-elegant hover:-translate-y-1 hover:border-primary/30">
              <div className="h-14 w-14 grid place-items-center rounded-xl bg-gradient-brand text-primary-foreground mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
