import React from 'react';

const AmountPicker = ({ amount }) => {
  return (
    <div>
      <div className={`flex border rounded-md `}>
        <button
          disabled={amount === 0}
          className="px-3 py-1 border-r hover:bg-white/30 transition"
          onClick={() => {}}
        >
          -
        </button>
        <span className="w-8 text-center py-1">{amount}</span>
        <button
          className="px-3  py-1 border-l hover:bg-white/30 transition"
          onClick={() => {}}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default AmountPicker;
