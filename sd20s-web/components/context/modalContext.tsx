"use client"
import React, { useState, createContext, ReactNode } from 'react';
import Image from 'next/image';
import xIcon from '../../public/static-images/modal/x-icon.png';
import ModalContextProps from '../../interface/modal';


export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
export const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }
  return context;
}

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(true);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const closeModal = () => setClose(false);

  const handleCloseModal = () => {
    console.log('modal should close');
    setClose(true);
    setTimeout(() => {
      setShow(false);
    }, 300);
  };

  const openModal = () => {
    setOpen(!open);
    setShow(true)
    setClose(false);
    console.log('account button clicked')
  };



  const ModalTemplate: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <>
        {(show || close) && (
          <div className={`modal-overlay ${show && !close ? 'active' : ''} -translate-y-12`}>
            <div className='flex flex-col justify-center items-center bg-[#1A1A1A] w-[298px] h-[474px] rounded-lg border-2 border-[#606060]'>
              <div className='relative flex flex-row translate-x-32 -translate-y-20'>
                <button onClick={handleCloseModal}>
                  <Image 
                    src={xIcon}
                    alt='x-icon'
                    className='w-[15px] h-[15px]'
                  />
                </button>
              </div>
              {children}
            </div>
          </div>
        )}
      </>
    );
  };


  return (
    <ModalContext.Provider value={{ 
      show, 
      setShow, 
      close, 
      open,
      setOpen,
      setClose, 
      closeModal, 
      openModal,
      ModalTemplate,
      handleCloseModal
      }}>
      {children}
    </ModalContext.Provider>
  );
};


export default ModalContextProvider;