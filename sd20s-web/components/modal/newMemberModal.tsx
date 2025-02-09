"use client"
import React from 'react';
// import Image from 'next/image';

const NewMemberModal = () => {
  return (
  <div className='justify-center items-center flex flex-col tight-spacing tracking-tighter '>
    <div className='justify-center items-center text-center uppercase tracking-tighter'>
    <div className='uppercase text-[17px]'>
      <div className= 'p-3 translate-y-20 -translate-x-2'>
        <input
          type='text'
          placeholder='PHONE NUMBER'
          className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md'
        >
        </input>
      </div>
    <div className= 'p-3 translate-y-20 -translate-x-2 '>
        <input
          type='text'
          placeholder='GOT THE SECRET CODE?'
          className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md'
          >
        </input>
      </div>
    </div>
      <div className='p-3 translate-y-20 -translate-x-2'>
        <button
          className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
        >
          <p className='uppercase text-[26px]'>submit</p>
        </button>
      </div>
    </div>
  </div>
  )

};
export default NewMemberModal;

