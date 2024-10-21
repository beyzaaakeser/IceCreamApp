import React from 'react';

const SelectType = ({ selectedType, setSelectedType }) => {
  return (
    <div className="flex mt-3 gap-5 ">
      <button
        onClick={() => setSelectedType('cornet')}
        className={`flex-1 border rounded-md py-2 px-6 text-center hover:bg-white/30 cursor-pointer transition ${
          selectedType === 'cornet' && 'bg-white text-black shadow-lg'
        }`}
      >
        Cone
      </button>
      <button
        onClick={() => setSelectedType('cup')}
        className={`flex-1 border rounded-md py-2 px-6 text-center hover:bg-white/30 cursor-pointer transition
            ${selectedType === 'cup' && 'bg-white text-black shadow-lg'}`}
      >
        Cup
      </button>
    </div>
  );
};

export default SelectType;
