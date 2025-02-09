"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import IG from '../../public/igIcon.svg';
import LoginModal from '../modal/loginModal';
import { useModalContext } from '../context/modalContext';

// import AccountDropDownMenu from './dropdown-menu/accountDropDownMenu';

const Header = () => {
  const {  show, close, open, openModal } = useModalContext();

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
        <div className='p-5'> 
          <button onClick={openModal} >
                <Image 
                  src={account}
                  alt='account-icon'
                  className='w-[30px] h-[30px]'
                />
                {open && (
                  <div className={`modal-overlay ${!close && show ? 'active' : ''}`}>
                    <LoginModal show={open} setShow={openModal}/>
                  </div>
                )}
            </button>
        </div>
      </div>
  );
};

export default Header; 