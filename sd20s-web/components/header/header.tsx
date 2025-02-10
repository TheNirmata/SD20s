"use client"
import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import Account from './account';

//import AccountDropDownMenu from './dropdown-menu/accountDropDownMenu';

const Header = () => {
  return (
    // 'flex flex-row sticky top-0 w-full h-[115px] justify-center items-center rounded-t-xl bg-black space-x-5'
      <div  className='header flex flex-row'>
        <div className='p-5'>
            <Image
            src={IG} 
            alt='instagram-icon' 
            className='svg-white w-[24px] h-[25px]'
            />
        </div>
        <div className='justify-center items-center text-center space-x-10 w-80'>
          <h1 className='text-[20px]'> NOTHING BUT US </h1>
        </div>
        <Account />
      </div>
  );
};

export default Header;


