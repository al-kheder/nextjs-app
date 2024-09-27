'use client';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { Button } from './ui/button';
import { Plus, Minus, PlusIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrderOption from '@/components/OderOption';
import IncrementDecrementOder from './IncrementDecrementOder';
import { menu } from '@/app/api/items/mockData';
import { useAppStore } from '@/app/store';
import { useSearchParams } from 'next/navigation';
import { getImageUrl } from '@/services/itemsService';

export default function OrderCard({
  item,

  onAddItem,
}: {
  item: any;
  onAddItem: (item: any) => void;
}) {
  const router = useRouter();
  // const [quantity, setQuantity] = useState<number>(0);
  const [showOrderBar, setShowOrderBar] = useState<boolean>(false);
  const [showOrderOption, setShowOrderOption] = useState<boolean>(false);

  const quantity = useAppStore(
    (state) => state.orders.find((order) => order.id === item.id)?.quantity || 0
  );

  /*   const [orders, setOrders] = useState<any[]>(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  });
 */
  /*   const handleViewOrder = () => {
    const newOrder = {
      name: item.name,
      quantity: quantity,
      totalPrice: item.defaultPrice * quantity,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    router.push('/ordersummery');
  }; */

  return (
    <div className="flex justify-center flex-col">
      <div className="p-2 flex justify-center">
        {<img src={getImageUrl(item.imageId)} alt="" />}
      </div>
      <hr />
      <div className="p-2 flex justify-center cursor-pointer ">
        {/*         <div className="p-2 flex justify-around items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleIncrement}>
            <Plus />
          </Button>
          <span>{quantity}</span>
          <Button variant="outline" size="icon" onClick={handleDecrement}>
            <Minus />
          </Button>
        </div> */}
        <div className="left">
          <h1>{item.name}</h1>
          <p>Price: ${item.price}</p>
          <p>Total Price: ${item.price * quantity}</p>
          <button onClick={() => onAddItem(item)}>addd</button>
          <IncrementDecrementOder productId={item.id} price={item.price} />
        </div>
      </div>
    </div>
  );
}
