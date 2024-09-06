import { create } from 'zustand';

type Order = {
  productId: string;
  quantity: number;
};

type State = {
  orders: Order[];
  addOrdr: (order: Order) => void;
  incrementProduct: (productId: string) => void;
  decrementProduct: (productId: string) => void;
  removeProduct: (productId: string) => void;
};

const useAppStore = create<State>((set) => ({
  orders: [],
  addOrdr: (order) =>
    set((state) => ({ orders: [...state.orders, { ...order, quantity: 1 }] })),
  incrementProduct: (productId) =>
    set((state) => {
      console.log('product id', productId);
      const updatedOrders = state.orders.map((order) => {
        if (order.id === productId) {
          return {
            ...order,
            quantity: order.quantity + 1,
          };
        }
        return order;
      });
      return { orders: updatedOrders };
    }),

  decrementProduct: (productId) =>
    set((state) => {
      const updatedOrders = state.orders.map((order) => {
        if (order.id === productId && order.quantity > 0) {
          return {
            ...order,
            quantity: order.quantity - 1,
          };
        }
        return order;
      });
      return { orders: updatedOrders };
    }),
  removeProduct: (productId) =>
    set((state) => {
      const updatedOrders = state.orders.filter(
        (order) => order.id !== productId
      );
      return { orders: updatedOrders };
    }),
}));

export { useAppStore };
