import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { board, staff } from '@/data/site';

const Avatar = ({ name }: { name: string }) => {
  const initials = name.split(' ').slice(0, 2).map(n => n[0]).join('');
  return (
    <div className="h-24 w-24 rounded-full bg-gradient-brand grid place-items-center text-2xl font-bold text-primary-foreground shadow-elegant">
      {initials}
    </div>
  );
};

const Team = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  const Group = ({ title, people }: { title: string; people: typeof board }) => (
    <div className="mb-16">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">{title}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.map(p => (
          <div key={p.name.en} className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elegant transition-all">
            <Avatar name={p.name.en} />
            <div className="mt-4 font-bold">{p.name[lng]}</div>
            <div className="text-sm text-muted-foreground mt-1">{p.role[lng]}</div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <>
      <SEO title={t('team.title')} description={t('team.subtitle')} path="/team" />
      <PageHero title={t('team.title')} subtitle={t('team.subtitle')} />
      <section className="py-16 container-wide">
        <Group title={t('team.board')} people={board} />
        <Group title={t('team.staff')} people={staff} />
      </section>
    </>
  );
};

export default Team;
