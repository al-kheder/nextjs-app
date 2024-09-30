'use client';
import { useStore } from 'zustand';
import OrderCard from './OrderCard';
import { useAppStore } from '@/app/store';

import { useSearchParams } from 'next/navigation';
import { getImageUrl } from '@/services/itemsService';

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

  const filteredMenu = menu.filter(
    (item: any) => categoryId === item.categoryId
  );

  if (filteredMenu.length === 0) {
    return <div>No items found for the selected category.</div>;
  }

  return (
    <div>
      {filteredMenu.map((item: any, index) => (
        <OrderCard key={index} item={item} onAddItem={addOrdr} />
      ))}
    </div>
  );
}

//https://cloud.appwrite.io/v1/storage/buckets/itemBucket/files/66f6aa5300255cf5e5fc/view?project=66e846e300175632102d
//https://cloud.appwrite.io/v1/storage/buckets/itemBucket/files/66f6aa5300255cf5e5fc/view?project=66e846e300175632102d&project=66e846e300175632102d&mode=admin
