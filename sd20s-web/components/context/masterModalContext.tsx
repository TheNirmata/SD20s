"use client"
import React, { useState, ReactNode } from 'react';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import ModalContextProps from '../../interface/modal';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import softStar from '../../public/static-images/modal/soft-star.png';


export const MasterModalContext = React.createContext<ModalContextProps | null>(null);


export const useModalContext = () => {
  const context = React.useContext(MasterModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
};

export const ModalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<ReactNode | null>(null);
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const ModalTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <div className={`modal-overlay ${show ? 'active' : 'inactive'} flex flex-col justify-center items-center top-0 h-auto`}>
        {/*  bg-[#1A1A1A] w-[298px] h-[474px] rounded-lg border-2 border-[#606060] */}
        <div className='flex flex-col modal-container'> 
            <div className='modal-close-button'>
              <button onClick={closeModal}>
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
        
          <div className='m-5 items-center translate-y-10'>
            <Image
              src={softStar}
              alt='soft-star'
              className='w-[35px] h-[41px]'
              />
          </div>
        </div>
      </div>
    );
  };

  return (
    <MasterModalContext.Provider value={{ ModalTemplate, currentContent, setCurrentContent, closeModal, showModal, show }}>
      {children}
    </MasterModalContext.Provider>
  );
};
