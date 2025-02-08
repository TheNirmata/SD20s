import React from 'react';
import Image from 'next/image';
import waitlistBlurText from '../../public/static-images/waitlist-block-images/waitlistBlur.png';
import lineImage from '../../public/static-images/waitlist-block-images/line.png';


const WaitlistBlock = () => {
  return (
    <div className='realtive z-10 flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl -translate-y-24'>
      <div className='-translate-y-6'>
        <Image 
          src={lineImage}
          alt='line-image'
          className='w-[337px] h-[1px]'
          />
      </div>
      <div className='translate-y-10'>
        <Image 
          src={waitlistBlurText}
          alt='waitlist-blur-text'
          className='w-[252px] h-[93.px]'
        />
      </div>
      <div>
        <button className='bg-white text-black border-1 border-white rounded-md w-[242px] h-[47px] translate-y-12'>
          <text className='text-3xl text-center tracking-tight leading-height'>SIGN UP</text>
        </button>
      </div>
      <div className='translate-y-24'>
        <Image 
          src={lineImage}
          alt='line-image'
          className='w-[337px] h-[1px]'
          />
      </div>
    </div>
  )

};

export default WaitlistBlock;