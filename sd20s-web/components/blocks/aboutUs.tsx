import React from 'react'
import Image from 'next/image'
import aboutUsGloble from '../../../public/static-images/about-us-block-images/aboutUsGloble.png'
import collage from '../../../public/static-images/about-us-block-images/collage.png'




const AboutUs = () => {
  const sectionDespription = () => {
    return (
      <div className='w-[302.98px] h-[83.69px] text-center text-[10px] leading-tight'>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <br/>
      <p>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    )
  };

  return (
    <div className='relative z-10 flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl translate-y-16'>
      <div>
        <Image 
          src={aboutUsGloble}
          alt='about-us-globle'
          className='w-[151px] h-[151px]'
        />
      </div>
      <div className='p-5 m-5'>
        <h2 className='text-[36px] tracking-tight leading-none'>ABOUT US</h2>
      </div>
        {sectionDespription()}
      <div className='realtive translate-y-20'>
          <div>
          <Image 
            src={collage}
            alt='collage'
            className='w-[390px] h-[585.98px]'
          />
        </div>
      </div>
      <div className='translate-y-32'>
        {sectionDespription()}
      </div>
    </div>
  )

};
export default AboutUs