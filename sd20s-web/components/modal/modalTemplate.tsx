
"use client"
import React, { useEffect, ReactNode } from 'react';
// import ModalTemplateProps from '../../interface/modal';
import Image from 'next/image';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';
import { Spacer } from "@heroui/react";
import { useAccountModalContext } from '../context/accountModalContext';
// import ReactNode from 'react';

import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,

} from "@heroui/react";

//props are coming from Account component
const ModalTemplate = ({ children }: { children: ReactNode }) => {
  const { show, isOpen, handleCloseModal } = useAccountModalContext();

  useEffect(() => {
    if (!show) return;
    
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return (
    <>
      {isOpen && ( 
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <ModalContent>
              {/* {(onClose) =>  ( */}
                <>
                <div className="absolute w-full h-full ">
                  <Button
                    onPress={handleCloseModal}
                    className="h-auto translate-x-2 absolute top-4 right-4 text-white text-2xl"
                  >
                    ×
                  </Button>
                </div>
                  <ModalHeader className="flex flex-col gap-1 relative -trsnalate-y-20">
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
                  <ModalBody className="modal-template justify-center items-center">
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
              {/* )}  */}
            </ModalContent>
        </div>
      )}
    </> 
  );
};

export default ModalTemplate;

