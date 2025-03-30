"use client"
import React from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import Account from './account';
// import MemberModal from '../modal/returning-member/memberModal';
// import { useAccountModalContext } from '../context/accountModalContext';

//import AccountDropDownMenu from './dropdown-menu/accountDropDownMenu';

const Header = () => {
  // const { handleMemberModal } = useAccountModalContext();
  return (
    // 'flex flex-row sticky top-0 w-full h-[115px] justify-center items-center rounded-t-xl bg-black space-x-5'
      <div className='header flex flex-row p-10'>
        <div className='justify-start'>
            <Image
            src={IG} 
            alt='instagram-icon' 
            className='svg-white max-w-[32px] max-h-[32px]'
            />
        </div>
        <div className=' translate-x-4 justify-center items-center text-center space-x-10 w-80'>
          <h1 className='text-[20px]'> NOTHING BUT US </h1>
        </div>
        <div className="justify-end translate-x-6 translate-y-1">
        <Account />
        
        </div>
      </div>

  );
};

export default Header;



