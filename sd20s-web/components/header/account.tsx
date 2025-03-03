"use client"
import React, { useState, useEffect  }  from 'react';
// import Image from 'next/image';
// import account from '../../public/account.svg';
import AccountModal from '../modal/accountModal';

import { useDisclosure } from "@heroui/react";





const Account = () => {
  const {isOpen, onOpen } = useDisclosure();
  const [show, setShow] = useState(false);

  useEffect(() => {
        onOpen();
    setShow(true);
  },[onOpen, show]);


  return (
    <>
      {/* <Button onPress={handleClick}>
        <Image 
          src={account}
          alt='account-icon'
          className='w-[32px] h-[32px]'
          />
      </Button> */}
    {/* @ts-expect-error -ignore */}
    {(show && isOpen) &&  <AccountModal show={show} setShow={setShow} isOpen={isOpen} onOpen={onOpen}/>}
    </>
  );
};


export default Account;
