import OrderCard from './OrderCard';

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
  const menuList = menu.filter((item) => {
    return categoryId && item.categoryId === +categoryId;
  });
  console.log(menuList);
  return (
    <div>
      {menuList.map((item, index) => (
        <OrderCard key={index} item={item} />
      ))}
    </div>
  );
}
