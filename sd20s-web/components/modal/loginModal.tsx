"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import waitlistHeading from '../../public/static-images/modal/waitlistHeading.png';
import xIcon from '../../public/static-images/modal/x-icon.png';
import softStar from '../../public/static-images/modal/soft-star.png';
import { useModalContext } from '../../components/context/modalContext';

interface LoginModalProps {
  show: boolean;
  setShow: (show: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ show, setShow }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { closeModal, ModalTemplate } = useModalContext();
 
 
  useEffect(() => {
    if (typeof window !== undefined) {
      const handleClickOutsideModal = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          closeModal();
      }
    }
      if (show) {
        // document.body.style.overflow = 'hidden';
        document.addEventListener('mousedown', handleClickOutsideModal);
      } else {
        // document.body.style.overflow = 'unset';
        document.removeEventListener('mousedown', handleClickOutsideModal);
      }
    };
  }, [show, setShow]);
  

  return (
    <ModalTemplate>
      <div className='-translate-y-20'>
        <Image 
          src={waitlistHeading}
          alt='waitlist-heading'
          className='w-[380px] h-[100px]'
        />
      </div>
        <div className='font-transform: uppercase text-[15px] text-center leading-tight -translate-y-10'>
          <h2>your next event awaits...</h2>
      </div>

      <div className='flex flex-col items-center -translate-y-12 text-[15px] text-transform: uppercase tight-spacing tracking-tighter'>
        <div className='translate-y-16'>
          <button className='bg-white border-white rounded-md text-black w-[242px] h-[47px]'>
            <Link href='/new-member'>
            </Link>
            <text className='text-transform: uppercase tight-spacing tracking-tighter'>New Member</text>
          </button>
        </div>
        <div className='translate-y-20'>
        <button className='bg-white border-white rounded-md text-black w-[242px] h-[47px]'>
            <Link href='/returning-member'>
            </Link>
            <text className='text-transform: uppercase tight-spacing tracking-tighter'>Returning Memeber</text>
          </button>
        </div>
      </div>
      <div className='translate-y-20'>
        <Image
          src={softStar}
          alt='soft-star'
          className='w-[35px] h-[41px]'
          />
      </div>
    </ModalTemplate>
  );

};

export default LoginModal;