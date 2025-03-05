"use client"
import React, { useEffect } from 'react';
import { useAccountModalContext } from '../../context/accountModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
// import LoadingScreen from './loadingScreen';

const ExistingMemberModal = () => {
  const { 
    isOpen, 
    show, 
    setShow,
    handleCloseModal, 
    // showExistingMemberLoadingScreen, 
    setshowExistingMemberLoadingScreen 
  } = useAccountModalContext();

  const router = useRouter();
  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = show ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const handleFinish = async () => {
    try { 
      setShow(false); // Close the modal
      setshowExistingMemberLoadingScreen(true); // Show the loading screen
      console.log("Submitting form...");
      // Simulate form submission
      await router.replace('/Members');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const handleChangeComplete = () => {
        setShow(false);
        setTimeout(() => setshowExistingMemberLoadingScreen(false), 3000);
      };
  
      handleChangeComplete();
      console.log("Form submitted successfully");
      // setshowExistingMemberLoadingScreen(false); // Hide the loading screen
    } catch(e) {
      console.error("Error submitting form", e);
      setshowExistingMemberLoadingScreen(false); // Hide the loading screen in case of error
    }
  };

  return (
    <>
    {/* {showExistingMemberLoadingScreen && <LoadingScreen />} */}
      <AnimatePresence onExitComplete={handleCloseModal}>
        {isOpen && show && (
          <motion.div
            key="existingMember"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="z-50"
          >
            <div className='justify-center items-center flex flex-col tight-spacing tracking-tighter'>
              <div className='justify-center items-center text-center uppercase tracking-tighter'>
                <div className='uppercase text-[17px]'>
                  <div className='translate-y-10 -translate-x-2'>
                    <input
                      type='text'
                      placeholder='PHONE NUMBER'
                      className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md'
                    />
                  </div>
                </div>
                <div className='p-3 translate-y-10 -translate-x-2'>
                  <button
                    onClick={handleFinish}
                    className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
                  >
                    <p className='uppercase text-[26px]'>submit</p>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExistingMemberModal;