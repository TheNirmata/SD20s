"use client"
import React from 'react';

const NewMemberLogin = () => {
  return (
      <>
        <div className='pt-7 -translate-x-2 flex flex-col justify-cetner items-center text-[18px] text-center uppercase'>
          <input
            type='text'
            placeholder='name'
            className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
          />
        </div>
        <div className='pt-2 -translate-x-2 text-[18px]'>
          <input
            type='text'
            placeholder='birthday'
            className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
          />
        </div>
        <div className='pt-2 -translate-x-2 text-[18px]'>
          <input
            type='text'
            placeholder='email'
            className='text-center w-[260px] h-[35px] bg-[#272727] rounded-md' 
          />
        </div>
      <div className='translate-y-5 -translate-x-2 text-[18px]'>
        <button
          className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
          >
          <p className='uppercase text-[26px]'>submit</p>
        </button>
      </div>
    </>
  )
};

export default NewMemberLogin;