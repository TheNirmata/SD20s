"use client"
import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAccountModalContext } from '../../context/accountModalContext';
import { Spacer } from "@heroui/react";
import { useRouter } from 'next/navigation';


const NewMemberLogin = () => {
  const router = useRouter();
  const { 
    isOpen, 
    show, 
    setIsNewMember,
    //@ts-expect-error -ignore
    handleRegister,
    handleCloseModal,
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
      //@ts-expect-error -ignore
      setIsNewMember(false);
      handleRegister();
      handleCloseModal();
      console.log('Submitting form...');
      await new Promise((resolve) => setTimeout(resolve, 300)); 
      await router.push("/Members");
      // setTimeout(() => {
        console.log('Form submitted successfully');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Small delay to ensure modal closes first
        //@ts-expect-error -ignore
        setShowNewMemberLoadingScreen(false); // Hide loading screen
      // }, 1300);
    } catch (e) {
      console.error('Error submitting form', e);
      //@ts-expect-error -ignore
      setShowNewMemberLoadingScreen(false);
        //@ts-expect-error -ignore
        setShouldPreventReopen(false);
      
    }};
  

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