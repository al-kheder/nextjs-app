import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LocalSwitcher from './LocalSwitscher';
import { ModeToggle } from './ModeToggle';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
export default function Header() {
  const t = useTranslations('HomePage');
  const locale = 'en';
  return (
    <header>
      <div className="up flex justify-between max-w-300">
        <div>
          <div className='bg-slate-300 rounded-md px-2'>
            <Link href={`${locale}/admin`}> Admin panel</Link>
          </div>
          <LocalSwitcher />
        </div>
        <div>
          <Avatar className="w-32 h-32">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>REZA</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
      <hr />
      <div className="">
        <div className='right p-5  bg-gradient-to-r from-sky-400 to-indigo-400"'>
          <h2>{t('companyName')}</h2>
          <p>{t('companyAdresse')}</p>
          <p>{t('telefon')}</p>
        </div>
        <div className="left"></div>
      </div>
    </header>
  );
}
