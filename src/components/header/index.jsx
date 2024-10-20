import React from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" flex justify-between items-center fs-5">
      <div className="flex gap-[18px] items-center ">
        <img
          className="size-[45px] lg:size-[55px] 2xl:size-[78px]"
          src="/cone1.svg"
          alt=""
        />
        <h2 className="font-black max-sm:hidden ">
          Drop <br /> Cream
        </h2>
      </div>

      <nav className="flex items-center gap-[10px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[50px]">
        <Link to="/">Home</Link>
        <Link to="/" className=" whitespace-nowrap">
          About Us
        </Link>
        <Link to="/">Nearby</Link>
        <Link to="/">
          <img className="size-4 2xl:size-8" src="/search.svg" alt="" />
        </Link>
      </nav>

      <button>
        <CgMenuRightAlt className='size-6 2xl:size-8' />
      </button>
    </header>
  );
};

export default Header;
