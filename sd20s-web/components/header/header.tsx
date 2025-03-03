"use client"
import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import Account from './account';

//import AccountDropDownMenu from './dropdown-menu/accountDropDownMenu';

const Header = () => {
  return (
    // 'flex flex-row sticky top-0 w-full h-[115px] justify-center items-center rounded-t-xl bg-black space-x-5'
      <div className='header flex flex-row p-10'>
        <div className=''>
            <Image
            src={IG} 
            alt='instagram-icon' 
            className='svg-white max-w-[24px] max-h-[25px]'
            />
        </div>
        <div className=' translate-x-8 justify-center items-center text-center space-x-10 w-80'>
          <h1 className='text-[20px]'> NOTHING BUT US </h1>
        </div>
       <Account />
      </div>
  );
};

export default Header;


