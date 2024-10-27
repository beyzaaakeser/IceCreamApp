import React from 'react';

const TrendButton = () => {
  return (
    <div className="flex justify-end ">
      <button
        className=" relative flex items-center gap-2 text-black text-[20px]  lg:text-[24px]  
    font-semibold bg-white rounded-full px-4 pr-12 py-1 hover:bg-white/75 transition "
      >
        Trending
        <img
          className="absolute end-0 bottom-1 size-11"
          src="/fire.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default TrendButton;
