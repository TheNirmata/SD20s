"use client"
import React, { useState } from 'react';
import NewMemberLogin from './newMemberLogin';
// import Image from 'next/image';

const NewMemberModal = ({ show, setShow }) => {
  const [goToNewMemberLogin, setGoToNewMemberLogin] = useState(false);
  
  const handleNewMemberLogin = () => {
    setShow(true);
    setGoToNewMemberLogin(true);
  };

  return (
  <>
    {show && (
    <div className='justify-center items-center flex flex-col tight-spacing tracking-tighter'>
      {!goToNewMemberLogin ? (
        <div className='justify-center items-center text-center uppercase tracking-tighter'>
        <div className='uppercase text-[17px]'>
          <div className= 'p-3 translate-y-5 -translate-x-2'>
            <input
              type='text'
              placeholder='PHONE NUMBER'
              className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md'
            >
            </input>
          </div>
        <div className= 'p-3 translate-y-5 -translate-x-2 '>
            <input
              type='text'
              placeholder='GOT THE SECRET CODE?'
              className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md'
              >
            </input>
          </div>
        </div>
          <div className='p-3 translate-y-5 -translate-x-2'>
            <button
              className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
            >
              <p className='uppercase text-[26px]' onClick={handleNewMemberLogin}>submit</p>
            </button>
          </div>
        </div>
        
      ): (
        <NewMemberLogin />
      )}
      </div>
    )}
  </>
  )

};
export default NewMemberModal;

