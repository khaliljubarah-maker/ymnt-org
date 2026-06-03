
## What I'll do

### 1. Re-extract project images correctly (per project)
The current photos folder mixes images across projects. I'll extract images from each new DOCX into its own folder and re-link them per project:

- `‏‏ملخص_مشروع_المنتدى` + `‏‏ملخص_منتدى_2` → **Climate & Social Justice Forum (Phases I & II)** → `src/assets/photos/forum/`
- `‏‏ملخص_مشروع_نورتمونا` → **Noortmona** → `src/assets/photos/noortmona/`
- `‏‏ملخص_سواسية` → **Sawaseya** → `src/assets/photos/sawaseya/`
- `‏‏ملخص_ساسة_سلام` → **Sasa Peace** → `src/assets/photos/sasa-peace/`
- `‏‏ملخص_مشروع_الطابخات_الشمسية` → **Solar Cookers** → `src/assets/photos/solar-cookers/`

Each project in `src/data/site.ts` will get:
- a correct cover `image` from its own folder
- a new `gallery: string[]` field (3–6 photos) used on the project detail page
- old generic photos removed from project mappings

The homepage Gallery and Hero will be updated to use only authentic, well-attributed photos.

### 2. Partner logos
Extract the 13+ logos from `صور_شعارات_شركاء_مؤسسة_يمنت_للتنمية.pptx` into `src/assets/partners/`, and rewrite `Partners` section + `partners` data in `site.ts` to render real logo images (grayscale → color on hover) instead of text chips.

### 3. New "Resources" page (الإصدارات والوثائق)
Add `/resources` route + nav entry (AR/EN) with cards linking out to Google Drive / YouTube:

- ملفات التأسيس والنظام الأساسي
- تصريح العمل 2026
- الحسابات البنكية
- الأدلة والسياسات
- الإصدارات والإنتاج المعرفي
- فيديوهات: منتدى العدالة 1، نورتمونا، قصة نجاح مسك، قصة نجاح أكرم (embedded YouTube)

Also surface the relevant video on each matching project detail page, and add a "Publications & Media" block to the homepage linking to the resources page.

### 4. Logo swaps (header behavior + footer)
- **Footer**: replace current `logo-full.png` with the new white square logo (`الشعار_المربع` white version from `صورة2000000000000000000.png`). Drop the white card wrapper since logo is already white-on-transparent.
- **Header**: two horizontal logo variants
  - At top (transparent pink hero background) → show **white** horizontal logo (`11111111111111111.png`)
  - After scroll (white background) → show existing **colored** horizontal logo (`logo-horizontal.png`)
  - Mobile mark icon: same dual behavior using white square (`صورة2000000000000000000.png`) on transparent, colored square (`logo-mark.png`) on white.
  - Remove the white pill wrapper.

### 5. Translations & SEO
Add AR/EN strings for the Resources page, video labels, and partner section. Update sitemap-relevant nav entries.

## Technical notes

- I'll script extraction via Python (`zipfile` + `python-docx` not required; DOCX images live in `word/media/`).
- Partner PPTX: unzip and pull `ppt/media/*` images.
- Videos: embed via responsive `<iframe>` with `youtube-nocookie.com` for privacy.
- All new images go through `lovable-assets` only if large; small logos can stay in repo since they're <100KB each.
- No backend changes; all data lives in `src/data/site.ts` and `src/i18n/locales/*`.

## Out of scope
- Newsletter backend wiring
- Donation payments
- CMS — content remains in `site.ts`
