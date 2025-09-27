import React from 'react';
import dollarImg from '../assets/dollar 1.png'
import navImg from '../assets/logo.png'

const Navbar = ({availableBalance}) => {
    return (
        <div>
            <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-2">{availableBalance}</span>
          <span className="mr-2">Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
        </div>
    );
};

export default Navbar;