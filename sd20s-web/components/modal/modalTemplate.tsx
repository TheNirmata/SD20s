"use client"
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "motion/react"
import ModalTemplateProps from '../../interface/modal';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';
import styles from './modal.module.css';

//@ts-expect-error - ignore
//props are coming from Account component
const ModalTemplate = ({ show, close, children }: ModalTemplateProps) => {
 
  useEffect(() => {
    if (!show) return;
    if (show) {
      // console.log(`this is show state from modaltemplate ${show}`)
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };

  }, [show]);

  // const handleModalClose = () => {
  //   console.log("Closing modal... triggering fade-out");
  //   setTimeout(() => setShow(false), 300);
  //   // setShowForm(false);
  // };

  const transition =  {
    duration: 0.3,
    ease: 'easeInOut',
    delay: 0.3
  }


  return (
    <>
    <AnimatePresence mode="wait" onExitComplete={() => console.log("Modal fully closed!")}>
    <motion.div
      key="modal"
      className={`${styles['modal-overlay']}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      >
      {show && (
          <div className='flex flex-col modal-container -translate-y-13'>
              <div className='modal-close-button translate-x-32'>
                <button onClick={ close }>
                  <Image
                    src={xIcon}
                    alt='x-icon'
                    className='w-[15px] h-[15px]'
                  />
                </button>
              </div>
              {/* </motion.div> */}
              <div className='items-center'>
                <div className='pt-5'>
                  <Image
                    src={waitlistHeading}
                    alt='waitlist-heading'
                    className='w-[370px] h-[100px]'
                    />
                </div>
                <div className='justify-center items-center mt-5 text-[20px] uppercase text-center leading-tight'>
                  <h3>your next event awaits...</h3>
                </div>
              </div>
                          
              {children}
              <div className='soft-star-container'>
                <Image
                  src={softStar}
                  alt='soft-star'
                  className='w-[35px] h-[41px]'
                  />
              </div>
            </div>
          )}
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default ModalTemplate;