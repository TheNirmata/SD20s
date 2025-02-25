"use client"
import React, { useState, useEffect, useRef } from 'react';
import  ModalTemplateProps  from '../../interface/modal';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';
// import "./modal.module.css";
  
//@ts-expect-error - ignore
//props are coming from Account component
const ModalTemplate = ({ show, setShow, close, children }: ModalTemplateProps) => { 
    // const modalRef = useRef<HTMLDivElement>(null);
    // const [isVisible, setIsVisible] = useState(false);

    // useEffect(() => {
    //     if (show) {
    //         setIsVisible(true);
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         setTimeout(() => setIsVisible(false), 300); // Delay hiding for fade-out effect
    //         document.body.style.overflow = 'unset';
    //     }
    // }, [show]);

    // useEffect(() => {
    //     const handleClickOutsideModal = (event: MouseEvent) => {
    //         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
    //             setShow(false);
    //         }
    //     };

    //     if (show) {
    //         document.addEventListener('mousedown', handleClickOutsideModal);
    //     }

    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutsideModal);
    //     };
    // }, [show, setShow]);

    // if (!isVisible) return null;
  
  return (
    <div className={`modal-overlay ${show ? 'active' : ''}`}>
    {/* <> */}
      {/* {show && ( */}
        <div className='flex flex-col modal-container -translate-y-13'> 
            <div className = 'modal-close-button translate-x-32'>
              <button onClick={close}>
                <Image 
                  src={xIcon}
                  alt='x-icon'
                  className='w-[15px] h-[15px]'
                  />
              </button>
            </div>
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
    {/* )} */}
    {/* </> */}
    </div>
  );
};


export default ModalTemplate;