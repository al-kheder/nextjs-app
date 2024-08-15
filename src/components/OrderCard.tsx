// components/FoodCard.jsx
'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
export default function OrderCard() {
  const [quantity, setQuantity] = useState<number>(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };
  return (
    <div className="flex justify-center flex-col">
      <div className="p-2 flex justify-center">
        <img src="/assets/OIP.jpeg" alt="Burgers" />
      </div>
      <hr />
      <div className="p-2 flex justify-between">
        <div className=" p-2 flex justify-around items-center gap-2 ">
          <Button variant="outline" size="icon" onClick={handleIncrement}>
            <Plus />
          </Button>
          <span>{quantity}</span>
          <Button variant="outline" size="icon" onClick={handleDecrement}>
            <Minus />
          </Button>
        </div>
        <div className="left">
          <h1>Burgers</h1>
          <p>5,34 $</p>
        </div>
      </div>
    </div>
  );
}
