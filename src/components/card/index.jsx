import React, { useState } from 'react';
import SelectType from './SelectType';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const Card = ({ item }) => {
  const [selectedType, setSelectedType] = useState(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addToCart({item,selectedType}))
    setSelectedType(null);
  };

  return (
    <div className="bg-black/20 border border-white/50 rounded-3xl flex pr-5 pl-3 py-[30px] gap-4 md:gap-8">
      <div className="flex items-center">
        <img
          className="w-28 md:w-40 drop-shadow-2xl "
          src={item.image}
          alt=""
        />
      </div>
      <div className=" flex-1">
        <h2 className="text-[24px] font-medium">{item.name}</h2>
        <p className="mt-5">Order Type:</p>

        <SelectType
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />

        <div className="mt-6 flex justify-between">
          <p className="text-lg">₺{item.price} / scoop</p>

          <button
            onClick={handleClick}
            className={`border py-1 px-3 rounded-md transition hover:bg-white/30 ${
              !selectedType && 'invisible'
            } `}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
