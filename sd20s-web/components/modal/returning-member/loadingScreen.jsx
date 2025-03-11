"use client"
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import lockGif from "../../../public/lockGif.gif";


const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }
  , 3000);
  return () => {
    document.body.style.overflow = "auto";
    
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-28 mt-96 loading-screen-content justify-center"
          >
            <div className="flex flex-col -mt-20 items-center leading-none">
              <div>
                <Image src={lockGif} alt="Loading" width={141} height={123} />
              </div>
              <div>
                <p className="-mt-10 text-[26px] text-white">Welcome Back...</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;