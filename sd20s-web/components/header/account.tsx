"use client"
import React, { useState }  from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import AccountModal from '../modal/accountModal';

const Account = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setTimeout(() => setShow(true), 10);
  };

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
    {/* @ts-expect-error -ignore */}
    {(show) &&  <AccountModal show={show} setShow={setShow} />}
    </>
  );
};


export default Account;