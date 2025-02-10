"use client"
import React, { useState, useEffect } from 'react';
import  ModalTemplateProps  from '../../interface/modal';
// import  ModalContextProps  from '../../interface/modal';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';
// import { useModalContext } from '../context/masterModalContext';

  
//@ts-expect-error - ignore
const ModalTemplate = ({ show, close, children }: ModalTemplateProps) => { //{sh
  return (
    <>
      {show && (
        <div className={`modal-overlay ${show ? 'active' : 'inactive'}`}>
        <div className='flex flex-col modal-container'> 
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
                    className='w-[380px] h-[100px]'
                    />
                </div>
                  <div className='mt-5 text-[20px] uppercase text-center leading-tight'>
                    <h2>your next event awaits...</h2>
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