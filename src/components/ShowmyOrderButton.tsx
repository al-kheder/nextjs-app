'use client';
import { useAppStore } from '@/app/store';
import Link from 'next/link';
import React from 'react';

function ShowmyOrderButton() {
  const { orders } = useAppStore();
return ( 
        <Link href="/en/my-order">
            <button className="bg-green-400 rounded  p-2 w-full text-white cursor-pointer">
                Show my order ({orders.length})
            </button>
        </Link>
);
}

export default ShowmyOrderButton;
