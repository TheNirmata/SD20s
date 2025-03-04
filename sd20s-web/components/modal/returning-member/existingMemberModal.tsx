"use client"
import React from 'react';
import { useAccountModalContext } from '../../context/accountModalContext';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import LoadingScreen from './loadingScreen';

// interface ExistingUserProps { 
  // show: boolean;
  // setShow: (show: boolean) => void;
  // setShowLoadingScreen: (any: boolean) => void;
  // showLoadingScreen: boolean;
  // setShowLoadingScreen: (value: boolean) => void;
// }

// React.FC<ExistingUserProps> 

const ExistingMemberModal = () => {
  // const { setShowLoading } = useLoading();
  const { show, setShow, showExistingMemberLoadingScreen, setshowExistingMemberLoadingScreen } = useAccountModalContext();
  const router = useRouter();
  const handleFinish = async () => {
    try { 
      setshowExistingMemberLoadingScreen(true);
      console.log("Submitting form...");
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted successfully");
      await router.replace('/Members');
      setTimeout(() => setShow(false), 3000);
    } catch(e) {
      console.error("Error submitting form", e);
    }
  };

  return (

      <>
      {showExistingMemberLoadingScreen && (<LoadingScreen />)}
      <AnimatePresence onExitComplete={() => setShow(false)}>
        {show && (
          <motion.div
          key="existingMember"
          initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="z-[-1]"
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