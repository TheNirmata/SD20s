"use client"
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "motion/react"
import ModalTemplateProps from '../../interface/modal';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';
// import styles from './modal.module.css';
import { Spacer } from "@heroui/react";

import account from '../../public/account.svg';


import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  // Checkbox,
  // Input,
  // Link,
} from "@heroui/react";


//@ts-expect-error - ignore
//props are coming from Account component
const ModalTemplate = ({ show, close, children }: ModalTemplateProps) => {
  // const { onClose } = useDisclosure(); //isOpen, onOpen, 
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
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

  
  // const transition =  {
  //   duration: 0.3,
  //   ease: 'easeInOut',
  // }
  
  // const handleModalClose = () => {
  //   close();
  //   console.log("Closing modal... triggering fade-out");
  //   setTimeout(() => onClose(), 300);
  //   // setShowForm(false);
  // };

  return (
    <>
      <Button color="secondary" onPress={onOpen}>
        <Image 
          src={account}
          alt="account-icon"
        />
      </Button>
    {isOpen && ( 
      <div className="flex flex-col justify-center items-center">
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-10 px-5",
          backdrop: "bg-black backdrop-opacity-20",
          base: "modal-container",
          closeButton: "hidden"
         }} 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        // closeButton
      >
        <ModalContent>
          {(onClose) => (
            <>
                <ModalHeader className="flex flex-col gap-1 relative ">
                <div className="absolute w-full h-full ">
                    <Button
                      onPress={onClose}
                      className="absolute top-4 right-4 text-white text-2xl"
                    >
                      ×
                    </Button>
                  </div>
                  <div className='items-center'>
                    <div className='pt-5'>
                        <Image
                          src={waitlistHeading}
                          alt='waitlist-heading'
                          className='w-[370px] h-[100px]'
                        />
                      </div>
                      <div className=' translate-y-5 justify-center items-center mt-5 text-[20px] uppercase text-center leading-tight'>
                        <h3>your next event awaits...</h3>
                      </div>
                  </div>
                </ModalHeader>
                <ModalBody className="justify-center items-center">
                {children}
                </ModalBody>
                <ModalFooter>
                  <Spacer y={10}/>
                  <div className='relative soft-star-container -translate-x-28'>
                      <Image
                        src={softStar}
                        alt='soft-star'
                        className='w-[35px] h-[41px]'
                      />
                  </div>
                </ModalFooter>
                <Spacer y={10}/>
              </>
           )} 
        </ModalContent>
      </Modal>

      </div>
    )}
    </>
    // <>
    //   <Modal isOpen={show} onClose={handleModalClose} size="lg">
    //     <ModalContent>
    //       <AnimatePresence mode="wait" onExitComplete={() => console.log("Modal fully closed!")}>
    //         {show && (
    //           <motion.div
    //             key="modal"
    //             className={`${styles['modal-overlay']}`}
    //             initial={{ opacity: 0, visibility: 'hidden' }}
    //             animate={{ opacity: 1, visibility: 'visible' }}
    //             exit={{ opacity: 0, visibility: 'hidden', transition: { duration: 0.3 } }}
    //             transition={transition}
    //           >
    //             <div className='flex flex-col modal-container -translate-y-10'>
    //               <ModalHeader>
    //                 <div className='modal-close-button translate-x-24'>
    //                   <Button onPress={handleModalClose}>
    //                     <Image
    //                       src={xIcon}
    //                       alt='x-icon'
    //                       className='w-[15px] h-[15px]'
    //                     />
    //                   </Button>
    //                 </div>
    //               </ModalHeader>
    //               <ModalBody>
    //                 <div className='items-center'>
    //                   <div className='pt-5'>
    //                     <Image
    //                       src={waitlistHeading}
    //                       alt='waitlist-heading'
    //                       className='w-[370px] h-[100px]'
    //                     />
    //                   </div>
    //                   <div className=' translate-y-5 justify-center items-center mt-5 text-[20px] uppercase text-center leading-tight'>
    //                     <h3>your next event awaits...</h3>
    //                   </div>
    //                 </div>
    //                 {/* <div className="relative h-auto w-auto translste-x-30"> */}
    //                 {children}
    //                 {/* </div> */}
    //                 <div className='relative soft-star-container translate-x-28'>
    //                   <Image
    //                     src={softStar}
    //                     alt='soft-star'
    //                     className='w-[35px] h-[41px]'
    //                   />
    //                 </div>
    //               </ModalBody>
    //             </div>
    //           </motion.div>
    //         )}
    //       </AnimatePresence>
    //     </ModalContent>
    //   </Modal>
    // </>
  );
};

export default ModalTemplate;

