## Scope

All changes are presentation-layer (data + components). No backend.

## 1. `src/data/site.ts` — add `url` field to docs

Extend each item in `policies`, `reports`, `legalDocs`, `financials` with an optional `url` string (and update `en` labels where the AR text changes). Final arrays:

**policies** (5 items)
- `hr` → https://drive.google.com/file/d/1twMlVMx33V3LVmOtriQvCDqJqKTwDUMX/view?usp=drive_link
- `finance` → https://drive.google.com/file/d/18j6RsqjaHTOtSl7fybqEeE51ad9rFftW/view?usp=drive_link
- `procurement` → https://drive.google.com/file/d/1xrSbQAT5EwYm5X8G05sZWfB-uYi93JOs/view?usp=drive_link
- `governance` → https://drive.google.com/file/d/1sMpqBbKFrLDzkpoG5Cr4WXSIXknUd6cx/view?usp=drive_link
- `do-no-harm` → rename to "Project Proposal Writing Manual, Do No Harm Principle & Risk Management Matrix" / "دليل كتابة مقترحات المشاريع ومبدأ عدم الإضرار ومصفوفة إدارة المخاطر" → https://drive.google.com/file/d/1qDD4FouAHoYuUWTVUwRIFlTJavi81E2w/view?usp=drive_link

**reports** (7 items — keep existing 5, add 2)
- `water-paper-2026` → https://drive.google.com/file/d/1zTol66U61za5DFlAuXzxDYXv1owDGZwq/view?usp=drive_link
- `water-investigative-2026` → no url (placeholder `#`)
- `climate-policy-2024` → https://drive.google.com/file/d/13Y16gtHmcojTesavQG0UkryHO1ruoxlI/view?usp=drive_link
- `justice-policy-2024` → https://drive.google.com/file/d/1CyU3Ylw9v6oRyKBIwERPQnLl9sRkmAtB/view?usp=drive_link
- `solar-cooker-guide-2022` → https://drive.google.com/file/d/13l8abUlYRJh-UyCyiWjsHw65J6WQrkS_/view?usp=drive_link
- new `procurement-cycle` "الدورة المستندية ونماذج لعمليات الشراء والتعاقد" → https://drive.google.com/drive/folders/1q9C2wNZZ5AQtHY9pW_Ay0N4ruOfPLSOD?usp=sharing
- new `annual-reports` "التقارير الفنية السنوية وتقارير المشاريع" → https://drive.google.com/file/d/1rGPhk4reyPUIHaarCyt7xeXKKdJ9X09Y/view?usp=sharing

**legalDocs** (replace with 4 items)
- `license` "تصريح مزاولة نشاط المؤسسة" → https://drive.google.com/file/d/1FeJHgZP-djkcUekddmkrWJxOqwo6eNKX/view?usp=drive_link
- `bylaws` "النظام الأساسي لمؤسسة يمنت للتنمية" → https://drive.google.com/file/d/1_dGjKn3YFUmXpDJZ_shphEtE8qk4pkPS/view?usp=drive_link
- `founding-contract` "طلب وعقد تأسيس مؤسسة يمنت للتنمية" → https://drive.google.com/file/d/1-FVveP0zrzPH3Fpfrict_EAbbILbs4g2/view?usp=drive_link
- `board-trustees` "مجلس الأمناء ولجنة الرقابة والتفتيش لمؤسسة يمنت للتنمية" → https://drive.google.com/file/d/1kDX_nuzxIujEgDALlZnITiFpO-9bXQdh/view?usp=drive_link

**financials** (4 items)
- `operational-budget` → https://drive.google.com/file/d/18O9ioAdz7HH9Uh_KiAmLTmuqdLJAI-WG/view?usp=sharing
- `audit` → rename to "قوائم مالية مدققة" (drop "عند الطلب") → https://drive.google.com/file/d/1tWq8pN3kBz_hrXuKc_4TrDAR48PL9HT7/view?usp=sharing
- new `procurement-cycle` → https://drive.google.com/drive/folders/1q9C2wNZZ5AQtHY9pW_Ay0N4ruOfPLSOD?usp=sharing
- new `annual-reports` → https://drive.google.com/file/d/1rGPhk4reyPUIHaarCyt7xeXKKdJ9X09Y/view?usp=sharing

## 2. `src/pages/Governance.tsx` — wire links + update copy

- In `DocList`, change the `<a>` from `href="#"` + `e.preventDefault()` to `href={d.url ?? '#'}` with `target="_blank" rel="noopener noreferrer"`. When `d.url` is missing, keep `#` with no preventDefault (acts as inert).
- Type the `docs` prop to include optional `url`.

## 3. Governance structure copy

Update `governance.structureBody` AR translation in `src/i18n/locales/ar.ts` to:
> "تحت إشراف مجلس الأمناء وقيادة الإدارة التنفيذية، تعمل مؤسسة يمنت للتنمية وفق أطر حوكمة متينة تشمل مصفوفة متكاملة لإدارة المخاطر (الأمنية، التشغيلية، المالية والقانونية)، مع تكريس مبدأ عدم الإضرار كركيزة أساسية في كافة مشاريع المؤسسة."

Mirror an equivalent EN sentence in `en.ts`.

## 4. `src/pages/Team.tsx` — hide emails

Remove the `{m.email && (...mailto link...)}` block from the `Card` component. Leave the `email` field in `site.ts` data untouched (no business logic change).

## 5. YouTube embed on Home — About section

Create `src/components/home/StoryVideo.tsx`: a section with `container-wide`, a `SectionHeader` (bilingual title "قصتنا وأثرنا" / "Our story & impact"), and a responsive 16:9 iframe wrapper:

```tsx
<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-elegant max-w-4xl mx-auto">
  <iframe
    src="https://www.youtube.com/embed/2-R6JwPq9jI"
    title="..."
    className="absolute inset-0 w-full h-full"
    allow="accelerated-2d-canvas; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

Insert `<StoryVideo />` in `src/pages/Index.tsx` between `<ClimateBanner />` and `<Stats />` (visible, fits the About/story narrative). Add `home.storyVideo.title` / `subtitle` keys to both locale files.

## Out of scope
- Server-side proxying of Drive links; links open Drive viewer in a new tab.
- Adding email back to team cards in any form.
