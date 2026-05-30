import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle, center, className }: Props) => (
  <div className={cn('mb-12', center && 'text-center max-w-3xl mx-auto', className)}>
    {eyebrow && (
      <p className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-3 px-3 py-1 bg-secondary-soft rounded-full">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-balance">{title}</h2>
    {subtitle && <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">{subtitle}</p>}
  </div>
);

export const PageHero = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  const { t } = useTranslation();
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-gradient-soft border-b border-border">
      <div className="container-wide">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">{t('brand.short')}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground max-w-4xl text-balance">{title}</h1>
        {subtitle && <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
};
