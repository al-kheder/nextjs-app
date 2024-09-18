import Link from 'next/link';
import { ReactNode } from 'react';

type AdminLayoutProps = {
  children: ReactNode;
  params: { locale: string };
};

export default function AdminLayout({ children, params }: AdminLayoutProps) {
  return (
    <div className="admin-layout">
      <header className="bg-blue-200 flex justify-center gap-10 p-10">
        <nav>
          <ul className="flex justify-center gap-10">
            <li>
              <Link href={`/`}>HomePage</Link>
            </li>
            <li>
              <Link href={`/${params.locale}/admin/categories`}>
                Categories
              </Link>
            </li>
            <li>
              <Link
                href={{
                  pathname: `/${params.locale}/admin/create-menu`,
                  query: { isActive: true },
                }}
              >
                Items
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="admin-content">{children}</main>
    </div>
  );
}
