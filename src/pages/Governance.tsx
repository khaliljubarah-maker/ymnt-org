import { useTranslation } from 'react-i18next';
import { FileText, Download, Shield, BookOpen, Scale, FileCheck, Users, FolderOpen, ExternalLink, FileSpreadsheet, Landmark, Handshake } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { PageHero } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { policies, reports, legalDocs, financials } from '@/data/site';

const DocList = ({ title, icon: Icon, docs }: { title: string; icon: any; docs: { key: string; en: string; ar: string; url?: string }[] }) => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language as 'en' | 'ar';
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-11 w-11 grid place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <ul className="divide-y divide-border">
        {docs.map(d => (
          <li key={d.key} className="py-3 flex items-center justify-between gap-4">
            <span className="flex items-center gap-3 text-sm font-medium"><FileText className="h-4 w-4 text-muted-foreground shrink-0" />{d[lng]}</span>
            <Button asChild variant="ghost" size="sm" className="shrink-0">
              <a
                href={d.url ?? '#'}
                target={d.url ? '_blank' : undefined}
                rel={d.url ? 'noopener noreferrer' : undefined}
                onClick={d.url ? undefined : (e) => e.preventDefault()}
                aria-label={`${t('common.download')} ${d[lng]}`}
              >
                <Download className="h-4 w-4 me-1" />{t('common.download')}
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Governance = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('governance.title')} description={t('governance.subtitle')} path="/governance" />
      <PageHero title={t('governance.title')} subtitle={t('governance.subtitle')} />
      <section className="py-16">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-primary-soft to-secondary-soft border border-border rounded-2xl p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4">
              <Users className="h-10 w-10 text-primary shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">{t('governance.structure')}</h2>
                <p className="text-foreground/80 leading-relaxed">{t('governance.structureBody')}</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <DocList title={t('governance.policies')} icon={Shield} docs={policies} />
            <DocList title={t('governance.reports')} icon={BookOpen} docs={reports} />
            <DocList title={t('governance.legal')} icon={Scale} docs={legalDocs} />
            <DocList title={t('governance.financial')} icon={FileCheck} docs={financials} />
          </div>

          <div className="mt-12 space-y-4">
            {[
              { icon: FolderOpen, ar: 'التقارير الفنية السنوية وتقارير المشاريع', en: 'Annual technical reports & project reports', url: 'https://drive.google.com/drive/folders/1vz6X2hBb1x-A9ichkqlWgYP2BbZwV3by?usp=sharing' },
              { icon: FileSpreadsheet, ar: 'الدورة المستندية ونماذج لعمليات الشراء والتعاقد', en: 'Document cycle & procurement / contracting templates', url: 'https://drive.google.com/drive/folders/1WpVvsQc8-hxhVeE6zIma0MFCwNR8fxUz?usp=sharing' },
              { icon: Landmark, ar: 'الحسابات البنكية للمؤسسة', en: 'Foundation bank accounts', url: 'https://drive.google.com/drive/folders/1DNe0c9pwPToTMnLaiPYFUHBI-lzPp57K?usp=drive_link' },
              { icon: Handshake, ar: 'الاتفاقيات الرسمية للمؤسسة', en: 'Official agreements of the Foundation', url: 'https://drive.google.com/drive/folders/1jaFnoOCLJ7jnb1lExM8qIyck1dkuWyJo?usp=sharing' },
            ].map((s) => {
              const Icon = s.icon;
              const lng = (i18n.language as 'en' | 'ar');
              return (
                <a
                  key={s.url}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 bg-card border border-border rounded-2xl p-5 md:p-6 hover:border-primary hover:shadow-elegant transition-all"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary-soft text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-bold truncate">{s[lng]}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{lng === 'ar' ? 'فتح الأرشيف على Google Drive' : 'Open archive on Google Drive'}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Governance;
