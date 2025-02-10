"use client"
import React, { useState, useEffect, useRef } from 'react';
// import { useModalContext } from '../context/masterModalContext';
import ModalTemplate from './modalTemplate';
import NewMemberModal from './new-member/newMemberModal';
import ExistingMemberModal from './existingMemberModal';

interface LoginModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  isNewMember: boolean;
  setIsNewMember: (isNewMember: boolean) => void;
};

const AccountModal: React.FC<LoginModalProps> = ({ show, setShow }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [isNewMember, setIsNewMember] = useState(false);

 
  useEffect(() => {
    const handleClickOutsideModal = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShow(false);
        setShowForm(false);
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

  const handleNewMember = () => {
    setIsNewMember(true);
      setShowForm(true);
    // setCurrentContent(<NewMemberModal />);
    console.log('New member clicked');
  };

  const handleExistingMember = () => {
    setIsNewMember(false);
    setShowForm(true);
    // setCurrentContent(<ExistingMemberModal />);
    console.log('existing member clicked');
  };

  const handleModalClose = () => {
    // setShow(false);
    setTimeout(() => setShow(false), 300); // Delay to match transition time
    setShowForm(false);
 

  };


  return (
    <>
    {show && (
      <ModalTemplate show={show} close={handleModalClose}>
        <div className='sm:h-[467px] text-[24px] translate-x-2 justify-center items-center text-transform: uppercase tight-spacing tracking-tighter'>
           {!showForm ? (
            <>
             <div className='p-3 -translate-x-2 translate-y-5 justify-center items-center'>
             <button 
               className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
               onClick={handleNewMember}
               >
               <span className='text-transform: uppercase tight-spacing tracking-tighter'>New Member</span>
             </button>
           </div>
         <div className='p-3 -translate-x-2 translate-y-5'>
         <button 
           className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
           onClick={handleExistingMember}
           >
             <span className='text-transform: uppercase tight-spacing tracking-tighter'>Returning Memeber</span>
           </button>
           </div>
           </>
           ) : (
            // isNewMember && currentContent
            isNewMember ? <NewMemberModal show={show} setShow={setShow} isGoingToNewMemberLogin={true}/> : <ExistingMemberModal />
           )}
        </div>
    </ModalTemplate>
    )}
  </>
  );

};

export default AccountModal;

