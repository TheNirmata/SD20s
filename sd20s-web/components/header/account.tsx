"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import { useModalContext } from '../context/masterModalContext';
import AccountModal from '../modal/accountModal';


const Account = () => {
  const { show, showModal } = useModalContext();
  const [newMember, setNewMember] = useState(false);

  const handleClick = () => showModal();


  return (
    <>
    <div className='p-5'> 
      <button onClick={handleClick}>
        <Image 
          src={account}
          alt='account-icon'
          className='w-[32px] h-[32px]'
          />
      </button>
    </div>
    {(show) &&  <AccountModal show={show} setShow={showModal} />}
    </>
  );
};


export default Account;