import React from 'react';
import HeroCard from './HeroCard';
import HeroBrand from './HeroBrand';

const Hero = () => {
  return (
    <div className="mt-[30px] 2xl:mt-[110px] grid lg:grid-cols-2 gap-[50px]">
      <div>
        <HeroBrand />
      </div>

      <div>
        <HeroCard />
      </div>
    </div>
  );
};

export default Hero;
