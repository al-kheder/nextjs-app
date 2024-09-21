'use client';
import { useStore } from 'zustand';
import OrderCard from './OrderCard';
import { useAppStore } from '@/app/store';

import { useSearchParams } from 'next/navigation';

interface MenuItem {
  id: string;
  name: string;
  categoryId: number;
}

interface MenuListProps {
  menu: MenuItem[];
  categoryId?: string;
}

export default function MenuList({ menu, category }: any) {
  const { addOrdr, orders } = useAppStore();

  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  console.log('categoryId:', categoryId);

  const filteredMenu = menu.filter(
    (item: any) => categoryId === item.categoryId
  );

  if (filteredMenu.length === 0) {
    return <div>No items found for the selected category.</div>;
  }
  console.log('filteredMenu:', filteredMenu);
  return (
    <div>
      {filteredMenu.map((item: any, index) => (
        <OrderCard key={index} item={item} onAddItem={addOrdr} />
      ))}
    </div>
  );
}
