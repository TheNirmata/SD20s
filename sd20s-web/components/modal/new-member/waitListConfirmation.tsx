"use client"
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'motion/react';


//@ts-expect-error - ignore
const WaitlistConfirmation = ({ show, setShow }) => {

  const handleFinish = () => {
    setTimeout(() =>  {
      setShow(false);
    }, 300);
  };

  if (!show) return null;

  return (
    <>
      {/* <AnimatePresence mode="wait" onExitComplete={() => console.log("Modal fully closed!")}>                   */}
        {show && (
                // <motion.div
                //     key="confimentation"
                //     initial={{ opacity: 0 }}
                //     animate={{ opacity: 1 }}
                //     exit={{ opacity: 0 }}
                //     transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
                //   > 
                  <div>
                      <div className="flex flex-col mr-5 justify-center items-center text-center">
                        <div className="mt-5 w-[305px] h-[215px]">
                        <h1 className="text-[36px] text-center"> {"WAITLIST REQUEST CONFIMED"} </h1>
                        </div>
                        <div className="-translate-y-20 w-[185px] h-[24px] text-center text-[18px] text">
                          <h2> {"We'll send you a test once you're off the waitlist"}</h2>
                        </div>
                        <div className=" -translate-y-10 w-[279px] h-[24px] text-[18px]">
                          <h3>Are you with us?</h3>
                        </div>
                        <div>
                          <button 
                            type="button" 
                            onClick={handleFinish} 
                            className='bg-white border-white rounded-md text-black w-[242px] h-[47px]'
                            >
                            <span>Back to Home</span>
                          </button>
                        </div>
                      </div>
                    </div>
              // </motion.div>
            )}
      {/* </AnimatePresence> */}
    </>
  )
};

export default WaitlistConfirmation;