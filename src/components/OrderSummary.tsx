import { menu } from '@/app/api/items/mockData';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAppStore } from '@/app/store';
import { Button } from './ui/button';

export default function ProductCard({ order }) {
  const { removeProduct } = useAppStore();
  //const incrementProduct = useAppStore((state) => state.removeProduct);

  return (
    <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Product Card 1 */}
      <Card className="bg-white max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <img
            src={`${menu.meta.rootImgPath}/${order.image}`}
            alt={order.name}
            className="w-full h-48 bg-contain bg-center"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            {order.name}
          </CardTitle>
          <CardDescription className="text-gray-600 mb-4">
            {order.nameAr}
          </CardDescription>
          <p className="text-gray-700 mb-2">${order.defaultPrice}</p>
        </CardContent>
        <CardFooter className="p-4 bg-gray-100">
          <Button
            variant="destructive"
            className=" text-white  py-2 px-4 rounded-full"
            onClick={() => {
              removeProduct(order.id);
            }}
          >
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

/* // components/OrderSummary.tsx
'use client';

import React, { useEffect, useState } from 'react';

const OrderSummary = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Order Summary</h1>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <div key={index} className="mb-4">
            <p>Name: {order.name}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Total Price: ${order.totalPrice}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No items in your order.</p>
      )}
    </div>
  );
};

export default OrderSummary;
 */
