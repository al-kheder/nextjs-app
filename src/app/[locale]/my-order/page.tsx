'use client';

import { useAppStore } from '@/app/store';
import ProductCard from '@/components/OrderSummary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function MyOrder() {
  const router = useRouter();
  const { orders } = useAppStore();
  return (
    <div className="flex flex-col">
      <div className="m-2">
        {' '}
        <Button
          onClick={() => {
            router.push('/en');
          }}
        >
          Back
        </Button>
      </div>
      <div className="flex flex-wrap">
        {orders.map((item, i) => (
          <ProductCard key={i} order={item} />
        ))}
      </div>
    </div>
  );
}
