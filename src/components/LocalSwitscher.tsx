'use client';
import { Toggle } from '@/components/ui/toggle';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [language, setLanguage] = useState(() => {
    const langFromPath = pathname.split('/')[1];
    return langFromPath || localStorage.getItem('language') || 'en';
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      'dir',
      language === 'ar' ? 'rtl' : 'ltr'
    );

    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    router.replace(`/${newLanguage}`);
  };

  return (
    <Toggle
      pressed={language === 'ar'}
      onPressedChange={toggleLanguage}
      className="p-2 bg-gray-200 rounded-full"
    >
      {language === 'en' ? 'AR' : 'EN'}
    </Toggle>
  );
}
