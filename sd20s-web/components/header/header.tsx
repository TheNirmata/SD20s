"use client"
import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import account from '../../public/account.svg';

const Header = () => {
  return (
      <div  className='flex flex-row sticky top-0 w-full h-[115px] justify-center items-center rounded-t-xl bg-black space-x-10'>
        <div className='p-5'>
          {/* className='-translate-x-10' */}
          {/* <button> */}
            <Image
            src={IG} 
            alt='instagram-icon' 
            className='svg-white'
            />
          {/* </button> */}
        </div>
        <div className='justify-center items-center text-center'>
          <h1 className='text-[20px] tight-spacing'> NOTHING BUT US </h1>
        </div>
        <div className='p-5'> 
          {/* className='translate-x-10' */}
          <Image 
          src={account} 
          alt='instagram-icon' 
          className='w-[30px] h-[31px]'
          />
        </div>
      </div>
  );
};

export default Header; 