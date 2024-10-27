import React, { useState } from 'react';
import Modal from './Modal';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setIsOpen(true)}
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
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Cart;
