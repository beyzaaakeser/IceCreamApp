import React from 'react';
import { useDispatch } from 'react-redux';
import { createOrder } from '../../redux/cartSlice';

const CartInfo = ({ cart, close }) => {
  const subtotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 20;
  const total = subtotal + shipping;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(createOrder());
    close();
  };

  return (
    <div className="fs-5 py-5 text-lg">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Subtotal</span>
        <span className="font-semibold text-gray-700">{subtotal}₺</span>
      </p>
      <p className="flex justify-between py-2">
        <span className="text-gray-500 font-semibold">Shipping Cost </span>
        <span className="font-semibold text-gray-700">{shipping}₺</span>
      </p>
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Total </span>
        <span className="font-semibold text-gray-700 text-2xl">{total}₺</span>
      </p>

      <button
        disabled={subtotal === 0}
        onClick={handleClick}
        className="bg-red-500 w-full rounded-md text-white mt-4 p-2 hover:bg-red-600"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default CartInfo;
