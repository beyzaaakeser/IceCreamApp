import React from 'react';

const Hero = () => {
  return (
    <div className="mt-[30px] 2xl:mt-[110px] grid lg:grid-cols-2 gap-[50px]">
      <div className="max-w-[660px] flex flex-col gap-[25px]">
        <h1 className=" fs-1  font-semibold">RedVelvet Scoop</h1>
        <p className="text-white/75 font-medium fs-5 ">
          A creamy, velvety ice cream blend inspired by the rich flavors of red
          velvet cake. Indulge in its smooth texture and sweet, tangy taste with
          every scoop!
        </p>
        <div className="flex gap-10">
          <button className="w-[40%] py-4 border rounded-[10px] fs-5 cursor-pointer hover:bg-white/30 transition">
            Order
          </button>
          <button className="w-[40%] py-4 bg-white/15 rounded-[10px] fs-5 cursor-pointer hover:bg-white/30 transition">
            Booking
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
