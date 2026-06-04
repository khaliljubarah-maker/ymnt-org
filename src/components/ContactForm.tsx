import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(2000),
});

export const ContactForm = ({ compact = false }: { compact?: boolean }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(t('contact.form.error'));
      return;
    }
    setLoading(true);
    const { name, email, subject, message } = parsed.data;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:info@ymnt.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setLoading(false);
    toast.success(t('contact.form.success'));
    form.reset();
  };

  return (
    <div className={`grid gap-10 ${compact ? '' : 'lg:grid-cols-5'}`}>
      {!compact && (
        <aside className="lg:col-span-2 space-y-6">
          <InfoRow icon={MapPin} label={t('contact.address')} value={t('contact.addressValue')} />
          <InfoRow icon={Mail} label={t('contact.email')} value="info@ymnt.org" />
          <InfoRow icon={Phone} label={t('contact.phone')} value="+967 777 605 260" ltr />
          <InfoRow icon={Clock} label={t('contact.hours')} value={t('contact.hoursValue')} />
        </aside>
      )}
      <form onSubmit={onSubmit} className={`${compact ? '' : 'lg:col-span-3'} bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4`}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">{t('contact.form.name')} *</Label>
            <Input id="name" name="name" required maxLength={100} className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="email">{t('contact.form.email')} *</Label>
            <Input id="email" name="email" type="email" required maxLength={255} className="mt-1.5" />
          </div>
        </div>
        <div>
          <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
          <Input id="subject" name="subject" required maxLength={200} className="mt-1.5" />
        </div>
        <div>
          <Label htmlFor="message">{t('contact.form.message')} *</Label>
          <Textarea id="message" name="message" required rows={6} maxLength={2000} className="mt-1.5" />
        </div>
        <Button type="submit" disabled={loading} size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
          {loading ? t('common.sending') : t('contact.form.submit')}
        </Button>
        <p className="text-xs text-muted-foreground pt-1">{t('contact.form.note')}</p>
      </form>
    </div>
  );
};

const InfoRow = ({ icon: Icon, label, value, ltr }: { icon: any; label: string; value: string; ltr?: boolean }) => (
  <div className="flex gap-4">
    <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center shrink-0">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</div>
      <div className="text-foreground font-medium mt-0.5" dir={ltr ? 'ltr' : undefined}>{value}</div>
    </div>
  </div>
);
