import React from 'react';

const Cart = () => {
  return (
    <div className="">
      <button
        className=" relative flex items-center gap-2 text-black text-[20px]  lg:text-[24px]  
        font-semibold bg-white rounded-full px-4 py-1 pr-12 hover:bg-white/75 transition "
      >
        Basket
        <img
          className="absolute end-2 bottom-1 size-9"
          src="/basket1.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default Cart;
