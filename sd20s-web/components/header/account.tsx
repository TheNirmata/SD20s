"use client"
import React, { useState, useEffect }  from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import AccountModal from '../modal/accountModal';
import { useDisclosure, Button } from "@heroui/react";




const Account = () => {
  const [show, setShow] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenAccountModal = () => {
    onOpen();
    setShow(true);
    console.log('Account clicked', show, isOpen);
  };

  const handleCloseAccountModal = () => {
    onClose();
    setShow(false);
    console.log('Account modal closed', show, isOpen);
  };

  useEffect(() => {
    console.log('isOpen state changed:', isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log('show state changed:', show);
  }, [show]);


  return (
    <>
    <div className='translate-x-10 justify-end items-end p-5'> 
      <Button onPress={handleOpenAccountModal}>
        <Image 
          src={account}
          alt='account-icon'
          className='max-w-[32px] max-h-[32px]'
          />
      </Button>
    </div>
    {show && isOpen  &&  (
      <AccountModal 
        show={show} 
        setShow={setShow}
        isOpen={isOpen}
        onClose={handleCloseAccountModal} 
        onOpenChange={onOpen}
      />
      )}
    </>
  );
};


export default Account;