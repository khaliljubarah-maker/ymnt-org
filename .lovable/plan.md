## What I'll do

سأقوم بتفعيل الأزرار الثلاثة بدون الحاجة لباك-إند:

### 1. زر "ادعمنا" + "تواصل مع فريقنا" في `DonateSection.tsx`
- زر **"ادعمنا"** (Heart) → يفتح بريد جديد إلى `info@ymnt.org` بموضوع جاهز "Support Ymnt Foundation" (`mailto:` link).
- زر **"تواصل مع فريقنا / كن شريكًا"** (Handshake) → يوجّه عبر `react-router-dom Link` إلى صفحة `/contact`.

### 2. زر "إرسال الرسالة" في `ContactForm.tsx`
حالياً الفورم يحاكي الإرسال فقط (setTimeout). سأجعله يرسل فعلياً عبر **mailto** (يفتح برنامج البريد لدى المستخدم) — لا يحتاج باك-إند ويصل المحتوى للمؤسسة:

```
mailto:info@ymnt.org
  ?subject=<subject>
  &body=Name: <name>%0AEmail: <email>%0A%0A<message>
```

- نحافظ على تحقق zod الموجود (الأسماء، البريد، الحد الأقصى للأحرف).
- نستخدم `encodeURIComponent` لكل قيمة قبل بناء الرابط.
- بعد فتح البريد نعرض `toast.success` ونصفّر الفورم.
- نضيف ملاحظة صغيرة أسفل الفورم باللغتين: "سيفتح برنامج البريد الافتراضي لإرسال الرسالة."

### 3. ترجمات
إضافة `home.donate.supportSubject` / `contact.form.note` بالعربية والإنجليزية.

## خارج النطاق
- إرسال البريد من السيرفر مباشرة (يحتاج Lovable Cloud + Resend/SMTP). يمكن تفعيله لاحقاً عند الطلب.
