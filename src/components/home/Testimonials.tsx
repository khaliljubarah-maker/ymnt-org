import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';

export const Testimonials = () => {
  const { t } = useTranslation();
  const items = t('home.testimonials.items', { returnObjects: true }) as { quote: string; name: string; role: string }[];
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader title={t('home.testimonials.title')} center />
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <figure key={i} className="bg-card border border-border rounded-2xl p-8 relative">
              <Quote className="absolute top-6 end-6 h-10 w-10 text-primary/15" />
              <blockquote className="text-foreground/90 leading-relaxed mb-6 relative">"{it.quote}"</blockquote>
              <figcaption>
                <div className="font-bold text-sm">{it.name}</div>
                <div className="text-xs text-muted-foreground">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
