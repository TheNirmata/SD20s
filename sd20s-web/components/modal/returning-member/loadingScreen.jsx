"use client"
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import lockGif from "../../../public/lockGif.gif";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   setLoading(true);
   document.body.style.overflow = "hidden";
  }, []);

  return (
    // <div className="fixed inset-0 flex justify-center items-center"> 
      <div className="loading-screen" >
      <AnimatePresence>
        {loading && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="loading-screen-content"
            >
            <div className="flex flex-col -mt-20 items-center">
              <div>
                <Image src={lockGif} alt="Loading" width={100} height={100} />
              </div>
            <div>
              <p className="text-lg text-gray-700">Welcome Back...</p>
            </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  // </div>
  );
};

export default LoadingScreen;