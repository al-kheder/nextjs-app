'use client';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { Button } from './ui/button';
import { Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function OrderCard({ item }) {
  const router = useRouter();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState<number>(0);
  const [showOrderBar, setShowOrderBar] = useState<boolean>(false);

  const [orders, setOrders] = useState<any[]>(() => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setShowOrderBar(true);
  };

  const handleDecrement = () => {
    const newQuantity = Math.max(quantity - 1, 0);
    setQuantity(newQuantity);
    if (newQuantity === 0) {
      setShowOrderBar(false);
    }
  };

  const handleViewOrder = () => {
    const newOrder = {
      name: item.name,
      quantity: quantity,
      totalPrice: item.defaultPrice * quantity,
    };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);

    router.push('/ordersummery');
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="p-2 flex justify-center">
        <Image src="/assets/OIP.jpeg" alt="Burgers" width={200} height={200} />
      </div>
      <hr />
      <div className="p-2 flex justify-between">
        <div className="p-2 flex justify-around items-center gap-2">
          <Button variant="outline" size="icon" onClick={handleIncrement}>
            <Plus />
          </Button>
          <span>{quantity}</span>
          <Button variant="outline" size="icon" onClick={handleDecrement}>
            <Minus />
          </Button>
        </div>
        <div className="left">
          <h1>{item.name}</h1>
          <p>Price: ${item.defaultPrice}</p>
          <p>Total Price: ${item.defaultPrice * quantity}</p>
        </div>
      </div>
      {showOrderBar && (
        <OrderBar
          item={item}
          quantity={quantity}
          onViewOrder={handleViewOrder}
        />
      )}
      <Toaster />
    </div>
  );
}

// OrderBar Component
function OrderBar({ item, quantity, onViewOrder }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center">
      <div>
        <h2>Your Order</h2>
        <p>
          {item.name} x {quantity}
        </p>
        <p>Total: ${item.defaultPrice * quantity}</p>
      </div>
      <Button onClick={onViewOrder}>
        View Order
      </Button>
    </div>
  );
}
