"use client"

import React, { useEffect } from 'react';
// import Playlist from '../components/music/playlist';
import LandingBlock from '../components/landingPage/landingBlock';
import Header from '../components/header/header';
export default function Home() {
  useEffect(() => {
    document.title = 'SD20s';
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-2xl font-bold text-center sm:text-4xl">
      <div className='top-0 z-[9999]'>
          <Header/>
      </div>
      <div className='items-center'>
        {/* <div className='flex-grow z-1'> */}
          <LandingBlock />
        {/* </div> */}
      </div>
    </div>
  
  );
};