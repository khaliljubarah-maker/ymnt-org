## What I'll do

### 1. Update Team data (`src/data/site.ts`)
Replace the placeholder `staff` array with the real 7-member team from the PDF org chart (AR/EN names + roles):

| Name (EN) | Role |
|---|---|
| Maria Adam Seif Ismail | Chairperson |
| Khalil Ahmed Ali Jubarah | CEO |
| Muhab Muhammad Abd al-Nour Mahyoub | Financial Officer |
| Mohammed Abdulrahman Farea Al-Hamadi | Operations Officer |
| Omaima Khalid Mohammed Asaad | Logistics |
| Hamdi Abdullah Qaid Ali | Media |
| Zainab Gamal Abdulrahman Ahmed | MEAL |

Add an optional `email` field per member (visible on the team card).

### 2. Add visual org chart on `/team`
Render a hierarchical organogram above the people list:

```
                 Chairperson (Maria)
                        │
                       CEO (Khalil)
        ┌───────────────┼───────────────┐
   Financial        Operations        Project
   (Muhab)         (Mohammed)        Coordinator
                        │
        ┌───────────────┼───────────────┐
      Media           MEAL          Logistics
     (Hamdi)        (Zainab)        (Omaima)
```

Built with CSS grid + connector lines (no extra libs), responsive (stacks vertically on mobile), RTL-aware.

### 3. Wire real social media links
Replace the placeholder `href="#"` social icons in `Footer.tsx` with:
- Facebook → `https://www.facebook.com/ymnt20/`
- LinkedIn → `https://www.linkedin.com/company/ymnt/`
- YouTube → `https://www.youtube.com/@ymnt20`
- Remove Twitter (no account provided)

Same links added to the Contact page social row if present.

### 4. Translations
Add AR/EN strings for `team.orgChart` heading and any new labels.

## Out of scope
- Personal photos (PDF doesn't include headshots — initials avatars remain)
- Phone/ID card data (kept private)
