import React, { useState } from 'react';
import SelectType from './SelectType';

const Card = ({ item }) => {
  const [selectedType, setSelectedType] = useState(null);
  return (
    <div className="bg-black/20 border border-white/50 rounded-3xl flex pr-5 pl-3 py-[50px] gap-8">
      <div className="flex items-center">
        <img className="w-40 drop-shadow-2xl " src={item.image} alt="" />
      </div>
      <div className=" flex-1">
        <h2 className="text-[24px] font-medium">{item.name}</h2>
        <p className="mt-3">Order Type:</p>

        <SelectType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
    </div>
  );
};

export default Card;
