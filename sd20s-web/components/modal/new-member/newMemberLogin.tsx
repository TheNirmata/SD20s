"use client"
import React, { useState, useEffect } from 'react';
// import { Modal, ModalContent, Modalbody } from "@heroui/react";
import { AnimatePresence, motion } from 'framer-motion';
import { useAccountModalContext } from '../../context/accountModalContext';
import { Spacer } from "@heroui/react";
// import NewMemberLoadingScreen from "./newMemberLoadingScreen";
import { useRouter } from 'next/navigation';

const NewMemberLogin = () => {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { 
    isOpen, 
    show, 
    setShow, 
    onClose,
    shouldPreventReopen,
    isNewMember,
    setIsNewMember,
    setShouldPreventReopen, 
    setShowNewMemberLoadingScreen 
   } = useAccountModalContext();
  // const [loading, setShowNewMemberLoadingScreen] = useState(false);

  useEffect(()=>{
    if(!show) return;
    document.body.style.overflow = show ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    }

  },[show]);

  const handleSubmission = async () => {
    try {
      setSubmitted(true);
      setShouldPreventReopen(true);
      onClose(); // Explicitly close the modal
      setShow(false);
      setShowNewMemberLoadingScreen(true); // Show loading screen
      console.log('Submitting form...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await router.push("/Members");
      // const handleRedirect = () => {
        setTimeout(() => {
          console.log('Form submitted successfully');
          setShowNewMemberLoadingScreen(false); // Hide loading screen
        }, 3000);
      // };
      // handleRedirect();
    } catch (e) {
      console.error('Error submitting form', e);
      setSubmitted(false);
      setShowNewMemberLoadingScreen(false);
      // setTimeout(() => {
        setShouldPreventReopen(false);
      // }, 500);
      
    }finally {
      setSubmitted(false);
      setTimeout(() => {
        setShowNewMemberLoadingScreen(false);
      }
      , 3000);
      // setTimeout(() => {
        setShouldPreventReopen(false);
      // }, 500);
      setShow(false);
      onClose();
      setIsNewMember(false);
    }
  };
  

  return (
    <>
    <AnimatePresence>
      {/* {(!isNewMember) && ( */}
            <motion.div
            key="waitlist"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
            className="h-full p-5"
        >
          {isOpen && show  && ( 
                <>
                <div className='h-auto mt-3'>
                  <div className='pt-7 -translate-x-2 flex flex-col justify-cetner items-center text-[18px] text-center uppercase'>
                    <input
                      type='text'
                      placeholder='name'
                      className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
                    />
                  </div>
                  <div className='pt-2 -translate-x-2 text-[18px]'>
                    <input
                      type='text'
                      placeholder='birthday'
                      className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
                      />
                  </div>
                  <div className='pt-2 -translate-x-2 text-[18px]'>
                    <input
                      type='text'
                      placeholder='email'
                      className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
                      />
                  </div>
                <div className='translate-y-5 -translate-x-2 text-[18px] -mb-[165px]'>
                  <button
                    onClick={handleSubmission}
                    className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
                    >
                    <p className='uppercase text-[26px]'>submit</p>
                  </button>
                </div>
                </div>
                  </>      
                 )}
           </motion.div>
      {/* )} */}
       </AnimatePresence>
       <Spacer y={20} />
    </>
  );

};

export default NewMemberLogin;