"use client"
import React, { useEffect, useRef } from 'react';
import  ModalTemplateProps  from '../../interface/modal';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';


  
//@ts-expect-error - ignore
const ModalTemplate = ({ show, setShow, close, children }: ModalTemplateProps) => { 
    const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setTimeout(() => setShow(false), 300);
      }
      };
      if (show) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutsideModal);
      } else {
        document.body.style.overflow = 'unset';
        document.removeEventListener('mousedown', handleClickOutsideModal);
      }
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('mousedown', handleClickOutsideModal);
      };
  }, [show, setShow]);
  
  if (!show) return null;
  return (
    <>
      {show && (
        <div className={`modal-overlay ${show ? 'active' : 'inactive'}`}>
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
      </div>
    )}
    </>
  );
};


export default ModalTemplate;