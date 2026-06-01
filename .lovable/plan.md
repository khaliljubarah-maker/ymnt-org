## Goal
Use the official Ymnt Foundation logo and real field photos (from the 3 uploaded PDFs) across the site instead of the AI-generated placeholders.

## Steps

### 1. Logo integration
- Copy `الشعار المربع.jpg.png` → `src/assets/logo-mark.png` (square icon, for header/favicon).
- Copy `شعار مؤسسة يمنت للتنمية 1.png` → `src/assets/logo-full.png` (stacked, for footer / about).
- Copy `ملون صوره جانبية.png` → `src/assets/logo-horizontal.png` (horizontal, for header on wide screens).
- Update `src/components/layout/Header.tsx` to render `logo-horizontal.png` (desktop) / `logo-mark.png` (mobile) instead of the current generated `logo.png`.
- Update `src/components/layout/Footer.tsx` to use `logo-full.png` on a white/light card so brand colors remain legible.
- Update `index.html` favicon + OG image to `logo-mark.png`.
- Delete the obsolete generated `src/assets/logo.png`.

### 2. Extract real photos from PDFs
Parse the 3 uploaded PDFs with `document--parse_document` (images auto-extracted to `parsed-documents://`):
- `أفضل صور مشاريع المناخ والاستدامة والطاقة الشمسية.pdf` → climate / solar project photos
- `أفضل صور أنشطة الشباب والقيادات الشابة.pdf` → youth & leadership photos
- `أفضل صور الأنشطة المجتمعية والحوارات واللقاءات.pdf` → community dialogue / meetings photos

Select ~12 best-quality images, copy them into `src/assets/photos/` with descriptive names (e.g. `climate-solar-01.jpg`, `youth-forum-02.jpg`, `community-dialogue-03.jpg`).

### 3. Wire real photos into the site
- **Hero (`src/components/home/Hero.tsx`)** → swap generated `hero-yemen.jpg` for the strongest community/climate photo.
- **Featured Projects (`src/data/site.ts` + `FeaturedProjects.tsx`)** → replace `project-climate.jpg`, `project-education.jpg`, `project-water.jpg`, `project-women.jpg` references with the matching real photos.
- **Gallery (`src/components/home/Gallery.tsx`)** → populate with 8–9 real photos spanning the 3 themes (climate, youth, community).
- **Latest News / project detail pages** → use remaining real photos as article thumbnails where the current placeholders sit.
- Keep generated images only as fallbacks if a topic has no real photo; otherwise delete them.

### 4. Verification
- Visual check of `/`, `/projects`, `/news`, and the Gallery section in both LTR and RTL.
- Confirm logo renders crisp on dark/light header states and that all `<img alt>` text remains meaningful (bilingual where appropriate).

## Out of scope
- No content/text changes, no new pages, no new projects (e.g. نورتمونا / المنتدى) — those can be a follow-up.
- No backend changes.
