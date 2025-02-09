"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useModalContext } from '../context/masterModalContext';
import NewMemberModal from './newMemberModal';
import ExistingMemberModal from './existingMemberModal';

interface LoginModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
  isNewMember: boolean;
  setIsNewMember: (isNewMember: boolean) => void;
};

const AccountModal: React.FC<LoginModalProps> = ({ show, setShow }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [next, setNext] = useState(false);
  const [showNewMemberForm, setShowNewMemberForm] = useState(false);
  const [isNewMember, setIsNewMember] = useState(false);
  const { ModalTemplate, setCurrentContent } = useModalContext(); 
 
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleClickOutsideModal = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          setNext(true);
          // closeModal();
      }
    }
      if (show) {
        document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutsideModal);
      } else {
        document.body.style.overflow = 'unset';
        document.removeEventListener('mousedown', handleClickOutsideModal);
      }
    };
  }, [show, next]);

  const handleNewMember = () => {
    setIsNewMember(true);
    setShowNewMemberForm(true);
    setCurrentContent(<NewMemberModal />);
    console.log('New member clicked');
  };

  const handleExistingMember = () => {
    setIsNewMember(false);
    setShowNewMemberForm(false);
    setCurrentContent(<ExistingMemberModal />);
    console.log('existing member clicked');
  };



  return (
    <>
    {(show) && (
      <div className={`modal-overlay ${show ? 'active' : 'inactive'} flex flex-col items-center top-0`}>
      <ModalTemplate>
        <div className=' translate-x-2 justify-center items-center text-[15px] text-transform: uppercase tight-spacing tracking-tighter'>
           {!showNewMemberForm ? (
            <>
             <div className='p-3 translate-y-20'>
             <button 
               className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
               onClick={handleNewMember}
               >
               <span className='text-transform: uppercase tight-spacing tracking-tighter'>New Member</span>
             </button>
           </div>
         <div className='p-3 translate-y-20'>
         <button 
           className='bg-white border-white rounded-md text-black w-[242px] h-[47px]' 
           onClick={handleExistingMember}
           >
             <span className='text-transform: uppercase tight-spacing tracking-tighter'>Returning Memeber</span>
           </button>
           </div>
           </>
           ) : (
            isNewMember ? <NewMemberModal /> : <ExistingMemberModal />
           )}

        </div>
    </ModalTemplate>
    </div>
    )}
  </>
  );

};

export default AccountModal;

