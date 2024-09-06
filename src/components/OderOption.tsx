import { useState } from 'react';

const OrderOption = ({ productName, productPrice, productImage, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  // Function to handle increment
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
      style={{ zIndex: 9999 }} // Ensures it is in front
    >
      <div className="relative bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ×
        </button>

        <img
          src={productImage}
          alt={productName}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{productName}</h2>
          <p className="text-gray-500">${productPrice.toFixed(2)}</p>
        </div>
        <div className="ml-4 flex items-center">
          <button
            onClick={decrement}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
          >
            -
          </button>
          <span className="mx-2">{quantity}</span>
          <button
            onClick={increment}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderOption;
