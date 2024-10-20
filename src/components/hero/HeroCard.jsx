import React from 'react';

const HeroCard = () => {
  return (
    <div className="flex gap-6">
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
        <p className="mt-4">
          I tried the vanilla ice cream, and it was absolutely delicious! The
          flavor was rich and creamy, but I wish it had just a bit more
          toppings. Overall, I'd give it 4.5 stars.
        </p>
      </div>
      <img src="/dots.svg" alt="" />
    </div>
  );
};

export default HeroCard;
