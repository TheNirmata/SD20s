"use client"
import React  from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import AccountModal from '../modal/accountModal';

const Account = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setTimeout(() => setShow(true), 10);
  };
  const showModal = () => {
    setShow(true);
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
    {(show) &&  <AccountModal show={show} setShow={showModal} />}
    </>
  );
};


export default Account;