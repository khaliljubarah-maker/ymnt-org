import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
  description?: string;
  path?: string;
}

export const SEO = ({ title, description, path = '/' }: Props) => {
  const { t, i18n } = useTranslation();
  const brand = t('brand.name');
  const fullTitle = title ? `${title} · ${brand}` : `${brand} — ${t('brand.tagline')}`;
  const desc = description || t('footer.about');
  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={path} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={path} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={brand} />
    </Helmet>
  );
};
