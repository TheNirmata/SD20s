"use client"

import React, { useEffect } from 'react';
// import Playlist from '../components/music/playlist';
import LandingBlock from '../components/blocks/landingBlock';
import Header from '../components/header/header';
export default function Home() {
  useEffect(() => {
    document.title = 'SD20s';
  }, []);

  return (
    <div className="contianer min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 w-full">
          <Header/>
      </div>
      <div className=" flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl">
        {/* <div className='flex-grow z-1'> */}
          <LandingBlock />
        {/* </div> */}
      </div>
    </div>
  
  );
};