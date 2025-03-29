
"use client"
import React from 'react';
import Image from 'next/image';
import account from '../../public/account.svg';
import { useAccountModalContext } from '../context/accountModalContext';
import { motion, AnimatePresence } from 'framer-motion';
import ModalTemplate from '../modal/modalTemplate';
import { Modal, ModalContent, ModalBody, Button } from "@heroui/react"; //useDisclosure
import NewMemberModal from '../modal/new-member/newMemberModal';
import MemberModal from '../modal/returning-member/memberModal';
import ExistingMemberModal from '../modal/returning-member/existingMemberModal';
import LoadingScreen from '../modal/returning-member/loadingScreen';
import NewMemberLoadingScreen from '../modal/new-member/newMemberLoadingScreen';

const Account = () => {
  // const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const {
    // handleOpenModal,
    // handleCloseModal,

    //@ts-expect-error -ignore
    handleExistingMember,
    //@ts-expect-error -ignore
    handleMemberModal,
    authenticated,
    show, 
    setShow,
    isOpen, 
    onOpen, 
    onOpenChange, 
    showForm,
    setShowForm,
    showExistingMemberLoadingScreen,
    //@ts-expect-error -ignore
    showNewMemberLoadingScreen,
    shouldPreventReopen,
    isNewMember,
   } = useAccountModalContext();

  const handleOpenAccountModal = () => {
    if (authenticated) {
      handleMemberModal();
    }else{
      onOpen();
      //@ts-expect-error -should be true
      setShow(true);
      //@ts-expect-error -ignore
      setShowForm(false); // Ensure buttons are shown initially
      console.log('Account clicked', show, isOpen);
    }
  };

  const handleNewMember = () => {
    //@ts-expect-error -ignore
    setShowForm(true);
    // setContentType('newMember');
    console.log('New member clicked');
  };

  // const handleExistingMember = () => {
  //   console.log('is user authenticated = ', authenticated);
  //   setIsNewMember(false);
  //   //@ts-expect-error -ignore
  //   setShowForm(true);
  //   console.log('existing member clicked');
  // };


  return (
    <>
 <Button onPress={handleOpenAccountModal}>
      <Image 
        src={account}
        alt='account-icon'
        className='max-w-[32px] max-h-[32px]'
      />
    </Button>
    <Modal
      backdrop="opaque"
      classNames={{
        backdrop: "bg-black",
        base: "modal-container",
        closeButton: "hidden"
      }}
      isOpen={isOpen && !showNewMemberLoadingScreen && !shouldPreventReopen}
      onOpenChange={(open) => {
        if (!shouldPreventReopen) {
          //@ts-expect-error -ignore
          onOpenChange(open);
        }
      }}
      placement="center"
    >
      <ModalContent>
        <ModalBody>
          <ModalTemplate>
            <div className='sm:h-[467px] text-[24px] translate-x-2 justify-center items-center text-transform: uppercase tight-spacing tracking-tighter'>
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                  >
                    <div className='p-3 -translate-x-2 translate-y-5 justify-center items-center'>
                      <button 
                        className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
                        onClick={handleNewMember}
                      >
                        <span className='text-transform: uppercase tight-spacing tracking-tighter'>New Member</span>
                      </button>
                    </div>
                    <div className='p-3 -translate-x-2 translate-y-5'>
                      <button 
                        className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
                        onClick={handleExistingMember}
                      >
                        <span className='text-transform: uppercase tight-spacing tracking-tighter'>Returning Member</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                  >
                    {isNewMember ? (
                      <NewMemberModal />
                    ) : (
                      <ExistingMemberModal />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ModalTemplate>
        </ModalBody>
      </ModalContent>
    </Modal>
    {isNewMember && showNewMemberLoadingScreen && (
      <NewMemberLoadingScreen />
    )}
    {showExistingMemberLoadingScreen && (
      <LoadingScreen />
    )}
    {authenticated && !isNewMember &&  (
      <MemberModal />
    )}
  </>
  );
};

export default Account;