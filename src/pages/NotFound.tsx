import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="404" path="/404" />
      <section className="min-h-[80dvh] grid place-items-center text-center container-wide pt-24">
        <div>
          <p className="text-8xl font-extrabold bg-gradient-brand bg-clip-text text-transparent">404</p>
          <h1 className="text-3xl font-bold mt-4">{t('notFound.title')}</h1>
          <p className="text-muted-foreground mt-2 mb-8">{t('notFound.body')}</p>
          <Button asChild><Link to="/">{t('common.backHome')}</Link></Button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
