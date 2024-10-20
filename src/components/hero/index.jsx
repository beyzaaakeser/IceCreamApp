import React from 'react';
import HeroCard from './HeroCard';

const Hero = () => {
  return (
    <div className="mt-[30px] 2xl:mt-[110px] grid lg:grid-cols-2 gap-[50px]">
      

     <div>
      <HeroCard/>
     </div>
    </div>
  );
};

export default Hero;
