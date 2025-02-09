"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import { useModalContext } from '../context/masterModalContext';
import AccountModal from '../modal/accountModal';


const Account = () => {
  const { show, showModal } = useModalContext();
  const handleClick = () => {
    showModal();
    console.log('account button clicked');
  };


  return (
    <>
    <div className='p-5'> 
      <button onClick={handleClick}>
        <Image 
          src={account}
          alt='account-icon'
          className='w-[30px] h-[30px]'
          />
      </button>
    </div>
    {(show) &&  <AccountModal show={show} setShow={showModal} />}
    </>
  );
};


export default Account;