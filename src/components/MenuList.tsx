'use client';
import { useStore } from 'zustand';
import OrderCard from './OrderCard';
import { useAppStore } from '@/app/store';
interface MenuItem {
  id: string;
  name: string;
  categoryId: number;
}

interface MenuListProps {
  menu: MenuItem[];
  categoryId?: string;
}

export default function MenuList({ menu, categoryId }: MenuListProps) {
  const { addOrdr, orders } = useAppStore();
  
  const menuList = menu.filter((item) => {
    return categoryId && item.categoryId === +categoryId;
  });

  return (
    <div>
      {menuList.map((item, index) => (
        <OrderCard key={index} item={item} onAddItem={addOrdr} />
      ))}
    </div>
  );
}
