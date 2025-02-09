"use client"
import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import Account from './account';


const Header = () => {  
  return (
      <div  className='flex flex-row sticky top-0 w-full h-[115px] justify-center items-center rounded-t-xl bg-black space-x-10'>
        <div className='p-5'>
            <Image
            src={IG} 
            alt='instagram-icon' 
            className='svg-white'
            />
        </div>
        <div className='justify-center items-center text-center'>
          <h1 className='text-[20px]'> NOTHING BUT US </h1>
        </div>
        <Account />
      </div>
  );
};

export default Header;


