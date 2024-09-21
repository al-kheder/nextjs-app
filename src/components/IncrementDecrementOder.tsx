import React from 'react';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import { MinusIcon } from '@radix-ui/react-icons';
import { useAppStore } from '@/app/store';

function IncrementDecrementOrder({
  productId,
  price,
}: {
  productId: string;
  price: number;
}) {
  const incrementProduct = useAppStore((state) => state.incrementProduct);
  const decrementProduct = useAppStore((state) => state.decrementProduct);
  const quantity = useAppStore(
    (state) =>
      state.orders.find((order) => order.id === productId)?.quantity || 0
  );

  return (
    <div className="flex justify-center items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        rounded="full"
        onClick={() => incrementProduct(productId)}
      >
        <PlusIcon className="h-4 w-4 rounded-full" />
      </Button>
      <div className="flex items-center gap-2">
        <span>{quantity}</span>
        <Button
          variant="outline"
          size="icon"
          rounded="full"
          onClick={() => decrementProduct(productId)}
        >
          <MinusIcon className="h-4 w-4 rounded-full" />
        </Button>
      </div>
      total price: {price * quantity}
    </div>
  );
}

export default IncrementDecrementOrder;
