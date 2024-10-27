import React from 'react';

const CartInfo = () => {
  return (
    <div className="fs-5 py-5 text-lg">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Subtotal</span>
        <span className="font-semibold text-gray-700">100₺</span>
      </p>
      <p className="flex justify-between py-2">
        <span className="text-gray-500 font-semibold">Shipping Cost </span>
        <span className="font-semibold text-gray-700">20₺</span>
      </p>
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Total </span>
        <span className="font-semibold text-gray-700 text-2xl">100₺</span>
      </p>

      <button className="bg-red-500 w-full rounded-md text-white mt-4 p-2 hover:bg-red-600">
        Confirm Order
      </button>
    </div>
  );
};

export default CartInfo;
