// components/OrderSummary.tsx
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
