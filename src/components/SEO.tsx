import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SITE_URL = 'https://ymnt-org.lovable.app';
const DEFAULT_OG_IMAGE = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/3c25c22c-e8f3-411b-81b3-9296ac70f267/id-preview-59a94a5f--5ad88f24-a6ea-4ba5-a71e-ce973c312f95.lovable.app-1780510608188.png';

interface Props {
  title?: string;
  description?: string;
  path?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SEO = ({ title, description, path = '/', ogType = 'website', ogImage }: Props) => {
  const { i18n } = useTranslation();
  const lng = i18n.language;
  const shortBrand = lng === 'ar' ? 'مؤسسة يمنت' : 'Ymnt Foundation';
  const defaultTitle = lng === 'ar'
    ? 'مؤسسة يمنت — العدالة المناخية في اليمن'
    : 'Ymnt Foundation — Climate justice in Yemen';
  const defaultDesc = lng === 'ar'
    ? 'منظمة شبابية يمنية مستقلة في تعز تعمل من أجل العدالة المناخية والحقوق البيئية وبناء السلام عبر العمل المجتمعي.'
    : 'Youth-led Yemeni NGO in Taiz advancing climate justice, environmental rights and peacebuilding through community action.';

  let fullTitle = title ? `${title} · ${shortBrand}` : defaultTitle;
  if (fullTitle.length > 60) fullTitle = fullTitle.slice(0, 57).trimEnd() + '…';
  let desc = description || defaultDesc;
  if (desc.length > 160) desc = desc.slice(0, 157).trimEnd() + '…';

  const url = `${SITE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <html lang={lng} dir={lng === 'ar' ? 'rtl' : 'ltr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={shortBrand} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
