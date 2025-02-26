"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ModalTemplate from './modalTemplate';
import NewMemberModal from './new-member/newMemberModal';
import ExistingMemberModal from './returning-member/existingMemberModal';
import LoadingScreen from './returning-member/loadingScreen';

interface LoginModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  isNewMember: boolean;
  setIsNewMember: (isNewMember: boolean) => void;
};

const AccountModal: React.FC<LoginModalProps> = ({ show, setShow }) => {
  const [showForm, setShowForm] = useState(false);
  const [isNewMember, setIsNewMember] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);


  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show, showForm, isNewMember, ]);

  const handleNewMember = () => {
    setIsNewMember(true);
    setShowForm(true);
    console.log('New member clicked');
  };

  const handleExistingMember = () => {
    setIsNewMember(false);
    setShowForm(true);
    console.log('existing member clicked');
  };

  const handleCloseModal = () => {
    setShow(false); // Trigger fade-out animation
  };

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}
      <AnimatePresence mode="wait" onExitComplete={() => console.log("Modal fully closed!")}>
        {show && (
          <ModalTemplate show={show} setShow={setShow} close={handleCloseModal}>
            <div className='sm:h-[467px] text-[24px] translate-x-2 justify-center items-center text-transform: uppercase tight-spacing tracking-tighter'>
              <AnimatePresence mode="wait">
                {!showForm ? (
                  <motion.div
                    key="buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
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
                        <span className='text-transform: uppercxase tight-spacing tracking-tighter'>Returning Member</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    {isNewMember ? (
                      <NewMemberModal show={show} setShow={setShow} isGoingToNewMemberLogin={true} />
                    ) : (
                      <ExistingMemberModal show={show} setShow={setShow} setShowLoadingScreen={setShowLoadingScreen} />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ModalTemplate>
        )}
      </AnimatePresence>
    </>
  );
};

export default AccountModal;

