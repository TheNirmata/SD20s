"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import lockGif from "../../../public/lockGif.gif";
import { AnimatePresence, motion } from "framer-motion";
import { useAccountModalContext } from "../../context/accountModalContext";


const NewMemberLoadingScreen = () => {
  // const [loading, setLoading] = useState(false);
  const {setShow, onClose } = useAccountModalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const disableScroll = setTimeout(() => {
      document.body.style.overflow = "hidden";
      setShow(false);
      setLoading(false);
    }, 3000);
    return () => {
      clearTimeout(disableScroll);
      document.body.style.overflow = "auto";
  };
  }, [setShow]);

  

  return (
    <AnimatePresence onExitComplete={() => onClose()}>
      {loading&& (
        <motion.div
          key="loading-screen-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
        >
          <motion.div
            key="new-member-loading"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-60 justify-center items-center flex flex-col"
          >
            <div className="loading-screen-content leading-none">
              <div>
                <Image 
                  src={lockGif}
                  alt="lock-gif"
                  width={150}
                  height={150}
                />
              </div>
              <div className="leading-tight uppercase text-[24px]">
                <h1>Unlocking Secret Shit...</h1>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewMemberLoadingScreen;