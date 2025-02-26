"use client"
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import lockGif from "../../../public/lockGif.gif";

const LoadingScreen = () => {
  // const { showLoading } = useLoading();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" w-[100%] h-[100%] fixed inset-0 flex items-center justify-center bg-black z-[9999]"
        >
          <div className="flex flex-col items-center">
            <div>
              <Image src={lockGif} alt="Loading" width={100} height={100} />
            </div>
          <div>
            <p className="text-lg text-gray-700">Loading...</p>
          </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );


};

export default LoadingScreen;