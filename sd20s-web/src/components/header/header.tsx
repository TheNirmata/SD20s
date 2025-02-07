import React from 'react';
import Image from 'next/image';
import IG from '../../../public/igIcon.svg';
import account from '../../../public/account.svg';

const Header = () => {
  return (
    <div className='sticky top-0  mt-2 w-96 h-20 border-2 rounded-md border-black flex flex-col bg-black'>
      <div className='flex gap-16 mt-5 items-center justify-center'>
        <div>
          <Image 
          src={IG} 
          alt='instagram-icon' 
          className='svg-white'
          />
        </div>
        <div className='font-bold tracking-tighter'>
        <h1> NOTHING BUT US </h1>
        </div>
        <div>
          <Image 
          src={account} 
          alt='instagram-icon' 
          className='w-30 h-31'
          />
        </div>
      </div>
    </div>
  );
};

export default Header; 
