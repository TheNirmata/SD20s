"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import IG from '../../public/igIcon.svg';
import Account from './account';


const Header = () => {  
  const [newMember, setNewMember] = useState(false);

  // const openModal = () => {
  //   setOpen(!open);
  //   console.log('account button clicked')
  // };


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
          <h1 className='text-[18px] tight-spacing font-bold'> NOTHING BUT US </h1>
        </div>
        <Account />
      </div>
  );
};

export default Header;


