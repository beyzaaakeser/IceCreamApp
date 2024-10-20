import React from 'react';

const HeroCard = () => {
  return (
    <div>
      <div className="flex gap-6 ">
        <div className="bg-white p-[30px_25px_40px_30px] rounded-2xl text-black">
          <div className="flex gap-[20px]">
            <img src="/profile.png" alt="" />

            <div>
              <h3 className="text-[24px] font-semibold">Mustafa Keser</h3>
              <div className="flex gap-1">
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star4.png" alt="" />
                <img src="/Star5.svg" alt="" />
              </div>
            </div>
          </div>
          <p className="mt-4 lg:max-w-[276px]">
            I tried the vanilla ice cream, and it was absolutely delicious! The
            flavor was rich and creamy, but I wish it had just a bit more
            toppings. Overall, I'd give it 4.5 stars.
          </p>
        </div>
        <img src="/dots.svg" alt="" />
      </div>

      <div className="mt-[40px] lg:mt-[83px]">
        <h3 className="mb-4">Choose a Type:</h3>
        <div className="flex gap-10">
          <button className="cursor-pointer border border-white/50 bg-white/15 rounded-2xl p-3 hover:bg-white/40 transition ">
            <img src="/cup1.svg" />
          </button>
          <button className="cursor-pointer border border-white/50 bg-white/15 rounded-2xl p-3  hover:bg-white/40 transition">
            <img src="/cup2.svg" />
          </button>
          <button className="cursor-pointer border border-white/50 bg-white/15 rounded-2xl p-3  hover:bg-white/40 transition">
            <img src="/cup3.svg" />
          </button>
          <button className="cursor-pointer border border-white/50 bg-white/15 rounded-2xl p-4 hover:bg-white/40 transition ">
            <img src="/add.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
