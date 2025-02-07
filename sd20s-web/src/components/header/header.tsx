import React from 'react';
import Image from 'next/image';
import IG from '../../../public/igIcon.svg';
import account from '../../../public/account.svg';

const Header = () => {
  return (
    <div className='w-[420px] h-[115px] -translate-y-80 -mt-20 rounded-t-xl border-black flex flex-col bg-black items-center justify-center'>
      <div className='flex gap-16 items-center'>
        <div>
          <Image 
          src={IG} 
          alt='instagram-icon' 
          className='svg-white'
          />
        </div>
        <div className='tracking-tighter'>
        <h1 className='text-xl'> NOTHING BUT US </h1>
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
