"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import lockGif from "../../../public/lockGif.gif";
import { AnimatePresence, motion } from "framer-motion";
import { useAccountModalContext } from "../../context/accountModalContext";


const NewMemberLoadingScreen = () => {
  // const [loading, setLoading] = useState(false);
  const {setShow, showNewMemberLoadingScreen, onClose } = useAccountModalContext();
  useEffect(() => {
  setShow(false);
   const disableScroll = setTimeout(() => {
     document.body.style.overflow = "hidden";
    }, 300);
    return () => {
      clearTimeout(disableScroll);
  };
  }, [setShow]);

  

  return (
    <>
    <div className="loading-screen">
    <AnimatePresence onExitComplete={() => onClose()}>
    {showNewMemberLoadingScreen  && ( 
       <motion.div
          key="new-member-loading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.3 }}
          className="justify-center items-center h-full p-5"
        >
        <div className="mt-20 loading-screen-content">
          <div>
            <Image 
              src={lockGif}
              alt="lock-gif"
              width={150}
              height={150}
            />
          </div>
          <div className="leading-tight uppercase text-[24px]">
            <h1>Unlocking Serect Shit...</h1>
            </div>
        </div>
       </motion.div>
    )} 
    </AnimatePresence>
    </div>
    </>
  );
};

export default NewMemberLoadingScreen;