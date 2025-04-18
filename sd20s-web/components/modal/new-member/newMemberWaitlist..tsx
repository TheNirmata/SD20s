"use client"
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'motion/react';
import Image from 'next/image';
import softBlur from '../../../public/static-images/modal/soft-blur.png';
import WaitlistConfirmation from './waitListConfirmation';
import { useAccountModalContext } from '../../context/accountModalContext';

// interface NewMemberWatilistProps { 
//   show: boolean, 
//   setShow: (show: boolean) => void
// }

const NewMemberWaitlist = () => { //React.FC<NewMemberWatilistProps>
  const [confirm, setConfirm] = useState(false);
  const { show, setShow } = useAccountModalContext();
  // const [data, setData] = useState({
  //   name: '',
  //   birthday: '',
  //   email: ''})
  
  const handleConfirmation = () => {
    //@ts-expect-error -should have true
    setShow(true);
    setConfirm(true);
  };

  // const handleLoginInput = () => {};
  return (
    <>
      <AnimatePresence>
        <motion.div
            key="waitlist"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
            className="h-full"
        >
          { show && ( 
                <>
                {!confirm ? (
                  <>
                  <div className='justify-center mt-5 mr-5'>
                    <h2 className=''>Join The Waitlist</h2>
                  </div>

                <div className='flex flex-col relative mt-5'>
                  <div className='justify-center items-center text-center custom-list li text-[13px] z-30 w-[202.42px] h-[89px]'>
                    <ul className='translate-x-5 -translate-y-4 customise-list li'>
                      <li> Priority Tickets </li>
                      <li> Song Requests </li>
                      <li> Exclusive Access </li>
                      <ul> + Much More </ul>
                    </ul>
                  </div>
                  <div className='-z-10 -translate-y-32'>
                    <Image
                      src={softBlur}
                      alt='soft-blur'
                      className='w-[260.42px] h-[165px]'
                      />
                  </div>
                </div>
                <div className='-translate-y-40'>
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
                <div className='translate-y-5 -translate-x-2 text-[18px] -mb-[165px]'>
                  <button
                    onClick={handleConfirmation}
                    className="bg-white border-white rounded-md text-black w-[256px] h-[47px]"
                    >
                    <p className='uppercase text-[26px]'>submit</p>
                  </button>
                </div>
                </div>
                  </>
                ):(
                    //@ts-expect-error -ignore
                  <WaitlistConfirmation show={show} setShow={setShow} />
                )}

                </> 
              
              )}
        </motion.div>
        </AnimatePresence>
    </>
  )
};

export default NewMemberWaitlist;



