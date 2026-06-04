import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { board, staff, type TeamMember } from '@/data/site';

const Avatar = ({ name }: { name: string }) => {
  const initials = name.split(' ').slice(0, 2).map(n => n[0]).join('');
  return (
    <div className="h-20 w-20 rounded-full bg-gradient-brand grid place-items-center text-xl font-bold text-primary-foreground shadow-elegant shrink-0">
      {initials}
    </div>
  );
};

const Team = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';

  const chair = board[0];
  const ceo = staff.find(s => s.key === 'ceo')!;
  const finance = staff.find(s => s.key === 'finance')!;
  const ops = staff.find(s => s.key === 'ops')!;
  const subOps = staff.filter(s => s.reportsTo === 'ops');

  const Node = ({ m, accent }: { m: TeamMember; accent?: boolean }) => (
    <div className={`relative bg-card border-2 ${accent ? 'border-primary' : 'border-border'} rounded-2xl p-4 text-center w-full max-w-[220px] hover:shadow-elegant transition-all`}>
      <div className="text-sm font-bold leading-tight">{m.name[lng]}</div>
      <div className="text-xs text-muted-foreground mt-1.5">{m.role[lng]}</div>
    </div>
  );

  const Card = ({ m }: { m: TeamMember }) => (
    <div className="bg-card border border-border rounded-2xl p-6 flex gap-4 items-start hover:shadow-elegant transition-all">
      <Avatar name={m.name.en} />
      <div className="min-w-0 flex-1">
        <div className="font-bold leading-snug">{m.name[lng]}</div>
        <div className="text-sm text-muted-foreground mt-1">{m.role[lng]}</div>
        {m.email && (
          <a href={`mailto:${m.email}`} className="mt-2 inline-flex items-center gap-1.5 text-xs text-primary hover:underline" dir="ltr">
            <Mail className="h-3 w-3" /> {m.email}
          </a>
        )}
      </div>
    </div>
  );

  return (
    <>
      <SEO title={t('team.title')} description={t('team.subtitle')} path="/team" />
      <PageHero title={t('team.title')} subtitle={t('team.subtitle')} />

      <section className="py-16 container-wide">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">{t('team.orgChart')}</h2>

        <div className="flex flex-col items-center gap-6 mb-16">
          {/* Chair */}
          <Node m={chair} accent />
          <div className="w-px h-6 bg-border" />

          {/* CEO */}
          <Node m={ceo} accent />
          <div className="w-px h-6 bg-border" />

          {/* Finance + Ops row */}
          <div className="relative w-full max-w-2xl">
            <div className="absolute top-0 start-1/4 end-1/4 h-px bg-border" />
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-6 bg-border -mt-6" />
                <Node m={finance} />
              </div>
              <div className="flex flex-col items-center gap-0">
                <div className="w-px h-6 bg-border -mt-6" />
                <Node m={ops} />
              </div>
            </div>
          </div>

          {/* Ops sub-team */}
          <div className="w-px h-6 bg-border ms-auto me-auto" style={{ transform: 'translateX(0)' }} />
          <div className="relative w-full max-w-3xl">
            <div className="absolute top-0 start-[16.66%] end-[16.66%] h-px bg-border" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {subOps.map(m => (
                <div key={m.key} className="flex flex-col items-center">
                  <div className="hidden md:block w-px h-6 bg-border -mt-6" />
                  <Node m={m} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* People cards */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-extrabold mb-6">{t('team.board')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {board.map(p => <Card key={p.name.en} m={p} />)}
          </div>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold mb-6">{t('team.staff')}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {staff.map(p => <Card key={p.name.en} m={p} />)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
