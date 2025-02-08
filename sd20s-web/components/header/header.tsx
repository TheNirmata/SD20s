import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import account from '../../public/account.svg';

//import AccountDropDownMenu from './dropdown-menu/accountDropDownMenu';

const Header = () => {
  return (
    <div className='sticky top-0 w-full h-[115px] flex flex-col rounded-t-xl border-black bg-black items-center justify-center'>
      <div className='flex gap-16 items-center'>
        <div>
          <Image 
          src={IG} 
          alt='instagram-icon' 
          className='svg-white'
          />
        </div>
        <div className='text-normal tracking-tighter'>
        <h1 className='text-xl'> NOTHING BUT US </h1>
        </div>
        <div>
          <Image 
          src={account} 
          alt='instagram-icon' 
          className='w-30 h-31'
          />
        </div>

        {/* <span> <AccountDropDownMenu /> </span> */}

      </div>
    </div>
  );
};

export default Header; 
